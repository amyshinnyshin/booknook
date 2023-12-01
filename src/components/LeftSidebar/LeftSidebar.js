import React from 'react';
import { useLocation } from 'react-router-dom';
import './LeftSidebar.css';
import { TertiaryIconButton } from '../Buttons/Buttons';
import NavItem from './Items/NavItem';
import { ReadingListEmptyState } from './Items/ReadingListEmptyState';

const LeftSidebar = () => {
    const location = useLocation();


    const routes = [
        { id:'home', path: '/home', text: 'Home', icon: '/booknook/assets/icons/house-chimney.png', expectedKeyword: 'home' },
        { id:'browse', path: '/browse', text: 'Browse', icon: '/booknook/assets/icons/books.png', expectedKeyword: 'browse' },
        { id:'favorites', path: '/favorites', text: 'Favorites', icon: '/booknook/assets/icons/bookmark.png', expectedKeyword: 'favorites' },
    ];

    const selectedRoute = routes.find(route => location.pathname.includes(route.path));

    const handleButtonClick = () => {
        console.log('button clicked');
    };

    return (
        <div id="ls-nav" className="left-sidebar">
            <div className="ls-nav-container">
                <a className="logo-container" href="/booknook/home">
                    <img className="booknook-logo" src="/booknook/assets/images/booknook-logo.png" alt="BookNook Logo" />
                    <h4 className="logo-header">BookNook</h4>
                </a>

                <div className="ls-nav-and-rl-container">
                    <nav className="ls-nav-items-container">
                        {routes.map(route => (
                            <NavItem
                                key={route.id}
                                to={route.path}
                                icon={route.icon}
                                text={route.text}
                                expectedKeyword={route.expectedKeyword}
                                isSelected={selectedRoute && selectedRoute.path === route.path}
                            />
                        ))}
                    </nav>

                    <div className="reading-list-container">
                        <div className="rl-section-header">
                            <p className="section-name">READING LIST</p>
                            <TertiaryIconButton icon="/booknook/assets/icons/plus.png" onClick={handleButtonClick} />
                        </div>

                        <div className="rl-item-container">
                            <ReadingListEmptyState />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftSidebar;
