"use client"

import { useRef, useEffect, useState } from "react"
import Badge from "./Badge"
import ProjectCard from "./ProjectCard"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {
    projectsData,
    generateCategories,
    filterProjectsByCategory,
    sortProjects,
    getProjectStats,
} from "@/constants/projects"

gsap.registerPlugin(ScrollTrigger)

const Projects = () => {
    const [activeCategory, setActiveCategory] = useState("all")
    const [filteredProjects, setFilteredProjects] = useState([])
    const [categories, setCategories] = useState([])
    const [projectStats, setProjectStats] = useState({})

    const projectsRef = useRef(null)
    const badgeRef = useRef(null)
    const descriptionRef = useRef(null)
    const categoriesRef = useRef(null)
    const projectsGridRef = useRef(null)
    const statsRef = useRef(null)

    // Initialize data
    useEffect(() => {
        const sortedProjects = sortProjects(projectsData, "featured")
        const dynamicCategories = generateCategories(projectsData)
        const stats = getProjectStats(projectsData)

        setCategories(dynamicCategories)
        setProjectStats(stats)
        setFilteredProjects(sortedProjects)
    }, [])

    // Update filtered projects when category changes
    useEffect(() => {
        const filtered = filterProjectsByCategory(projectsData, activeCategory)
        const sorted = sortProjects(filtered, "featured")
        setFilteredProjects(sorted)
    }, [activeCategory])

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Badge animation
            gsap.fromTo(
                badgeRef.current,
                {
                    y: -30,
                    opacity: 0,
                    scale: 0.8,
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: projectsRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                },
            )

            // Description animation
            gsap.fromTo(
                descriptionRef.current,
                {
                    y: 20,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: descriptionRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                },
            )

            // Categories animation
            gsap.fromTo(
                categoriesRef.current?.children || [],
                {
                    y: 20,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: categoriesRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                },
            )

            // Stats animation
            gsap.fromTo(
                statsRef.current?.children || [],
                {
                    y: 30,
                    opacity: 0,
                    scale: 0.8,
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: statsRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                },
            )
        }, projectsRef)

        return () => ctx.revert()
    }, [])

    // Animate projects grid when category changes
    useEffect(() => {
        if (projectsGridRef.current && filteredProjects.length > 0) {
            gsap.fromTo(
                projectsGridRef.current.children,
                {
                    y: 30,
                    opacity: 0,
                    scale: 0.95,
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power2.out",
                },
            )
        }
    }, [filteredProjects])

    const handleCategoryChange = (categoryId) => {
        if (categoryId === activeCategory) return

        // Animate out current projects
        gsap.to(projectsGridRef.current?.children || [], {
            y: -20,
            opacity: 0,
            scale: 0.95,
            duration: 0.3,
            stagger: 0.05,
            ease: "power2.in",
            onComplete: () => {
                setActiveCategory(categoryId)
            },
        })
    }

    const handleCategoryHover = (e) => {
        if (!e.currentTarget.classList.contains("active")) {
            gsap.to(e.currentTarget, {
                scale: 1.05,
                duration: 0.2,
                ease: "power2.out",
            })
        }
    }

    const handleCategoryLeave = (e) => {
        if (!e.currentTarget.classList.contains("active")) {
            gsap.to(e.currentTarget, {
                scale: 1,
                duration: 0.2,
                ease: "power2.out",
            })
        }
    }

    return (
        <div
            ref={projectsRef}
            id="projects"
            className="flex items-center justify-center flex-col gap-y-8 py-16 bg-background-200 text-card-foreground min-h-screen"
        >
            {/* Header Section */}
            <div className="text-center max-w-4xl mx-auto px-4">
                <div ref={badgeRef} className="mb-6">
                    <Badge title={"Portfolio"} style={"px-6 py-2 text-sm font-medium"} />
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">
                    Featured Projects
                </h2>

                <p
                    ref={descriptionRef}
                    className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
                >
                    A curated collection of my best work, showcasing expertise in full-stack development, mobile applications, and
                    modern web technologies.
                </p>
            </div>

            {/* Category Filter */}
            <div ref={categoriesRef} className="flex flex-wrap justify-center gap-3 px-4">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => handleCategoryChange(category.id)}
                        onMouseEnter={handleCategoryHover}
                        onMouseLeave={handleCategoryLeave}
                        className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 border-2 ${activeCategory === category.id
                            ? "bg-primary text-primary-foreground border-primary shadow-lg active"
                            : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                            }`}
                    >
                        {category.name}
                        <span className="ml-2 px-2 py-0.5 rounded-full bg-current/20 text-xs">{category.count}</span>
                    </button>
                ))}
            </div>

            {/* Active Category Info */}
            <div className="text-center">
                <p className="text-sm text-muted-foreground">
                    Showing <span className="font-semibold text-foreground">{filteredProjects.length}</span> project
                    {filteredProjects.length !== 1 ? "s" : ""}
                    {activeCategory !== "all" && (
                        <span>
                            {" "}
                            in{" "}
                            <span className="font-semibold text-primary">
                                {categories.find((c) => c.id === activeCategory)?.name}
                            </span>
                        </span>
                    )}
                </p>
            </div>

            {/* Projects Grid */}
            <div className="w-full max-w-7xl mx-auto px-4">
                <div ref={projectsGridRef} className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={`${project.id}-${activeCategory}`} project={project} index={index} />
                    ))}
                </div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <div className="text-center py-16">
                        <div className="text-6xl mb-4">🚧</div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">No Projects Found</h3>
                        <p className="text-muted-foreground">No projects available in this category yet. Check back soon!</p>
                    </div>
                )}
            </div>

            {/* Stats Section
            <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto px-4 mt-12">
                <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
                    <div className="text-2xl md:text-3xl font-bold text-primary">{projectStats.total}+</div>
                    <div className="text-sm text-muted-foreground">Total Projects</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
                    <div className="text-2xl md:text-3xl font-bold text-green-500">{projectStats.completed}</div>
                    <div className="text-sm text-muted-foreground">Completed</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
                    <div className="text-2xl md:text-3xl font-bold text-primary">{projectStats.categories}</div>
                    <div className="text-sm text-muted-foreground">Categories</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
                    <div className="text-2xl md:text-3xl font-bold text-yellow-500">{projectStats.featured}</div>
                    <div className="text-sm text-muted-foreground">Featured</div>
                </div>
            </div> */}

            {/* Additional Info */}
            <div className="text-center max-w-2xl mx-auto px-4 mt-8">
                <p className="text-sm text-muted-foreground">
                    Want to see more projects or collaborate on something new?{" "}
                    <a href="#contact" className="text-primary hover:text-primary/80 font-medium transition-colors">
                        Let's get in touch!
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Projects
