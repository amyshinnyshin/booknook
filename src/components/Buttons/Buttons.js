import React from 'react';
import PropTypes from 'prop-types';
import './Buttons.css';

const PrimaryButton = ({ text, onClick }) => {
  return (
    <button className="primary-button" onClick={onClick}>
      {text}
    </button>
  );
};

PrimaryButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

const PrimaryButtonWithIcon = ({ text, icon, onClick }) => {
  return (
    <button className="primary-button" onClick={onClick}>
      {icon && <img className="icon-default" src={icon} alt="Icon" />}
      {text}
    </button>
  );
};

PrimaryButtonWithIcon.propTypes = {
  text: PropTypes.string.isRequired, // Text inside the button
  icon: PropTypes.string, // URL of the icon image
  onClick: PropTypes.func, // Click handler function
};


const SecondaryButton = ({ text, onClick }) => {
  return (
    <button className="secondary-button" onClick={onClick}>
      {text}
    </button>
  );
};

SecondaryButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

const SecondaryButtonWithIcon = ({ text, icon, onClick }) => {
  return (
    <button className="outline-button" onClick={onClick}>
      {icon && <img className="icon-default" src={icon} alt="Icon" />}
      {text}
    </button>
  );
};

SecondaryButtonWithIcon.propTypes = {
  text: PropTypes.string.isRequired, // Text inside the button
  icon: PropTypes.string, // URL of the icon image
  onClick: PropTypes.func, // Click handler function
};


const OutlineButton = ({ text, onClick }) => {
  return (
    <button className="outline-button" onClick={onClick}>
      {text}
    </button>
  );
};

OutlineButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

const OutlineButtonWithIcon = ({ text, icon, onClick }) => {
  return (
    <button className="outline-button" onClick={onClick}>
      {icon && <img className="icon-default" src={icon} alt="Icon" />}
      {text}
    </button>
  );
};

OutlineButtonWithIcon.propTypes = {
  text: PropTypes.string.isRequired, 
  icon: PropTypes.string, 
  onClick: PropTypes.func, 
};


const OutlineButtonNeutral = ({ text, onClick }) => {
  return (
    <button className="outline-button-neutral" onClick={onClick}>
      {text}
    </button>
  );
};
OutlineButtonNeutral.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

const OutlineButtonNeutralWithIcon = ({ text, icon, onClick }) => {
  return (
    <button className="outline-button-neutral" onClick={onClick}>
      {icon && <img className="icon-default" src={icon} alt="Icon" />}
      {text}
    </button>
  );
};

OutlineButtonNeutralWithIcon.propTypes = {
  text: PropTypes.string.isRequired, // Text inside the button
  icon: PropTypes.string, // URL of the icon image
  onClick: PropTypes.func, // Click handler function
};





const TertiaryIconButton = ({ icon, onClick }) => {
  return (
    <button className="icon-button" onClick={onClick}>
      {icon && <img className="icon-default" src={icon} alt="Icon" />}
    </button>
  );
};

TertiaryIconButton.propTypes = {
  icon: PropTypes.string,
  onClick: PropTypes.func, // Click handler function
};

export {
  PrimaryButton,
  PrimaryButtonWithIcon,
  OutlineButton,
  OutlineButtonWithIcon,
  OutlineButtonNeutral,
  OutlineButtonNeutralWithIcon,
  SecondaryButton,
  SecondaryButtonWithIcon,
  TertiaryIconButton
};
