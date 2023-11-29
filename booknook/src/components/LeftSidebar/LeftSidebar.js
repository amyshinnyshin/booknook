import React from 'react';
import { useLocation } from 'react-router-dom';
import './LeftSidebar.css';
import { TertiaryIconButton } from '../Buttons/Buttons';
import NavItem from './Items/NavItem';
import { ReadingListEmptyState } from './Items/ReadingListEmptyState';

const LeftSidebar = () => {
    const location = useLocation();

    // Define your routes
    const routes = [
        { path: '/home', text: 'Home', icon: '/assets/icons/house-chimney.png', expectedKeyword: 'home' },
        { path: '/browse', text: 'Browse', icon: '/assets/icons/books.png', expectedKeyword: 'browse' },
        { path: '/favorites', text: 'Favorites', icon: '/assets/icons/bookmark.png', expectedKeyword: 'favorites' },
    ];

    // Find the route that matches the current location
    const selectedRoute = routes.find(route => location.pathname.includes(route.path));

    const handleButtonClick = () => {
        // Handle button click
    };

    return (
        <div id="ls-nav" className="left-sidebar">
            <div className="ls-nav-container">
                <a className="logo-container" href="/">
                    <img className="booknook-logo" src="/assets/images/booknook-logo.png" alt="BookNook Logo" />
                    <h4 className="logo-header">BookNook</h4>
                </a>

                <div className="ls-nav-and-rl-container">
                    <nav className="ls-nav-items-container">
                        {routes.map(route => (
                            <NavItem
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
                            <TertiaryIconButton icon="/assets/icons/plus.png" onClick={handleButtonClick} />
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
