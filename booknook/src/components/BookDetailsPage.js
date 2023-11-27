import React from 'react';
import Breadcrumb from './Breadcrumbs/Breadcrumb';


import './BookDetailsPage.css';
import { PrimaryButtonWithIcon } from './Buttons/Buttons';


const handleButtonClick = () => {
    
};


const BookDetailsPage = () => {
    return (
        <div className='book-detail-page-container'>
            <Breadcrumb/ >

            <div className='bd-book-details'>
                <div className='bd-top-section'>
                    <div className='book-image'>

                    </div>
                    <div className='bd-right-section'>
                        <div className='bd-header-group'>
                            <p className='bd-genre'>NON-FICTION</p>
                            <h1 className="bd-book-name">Book Name</h1>
                            <h4 className='bd-author'>Author Name</h4>
                        </div>
                        
                        <PrimaryButtonWithIcon
                            text="Add to Reading List"
                            icon="/assets/icons/plus-white.png"
                            onClick={ handleButtonClick }
                        />
                    </div>

                </div>
                <div>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                    </p>
                </div>

                <hr className="line-divider"></hr>

                <div>
                    <h4 className='page-ection-header'>More Books from this Author</h4>
                <div>

                </div>
                </div>
            </div>

            
        </div>
  );
};

export default BookDetailsPage;

