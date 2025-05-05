"use client";
import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import StyledImage from './StyledImage';
import { Github, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <div className='flex items-center justify-between min-h-[80vh] mt-20 flex-col-reverse pb-10 lg:flex-row lg:justify-around lg:my-10 lg:py-10 relative z-10'>
        
        {/* LEFT SIDE */}
        <div className='w-full mt-8 lg:mt-0 lg:w-[60%]'>
          {/* Heading */}
          <h1 className="text-xl font-semibold text-secondary-100 md:text-4xl text-center lg:text-6xl md:text-left">
            Hello, I'm Zohaib <span className='inline-block animate-waving-hand'>👋</span>
          </h1>

          {/* Typewriter Text */}
          <h2 className="text-lg text-primary mt-3 font-medium text-center lg:text-left">I am  {" "}
            <Typewriter
              words={['a MERN Stack Developer', 'Next.js Developer', 'exploring React Native']}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>

          {/* Description */}
          <p className="text-base mt-6 text-secondary-200 text-center lg:text-lg lg:text-left leading-relaxed">
            I'm a <span className="text-primary font-medium">Full-Stack Web developer</span> specializing in the 
            <span className="text-primary font-medium"> MERN stack</span> — <span className="text-primary">React.js</span>, 
            <span className="text-primary"> Node.js</span>, <span className="text-primary">Express.js</span>, and 
            <span className="text-primary"> MongoDB</span>. I love building 
            <span className="text-primary font-medium"> fast</span>, <span className="text-primary font-medium">responsive</span>, 
            and <span className="text-primary font-medium">accessible</span> web apps with clean UI using 
            <span className="text-primary"> Tailwind CSS</span> and <span className="text-primary">Next.js</span>. Always learning, always building.
          </p>

          {/* Location & Availability */}
          <div className="flex gap-4 flex-wrap mt-8 justify-center lg:justify-start">
            <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full shadow-sm">
              <CiLocationOn size={18} />
              <span className="text-sm text-secondary-200">Lahore, Pakistan</span>
            </div>
            <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full shadow-sm dark:bg-green-900">
              <div className="relative">
                <div className="bg-[#3AD59A] w-3 h-3 rounded-full"></div>
                <div className="absolute top-0 left-0 w-3 h-3 rounded-full bg-[#3AD59A] animate-ping"></div>
              </div>
              <span className="text-sm text-secondary-200">Available for Online Work</span>
            </div>
          </div>

          {/* Action Buttons */}
          {/* <div className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start">
            <Link
              href="/resume.pdf"
              target="_blank"
              className="bg-primary text-white px-6 py-2 rounded-full shadow-md hover:bg-primary/90 transition"
            >
              Download Resume
            </Link>
            <Link
              href="#contact"
              className="bg-transparent border border-primary text-primary px-6 py-2 rounded-full hover:bg-primary hover:text-white transition"
            >
              Hire Me
            </Link>
          </div> */}

          {/* Social Links */}
          <div className='flex items-center gap-6 mt-10 justify-center lg:justify-start'>
            <Link href="https://github.com/zohaibsaeed117" target='_blank' title="GitHub" className='hover:text-[#666] active:scale-[0.95] transition'>
              <Github />
            </Link>
            <Link href="https://www.instagram.com/itz_zaibi_17/" target='_blank' title="Instagram" className='hover:text-[#c2124c] active:scale-[0.95] transition'>
              <Instagram size={24} />
            </Link>
            <Link href="https://www.linkedin.com/in/zohaib-saeed-90184324b/" target='_blank' title="LinkedIn" className='hover:text-[#405DE6] active:scale-[0.95] transition'>
              <Linkedin size={24} />
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <StyledImage src="/zohaib.jpg" direction="right" />
      </div>

      {/* Animated Background */}
      <BackgroundBeams />
    </div>
  );
};

export default Hero;
