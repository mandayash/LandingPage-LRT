'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import NavMenu from './NavMenu'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    return (
        <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm py-4">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="relative">
                        <Image src="/images/logo-lrt.png" alt="LRT Sumsel" width={108} height={48} className="object-contain" />
                    </Link>

                    {/* Nav Menu for desktop */}
                    <div className="hidden md:block">
                        <NavMenu />
                    </div>

                    {/* Hamburger for mobile */}
                    <Button 
                        variant="ghost" 
                        size="icon" 
                        className="md:hidden relative z-50 text-white" 
                        onClick={toggleMobileMenu}
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-6 h-6 text-white" /> 
                        ) : (
                            <Menu className="w-6 h-6 text-white" />
                        )}
                    </Button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden fixed inset-0 bg-black/80 pt-20 px-4 overflow-hidden z-40 text-white">
                        <div className="flex flex-col items-center h-full">
                            <NavMenu isMobile={true} onMenuItemClick={toggleMobileMenu} />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar