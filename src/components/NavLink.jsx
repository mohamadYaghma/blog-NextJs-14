"use client"

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function NavLink({path , children}) {
    const pathname = usePathname();

  return (
    <Link 
        className={`block py-2 hover:text-secondary-900 transition-all ease-out 
            ${pathname === path ? "text-primary-900" : ""} 
        `}
        href={path}
    >
        {children}
    </Link>
  )
}
