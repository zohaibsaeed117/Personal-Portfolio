'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Loading() {
    const containerRef = useRef(null)
    const circleRef = useRef(null)
    const dotsRef = useRef([])
    const textRef = useRef(null)
    const progressRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Initial setup
            gsap.set([containerRef.current, textRef.current], {
                opacity: 0,
                y: 20
            })

            // Main timeline
            const tl = gsap.timeline()

            // Container entrance
            tl.to(containerRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: "power2.out"
            })

            // Text entrance
            tl.to(textRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out"
            }, "-=0.4")

            // Continuous animations
            gsap.to(circleRef.current, {
                rotation: 360,
                duration: 2,
                ease: "none",
                repeat: -1
            })

            // Floating animation
            gsap.to(containerRef.current, {
                y: -10,
                duration: 2,
                ease: "power1.inOut",
                yoyo: true,
                repeat: -1
            })

            // Dots animation
            dotsRef.current.forEach((dot, index) => {
                if (dot) {
                    gsap.to(dot, {
                        scale: 1.5,
                        opacity: 0.5,
                        duration: 0.6,
                        ease: "power2.inOut",
                        yoyo: true,
                        repeat: -1,
                        delay: index * 0.2
                    })
                }
            })

            // Progress bar animation
            if (progressRef.current) {
                gsap.to(progressRef.current, {
                    width: "100%",
                    duration: 3,
                    ease: "power2.inOut",
                    repeat: -1,
                    yoyo: true
                })
            }
        }, containerRef)

        return () => ctx.revert()
    }, []) // Empty dependency array

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-background via-background/95 to-primary/5">
            <div ref={containerRef} className="flex flex-col items-center space-y-8">
                {/* Loading Circle */}
                <div className="relative">
                    <div
                        ref={circleRef}
                        className="w-16 h-16 border-4 border-muted rounded-full border-t-primary"
                    />
                    <div className="absolute inset-0 w-16 h-16 border-4 border-transparent rounded-full border-t-primary/30 animate-pulse" />
                </div>

                {/* Loading Text */}
                <div ref={textRef} className="text-center space-y-4">
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                        Loading Portfolio
                    </h2>

                    {/* Animated Dots */}
                    <div className="flex items-center justify-center space-x-1">
                        <span className="text-muted-foreground">Please wait</span>
                        {[0, 1, 2].map((index) => (
                            <span
                                key={index}
                                ref={(el) => {
                                    if (el) dotsRef.current[index] = el
                                }}
                                className="w-1 h-1 bg-primary rounded-full"
                            />
                        ))}
                    </div>

                    {/* Progress Bar */}
                    <div className="w-48 h-1 bg-muted rounded-full overflow-hidden">
                        <div
                            ref={progressRef}
                            className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full w-0"
                        />
                    </div>
                </div>

                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-2 h-2 bg-primary/20 rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${i * 0.5}s`,
                                animation: 'float 4s ease-in-out infinite'
                            }}
                        />
                    ))}
                </div>
            </div>

            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.7; }
          50% { transform: translateY(-20px) rotate(180deg); opacity: 0.3; }
        }
      `}</style>
        </div>
    )
}
