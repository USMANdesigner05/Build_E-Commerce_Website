import React from 'react'
// import local style.css file 
import './Footer.css';
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <div className="footer-parent">
                <div className="footer-heading">
                  <h1>Online <br /> <span> Shop </span></h1>
                </div>
                <div className="footer-about">
                      <h3>shopping easy</h3>
                  <p>Online shopping makes purchasing easy with a seamless experience. Users can browse, select, and pay effortlessly from anywhere. Secure payments and quick delivery enhance convenience.</p>
                </div>
                <div className="footer-routing">
                      <ul>
                        <li>
                            <Link to="/home">home</Link>
                        </li>
                        <li>
                            <Link to="/about">about</Link>
                        </li>
                        <li>
                            <Link to="/contact">contact</Link>
                        </li>
                      </ul>
                </div>
          </div>      {/* footer parent div stop  */}
    </>
  )
}

export default Footer;