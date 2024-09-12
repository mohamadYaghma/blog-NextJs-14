"use client"

import React from 'react'

export default function Error({error , reset}) {
  return (
    <div className="container xl:max-w-screen-xl">
        <div className="flex justify-center pt-10">
            <div>
                <h1 className="text-xl font-bold mb-8 text-secondary-700">
                    {error.message}
                </h1>
                <button
                    onClick={ reset}
                    className="felx items-center gap-x-2 text-secondary-500"
                >
                    تلاش مجدد
                </button>
            </div>
        </div>
    </div>
  )
}
