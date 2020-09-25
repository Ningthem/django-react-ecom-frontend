import React from 'react';

const SavedAddresses = () => {
  return (
    <div className="billing-info-wrap mr-50">
      <h3>Saved Addresses</h3>
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="billing-info mb-20">
            <label>First Name <abbr className="required" title="required">*</abbr></label>
            <input type="text" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SavedAddresses;
