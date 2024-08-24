import React from 'react'
import Badge from './Badge'
import ProjectDetails from './ProjectDetails'

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
            link: "https://github.com/zohaibsaeed117/SycoFusion"
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
