"use client"

import { useRef, useEffect } from "react"
import StyledImage from "./StyledImage"
import Badge from "./Badge"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const About = () => {
    const aboutRef = useRef(null)
    const badgeRef = useRef(null)
    const imageRef = useRef(null)
    const contentRef = useRef(null)
    const titleRef = useRef(null)
    const paragraphsRef = useRef(null)
    const factsRef = useRef(null)
    const listRef = useRef(null)

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
                        trigger: aboutRef.current,
                        start: "top 80%",
                        end: "top 50%",
                        toggleActions: "play none none reverse",
                    },
                },
            )

            // Image animation - slide from left
            gsap.fromTo(
                imageRef.current,
                {
                    x: -100,
                    opacity: 0,
                    scale: 0.8,
                },
                {
                    x: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: imageRef.current,
                        start: "top 80%",
                        end: "top 30%",
                        toggleActions: "play none none reverse",
                    },
                },
            )

            // Content animation - slide from right
            gsap.fromTo(
                contentRef.current,
                {
                    x: 100,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: contentRef.current,
                        start: "top 80%",
                        end: "top 30%",
                        toggleActions: "play none none reverse",
                    },
                },
            )

            // Title animation with typewriter effect
            gsap.fromTo(
                titleRef.current,
                {
                    y: 30,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: titleRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                },
            )

            // Paragraphs staggered animation
            gsap.fromTo(
                paragraphsRef.current?.children || [],
                {
                    y: 20,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: paragraphsRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                },
            )

            // Facts title animation
            gsap.fromTo(
                factsRef.current,
                {
                    scale: 0.8,
                    opacity: 0,
                },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.6,
                    ease: "back.out(1.7)",
                    scrollTrigger: {
                        trigger: factsRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                },
            )

            // List items animation
            gsap.fromTo(
                listRef.current?.children || [],
                {
                    x: -20,
                    opacity: 0,
                },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: listRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse",
                    },
                },
            )
        }, aboutRef)

        return () => ctx.revert()
    }, [])

    return (
        <div
            ref={aboutRef}
            id="about"
            className="flex items-center justify-center flex-col bg-background-200 py-16 gap-y-8 overflow-hidden"
        >
            <div ref={badgeRef}>
                <Badge title={"About Me"} style={"my-4 px-6 py-2"} />
            </div>

            <div className="flex flex-col items-center justify-center mx-10 lg:flex-row max-w-7xl gap-12">
                <div ref={imageRef} className="w-full lg:w-1/2 flex items-center justify-center">
                    <StyledImage src={"/zohaib2.jpg"} direction="left" className="mx-auto" />
                </div>

                <div
                    ref={contentRef}
                    className="w-full text-secondary-200 flex flex-col text-center text-sm gap-y-4 lg:w-1/2 lg:text-left lg:text-base"
                >
                    <h1 ref={titleRef} className="text-2xl font-bold text-secondary-100 lg:text-4xl mb-2">
                        Curious about me? Here's a quick snapshot:
                    </h1>

                    <div ref={paragraphsRef} className="space-y-4">
                        <p className="leading-relaxed">
                            I'm Zohaib Saeed, a web developer and a 6th semester Computer Science student at UET. My journey began
                            with curiosity and zero background in web development—but over the last two years, I've grown deeply
                            passionate about building modern, user-friendly websites.
                        </p>
                        <p className="leading-relaxed">
                            My core strength lies in the MERN stack, especially React.js and Tailwind CSS, where I've built multiple
                            scalable and responsive web apps. I have solid hands-on experience with Node.js and Express.js and am
                            currently diving deeper into Next.js to push my full-stack capabilities further.
                        </p>
                        <p className="leading-relaxed">
                            I'm also exploring the world of Artificial Intelligence and Machine Learning, with a growing interest in
                            Natural Language Processing (NLP). I have foundational knowledge of Data Science and am actively working
                            on AI-based projects while expanding my understanding of this exciting field.
                        </p>
                        <p className="leading-relaxed">
                            Beyond coding, I enjoy playing chess, exploring new tech on Instagram, and leading the technical domain in
                            the MLSA society at UET. I've mentored students in web development and co-hosted several hands-on
                            workshops and events to share knowledge with the community.
                        </p>
                    </div>

                    <h2 ref={factsRef} className="text-lg font-semibold mt-8 text-secondary-100 lg:text-2xl">
                        A few quick facts about me:
                    </h2>

                    <ul ref={listRef} className="list-disc list-inside text-left space-y-2 ml-4 lg:ml-0">
                        <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Always eager to learn and grow in tech.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Specializing in Next.js, React Js, Node Js and Tailwind CSS.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Diving into AI, ML, NLP, and Data Science.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Technical lead at MLSA and mentor to juniors.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Regular participant in web hackathons and tech events.</span>
                        </li>
                    </ul>

                    <p className="mt-6 leading-relaxed">
                        If you're looking for collaboration, mentorship, or freelance support—I'd love to connect...
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
