import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ReviewOrder extends Component {
  state = {
    orderNo: ''
  }
  componentDidMount() {
    const orderNo = this.props.match.params.order_id;
    this.setState({ orderNo });
  }

  render() {

    return (
      <div className="container my-5 text-center">
        <h4>Your order has been successfully placed with order number <b>{this.state.orderNo}.</b>
          <Link className="btn btn-dark btn-sm ml-3" to={`/order/detail/${this.state.orderNo}`}>Click Here</Link> to check the order status.
        </h4>
      </div>
    )
  }
}

export default ReviewOrder;

