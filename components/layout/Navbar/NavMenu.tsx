import NavLink from './NavLink'

const menuItems = [
    { href: '/', label: 'Beranda' },
    { href: '/layanan', label: 'Layanan' },
    { href: '/informasi', label: 'Informasi' },
    { href: '/tentang-kami', label: 'Tentang Kami' },
    { href: '/kontak', label: 'Hubungi Kami' },
]

const NavMenu = () => {
    return (
        <div className="flex items-center gap-x-8">
      {menuItems.map((item) => (
        <NavLink 
          key={item.href} 
          href={item.href}
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  )
}

export default NavMenu