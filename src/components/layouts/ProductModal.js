import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import PageLoader from '../common/PageLoader';
import DetailMain from '../products/DetailMain';

// Redux
import { connect } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';

class ProductModal extends Component {
  state = {
    loading: true,
    product: {},
    quantity: 1,
    currentImagePosition: 1,
  }

  componentDidUpdate(prevProps) {
    if (prevProps.productSlug !== this.props.productSlug && this.props.productSlug !== null) {
      this.setState({ loading: true, currentImagePosition: 1 });
      axios.get(`/products/${this.props.productSlug}/`)
        .then(res => {
          this.setState({ product: res.data, loading: false, selectedImage: res.data.image1 });
        })
        .catch(err => {
          console.log(err);
          this.setState({ loading: false });
        });
    }
  };

  handleClickQtyButton = (btn) => {
    const { quantity } = this.state;
    if (btn === 'minus') {
      if (quantity === 1) return false;
      this.setState({ quantity: quantity - 1 });
    } else {
      if (quantity === 3) return false;
      this.setState({ quantity: quantity + 1 });
    }
  }

  handleAddToCart = productSlug => {
    this.props.addToCart(productSlug, this.state.quantity);
  }

  setImage = direction => {
    const { currentImagePosition } = this.state;
    if (direction === 'right') {
      if (currentImagePosition !== 3) {
        this.setState({ currentImagePosition: currentImagePosition + 1 })
      } else {
        this.setState({ currentImagePosition: 1 })
      }
    }

    if (direction === 'left') {
      if (currentImagePosition !== 1) {
        this.setState({ currentImagePosition: currentImagePosition - 1 })
      } else {
        this.setState({ currentImagePosition: 3 })
      }
    }
  }
  render() {
    const { loading, product, quantity, selectedImage, currentImagePosition } = this.state;
    const { loading: cartLoading } = this.props.cart;

    let image;
    if (currentImagePosition === 1) {
      image = product.image1;
    } else if (currentImagePosition === 2) {
      image = product.image2;
    } else {
      image = product.image3;
    }

    return (
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" style={{ display: "none" }} aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span className=" ti-close " aria-hidden="true"></span></button>
            </div>

            {
              loading ? <PageLoader /> :
                (
                  <div className="modal-body">
                    <div className="row no-gutters">
                      <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12" style={{ backgroundColor: "#E8E8E8" }}>
                        <div className="quickview-slider-active owl-carousel owl-loaded owl-drag">

                          <div className="owl-stage-outer">
                            <div className="owl-stage">
                              <div className="owl-item active" style={{ width: "624px", padding: "50px 100px" }}>
                                <a className="img-popup" href={selectedImage}>
                                  <img src={image} style={{margin: "auto"}} alt="" />
                                </a>
                              </div>

                            </div>
                          </div>

                          <div className="owl-nav">
                            <div className="owl-prev" onClick={() => this.setImage("left")}>
                              <i className="fas fa-angle-left" ></i>
                            </div>
                            <div className="owl-next" onClick={() => this.setImage("right")}>
                              <i className="fas fa-angle-right"></i>
                            </div>
                          </div>

                          <div className="owl-dots">
                            <div className="owl-dot active"><span></span>
                            </div>
                            <div className="owl-dot"><span></span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12">
                        <div className="product-details-content quickview-content-padding">
                          <DetailMain
                            handleClickQtyButton={this.handleClickQtyButton}
                            product={product}
                            cartLoading={cartLoading}
                            slug={this.props.productSlug}
                            quantity={quantity}
                            handleAddToCart={this.handleAddToCart}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )
            }

          </div>
        </div>
      </div>
    )
  }
}

ProductModal.propTypes = {
  cart: PropTypes.object.isRequired,

}

const mapStateToProps = state => ({
  productSlug: state.modal.productSlug,
  cart: state.cart,

})

export default connect(mapStateToProps, { addToCart })(ProductModal);
