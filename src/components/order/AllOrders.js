import React, { Fragment, useEffect, useState } from 'react';
import axios from "axios";
import PropTypes from 'prop-types';
import PageLoader from '../common/PageLoader';
import { Link } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';

const AllOrders = ({ isAuthenticated }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isAuthenticated) {
      axios.get('/all-orders/')
        .then(res => {
          setOrders(res.data)
          setLoading(false);
        })
        .catch(err => {
          console.log(err);
        })
    }
  }, [isAuthenticated]);

  if (loading) {
    return <PageLoader />
  }



  const renderOrder = orders.map((order, count) => {
    return (
      <tr key={count}>
        <th scope="row">{count}</th>
        <td>{order.order_id}</td>
        <td>{order.total_items}</td>
        <td>${order.order_amount.toFixed(2)}</td>
        <td>{order.created_at.substr(0, 10)}</td>
        <td><Link to={`/order/detail/${order.order_id}`}>View</Link></td>
      </tr>
    )
  })
  return (
    <div className="container">
      <h4>Recent Orders</h4>
      <hr />

      {orders.length === 0 ? (
        <Fragment> 
          <h5>Looks like there are no orders yet. <Link to="/products-filter/search/none/category/none/ordering/none/page/1" className="btn btn-primary btn-sm">Continue Shopping</Link></h5>  
        </Fragment>    
      ) : (
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Order Number</th>
                <th scope="col">Total Items</th>
                <th scope="col">Order Amount</th>
                <th scope="col">Order Date</th>
                <th scope="col">Check Status</th>
              </tr>
            </thead>
            <tbody>
              {renderOrder}
            </tbody>
          </table>
        )
      }


    </div>
  );
}

AllOrders.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(AllOrders);
