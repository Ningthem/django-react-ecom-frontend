import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Redux --
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';
import { removeWishlist } from '../redux/actions/wishlistActions';


class Wishlist extends Component {

  handleClick = (slug = "", wishlistId) => {
    if (slug !== "") {
      this.props.addToCart(slug, 1)
    }
    this.props.removeWishlist(wishlistId);
  }

  render() {
    const { wishlistItems } = this.props;
    const renderWishlist = wishlistItems.map(item => {
      const { id: wishlistId, product_image, product_detail: { product_name, slug, price, discount } } = item;
      return (
        <div className="col-md-4" key={wishlistId}>
          <div className="card bg-grey mb-3">
            <div className="card-body">
              <div style={{ height: 300 }}>
                <Link to={`products/${slug}`} style={{ height: 300 }}><img src={product_image} className="img-thumbnail"  alt="" /></Link>
              </div>
              <h4 className="card-title font-weight-bold mt-2">
                <Link to={`products/${slug}`}>{product_name}</Link>
              </h4>
              <h5>
                <b>${price - discount}</b>
                <strike className="ml-2">${price}</strike>
              </h5>
              <div className="row mt-2">
                <div className="col-6 pr-0">
                  <button
                    className="add-to-cart w-100"
                    style={{ height: 45, backgroundColor: "#262626", fontSize: 14 }}
                    onClick={() => this.handleClick(slug, wishlistId)}
                  >
                    Move to Cart
                  </button>
                </div>
                <div className="col-6 pl-0">
                  <button
                    className="add-to-cart w-100 px-0"
                    style={{ height: 45, backgroundColor: "#ff6e21", fontSize: 14 }}
                    onClick={() => this.handleClick("", wishlistId)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });

    let renderEmptyWishlist;
    if(wishlistItems.length === 0){
      renderEmptyWishlist = <h5>Threr are no items in your wishlist</h5>
    }
    return (
      <div className="container">
        <h3 className="font-weight-bold">Wishlisted Items</h3>
        <hr />
        <div className="row">
          {renderWishlist}
          {renderEmptyWishlist}
        </div>
      </div>
    )
  }
}

Wishlist.propTypes = {
  wishlistItems: PropTypes.array.isRequired,
  addToCart: PropTypes.func.isRequired,
  removeWishlist: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  addToCart,
  removeWishlist,
};

const mapStateToProps = state => ({
  wishlistItems: state.wishlistController.wishlistItems
});
export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);
