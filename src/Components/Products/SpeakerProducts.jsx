import React from "react"

import zx9Desk from "../../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg"

import zx9Tab from "../../assets/product-zx9-speaker/tablet/image-category-page-preview.jpg"

import zx9Mob from "../../assets/product-zx9-speaker/mobile/image-category-page-preview.jpg"
//
//
import zx7Desk from "../../assets/product-zx7-speaker/desktop/image-category-page-preview.jpg"

import zx7Tab from "../../assets/product-zx7-speaker/tablet/image-category-page-preview.jpg"

import zx7Mob from "../../assets/product-zx7-speaker/mobile/image-category-page-preview.jpg"
//
//

const SpeakerProducts = () => {
  return (
    <div className="spearker-products">
      <div className="products">
        <div className="product">
          <div className="image-section">
            <picture>
              <source media="(max-width: 768px)" srcset={zx9Tab} />
              <source media="(min-width: 650px )" srcset={zx9Mob} />
              <img src={zx9Desk} alt="" />
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
        <div className="product">
          <div className="image-section">
            <picture>
              <source media="(max-width: 768px)" srcset={zx7Tab} />
              <source media="(min-width: 650px )" srcset={zx7Mob} />
              <img src={zx7Desk} alt="" />
            </picture>
          </div>
          <div className="info-section">
            <div className="info">
              <div className="title">NEW PRODUCT</div>
              <div className="big-title">ZX7 SPEAKER</div>
              <div className="sub-title">
                Stream high quality sound wirelessly with minimal loss. The ZX7
                bookshelf speaker uses high-end audiophile components that
                represents the top of the line powered speakers for home or
                studio use.
              </div>
              <div className="btn btn-link">See Product</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpeakerProducts
