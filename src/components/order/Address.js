import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux';
import { setAddress } from '../../redux/actions/orderActions';
import { showToastr } from '../../redux/actions/toastrActions';

const Address = (props) => {
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    country: "",
    line1: "",
    line2: "",
    landmark: "",
    state: "",
    zipCode: "",
    mobile: "",
  })
  const {address, cartCount, showToastr} = props;
  
  useEffect(() => {
    if (cartCount === 0) {
      showToastr("info", "Your cart is currently empty");
      props.history.push("/");
    }

    if (Object.keys(address).length !== 0 && address.constructor === Object) {
      props.history.push("/review-order");
    }
  }, [address, props.history, cartCount, showToastr])

  const handleChange = e => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault();
    props.setAddress(inputs);
  }

  const { firstName, lastName, country, line1, line2, landmark, state, zipCode, mobile, } = inputs
  return (
    <div className="container mb-5">
      <div className="checkout-wrap pt-30">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-lg-8">
            <div className="billing-info-wrap mr-50">
              <h3>Shipping Details</h3>
              <form onSubmit={handleSubmit}>
                <div className="row">

                  <div className="col-lg-6 col-md-6">
                    <div className="billing-info mb-20">
                      <label>First Name <abbr className="required" title="required">*</abbr></label>
                      <input type="text" name="firstName" onChange={handleChange} value={firstName} required />
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6">
                    <div className="billing-info mb-20">
                      <label>Last Name <abbr className="required" title="required">*</abbr></label>
                      <input type="text" name="lastName" onChange={handleChange} value={lastName} required />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="billing-select mb-20">
                      <label>Country <abbr className="required" title="required">*</abbr></label>
                      <select name="country" value={country} onChange={handleChange} required>
                        <option value="">Select a country</option>
                        <option value="United States">United States</option>
                        <option value="Canada">Canada</option>
                        <option value="India">India</option>
                        <option value="Japan">Japan</option>
                        <option value="South Korea">South Korea</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="billing-info mb-20">
                      <label>Street Address <abbr className="required" title="required">*</abbr></label>
                      <input
                        className="billing-address"
                        placeholder="House number and street name"
                        type="text"
                        name="line1"
                        value={line1}
                        onChange={handleChange}
                        required
                      />
                      <input
                        placeholder="Apartment, suite, unit etc."
                        type="text"
                        name="line2"
                        value={line2}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="billing-info mb-20">
                      <label>Landmark <abbr className="required" title="required">*</abbr></label>
                      <input type="text" name="landmark" onChange={handleChange} value={landmark} required />
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="billing-info mb-20">
                      <label>State / County <abbr className="required" title="required">*</abbr></label>
                      <input type="text" name="state" onChange={handleChange} value={state} required />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="billing-info mb-20">
                      <label>Postcode / ZIP <abbr className="required" title="required">*</abbr></label>
                      <input type="text" name="zipCode" onChange={handleChange} value={zipCode} required />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="billing-info mb-20">
                      <label>Mobile <abbr className="required" title="required">*</abbr></label>
                      <input type="text" name="mobile" onChange={handleChange} value={mobile} required />
                    </div>
                  </div>

                  <div className="col-md-5">
                    <button className="add-to-cart w-100">
                      Deliver to this address
                    </button>
                  </div>

                </div>
              </form>
            </div>
          </div>
          <div className="col-md-2"></div>

        </div>
      </div>

    </div>
  );
}

Address.propTypes = {
  setAddress: PropTypes.func.isRequired,
  showToastr: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  address: state.orderController.address,
  cartCount: state.cart.cartCount,
})
export default connect(mapStateToProps, { setAddress, showToastr })(Address);
