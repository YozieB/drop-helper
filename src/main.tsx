import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './pages/index.tsx'
import './index.css'
import theme from "./chakra/theme.ts";



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <BrowserRouter>
        <React.StrictMode>
            <ChakraProvider theme={theme}>
                <App />
            </ChakraProvider>
        </React.StrictMode>
    </BrowserRouter>,
)
