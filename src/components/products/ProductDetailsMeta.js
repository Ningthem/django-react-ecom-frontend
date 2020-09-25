import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


const ProductDetailsMeta = ({ product }) => {
  const { id, category } = product;

  return (
    <Fragment>
      <div className="product-details-meta">
        <span>SKU: N/A</span>
        <span className="categories">
          Categories: <a href="# ">Electronics</a>,
                  <a href="# ">Mobile Phones</a>,
                  <a href="# ">Tablets</a>,
                  <a href="# ">Laptops</a>,
                </span>
        <span>Tag: <a href="# ">{category}</a></span>
        <span>Product ID: <a href="# ">{id}</a></span>
      </div>
      <div className="product-details-info">
        <a href="# "><i className=" ti-location-pin "></i>Check Store availability</a>
        <a href="# "><i className=" ti-shopping-cart "></i>Delivery and Return</a>
        <a href="# "><i className="ti-pin"></i>Ask a Question</a>
      </div>
      <div className="product-details-social-wrap">
        <span>SHARE THIS PRODUCT</span>
        <div className="product-details-social">
          <a className="facebook" href="# "><i className="fab fa-facebook-f"></i></a>
          <a className="twitter" href="# "><i className="fab fa-twitter"></i></a>
          <a className="pinterest" href="# "><i className="fab fa-pinterest-p"></i></a>
          <a className="google-plus" href="# "><i className="fab fa-google-plus-g"></i></a>
        </div>
      </div>
    </Fragment>
  )
};


ProductDetailsMeta.propTypes = {
  product: PropTypes.object.isRequired,
};


export default ProductDetailsMeta;
