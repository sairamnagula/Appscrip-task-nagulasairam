import './index.css'

import {FaInstagram} from 'react-icons/fa'
import {CiLinkedin} from 'react-icons/ci'

const Footer = () => (
  <div className="footer-section">
    <div className="footer-top-section">
      <div className="subscribe-section">
        <h1 className="heading">BE THE FIRST TO KNOW</h1>
        <p className="paragraph">Sign Up For Updates From metta muse.</p>
        <div className="search-container">
          <input
            type="search"
            placeholder="Enter Your E-mail"
            className="search-tag"
          />
          <button type="button" className="subscribe-btn">
            Subscribe
          </button>
        </div>
      </div>
      <hr className="horizontal" />
      <div>
        <div className="contact-section">
          <h1 className="heading">Contact Us</h1>
          <p className="paragraph">+442211335360</p>
          <p className="paragraph">customercare@mettamouse.com</p>
        </div>
        <hr className="horizontal" />
        <div className="currency-section">
          <h1 className="heading">USD</h1>
          <p className="paragraph">
            transaction will complete in euros and currency reference also
            available on hover
          </p>
        </div>
      </div>
    </div>
    <hr />
    <div className="footer-bottom-section">
      <div>
        <h1 className="heading">Metta Muse</h1>
        <p className="paragraph">About Us</p>
        <p className="paragraph">Stories</p>
        <p className="paragraph">Artisans</p>
        <p className="paragraph">Boutiques</p>
        <p className="paragraph">Contact Us</p>
        <p className="paragraph">EU Compliances Docs</p>
      </div>
      <div>
        <h1 className="heading">Quick Links</h1>
        <p className="paragraph">Orders & Shipping</p>
        <p className="paragraph">Join/Login as Sellers</p>
        <p className="paragraph">Payment & Pricing</p>
        <p className="paragraph">Return & Refunds</p>
        <p className="paragraph">FAQS</p>
        <p className="paragraph">Privacy Policy</p>
        <p className="paragraph">Terms & Conditions</p>
      </div>
      <div>
        <div>
          <h1 className="heading">FOLLOW US</h1>
          <FaInstagram className="insta" />
          <CiLinkedin className="linkdin" />
        </div>
        <div>
          <h1 className="heading">metta muse ACCEPTS</h1>
          <div>
            <img
              src="https://www.shutterstock.com/image-illustration/google-pay-logo-on-transparent-260nw-2311644375.jpg"
              alt="g-pay"
              className="payments-logo-image"
            />
            <img
              src="https://www.mastercard.com/content/dam/public/mastercardcom/in/en/logos/mastercard-og-image.png"
              alt="mater-card"
              className="payments-logo-image"
            />
            <img
              src="https://pngimg.com/uploads/paypal/paypal_PNG7.png"
              alt="pay-pal"
              className="payments-logo-image"
            />
            <img
              src="https://logowik.com/content/uploads/images/amex-card1708.jpg"
              alt="amex"
              className="payments-logo-image"
            />
            <img
              src="https://cdn.prod.website-files.com/6047a9e35e5dc54ac86ddd90/638a66f53496040a4a1629b2_pyY_-KcDDLTxLW16brCFaa8QlHS6i-b_gfpqFwRD3y0.png"
              alt="apple-pay"
              className="payments-logo-image"
            />
          </div>
        </div>
      </div>
    </div>
    <p className="paragraph text-align">
      copyright 2023 mettamuse. All rights reserved
    </p>
  </div>
)

export default Footer
