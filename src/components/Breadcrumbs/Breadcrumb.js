import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import './Breadcrumb.css';

const Breadcrumb = ({ previousPage, currentPage }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/browse');
  };

  const handlePageRefresh = () => {
    window.location.reload();
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




