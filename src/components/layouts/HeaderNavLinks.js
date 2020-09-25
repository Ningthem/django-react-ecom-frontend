import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HeaderNavLinks extends Component {
  render() {
    return (
      <div className="col-xl-6 col-lg-8">
        <div className="main-menu menu-lh-3 main-menu-padding-1 menu-text-black text-center">
          <nav>
            <ul>
              <li><Link className="active" to="/">HOME</Link></li>
              <li><a href="# ">CATEGORIES</a>
                <ul className="sub-menu-width">
                  <li><Link to="/products-filter/search/none/category/Mobile Phones/ordering/none/page">Mobile Phones</Link></li>
                  <li><Link to="/products-filter/search/none/category/Tablets/ordering/none/page">Tablets</Link></li>
                  <li><Link to="/products-filter/search/none/category/Laptops/ordering/none/page">Laptops</Link></li>
                  <li><Link to="/products-filter/search/none/category/Headphones/ordering/none/page">Heaphones</Link></li>
                </ul>
              </li>
              <li><Link to="/products-filter/search/none/category/none/ordering/none/page">All PRODUCTS</Link></li>
              <li><Link to="/cart">CART</Link></li>
              <li><Link to="/about-the-site">ABOUT THE SITE</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    )
  }
};

export default HeaderNavLinks;
