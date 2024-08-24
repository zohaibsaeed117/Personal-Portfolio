import Image from 'next/image'
import React from 'react'
import Badge from './Badge'
import { ExternalLink } from 'lucide-react'
import { buttonVariants } from './ui/button'
import Link from 'next/link'

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

export default ProjectDetails
