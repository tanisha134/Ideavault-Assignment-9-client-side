"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaSignInAlt, FaUserPlus } from "react-icons/fa";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("home");

    //Temp User
    const user = false;
    const navLinks = (
        <>
        <div className="relative flex items-center rounded-full">
            {/* Slider */}
            <div className={`absolute top-0 bottom-0 left-1 w-[calc(50%-4px)] rounded-full bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300 ${activeTab === "home" ? "translate-x-0" : "translate-x-full"}`}/>

            {/* Home */}
            <Link href="/" onClick={() => setActiveTab("home")} className={`relative z-10 px-6 py-2 text-sm font-semibold transition-all duration-300 ${activeTab === "home" ? "text-white" : "text-gray-600"}`}>
            Home
            </Link>

            {/* Ideas */}
            <Link href="/ideas" onClick={() => setActiveTab("ideas")} className={`relative z-10 px-6 py-2 text-sm font-semibold transition-all duration-300 ${activeTab === "ideas" ? "text-white" : "text-gray-600"}`}>
            Ideas
            </Link>
        </div>

        {user && (
            <>
            <li>
                <Link href="/addIdea" className="hover:text-primary transition-all duration-300 hover:scale-105 font-medium">
                Add Idea
                </Link>
            </li>
            <li>
                <Link href="/myIdeas"
                className="hover:text-primary transition-all duration-300 hover:scale-105 font-medium">
                My Ideas
                </Link>
            </li>
            <li>
                <Link href="/myInteractions" className="hover:text-primary transition-all duration-300 hover:scale-105 font-medium">
                My Interactions
                </Link>
            </li>
            </>
        )}
        </>
    );
    return (
        <div className="sticky top-0 z-50 backdrop-blur-xl py-1 bg-white/70 border-b border-white/20 shadow-md">
            <div className="navbar w-11/12 mx-auto px-0 py-2">
            {/* Left */}
            <div className="navbar-start">
                {/* Mobile Menu */}
                <div className="dropdown lg:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer relative w-12 h-12 flex items-center justify-center rounded-2xl bg-linear-to-br from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md shadow-purple-200 hover:shadow-lg hover:shadow-purple-400 transition-all duration-300 hover:translate-y-1 active:scale-90 overflow-hidden">
                        {/* glow effect */}
                        <span className="absolute inset-0 bg-white-10 opacity-0 hover:opacity-100 transition"></span>
                        <span className="relative">
                            {isOpen ? (
                                <FaTimes size={18} className="animate-[spin_0.3s_ease]"/>
                            ):(
                                <FaBars size={18} className="animate-[pulse_0.6s_ease]"/>
                            )}
                        </span>
                    </button>
                    {isOpen && (
                        <ul className="menu menu-sm dropdown-content mt-4 z-100 p-4 shadow-2xl bg-white/95 backdrop-blur-xl rounded-3xl w-60 border border-gray-100 gap-2">
                            {navLinks}
                        </ul>
                    )}
                </div>
                {/* Logo */}
                <Link href="/" className="flex items-center navbar-start gap-3 group">
                <div className="relative">
                    <div className="absolute inset-0 bg-linear-to-r from-blue-500 to-purple-500 blur-xl hover:opacity-70 transition duration-500"></div>
                    <img src="/images/nav-logo.png" alt="logo" className="relative w-11 h-11 rounded-full border-2 border-white shadow-lg group-hover:rotate-6 transition-all duration-500" />
                </div>
                <div>
                    <h1 className="text-3xl font-black bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-wide">
                        IdeaVault
                    </h1>
                </div>
                </Link>
            </div>
            {/* Center */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-3 py-2 gap-2 bg-white rounded-full border border-gray-100 shadow-md">
                    {navLinks}
                </ul>
            </div>
            {/* Right */}
            <div className="navbar-end gap-4">
                {!user ? (
                    <>
                    <Link href="/login">
                    <button className="cursor-pointer flex items-center gap-2 px-7 py-3 rounded-full bg-white text-[#5B5BFF] font-semibold border border-gray-100 shadow-md shadow-blue-100 hover:shadow-lg hover:shadow-blue-200 hover:-translate-y-1 active:scale-90 transition-all duration-300">
                        <FaSignInAlt />
                        Login
                    </button>
                    </Link>

                    <Link href="/register">
                    <button className="cursor-pointer flex items-center gap-2 px-8 py-3 rounded-full text-white font-semibold bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 shadow-md shadow-purple-300 hover:shadow-lg hover:shadow-purple-400 hover:-translate-y-1 active:scale-90 transition-all duration-300">
                        <FaUserPlus/>
                        Register
                    </button>
                    </Link>
                    </>
                ):(
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar hover:scale-110 transition-all duration-300">
                            <div className="w-11 rounded-full ring-2 ring-purple-400 ring-offset-2 ring-offset-base shadow-xl">
                                <img           src="https://i.ibb.co.com/4pDNDk1/avatar.png" alt="User"/>
                            </div>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-4 z-100 p-3 shadow-2xl bg-white/90 backdrop-blur-xl rounded-2xl w-56 border border-white/20 gap-2">
                        <li>
                            <Link href="/profile" className="cursor-pointer hover:bg-linear-to-r hover:from-blue-100 hover:to-purple-100 rounded-xl">
                                Profile
                            </Link>
                        </li>
                        <li>
                            <button className="cursor-pointer hover:bg-linear-to-r hover:from-red-100 hover:to-pink-100 rounded-xl text-red-500 font-semibold">
                                Logout
                            </button>
                        </li>
                        </ul>
                    </div>
                )}
            </div>
            </div>
        </div>
    );
}