import React, { Component } from 'react';
import BtnAddToCart from './BtnAddToCart';
import ProductDetailsMeta from './ProductDetailsMeta';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import history from '../../utility/history';

// Redux --
import { connect } from 'react-redux';
import { addWishlist, removeWishlist } from '../../redux/actions/wishlistActions';

class DetailMain extends Component {
  handleAddWishList = () => {
    if (!this.props.isAuthenticated) return history.push('/login');
    this.props.addWishlist(this.props.product.id);
  }

  handleRemoveWishList = (wishlistId) => {
    if (!this.props.isAuthenticated) return history.push('/login');
    this.props.removeWishlist(wishlistId);
  }

  render() {
    const { product, handleClickQtyButton, handleAddToCart, cartLoading, slug, quantity, wishlistItems } = this.props;

    let index = wishlistItems.findIndex(item => item.product === product.id);
    const wishlistId = index >= 0 ? wishlistItems[index].id : '';

    const renderWishlist = index >= 0 ?
      (
        <button className="transparent-button" style={{ fontSize: 30 }} title="Remove from wishlist" onClick={() => this.handleRemoveWishList(wishlistId)}>
          <i className="fas fa-heart text-danger"></i>
        </button>
      ) : (
        <button className="transparent-button" style={{ fontSize: 30 }} title="Add to wishlist" onClick={this.handleAddWishList}>
          <i className="fas fa-heart"></i>
        </button>
      )

    return (
      <div className="product-details-content pro-dec-content-left">
        {/* <div className="pro-dec-next-prev">
          <a className="prev" href="# "><i className=" ti-arrow-left "></i></a>
          <a href="# "><i className=" ti-view-grid "></i></a>
          <a className="next" href="# "><i className=" ti-arrow-right "></i></a>
        </div> */}
        <span>
          <Link to={`/products-filter/search/none/category/${product.category}/ordering/none/page/1`} style={{color: "#C3832D"}}>
            {product.category}
          </Link>
        </span>
        <h2 className="uppercase">{product.product_name}</h2>
        <div className="pro-dec-info-wrap">
          <div className="pro-dec-ratting-wrap">
            <div className="pro-dec-ratting">
              <i className="yellow fa fa-star"></i>
              <i className="yellow fa fa-star"></i>
              <i className="yellow fa fa-star"></i>
              <i className="yellow fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
            <a href="# "> 5 Customer Review</a>
          </div>
          <div className="pro-dec-stock">
            <ul>
              <li>Brand: <span>My Brand</span></li>
              <li className="green">In Stock</li>
              <li><i className="fa fa-check-circle-o"></i><span>19 Sold</span> / 40 In Stock</li>
            </ul>
          </div>
        </div>
        <h3>${product.price - product.discount}</h3>
        <h4 style={{ color: 'gray' }}><strike>${product.price}</strike></h4>
        <div className="product-details-peragraph">
          <p>{product.short_desc}...</p>
        </div>
        <div className="product-details-action-wrap">
          <div className="product-details-quality">
            <div className="cart-plus-minus">
              <div className="dec qtybutton" onClick={() => handleClickQtyButton('minus')}>-</div>
              <input
                className="cart-plus-minus-box"
                type="text"
                name="quanity"
                value={quantity}
                readOnly
              />
              <div className="inc qtybutton" onClick={() => handleClickQtyButton('plus')}>+</div>
            </div>
          </div>
          <div className="product-details-cart">

            <BtnAddToCart cartLoading={cartLoading} slug={slug} handleAddToCart={handleAddToCart} />

          </div>
          <div className="product-details-wishlist ml-2">
            {renderWishlist}
          </div>

        </div>

        <ProductDetailsMeta product={product} />
      </div>
    )
  }
}

const mapDispatchToProps = {
  addWishlist,
  removeWishlist,
}

DetailMain.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  wishlistItems: PropTypes.array.isRequired,
  addWishlist: PropTypes.func.isRequired,
  removeWishlist: PropTypes.func.isRequired,

}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  wishlistItems: state.wishlistController.wishlistItems,
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailMain);
