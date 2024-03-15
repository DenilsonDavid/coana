import Link from 'next/link';
import React from 'react';
import "@/styles/navbar.css"

// import { Container } from './styles';

const navLinks = [
    { name: "ARTISTS", href: "/artists" },
    { name: "EXHIBITIONS", href: "/exhibitions" },
    { name: "SPECIAL PROJECTS", href: "/projects" },
    { name: "VIEWING ROOMS", href: "/rooms" },
    { name: "FAIRS", href: "/fairs" },
    { name: "NEWS", href: "/news" },
]

const Navbar: React.FC = () => {
  return (
    <div className="nav sticky top-0 flex lg:flex-col gap-3 py-3 w-full items-center justify-center bg-white z-50">
        <a href="/" className="text-[2.2rem] uppercase text-slate-800 font-bold">Sebastião Coana</a>

        <button type="button" className="flex items-center lg:hidden justify-center">MENU</button>
        <ul className="items-center gap-8 text-[14px] flex h-auto lg:flex-col md:flex-wrap">
            {navLinks.map((link) => {
                return (
                    <Link href={link.href} key={link.name}>{link.name}</Link>
                )
            })}
        </ul>
    </div>
  );
}

export default Navbar;