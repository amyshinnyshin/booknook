import React, { useState } from 'react';
import './HomePageEmptyState.css';
import { OutlineButton } from './Buttons/Buttons';
import Modal from './Modals/Modal';

const HomePageEmptyState = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  const handleButtonClick = () => {
    console.log('Button clicked!');
    const dataForModal = {
      title: 'Create a Reading List',

      content: <ModalContent />,
      secondaryButtonText: 'Cancel',
      primaryButtonText: 'Save',
    };

    setModalData(dataForModal);
    setIsModalOpen(true);
  };

  const ModalContent = () => {

    return (
      <div>
        <p>This is the custom content of the modal.</p>

      </div>
    );
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='rl-es-page-container'>
      <div className='rl-es-page-copy'>
        <img className='rl-empty-state-image' src='/assets/images/reading.png' alt='reading-list'></img>
        <h5 className='es-header'>Create your first reading list</h5>
        <p className='small'>Find the books you like to read next and add them to your list.</p>
      </div>
      <OutlineButton
        text="Create a Reading List"
        onClick={handleButtonClick}
      />
      {isModalOpen && modalData && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          modalHeader={modalData.title}
          content={modalData.content}
          primaryButtonText={modalData.primaryButtonText}
          secondaryButtonText={modalData.secondaryButtonText}
          secondaryOnClick={handleCloseModal} 
          closeOnClick={handleCloseModal}
        />
      )}
    </div>
  );
};

export default HomePageEmptyState;


