import React from 'react';
import profile from '../../assets/profile.jpeg';
import { IoBookmarkSharp } from "react-icons/io5";
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-white border-2 border-gray-100 shadow-sm p-4">
            <div className="container mx-auto flex items-center justify-between">
                {/* Left Section - Logo */}
                <Link to="/">
                <div className="flex items-center text-gray-500">
                    <span>THE</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-8 text-purple-500 ml-1"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
                        />
                    </svg>
                    <span className="text-gray-500 text-lg">UTPOST</span>
                </div>
                </Link>
                {/* Middle Section - Tools */}
                <div className="hidden md:flex items-center space-x-6 text-gray-500">
                    <Link to="/alltools">Alltools</Link>
                    <Link to="/submit">Submit</Link>
                    <Link to="/submit-newsletter">Submit Newsletter</Link>
                    <Link to="/about-us">About Us</Link>
                </div>

                {/* Right Section - Favourite and User Login */}
                <div className="flex items-center space-x-4">
                    <IoBookmarkSharp size={25} className="text-purple-700"/>
                    <div className="flex items-center">
                        <Link to={"/"}><img src={profile} alt="User" className="h-8 rounded-full" /></Link>
                    </div>
                </div>

                {/* Mobile Menu Button - Hidden on larger screens */}
                <div className="md:hidden">
                    <button className="text-gray-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
