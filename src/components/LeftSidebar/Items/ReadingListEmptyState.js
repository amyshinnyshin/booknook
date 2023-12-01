import React from 'react'; 
import { OutlineButton } from '../../Buttons/Buttons';
import './ReadingListEmptyState.css';



const handleButtonClick = () => {
    console.log('button clicked')
};



const ReadingListEmptyState = () => {
    return (
        <div className="rl-emptystate">
            <div className='small-section-empty-state'>
                <h6 className='card-header'>Create your first reading list</h6>
                <p className='extra-small'>We’ll help you find the books you want to read. Its easy! </p>
            </div>
            <OutlineButton
                text="Create a Reading List"
                onClick={ handleButtonClick }
            />
        </div>

    );
};



export { ReadingListEmptyState }