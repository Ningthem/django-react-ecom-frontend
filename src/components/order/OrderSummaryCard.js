import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

// Redux --
import { connect } from 'react-redux';
import { applyCoupon, removeCoupon, placeOrder } from '../../redux/actions/orderActions';
import { showToastr } from '../../redux/actions/toastrActions';

class OrderSummaryCard extends Component {
  state = {
    couponName: "INSTANT10",
    couponDiscount: 0,
    couponLoading: false,
  }

  handleCouponInput = (e) => {
    this.setState({ couponName: e.target.value });
  }

  handleCouponSubmit = () => {
    const { availableCoupons } = this.props.coupon;
    this.setState({ couponLoading: true });
    if (availableCoupons.includes(this.state.couponName)) {
      setTimeout(() => {
        this.props.applyCoupon(this.state.couponName);
        this.setState({ couponDiscount: (this.props.cart.cartTotal * 0.1).toFixed(2), couponLoading: false })
      }, 2000)
    } else {
      setTimeout(() => {
        this.props.showToastr("error", "Coupon is not applicable");
        this.setState({ couponLoading: false });
      }, 2000)
    }
  }

  handleCouponRemove = () => {
    this.props.removeCoupon();
    this.setState({ couponDiscount: 0 });
  }

  handlePlaceOrder = () => {
    this.props.placeOrder(9, this.props.coupon.appliedCoupon, this.props.history)
  }

  render() {
    const { cart: { cartCount, cartTotal, cartSavings }, coupon: { appliedCoupon }, orderLoading } = this.props;
    const { couponName, couponDiscount, couponLoading } = this.state;

    const renderCouponDiv = appliedCoupon === null ? (
      <Fragment>
        <div className="your-order-info order-subtotal">
          <div className="row">
            <div className="col-9">
              <input className="form-control" type="text" value={couponName} name="couponName" onChange={this.handleCouponInput} />
            </div>
            <div className="col-3">
              <button className="btn btn-dark float-right" onClick={this.handleCouponSubmit}>
                {couponLoading ? <i className="fas fa-circle-notch fa-spin"></i> : <i className="fas fa-check-circle"></i>}
              </button>
            </div>
          </div>
        </div>
      </Fragment>
    ) : (
        <Fragment>
          <div className="your-order-info order-subtotal">
            <div className="row">
              <div className="col-9">
                <input className="form-control" type="text" value={couponName} readOnly />
              </div>
              <div className="col-3">
                <button className="btn btn-danger float-right w-100" onClick={this.handleCouponRemove}>
                  <i className="fas fa-times-circle"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="your-order-info order-subtotal">
            <ul>
              <li>Coupon Discount <span>${couponDiscount} </span></li>
            </ul>
          </div>

        </Fragment>
      );

    return (
      <div className="your-order-area">
        <h3>Your order</h3>
        <div className="your-order-wrap gray-bg-4">
          <div className="your-order-info-wrap">
            <div className="your-order-info">
              <ul>
                <li>Total Items<span>{cartCount}</span></li>
              </ul>
            </div>
            <div className="your-order-info order-subtotal">
              <ul>
                <li>Subtotal <span>${cartTotal.toFixed(2)} </span></li>
              </ul>
            </div>
            <div className="your-order-info order-subtotal">
              <ul>
                <li>Cart Savings <span>${cartSavings.toFixed(2)} </span></li>
              </ul>
            </div>

            {renderCouponDiv}

            <div className="your-order-info order-total">
              <ul>
                <li>Order Total <span>${(cartTotal - couponDiscount).toFixed(2)} </span></li>
              </ul>
            </div>
          </div>
          <div className="payment-method">
            Cash on Delivery
          </div>
        </div>
        <div className="Place-order mt-40">
          <button className="add-to-cart w-100" onClick={this.handlePlaceOrder}>
            {orderLoading ? (
              <Fragment>
                <i className="fas fa-circle-notch fa-spin mr-1 "></i>Placing Order ...
              </Fragment>
            ) : (
                "Place Order"
              )
            }
          </button>
        </div>
      </div>

    )
  }
}

OrderSummaryCard.propTypes = {
  applyCoupon: PropTypes.func.isRequired,
  removeCoupon: PropTypes.func.isRequired,
  showToastr: PropTypes.func.isRequired,
  coupon: PropTypes.object.isRequired,
  address: PropTypes.object.isRequired,
  orderLoading: PropTypes.bool.isRequired,
};

const mapDispatchToProps = {
  applyCoupon,
  removeCoupon,
  showToastr,
  placeOrder,
}
const mapStateToProps = state => ({
  coupon: state.couponController,
  address: state.orderController.address,
  orderLoading: state.orderController.orderLoading
})

export default connect(mapStateToProps, mapDispatchToProps)(OrderSummaryCard);
