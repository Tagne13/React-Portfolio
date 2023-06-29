import React from 'react';
import './nav.css';

function Navigation(props) {
    const { currentTab, setCurrentTab } = props;
    return (
        <nav>
            <ul className='nav_items'>
                <li  className={currentTab === "about" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() => setCurrentTab("about")}>About Me</span>
                </li>
                <li className={currentTab === "project" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() => setCurrentTab("project")}>Projects</span>
                </li>
                <li className={currentTab === "resume" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() => setCurrentTab("resume")}>Résumé</span>
                </li>
                <li className={currentTab === "contact" ? "mx-2 navActive" : "mx-2"}>
                    <span onClick={() => setCurrentTab("contact")}>Contact</span>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;