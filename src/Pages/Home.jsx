import React from "react"
import Navbar from "../Components/Navbar"
import Products from "../Components/Products"
import HomeHeaderSection from "../Components/HomePages/HomeHomeSection"
import Zx9Speaker from "../Components/Cards/Zx9Speaker"
import Zx7Speaker from "../Components/Cards/Zx7Speaker"
import Yx1Earphones from "../Components/Cards/Yx1Earphones"
import BestAudioGear from "../Components/Cards/BestAudioGear"
import Footer from "../Components/Footer"

const Home = () => {
  return (
    <div className="container active">
      <header>
        <Navbar />
        <HomeHeaderSection />
      </header>
      <Products />
      <Zx9Speaker />
      <Zx7Speaker />
      <Yx1Earphones />
      <BestAudioGear />
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Home
