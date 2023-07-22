import React from "react"
import Navbar from "../Components/Navbar"
import HeadphonesHeaderSection from "../Components/HomePages/HeadphonesHomeSection"
import Footer from "../Components/Footer"
import BestAudioGear from "../Components/Cards/BestAudioGear"
import HeadphoneProducts from "../Components/Products/HeadphoneProducts"
import Products from "../Components/Products"

const Headphones = () => {
  return (
    <div className="container">
      <header style={{ backgroundImage: "none", height: "336px" }}>
        <Navbar />
        <HeadphonesHeaderSection />
      </header>
      <HeadphoneProducts />
      <Products />
      <BestAudioGear />
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Headphones
