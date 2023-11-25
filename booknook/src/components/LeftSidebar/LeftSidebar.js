import React from 'react'; 
import './LeftSidebar.css';


import { TertiaryIconButton } from '../Buttons/Buttons';
import NavItem from './Items/NavItem';



const LeftSidebar = () => {
    return (
        <div id="ls-nav" className="left-sidebar">
            <div className='ls-nav-container'>

                <a className="logo-container" href="/">
                        <img className="booknook-logo" src="/assets/images/booknook-logo.png" alt="booknook-logo"></img>
                        <h4 className="logo-header">BookNook</h4>
                </a>

                <div className='ls-nav-and-rl-container'>

                    <div className="ls-nav-item-container">
                        <NavItem icon="/assets/icons/house-chimney.png" text="Home" />
                        <NavItem icon="/assets/icons/books.png" text="Browse" />
                        <NavItem icon="/assets/icons/bookmark.png" text="Favorites" />
                    </div>
                    
                    <div className="reading-list-container">
                        <div className="rl-section-header">
                            <p className='section-name'>READING LIST</p>
                            <TertiaryIconButton />
                        </div>

                        <div className='rl-item-container'> 

                        </div>
                    </div>
                    
                </div>

            </div>

        </div>

    );
};

export default LeftSidebar;