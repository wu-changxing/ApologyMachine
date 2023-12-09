import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <header className="fixed top-0 w-full h-20 bg-gray-200">
            <div className="flex justify-between items-center h-full px-4">
                <img src={logo} alt="Logo" className="h-12 w-12 mx-2" />
                <nav className="text-lg">
                    <Link to="/" className="hidden md:inline">Home</Link>
                    <Link to="/blanko" className="hidden md:inline"> | Blanko</Link>
                    <Link to="/slido" className="hidden md:inline"> | Slido</Link>
                    <Link to="/tetro" className="hidden md:inline"> | Tetro</Link>

                    <Link to="/" className="md:hidden">H</Link>
                    <Link to="/blanko" className="md:hidden"> | B</Link>
                    <Link to="/slido" className="md:hidden"> | S</Link>
                    <Link to="/tetro" className="md:hidden"> | T</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
