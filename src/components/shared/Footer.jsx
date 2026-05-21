import Link from "next/link";
import { FaFacebookF, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
    return (
        <footer className="relative overflow-hidden pb-0 mb-0">
            {/* Main bg */}
            <div className="absolute inset-0 bg-black "></div>
            {/* Glow effects */}
            <div className="absolute top-0 left-[-80px] w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>

            <div className="absolute bottom-0 right-[-80px] w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

            {/* Grid */}
            <div className="absolute inset-0 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]"></div>
            <div className="relative w-11/12 mx-auto py-14">
            {/* Top */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-14">

                {/* Left */}
                <div className="max-w-lg text-center lg:text-left">
                    <Link href="/" className="inline-flex items-center gap-4 group">

                    {/* Logo */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 blur-2xl opacity-50 group-hover:opacity-100 transition-all duration-300 rounded-full"></div>

                        <img src="/images/nav-logo.png" alt="logo" className="relative w-14 h-14 rounded-full border border-white/20 shadow-2xl group-hover:rotate-12 transition-all duration-500 brightness-0 invert"/>
                        </div>
                        {/* Text */}
                        <div>
                            <h1 className="text-4xl font-black tracking-wide bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                IdeaVault
                            </h1>
                            
                            <p className="text-xs tracking-[4px] uppercase text-gray-500 mt-1">
                                Startup Innovation Platform
                            </p>
                        </div>
                    </Link>
                    <p className="mt-6 text-gray-400 leading-relaxed text-[15px]">
                    Explore visionary startup ideas, collaborate with innovators, and shape the future through creativity and technology. 
                    </p>
                    </div>
                    {/* Center Links */}
                    <div className="flex flex-wrap items-center justify-center gap-8 text-sm font-medium">
                        {[
                            ["Home","/"],
                            ["Ideas","/ideas"],
                            ["Add Idea","/addIdea"],
                            ["My Ideas","/myIdeas"],
                            ["Interactions", "/myInteractions"],
                        ].map(([label,path]) => (
                            <Link key={label}
                            href={path} className="relative text-gray-400 hover:text-white transition-all duration-300 group tracking-wide">
                                {label}
                                <span className="absolute left-0 -bottom-1 w-0 h-[2px] rounded-full bg-linear-to-r from-blue-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
                            </Link>
                        ))}
                    </div>
                    {/* Contact */}
                    <div className="flex flex-col items-center lg:items-start gap-3">
                        <h2 className="text-white font-semibold tracking-wide">
                            Contact
                        </h2>
                        <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <HiOutlineMail/>
                            ideavault@gmail.com
                        </div>
                        <p className="text-gray-400 text-sm">Dhaka, Bangladesh</p>
                    </div>
                    {/* Right Social */}
                    <div className="grid grid-cols-2 gap-8">
                        {[<FaFacebookF />, <FaXTwitter />, <FaGithub />, <FaLinkedin />,].map((icon, idx) => (
                            <a key={idx} href="#" className="group relative w-12 h-12 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl flex items-center justify-center overflow-hidden hover:translate-y-2 transition-all duration-500">
                                {/* Hover bg */}
                                <div className="absolute inset-0 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                                <span className="relative text-lg text-white">{icon}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>
                {/* Divider */}
                <div className="mt-12 h-[1px] bg-linear-to-r from-transparent via-white/20 to-transparent"></div>

                {/* Bottom */}
                <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-500 text-center md:text-left">
                        &copy; 2026 IdeaVault — Crafted for dreamers & innovators.
                    </p>
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                        <p className="hover:text-white transition-all duration-300">
                            Terms
                        </p>
                        <p className="hover:text-white transition-all duration-300">
                            Security
                        </p>
                        <p className="hover:text-white transition-all duration-300">
                            Privacy
                        </p>
                    </div>
                </div>
                </div>
        </footer>
    );
};