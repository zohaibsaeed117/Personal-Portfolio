"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { gsap } from "gsap"

const StyledImage = ({ src, direction = "left", className = "" }) => {
    const containerRef = useRef(null)
    const imageRef = useRef(null)
    const overlayRef = useRef(null)
    const borderRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Floating animation for the image
            gsap.to(imageRef.current, {
                y: -8,
                duration: 3,
                ease: "power1.inOut",
                yoyo: true,
                repeat: -1,
            })

            // Subtle rotation animation for the border
            gsap.to(borderRef.current, {
                rotation: 2,
                duration: 4,
                ease: "power1.inOut",
                yoyo: true,
                repeat: -1,
            })

            // Parallax effect on mouse move
            const handleMouseMove = (e) => {
                const rect = containerRef.current.getBoundingClientRect()
                const centerX = rect.left + rect.width / 2
                const centerY = rect.top + rect.height / 2
                const deltaX = (e.clientX - centerX) / 20
                const deltaY = (e.clientY - centerY) / 20

                gsap.to(imageRef.current, {
                    x: deltaX,
                    y: deltaY - 8, // Maintain floating offset
                    duration: 0.3,
                    ease: "power2.out",
                })

                gsap.to(overlayRef.current, {
                    x: deltaX * 0.5,
                    y: deltaY * 0.5,
                    duration: 0.4,
                    ease: "power2.out",
                })
            }

            const handleMouseLeave = () => {
                gsap.to(imageRef.current, {
                    x: 0,
                    y: -8, // Return to floating position
                    duration: 0.5,
                    ease: "power2.out",
                })

                gsap.to(overlayRef.current, {
                    x: 0,
                    y: 0,
                    duration: 0.6,
                    ease: "power2.out",
                })
            }

            containerRef.current?.addEventListener("mousemove", handleMouseMove)
            containerRef.current?.addEventListener("mouseleave", handleMouseLeave)

            return () => {
                containerRef.current?.removeEventListener("mousemove", handleMouseMove)
                containerRef.current?.removeEventListener("mouseleave", handleMouseLeave)
            }
        }, containerRef)

        return () => ctx.revert()
    }, [])

    return (
        <div ref={containerRef} className={`relative inline-block h-60 w-52 lg:h-96 lg:w-80 md:h-72 md:w-64 ${className}`}>
            {/* Animated Background Elements */}
            <div
                ref={overlayRef}
                className={`absolute inset-0 transform transition-transform duration-300 ${direction === "right"
                        ? "translate-x-4 translate-y-6 lg:translate-x-6 lg:translate-y-8"
                        : "-translate-x-4 translate-y-6 lg:-translate-x-6 lg:translate-y-8"
                    }`}
            >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-2xl" />

                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-primary/30 rounded-full blur-sm" />
                <div className="absolute bottom-6 left-6 w-6 h-6 bg-secondary/40 rounded-full blur-sm" />
                <div className="absolute top-1/2 left-2 w-4 h-4 bg-accent/50 rounded-full blur-sm" />
            </div>

            {/* Decorative Border Frame */}
            <div
                ref={borderRef}
                className={`absolute inset-0 transform ${direction === "right"
                        ? "translate-x-2 translate-y-4 lg:translate-x-3 lg:translate-y-5"
                        : "-translate-x-2 translate-y-4 lg:-translate-x-3 lg:translate-y-5"
                    }`}
            >
                <div className="w-full h-full border-2 border-primary/30 rounded-2xl" />
                <div className="absolute -top-1 -left-1 w-4 h-4 border-l-2 border-t-2 border-primary/50 rounded-tl-lg" />
                <div className="absolute -top-1 -right-1 w-4 h-4 border-r-2 border-t-2 border-primary/50 rounded-tr-lg" />
                <div className="absolute -bottom-1 -left-1 w-4 h-4 border-l-2 border-b-2 border-primary/50 rounded-bl-lg" />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 border-r-2 border-b-2 border-primary/50 rounded-br-lg" />
            </div>

            {/* Main Image Container */}
            <div ref={imageRef} className="relative z-10 w-full h-full rounded-2xl overflow-hidden shadow-2xl group">
                {/* Image */}
                <Image
                    src={src || "/placeholder.svg"}
                    alt="Profile"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 250px, (max-width: 1024px) 300px, 350px"
                    priority
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Decorative Corner Elements */}
                <div className="absolute top-3 left-3 w-8 h-8 border-l-2 border-t-2 border-white/30 rounded-tl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 right-3 w-8 h-8 border-r-2 border-b-2 border-white/30 rounded-br-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            </div>

            {/* Floating Particles */}
            <div className="absolute -top-2 -right-2 w-2 h-2 bg-primary/60 rounded-full animate-pulse" />
            <div className="absolute top-1/4 -left-3 w-1.5 h-1.5 bg-secondary/60 rounded-full animate-pulse delay-300" />
            <div className="absolute bottom-1/4 -right-4 w-1 h-1 bg-accent/60 rounded-full animate-pulse delay-700" />

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 rounded-2xl blur-xl scale-110 opacity-50" />
        </div>
    )
}

export default StyledImage
