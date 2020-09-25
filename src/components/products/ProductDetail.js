import React, { useEffect, useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';

// Components
import PageLoader from '../common/PageLoader';
import DetailMain from './DetailMain';

// Redux --
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
// import { addWishlist, removeWishlist } from '../../redux/actions/wishlistActions';

const ProductDetail = (props) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState({
    image: '',
    num: 1
  });

  const slug = props.match.params.slug;

  useEffect(() => {
    axios.get(`/products/${slug}/`)
      .then(res => {
        setProduct(res.data);
        setLoading(false);
        setSelected({ image: res.data.image1 })
      })
  }, [slug]);

  const handleClickQtyButton = (btn) => {
    if (btn === 'minus') {
      if (quantity === 1) return false;
      setQuantity(quantity - 1);
    } else {
      if (quantity === 3) return false;
      setQuantity(quantity + 1);
    }
  }

  const handleAddToCart = productSlug => {
    props.addToCart(productSlug, quantity);
  }

  const handleSetImage = (val, image) => {
    setSelected({ image: image, num: val })
  }

  if (loading === true) return <PageLoader />
  const { image, num } = selected;
  const { cart: { loading: cartLoading }, wishlistItems } = props;

  return (
    <Fragment>
      <div className="breadcrumb-area section-padding-2 breadcrumb-ptb-2">
        <div className="container-fluid">
          <div className="breadcrumb-content">
            <ul>
              <li>
                <Link to="/products-filter/search/none/category/none/ordering/price/page/1">Shop</Link>
              </li>
              <li><span> &gt; </span></li>
              <li>
                <Link to={`/products-filter/search/none/category/${product.category}/ordering/none/page/1`}>{product.category}</Link>
              </li>
              <li><span> &gt; </span></li>
              <li className="active">{product.product_name}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="shop-area section-padding-2 pb-110">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-6 col-lg-12">
              <div className="product-details-tab">
                <div className="product-dec-right pro-dec-big-img-slider slick-initialized slick-slider text-center p-4" style={{ backgroundColor: "#E8E8E8" }}>
                  <img src={image} style={{ marginTop: "0px", height: "auto" }} className="img-fluid" alt="" />
                </div>
                <div className="product-dec-slider product-dec-left slick-initialized slick-slider slick-vertical">
                  <div className="slick-list draggable" >
                    <div className="slick-track">
                      <div className={`product-dec-small slick-slide ${num === 1 ? 'active' : ''}`} onClick={(e) => handleSetImage(1, product.image1)}>
                        <img src={product.image1} className="side-small-image" alt="" />
                      </div>

                      <div className={`product-dec-small slick-slide ${num === 2 ? 'active' : ''}`} onClick={(e) => handleSetImage(2, product.image2)} >
                        <img src={product.image2} className="side-small-image" alt="" />
                      </div>

                      <div className={`product-dec-small slick-slide ${num === 3 ? 'active' : ''}`} onClick={(e) => handleSetImage(3, product.image3)} >
                        <img src={product.image3} className="side-small-image" alt="" />
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="product-details-wrap pro-dec-res-mrg-top">

                <DetailMain
                  handleClickQtyButton={handleClickQtyButton}
                  product={product}
                  cartLoading={cartLoading}
                  slug={slug}
                  quantity={quantity}
                  handleAddToCart={handleAddToCart}
                  wishlistItems={wishlistItems}
                />

                <div className="pro-dec-content-right">
                  <div className="pro-dec-banner-wrap">
                    <a href="# "><img src="https://demo.hasthemes.com/young-preview/young/assets/images/product-details/pro-details-sidebar-1.png" alt="" /></a>
                    <div className="pro-dec-banner-content">
                      <h4>HELLO SUMMER</h4>
                      <h2>SALE UP <br /> TO 50%</h2>
                    </div>
                  </div>
                  <div className="sidebar-subscribe-wrap">
                    <div className="sidebar-subscribe-content text-center">
                      <i className=" ti-email "></i>
                      <h5>Join Our Newsletter</h5>
                      <p>Sale up to 20% off for your next purchase in this month!</p>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
      </div>

      <div className="description-review-area section-padding-2 pb-105">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="description-review-wrapper">
                <div className="description-review-topbar nav">
                  <a className="active" data-toggle="tab" href="#des-details1">PRODUCT DESCRIPTIONS</a>
                </div>
                <div className="tab-content description-review-bottom">
                  <div id="des-details1" className="tab-pane active">
                    <div className="product-description-wrapper">
                      <div className="row">

                        <div className="product-dec-col-62">
                          <div className="product-dec-content" dangerouslySetInnerHTML={{ __html: product.description }}>


                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </Fragment>
  );
}

ProductDetail.propTypes = {
  addToCart: PropTypes.func.isRequired,
  cart: PropTypes.object.isRequired,

}

const mapDispatchToProps = {
  addToCart,
}

const mapStateToProps = state => ({
  cart: state.cart,
  isAuthenticated: state.auth.isAuthenticated,
  wishlistItems: state.wishlistController.wishlistItems,
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
