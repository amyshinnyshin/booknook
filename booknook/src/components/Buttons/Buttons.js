import React from 'react'; 
import './Buttons.css';

const PrimaryButton = () => {
  return (
    <button className="primary-button">
      {/* Button content goes here */}
    </button>
  );
};

const PrimaryButtonWithIcon = () => {
    return (
      <button className="primary-button">
        {/* Button content goes here */}
      </button>
    );
  };

const SecondaryButton = () => {
    return (
      <button className="primary-button">
        {/* Button content goes here */}
      </button>
    );
  };

const SecondaryButtonWithIcon = () => {
    return (
      <button className="primary-button">
        {/* Button content goes here */}
      </button>
    );
};

const TertiaryIconButton = () => {
    return (
      <button className="icon-button">
        <img className="icon-default" src="/assets/icons/plus.png" alt="add"></img>
      </button>
    );
};




export { PrimaryButton, PrimaryButtonWithIcon, SecondaryButton, SecondaryButtonWithIcon, TertiaryIconButton}

