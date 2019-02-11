import React from 'react';
import {NavLink} from "react-router-dom";
import Navigation from "../Navigation/Navigation";

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-dark bg-primary">
                <NavLink to="/" className="navbar-brand">Sitename</NavLink>
                <Navigation/>
            </nav>
        </header>
    );
};

export default Header;