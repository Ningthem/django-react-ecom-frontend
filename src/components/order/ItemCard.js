import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ItemCard extends Component {
  render() {
    const { item } = this.props;

    Date.prototype.addDays = function (days) {
      var date = new Date(this.valueOf());
      date.setDate(date.getDate() + days);
      return date;
    }
    var date = new Date();
    var delivery = date.addDays(5);
    const deliveryDateString = delivery.toString().split(" ")
    var deliveryDate = deliveryDateString.slice(0, 4).map(i => {
      return i + " ";
    })

    return (
      <div className="col-12">
        <div className="card bg-gray   mb-3" >
          <div className="card-body ">
            <div className="row">
              <div className="col-3">
                <img src={item.image} height="100px" alt="" />
              </div>
              <div className="col-9">
                <h4 className="card-title font-weight-bold ">
                  <Link to={`/products/${item.slug}`}>{item.product_name}</Link>
                  <p className="float-right font-weight-bold font-italic">Delivery by {deliveryDate}</p>
                </h4>
                <p className="card-text ">Price: ${item.price - item.discount}  <span className="ml-5">Savings: ${item.discount}</span></p>
                <p className="card-text ">Quantity: {item.quantity}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ItemCard
