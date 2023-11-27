import React from 'react'; 

import './HomePageEmptyState.css';
import { SecondaryButton } from './Buttons/Buttons';

const handleButtonClick = () => {
    
};

const HomePageEmptyState = () => {
    return (
<div className='rl-es-page-container'>
    <div className='rl-es-page-copy'>
        <img className='rl-empty-state-image' src='/assets/images/reading.png' alt='reading-list'></img>
        <h5 className='es-header'>Create your first reading list</h5>
        <p className='small'>Find the books you like to read next and add them to your list.</p>
    </div>
    <SecondaryButton
        text="Create a Reading List"
        onClick={ handleButtonClick }
        />
</div>
    )};

export default HomePageEmptyState;
