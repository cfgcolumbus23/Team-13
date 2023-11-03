import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
        <div className="navbar">
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </div>
    );
}



export default Navbar;

