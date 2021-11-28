import { useMetaMask } from 'metamask-react'
import { useEffect, useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import shajs from 'sha.js'
import './App.css'
import { ethers } from 'ethers'
import Azul from 'azul-nft'
import images from './images'

// TODO: Move expectedChainId to config file
const expectedChainId = '0x4e454152'
const auroraExplorer = 'https://explorer.mainnet.aurora.dev'

/// Custom URI parser (others were not working for me)
/// data:application/json;charset=UTF-8,%7B%22name%22%3A%22AZUL - 2%22,%22description%22%3A%22Aurora Edition - 2%22,%22image%22%3A%22ipfs://bafybeiebz2goc342lsjjzlyriterkufeypjxoykpddgazhw63wmc2ancvi/aurora.jpeg%22%7D
function parseUri(uri: string) {
    return JSON.parse(unescape(uri.split(',').slice(1).join(',')))
}

function LoginMetamask() {
    const { status, connect, chainId } = useMetaMask()

    useEffect(() => {
        if (status === 'notConnected') {
            connect()
        }
    })

    let message

    if (status === 'unavailable') {
        message = <a href="https://metamask.io/download">Install MetaMask</a>
    } else if (status !== 'connected') {
        message = <p>Connect to MetaMask</p>
    } else if (chainId !== expectedChainId) {
        // TODO: Switch automatically to aurora network
        //       https://docs.avax.network/build/tutorials/smart-contracts/add-avalanche-to-metamask-programmatically#adding-the-network
        //       https://docs.metamask.io/guide/rpc-api.html#wallet-addethereumchain
        message = (
            <p>
                Switch to MetaMask network to{' '}
                <a href="https://doc.aurora.dev/develop/networks">
                    Aurora Mainnet
                </a>
            </p>
        )
    }

    return (
        <div className="px-4 py-5 my-5 text-center">
            <h1 className="display-5 fw-bold">{message}</h1>
            <div className="col-lg-6 mx-auto"></div>
        </div>
    )
}

function GalleryComponent(props: { address: string; page: string }) {
    const [nfts, setNfts] = useState(new Map())
    const [nftsCount, setNftsCount] = useState(0)

    useEffect(() => {
        const fetchNfts = async () => {
            console.log('Fetching NFTs', props)
            const provider = new ethers.providers.Web3Provider(window.ethereum)
            const azul = Azul.contract(provider)

            const total = (
                await (props.page === 'gallery'
                    ? azul.totalSupply()
                    : azul.balanceOf(props.address))
            ).toNumber()

            for (let i = 0; i < total; i++) {
                let index = i

                console.log(`Fetching (${i + 1}/${total})`)

                const tokenId = (
                    await (props.page === 'gallery'
                        ? azul.tokenByIndex(index)
                        : azul.tokenOfOwnerByIndex(props.address, index))
                ).toNumber()

                console.log('Token ID:', tokenId)

                if (!nfts.has(tokenId)) {
                    console.log('Downloading metadata for Token ID:', tokenId)

                    const uri = await azul.tokenURI(tokenId)
                    const metadata = parseUri(uri)

                    if (images.has(metadata.image)) {
                        nfts.set(tokenId, {
                            name: metadata.name,
                            description: metadata.description,
                            image: images.get(metadata.image),
                            ready: true,
                        })

                        setNfts(nfts)
                        setNftsCount(nfts.size)

                        console.log({ nfts })
                    }
                }
            }
        }

        fetchNfts()
    })

    return (
        <div key={nftsCount}>
            <div className="row justify-content-center">
                {Array.from(nfts.entries())
                    .filter((entry) => entry[1].ready)
                    .map((entry) => (
                        <Card
                            style={{ width: '18rem' }}
                            className="m-2"
                            key={entry[0]}
                        >
                            <Card.Img variant="top" src={`${entry[1].image}`} />
                            <Card.Body>
                                <Card.Title>{entry[1].name}</Card.Title>
                                <Card.Text>{entry[1].description}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
            </div>
        </div>
    )
}

function Claim(props: { address: string; page: string }) {
    const [alert, setAlert] = useState({ variant: 'success', message: '' })
    const [passcode, setPasscode] = useState('')

    const AlertData = () =>
        alert.message === '' ? (
            <div />
        ) : (
            <div className="row justify-content-center mb-5">
                <Alert
                    variant={alert.variant}
                    className="col-lg-4 mt-2 hidden text-muted"
                    style={{
                        marginBottom: '1px',
                        height: '30px',
                        lineHeight: '30px',
                        padding: '0px 15px',
                    }}
                >
                    {alert.message}
                </Alert>
            </div>
        )

    const submit = async () => {
        const hash = '0x' + shajs('sha256').update(passcode).digest('hex')

        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const azul = Azul.contract(signer)

        try {
            setAlert({ variant: 'info', message: 'Validating passcode' })
            const data = await azul.rawDataFromPasscodeHash(hash)
            console.log({ hash, data })

            if (!data.exist) {
                setAlert({ variant: 'warning', message: 'Invalid passcode' })
            } else if (data.claimed) {
                setAlert({
                    variant: 'warning',
                    message: 'Passcode already used',
                })
            } else {
                setAlert({
                    variant: 'success',
                    message: 'Passcode valid. Minting NFT...',
                })

                const tx = await azul.claim(passcode)
                const receipt = await provider.getTransactionReceipt(tx.hash)

                if (receipt.status) {
                    setAlert({
                        variant: 'success',
                        message: 'NFT Minted',
                    })
                } else {
                    setAlert({
                        variant: 'warning',
                        message: 'Transaction failed',
                    })
                }
            }
        } catch (e) {
            setAlert({
                variant: 'danger',
                message:
                    'Unexpected error. Check browser console for more details',
            })
            console.log(e)
        }
    }

    return (
        <div className="container">
            <Form>
                <div className="container">
                    <div className="row justify-content-center mb-2">
                        <Form.Group
                            className="col-lg-3"
                            controlId="formBasicInput"
                        >
                            <Form.Control
                                type="text"
                                value={passcode}
                                onChange={(e) => setPasscode(e.target.value)}
                                placeholder="Enter passcode"
                            />
                        </Form.Group>
                        <Button
                            variant="primary"
                            className="col-lg-1"
                            type="button"
                            onClick={submit}
                        >
                            Submit
                        </Button>
                    </div>
                    <AlertData />
                </div>
            </Form>
            <GalleryComponent address={props.address} page={props.page} />
        </div>
    )
}

function Gallery(props: { address: string; page: string }) {
    return <GalleryComponent address={props.address} page={props.page} />
}

function App() {
    const { status, account, chainId } = useMetaMask()
    const address = account || ''

    console.log({ status, account, chainId })

    let Body,
        accountIdMessage,
        accountIdVariant,
        claimPage = false,
        galleryPage = false

    const [page, setPage] = useState('claim')

    if (status !== 'connected' || chainId !== expectedChainId) {
        accountIdVariant = 'danger'
        Body = LoginMetamask
        accountIdMessage = 'Not connected'
    } else {
        accountIdVariant = 'success'
        accountIdMessage = (
            <p>
                Connected as{' '}
                <a href={`${auroraExplorer}/address/${account}`}>{account}</a>
            </p>
        )

        if (page === 'claim') {
            claimPage = true
            Body = Claim
        } else if (page === 'gallery') {
            galleryPage = true
            Body = Gallery
        } else {
            Body = () => <p>Invalid State</p>
        }
    }

    return (
        <div>
            <Navbar
                bg="light"
                variant="light"
                expand="sm"
                className="py-0 mb-4"
            >
                <Container>
                    <Navbar.Brand>AZUL</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link
                                className={claimPage ? 'active' : ''}
                                onClick={() => {
                                    setPage('claim')
                                }}
                            >
                                Claim NFT
                            </Nav.Link>
                            <Nav.Link
                                className={galleryPage ? 'active' : ''}
                                onClick={() => {
                                    setPage('gallery')
                                }}
                            >
                                Gallery
                            </Nav.Link>
                        </Nav>
                        <Nav>
                            <Alert
                                variant={accountIdVariant}
                                style={{
                                    marginBottom: '1px',
                                    height: '30px',
                                    lineHeight: '30px',
                                    padding: '0px 15px',
                                }}
                            >
                                {accountIdMessage}
                            </Alert>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Body address={address} page={page} />
        </div>
    )
}

export default App
