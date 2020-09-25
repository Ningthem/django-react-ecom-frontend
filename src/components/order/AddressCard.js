import React from 'react';

const AddressCard = (props) => {
  const { first_name, last_name, line1, line2, landmark, state, country, zip_code, mobile } = props.address;

  return (
    <div className="card text-white  mb-3" >
      <div className="card-header bg-dark" style={{fontSize: 16}}>
        <i className="fas fa-compass mr-1 "></i> Shipping Address
      </div>
      <div className="card-body">
        <h4 className="card-title font-weight-bold">{`${first_name} ${last_name}`}</h4>
        <p className="card-text">{line1}</p>
        <p className="card-text">{line2}</p>
        <p className="card-text">{landmark}</p>
        <p className="card-text">{state}, {country}, {zip_code}</p>
        <p className="card-text">{mobile}</p>
      </div>
    </div>
  );
}

export default AddressCard;
