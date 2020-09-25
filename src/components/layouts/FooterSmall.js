import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import ProductModal from './ProductModal';

class FooterSmall extends Component {
  state = {
    email: '',
    isSubbed: false
  }

  handleSubmit = () => {
    this.setState({ isSubbed: true })
  }
  render() {
    return (
      <Fragment>
        <div className="subscribe-area bg-black mt-50 pt-70 pb-80">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3">
                <div className="subscribe-title">
                  <h3>Stay in touch</h3>
                </div>
              </div>
              <div className="col-lg-9">
                <div id="mc_embed_signup" className="subscribe-form subscribe-mrg-1">
                  {!this.state.isSubbed ? (<form className="validate subscribe-form-style" onSubmit={this.handleSubmit}>
                    <div className="mc-form">
                      <input
                        className="email"
                        type="email"
                        required={true}
                        placeholder="Enter your email address..."
                        name="email"
                        value={this.state.email}
                        onChange={e => this.setState({ 'email': e.target.value })}
                      />
                      <div className="mc-news" aria-hidden="true">
                        <input type="text" tabIndex="-1" name="" />
                      </div>
                      <div className="clear">
                        <input id="mc-embedded-subscribe" className="button" type="submit" name="subscribe" />
                      </div>
                    </div>
                  </form>
                  ) : (
                      <h4 className="text-white">Thank you for subbing to the weekly newsletter. Just kidding, this is just a demo</h4>
                    )

                  }
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className="footer-area section-padding-2">
          <div className="container-fluid">
            <div className="footer-top pt-50 pb-50">
              <div className="row align-items-center">
                <div className="col-lg-3">
                  <div className="footer-logo">
                    <Link to="/">
                      <img src="/images/logo.png" alt="logo" />
                    </Link>
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="footer-menu">
                    <nav>
                      <ul>
                        <li><Link className="active" to="/">HOME</Link></li>
                        <li><Link to="/products-filter/search/none/category/none/ordering/none/page">All PRODUCTS</Link></li>
                        <li><Link to="/cart">CART</Link></li>
                        <li><Link to="/contact">CONTACT</Link></li>
                        <li><Link to="/about-the-site">ABOUT THE SITE</Link></li>
                      </ul>
                    </nav>
                  </div>
                </div>

                <div className="col-lg-3">
                  <div className="social-icon-style social-icon-right">
                    <a href="# "><i className="fab fa-instagram"></i></a>
                    <a href="# "><i className="fab fa-facebook"></i></a>
                    <a href="# "><i className="fab fa-twitter"></i></a>
                    <a href="# "><i className="fab fa-pinterest-p"></i></a>
                    <a href="# "><i className="fab fa-google"></i></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-botoom border-top-1">
              <div className="row">
                <div className="col-12">
                  <div className="copyright text-center copyright-ptb">
                    <p>© 2020 ECOM. <a href="/">All rights reserved.</a></p>
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

export default FooterSmall
