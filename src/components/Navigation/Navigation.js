import React from 'react';
import {NavLink} from "react-router-dom";

const Navigation = () => (
    <ul className="nav">
        <li className="nav-item active">
            <NavLink to="/" exact className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/pages/about" className="nav-link">About</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/pages/features" className="nav-link">Features</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/pages/contacts" className="nav-link">Contacts</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/pages/admin" className="nav-link">Admin</NavLink>
        </li>
    </ul>
);

export default Navigation;