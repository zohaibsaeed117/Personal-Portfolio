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
                            I'm Zohaib Saeed, an Associate Mobile App Developer at Codev and a Computer Science graduate from UET
                            (2022–2026). Before Codev, I spent a year at Xavinex, where I was promoted from Intern to Associate
                            Software Engineer in just three months. What started as curiosity and zero
                            background in web development has grown into real production experience shipping software people
                            actually use.
                        </p>
                        <p className="leading-relaxed">
                            I work across the stack and across platforms: React Native and Expo on mobile, alongside Next.js,
                            Node.js, Express.js, and MongoDB on the web. I like owning a feature end-to-end, from the mobile UI down
                            to the API and database that back it.
                        </p>
                        <p className="leading-relaxed">
                            At Codev I build and ship mobile apps for company, client, and internal projects — integrating APIs,
                            authentication, and third-party services, and supporting App Store and Play Store releases. At
                            Xavinex I delivered 10+ projects across web and mobile — production deployments with AWS Amplify and
                            Docker, offline-first mobile apps, and reviving legacy platforms. Outside of work, I've
                            also published a live app on the Google Play Store as a solo project.
                        </p>
                        <p className="leading-relaxed">
                            Beyond coding, I enjoy playing chess, exploring new tech on Instagram, and serving as Technical Head
                            of the AWS Student Builder Group at UET. I've mentored students in web development and co-hosted several hands-on
                            workshops and events to share knowledge with the community.
                        </p>
                    </div>

                    <h2 ref={factsRef} className="text-lg font-semibold mt-8 text-secondary-100 lg:text-2xl">
                        A few quick facts about me:
                    </h2>

                    <ul ref={listRef} className="list-disc list-inside text-left space-y-2 ml-4 lg:ml-0">
                        <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Computer Science graduate from UET (2022–2026).</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Associate Mobile App Developer at Codev, shipping apps to the App Store and Play Store.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Previously at Xavinex — promoted from Intern to Associate Software Engineer in 3 months.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>One live app on the Google Play Store, with more in internal testing.</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>Technical Head of the AWS Student Builder Group at UET.</span>
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
