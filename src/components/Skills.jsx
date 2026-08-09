'use client'

import React, { useRef, useEffect } from 'react'
import Badge from './Badge'
import Image from "next/image"
import { SiReact, SiExpo } from "react-icons/si"
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const skillGroups = [
    {
        title: "Frontend",
        skills: [
            { path: "html", name: "HTML" }, { path: "css", name: "CSS" }, { path: "js", name: "JavaScript" },
            { path: "tailwindcss", name: "Tailwind CSS" }, { path: "bootstrap", name: "Bootstrap" },
            { path: "reactjs", name: "React Js" }, { path: "nextjs", name: "Next Js" },
        ],
    },
    {
        title: "Mobile",
        skills: [
            { icon: SiReact, name: "React Native" },
            { icon: SiExpo, name: "Expo" },
            { path: "tailwindcss", name: "NativeWind" },
        ],
    },
    {
        title: "Backend",
        skills: [
            { path: "nodejs", name: "Node Js" }, { path: "mongodb", name: "MongoDB" },
            { path: "mssql", name: "SQL Server" }, { path: "mysql", name: "My SQL" },
            { path: "python", name: "Python" },
        ],
    },
    {
        title: "Tools",
        skills: [
            { path: "c", name: "C" }, { path: "cpp", name: "C++" },
            { path: "git", name: "Git" }, { path: "github", name: "Github" },
        ],
    },
]

const Skills = () => {
    const skillsRef = useRef(null)
    const badgeRef = useRef(null)
    const descriptionRef = useRef(null)
    const groupsRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Badge animation
            gsap.fromTo(badgeRef.current,
                {
                    y: -30,
                    opacity: 0,
                    scale: 0.8
                },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: skillsRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                }
            )

            // Description animation
            gsap.fromTo(descriptionRef.current,
                {
                    y: 20,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: descriptionRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    }
                }
            )

            // Skills grid animation with stagger, per group
            const groupEls = groupsRef.current?.querySelectorAll('.skill-group') || []
            groupEls.forEach((groupEl) => {
                const items = groupEl.querySelectorAll('.skill-item')

                gsap.fromTo(items,
                    {
                        y: 50,
                        opacity: 0,
                        scale: 0.8,
                        rotation: -10
                    },
                    {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        rotation: 0,
                        duration: 0.6,
                        stagger: {
                            amount: 0.8,
                            from: "start",
                            ease: "power2.out"
                        },
                        ease: "back.out(1.7)",
                        scrollTrigger: {
                            trigger: groupEl,
                            start: "top 85%",
                            end: "bottom 20%",
                            toggleActions: "play none none reverse"
                        }
                    }
                )

                items.forEach((item) => {
                    const handleMouseEnter = () => {
                        gsap.to(item, {
                            scale: 1.15,
                            y: -10,
                            duration: 0.3,
                            ease: "back.out(1.7)"
                        })
                    }

                    const handleMouseLeave = () => {
                        gsap.to(item, {
                            scale: 1,
                            y: 0,
                            duration: 0.3,
                            ease: "back.out(1.7)"
                        })
                    }

                    item.addEventListener('mouseenter', handleMouseEnter)
                    item.addEventListener('mouseleave', handleMouseLeave)
                })
            })
        }, skillsRef)

        return () => ctx.revert()
    }, [])

    return (
        <div ref={skillsRef} id='skills' className='bg-background-100 flex items-center justify-center flex-col gap-y-6 py-10'>
            <div ref={badgeRef}>
                <Badge title="Skills" style={"my-4'"} />
            </div>

            <p ref={descriptionRef} className='text-base text-center text-secondary-200 my-4 px-4 sm:text-left sm:text-base'>
                The skills, tools and technologies I am really good at:
            </p>

            <div ref={groupsRef} className='w-3/4 flex flex-col gap-y-10'>
                {skillGroups.map((group) => (
                    <div key={group.title} className='skill-group flex flex-col items-center gap-y-6'>
                        <h3 className='text-base font-semibold text-secondary-100 md:text-lg tracking-wide uppercase'>
                            {group.title}
                        </h3>
                        <div className='grid grid-cols-3 gap-8 w-full md:grid-cols-6 sm:grid-cols-4 lg:grid-cols-8'>
                            {group.skills.map((skill, index) => (
                                <Logo key={skill.name + index} path={skill.path} icon={skill.icon} name={skill.name} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skills

const Logo = ({ path, icon: Icon, name }) => {
    const logoRef = useRef(null)

    return (
        <div
            ref={logoRef}
            className='skill-item mx-auto flex items-center justify-center flex-col gap-y-2 cursor-pointer'
        >
            {Icon ? (
                <Icon className='object-contain aspect-square h-12 w-12 md:h-20 md:w-20 sm:h-16 sm:w-16 lg:h-24 lg:w-24 text-secondary-100 transition ease-in-out duration-300' />
            ) : (
                <Image
                    src={`/skills/${path}.png`}
                    alt={name}
                    height={100}
                    width={100}
                    className='object-contain aspect-square h-12 md:h-20 sm:h-16 lg:h-24 transition ease-in-out duration-300'
                    blurDataURL='true'
                    placeholder='blur'
                    loading="lazy"
                />
            )}
            <span className='text-sm text-secondary-100 md:text-xl sm:text-base'>{name}</span>
        </div>
    )
}
