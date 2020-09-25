import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export class SingleProduct extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired
  }
  render() {
    const { product } = this.props;
    return (
      <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
        <div className="product-wrap mb-55">
          <div className="product-img pro-theme-color-border product-border mb-25">
            <Link to={`/products/${product.slug}`}>
              <img src={product.image1} alt="" style={{height: 300, objectFit: "contain"}} />
            </Link>
            {/* <span className="badge-green badge-right-20 badge-top-20 badge-ptb-1">NEW</span> */}
            <div className="product-action product-action-position-1 pro-action-theme-color">
              <a title="Add to Cart" href="# "><i className="fas fa-cart-arrow-down"></i></a>
              <a title="Quick View" data-toggle="modal" data-target="#exampleModal" href="# "><i className="fas fa-search-plus"></i></a>
              <a title="Add to Wishlist" href="# "><i className="fas fa-heart"></i></a>
              <a title="View Product" href="# "><i className="fas fa-eye"></i></a>
            </div>
          </div>
          <div className="product-content">
    <h4><a href="product-details.html">{product.product_name}</a></h4>
            <div className="product-price">
    <span className="new-price">${product.price}</span>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default SingleProduct
