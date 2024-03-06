import React from 'react';

const Header = ({ title }) => {
    return (
        <div className="header">
            <div className="logo"><h1>{title}</h1></div>
            <nav className="nav menu">
                <a className="menu-item" href="/">Home</a> 
            </nav>
        </div>
    )
}

export default Header;