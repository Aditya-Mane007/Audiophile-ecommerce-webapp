import React from "react"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import BestAudioGear from "../Components/Cards/BestAudioGear"
import EarphoneHomeSection from "../Components/HomePages/EarphoneHomeSection"
import Products from "../Components/Products"
import EarphoneProducts from "../Components/Products/EarphoneProducts"

const Earphones = () => {
  return (
    <div className="container">
      <header style={{ backgroundImage: "none", height: "336px" }}>
        <Navbar />
        <EarphoneHomeSection />
      </header>
      <EarphoneProducts />
      <Products />
      <BestAudioGear />
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Earphones
