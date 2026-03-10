import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import Themeprovider from './Context/Themeprovider.jsx'
import Authprovider from './Context/Authprovider.jsx'
import Languageprovider from './Context/Languageprovider.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Themeprovider>
      <Authprovider>
        <Languageprovider>
             <App />
        </Languageprovider>
         
      </Authprovider>
    </Themeprovider>
    </BrowserRouter>
  </StrictMode>,
)