import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Topbar = ({ auth, logout }) => {
  const { isAuthenticated, user } = auth;

  const handleLogout = e => {
    e.preventDefault();
    logout()
  }


  const renderUser = () => {
    const username = isAuthenticated ? user.username : '';
    return (
      <div className="currency-wrap same-style-2">
        <ul>
          <li>
            <a href="# ">
              <i className="fas fa-user mr-2"></i>
              {username.charAt(0).toUpperCase() + username.slice(1)}
              <i className="fas fa-angle-down"></i>
            </a>
            <ul className="topbar-user">
              <li><Link to="/wishlist">Wishlist</Link></li>
              <li><Link to="/all-orders">Orders</Link></li>
              {/* <li><Link to="# ">Addresses</Link></li> */}
              {/* <li><Link to="# ">Change Password</Link></li> */}
              <li className="px-4">
                <form onSubmit={handleLogout}>
                  <button className="btn btn-primary btn-sm w-100">Logout</button>
                </form>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    );
  };

  const renderAccount = isAuthenticated ? renderUser() : (
    <div className="same-style-2">
      <Link className="mr-1" to="/login">Login</Link>/
      <Link className="ml-1" to="/signup">Signup</Link>
    </div>
  );

  return (
    <Fragment>
      <div className="header-top section-padding-2 bg-gray">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="social-icon-style social-mrg-dec social-font-dec">
                <a href="/"><i className="fab fa-facebook-f"></i></a>
                <a href="/"><i className="fab fa-twitter"></i></a>
                <a href="/"><i className="fab fa-youtube"></i></a>
                <a href="/"><i className="fab fa-dribbble"></i></a>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="free-delivery text-center">
                <h4>Free delivery - <span>On all orders over $90</span></h4>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="header-right-wrap header-right-flex">

                {renderAccount}

                <div className="currency-wrap same-style-2">
                  <ul>
                    <li><a href="/">USD <i className="fas fa-angle-down"></i></a>
                      <ul>
                        <li><a href="/">USD</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="language-wrap same-style-2">
                  <ul>
                    <li><a href="/">ENGLISH <i className="fas fa-angle-down"></i></a>
                      <ul>
                        <li><a href="/">ENGLISH</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Topbar;
