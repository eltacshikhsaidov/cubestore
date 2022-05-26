import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className='navbar'>
            <div className="logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/2/23/AS_sample_logo.png" alt="LOGO" />
            </div>

            <div className="links">
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">Products</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Contact</a>
                    </li>
                </ul>
            </div>

            <div className="buttons">
                <ul>
                    <li>
                        <a href="#">Login</a>
                    </li>
                    <li>
                        <a href="#">Sign Up</a>
                    </li>
                    <li>
                        <a href="#">Cart</a>
                    </li>
                </ul>

            </div>

        </nav>
    )
}

export default Navbar;