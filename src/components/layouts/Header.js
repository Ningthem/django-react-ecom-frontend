import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import history from '../../utility/history';
import PropTypes from 'prop-types';

// Components
import SidebarMenu from './SidebarMenu';
import CartSidebar from './CartSidebar';
import Topbar from './Topbar';
import HeaderNavLinks from './HeaderNavLinks';

// Redux
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actions/authActions';

class Header extends Component {
  state = {
    sideNavOpen: false,
    cartOpen: false,
    searchOpen: false,
    searchInput: ""
  }
  openSideNav = () => {
    this.setState({ sideNavOpen: true });
  }

  handleOpenCart = () => this.setState({ cartOpen: true });

  handleSearchOpen = prevState => {
    this.setState({ searchOpen: !prevState });
  }

  handleSideNavClose = () => {
    this.setState({ sideNavOpen: false, cartOpen: false });
  }

  handleProductSearch = e => {
    e.preventDefault();
    history.push(`/products-filter/search/${this.state.searchInput}/category/none/ordering/none/page/1`)

    // window.location.href = `/products-filter/search/${this.state.searchInput}/category/none/ordering/none/page/1`

  }

  render() {
    const { sideNavOpen, cartOpen, searchOpen } = this.state;
    const { auth, logoutUser, cartCount } = this.props;
    return (
      <Fragment>
        <header className="header-area">
          <div className="header-large-device">

            <Topbar auth={auth} logout={logoutUser} />

            <div className="header-middle section-padding-2">
              <div className="container-fluid">
                <div className="header-ptb1">
                  <div className="row align-items-center">

                    <div className="col-xl-3 col-lg-2">
                      <div className="logo logo-res-lg">
                        <Link to="/">
                          <img src="/images/logo.png" alt="logo" />
                        </Link>
                      </div>
                    </div>

                    <HeaderNavLinks />

                    <div className="col-xl-3 col-lg-2">
                      <div className="header-right-wrap header-right-flex hr-mrg-handmade">
                        <div className="same-style same-style-mrg-dec search-3-area">
                          <button
                            className={`btn search-toggle ${searchOpen === true ? 'open' : ''}`}
                            onClick={() => this.handleSearchOpen(searchOpen)}
                          >
                            <i className={`fas fa-search ${searchOpen === true ? 'invisible' : ''}`}></i>
                            <i className="ti-close s-close"></i>
                          </button>
                          <div className={`search-wrap-3 ${searchOpen === true ? 'open' : ''}`}>
                            <form onSubmit={this.handleProductSearch}>
                              <input
                                placeholder="Search products..."
                                value={this.state.searchInput}
                                onChange={e => this.setState({ searchInput: e.target.value })}
                                type="text"
                              />
                            </form>
                          </div>
                        </div>
                        <div className="same-style same-style-mrg-dec">
                          <Link to="/wishlist"><i className="far fa-heart"></i></Link>
                        </div>
                        <div className="same-style same-style-mrg-dec">
                          <button className="cart-active btn pr-0" onClick={this.handleOpenCart}>
                            <i className="fas fa-cart-arrow-down"></i>
                          </button>
                          <sup className="cart-count">{cartCount}</sup>

                        </div>
                        <div className="same-style same-style-mrg-dec">
                          <button className="clickalbe-button-active btn" onClick={this.openSideNav} ><i className="fas fa-bars"></i></button>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </header>

        <SidebarMenu open={sideNavOpen} handleSideNavClose={this.handleSideNavClose} />
        <CartSidebar open={cartOpen} handleSideNavClose={this.handleSideNavClose} />
      </Fragment>
    )
  }
};

Header.prototypes = {
  auth: PropTypes.object.isRequired,
  logoutUser: PropTypes.object.isRequired,
  cartCount: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  auth: state.auth,
  cartCount: state.cart.cartCount
});

export default connect(mapStateToProps, { logoutUser })(Header);
