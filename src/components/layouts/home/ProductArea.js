import React, { Component } from 'react';
import axios from 'axios';
import { serverDomain } from '../../../utility';
import { Link } from 'react-router-dom';
import PageLoader from '../../common/PageLoader';


import SingleProductHomePage from '../../products/SingleProductHomePage';

class ProductArea extends Component {
  state = {
    products: [],
    loading: true
  }

  componentDidMount() {
    axios.get(`${serverDomain}/api/products-filter?category=${this.props.category}`)
      .then(res => {
        this.setState({ products: res.data.results, loading: false });
      })
  }

  render() {
    const { loading, products } = this.state;
    if (loading) {
      return <PageLoader />
    }

    const renderProduct = products.map(product => {
      return (
        <div className="col-3" key={product.id}>
          <SingleProductHomePage product={product} />
        </div>
      )
    });

    return (
      <div className="product-area pb-115">
        <div className="container">
          <div className="section-title-2 text-center mb-30">
            <h2><Link to={`/products-filter/search/none/category/${this.props.category}/ordering/none/page/1`}>{this.props.headerName}</Link></h2>
          </div>
        </div>

        <div className="px-5">
          <div className="row px-4">
            {renderProduct}
          </div>
        </div>
      </div>
    )
  }
}

export default ProductArea;
