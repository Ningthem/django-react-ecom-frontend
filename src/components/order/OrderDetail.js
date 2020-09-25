import React, { Component, Fragment } from 'react';
// import OrderSummaryCard from './OrderSummaryCard';
import axios from 'axios';
import PageLoader from '../common/PageLoader';

// Redux
import { connect } from 'react-redux';
import AddressCard from './AddressCard';
import ItemCard from './ItemCard';

class OrderDetail extends Component {

  state = {
    order: {},
    orderItems: [],
    address: {},
    loading: true,
    orderId: ""
  }

  componentDidMount() {
    const orderId = this.props.match.params.order_id;
    this.setState({ orderId: orderId });
    // this.setOrder(orderId);
  }

  componentDidUpdate() {
    const orderId = this.props.match.params.order_id;
    const { isAuthenticated } = this.props.auth;
    if (isAuthenticated && this.state.loading === true) {
      this.setOrder(orderId);
    };
  }

  setOrder = (orderId) => {
    axios.get(`/order/${orderId}/`)
      .then(res => {
        this.setState({
          order: res.data.order,
          orderItems: res.data.order_items,
          address: res.data.address,
          loading: false
        })
      })
      .catch(err => {
        console.log('aaa')
      });
  }

  render() {
    const { order, orderItems, address, loading } = this.state;
    if (loading) {
      return <PageLoader />
    }

    const renderOrderItems = orderItems.map(item => {
      return <ItemCard item={item} key={item.id} />
    })

    const renderCouponDiv = order.coupon !== "" ? (
      <Fragment>
        <div className="card text-white bg-dark mb-3">
          <div className="card-header text-center p-2">
            <i className="fas fa-tags mr-2"></i>
            {order.coupon} APPLIED
          </div>
        </div>

        <div className="your-order-info order-total">
          <ul>
            <li>Coupon Discount <span>${order.coupon_amount} </span></li>
          </ul>
        </div>
      </Fragment>

    ) : "";

    return (
      <div className="container mb-5">
        <h3 className="font-weight-bold">Order Details</h3>
        <hr />
        <div className="row">
          <div className="col-md-8">
            <div className="row mb-4">
              {/* For Address */}
              <div className="col-md-6">
                <AddressCard address={address} />
              </div>

              <div className="col-md-6">
                <div className="card text-white  mb-3" >
                  <div className="card-header bg-dark" style={{ fontSize: 16 }}>
                    <i className="fas fa-compass mr-1 "></i> Payment
                  </div>
                  <div className="card-body">
                    <p className="card-text">Cash on Delivery</p>

                  </div>
                </div>
              </div>
            </div>

            <h4 className="font-weight-bold">Products</h4>
            <hr />
            <div className="row">
              {renderOrderItems}
            </div>
          </div>

          {/* For Order Summary */}
          <div className="col-md-4">
            <div className="your-order-area">
              <h3>Order Summary</h3>
              <div className="your-order-wrap gray-bg-4">
                <div className="your-order-info-wrap">
                  <div className="your-order-info">
                    <ul>
                      <li>Order Number<span>{order.order_id}</span></li>
                    </ul>
                  </div>

                  <div className="your-order-info order-subtotal">
                    <ul>
                      <li>Total Items<span>{order.total_items}</span></li>
                    </ul>
                  </div>

                  <div className="your-order-info order-subtotal">
                    <ul>
                      <li>Subtotal <span>${order.total_amount.toFixed(2)} </span></li>
                    </ul>
                  </div>
                  <div className="your-order-info order-subtotal">
                    <ul>
                      <li>Cart Savings <span>${order.savings.toFixed(2)} </span></li>
                    </ul>
                  </div>

                  {renderCouponDiv}

                  <div className="your-order-info order-total">
                    <ul>
                      <li>Order Amount <span>${(order.total_amount - order.savings).toFixed(2)} </span></li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
})
export default connect(mapStateToProps)(OrderDetail);

