import React from 'react'; 
import './LeftSidebar.css';


import { TertiaryIconButton } from '../Buttons/Buttons';
import NavItem from './Items/NavItem';
import { ReadingListEmptyState } from './Items/ReadingListEmptyState';


const handleButtonClick = () => {
    
};


const LeftSidebar = () => {
    return (
        <div id="ls-nav" className="left-sidebar">
            <div className='ls-nav-container'>

                <a className="logo-container" href="/">
                        <img className="booknook-logo" src="/assets/images/booknook-logo.png" alt="booknook-logo"></img>
                        <h4 className="logo-header">BookNook</h4>
                </a>

                <div className='ls-nav-and-rl-container'>

                    <div className="ls-nav-items-container">
                        <NavItem to="/" icon="/assets/icons/house-chimney.png" text="Home" expectedKeyword="home"/>
                        <NavItem to="/browse" icon="/assets/icons/books.png" text="Browse" expectedKeyword="browse"/>
                        <NavItem to="/favorites" icon="/assets/icons/bookmark.png" text="Favorites" expectedKeyword="favorites"/>
                    </div>
                    
                    <div className="reading-list-container">
                        <div className="rl-section-header">
                            <p className='section-name'>READING LIST</p>
                            <TertiaryIconButton
                            icon="/assets/icons/plus.png"
                            onClick={ handleButtonClick }
                        />
                        </div>

                        <div className='rl-item-container'> 
                            <ReadingListEmptyState/ >
                        </div>
                    </div>
                    
                </div>

            </div>

        </div>

    );
};

export default LeftSidebar;