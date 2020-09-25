import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';

import SingleProductHorizontal from '../components/products/SingleProductHorizontal';
import PageLoader from '../components/common/PageLoader';

class products extends Component {
  static propTypes = {

  }

  state = {
    products: [],
    loading: true,
  }

  componentDidMount() {
    axios.get('/products/')
      .then(res => {
        this.setState({ products: res.data, loading: false })
      })
  }

  render() {
    const { products, loading } = this.state; 

    const renderProducts = products.map(product => {
      return <SingleProductHorizontal product={product} key={product.id} />
    })

    if (loading === true) return <PageLoader />
    return (
      <div className="shop-area section-padding-1 pb-120">
        <div className="container-fluid">
          <div className="shop-top-bar">
            <div className="shop-top-bar-left">
              <div className="shop-page-list">
                <ul>
                  <li>Show</li>
                  <li className="active"><a href="# ">9</a> /</li>
                  <li><a href="# ">12</a> / </li>
                  <li><a href="# ">18</a> / </li>
                  <li><a href="# ">24</a></li>
                </ul>
              </div>
            </div>
            <div className="shop-top-bar-right">
              <div className="shop-tab nav">
                <a href="# shop-1" data-toggle="tab" className=""><i className=" ti-view-list-alt "></i></a>
                <a href="# shop-2" className="active" data-toggle="tab"><i className=" ti-layout-grid4"></i></a>
                <a href="# shop-3" data-toggle="tab" className=""><i className="ti-layout-grid3"></i></a>
              </div>
              <div className="shop-short-by ml-40">
                <span>Default sorting <i className="fa fa-angle-down angle-down"></i></span>
                <ul>
                  <li className="active"><a href="# ">Default sorting</a></li>
                  <li><a href="# ">Sort by popularity</a></li>
                  <li><a href="# ">Sort by average rating</a></li>
                  <li><a href="# ">Sort by latest</a></li>
                  <li><a href="# ">Sort by price: low to high</a></li>
                  <li><a href="# ">Sort by price: high to low</a></li>
                </ul>
              </div>
              <div className="shop-filter ml-25">
                <a className="shop-filter-active" href="# ">Filters <i className="fa fa-angle-down angle-down"></i></a>
              </div>
            </div>
          </div>
          <div className="product-filter-wrapper">
            <div className="row">
              <div className="col-md-3 col-sm-6 col-xs-12 mb-20">
                <div className="product-filter">
                  <h5>Price</h5>
                  <div className="price-filter">
                    <ul>
                      <li><a href="# ">$0.00 - $20.00</a></li>
                      <li><a href="# ">$20.00 - $40.00</a></li>
                      <li><a href="# ">$30.00 - $50.00</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12 mb-20">
                <div className="product-filter">
                  <h5>Size</h5>
                  <div className="product-size">
                    <ul>
                      <li><a href="# ">Full Size</a></li>
                      <li><a href="# ">L</a></li>
                      <li><a href="# ">M</a></li>
                      <li><a href="# ">S</a></li>
                      <li><a href="# ">XL</a></li>
                      <li><a href="# ">XXL</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12 mb-20">
                <div className="product-filter">
                  <h5>Color</h5>
                  <div className="product-color">
                    <ul>
                      <li><a href="# ">Blue</a></li>
                      <li><a href="# ">Brown</a></li>
                      <li><a href="# ">Green</a></li>
                      <li><a href="# "> Pink</a></li>
                      <li><a href="# ">Violet</a></li>
                      <li><a href="# "> White</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 col-xs-12 mb-20">
                <div className="product-filter">
                  <h5>Brands</h5>
                  <div className="product-brands">
                    <ul>
                      <li><a href="# ">Airi</a></li>
                      <li><a href="# ">Draven</a></li>
                      <li><a href="# ">Mango</a></li>
                      <li><a href="# "> Valentino</a></li>
                      <li><a href="# ">Zara </a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-content jump-3 pt-30">

            <div id="shop-2" className="tab-pane padding-55-row-col active">
                {renderProducts}

            </div>

            {/* <div className="pro-pagination-style mt-30 text-center">
              <ul>
                <li><a className="active" href="#">01</a></li>
                <li><a href="#">02</a></li>
                <li><a href="#">03</a></li>
                <li><a href="#">04</a></li>
                <li><a href="#">05</a></li>
              </ul>
            </div> */}

          </div>
        </div>
      </div>


    )
  }
};

export default products;
