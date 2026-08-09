"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import Badge from "./Badge"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const experience = [
    {
        role: "Associate Software Engineer",
        company: "Xavinex",
        logo: "/logos/xavinex.png",
        period: "Oct 2025 – Current",
        points: [
            "Promoted from Intern to Associate Software Engineer in 3 months",
            "Built an offline-first React Native workforce management app",
            "Shipped deployments via AWS Amplify and Docker",
            "Revived a broken legacy Next.js/FastAPI MVP",
        ],
    },
    {
        role: "Software Engineer Intern",
        company: "Xavinex",
        logo: "/logos/xavinex.png",
        period: "Jul 2025 – Sep 2025",
        points: [
            "Built a full-stack React Native wellbeing app pre-launch",
            "Automated a booking workflow (Outlook, ServiceNow, Mollie, HubSpot) for an Amsterdam-based client",
            "Built a CMS admin panel",
        ],
    },
]

const Experience = () => {
    const experienceRef = useRef(null)
    const badgeRef = useRef(null)
    const descriptionRef = useRef(null)
    const timelineRef = useRef(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                badgeRef.current,
                { y: -30, opacity: 0, scale: 0.8 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 0.6,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: experienceRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                },
            )

            gsap.fromTo(
                descriptionRef.current,
                { y: 20, opacity: 0 },
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

            gsap.fromTo(
                timelineRef.current?.children || [],
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: timelineRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                },
            )
        }, experienceRef)

        return () => ctx.revert()
    }, [])

    return (
        <div
            ref={experienceRef}
            id="experience"
            className="flex items-center justify-center flex-col bg-background py-16 gap-y-6"
        >
            <div ref={badgeRef}>
                <Badge title={"Experience"} style={"my-4 px-6 py-2"} />
            </div>

            <p
                ref={descriptionRef}
                className="text-base text-center text-secondary-200 my-4 px-4 max-w-2xl"
            >
                Where I've been building — from a first internship to owning full-stack and mobile features in
                production.
            </p>

            <div ref={timelineRef} className="w-full max-w-3xl px-4 flex flex-col gap-y-8">
                {experience.map((job, index) => (
                    <div key={index} className="relative pl-8 border-l-2 border-border last:pb-0">
                        <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-background" />

                        <div className="bg-card border border-border/50 rounded-2xl p-6 shadow-lg">
                            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 mb-3">
                                <div className="flex items-center gap-3 flex-wrap">
                                    <h3 className="text-lg font-bold text-foreground md:text-xl">
                                        {job.role}
                                    </h3>
                                    {job.logo && (
                                        <div className="h-6 md:h-7 px-2 py-1 rounded-md bg-white border border-border/50 flex items-center shrink-0">
                                            <Image
                                                src={job.logo}
                                                alt={`${job.company} logo`}
                                                width={160}
                                                height={40}
                                                className="h-full w-auto object-contain"
                                            />
                                        </div>
                                    )}
                                </div>
                                <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">
                                    {job.period}
                                </span>
                            </div>

                            <ul className="list-disc list-inside space-y-1.5 text-sm text-muted-foreground md:text-base">
                                {job.points.map((point, i) => (
                                    <li key={i} className="leading-relaxed">
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience
