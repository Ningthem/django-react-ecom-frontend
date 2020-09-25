import React, { Fragment } from 'react';

const BtnAddToCart = ({ cartLoading, handleAddToCart, slug }) => {
  return (
    <Fragment>
      {
        cartLoading ? (
          <button title="Add to cart" className="add-to-cart  ml-3">
            <div className="spinner-border text-light" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </button>
        ) : (
            <button title="Add to cart" className="add-to-cart ml-3" onClick={() => handleAddToCart(slug)} >
              Add to Cart
            </button>
          )
      }
    </Fragment>
  );
}

export default BtnAddToCart;
