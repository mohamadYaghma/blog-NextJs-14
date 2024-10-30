import React from 'react'
import SvgComponent from './SvgComponent'

export default function Fallback() {
    return (
        <div className="flex items-center justify-center gap-x-4 my-12 mx-auto ">
            <span className="text-secondary-500">درحال بارگذاری اطلاعات</span>
            <SvgComponent />
        </div>
    )
}
