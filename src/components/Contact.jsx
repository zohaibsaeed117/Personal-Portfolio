"use client"
import React, { useRef } from 'react'
import Badge from './Badge'
import { MdOutlineMailOutline, MdOutlinePhone } from 'react-icons/md'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm('service_o7vkoq5', 'template_tvxghyo', form.current, {
                publicKey: '33-AaGR0BjT7TeF4N',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    toast.success('Message send successfully!', {
                        duration: 4000,
                        position: 'top-center',
                    })
                    form.current.reset()
                },
                (error) => {
                    toast.error("Failed to send message", {
                        duration: 4000,
                        position: 'top-center',
                    })
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div id="contact" className='flex w-full items-center justify-center flex-col bg-primary-200 py-10 gap-y-6'>
            <Toaster />
            <Badge title={"Get In Touch"} style={"my-4"} />
            <p className='text-base text-center text-secondary-200 my-4 px-4 sm:text-left'>What's next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.</p>
            <div className='flex flex-col w-full items-center justify-center mx-10 lg:flex-row'>
                <div className='w-full lg:w-1/2 flex items-center justify-center flex-col'>
                    <div className='flex items-center justify-center gap-y-4 flex-col'>
                        <div className='flex items-center justify-center gap-x-8 '>
                            <MdOutlineMailOutline size={40} />
                            <p className='text-secondary-100 text-base font-semibold lg:text-2xl'>zohaib.saeed1259@gmail.com</p>
                        </div>
                        <div className='flex items-center justify-center gap-x-8'>
                            <MdOutlinePhone size={40} />
                            <p className='text-secondary-100 text-base font-semibold lg:text-2xl'>+92 3034859856</p>
                        </div>
                    </div>
                    <p className='text-base text-center text-secondary-200 my-4 px-4 sm:text-left'>You may also find me on these platforms</p>
                    <div className='flex items-center justify-between w-40 mt-10'>

                        <a href="https://github.com/zohaibsaeed117" target='_blank' className='active:scale-[0.9] hover:text-[#666666]'><FaGithub size={24} /></a>
                        <a href="https://www.instagram.com/itz_zaibi_17/" target='_blank' className='active:scale-[0.9] hover:text-[#c2124c]'><FaSquareInstagram size={24} /></a>
                        <a href="https://www.linkedin.com/in/zohaib-saeed-90184324b/" target='_blank' className='active:scale-[0.9] hover:text-[#405DE6]'><FaLinkedin size={24} /></a>
                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail} className='w-full lg:w-1/2 flex items-center justify-center flex-col gap-y-3 px-8 mt-8 lg:mt-0'>
                    <input type="text" placeholder="Enter your name" name="user_name" className="input bg-primary-300 input-bordered w-full max-w-xs" />
                    <input type="email" placeholder="Enter your Email" name="user_email" className="input bg-primary-300 input-bordered w-full max-w-xs" />
                    <input type="text" placeholder="Enter Subject" name="subject" className="input bg-primary-300 input-bordered w-full max-w-xs" />
                    <textarea
                        placeholder="Enter your message..."
                        style={{ resize: 'none' }}
                        name="message"
                        className="textarea bg-primary-300  textarea-bordered textarea-lg w-full max-w-xs"></textarea>
                    <input type="submit" value="Send Message" className="btn text-sm font-semibold bg-secondary-100 text-primary-100 px-3 py-2 rounded-lg  hover:bg-[#323642] dark:hover:bg-gray-200" />
                </form>
            </div>
        </div>
    )
}

export default Contact
