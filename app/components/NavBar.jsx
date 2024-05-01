"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const NavBar = () => {
    
    const [navbarOpen, setNavbarOpen] = useState(false);
    
    return (
        <nav className = "fixed top-0 left-0 right-0 z-10 bg-[#8550ff] bg-opacity-90">
            <div className= "flex flex-wrap items-center justify-between mx-auto px-4 py-4">
                <Link href = {"/"} className="text-2xl md:text-5xl text-white font-semibold">
                    <h1 className ="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 ml-4 px-3 font-bold">  
                        <li> Lo<span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300 ">de</span> </li>
                        <li> De<span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300 ">v</span></li>

                    </h1>
                </Link>
                <div className="mobile-menu block md:hidden">
                {!navbarOpen ? (
                    <button
                        onClick={() => setNavbarOpen(true)}
                        className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                    >
                    <Bars3Icon className="h-5 w-5" />
                    </button>
                ) : (
                    <button
                    onClick={() => setNavbarOpen(false)}
                    className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
                    >
                    <XMarkIcon className="h-5 w-5" />
                    </button>
                )}
                </div>
                <div className="menu hidden md:block md:w-auto" id="navbar-default ">
                    <u1 className= "flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 ">
                        {navLinks.map((link, index) => (
                            <li key = {index}> 
                                <NavLink href={link.path} title ={link.title} />
                            </li>
                        ))}
                    </u1>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
        </nav>
    )
}

export default NavBar