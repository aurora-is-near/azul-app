import { useMetaMask } from 'metamask-react'
import { useEffect, useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import shajs from 'sha.js'
import './App.css'
import { ethers } from 'ethers'
import Azul from 'azul-nft'

// TODO: Move expectedChainId to config file
const expectedChainId = '0x4e454152'
const auroraExplorer = 'https://explorer.mainnet.aurora.dev'

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

function Claim() {
    const [alert, setAlert] = useState({ variant: 'success', message: '' })
    const [passcode, setPasscode] = useState('')

    const AlertData = () =>
        alert.message === '' ? (
            <div />
        ) : (
            <div className="row justify-content-center">
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
        // Find sha256 from passcode
        const hash = '0x' + shajs('sha256').update(passcode).digest('hex')
        console.log({ hash, passcode })

        const provider = new ethers.providers.Web3Provider(window.ethereum)

        const azul = Azul.contract(provider)
        console.log('Making request')

        try {
            const data = await azul.rawDataFromPasscodeHash(hash)
            console.log(data)
        } catch (e) {
            console.log(e)
        }

        // Check passcode is available
        // Report error in case of any (already claimed or invalid passcode)
        // Trigger metamask to sign transaction if it is valid passocde
    }

    return (
        <Form>
            <div className="container">
                <div className="row justify-content-center">
                    <Form.Group className="col-lg-3" controlId="formBasicInput">
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
    )
}

function Gallery() {
    return (
        <div className="px-4 py-5 my-5 text-center">
            <h1 className="display-5 fw-bold">Under construction</h1>
            <div className="col-lg-6 mx-auto"></div>
        </div>
    )
}

function App() {
    const { status, account, chainId } = useMetaMask()
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
            <Body />
        </div>
    )
}

export default App
