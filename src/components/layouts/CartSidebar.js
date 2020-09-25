import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import PageLoader from '../common/PageLoader';

// Redux
import { connect } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartActions';

class CardSidebar extends Component {

  handleRemoveFromCart = productId => {
    this.props.removeFromCart(productId);
  }
  render() {
    const { open, handleSideNavClose } = this.props;
    if (!this.props.cart.cartItems) return null;
    const { cart: { cartItems, cartCount, cartTotal, loading } } = this.props;

    const renderCart = cartItems.map(item => {
      return (
        <li className="single-product-cart" key={item.id}>
          <div className="cart-img">
            <Link to={`/products/${item.slug}`}><img src={item.image} alt="" /></Link>
          </div>
          <div className="cart-title">
            <h4><Link to={`/products/${item.slug}`}>{item.product_name}</Link></h4>
            <span> {`${item.quantity} x $${item.price}`} </span>
          </div>
          <div className="cart-delete text-danger mt-1">
            <i className="fas fa-times-circle mr-1 " style={{ cursor: 'pointer' }} onClick={() => this.handleRemoveFromCart(item.id)}></i>
          </div>
        </li>
      )
    })

    return (
      <div className={`sidebar-cart-active ${open ? 'inside' : ''}`}>
        <div className="sidebar-cart-all">
          <button className="cart-close btn" onClick={handleSideNavClose}><i className="fas fa-times"></i></button>
          <div className="cart-content">
            <h3>Shopping Cart</h3>

            {loading ? <PageLoader /> : (
              <Fragment>
                <ul>
                  {renderCart}

                </ul>
                <div className="cart-total">
                  <div className="row">
                    <div className="col-6">
                      <h4>Subtotal: <span>${cartTotal}</span></h4>
                    </div>
                    <div className="col-6">
                      <h4>Total Items: <span>{cartCount}</span></h4>
                    </div>
                  </div>
                </div>
              </Fragment>
            )}

            <div className="cart-checkout-btn">
              <Link className="btn-hover cart-btn-style" to='/cart' onClick={handleSideNavClose}>view cart</Link>
              <Link className="no-mrg btn-hover cart-btn-style" to="/address" onClick={handleSideNavClose}>checkout</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

CardSidebar.propTypes = {
  cart: PropTypes.object.isRequired,
  removeFromCart: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  cart: state.cart,
})

export default connect(mapStateToProps, { removeFromCart })(CardSidebar);
