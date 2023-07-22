import React from "react"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import Products from "../Components/Products"
import BestAudioGear from "../Components/Cards/BestAudioGear"
import { useNavigate } from "react-router-dom"
import xx992Desk from "../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"
import YouMayLike from "../Components/YouMayLike"

import img1 from "../assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg"
import img2 from "../assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg"
import img3 from "../assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg"

const ProductDetailsPage = () => {
  const navigate = useNavigate()
  return (
    <div className="container">
      <header style={{ backgroundImage: "none", height: "80px" }}>
        <Navbar />
      </header>
      <div className="product-detials">
        <div
          className="go-back-btn"
          onClick={() => {
            navigate(-1)
          }}
        >
          Go Back
        </div>
        <div className="product-detail">
          <div className="image-section">
            <img src={xx992Desk} alt="" />
          </div>
          <div className="product-info-section">
            <div className="info">
              <div className="title">NEW PRODUCT</div>
              <div className="big-title">XX99 Mark II Headphones</div>
              <div className="sub-title">
                The new XX99 Mark II headphones is the pinnacle of pristine
                audio. It redefines your premium headphone experience by
                reproducing the balanced depth and precision of studio-quality
                sound.
              </div>
              <div className="price">$ 2,999</div>
              <div className="quantity">
                <div className="quantity-btns">
                  <div className="minus">-</div>
                  <div className="quantity-value">1</div>
                  <div className="plus">+</div>
                </div>
                <div className="add-to-cart-btn btn">ADD TO CART</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-features-inbox">
        <div className="features">
          <div className="title">FEATURES</div>
          <div className="sub-title">
            <p>
              Featuring a genuine leather head strap and premium earcups, these
              headphones deliver superior comfort for those who like to enjoy
              endless listening. It includes intuitive controls designed for any
              situation. Whether you’re taking a business call or just in your
              own personal space, the auto on/off and pause features ensure that
              you’ll never miss a beat.
            </p>
            <p>
              The advanced Active Noise Cancellation with built-in equalizer
              allow you to experience your audio world on your terms. It lets
              you enjoy your audio in peace, but quickly interact with your
              surroundings when you need to. Combined with Bluetooth 5. 0
              compliant connectivity and 17 hour battery life, the XX99 Mark II
              headphones gives you superior sound, cutting-edge technology, and
              a modern design aesthetic.
            </p>
          </div>
        </div>
        <div className="in-the-box">
          <div className="title">in the box</div>
          <ul>
            <li>
              <span className="quantiy-in-box">1x</span>Headphone Unit
            </li>
            <li>
              <span className="quantiy-in-box">2x</span>Replacement Earcups
            </li>
            <li>
              <span className="quantiy-in-box">1x</span>User Manual
            </li>
            <li>
              <span className="quantiy-in-box">1x</span>3.5mm 5m Audio Cable
            </li>
            <li>
              <span className="quantiy-in-box">1x</span>Travel Bag
            </li>
          </ul>
        </div>
      </div>
      <div class="other-images">
        <div class="div1">
          <img src={img1} alt="" />
        </div>
        <div class="div2">
          <img src={img2} alt="" />
        </div>
        <div class="div3">
          <img src={img3} alt="" />
        </div>
      </div>
      <YouMayLike />
      <Products />
      <BestAudioGear />
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default ProductDetailsPage
