import React from 'react';
import './header.css';
import Navigation from '../navigation/nav.jsx';

function Header(props) {
    const { currentTab, setCurrentTab } = props;
    return (
        <>
            <header id='header'>
                <div>
                    <h1>Jeff Montagne - Professional Portfolio</h1>
                </div>
                <div>
                    <Navigation
                        currentTab={currentTab}
                        setCurrentTab={setCurrentTab}
                    ></Navigation>
                </div>
            </header>
        </>
    );
};

export default Header;