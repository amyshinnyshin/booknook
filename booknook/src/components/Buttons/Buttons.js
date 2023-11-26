// Buttons.js

import React from 'react';
import PropTypes from 'prop-types';
import './Buttons.css';

const PrimaryButton = ({ children }) => {
  return (
    <button className="primary-button">
      {children}
    </button>
  );
};

PrimaryButton.propTypes = {
  children: PropTypes.node, // Content inside the button
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

const SecondaryButton = ({ children }) => {
  return (
    <button className="secondary-button">
      {children}
    </button>
  );
};

SecondaryButton.propTypes = {
  children: PropTypes.node, // Content inside the button
};

const SecondaryButtonWithIcon = ({ text, icon, onClick }) => {
  return (
    <button className="secondary-button" onClick={onClick}>
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
  SecondaryButton,
  SecondaryButtonWithIcon,
  TertiaryIconButton
};
