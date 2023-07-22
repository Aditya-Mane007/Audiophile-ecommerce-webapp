import React from "react"
import zx7Desk from "../../assets/home/desktop/image-speaker-zx7.jpg"
import zx7Tab from "../../assets/home/tablet/image-speaker-zx7.jpg"
import zx7Mob from "../../assets/home/mobile/image-speaker-zx7.jpg"

const Zx7Speaker = () => {
  return (
    <div className="zx7speaker-card">
      <picture>
        <source media="(max-width: 768px)" srcSet={zx7Tab} />
        <source media="(max-width: 650px)" srcSet={zx7Mob} />
        <img src={zx7Desk} alt="Speaker" />
      </picture>
      <div className="sepeker-info">
        <div className="card">
          <div className="big-title">ZX7 SPEAKER</div>
          <div className="link-btn btn">See Product</div>
        </div>
      </div>
    </div>
  )
}

export default Zx7Speaker
