import { useEffect, useState } from 'react';
import Logo from '../assets/images/pistis-forge-logo-white.png'
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [scroll, setScroll] = useState(false)
    const [navMenu, setNavMenu] = useState(false)

    useEffect(()=>{
        const onScroll = ()=>{
            setScroll(window.scrollY > 600)       
        }
        window.addEventListener('scroll', onScroll)
        // return window.removeEventListener('scroll', onScroll)
    }, [])

    const navItems = [
        { label: 'About', href: '#about' },
        { label: 'Objectives', href: '#objectives' },
        { label: 'Projects', href: '#projects' },
        { label: 'Events', href: '#events' },
        { label: 'Contact', href: '#contact' },
      ];

  return (
    <nav className={`fixed py-2 top-0 left-0 w-full z-[1000] bg-blue-700 shadow-md ${ scroll ? 'bg-slate-300' : 'bg-transparent'}`}>
      <div className="w-11/12 mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-xl font-bold text-purple-800">
            <img src={Logo} alt={Logo} className='w-2/12 md:w-[12%]' />
        </div>
        <ul className={`hidden md:flex space-x-6 font-medium text-slate-200 ${ scroll ? 'text-slate-900' : 'text-slate-200'} `}>
          {navItems.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className="hover:text-purple-300">{label}</a>
            </li>
          ))}
        </ul>

        <div className="md:hidden text-white">
          {navMenu ? (
            <X size={28} onClick={() => setNavMenu(false)} className="cursor-pointer" />
          ) : (
            <Menu size={28} onClick={() => setNavMenu(true)} className="cursor-pointer" />
          )}
        </div>
      </div>

      {navMenu && (
        <div className="md:hidden bg-gray-800/80 h-screen p-10 pb-4 text-white space-y-4 transition-all">
          {navItems.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="block my-4 py-2 px-4 hover:border-l-2 "
              onClick={() => setNavMenu(false)} // Close on click
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
