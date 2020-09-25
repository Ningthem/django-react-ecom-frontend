import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import history from '../../utility/history';

// Redux
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import { SET_MODAL_SLUG } from '../../redux/actions/types';
import { addWishlist, removeWishlist } from '../../redux/actions/wishlistActions';


class SingleProductHomePage extends Component {

  handleAddToCart = slug => {
    this.setState({ loading: true })
    this.props.addToCart(slug, 1);
  }

  handleAddWishList = () => {
    if (!this.props.isAuthenticated) return history.push('/login');
    this.props.addWishlist(this.props.product.id);
  }

  handleRemoveWishList = (wishlistId) => {
    if (!this.props.isAuthenticated) return history.push('/login');
    this.props.removeWishlist(wishlistId);
  }

  goToProduct = slug => {
    history.push(`/products/${slug}`);
  }

  render() {
    const { product, wishlistItems, setModalSlug } = this.props;

    let index = wishlistItems.findIndex(item => item.product === product.id);
    const wishlistId = index >= 0 ? wishlistItems[index].id : '';

    const renderWishlist = index >= 0 ?
      (
        <button className="add-to-cart single-product" title="Remove from wishlist" onClick={() => this.handleRemoveWishList(wishlistId)}>
          <i className="fas fa-heart text-danger"></i>
        </button>
      ) : (
        <button className="add-to-cart single-product" title="Add to wishlist" onClick={this.handleAddWishList}>
          <i className="fas fa-heart"></i>
        </button>
      )

    return (
      <div className="card bg-grey mb-3">
        <div className="card-body">
          <div style={{ height: 300 }}>
            <Link to={`/products/${product.slug}`} style={{ height: 300 }}>
              <img src={product.image1} className="img-thumbnail border-0" alt="" />
            </Link>
          </div>
          <h4 className="card-title font-weight-bold mt-2" style={{ height: 43 }}>
            <Link to={`/products/${product.slug}`}>{product.product_name}</Link>
          </h4>
          <h5>
            <b>${product.price - product.discount}</b><strike className="ml-2">${product.price}</strike>
          </h5>
          <div className="row mt-2 text-center">
            <div className="col-1"></div>

            <div className="col-2">
              <button className="add-to-cart single-product" onClick={() => this.handleAddToCart("samsung-galaxy-tab-s7")} >
                <i className="fas fa-cart-plus"></i>
              </button>
            </div>

            <div className="col-2">
              <button className="add-to-cart single-product"
                data-toggle="modal"
                data-target="#exampleModal"
                onClick={() => setModalSlug(product.slug)}
              >
                <i className="fas fa-search-plus"></i>
              </button>
            </div>

            <div className="col-2">
              {renderWishlist}
            </div>

            <div className="col-2">
              <button className="add-to-cart single-product" onClick={() => this.goToProduct(product.slug)} >
                <i className="fas fa-eye"></i>
              </button>
            </div>

            <div className="col-2"></div>

          </div>
        </div>
      </div>
    )
  }
}

SingleProductHomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  wishlistItems: PropTypes.array.isRequired,
  setModalSlug: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  addWishlist: PropTypes.func.isRequired,
  removeWishlist: PropTypes.func.isRequired,
}
const setModalSlug = slug => dispatch => {
  dispatch({ type: SET_MODAL_SLUG, payload: slug });
}

const mapDispatchToProps = {
  setModalSlug,
  addToCart,
  addWishlist,
  removeWishlist
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  wishlistItems: state.wishlistController.wishlistItems,
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleProductHomePage);
