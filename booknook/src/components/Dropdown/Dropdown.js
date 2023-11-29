import React from 'react';
import PropTypes from 'prop-types';

import './Dropdown.css'

const Dropdown = ({ options, onSelect, sectionHeader }) => {
  return (
    <div className='dropdown'>
        <p className='dropdown-section-header'>{sectionHeader}</p>
        <ul className='dropdown-list-group'>
        {options.map(option => (
            <li className='dropdown-list-item' key={option} onClick={() => onSelect(option)}>
            {option}
            </li>
        ))}
        </ul>
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func.isRequired,
  sectionHeader: PropTypes.string.isRequired,
};

export default Dropdown;





