import React from "react"
import yx1Desk from "../../assets/home/desktop/image-earphones-yx1.jpg"
import yx1Tab from "../../assets/home/tablet/image-earphones-yx1.jpg"
import yx1Mob from "../../assets/home/mobile/image-earphones-yx1.jpg"

const Yx1Earphones = () => {
  return (
    <div className="yx1earphone-card">
      <div className="image-section">
        <picture>
          <source media="(max-width: 768px)" srcSet={yx1Tab} />
          <source media="(max-width: 650px)" srcSet={yx1Mob} />
          <img src={yx1Desk} alt="Earphone" />
        </picture>
      </div>
      <div className="earphone-info-section">
        <div className="card">
          <div className="big-title">YX1 EARPHONES</div>
          <div className="link-btn btn">see Product</div>
        </div>
      </div>
    </div>
  )
}

export default Yx1Earphones
