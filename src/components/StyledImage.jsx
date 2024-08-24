import React from 'react'

const StyledImage = ({ src, direction }) => {
    return (
        <div className="relative inline-block h-60 w-52 lg:h-96 lg:w-80 md:h-72 md:w-64 ">
            <div className={`absolute inset-0 transform -translate-x-3 translate-y-4 ${direction === "right" ? "lg:translate-x-4 lg:translate-y-6 bg-background-200" : "lg:-translate-x-12 translate-y-7 bg-background-100"}`}></div>
            <img
                src={src}
                alt="Styled"
                className={`relative z-10 h-60 border-8 lg:h-96 md:h-72 ${direction === "right" ? 'border-background-100' : 'border-background-200'}`}
            />
        </div>
    )
}

export default StyledImage
