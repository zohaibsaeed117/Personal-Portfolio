import Image from 'next/image'
import React from 'react'
import Badge from './Badge'

const ProjectDetails = ({ reverse = false, path = "project.png", title = "Title not Mentioned", description = "Not mentioned", tools = [] }) => {
    return (
        <div className={`w-[80%] max-w-[70rem] flex rounded-xl overflow-hidden shadow-md flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
            <div className='w-[100%] bg-primary-300 lg:w-[50%]'>
                <div className='m-10 rounded-lg overflow-hidden shadow-md'>
                    <Image src={`/projects/${path}`}
                        width={600}
                        height={600}
                        alt="Project"
                        layout='responsive'
                    />
                </div>
            </div>
            <div className='w-[100%] bg-primary-100 p-6 flex flex-col gap-y-6 text-center lg:text-left lg:w-[50%]'>
                <h1 className='text-lg font-semibold text-center text-secondary-100 lg:text-left lg:text-xl'>{title}</h1>
                <p className='text-base text-secondary-200 lg:text-lg'>{description}</p>
                <div className="flex flex-wrap gap-1">
                    {tools.map(skill => (
                        <Badge style="text-sm lg:text-base" key={skill} title={skill} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails
