import React from "react"
import xx99i from "../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg"

import zx9 from "../assets/product-zx9-speaker/mobile/image-category-page-preview.jpg"
import xx59 from "../assets/product-xx59-headphones/mobile/image-category-page-preview.jpg"

const YouMayLike = () => {
  return (
    <div className="you-may-like">
      <div className="title">you may also like</div>
      <div className="you-may-like-products">
        <div className="you-may-like-product">
          <div className="image-section">
            <img src={xx99i} alt="" />
          </div>
          <div className="title">XX99 MARK I</div>
          <div className="btn-link btn">See Product</div>
        </div>
        <div className="you-may-like-product">
          <div className="image-section">
            <img src={xx59} alt="" />
          </div>
          <div className="title">XX59</div>
          <div className="btn-link btn">See Product</div>
        </div>
        <div className="you-may-like-product">
          <div className="image-section">
            <img src={zx9} alt="" />
          </div>
          <div className="title">ZX9 SPEAKER</div>
          <div className="btn-link btn">See Product</div>
        </div>
      </div>
    </div>
  )
}

export default YouMayLike
