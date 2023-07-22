import React from "react"
import HeroDesk from "../../assets/shared/desktop/image-best-gear.jpg"
import HeroTab from "../../assets/shared/tablet/image-best-gear.jpg"
import HeroMob from "../../assets/shared/mobile/image-best-gear.jpg"

const BestAudioGear = () => {
  return (
    <div className="best-audio-gear">
      <div className="best-audio-info">
        <div className="card">
          <div className="big-title">
            Bringing you the <span style={{ color: "#D87D4A" }}>best</span>{" "}
            audio gear
          </div>
          <div className="sub-title">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </div>
        </div>
      </div>
      <div className="image-section">
        <picture>
          <source media="(max-width:768px)" srcSet={HeroTab} />
          <source media="(max-width:650px)" srcSet={HeroMob} />
          <img src={HeroDesk} alt="" />
        </picture>
      </div>
    </div>
  )
}

export default BestAudioGear
