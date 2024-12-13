import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TudoList from './TudoList'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TudoList />
  </StrictMode>,
)
