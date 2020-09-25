import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { showToastr } from '../redux/actions/toastrActions';
import { registerUser } from '../redux/actions/authActions';

const Signup = ({ showToastr, registerUser, loading, history }) => {
  const [input, setInput] = useState({
    email: '',
    username: '',
    password: '',
    rePassword: '',
  });


  const handleChange = e => setInput({ ...input, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault()
    const { email, username, password, rePassword } = input;
    if (password !== rePassword) {
      showToastr('error', 'Passwords do not match. Please re-enter')
      setInput({ ...input, password: '', rePassword: '' })
    }
    registerUser({ username, password, email }, history);
  }

  return (
    <div className="login-register-area pt-50 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-8 ml-auto mr-auto">
            <div className="login-register-wrap">
              <h2><i className="fas fa-user"></i> Signup</h2>
              <div className="login-register-form">
                <form onSubmit={handleSubmit}>

                  <div className="sin-login-register">
                    <input
                      type="email"
                      name="email"
                      value={input.email}
                      onChange={handleChange}
                      placeholder="Email address *"
                      required
                    />
                  </div>

                  <div className="sin-login-register">
                    <input
                      type="text"
                      name="username"
                      value={input.username}
                      onChange={handleChange}
                      placeholder="Username *"
                      required
                    />
                  </div>

                  <div className="sin-login-register">
                    <input
                      type="password"
                      name="password"
                      value={input.password}
                      onChange={handleChange}
                      placeholder="Password *"
                      required
                    />
                  </div>

                  <div className="sin-login-register">
                    <input
                      type="password"
                      name="rePassword"
                      value={input.rePassword}
                      onChange={handleChange}
                      placeholder="Re-enter Password *"
                      required
                    />
                  </div>

                  <div className="login-register-btn">
                    <button className="login" type="submit" disabled={loading}>
                      {loading ?
                        (
                          <div className="spinner-border text-light" role="status">
                            <span className="sr-only">Loading...</span>
                          </div>
                        ) : "Signup"
                      }

                    </button>
                  </div>
                  <div className="remember-lost-wrap">
                    <div className="lost-wrap">
                      Already have an account? <Link to="/login">Login here</Link>
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

Signup.propTypes = {
  showToastr: PropTypes.func.isRequired,
  registerUser: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
}

const mapActionToProps = {
  showToastr,
  registerUser,
}
const mapStateToProps = state => ({
  loading: state.auth.isLoading
})
export default connect(mapStateToProps, mapActionToProps)(Signup);

