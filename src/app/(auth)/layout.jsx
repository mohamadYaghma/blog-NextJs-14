import React from 'react'

export default function layoute({children}) {
    return (
        <div className="flex items-center justify-center mt-20">
      <div className="p-2 w-full max-w-md">{children}</div>
    </div>
    )
}
