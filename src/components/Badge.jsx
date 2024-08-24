import React from 'react'
import { Badge as BadgeComponent } from '@/components/ui/badge'

const Badge = ({ title, style }) => {
    return (
        <BadgeComponent className={style}>{title}</BadgeComponent>

    )
}

export default Badge
