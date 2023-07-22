import React from "react"
import zx9Desk from "../../assets/home/desktop/image-speaker-zx9.png"
import zx9Tab from "../../assets/home/tablet/image-speaker-zx9.png"
import zx9Mob from "../../assets/home/mobile/image-speaker-zx9.png"

const Zx9Speaker = () => {
  return (
    <div className="zx9speaker-card">
      <div className="image-section">
        <picture>
          <source media="(max-width: 768px)" srcSet={zx9Tab} />
          <source media="(max-width: 650px)" srcSet={zx9Mob} />
          <img src={zx9Desk} alt="Speaker" />
        </picture>
      </div>
      <div className="sepeker-info">
        <div className="card">
          <div className="big-title">ZX9 SPEAKER</div>
          <div className="sub-title">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </div>
          <div className="link-btn btn">See Product</div>
        </div>
      </div>
    </div>
  )
}

export default Zx9Speaker
