import { useMetaMask } from 'metamask-react'
import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Alert from 'react-bootstrap/Alert'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './App.css'

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
    return (
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
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
            <Navbar bg="light" variant="light" expand="sm">
                <Container>
                    <Navbar.Brand href="#claim" color="blue">
                        AZUL
                    </Navbar.Brand>
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
                            {/*
                                // TODO: Align <p> with <a> in the navbar.
                                         https://stackoverflow.com/a/10523001/4950797
                            */}
                            <Nav.Link as="p">
                                <Alert variant={accountIdVariant}>
                                    {accountIdMessage}
                                </Alert>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Body />
        </div>
    )
}

export default App
