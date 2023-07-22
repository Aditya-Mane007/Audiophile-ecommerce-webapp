import React from "react"
import Logo from "../assets/shared/desktop/logo.svg"
import Facebook from "../assets/shared/desktop/icon-facebook.svg"
import Instagram from "../assets/shared/desktop/icon-instagram.svg"
import Twitter from "../assets/shared/desktop/icon-twitter.svg"
import { Link } from "react-router-dom"

const Footer = () => {
  const date = new Date()

  const year = date.getFullYear()
  return (
    <div className="footer">
      <div className="container">
        <div className="div1 logo">
          <img src={Logo} alt="audiophile" />
        </div>
        <div className="div2">
          <ul>
            <li>
              <Link
                to="/"
                onClick={() => {
                  window.scrollTo(0, 0)
                }}
              >
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/headphones"
                onClick={() => {
                  window.scrollTo(0, 0)
                }}
              >
                HEADPHONES
              </Link>
            </li>
            <li>
              <Link
                to="/speakers"
                onClick={() => {
                  window.scrollTo(0, 0)
                }}
              >
                SPEAKERS
              </Link>
            </li>
            <li>
              <Link
                to="/earphones"
                onClick={() => {
                  window.scrollTo(0, 0)
                }}
              >
                EARPHONES
              </Link>
            </li>
          </ul>
        </div>
        <div className="div3">
          {" "}
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.
        </div>
        <div className="div4">
          <ul>
            <li>
              <Link
                to="https://www.facebook.com/profile.php?id=100028164061333"
                target="_"
              >
                <img src={Facebook} alt="" />
              </Link>
            </li>
            <li>
              <Link to="https://twitter.com/AdityaM52821612" target="_">
                <img src={Twitter} alt="" />
              </Link>
            </li>
            <li>
              <Link to="https://www.instagram.com/adityamane.jsx" target="_">
                <img src={Instagram} alt="" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="div5">Copyright {year}. All Rights Reserved</div>
      </div>
    </div>
  )
}

export default Footer
