import React from 'react'
import {Badge, Center, ChakraProvider, Container, Text} from '@chakra-ui/react'
import {HashRouter, Route, Routes} from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './pages/index.tsx'
import './index.css'
import theme from "./chakra/theme.ts";
import {Home} from "./pages/home.tsx";
import {Regex} from "./pages/regex.tsx";
import Redirect from "./pages/redirect.tsx";
import {NotFound} from "./pages/not-found.tsx";



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <HashRouter>
        <React.StrictMode>
            <ChakraProvider theme={theme}>
                <App />
            </ChakraProvider>
        </React.StrictMode>
    </HashRouter>,
)
