'use client'

import React from 'react'
import StyledImage from './StyledImage'
import Badge from './Badge'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <motion.div
            id="about"
            className='flex items-center justify-center flex-col bg-background-200 py-10 gap-y-6 overflow-hidden'
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <Badge title={"About Me"} style={'my-4 px-4'} />
            <div className='flex flex-col items-center justify-center mx-10 lg:flex-row'>

                <motion.div
                    className="w-full lg:w-1/2 flex items-center justify-center"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                >
                    <StyledImage src={'/zohaib2.jpg'} />
                </motion.div>

                <motion.div
                    className="w-full text-secondary-200 flex flex-col text-center text-xs gap-y-3 mt-10 lg:mt-0 lg:w-1/2 lg:text-left lg:text-base"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    viewport={{ once: true, amount:0.3 }}
                >
                    <h1 className="text-xl font-bold text-secondary-100 lg:text-3xl">Curious about me? Here's a quick snapshot:</h1>

                    <p>
                        I'm Zohaib Saeed, a web developer and a 6th semester Computer Science student at UET. My journey began with curiosity and zero background in web development—but over the last two years, I've grown deeply passionate about building modern, user-friendly websites.
                    </p>
                    <p>
                        My core strength lies in the MERN stack, especially React.js and Tailwind CSS, where I’ve built multiple scalable and responsive web apps. I have solid hands-on experience with Node.js and Express.js and am currently diving deeper into Next.js to push my full-stack capabilities further.
                    </p>
                    <p>
                        I'm also exploring the world of Artificial Intelligence and Machine Learning, with a growing interest in Natural Language Processing (NLP). I have foundational knowledge of Data Science and am actively working on AI-based projects while expanding my understanding of this exciting field.
                    </p>
                    <p>
                        Beyond coding, I enjoy playing chess, exploring new tech on Instagram, and leading the technical domain in the MLSA society at UET. I’ve mentored students in web development and co-hosted several hands-on workshops and events to share knowledge with the community.
                    </p>

                    <h2 className="text-base font-semibold mt-6 text-secondary-100 lg:text-2xl">A few quick facts about me:</h2>
                    <ul className="list-disc list-inside text-left">
                        <li>Always eager to learn and grow in tech.</li>
                        <li>Specializing in Next.js, React Js, Node Js and Tailwind CSS.</li>
                        <li>Diving into AI, ML, NLP, and Data Science.</li>
                        <li>Technical lead at MLSA and mentor to juniors.</li>
                        <li>Regular participant in web hackathons and tech events.</li>
                    </ul>

                    <p>
                        If you're looking for collaboration, mentorship, or freelance support—I'd love to connect...
                    </p>
                </motion.div>
            </div>
        </motion.div>
    )
}

export default About
