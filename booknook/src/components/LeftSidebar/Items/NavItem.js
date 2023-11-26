import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import './NavItem.css';

const NavItem = ({ to, icon, text, expectedKeyword, onClick }) => {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsActive(location.pathname.includes(expectedKeyword));
  }, [location.pathname, expectedKeyword]);

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link
      to={to}
      className={`ls-nav-item-container ${isActive ? 'active' : ''}`}
      onClick={handleClick}
    >
      <div className="ls-nav-item">
        <div>{icon && <img className="icon-default" src={icon} alt="icon" />}</div>
        <h6 className={`nav-text ${isActive ? 'active' : ''}`}>{text}</h6>
      </div>
    </Link>
  );
};

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default NavItem;

