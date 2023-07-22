import React, { useState } from "react"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import { useNavigate } from "react-router-dom"
import MarkII from "../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"

const Checkout = () => {
  const navigate = useNavigate()
  return (
    <div className="container" style={{ background: "#F1F1F1" }}>
      <header style={{ backgroundImage: "none", height: "79px" }}>
        <Navbar />
      </header>
      <div
        style={{ cursor: "pointer" }}
        className="go-back"
        onClick={() => {
          navigate(-1)
        }}
      >
        Go Back
      </div>
      <div className="checkout-container">
        <div className="checkout-form">
          <div className="title">Checkout</div>
          <div className="form">
            <form>
              <div className="biling-detials">
                <div className="title">Billing Details</div>
                <div className="form-groups">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Harry Potter"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="harrypotter@gmail.com"
                    />
                  </div>
                </div>
                <div className="form-group" style={{ width: "50%" }}>
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    pattern="[0-9]{10}"
                    placeholder="+91 0123456789"
                  />
                </div>
              </div>
              <div className="shiping-info">
                <div className="title">shipping info</div>
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="The Cupboard under the Stairs, 4. Privet Drive"
                  />
                </div>
                <div className="form-groups">
                  <div className="form-group">
                    <label htmlFor="zipcode">Zip Code</label>
                    <input
                      type="number"
                      name="zipcode"
                      id="zipcode"
                      placeholder="400 104"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      name="city"
                      id="city"
                      placeholder="Little Whinging, SURREY"
                    />
                  </div>
                </div>
                <div className="form-group" style={{ width: "50%" }}>
                  <label htmlFor="country">Country</label>
                  <input
                    type="text"
                    name="country"
                    id="country"
                    placeholder="Britain"
                  />
                </div>
              </div>
              <div className="payment-info">
                <div className="title">payment details</div>
                <div className="paymant-method">
                  <div className="title">Payment Method</div>
                  <div className="payment-method-options">
                    <div className="option">
                      <input
                        type="radio"
                        name="payment-option"
                        id="e-money"
                        // checked={type === "e-moeny"}
                        // value="e-money"
                        style={{ margin: "0rem .5rem" }}
                      />
                      e-Money
                    </div>
                    <div className="option">
                      <input
                        type="radio"
                        name="payment-option"
                        id="cod"
                        // checked={type === "cod"}
                        // value="cash on delivery"
                        style={{ margin: "0rem .5rem" }}
                      />
                      Cash on Delivery
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="summary">
          <div className="title">summary</div>
          <div className="cart-items">
            <div className="cart-item">
              <div className="image-section">
                <img src={MarkII} alt="" />
              </div>
              <div className="info">
                <div className="name">XX99 MK II</div>
                <div className="price">$ 2,999</div>
              </div>
              <div className="quantity">x1</div>
            </div>
            <div className="cart-item">
              <div className="image-section">
                <img src={MarkII} alt="" />
              </div>
              <div className="info">
                <div className="name">XX99 MK II</div>
                <div className="price">$ 2,999</div>
              </div>
              <div className="quantity">x1</div>
            </div>
            <div className="total-amount">
              <div
                className="title"
                style={{
                  opacity: 0.5,
                  color: "black",
                  fontSize: 15,
                  fontFamily: "Manrope",
                  fontWeight: "500",
                  wordWrap: "break-word"
                }}
              >
                TOTAL
              </div>
              <div
                className="amount"
                style={{
                  textAlign: "right",
                  color: "black",
                  fontSize: 18,
                  fontFamily: "Manrope",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  wordWrap: "break-word"
                }}
              >
                $5396
              </div>
            </div>
            <div className="extra-shipping">
              <div
                className="title"
                style={{
                  opacity: 0.5,
                  color: "black",
                  fontSize: 15,
                  fontFamily: "Manrope",
                  fontWeight: "500",

                  wordWrap: "break-word"
                }}
              >
                SHIPPING
              </div>
              <div
                className="shipping-amount"
                style={{
                  textAlign: "right",
                  color: "black",
                  fontSize: 18,
                  fontFamily: "Manrope",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  wordWrap: "break-word"
                }}
              >
                $50
              </div>
            </div>
            <div className="taxes">
              <div
                className="title"
                style={{
                  opacity: 0.5,
                  color: "black",
                  fontSize: 15,
                  fontFamily: "Manrope",
                  fontWeight: "500",
                  wordWrap: "break-word"
                }}
              >
                VAT INCLUDING
              </div>
              <div
                className="tax-amount"
                style={{
                  textAlign: "right",
                  color: "black",
                  fontSize: 18,
                  fontFamily: "Manrope",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  wordWrap: "break-word"
                }}
              >
                $1079
              </div>
            </div>
            <div className="grand-total">
              <div
                className="title"
                style={{
                  opacity: 0.5,
                  color: "black",
                  fontSize: 15,
                  fontFamily: "Manrope",
                  fontWeight: "500",
                  wordWrap: "break-word"
                }}
              >
                GRAND TOTAL
              </div>
              <div
                className="grand-amount"
                style={{
                  textAlign: "right",
                  color: "#000",
                  fontSize: 18,
                  fontFamily: "Manrope",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  wordWrap: "break-word"
                }}
              >
                $5446
              </div>
            </div>
            <div className="checkout-btn btn">CONTINUE & PAY</div>
          </div>
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Checkout
