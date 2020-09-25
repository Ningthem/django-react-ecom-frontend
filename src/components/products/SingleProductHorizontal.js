import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import BtnAddToCart from '../products/BtnAddToCart';

// Redux
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
// import { setModalSlug } from '../../redux/actions/modalActions';
import { SET_MODAL_SLUG } from '../../redux/actions/types';

class SingleProductHorizontal extends Component {
  static propTypes = {
    product: PropTypes.object.isRequired,
    cart: PropTypes.object.isRequired,
    addToCart: PropTypes.func.isRequired
  }

  state = {
    loading: false,
  }

  handleAddToCart = slug => {
    this.setState({ loading: true })
    this.props.addToCart(slug, 1);
  }

  componentDidUpdate(prevProps) {
    if (this.state.loading === true && this.props.cart.loading === false) {
      this.setState({ loading: false })
    }
  }

  render() {
    const { product, cart: { loading: cartLoading } } = this.props;

    return (
      <div className="shop-list-wrap mb-50">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6 col-12">
            <div className="product-wrap">
              <div className="product-img pro-theme-color-border product-border">
                <Link to={`/products/${product.slug}`}>
                  <img src={product.image1} className="img-hori" alt="" />
                </Link>
                <div className="shop-list-quickview">
                  <a
                    data-toggle="modal"
                    data-target="#exampleModal"
                    href="# "
                    onClick={() => this.props.setModalSlug(product.slug)}
                  >
                    <i className="fa fa-search-plus"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-8 col-md-6 col-sm-6 col-12">
            <div className="shop-list-content">
              <h3><Link to={`/products/${product.slug}`}>{product.product_name}</Link></h3>
              <div className="pro-list-price">
                <span className="font-weight-bold">${product.price - product.discount} <strike className="text-grey ml-1">${product.price}</strike></span>
              </div>
              <p>{product.short_desc}...</p>
              <div className="product-list-action">
                <a title="Add to Wishlist" href="# "><i className="fa fa-heart-o"></i></a>
                <div className="pro-list-actioncart">

                  <BtnAddToCart
                    cartLoading={this.state.loading && cartLoading}
                    slug={product.slug}
                    handleAddToCart={this.handleAddToCart}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <button onClick={() => this.props.setModalSlug(product.slug)}>Click</button> */}
      </div>
    )
  }
};

const setModalSlug = slug => dispatch => {
  dispatch({ type: SET_MODAL_SLUG, payload: slug });
}

const mapDispatchToProps = {
  setModalSlug,
  addToCart,
}

const mapStateToProps = state => ({
  cart: state.cart,
});


export default connect(mapStateToProps, mapDispatchToProps)(SingleProductHorizontal)
