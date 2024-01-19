"use client";
import React, { useState } from 'react';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import MenuOverlay from './MenuOverlay';

const navLinks = [
    {
        title: 'Home',
        path: '/',
    },
    {
        title: 'Life',
        path: '/life',
    },
    {
        title: 'Time',
        path: '/time',
    },
    {
        title: 'Probability',
        path: '/probability'
    }
];

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (


        
        <nav className="fixed top-0 left-0 right-0 z-10 bg-white border-b border-gray-200">
         
                <div className="block md:hidden">
                    <button onClick={() => setNavbarOpen(!navbarOpen)} className="flex items-center px-3 py-2 border rounded text-slate-200 border-slate-200 hover:text-white hover:border-white">
                        {navbarOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
                    </button>
                </div>
                <div className="hidden md:block md:w-auto" id="navbar">
                    <ul className="mx-auto items-center justify-center flex p-4 px-10 pymd:p-0 md:flex-row md:space-x-20 mt-0">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} />
                            </li>
                        ))}
                    </ul>
                </div>
            {navbarOpen && <MenuOverlay links={navLinks} />}
        </nav>
    );
};

export default Navbar;
