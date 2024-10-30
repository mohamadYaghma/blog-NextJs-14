import Avatar from '@/ui/Avatar'
import React from 'react'

export default function Author({name ,avatarUrl}) {
    return (
        <div className="flex items-center justify-between gap-x-1">
            <Avatar 
                src={avatarUrl}
            />
            <span className="text-sm text-secondary-500">
                {name}
            </span>
        </div>
)
}
