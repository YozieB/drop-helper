import React from 'react'
import {ChakraProvider} from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import theme from "./chakra/theme.ts";



ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <ChakraProvider theme={theme}>
          <App />
      </ChakraProvider>
  </React.StrictMode>,
)
