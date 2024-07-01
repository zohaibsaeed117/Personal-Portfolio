import React from 'react'
import StyledImage from './StyledImage'
import Badge from './Badge'
import Link from 'next/link'

const About = () => {
    return (
        <div id="about" className='flex items-center justify-center flex-col bg-primary-200 py-10 gap-y-6'>
            <Badge title={"About Me"} style={'my-4 px-4'} />
            <div className='flex flex-col items-center justify-center mx-10 lg:flex-row'>
                <div className="w-full lg:w-1/2 flex items-center justify-center">
                    <StyledImage src={'/zohaib2.jpg'} />
                </div>
                <div className="w-full text-secondary-200 flex flex-col text-center text-xs gap-y-3 mt-10 lg:mt-0 lg:w-1/2 lg:text-left lg:text-base">
                    <h1 className="text-xl font-bold text-secondary-100 lg:text-3xl">Curious about me? Here you have it:</h1>
                    <p className="">
                        I'm Zohaib Saeed, a passionate web developer and a current student at UET, enrolled in the 4th semester of BSCS. My journey in web development began two years ago when I took admission in UET. At first, I didn't know anything about web development, but with time and dedication, I learned MERN stack development.
                    </p>
                    <p className="">
                        I have a strong command of React.js and Tailwind CSS, having worked extensively with these technologies. I possess intermediate knowledge of Node.js and Express.js, and I am currently learning and working with Next.js to further enhance my skills.
                    </p>
                    <p className="">
                        Apart from coding, I love to play chess and spend some of my free time scrolling through Instagram. I am also an active member of the MLSA society, where I serve as the lead of the technical domains and mentor students in web development. I have co-hosted three events focused on web development, sharing my knowledge and experience with others. I actively participate in web hackathons and attend various tech events to stay updated with the latest trends and technologies.
                    </p>
                    <h2 className="text-base font-semibold mt-6  text-secondary-100 lg:text-2xl">Finally, some quick bits about me:</h2>
                    <ul className="list-disc list-inside text-left">
                        <li> Always eager to absorb new knowledge and skills</li>
                        <li>Passionate about React.js, Tailwind CSS, and currently diving into Next.js.</li>
                        <li> Leading technical domains in MLSA and mentoring aspiring web developers.</li>
                        <li>Enjoys strategizing on the chessboard in free time.</li>
                        <li>Frequently participating in web hackathons and tech events.</li>
                    </ul>
                    <p className="">
                        Feel free to reach out for any collaboration or freelance work. I'm always excited to connect with like-minded individuals and work on exciting projects!😊
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
