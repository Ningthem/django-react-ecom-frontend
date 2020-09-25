import React, { Component } from 'react'
import { connect } from 'react-redux';
import { hideToastr } from '../../redux/actions/toastrActions';

export class Toastr extends Component {
  render() {
    const toastr = this.props.toastr;
    if (!toastr) {
      return null
    }
    let icon;
    let color;
    if (toastr.type === 'info') {
      icon = 'info-circle'
      color = 'info'
    } else if (toastr.type === 'success') {
      icon = 'check-circle'
      color = 'success'
    } else {
      icon = 'times-circle'
      color = 'danger'
    }

    setTimeout(() => {
      this.props.hideToastr();
    }, 6000)

    const styleToastr = { position: 'fixed', top: 0, right: 0, zIndex: 10000, marginTop: '80px', width: '300px' }
    return (
      <div className="toast fade show mr-3" style={styleToastr}>
        <div className="toast-header">
          <span style={{ fontSize: '18px' }}><i className={`fas fa-${icon} mr-2 text-${color}`}></i></span>
          <strong className="mr-auto">Message</strong>
          <button type="button" className="ml-2 mb-1 close" onClick={this.props.hideToastr}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="toast-body" style={{backgroundColor: '#f7f7f7'}}>
          {toastr.message}
        </div>
      </div>
    );
  };
};

const mapStateToProps = state => {
  return { toastr: state.toastr[0] }
}

export default connect(mapStateToProps, { hideToastr })(Toastr);
