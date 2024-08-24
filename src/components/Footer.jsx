import React from 'react'

const Footer = () => {
    return (
        <footer className="text-center bg-background-200 text-foreground shadow-lg p-4">
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Zohaib Saeed</p>
            </aside>
        </footer>
    )
}

export default Footer
