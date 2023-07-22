import React from "react"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import BestAudioGear from "../Components/Cards/BestAudioGear"
import SpeakerHomeSection from "../Components/HomePages/SpeakerHomeSection"
import Products from "../Components/Products"
import SpeakerProducts from "../Components/Products/SpeakerProducts"

const Speakers = () => {
  return (
    <div className="container">
      <header style={{ backgroundImage: "none", height: "336px" }}>
        <Navbar />
        <SpeakerHomeSection />
      </header>
      <SpeakerProducts />
      <Products />
      <BestAudioGear />
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Speakers
