import React from 'react';
import PropTypes from 'prop-types';

import './Breadcrumb.css';

const Breadcrumb = ({ previousPage, currentPage }) => {
  const handlePageRefresh = () => {
    window.location.reload();
  };

  const handleGoBack = () => {
    if (window.history.length > 1) {
      window.location.href = '/booknook/browse';
    } else {

      console.log('No previous page available');
    }
  };
  

  return (
    <div className='breadcrumb-container'>
      <div className='breadcrumbs-group'>
        <span className="bc-item" onClick={handleGoBack}>
          {previousPage}
        </span>
        <img className="icon-default" src="/booknook/assets/icons/chevron-right.png" alt="Chevron Right Icon" />
        <div className={`bc-item currentPage`} onClick={handlePageRefresh}>
          {currentPage}
        </div>
      </div>
    </div>
  );
};

Breadcrumb.propTypes = {
    previousPage: PropTypes.string,
    currentPage: PropTypes.string,
};

export default Breadcrumb;

