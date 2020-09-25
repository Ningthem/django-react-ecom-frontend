import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import axios from 'axios';

import SingleProductHorizontal from './SingleProductHorizontal';
import PageLoader from '../common/PageLoader';
import Pagination from '../common/Pagination';
import { serverDomain } from '../../utility';

class ProductsFilter extends Component {
  // http://localhost:3000/products-filter/search/aaa/category/Phones/ordering/price/page/1#

  state = {
    products: [],
    loading: true,
    pagination: {},
    isError: false,
    pageUrl: window.location.pathname.slice(0, window.location.pathname.lastIndexOf('/'))  //To remove last parameter // used to build pagination url
  }

  componentDidMount() {
    this.fetchProducts();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params !== prevProps.match.params) {
      this.setState({ pageUrl: window.location.pathname.slice(0, window.location.pathname.lastIndexOf('/')), loading: true })
      this.fetchProducts();
    }
  }

  fetchProducts = () => {
    const serverUrl = this.buildServerUrl(this.props.match.params);
    axios.get(serverUrl)
      .then(res => {
        this.setState({ products: res.data.results, loading: false });
        delete res.data["results"];
        this.setState({ pagination: res.data })
      })
      .catch(err => {
        this.setState({loading: false, isError: true})
      })
  }

  sortProducts = (sortQuery) => {
    const { search, category } = this.props.match.params;
    const sortParam = sortQuery === 'min2max' ? 'price' : '-price';
    const sortUrl = `/products-filter/search/${search}/category/${category}/ordering/${sortParam}/page/1`;
    console.log(sortUrl)
    this.props.history.push(sortUrl)
  }

  buildServerUrl = ({ search, category, ordering, page }) => {
    var searchParam, categoryParam, orderingParam, pageParam;
    if (search === 'none' || !search) {
      searchParam = "";
    } else {
      searchParam = `search=${search}`
    }

    if (category === 'none' || !category) {
      categoryParam = "";
    } else {
      categoryParam = `&category=${category}`
    }

    if (ordering === 'none' || !ordering) {
      orderingParam = "";
    } else {
      orderingParam = `&ordering=${ordering}`
    }

    if (page === 'none' || !page) {
      pageParam = "";
    } else {
      pageParam = `&page=${page}`
    }
    const serverUrl = `${serverDomain}/api/products-filter?${searchParam + categoryParam + orderingParam + pageParam}`;
    return serverUrl;
  }

  render() {
    const { products, loading, isError} = this.state;
    const { search, category, ordering, } = this.props.match.params;
    const renderProducts = products.map(product => {
      return <SingleProductHorizontal product={product} key={product.id} />
    });

    var currentSorting, selected;
    if (ordering === 'price') {
      currentSorting = 'Sort by Price: Low to High';
      selected = 1;
    } else if (ordering === '-price') {
      currentSorting = 'Sort by Price: High to Low';
      selected = 2;
    } else {
      currentSorting = "Default Sort";
      selected = 0;
    }

    if (loading) return <PageLoader />

    if(isError) return (
      <h4 className="container mt-50">Looks like you have searched for something which does not exist yet. Do you want to goto 
        <a className="btn btn-link" href="/products-filter/search/none/category/none/ordering/none/page/1">All Products</a>
      </h4>
    )
    return (
      <div className="shop-area section-padding-1 pb-120">
        <div className="container-fluid">
          <div className="shop-top-bar">
            <div className="shop-top-bar-left">
              <h4 className="font-weight-bold">
                {search !== 'none' ? `Search Results: ${search}` : ''}
                {category !== 'none' ? `Category: ${category}` : ''}
              </h4>
            </div>
            <div className="shop-top-bar-right">
              <div className="shop-tab nav">
                <a href="# shop-1" data-toggle="tab" className="active"><i className=" ti-view-list-alt "></i></a>
              </div>
              <div className="shop-short-by ml-40">
                <span>{currentSorting}<i className="fa fa-angle-down angle-down"></i></span>
                <ul>
                  <li className={selected === 0 ? 'active' : ''}><a href="# ">Default sorting</a></li>
                  <li className={selected === 1 ? 'active' : ''}><a href="# " onClick={() => this.sortProducts('min2max')}>Sort by price: low to high</a></li>
                  <li className={selected === 2 ? 'active' : ''}><a href="# " onClick={() => this.sortProducts('max2min')}>Sort by price: high to low</a></li>
                </ul>
              </div>

            </div>
          </div>

          <div className="tab-content jump-3 pt-30">

            <div id="shop-2" className="tab-pane padding-55-row-col active">
              {renderProducts}

            </div>

            <Pagination {...this.state.pagination} url={`${this.state.pageUrl}/`} />

          </div>
        </div>
      </div>

    )
  }
};

export default ProductsFilter;
