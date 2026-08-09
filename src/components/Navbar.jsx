"use client"
import { useRef, useEffect } from "react"
import ThemeController from "./ThemeController"
import Link from "next/link"
import { Separator } from "@/components/ui/separator"
import { Button } from "./ui/button"
import ResponsiveDropDown from "./ResponsiveDropDown"
import { gsap } from "gsap"

const Navbar = () => {
    const navRef = useRef(null)
    const logoRef = useRef(null)
    const navItemsRef = useRef(null)
    const actionsRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Initial navbar animation on page load
            gsap.set(navRef.current, { y: -100, opacity: 0 })
            gsap.set(logoRef.current, { x: 0, opacity: 1 }) // Make sure logo is visible
            gsap.set(navItemsRef.current?.children || [], { y: 0, opacity: 1 })

            const tl = gsap.timeline()

            tl.to(navRef.current, {
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out",
            })
                .from(
                    logoRef.current,
                    {
                        x: -30,
                        opacity: 0,
                        duration: 0.6,
                        ease: "power2.out",
                    },
                    "-=0.4",
                )
                .from(
                    navItemsRef.current?.children || [],
                    {
                        y: -20,
                        opacity: 0,
                        duration: 0.5,
                        stagger: 0.1,
                        ease: "power2.out",
                    },
                    "-=0.3",

                )
                .from(
                    actionsRef.current?.children || [],
                    {
                        scale: 0.8,
                        opacity: 0,
                        duration: 0.4,
                        stagger: 0.1,
                        ease: "back.out(1.7)",
                    },
                    "-=0.2",
                )

            // Navbar scroll effect
            let lastScrollY = 0
            const handleScroll = () => {
                const currentScrollY = window.scrollY

                if (currentScrollY > lastScrollY && currentScrollY > 100) {
                    // Scrolling down - hide navbar
                    gsap.to(navRef.current, {
                        y: -100,
                        duration: 0.3,
                        ease: "power2.inOut",
                    })
                } else {
                    // Scrolling up - show navbar
                    gsap.to(navRef.current, {
                        y: 0,
                        duration: 0.3,
                        ease: "power2.inOut",
                    })
                }

                lastScrollY = currentScrollY
            }

            window.addEventListener("scroll", handleScroll)

            return () => {
                window.removeEventListener("scroll", handleScroll)
            }
        }, navRef)

        return () => ctx.revert()
    }, [])

    const handleNavItemHover = (e) => {
        gsap.to(e.target, {
            scale: 1.05,
            duration: 0.2,
            ease: "power2.out",
        })
    }

    const handleNavItemLeave = (e) => {
        gsap.to(e.target, {
            scale: 1,
            duration: 0.2,
            ease: "power2.out",
        })
    }

    return (
        <div
            ref={navRef}
            className="fixed top-0 left-0 z-50 bg-background/80 backdrop-blur-md text-foreground flex w-screen justify-between font-roboto py-4 shadow-md"
        >
            <h1
                ref={logoRef}
                className="w-[30%] text-2xl ml-3 font-semibold md:ml-20 sm:ml-5 sm:text-3xl cursor-pointer"
                onMouseEnter={(e) => {
                    gsap.to(e.target, {
                        scale: 1.1,
                        duration: 0.3,
                        ease: "back.out(1.7)",
                    })
                }}
                onMouseLeave={(e) => {
                    gsap.to(e.target, {
                        scale: 1,
                        duration: 0.3,
                        ease: "back.out(1.7)",
                    })
                }}
            >
                {"<ZS />"}
            </h1>

            <nav className="hidden justify-end w-[70%] lg:flex">
                <ul ref={navItemsRef} className="flex text-secondary-200 items-center justify-between gap-x-4">
                    <li>
                        <a
                            className="hover:text-foreground/60 transition-colors cursor-pointer"
                            href="#about"
                            onMouseEnter={handleNavItemHover}
                            onMouseLeave={handleNavItemLeave}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            className="hover:text-foreground/60 transition-colors cursor-pointer"
                            href="#experience"
                            onMouseEnter={handleNavItemHover}
                            onMouseLeave={handleNavItemLeave}
                        >
                            Experience
                        </a>
                    </li>
                    <li>
                        <a
                            className="hover:text-foreground/60 transition-colors cursor-pointer"
                            href="#skills"
                            onMouseEnter={handleNavItemHover}
                            onMouseLeave={handleNavItemLeave}
                        >
                            Skills
                        </a>
                    </li>
                    <li>
                        <a
                            className="hover:text-foreground/60 transition-colors cursor-pointer"
                            href="#projects"
                            onMouseEnter={handleNavItemHover}
                            onMouseLeave={handleNavItemLeave}
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            className="hover:text-foreground/60 transition-colors cursor-pointer"
                            href="#contact"
                            onMouseEnter={handleNavItemHover}
                            onMouseLeave={handleNavItemLeave}
                        >
                            Contact
                        </a>
                    </li>
                    <Separator orientation="vertical" className="w-[2px]" />
                </ul>
                <div ref={actionsRef} className="flex items-center justify-center gap-x-2 mx-2">
                    <ThemeController />
                    <Button>
                        <Link href="/zohaib-saeed-cv.pdf" rel="noopener noreferrer" target="_blank">
                            Download CV
                        </Link>
                    </Button>
                </div>
            </nav>

            <div className="lg:hidden">
                <ResponsiveDropDown />
            </div>
        </div>
    )
}

export default Navbar
