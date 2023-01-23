const Header = ({title}) => {
    return (
        <header className="header">
            <div className="logo"><h1>{title}</h1></div>
            <nav className="nav menu">
                <a className="menu-item" href="#">Home</a>
                <a className="menu-item" href="#">Movies</a>
                <a className="menu-item" href="#">Web Series</a>
                <a className="menu-item" href="#">Kids Show</a>
            </nav>
        </header>
    )
}

export default Header; 