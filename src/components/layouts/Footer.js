import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import ProductModal from './ProductModal';

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <footer className="footer-area border-top-2">
          <div className="container">
            <div className="footer-top pt-100 pb-35">
              <div className="row align-items-center">
                <div className="col-lg-4 col-md-4">
                  <div className="footer-logo footer-logo-ngtv-mrg f-logo-small-left">
                    <Link to="/">
                      <img src="/images/logo-2.png" alt="logo" />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-8 col-md-8">
                  <div className="footer-ml-95">
                    <div className="row">
                      <div className="col-lg-3 col-md-6 col-12 col-sm-6">
                        <div className="footer-widget mb-55">
                          <h3 className="footer-title">Company</h3>
                          <div className="footer-info-list">
                            <ul>
                              <li><a href="/">About Us</a></li>
                              <li><a href="/">Our Studio</a></li>
                              <li><a href="/">Contact Us</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-12 col-sm-6">
                        <div className="footer-widget footer-mrg-1 mb-55">
                          <h3 className="footer-title">Poular Categories</h3>
                          <div className="footer-info-list">
                            <ul>
                              <li><a href="/">Man</a></li>
                              <li><a href="/">Woman</a></li>
                              <li><a href="/">Kids</a></li>
                              <li><a href="/">Accessories</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-6 col-12 col-sm-6">
                        <div className="footer-widget footer-mrg-2 mb-55">
                          <h3 className="footer-title-2">Experience App on Mobile</h3>
                          <div className="app-img">
                            <a href="/"><img src="/images/app-1.png" alt="" /></a>
                          </div>
                          <div className="app-img">
                            <a href="/"><img src="/images/app-2.png" alt="" /></a>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-12 col-sm-6">
                        <div className="footer-widget mb-55">
                          <h3 className="footer-title">Userful</h3>
                          <div className="footer-info-list">
                            <ul>
                              <li><a href="/">Help Center</a></li>
                              <li><a href="/">Affiliate Program</a></li>
                              <li><a href="/">Services</a></li>
                              <li><a href="/">Terms & Conditions</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-6 col-12 col-sm-6">
                        <div className="footer-widget footer-mrg-1 mb-55">
                          <h3 className="footer-title">Hot Tags</h3>
                          <div className="footer-info-list">
                            <ul>
                              <li><a href="/">Fashion, </a><a href="/">Furniture</a></li>
                              <li><a href="/">Design,</a><a href="/"> Minimal,</a><a href="/">Trending</a></li>
                              <li><a href="/">Skudmart,</a><a href="/"> WooCommerce,</a><a href="/">Top</a></li>
                              <li><a href="/">Dress,</a><a href="/">Suit, </a><a href="/">Kids</a></li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-5 col-md-6 col-12 col-sm-6">
                        <div className="footer-widget footer-mrg-2 mb-55">
                          <h3 className="footer-title">Contact info</h3>
                          <div className="footer-info-list">
                            <ul>
                              <li>Phone: +54.8638.8583.43</li>
                              <li>Email: info@la-studioweb.com</li>
                              <li>Open time: 9:00 - 19:00, Monday - Saturday</li>
                              <li>Local: 121 King Street, Melbourne <br />Victoria 3000 Australia</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom footer-bottom-pb">
              <div className="row align-items-center">
                <div className="col-md-6 col-12">
                  <div className="copyright">
                  </div>
                </div>
                <div className="col-md-6 col-12">
                  <div className="footer-payment footer-payment-right">
                    <a href="/"><img src="/images/payment.png" alt="" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>

        <ProductModal />
      </Fragment>
    )
  }
}

export default Footer;
