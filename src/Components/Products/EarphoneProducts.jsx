import React from "react"
import yx1Desk from "../../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg"

import yx1Tab from "../../assets/product-yx1-earphones/tablet/image-category-page-preview.jpg"

import yx1Mob from "../../assets/product-yx1-earphones/mobile/image-category-page-preview.jpg"

const EarphoneProducts = () => {
  return (
    <div className="Earphone-products">
      <div className="products">
        <div className="product">
          <div className="image-section">
            <picture>
              <source media="(max-width: 768px)" srcset={yx1Tab} />
              <source media="(min-width: 650px )" srcset={yx1Mob} />
              <img src={yx1Desk} alt="" />
            </picture>
          </div>
          <div className="info-section">
            <div className="info">
              <div className="title">NEW PRODUCT</div>
              <div className="big-title">ZX9 SPEAKER</div>
              <div className="sub-title">
                Upgrade your sound system with the all new ZX9 active speaker.
                It’s a bookshelf speaker system that offers truly wireless
                connectivity -- creating new possibilities for more pleasing and
                practical audio setups.
              </div>
              <div className="btn btn-link">See Product</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EarphoneProducts
