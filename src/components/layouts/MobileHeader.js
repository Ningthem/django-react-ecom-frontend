import React, { Component } from 'react'

class MobileHeader extends Component {
  render() {
    return (
      <div className="header-small-device">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-6">
              <div className="mobile-logo mobile-logo-width">
                <a href="index.html">
                  <img alt="" src="/images/logo.png" />
                </a>
              </div>
            </div>
            <div className="col-6">
              <div className="header-right-wrap header-right-flex">
                <div className="same-style">
                  <a href="wishlist.html"><i className="fas fa-heart"></i></a>
                </div>
                <div className="same-style">
                  <a className="cart-active" href="cart.html"><i className="fas fa-cart-arrow-down"></i></a>
                </div>
                <div className="same-style">
                  <a className="mobile-menu-button-active" href="/"><i className="fas fa-bars"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="category-menu-wrap bg-theme-color-yellow">
                <h3><a className="showcat" href="/"><i className="lnr lnr-menu"></i> Categories</a></h3>
                <div className="category-menu mobile-category-menu hidecat">
                  <nav>
                    <ul>
                      <li className="cr-dropdown"><a href="/">Computer <span className="fas fa-angle-down"></span></a>
                        <ul className="cr-menu-desktop-none">
                          <li className="cr-sub-dropdown sub-style"><a href="/">Laptop Accessories <i
                            className="fas fa-angle-down"></i></a>
                            <ul>
                              <li><a href="shop-fullwide.html">Laptop Keyboard</a></li>
                              <li><a href="shop-fullwide.html">Laptop Mouse</a></li>
                              <li><a href="shop-fullwide.html">Bluetooth Speaker</a></li>
                              <li><a href="shop-fullwide.html">LED Light</a></li>
                            </ul>
                          </li>
                          <li className="cr-sub-dropdown sub-style"><a href="/">Laptop Accessories <i
                            className="fas fa-angle-down"></i></a>
                            <ul>
                              <li><a href="shop-fullwide.html">Laptop Keyboard</a></li>
                              <li><a href="shop-fullwide.html">Laptop Mouse</a></li>
                              <li><a href="shop-fullwide.html">Bluetooth Speaker</a></li>
                              <li><a href="shop-fullwide.html">LED Light</a></li>
                            </ul>
                          </li>
                          <li className="cr-sub-dropdown sub-style"><a href="/">Laptop Accessories <i
                            className="fas fa-angle-down"></i></a>
                            <ul>
                              <li><a href="shop-fullwide.html">Laptop Keyboard</a></li>
                              <li><a href="shop-fullwide.html">Laptop Mouse</a></li>
                              <li><a href="shop-fullwide.html">Bluetooth Speaker</a></li>
                              <li><a href="shop-fullwide.html">LED Light</a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="cr-dropdown"><a href="/">Accessories <span className="fas fa-angle-down"></span></a>
                        <ul className="cr-menu-desktop-none">
                          <li className="cr-sub-dropdown sub-style"><a href="/">Laptop Accessories <i
                            className="fas fa-angle-down"></i></a>
                            <ul>
                              <li><a href="shop-fullwide.html">Laptop Keyboard</a></li>
                              <li><a href="shop-fullwide.html">Laptop Mouse</a></li>
                              <li><a href="shop-fullwide.html">Bluetooth Speaker</a></li>
                              <li><a href="shop-fullwide.html">LED Light</a></li>
                            </ul>
                          </li>
                          <li className="cr-sub-dropdown sub-style"><a href="/">Laptop Accessories <i
                            className="fas fa-angle-down"></i></a>
                            <ul>
                              <li><a href="shop-fullwide.html">Laptop Keyboard</a></li>
                              <li><a href="shop-fullwide.html">Laptop Mouse</a></li>
                              <li><a href="shop-fullwide.html">Bluetooth Speaker</a></li>
                              <li><a href="shop-fullwide.html">LED Light</a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="cr-dropdown"><a href="shop-fullwide.html">Computer Kit</a></li>
                      <li className="cr-dropdown"><a href="shop-fullwide.html">Laptop</a></li>
                      <li className="cr-dropdown"><a href="shop-fullwide.html">Laptop Accessories </a></li>
                      <li className="cr-dropdown"><a href="shop-fullwide.html">Smartwatch</a></li>
                      <li className="cr-dropdown"><a href="shop-fullwide.html">Accessories</a></li>
                      <li className="cr-dropdown"><a href="shop-fullwide.html">Cameras</a></li>
                      <li className="cr-dropdown"><a href="shop-fullwide.html">Mobile Phone</a></li>
                      <li className="cr-dropdown"><a href="shop-fullwide.html">Drone</a></li>
                      <li className="cr-dropdown"><a href="shop-fullwide.html">Drone Cameras</a></li>
                      <li className="cr-dropdown"><a href="shop-fullwide.html">Apple Products </a></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default MobileHeader
