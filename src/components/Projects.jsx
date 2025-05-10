import React from 'react'
import Badge from './Badge'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'
import { buttonVariants } from './ui/button'
import Link from 'next/link'

const Projects = () => {
    const projectDetails = [
        {
            id: 1,
            title: "Crime Tracker",
            description: "I developed a unified database system for managing crime-related data, implementing secure user authentication and role-based access control. To enhance data visualization and user engagement, I designed an interactive dashboard that displays crime statistics and trends. Additionally, I enhanced performance and security measures to ensure data integrity and protect sensitive information.",
            tools: ["React Js", "Tailwind Css", "SQL Server", "Daisy UI", "Node Js", "Express Js"], path: "crimetracker.png",
            link: ""

        },
        {
            id: 2,
            title: "SycoFusion",
            description: "I crafted a dynamic social media platform that enables users to seamlessly add, like, comment on, and delete posts, providing an engaging user experience. To elevate user interaction and satisfaction, I engineered an intuitive and visually appealing frontend using Tailwind CSS and DaisyUI. Additionally, I orchestrated robust backend development with Next.js and MongoDB, ensuring efficient data management and seamless server operations.",
            tools: ["React Js", "Next JS", "Tailwind CSS", "MongoDB", "Node JS", "DaisyUI"],
            path: "sycofusion.png",
            link: "https://github.com/zohaibsaeed117/sycofusion-client.git"
        },
        {
            id: 3,
            title: "Faizan-e-Chisht Prayer App",
            description: "I engineered a React Native application for the Faizan-e-Chisht Organization, delivering accurate prayer times and notifications for the next prayer, thereby enriching the user's religious practice experience. By leveraging Expo for development and NativeWind for styling, I ensured seamless functionality and a user-friendly interface.",
            tools: ["React Native", "Expo", "NativeWind"],
            path: "prayerapp1.png",
            link: "https://faizan-e-chist-server.vercel.app/faizan-e-chist.apk"
        },

    ]
    return (
        <div id="projects" className='flex items-center jusitfy-center flex-col gap-y-6 py-10 bg-background-200 text-card-foreground'>
            <Badge title={"Projects"} style={'my-2'} />
            <p className='text-base text-center  my-4 sm:text-left sm:text-base'>Some of the noteworthy projects I have made:</p>
            {
                projectDetails.map(project => <ProjectDetails key={project.id} title={project.title} description={project.description} tools={project.tools} link={project.link} reverse={project.id % 2 == 0} path={project.path} />)
            }
        </div>
    )
}

export default Projects

const ProjectDetails = ({ reverse = false, path = "project.png", title = "Title not Mentioned", description = "Not mentioned", tools = [], link }) => {
    return (
        <div className={`w-[80%] max-w-[70rem] bg-background-200 brightness-90 flex rounded-xl overflow-hidden shadow-md flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
            <div className='w-[100%]  my-auto lg:w-[50%]'>
                <div className='m-10 rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform duration-500 cursor-pointer'>
                    <Image src={`/projects/${path}`}
                        width={600}
                        height={600}
                        alt="Project"
                        layout='responsive'
                        className=''
                    />
                </div>
            </div>
            <div className='w-[100%] bg-card p-6 flex flex-col gap-y-6 text-center lg:text-left lg:w-[50%]'>
                <h1 className='text-lg font-semibold text-center text-secondary-100 lg:text-left lg:text-xl'>{title}</h1>
                <p className='text-base text-secondary-200 lg:text-lg'>{description}</p>
                <div className="flex flex-wrap gap-1">
                    {tools.map(skill => (
                        <Badge style="text-sm lg:text-base" key={skill} title={skill} />
                    ))}
                </div>
                <Link className={buttonVariants({ variant: "ghost", size: "icon" })} href={link === "" ? "#" : link} rel="noopener noreferrer" target="_blank"><ExternalLink /></Link>
            </div>
        </div>
    )
}
