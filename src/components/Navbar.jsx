"use client"
import React, { useRef } from 'react'
import ThemeController from './ThemeController'
import { RxHamburgerMenu } from "react-icons/rx";
import Link from 'next/link';

const Navbar = () => {
    return (
        <div className='navbar justify-between font-roboto py-4 shadow-md'>
            <h1 className='w-[30%] text-2xl ml-3 font-semibold md:ml-20 sm:ml-5 sm:text-3xl'>{"<ZS />"}</h1>
            <nav className='hidden justify-end w-[70%] lg:flex'>
                <ul className='flex text-secondary-200 justify-between gap-x-4'>
                    <li><a className="hover:text-secondary-100" href="#about">About</a></li>
                    <li><a className="hover:text-secondary-100" href="#skills">Skills</a></li>
                    <li><a className="hover:text-secondary-100" href="#projects">Projects</a></li>
                    <li><a className="hover:text-secondary-100" href="#contact">Contact</a></li>
                </ul>
                <p className='mx-4'>|</p>
                <div className='flex items-center justify-center gap-4'>
                    <ThemeController />
                    <Link href="\Zohaib Saeed.pdf" rel="noopener noreferrer" target="_blank" className='btn text-sm font-semibold bg-secondary-100 text-primary-100 px-3 py-2 rounded-lg  hover:bg-[#323642] dark:hover:bg-gray-200'>Download CV</Link>
                </div>
            </nav>
            <div className="dropdown dropdown-end z-50 lg:hidden">
                <div tabIndex={0} role="button" className="block mr-4 active:scale-[0.9] transition "><RxHamburgerMenu size={28} /></div>
                <ul tabIndex={0} className="dropdown-content menu bg-primary-200 rounded-box z-[1] w-52 p-2 shadow">
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><Link href="/Zohaib Saeed.pdf" className='btn text-sm font-semibold bg-secondary-100 text-primary-100 px-1 rounded-lg hover:bg-gray-200'>Download Resume</Link></li>
                    <li><ThemeController /></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
