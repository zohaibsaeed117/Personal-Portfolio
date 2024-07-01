import React from 'react'

const Badge = ({ title, style }) => {
    return (
        <div className={`badge badge-lg bg-primary-100 py-4 px-6 text-secondary-200 text-base shadow-md ${style}`}>{title}</div>

    )
}

export default Badge
