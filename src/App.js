import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import Home from './Pages/Home'
import Headphones from './Pages/Headphones'
import Speakers from './Pages/Speakers'
import Earphones from './Pages/Earphones'
import ProductDetailsPage from './Pages/ProductDetailsPage'
import Checkout from './Pages/Checkout'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/headphones" element={<Headphones />} />
          <Route path="/headphones/xx99II" element={<ProductDetailsPage />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/earphones" element={<Earphones />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </>
  )
}

export default App