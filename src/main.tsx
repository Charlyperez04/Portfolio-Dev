import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Header from './sections/Header/Header.tsx'
import Footer from './sections/Footer/Footer.tsx'
import Navbar from './components/Navbar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <Header />
    <App />
    <Footer />
  </StrictMode>,
)
