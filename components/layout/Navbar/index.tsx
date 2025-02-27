'use client'

import Image from 'next/image'
import Link from 'next/link'
import NavMenu from './NavMenu'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full z-50 bg-transparent py-4">
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
                    <Button variant="ghost" size="icon" className="md:hidden" onClick={() => {}}>
                        <Menu className="w-6 h-6 text-white" />
                    </Button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar