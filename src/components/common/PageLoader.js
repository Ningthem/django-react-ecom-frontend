import React from 'react';

const PageLoader = ({ fullPage = false }) => {
  return (
    <div className={`vertical-center ${fullPage ? 'min-vh-100' : ''}`}>
      {/* <div className="spinner-border text-primary m-auto" role="status">
        <span className="sr-only">Loading...</span>
      </div> */}
      <div className="text-info m-auto" role="status">
        <img src="/images/svg/loader.svg" width="80px" alt=""/>
      </div>
    </div>
  );
}

export default PageLoader;
