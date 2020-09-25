import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

class SidebarMenu extends Component {
  static propTypes = {

  }

  render() {
    const { open, handleSideNavClose } = this.props;
    return (
      <div className={`clickalbe-sidebar-wrapper-active clickalbe-sidebar-wrapper-style-1 ${open ? 'sidebar-visible' : ''}`}>
        <div className="clickalbe-sidebar-wrap clickalbe-sidebar-padding-dec">
          <button className="sidebar-close btn" onClick={handleSideNavClose} ><i className="fas fa-times"></i></button>
          <div className="header-aside-content sidebar-content-100-percent">
            <div className="header-aside-menu">
              <nav>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/products-filter/search/none/category/Mobile Phones/ordering/none/page/1">Mobile Phones</Link></li>
                  <li><Link to="/products-filter/search/none/category/Tablets/ordering/none/page/1">Tablets</Link></li>
                  <li><Link to="/products-filter/search/none/category/Laptops/ordering/none/page/1">Laptops</Link></li>
                  <li><Link to="/products-filter/search/none/category/none/ordering/none/page/1">All Products</Link></li>
                  <li><Link to="/cart">Cart</Link></li>
                  <li><Link to="/about-the-site">About the Site</Link></li>
                </ul>
              </nav>
            </div>

            <p>Demo Ecommerce Site using Django, React and Redux</p>
            <div className="aside-contact-info">
              <ul>
                <li><i className=" ti-alarm-clock "></i>Monday - Friday: 9:00 - 19:00</li>
                <li><i className=" ti-email "></i>Info@example.com</li>
                <li><i className=" ti-mobile "></i>(+55) 254. 254. 254</li>
                <li><i className=" ti-home "></i>Tycho Crater, South Pole, The Moon</li>
              </ul>
            </div>
            <div className="social-icon-style-2 mb-25">
              <a className="facebook" href="/"><i className="fab fa-facebook-f"></i></a>
              <a className="twitter" href="/"><i className="fab fa-twitter"></i></a>
              <a className="google-plus" href="/"><i className="fab fa-google-plus"></i></a>
              <a className="behance" href="/"><i className="fab fa-behance"></i></a>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default SidebarMenu
