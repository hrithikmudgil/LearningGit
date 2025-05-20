 import Header from './Header/Header'
import './App.css'
import { Home } from './Home.jsx'
import { Services } from './Services.jsx'
import { Route, Routes } from 'react-router-dom'

function App() {
   
  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
      </Routes> 

    </>
  )
}

export default App
