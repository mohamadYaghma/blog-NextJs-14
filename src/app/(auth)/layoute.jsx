import React from 'react'

export default function layoute({children}) {
    return (
        <div className="w-full max-w-md justify-center mt-20">
            <div className="w-full max-w-md p-2">
                {children}
            </div>
        </div>
    )
}
