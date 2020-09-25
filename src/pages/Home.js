import React, { Component, Fragment } from 'react';
import axios from 'axios';

// Components
import BannerArea1 from '../components/layouts/home/BannerArea1';
import ProductArea from '../components/layouts/home/ProductArea';
import BannerArea2 from '../components/layouts/home/BannerArea2';
import Facilities from '../components/layouts/home/Facilities';
import PageLoader from '../components/common/PageLoader';
import BootstrapCarousel from '../components/layouts/home/BootstrapCarousel';

class Home extends Component {
  state = {
    products: [],
    loading: true
  }
  componentDidMount() {
    axios.get(`/products/`)
      .then(res => {
        this.setState({ products: res.data, loading: false });
      })
  }
  render() {
    const { loading } = this.state;
    if (loading) {
      return <PageLoader />
    }

    return (
      <Fragment>
        {/* <HomePageSlider /> */}
        <BootstrapCarousel />
        <BannerArea1 />

        <ProductArea category="Mobile Phones" headerName={"Mobile Phones"} />

        <BannerArea2 />
        <div style={{ height: 100 }}></div>
        <ProductArea category="Tablets" headerName={"Tablets"} />

        <ProductArea category="Laptops" headerName={"Laptops"} />
        <Facilities />
      </Fragment>
    )
  }
}

export default Home
