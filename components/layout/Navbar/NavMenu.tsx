'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

type NavLinkProps = {
    href: string
    children: React.ReactNode
    isMobile?: boolean
    onClick?: () => void
}

const NavLink = ({ href, children, isMobile = false, onClick }: NavLinkProps) => {
    const pathname = usePathname()
    const isActive = pathname === href

    const mobileStyles = isMobile 
        ? "text-lg block py-3 text-center w-full rounded-md hover:bg-white/10 transition-colors" 
        : "px-3 py-2"

    return (
        <Link 
            href={href} 
            onClick={onClick}
            className={`
                relative
                text-white/90 hover:text-white
                transition-colors duration-200
                
                ${isActive ? 'font-medium text-white' : 'font-normal'}
                
                ${mobileStyles}
                
                ${!isMobile ? `
                    after:absolute after:bottom-0 after:left-0 
                    after:h-0.5 after:w-full after:origin-center
                    after:scale-x-0 after:bg-white after:transition-transform
                    hover:after:scale-x-100
                ` : ''}
            `}
        >
            {children}
        </Link>
    )
}

const menuItems = [
    { href: '/', label: 'Beranda' },
    { href: '/informasi', label: 'Informasi' },
    { href: '/kontak', label: 'Hubungi Kami' },
]

type NavMenuProps = {
    isMobile?: boolean
    onMenuItemClick?: () => void
}

const NavMenu = ({ isMobile = false, onMenuItemClick }: NavMenuProps) => {
    return (
        <div className={`
            ${isMobile 
                ? 'flex flex-col items-center space-y-4 w-full px-4' 
                : 'flex items-center gap-x-8'
            }
        `}>
            {menuItems.map((item) => (
                <NavLink 
                    key={item.href} 
                    href={item.href}
                    isMobile={isMobile}
                    onClick={onMenuItemClick}
                >
                    {item.label}
                </NavLink>
            ))}
        </div>
    )
}

export default NavMenu