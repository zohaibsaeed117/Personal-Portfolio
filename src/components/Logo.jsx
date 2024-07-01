import Image from 'next/image'
import React from 'react'

const Logo = ({ path, name }) => {

    return (
        <div className='mx-auto flex items-center justify-center flex-col gap-y-2  '>
            <Image src={`/skills/${path}.png`}
                alt={name}
                height={100}
                width={100}
                className='object-contain aspect-square h-12 md:h-20 sm:h-16 lg:h-24'
                blurDataURL='true'
                placeholder='blur'
            />
            <span className='text-sm text-secondary-100 md:text-xl sm:text-base'>{name}</span>
        </div>
    )
}

export default Logo
