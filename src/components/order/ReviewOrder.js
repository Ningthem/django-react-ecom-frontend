import React, { Component } from 'react';
import OrderSummaryCard from './OrderSummaryCard';

// Redux
import { connect } from 'react-redux';
import AddressCard from './AddressCard';
import ItemCard from './ItemCard';


class ReviewOrder extends Component {
  
  render() {
    const { cart: { cartItems, } } = this.props;

    const renderOrderItems = cartItems.map(item => {
      return <ItemCard item={item} key={item.id} />
    })
    return (
      <div className="container mb-5">
        <h3 className="font-weight-bold">Review Order</h3>
        <hr />
        <div className="row">
          <div className="col-md-8">
            <div className="row mb-4">
              {/* For Address */}
              <div className="col-md-6">
                <AddressCard address={this.props.address} />
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
            <OrderSummaryCard cart={this.props.cart} history={this.props.history} />
          </div>
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  address: state.orderController.address,
  cart: state.cart,
})
export default connect(mapStateToProps)(ReviewOrder)
