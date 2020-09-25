import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { showToastr } from '../redux/actions/toastrActions';
import { loginUser } from '../redux/actions/authActions';


class Login extends Component {
  state = {
    email: '',
    password: ''
  }
  static propTypes = {
    showToastr: PropTypes.func.isRequired,
    loginUser: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault()
    this.props.loginUser({ email: this.state.email, password: this.state.password }, this.props.history);
  }

  render() {
    const { email, password } = this.state;
    
    return (
      <div className="login-register-area pt-50 pb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-8 ml-auto mr-auto">
              <div className="login-register-wrap">
                <h2><i className="fas fa-user"></i> Login</h2>
                <div className="login-register-form">
                  <form onSubmit={this.handleSubmit}>
                    <div className="sin-login-register">

                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={this.handleChange}
                        placeholder="Email address *"
                        required
                      />

                    </div>
                    <div className="sin-login-register">

                      <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={this.handleChange}
                        placeholder="Password *"
                        required
                      />

                    </div>
                    <div className="login-register-btn">
                    <button className="login" type="submit" disabled={this.props.loading}>
                      {this.props.loading ?
                        (
                          <div className="spinner-border text-light" role="status">
                            <span className="sr-only">Loading...</span>
                          </div>
                        ) : "Login"
                      }

                    </button>
                    </div>
                    <div className="remember-lost-wrap">
                      <div className="remember-wrap">
                        <input type="checkbox" />
                        <label>Remember me</label>
                      </div>
                      <div className="lost-wrap">
                        <Link to="/password-reset">Forget your password?</Link>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.auth.isLoading
})

export default connect(mapStateToProps, { showToastr, loginUser })(Login);
