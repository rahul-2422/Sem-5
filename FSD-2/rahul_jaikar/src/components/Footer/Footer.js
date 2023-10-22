import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faInstagram,faFacebookF ,faTwitterSquare,faLinkedin } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
        <div className="footer-container ">
            <div className="row ">
                <div className="footer-col ">
                    <h4>company</h4>
                    <ul>
                        <li><a href="# ">about us</a></li>
                        <li><a href="# ">our services</a></li>
                        <li><a href="# ">privacy policy</a></li>
                        <li><a href="# ">affiliate program</a></li>
                    </ul>
                </div>
                <div className="footer-col " id="footer-col-online-shop ">
                    <h4>get help</h4>
                    <ul>
                        <li><a href="# ">FAQ</a></li>
                        <li><a href="# ">shipping</a></li>
                        <li><a href="# ">returns</a></li>
                        <li><a href="# ">order status</a></li>
                        <li><a href="# ">payment options</a></li>
                    </ul>
                </div>
                <div className="footer-col ">
                    <h4>online shop</h4>
                    <ul>
                        <li><a href="# ">tiffins</a></li>
                        <li><a href="# ">Veg Meals</a></li>
                        <li><a href="# ">Non-veg Meals</a></li>
                    </ul>
                </div>
                <div className="footer-col ">
                    <h4>follow us</h4>
                    <div className="social-links ">
                        <a href="# "><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href="# "><FontAwesomeIcon icon={faTwitterSquare} /></a>
                        <a href="# "><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="# "><FontAwesomeIcon icon={faLinkedin} /></a>
                    </div>
                </div>
            </div>
        </div>
  )
}
