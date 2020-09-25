import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import SingleCartItem from '../components/cart/SingleCartItem';
import PageLoader from '../components/common/PageLoader';
import { Link } from 'react-router-dom';

// Redux -- 
import { connect } from 'react-redux';
import { changeCartQuantity, removeFromCart } from '../redux/actions/cartActions';

const Cart = (props) => {
  const { cart: { cartItems, cartCount, cartTotal, cartSavings, loading } } = props;

  const [checkout, setCheckout] = useState(false);
  const renderCartItems = cartItems.map(item => {
    return (
      <SingleCartItem
        item={item}
        key={item.id}
        changeCartQuantity={props.changeCartQuantity}
        removeFromCart={props.removeFromCart}
      />
    )
  });

  const handleCheckOut = () => {
    setCheckout(true);
    setTimeout(() => {
      props.history.push("/address");
    }, 2000)
  }

  if (loading) {
    return <PageLoader fullPage={true} />
  };

  if (!loading && cartCount === 0) {
    return (
      <div className="container min-vh-100 mt-5">
        <div className="row">
          <div className="col-12">
            <div className="empty-cart-content text-center">
              <img src="/images/empty-cart.png" alt="logo" />
              <h3>Your cart is currently empty.</h3>
              <div className="empty-cart-btn">
                <Link to="/">Return To Shop</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderCheckOutBtn = checkout ? (
    <div className="grand-btn">
      <a href="# ">
        <i className="fas fa-circle-notch fa-spin mr-2 " style={{ fontSize: 18 }}></i>
        Checking Out ...
        </a>
    </div>
  ) : (
      <div className="grand-btn">
        <button className="add-to-cart w-100" onClick={handleCheckOut}>Proceed to checkout</button>
      </div>
    )


  return (
    <Fragment>
      <div className="cart-main-area pt-30 pb-120 min-vh-100">
        <div className="container">
          <h2 className="font-weight-bold">Shopping Cart</h2>
          <hr />
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <form action="#">
                <div className="row">
                  <div className="col-lg-8">
                    <div className="table-content table-responsive cart-table-content">
                      <table>
                        <thead>
                          <tr>
                            <th></th>
                            <th></th>
                            <th>Product</th>
                            <th> Price</th>
                            <th>Quantity</th>
                            <th></th>
                            <th>total</th>
                          </tr>
                        </thead>
                        <tbody>
                          {renderCartItems}
                        </tbody>
                      </table>
                    </div>
                    <div className="cart-shiping-update-wrapper">

                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="grand-total-wrap">
                      <h3 className="font-weight-bold">Cart Totals</h3>
                      <div className="grand-total-content pt-2">
                        <ul>
                          <li>Total Items <span>{cartCount}</span></li>
                          <li>Actual Total <span> ${cartTotal + cartSavings}</span></li>
                          <li>Subtotal <span> ${cartTotal}</span></li>
                          <li>Total Savings <span> ${cartSavings}</span></li>
                          <li>Shipping <span> Free</span>
                          </li>
                          <li>Total Price <span>${cartTotal}</span> </li>
                        </ul>
                      </div>
                      {renderCheckOutBtn}

                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

Cart.propTypes = {
  cart: PropTypes.object.isRequired,
  changeCartQuantity: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
}
const mapStateToProps = state => ({
  cart: state.cart,
})

export default connect(mapStateToProps, { changeCartQuantity, removeFromCart })(Cart);
