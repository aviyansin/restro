import { useState } from 'react'
import "./App.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
// import About from './ Components/About'
import Header from './ Components/Header'
import Gallery from './ Components/Gallery'
import Contect from './Pages/Contect'

function App() {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
     <Route path='/' element={<Home/>}>
     </Route>

     <Route path='/about' element="">
     </Route>
     <Route path='/gallery' element={<Gallery/>}>
     </Route>
     <Route path='/contect' element={<Contect/>}>
     </Route>
     
    </Routes>
    
    
    </BrowserRouter>

    </>
  )
 
}

export default App
