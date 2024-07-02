"use client"
import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import StyledImage from './StyledImage';
const Hero = () => {

  return (
    <div className='flex items-center justify-between mt-4 flex-col-reverse pb-10 lg:flex-row lg:justify-around lg:my-10 lg:py-10'>
      <div className='w-[60%] mt-8 lg:mt-0'>
        <h1 className="text-xl font-semibold text-secondary-100 md:text-4xl text-center lg:text-6xl md:text-left">
          Hello, I'm Zohaib 👋
        </h1>
        <p className="text-base mt-6 text-secondary-200 text-center lg:text-lg lg:text-left">
          I'm a web developer specializing in the MERN stack (React.js, Node.js, Express.js, MongoDB) with a passion for creating fast, accessible, and visually appealing web applications. Over the past two years, I've honed my skills in React.js and Tailwind CSS, while actively learning Next.js. I continuously push the boundaries of modern web technologies to deliver exceptional digital experiences.
        </p>
        <div className='mt-12'>
          <div className='flex items-center justify-center w-full lg:w-[25%]'>
            <CiLocationOn size="20" />
            <p className='w-48 text-secondary-200 text-sm ml-4 lg:text-base'>Lahore, Pakistan</p>
          </div>
          <div className='flex items-center justify-center w-full mt-2 lg:w-[25%]'>
            <GoDotFill style={{ color: '#3AD59A', backgroundColor: "#3AD59A", borderRadius: "100%" }} />
            <p className='w-48 text-secondary-200 text-sm ml-4 lg:text-base'>Available for Online Work</p>
          </div>
        </div>
        <div className='flex items-center justify-between w-full mt-10 lg:w-[15%]'>

          <a href="https://github.com/zohaibsaeed117" target='_blank' className='active:scale-[0.9] hover:text-[#666666]'><FaGithub size={24} /></a>
          <a href="https://www.instagram.com/itz_zaibi_17/" target='_blank' className='active:scale-[0.9] hover:text-[#c2124c]'><FaSquareInstagram size={24} /></a>
          <a href="https://www.linkedin.com/in/zohaib-saeed-90184324b/" target='_blank' className='active:scale-[0.9] hover:text-[#405DE6]'><FaLinkedin size={24} /></a>
        </div>
      </div>
      <StyledImage src="/zohaib.png" direction="right" />
    </div>
  )
}

export default Hero
