"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { gsap } from "gsap"

const ProjectCard = ({ project, index = 0 }) => {
  const cardRef = useRef(null)
  const imageRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animation
      gsap.fromTo(
        cardRef.current,
        {
          y: 80,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: index * 0.15,
          ease: "power3.out",
        },
      )

      // Card hover animation
      const handleMouseEnter = () => {
        gsap.to(cardRef.current, {
          y: -12,
          scale: 1.02,
          duration: 0.4,
          ease: "power2.out",
        })

        gsap.to(imageRef.current, {
          scale: 1.08,
          duration: 0.4,
          ease: "power2.out",
        })

        // Animate content slightly
        gsap.to(contentRef.current, {
          y: -2,
          duration: 0.3,
          ease: "power2.out",
        })
      }

      const handleMouseLeave = () => {
        gsap.to(cardRef.current, {
          y: 0,
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
        })

        gsap.to(imageRef.current, {
          scale: 1,
          duration: 0.4,
          ease: "power2.out",
        })

        gsap.to(contentRef.current, {
          y: 0,
          duration: 0.3,
          ease: "power2.out",
        })
      }

      cardRef.current?.addEventListener("mouseenter", handleMouseEnter)
      cardRef.current?.addEventListener("mouseleave", handleMouseLeave)
    }, cardRef)

    return () => ctx.revert()
  }, [index])

  const handleLinkHover = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1.15,
      rotation: 8,
      duration: 0.2,
      ease: "back.out(1.7)",
    })
  }

  const handleLinkLeave = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      rotation: 0,
      duration: 0.2,
      ease: "back.out(1.7)",
    })
  }

  const handleCTAHover = (e) => {
    gsap.to(e.currentTarget, {
      x: 5,
      duration: 0.2,
      ease: "power2.out",
    })
  }

  const handleCTALeave = (e) => {
    gsap.to(e.currentTarget, {
      x: 0,
      duration: 0.2,
      ease: "power2.out",
    })
  }

  return (
    <div
      ref={cardRef}
      className={`group relative bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 border border-border/50 backdrop-blur-sm ${
        project.featured ? "ring-2 ring-primary/20" : ""
      }`}
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium shadow-lg">
            ⭐ Featured
          </span>
        </div>
      )}

      {/* Category Badge */}
      <div className="absolute top-4 right-4 z-10">
        <span className="bg-secondary/90 backdrop-blur-sm text-secondary-foreground px-2 py-1 rounded-md text-xs font-medium">
          {project.category}
        </span>
      </div>

      {/* Project Image */}
      <div className="relative h-48 md:h-56 overflow-hidden bg-gradient-to-br from-muted to-muted/50">
        <Image
          ref={imageRef}
          src={`/projects/${project.path}`}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        {/* Overlay Links - Show on Hover */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              <Github size={20} className="text-white" />
            </Link>
          )}
          {project.link && (
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-colors"
              onMouseEnter={handleLinkHover}
              onMouseLeave={handleLinkLeave}
            >
              <ExternalLink size={20} className="text-white" />
            </Link>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div ref={contentRef} className="p-6 space-y-4">
        {/* Title */}
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">{project.shortDescription}</p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tools.slice(0, 4).map((tool, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-secondary/80 text-secondary-foreground rounded-full text-xs font-medium hover:bg-secondary transition-colors"
            >
              {tool}
            </span>
          ))}
          {project.tools.length > 4 && (
            <span className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-xs font-medium">
              +{project.tools.length - 4} more
            </span>
          )}
        </div>

        {/* Status and CTA */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-2">
            <div
              className={`w-2 h-2 rounded-full ${project.status === "completed" ? "bg-green-500" : project.status === "in-progress" ? "bg-yellow-500" : "bg-gray-400"}`}
            />
            <span className="text-xs text-muted-foreground capitalize">{project.status.replace("-", " ")}</span>
          </div>

          {/* Primary CTA */}
          <div>
            {project.link ? (
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm transition-colors group/cta"
                onMouseEnter={handleCTAHover}
                onMouseLeave={handleCTALeave}
              >
                View Live
                <ExternalLink size={14} className="group-hover/cta:translate-x-0.5 transition-transform" />
              </Link>
            ) : project.github ? (
              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium text-sm transition-colors group/cta"
                onMouseEnter={handleCTAHover}
                onMouseLeave={handleCTALeave}
              >
                View Code
                <Github size={14} className="group-hover/cta:translate-x-0.5 transition-transform" />
              </Link>
            ) : (
              <span className="text-muted-foreground text-sm font-medium">Coming Soon</span>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
