"use client"
import { useRef, useState, useEffect } from "react"
import Badge from "./Badge"
import { MdOutlineMailOutline, MdOutlinePhone } from "react-icons/md"
import emailjs from "@emailjs/browser"
import toast, { Toaster } from "react-hot-toast"
import { HiOutlineClipboard, HiOutlineClipboardCheck } from "react-icons/hi"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import Link from "next/link"
import { Github, InstagramIcon, LinkedinIcon } from "lucide-react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const [phoneCopied, setPhoneCopied] = useState(false)
  const [emailCopied, setEmailCopied] = useState(false)
  const form = useRef()

  const contactRef = useRef(null)
  const badgeRef = useRef(null)
  const descriptionRef = useRef(null)
  const contactInfoRef = useRef(null)
  const formRef = useRef(null)
  const socialRef = useRef(null)

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
            trigger: contactRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Description animation
      gsap.fromTo(
        descriptionRef.current,
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Contact info animation - slide from left
      gsap.fromTo(
        contactInfoRef.current,
        {
          x: -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contactInfoRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Form animation - slide from right
      gsap.fromTo(
        formRef.current,
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
            trigger: formRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Form inputs staggered animation
      const formInputs = formRef.current?.querySelectorAll("input, textarea, button") || []
      gsap.fromTo(
        formInputs,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Social links animation
      gsap.fromTo(
        socialRef.current?.children || [],
        {
          scale: 0,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: socialRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        },
      )

      // Contact info items animation
      const contactItems = contactInfoRef.current?.querySelectorAll(".contact-item") || []
      gsap.fromTo(
        contactItems,
        {
          x: -30,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contactInfoRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        },
      )
    }, contactRef)

    return () => ctx.revert()
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()
    const nameField = form.current.elements.user_name
    const emailField = form.current.elements.user_email
    const subjectField = form.current.elements.subject
    const messageField = form.current.elements.message

    // Perform validation checks
    if (!nameField.value.trim()) {
      toast.error("Name is required", {
        duration: 4000,
        position: "top-center",
      })
      return
    }

    if (!emailField.value.trim()) {
      toast.error("Email is required", {
        duration: 4000,
        position: "top-center",
      })
      return
    }

    if (!emailField.value.includes("@")) {
      toast.error("Invalid email address", {
        duration: 4000,
        position: "top-center",
      })
      return
    }

    if (!subjectField.value.trim()) {
      toast.error("Subject is required", {
        duration: 4000,
        position: "top-center",
      })
      return
    }

    if (!messageField.value.trim()) {
      toast.error("Message is required", {
        duration: 4000,
        position: "top-center",
      })
      return
    }

    // Animate submit button
    gsap.to(e.target, {
      scale: 0.95,
      duration: 0.1,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    })

    emailjs
      .sendForm("service_o7vkoq5", "template_mgg0f4d", form.current, {
        publicKey: "33-AaGR0BjT7TeF4N",
      })
      .then(
        () => {
          console.log("SUCCESS!")
          toast.success("Message send successfully!", {
            duration: 4000,
            position: "top-center",
          })
          form.current.reset()
        },
        (error) => {
          toast.error("Failed to send message", {
            duration: 4000,
            position: "top-center",
          })
          console.log("FAILED...", error.text)
        },
      )
  }

  const handleSocialHover = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1.2,
      rotation: 5,
      duration: 0.3,
      ease: "back.out(1.7)",
    })
  }

  const handleSocialLeave = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      rotation: 0,
      duration: 0.3,
      ease: "back.out(1.7)",
    })
  }

  const handleCopyClick = async (text, type) => {
    navigator.clipboard.writeText(text)

    if (type === "email") {
      setEmailCopied(true)
      setTimeout(() => setEmailCopied(false), 5000)
    } else {
      setPhoneCopied(true)
      setTimeout(() => setPhoneCopied(false), 5000)
    }

    toast.success("Text Copied Successfully", {
      position: "bottom-center",
    })
  }

  return (
    <div
      ref={contactRef}
      id="contact"
      className="flex w-full items-center justify-center flex-col bg-background py-10 gap-y-6"
    >
      <Toaster
        toastOptions={{
          style: {
            backgroundColor: "hsl(var(--background)",
            color: "hsl(var(--foreground)",
          },
        }}
      />

      <div ref={badgeRef}>
        <Badge title={"Get In Touch"} style={"my-4"} />
      </div>

      <p ref={descriptionRef} className="text-base text-center text-secondary-200 my-4 px-4 sm:text-left">
        What's next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to
        connect.
      </p>

      <div className="flex flex-col w-full items-center justify-center mx-10 lg:flex-row">
        <div ref={contactInfoRef} className="w-full lg:w-1/2 flex items-center justify-center flex-col">
          <div className="flex items-center justify-center gap-y-4 flex-col">
            <div className="contact-item flex items-center justify-center gap-x-2 lg:gap-x-8">
              <MdOutlineMailOutline size={40} />
              <p className="text-secondary-100 text-base font-semibold lg:text-2xl">zohaib.saeed1259@gmail.com</p>
              <button
                onClick={() => handleCopyClick("zohaib.saeed1259@gmail.com", "email")}
                onMouseEnter={(e) => {
                  gsap.to(e.target, { scale: 1.1, duration: 0.2 })
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.target, { scale: 1, duration: 0.2 })
                }}
              >
                {emailCopied ? <HiOutlineClipboardCheck size={40} /> : <HiOutlineClipboard size={40} />}
              </button>
            </div>
            <div className="contact-item flex items-center justify-center gap-x-2 lg:gap-x-8">
              <MdOutlinePhone size={40} />
              <p className="text-secondary-100 text-base font-semibold lg:text-2xl">+92 3034859856</p>
              <button
                onClick={() => handleCopyClick("+92 3034859856", "phone")}
                onMouseEnter={(e) => {
                  gsap.to(e.target, { scale: 1.1, duration: 0.2 })
                }}
                onMouseLeave={(e) => {
                  gsap.to(e.target, { scale: 1, duration: 0.2 })
                }}
              >
                {phoneCopied ? <HiOutlineClipboardCheck size={40} /> : <HiOutlineClipboard size={40} />}
              </button>
            </div>
          </div>

          <p className="text-base text-center text-secondary-200 my-4 px-4 sm:text-left">
            You may also find me on these platforms
          </p>

          <div ref={socialRef} className="flex items-center justify-between w-40 mt-10">
            <Link
              href="https://github.com/zohaibsaeed117"
              target="_blank"
              className="active:scale-[0.9] hover:text-[#666666] transition-color transition-transform"
              onMouseEnter={handleSocialHover}
              onMouseLeave={handleSocialLeave}
            >
              <Github />
            </Link>
            <Link
              href="https://www.instagram.com/itz_zaibi_17/"
              target="_blank"
              className="active:scale-[0.9] hover:text-[#c2124c] transition-color transition-transform"
              onMouseEnter={handleSocialHover}
              onMouseLeave={handleSocialLeave}
            >
              <InstagramIcon size={24} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/zohaib-saeed-90184324b/"
              target="_blank"
              className="active:scale-[0.9] hover:text-[#405DE6] transition-color transition-transform"
              onMouseEnter={handleSocialHover}
              onMouseLeave={handleSocialLeave}
            >
              <LinkedinIcon size={24} />
            </Link>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="w-full lg:w-[30%] flex items-center justify-center flex-col gap-y-3 px-8 mt-8 lg:mt-0"
        >
          <Input
            type="text"
            placeholder="Enter your name"
            name="user_name"
            className="bg-background-200 border-2 border-border"
          />
          <Input
            type="email"
            placeholder="Enter your Email"
            name="user_email"
            className="bg-background-200 border-2 border-border"
          />
          <Input
            type="text"
            placeholder="Enter Subject"
            name="subject"
            className="bg-background-200 border-2 border-border"
          />
          <Textarea
            placeholder="Enter your message..."
            style={{ resize: "none" }}
            name="message"
            className="bg-background-200 border-2 border-border"
          />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </div>
  )
}

export default Contact
