"use client"
import React, { useRef, useEffect } from "react"
import { CiLocationOn } from "react-icons/ci"
import StyledImage from "./StyledImage"
import { Github, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"
import { Typewriter } from "react-simple-typewriter"
import Waves from "./ui/waves"
import { useTheme } from "next-themes"
import { gsap } from "gsap"

const Hero = () => {
  const { resolvedTheme: theme } = useTheme()

  const heroRef = useRef(null)
  const headingRef = useRef(null)
  const typewriterRef = useRef(null)
  const descriptionRef = useRef(null)
  const badgesRef = useRef(null)
  const socialRef = useRef(null)
  const imageRef = useRef(null)


  useEffect(() => {

    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([headingRef.current, typewriterRef.current, descriptionRef.current], {
        y: 50,
        opacity: 0,
      })

      gsap.set(badgesRef.current?.children || [], {
        y: 30,
        opacity: 0,
      })

      gsap.set(socialRef.current?.children || [], {
        scale: 0,
        opacity: 0,
      })

      gsap.set(imageRef.current, {
        x: 100,
        opacity: 0,
        scale: 0.8,
      })

      // Create main timeline
      const tl = gsap.timeline({ delay: 0.5 })

      // Animate heading with wave effect
      tl.to(headingRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
      })
        .to(
          typewriterRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.5",
        )
        .to(
          descriptionRef.current,
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4",
        )
        .to(
          badgesRef.current?.children || [],
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.2,
            ease: "back.out(1.7)",
          },
          "-=0.3",
        )
        .to(
          socialRef.current?.children || [],
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "back.out(1.7)",
          },
          "-=0.2",
        )
        .to(
          imageRef.current,
          {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.8",
        )

      // Animate wave emoji
      const waveEmoji = headingRef.current?.querySelector(".animate-waving-hand")
      if (waveEmoji) {
        gsap.to(waveEmoji, {
          rotation: 20,
          duration: 0.5,
          ease: "power2.inOut",
          yoyo: true,
          repeat: 5,
          delay: 1.5,
        })
      }
    }, heroRef)

    return () => ctx.revert()
  }, [])

  // Social link hover animations
  const handleSocialHover = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1.2,
      rotation: 5,
      duration: 0.3,
      ease: "back.out(1.7)",
    })
  }

  const handleSocialLeave = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      rotation: 0,
      duration: 0.3,
      ease: "back.out(1.7)",
    })
  }


  return (
    <div ref={heroRef} className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <div className="flex items-center justify-between min-h-[80vh] mt-20 flex-col-reverse pb-10 lg:flex-row lg:justify-around lg:my-10 lg:py-10 relative z-10">
        {/* LEFT SIDE */}
        <div className="w-full mt-8 lg:mt-0 lg:w-[50%]">
          {/* Heading */}
          <h1
            ref={headingRef}
            className="text-xl font-semibold text-secondary-100 md:text-4xl text-center lg:text-6xl md:text-left"
          >
            Hello, I'm Zohaib <span className="inline-block animate-waving-hand">👋</span>
          </h1>

          {/* Typewriter Text */}
          <h2 ref={typewriterRef} className="text-lg text-primary mt-3 font-medium text-center lg:text-left">
            I am{" "}
            <Typewriter
              words={["a MERN Stack Developer", "Next.js Developer", "exploring React Native"]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </h2>

          {/* Description */}
          <p
            ref={descriptionRef}
            className="text-base mt-6 text-secondary-200 text-center lg:text-lg lg:text-left leading-relaxed"
          >
            I'm a <span className="text-primary font-medium">Full-Stack Web developer</span> specializing in the
            <span className="text-primary"> MERN stack</span> — <span className="text-primary">React.js</span>,
            <span className="text-primary"> Node.js</span>, <span className="text-primary">Express.js</span>, and
            <span className="text-primary"> MongoDB</span>. I love building
            <span className="text-primary font-medium"> fast</span>,{" "}
            <span className="text-primary font-medium">responsive</span>, and{" "}
            <span className="text-primary font-medium">accessible</span> web apps with clean UI using
            <span className="text-primary"> Tailwind CSS</span> and <span className="text-primary">Next.js</span>.
            Always learning, always building.
          </p>

          {/* Location & Availability */}
          <div ref={badgesRef} className="flex gap-4 flex-wrap mt-8 justify-center lg:justify-start">
            <div className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full shadow-sm backdrop-blur-sm border border-border/50">
              <CiLocationOn size={18} />
              <span className="text-sm text-secondary-200">Lahore, Pakistan</span>
            </div>
            <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full shadow-sm dark:bg-green-900 backdrop-blur-sm border border-green-200 dark:border-green-800">
              <div className="relative">
                <div className="bg-[#3AD59A] w-3 h-3 rounded-full"></div>
                <div className="absolute top-0 left-0 w-3 h-3 rounded-full bg-[#3AD59A] animate-ping"></div>
              </div>
              <span className="text-sm text-secondary-200">Available for Online Work</span>
            </div>
          </div>

          {/* Social Links */}
          <div ref={socialRef} className="flex items-center gap-6 mt-10 justify-center lg:justify-start">
            <Link
              href="https://github.com/zohaibsaeed117"
              target="_blank"
              title="GitHub"
              className="p-3 rounded-full bg-muted/50 backdrop-blur-sm border border-border/50 hover:bg-muted hover:border-border transition-all duration-300 hover:shadow-lg"
              onMouseEnter={handleSocialHover}
              onMouseLeave={handleSocialLeave}
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://www.instagram.com/itz_zaibi_17/"
              target="_blank"
              title="Instagram"
              className="p-3 rounded-full bg-muted/50 backdrop-blur-sm border border-border/50 hover:bg-muted hover:border-border transition-all duration-300 hover:shadow-lg"
              onMouseEnter={handleSocialHover}
              onMouseLeave={handleSocialLeave}
            >
              <Instagram size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/zohaib-saeed-90184324b/"
              target="_blank"
              title="LinkedIn"
              className="p-3 rounded-full bg-muted/50 backdrop-blur-sm border border-border/50 hover:bg-muted hover:border-border transition-all duration-300 hover:shadow-lg"
              onMouseEnter={handleSocialHover}
              onMouseLeave={handleSocialLeave}
            >
              <Linkedin size={20} />
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div ref={imageRef} className="lg:ml-8">
          <StyledImage src="/zohaib.jpg" direction="right" />
        </div>
      </div>

      {/* Animated Background */}
      <Waves
        lineColor={theme === "dark" ? "#0F1933" : "#D8D4D4"}
        backgroundColor={theme === "dark" ? "#020817" : "#EBEBEB"}
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
      />
    </div>
  )
}

export default Hero
