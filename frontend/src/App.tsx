import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './views/Login'
import Home from './views/Home'
import { MetaMaskProvider } from 'metamask-react'

function App() {
    return (
        <MetaMaskProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        </MetaMaskProvider>
    )
}

export default App
