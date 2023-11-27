import React from 'react'; 
import { SecondaryButton } from '../../Buttons/Buttons';
import './ReadingListEmptyState.css';



const handleButtonClick = () => {
    
};



const ReadingListEmptyState = () => {
    return (
        <div className="rl-emptystate">
            <div className='small-section-empty-state'>
                <h6 className='card-header'>Create your first reading list</h6>
                <p className='extra-small'>We’ll help you find the books you want to read. Its easy! </p>
            </div>
            <SecondaryButton
                text="Create a Reading List"
                onClick={ handleButtonClick }
            />
        </div>

    );
};



export { ReadingListEmptyState }