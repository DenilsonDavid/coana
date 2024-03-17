"use client"

import Link from 'next/link';
import React, { useState } from 'react';
import "@/styles/navbar.css"
import { Button } from './ui/button';

import { usePathname } from 'next/navigation';

// import { Container } from './styles';

const navLinks = [
    { name: "PÁGINA INICIAL", href: "/" },
    { name: "ARTWORKS", href: "/artworks" },
    // { name: "SPECIAL PROJECTS", href: "/projects" },
    { name: "COANA CRAFTING", href: "/crafting" },
    { name: "NOTÍCIAS", href: "/news" },
    { name: "SOBRE", href: "/about" },
]

const Navbar: React.FC = () => {

    const pathName = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const menuHandler = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div id="nav" className="sticky top-0 overflow-hidden flex flex-col lg:gap-3 md:py-2 px-4 w-full items-center justify-center bg-white z-50">
            <div className="flex items-center justify-between w-full bg-white py-2 md:justify-center lg:py-0 z-10">
                <a href="/" className="text-[1.5rem] lg:text-[1.9rem] uppercase text-slate-800 font-extrabold">Sebastião Coana</a>

                <Button type="button"
                    variant="outline"
                    onClick={menuHandler}
                    className="flex items-center text-[13px] md:hidden justify-center">MENU</Button>
            </div>
            <ul className={`text-[14px] lg:text-[15px] bg-white flex flex-col items-center gap-8 w-full md:flex-row md:justify-center ${isOpen ? 'h-[100vh] -translate-y-0 pt-10' : 'h-0 -translate-y-[100vh]'} md:h-fit md:-translate-y-0`}>
                {navLinks.map((link) => {
                    return (
                        <Link 
                        href={link.href} 
                        key={link.name}
                        className="border-b-2"
                        style={{ 
                            ["borderColor" as any]: `${pathName === link.href ? "#020817" : "transparent"}`,
                          }}
                        >
                            {link.name}
                        </Link>
                    )
                })}
            </ul>
        </div>
    );
}

export default Navbar;