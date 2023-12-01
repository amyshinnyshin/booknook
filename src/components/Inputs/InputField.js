import React from 'react';
import PropTypes from 'prop-types';
import './InputField.css';

const InputField = ({ placeholder, label, type, onChange }) => {
    return (
        <div className='input-field-container'>
            <div className='input-field-group'>
                <label className="input-label">{label}</label>
                <input 
                    className="input-field"
                    type={type} 
                    placeholder={placeholder} 
                    onChange={onChange} 
                />
            </div>
        </div>
    );
};

InputField.propTypes = {
    placeholder: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
};

export default InputField;

