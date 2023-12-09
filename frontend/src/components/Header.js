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
                    <Link to="/login" className="hidden md:inline"> | Login</Link>
                    <Link to="/select" className="hidden md:inline"> | Target</Link>
                    <Link to="/start" className="hidden md:inline"> | Start</Link>

                    <Link to="/" className="md:hidden">H</Link>
                    <Link to="/login" className="md:hidden"> | L</Link>
                    <Link to="/select" className="md:hidden"> | T</Link>
                    <Link to="/start" className="md:hidden"> | S</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
