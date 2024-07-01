import React from 'react'

const StyledImage = ({ src, direction }) => {
    return (
        <div className="relative inline-block h-60 w-52 lg:h-96 lg:w-80 md:h-72 md:w-64 ">
            <div className={`absolute inset-0 bg-primary-300 transform -translate-x-3 translate-y-4 ${direction === "right" ? "lg:translate-x-4 lg:translate-y-6" : "lg:-translate-x-12 translate-y-7"}`}></div>
            <img
                src={src}
                alt="Styled"
                className="relative z-10 shadow-lg h-60 border-8 border-primary-100 lg:h-96 md:h-72"
            />
        </div>
    )
}

export default StyledImage
