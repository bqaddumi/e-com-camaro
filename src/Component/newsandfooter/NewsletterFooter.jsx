import React from 'react';
import './NewsletterFooter.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import RssFeedIcon from '@mui/icons-material/RssFeed';

export const NewsletterFooter = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <footer className="nl-footer">
      <div className="newsletter">
        <div className="wrap">
          <h3 className="nl-title">Newsletter</h3>
          <p className="nl-sub">Subscribe to receive coupons and gift cards</p>

          <form
            className="nl-form"
            onSubmit={onSubmit}
            aria-label="Subscribe to newsletter"
          >
            <label htmlFor="nl-email" className="sr-only">
              Email address
            </label>
            <input
              className="nl-form-input"
              id="nl-email"
              type="email"
              required
              placeholder="Email address"
            />
            <button type="submit" className="nl-btn">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>

      <div className="dark-footer">
        <div className="wrap">
          <div className="footer-top">
            <div className="contact">
              <span className="label">Our Office Address</span>
              <span className="value">169 Florida Ave, L.A City</span>
            </div>

            <div className="contact">
              <span className="label">Please call us:</span>
              <span className="value">(+84) 1234 686 969</span>
            </div>

            <div className="socials" aria-label="Social links">
              <a href="#" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href="#" aria-label="Twitter">
                <TwitterIcon />
              </a>
              <a href="#" aria-label="Pinterest">
                <PinterestIcon />
              </a>
              <a href="#" aria-label="Google Plus">
                <GoogleIcon />
              </a>
              <a href="#" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href="#" aria-label="RSS">
                <RssFeedIcon />
              </a>
            </div>
          </div>

          <hr className="divider" />

          <div className="footer-links">
            <div className="col">
              <h4 className="footer-title">Our Stores</h4>
              <ul className="footer-list">
                <li>501 Floor, Nguyen Ngoc Vu, Cau Giay, Ha Noi</li>
                <li>741 – 11A Sandiego, L.A City, USA</li>
                <li>5th Floor, 169 Green Lakes, Westbrown, Liverpool City</li>
                <li>628 Brooklyn Street, Fulham District, Wales</li>
                <li>10001 Street, WinLow District, Mexico.</li>
                <li>1st Floor BrickHouse, 250 Wall Street, CA City UK</li>
              </ul>
            </div>

            <div className="col">
              <h4>My Account</h4>
              <ul className="footer-list">
                <li>
                  <a href="#">My Cart</a>
                </li>
                <li>
                  <a href="#">Check Out</a>
                </li>
                <li>
                  <a href="#">Wishlist</a>
                </li>
                <li>
                  <a href="#">Term &amp; Policy</a>
                </li>
                <li>
                  <a href="#">Your Account</a>
                </li>
              </ul>
            </div>

            <div className="col">
              <h4>Information</h4>
              <ul className="footer-list">
                <li>
                  <a href="#">Shipping &amp; Return</a>
                </li>
                <li>
                  <a href="#">Giftcards</a>
                </li>
                <li>
                  <a href="#">Track My Order</a>
                </li>
                <li>
                  <a href="#">Term &amp; Policy</a>
                </li>
                <li>
                  <a href="#">FAQs</a>
                </li>
              </ul>
            </div>

            <div className="col">
              <h4>How to Buy</h4>
              <ul className="footer-list">
                <li>
                  <a href="#">Making Payments</a>
                </li>
                <li>
                  <a href="#">Delivery Options</a>
                </li>
                <li>
                  <a href="#">Buyer Protection</a>
                </li>
                <li>
                  <a href="#">New User Guide</a>
                </li>
                <li>
                  <a href="#">Partner Ship</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NewsletterFooter;
