"use client"
import React, { useRef } from 'react'
import ThemeController from './ThemeController'
import { RxHamburgerMenu } from "react-icons/rx";
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Button } from './ui/button';
import ResponsiveDropDown from './ResponsiveDropDown';

const Navbar = () => {
    return (
        <div className='fixed top-0 left-0 z-50 bg-background/50 bg-opacity-10 backdrop-blur-md text-foreground flex w-full justify-between font-roboto py-4 shadow-md'>
            <h1 className='w-[30%] text-2xl ml-3 font-semibold md:ml-20 sm:ml-5 sm:text-3xl'>{"<ZS />"}</h1>
            <nav className='hidden justify-end w-[70%] lg:flex'>
                <ul className='flex text-secondary-200 items-center justify-between gap-x-4'>
                    <li><a className="hover:text-foreground/60 transition-colors" href="#about">About</a></li>
                    <li><a className="hover:text-foreground/60 transition-colors" href="#skills">Skills</a></li>
                    <li><a className="hover:text-foreground/60 transition-colors" href="#projects">Projects</a></li>
                    <li><a className="hover:text-foreground/60 transition-colors" href="#contact">Contact</a></li>
                    <Separator orientation="vertical" className="w-[2px]" />
                </ul>
                <div className='flex items-center justify-center gap-x-2 mx-2'>
                    <ThemeController />
                    <Button> <Link href="\Zohaib Saeed.pdf" rel="noopener noreferrer" target="_blank" >Download CV</Link></Button>
                </div>
            </nav>
            <div className='lg:hidden'>
                <ResponsiveDropDown />
            </div>
            {/* <div className="dropdown dropdown-end z-50 lg:hidden">
                <div tabIndex={0} role="button" className="block mr-4 active:scale-[0.9] transition "><RxHamburgerMenu size={28} /></div>
                <ul tabIndex={0} className="dropdown-content menu bg-background rounded-box z-[1] w-52 p-2 shadow">
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><Link href="/Zohaib Saeed.pdf" className='btn text-sm font-semibold bg-secondary-100 text-primary-100 px-1 rounded-lg hover:bg-gray-200'>Download Resume</Link></li>
                    <li><ThemeController /></li>
                </ul>
            </div> */}
        </div>
    )
}

export default Navbar
