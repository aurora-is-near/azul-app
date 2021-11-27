import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useMetaMask } from 'metamask-react'

function Login() {
    let navigate = useNavigate()

    const { status, connect } = useMetaMask()

    useEffect(() => {
        if (status === 'notConnected') {
            connect()
        } else if (status === 'connected') {
            navigate('/')
        }
    })

    if (status === 'unavailable') {
        return <p>Install MetaMask</p>
    } else {
        return <p>Connect to MetaMask</p>
    }
}

export default Login
