import React from "react"
import Headphones from "../assets/shared/desktop/image-category-thumbnail-headphones.png"
import Speakers from "../assets/shared/desktop/image-category-thumbnail-speakers.png"
import Earphones from "../assets/shared/desktop/image-category-thumbnail-earphones.png"
import Arrow from "../assets/shared/desktop/icon-arrow-right.svg"
import { Link } from "react-router-dom"

const Products = () => {
  return (
    <div className="products">
      <div className="product headphones">
        <div className="img">
          <img src={Headphones} alt="" />
        </div>
        <div className="sub-title">
          <div className="title">Headphones</div>
          <div className="link-btn btn">
            <Link
              to="/headphones"
              onClick={() => {
                window.scrollTo(0, 0)
              }}
            >
              Shop{" "}
            </Link>
            <span>
              <img src={Arrow} alt="" style={{ margin: "0rem .5rem" }} />
            </span>
          </div>
        </div>
      </div>
      <div className="product speakers">
        <div className="img">
          <img src={Speakers} alt="" />
        </div>
        <div className="sub-title">
          <div className="title">Speakers</div>
          <div className="link-btn btn">
            <Link
              to="/speakers"
              onClick={() => {
                window.scrollTo(0, 0)
              }}
            >
              Shop{" "}
            </Link>
            <span>
              <img src={Arrow} alt="" style={{ margin: "0rem .5rem" }} />
            </span>
          </div>
        </div>
      </div>
      <div className="product earphones">
        <div className="img">
          <img src={Earphones} alt="" />
        </div>
        <div className="sub-title">
          <div className="title">Earphones</div>
          <div className="link-btn btn">
            <Link
              to="/earphones"
              onClick={() => {
                window.scrollTo(0, 0)
              }}
            >
              Shop
            </Link>
            <span>
              <img src={Arrow} alt="" style={{ marginLeft: ".2rem" }} />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products
