// Modal.js

import React from 'react';
import PropTypes from 'prop-types';

import './Modal.css';
import { PrimaryButtonWithIcon, OutlineButtonNeutralWithIcon, TertiaryIconButton } from '../Buttons/Buttons';

const Modal = ({
  modalHeader,
  content,
  primaryButtonText,
  primaryButtonIcon,
  secondaryButtonText,
  secondaryButtonIcon,
  primaryOnClick,
  secondaryOnClick,
  closeOnClick,
}) => {

  return (
    <div className='modal-overlay'>
      <div className='modal-container'>
        <div className='modal-header-container'>
          <h4>{modalHeader}</h4>
          <TertiaryIconButton icon="/assets/icons/xmark.png" onClick={closeOnClick}/>
        </div>

        <div className="modal-content-container">
          {content}
        </div>

        <div className='modal-footer-container'>
          <div className='button-group'>
            <OutlineButtonNeutralWithIcon
              icon={secondaryButtonIcon}
              text={secondaryButtonText}
              onClick={secondaryOnClick} // Pass the onClick function
            />
            <PrimaryButtonWithIcon
              icon={primaryButtonIcon}
              text={primaryButtonText}
              onClick={primaryOnClick} // Pass the onClick function
            />
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  modalHeader: PropTypes.string.isRequired,
  content: PropTypes.node,
  primaryButtonText: PropTypes.string.isRequired,
  primaryButtonIcon: PropTypes.string,
  secondaryButtonText: PropTypes.string.isRequired,
  secondaryButtonIcon: PropTypes.string,
  primaryOnClick: PropTypes.func,
  secondaryOnClick: PropTypes.func,
  closeOnClick: PropTypes.func,
};

export default Modal;