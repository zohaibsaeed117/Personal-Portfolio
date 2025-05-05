'use client'

import React from 'react'
import Badge from './Badge'
import Image from "next/image"
import { motion } from 'framer-motion'

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
}

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

const Skills = () => {
    const logos = [
        { path: "html", name: "HTML" }, { path: "css", name: "CSS" }, { path: "js", name: "JavaScript" },
        { path: "tailwindcss", name: "Tailwind CSS" }, { path: "bootstrap", name: "Bootstrap" },
        { path: "reactjs", name: "React Js" }, { path: "nextjs", name: "Next Js" }, { path: "nodejs", name: "Node Js" },
        { path: "mongodb", name: "MongoDB" }, { path: "mssql", name: "SQL Server" }, { path: "mysql", name: "My SQL" },
        { path: "python", name: "Python" }, { path: "c", name: "C" }, { path: "cpp", name: "C++" },
        { name: "Git", path: "git" }, { path: "github", name: "Github" }
    ]

    return (
        <div id='skills' className='bg-background-100 flex items-center justify-center flex-col gap-y-6 py-10'>
            <Badge title="Skills" style={"my-4'"} />
            <p className='text-base text-center text-secondary-200 my-4 px-4 sm:text-left sm:text-base'>
                The skills, tools and technologies I am really good at:
            </p>

            <motion.div
                className='grid grid-cols-3 gap-8 w-3/4 md:grid-cols-6 sm:grid-cols-4 lg:grid-cols-8'
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
            >
                {logos.map((logo, index) => (
                    <Logo key={logo.name + index} path={logo.path} name={logo.name} />
                ))}
            </motion.div>
        </div>
    )
}

export default Skills

const Logo = ({ path, name }) => {
    return (
        <motion.div
            variants={itemVariants}
            className='mx-auto flex items-center justify-center flex-col gap-y-2'
        >
            <Image
                src={`/skills/${path}.png`}
                alt={name}
                height={100}
                width={100}
                className='object-contain aspect-square h-12 md:h-20 sm:h-16 lg:h-24 cursor-pointer transition ease-in-out duration-300 hover:scale-[1.12]'
                blurDataURL='true'
                placeholder='blur'
                loading="lazy"
            />
            <span className='text-sm text-secondary-100 md:text-xl sm:text-base'>{name}</span>
        </motion.div>
    )
}
