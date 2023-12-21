import React from 'react';
import { FaTwitter } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-200 text-black py-8">
            <div className="container mx-8 flex flex-col md:flex-row justify-between items-center md:items-start">
                <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
                    <div className="flex items-center text-gray-500 mb-3">
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
                    <h2 className="text-md mb-2">Outpost Details</h2>
                    <p className='text-justify text-sm'>The Outpost is a comprehensive collection of curated artificial intelligence software tools that cater to the needs of small business owners, bloggers, artists, musicians, entrepreneurs, marketers, writers, and researchers.</p>
                </div>

                <div className="flex w-full md:w-2/3">
                    <div className="w-full md:w-1/2 px-4">
                        <h2 className="text-lg font-semibold mb-4">The Outpost</h2>
                        <ul className="list-none text-sm space-y-1">
                            <li><a href="https://www.triveous.com/about" className='hover:text-purple-500'>About Us</a></li>
                            <li><a href="https://www.triveous.com/" className='hover:text-purple-500'>Terms and Conditions</a></li>
                            <li><a href="https://www.triveous.com/" className='hover:text-purple-500'>Privacy Policy</a></li>
                            <li><a href="https://medium.com/triveous" className='hover:text-purple-500'>Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 px-4">
                        <h2 className="text-lg font-semibold mb-4">Keep in Touch</h2>
                        <div className="flex items-center mb-4 text-sm">
                            <span className="mr-2">Follow us:</span>
                            {/* Add your social media icons here */}
                            <a href="https://www.linkedin.com/company/triveous/" className="text-black hover:text-gray-400 mr-2">
                                <FaLinkedin/>
                            </a>
                            <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Ftriveous" className="text-black hover:text-gray-400 mr-2">
                            <FaTwitter/>
                            </a>
                            <a href="https://www.linkedin.com/company/triveous/" className="text-black hover:text-gray-400">
                            <FiInstagram />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="my-4 mx-auto md:mx-6 border-t-2 border-gray-300" />
            <p className='text-center'>&copy; 2023 Your Company Name</p>
        </footer>
    );
};

export default Footer;
