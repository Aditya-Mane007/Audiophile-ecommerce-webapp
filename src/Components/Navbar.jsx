import React, { useState } from "react"
import Cart from "../assets/shared/desktop/icon-cart.svg"
import Logo from "../assets/shared/desktop/logo.svg"
import Burger from "../assets/shared/tablet/icon-hamburger.svg"
import { Link } from "react-router-dom"
import { MdClose } from "react-icons/md"
import Headphones from "../assets/shared/desktop/image-category-thumbnail-headphones.png"
import Speakers from "../assets/shared/desktop/image-category-thumbnail-speakers.png"
import Earphones from "../assets/shared/desktop/image-category-thumbnail-earphones.png"
import Arrow from "../assets/shared/desktop/icon-arrow-right.svg"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isBlur, setIsBlur] = useState(false)
  const [IsCartOpen, setIsCartOpen] = useState(false)

  return (
    <div className="navbar">
      <div
        className="burger"
        onClick={() => {
          setIsOpen(!isOpen)
          setIsBlur(!isBlur)
        }}
      >
        {isOpen ? (
          <h3>
            <MdClose color="white" />
          </h3>
        ) : (
          <img src={Burger} alt="options" fontSize="12px" />
        )}
      </div>
      <div className="logo">
        <img src={Logo} alt="audiophile" />
      </div>
      <div className="nav-links">
        <div className="nav-link home">
          <Link to="/">home</Link>
        </div>
        <div className="nav-link headphones">
          <Link to="/headphones">headphones</Link>
        </div>
        <div className="nav-link speakers">
          <Link to="/speakers">speakers</Link>
        </div>
        <div className="nav-link earphones">
          <Link to="/earphones">earphones</Link>
        </div>
      </div>
      {isOpen
        ? (!IsCartOpen,
          (
            <div className="mobile-navbar scale-up-ver-top" id="blur">
              <div className="product headphones">
                <div className="img">
                  <img src={Headphones} alt="" />
                </div>
                <div className="sub-title">
                  <div className="title">Headphones</div>
                  <div className="link-btn btn">
                    <Link to="/headphones">Shop </Link>
                    <span>
                      <img
                        src={Arrow}
                        alt=""
                        style={{ margin: "0rem .5rem" }}
                      />
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
                    <Link to="/speakers">Shop </Link>
                    <span>
                      <img
                        src={Arrow}
                        alt=""
                        style={{ margin: "0rem .5rem" }}
                      />
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
                    <Link to="/earphones">Shop </Link>
                    <span>
                      <img
                        src={Arrow}
                        alt=""
                        style={{ margin: "0rem .5rem" }}
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))
        : ""}
      <div className="cart">
        <img
          src={Cart}
          alt="cart"
          onClick={() => {
            setIsCartOpen(!IsCartOpen)
          }}
        />
      </div>
      {!isOpen && IsCartOpen ? (
        <>
          <div className="cart-dialog" id="blur">
            <div className="title">
              <div
                className="cart-items-no"
                style={{ textTransform: "uppercase", letterSpacing: "2px" }}
              >
                cart (3)
              </div>
              <div className="remove-all-btn">Remove All</div>
            </div>
            <div className="cart-items">
              <div className="product-image">
                <img src={Headphones} alt="" />
              </div>
              <div className="cart-product-description">
                <div className="title">XX99 MARK I</div>
                <div className="price">$100</div>
              </div>
              <div className="cart-quantity">
                <div className="minus btn">-</div>
                <div className="quantity btn">1</div>
                <div className="plus btn">+</div>
              </div>
            </div>
            <div className="cart-items">
              <div className="product-image">
                <img src={Headphones} alt="" />
              </div>
              <div className="cart-product-description">
                <div className="title">XX99 MARK I</div>
                <div className="price">$100</div>
              </div>
              <div className="cart-quantity">
                <div className="minus btn">-</div>
                <div className="quantity btn">1</div>
                <div className="plus btn">+</div>
              </div>
            </div>
            <div className="checkout-option">
              <div className="title">
                <div className="title-text">TOTAL</div>
                <div className="total-price">$5,396</div>
              </div>
              <div className="checkout-btn btn">
                <Link to="/checkout" style={{ color: "#ffff" }}>
                  CHECKOUT
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  )
}

export default Navbar
