
import React from 'react';
import PropTypes from 'prop-types';
import './NavItem.css';

const NavItem = ({icon, text})  => {
    return (
        <a className="ls-nav-item-container" href="/">
            <div className="ls-nav-item"> 
                <div>
                    {icon && <img className="icon-default" src={icon} alt="icon" />}
                </div>
                <h6 className='nav-text'>{text}</h6>
            </div>
        </a>
    );
};

NavItem.propTypes = {
    icon: PropTypes.string,
    text: PropTypes.string.isRequired,
};

export default NavItem;
