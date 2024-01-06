import React from 'react'; 

export default Header = ({title}) => {
    return (
        <header className="header">
            <div className="logo"><h1>{title}</h1></div>
            <nav className="nav menu">
                <a className="menu-item" href="#">Home</a> 
            </nav>
        </header>
    )
}
