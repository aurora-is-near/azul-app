import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMetaMask } from 'metamask-react'
import Login from './Login'

enum InputState {
    Writing = 'writing',
    Success = 'success',
    Fail = 'fail',
}

function Home() {
    const { status, account } = useMetaMask()

    const [inputState, setInputState] = useState(InputState.Writing)
    const [error, setError] = useState('')

    console.log({ status })

    let navigate = useNavigate()

    useEffect(() => {
        if (status === 'notConnected' || status === 'unavailable') {
            navigate('/login')
        }
    })

    if (status !== 'connected') {
        return <Login />
    }

    const submit = async () => {
        /// Check if the current pass-code is valid
        /// If it is indeed valid, claim the NFT
        /// If there is any error, set the error
        setInputState(InputState.Success)
    }

    return (
        <div>
            <p>
                Address: <code>{account}</code>
            </p>
            <form>
                <label>
                    Passcode:
                    <input
                        type="text"
                        onChange={() => setInputState(InputState.Writing)}
                    />
                </label>
                <button type="button" onClick={submit}>
                    Submit
                </button>
            </form>
            <p>{inputState}</p>
            {inputState === InputState.Fail ? <p>{error}</p> : <p></p>}
            {/* Images */}
        </div>
    )
}

export default Home
