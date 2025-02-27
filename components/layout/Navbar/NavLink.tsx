'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavLinkProps = {
    href: string
    children: React.ReactNode
}

const NavLink = ({ href, children }: NavLinkProps) => {
    const pathname = usePathname()
    const isActive = pathname === href

    return (
        <Link href={href} className={`
            relative px-3 py-2
            text-white/90 hover:text-white
            transition-colors duration-200
            
            ${isActive ? 'font-medium' : 'font-normal'}
            
            after:absolute after:bottom-0 after:left-0 
            after:h-0.5 after:w-full after:origin-center
            after:scale-x-0 after:bg-white after:transition-transform
            hover:after:scale-x-100
            `}
        >
            {children}
        </Link>
    )
}

export default NavLink