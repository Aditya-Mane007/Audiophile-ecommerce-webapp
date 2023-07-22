import React from "react"
import { Link } from "react-router-dom"
//
import xx991Desk from "../../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg"

import xx991Tab from "../../assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg"

import xx991Mob from "../../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg"
//
//
import xx992Desk from "../../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"

import xx992Tab from "../../assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg"

import xx992Mob from "../../assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg"
//
//
import xx59Desk from "../../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg"

import xx59Tab from "../../assets/product-xx59-headphones/tablet/image-category-page-preview.jpg"

import xx59Mob from "../../assets/product-xx59-headphones/mobile/image-category-page-preview.jpg"

const HeadphoneProducts = () => {
  return (
    <div className="headphone-products">
      <div className="products">
        <div className="product">
          <div className="image-section">
            <picture>
              <source media="(max-width: 768px)" srcset={xx992Tab} />
              <source media="(min-width: 650px )" srcset={xx992Mob} />
              <img src={xx992Desk} alt="" />
            </picture>
          </div>
          <div className="info-section">
            <div className="info">
              <div className="title">NEW PRODUCT</div>
              <div className="big-title">XX99 Mark II Headphones</div>
              <div className="sub-title">
                The new XX99 Mark II headphones is the pinnacle of pristine
                audio. It redefines your premium headphone experience by
                reproducing the balanced depth and precision of studio-quality
                sound.
              </div>
              <div className="btn btn-link">
                <Link to="/headphones/xx99II">See Product</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="product">
          <div className="image-section">
            <picture>
              <source media="(max-width: 768px)" srcset={xx991Tab} />
              <source media="(min-width: 650px )" srcset={xx991Mob} />
              <img src={xx991Desk} alt="" />
            </picture>
          </div>
          <div className="info-section">
            {" "}
            <div className="info">
              <div className="title">NEW PRODUCT</div>
              <div className="big-title">XX99 Mark I Headphones</div>
              <div className="sub-title">
                As the gold standard for headphones, the classic XX99 Mark I
                offers detailed and accurate audio reproduction for audiophiles,
                mixing engineers, and music aficionados alike in studios and on
                the go.
              </div>
              <div className="btn btn-link">See Product</div>
            </div>
          </div>
        </div>
        <div className="product">
          <div className="image-section">
            <picture>
              <source media="(max-width: 768px)" srcset={xx59Tab} />
              <source media="(min-width: 650px )" srcset={xx59Mob} />
              <img src={xx59Desk} alt="" />
            </picture>
          </div>
          <div className="info-section">
            <div className="info">
              <div className="title">NEW PRODUCT</div>
              <div className="big-title">XX59 Headphones</div>
              <div className="sub-title">
                Enjoy your audio almost anywhere and customize it to your
                specific tastes with the XX59 headphones. The stylish yet
                durable versatile wireless headset is a brilliant companion at
                home or on the move.
              </div>
              <div className="btn btn-link">See Product</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeadphoneProducts
