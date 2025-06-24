export const projectsData = [
    {
        id: 1,
        title: "Readme File Maker",
        shortDescription:
            "Modern admin dashboard for e-commerce management with analytics, inventory, and order tracking.",
        description:
            "A Next.js application that automatically generates README files for GitHub repositories. It analyzes the repository's code, provides summaries, and creates a comprehensive README based on the project's structure and content.",
        tools: ["Next.js", "TypeScript", "Tailwind CSS", "ShadCN UI", "Next-Auth", "Mongo DB", "Gemini Flash 2.0"],
        path: "ai-readme-maker.png",
        link: "https://zohaib-saeed.vercel.app/",
        github: "",
        category: "fullstack",
        featured: true,
        status: "completed",
        year: "2025",
    },
    {
        id: 2,
        title: "Faizan-e-Chisht Foundation",
        shortDescription:
            "A comprehensive foundation website showcasing charitable initiatives and community programs with modern design.",
        description:
            "Developed a fully responsive website for Faizan-e-Chisht Foundation featuring modern design, intuitive navigation, and integrated contact forms. The platform highlights core departments including Darood-e-Pak, Hifz classes, food distribution, and IT education. This solution significantly improved the foundation's digital presence, streamlined communication with visitors, and made it easier for the public to learn about and participate in its charitable initiatives.",
        tools: ["Next.js", "Tailwind CSS", "ShadCN UI", "React", "JavaScript", "Responsive Design"],
        path: "faizanechisht.png",
        link: "https://www.faizanechisht.org/?ref=portfolio",
        github: "",
        category: "web",
        featured: true,
        status: "completed",
        year: "2025",
    },
    {
        id: 3,
        title: "SycoFusion",
        shortDescription:
            "Dynamic social media platform with real-time interactions, post management, and modern responsive UI.",
        description:
            "Crafted a dynamic social media platform that enables users to seamlessly add, like, comment on, and delete posts, providing an engaging user experience. To elevate user interaction and satisfaction, I engineered an intuitive and visually appealing frontend using Tailwind CSS and DaisyUI. Additionally, I orchestrated robust backend development with Next.js and MongoDB, ensuring efficient data management and seamless server operations.",
        tools: ["React.js", "Next.js", "Tailwind CSS", "MongoDB", "Node.js", "Express.js", "DaisyUI", "Full Stack"],
        path: "sycofusion.png",
        link: "",
        github: "https://github.com/zohaibsaeed117/sycofusion-client.git",
        category: "fullstack",
        featured: false,
        status: "completed",
        year: "2024",
    },
    {
        id: 4,
        title: "Prayer Time App",
        shortDescription:
            "React Native mobile app delivering accurate prayer times with push notifications and offline support.",
        description:
            "Engineered a React Native application for the Faizan-e-Chisht Organization, delivering accurate prayer times and notifications for the next prayer, thereby enriching the user's religious practice experience. By leveraging Expo for development and NativeWind for styling, I ensured seamless functionality and a user-friendly interface.",
        tools: ["React Native", "Expo", "NativeWind", "JavaScript", "Mobile Development"],
        path: "prayerapp1.png",
        link: "https://play.google.com/store/apps/details?id=com.itz_zaibi_17.FaizaneChisht&pcampaignid=web_share",
        github: "",
        category: "mobile",
        featured: false,
        status: "completed",
        year: "2024",
    },
    {
        "id": 5,
        "title": "Najam Portfolio Website",
        "shortDescription": "A modern and responsive portfolio for a business developer, built with cutting-edge web technologies.",
        "description": "Crafted a high-performance and elegant personal portfolio for a business developer to showcase his projects, case studies, and skills. Built with Next.js 15, React 19, and TypeScript, it features dynamic theming, GSAP-powered scroll animations, a filterable case study system, and a fully responsive design to ensure a compelling user experience across devices.",
        "tools": [
            "Next.js",
            "React 19",
            "TypeScript",
            "Tailwind CSS",
            "Shadcn UI",
            "GSAP"
        ],
        "path": "najam-portfolio.png",
        "link": "https://www.najamulhassan.com",
        "github": "",
        "category": "web",
        "featured": true,
        "status": "completed",
        "year": "2025"
    },
    // {
    //     "id": 6,
    //     "title": "Ticket-Master",
    //     "shortDescription": "A modern web app for seamless ticket booking across buses, trains, flights, movies, and events.",
    //     "description": "Ticket-Master is a full-featured web application developed as a semester project to streamline the process of booking and managing tickets for various services. Built using Next.js and TypeScript, it includes user authentication, a powerful admin dashboard, and optimized performance features like debouncing and image optimization. The platform ensures a responsive and accessible user experience using Radix UI, Tailwind CSS, Zustand, and Shadcn UI.",
    //     "tools": [
    //         "Next.js",
    //         "TypeScript",
    //         "React",
    //         "Tailwind CSS",
    //         "Zustand",
    //         "Shadcn UI",
    //         "Radix UI"
    //     ],
    //     "path": "ticketmaster.png",
    //     "link": "",
    //     "github": "https://github.com/zohaibsaeed117/ticket-master",
    //     "category": "fullstack",
    //     "featured": false,
    //     "status": "completed",
    //     "year": "2025"
    // }
    {
        "id": 7,
        "title": "Network Traffic Analysis Dashboard",
        "shortDescription": "Real-time dashboard for monitoring and analyzing network traffic with interactive filters and IDS control.",
        "description": "A frontend web application built with Next.js for real-time network traffic monitoring. It connects to an IDS backend, allowing users to view live flows, control packet sniffing, and apply filters to analyze traffic based on source, destination, protocol, classification, and risk.",
        "tools": ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI"],
        "path": "ids.jpeg",
        "link": "",
        "github": "https://github.com/zohaibsaeed117/Intrusion-Detection-System-Dashboard",
        "category": "fullstack",
        "featured": false,
        "status": "completed",
        "year": "2025"
    }


]

// Dynamic category generation based on projects
export const generateCategories = (projects) => {
    const categoryMap = new Map()

    // Count projects per category
    projects.forEach(project => {
        const count = categoryMap.get(project.category) || 0
        categoryMap.set(project.category, count + 1)
    })

    // Create category objects with proper labels
    const categoryLabels = {
        web: "Web Apps",
        mobile: "Mobile",
        fullstack: "Full Stack",
        backend: "Backend",
        frontend: "Frontend",
        ui: "UI/UX",
        api: "APIs"
    }

    const categories = [
        { id: "all", name: "All Projects", count: projects.length }
    ]

    // Add categories that exist in projects
    categoryMap.forEach((count, categoryId) => {
        categories.push({
            id: categoryId,
            name: categoryLabels[categoryId] || categoryId.charAt(0).toUpperCase() + categoryId.slice(1),
            count: count
        })
    })

    return categories
}

// Filter projects by category
export const filterProjectsByCategory = (projects, category) => {
    if (category === "all") return projects
    return projects.filter(project => project.category === category)
}

// Get featured projects
export const getFeaturedProjects = (projects) => {
    return projects.filter(project => project.featured)
}

// Get projects by status
export const getProjectsByStatus = (projects, status) => {
    return projects.filter(project => project.status === status)
}

// Get recent projects (by year)
export const getRecentProjects = (projects, year = "2024") => {
    return projects.filter(project => project.year === year)
}

// Sort projects by various criteria
export const sortProjects = (projects, sortBy = "featured") => {
    switch (sortBy) {
        case "featured":
            return [...projects].sort((a, b) => {
                if (a.featured && !b.featured) return -1
                if (!a.featured && b.featured) return 1
                return 0
            })
        case "year":
            return [...projects].sort((a, b) => parseInt(b.year) - parseInt(a.year))
        case "title":
            return [...projects].sort((a, b) => a.title.localeCompare(b.title))
        default:
            return projects
    }
}

// Get project statistics
export const getProjectStats = (projects) => {
    const stats = {
        total: projects.length,
        completed: projects.filter(p => p.status === "completed").length,
        inProgress: projects.filter(p => p.status === "in-progress").length,
        comingSoon: projects.filter(p => p.status === "coming-soon").length,
        featured: projects.filter(p => p.featured).length,
        categories: new Set(projects.map(p => p.category)).size,
    }

    return stats
}

export default projectsData
