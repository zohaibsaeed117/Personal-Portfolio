import React from 'react'
import Logo from './Logo'
import Badge from './Badge'

const Skills = () => {
    const logos = [{ path: "html", name: "HTML" }, { path: "css", name: "CSS" }, { path: "js", name: "JavaScript" }, { path: "tailwindcss", name: "Tailwind CSS" }, { path: "bootstrap", name: "Bootstrap" }, { path: "reactjs", name: "React Js" }, { path: "nextjs", name: "Next Js" }, { path: "nodejs", name: "Node Js" }, { path: "mongodb", name: "MongoDB" }, { path: "mssql", name: "SQL Server" }, { path: "mysql", name: "My SQL" }, { path: "python", name: "Python" }, { path: "c", name: "C" }, { path: "cpp", name: "C++" }, { name: "Git", path: "git" }, { path: "github", name: "Github" }]
    return (
        <div id='skills' className='bg-primary-100 flex items-center justify-center flex-col gap-y-6 py-10'>
            <Badge title="Skills" style={"my-4'"} />
            <p className='text-base text-center text-secondary-200 my-4 px-4 sm:text-left sm:text-base'>The skills, tools and technologies I am really good at:</p>
            <div className='grid grid-cols-3 gap-8 w-3/4 md:grid-cols-6 sm:grid-cols-4 lg:grid-cols-8'>
                {
                    logos.map(logo => <Logo key={logo} path={logo.path} name={logo.name} />)
                }
            </div>
        </div>
    )
}

export default Skills
