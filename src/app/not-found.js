"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home, Mail, User, Briefcase } from "lucide-react"

export default function NotFound() {
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const contentRef = useRef(null)
  const buttonsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial setup
      gsap.set([titleRef.current, contentRef.current, buttonsRef.current], {
        opacity: 0,
      })

      // Animation timeline
      const tl = gsap.timeline()

      // 404 title entrance with fade
      tl.to(titleRef.current, {
        opacity: 1,
        duration: 0.4,
      })

      // Content entrance
      tl.to(
        contentRef.current,
        {
          opacity: 1,
          duration: 0.4,
        },
        "-=0.3",
      )

      // Buttons entrance
      tl.to(
        buttonsRef.current,
        {
          opacity: 1,
          duration: 0.4,
        },
        "-=0.3",
      )
    }, containerRef)

    return () => ctx.revert()
  }, []) // Empty dependency array

  const navigationLinks = [
    { href: "/#hero", label: "Home", icon: Home },
    { href: "/#about", label: "About", icon: User },
    { href: "/#projects", label: "Projects", icon: Briefcase },
    { href: "/#contact", label: "Contact", icon: Mail },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background/95 to-primary/5 px-4">
      <div ref={containerRef} className="text-center max-w-2xl mx-auto">
        {/* 404 Title */}
        <div ref={titleRef} className="mb-8">
          <h1 className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent mb-4">
            404
          </h1>
        </div>

        {/* Content */}
        <div ref={contentRef} className="mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Page Not Found</h2>
          <p className="text-lg text-muted-foreground mb-2">
            Oops! The page you're looking for seems to have wandered off into the digital void.
          </p>
          <p className="text-muted-foreground">
            Don't worry though, even the best developers encounter 404s. Let's get you back on track!
          </p>
        </div>

        {/* Navigation Buttons */}
        <div ref={buttonsRef} className="space-y-6">
          {/* Primary Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild size="lg" className="group">
              <Link href="/">
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={() => window.history.back()}
              className="group"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </div>

          {/* Quick Navigation */}
          <div className="pt-6 border-t border-border/50">
            <p className="text-sm text-muted-foreground mb-4">Or jump to a specific section:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {navigationLinks.map((link) => {
                const Icon = link.icon
                return (
                  <Button
                    key={link.href}
                    variant="ghost"
                    size="sm"
                    asChild
                    className="group"
                  >
                    <Link href={link.href}>
                      <Icon className="w-4 h-4 mr-2" />
                      {link.label}
                    </Link>
                  </Button>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

