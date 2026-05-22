"use client";

import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import "animate.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaArrowRight, FaLightbulb } from "react-icons/fa";

export default function Banner() {
    const banners = [
        {
            image: "/images/startup-team.jpg",
            title: "Brilliant Startup Ideas",
            desc: "Discover innovative startup concepts and connect with creative minds worldwide.",
        },
        {
            image: "/images/ai-technology.png",
            title: "Future AI Innovation",
            desc: "Explore AI-powered solutions and build the next generation of technology.",
        },
        {
            image: "/images/innovation2.jpg",
            title: "Creative Digital Products",
            desc: "Turn imagination into reality through collaboration and innovation.",
        },
    ];
    return(
        <section className="relative">
            <Swiper modules={[Pagination, Autoplay]} pagination={{clickable:true}} autoplay={{delay:7500, disableOnInteraction:false,}}
            speed={2200}
            loop={true}
            grabCursor={true}
            className="h-[76vh] md:h-[84vh]">
                {banners.map((banner, idx) => (
                    <SwiperSlide key={`${idx}-${banner.title}`}>
                    {/* bg Image */}
                    <div className="relative h-[76vh] md:h-[84vh] bg-cover bg-center" style={{
                        backgroundImage:`url(${banner.image})`,
                    }}>
                        {/* Overly */}
                        <div className="absolute inset-0 bg-black/65"></div>

                        {/* Glow */}
                        <div className="absolute top-0 left-0 w-80 h-80 bg-blue-500/10 blur-3xl rounded-full"></div>

                        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 blur-3xl rounded-full"></div>

                        {/* Grid */}
                        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:70px_70px]"></div>

                        {/* Content */}
                        <div className="relative z-10 w-11/12 mx-auto h-full flex items-center">
                        <div className="max-w-3xl text-white">
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/10 backdrop-blur-xl mb-6 animate__animated animate__fadeInDown animate__slower">

                            <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span>

                            <p className="text-sm tracking-wide text-gray-200">
                                The Future Starts With Ideas
                            </p>
                            </div>
                            {/* Title */}
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                                <span className="block animate__animated animate__fadeInUp animate__slower">
                                    Share Your
                                </span>
                                <span className="block mt-2 bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate__animated animate__fadeInUp animate__delay-1s animate__slower ">
                                   {banner.title}
                                </span>
                            </h1>
                            {/* Description */}
                            <p className="mt-6 text-base md:text-lg text-gray-300 max-w-2xl leading-relaxed animate__animated animate__fadeInLeft animate__delay-1s animate__slower">
                                {banner.desc}
                            </p>
                            {/* Stats */}
                            <div className="mt-8 flex flex-wrap gap-4">
                                {/* Card */}
                                <div className="px-5 py-3 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl hover:scale-105 transition-all duration-300  animate__animated animate__fadeInUp animate__delay-2s animate__slow">
                                <h3 className="text-xl font-bold">
                                    10k+
                                </h3>
                                <p className="text-sm text-gray-300">
                                    Ideas Shared
                                </p>
                                </div>
                                {/* Card */}
                                <div className="px-5 py-3 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl hover:scale-105 transition-all duration-300  animate__animated animate__fadeInUp animate__delay-3s animate__slow">

                                <h3 className="text-xl font-bold">
                                    5k+
                                </h3>
                                <p className="text-sm text-gray-300">
                                    Active Creators
                                </p>
                                </div>
                            </div>
                        </div>
                        </div>
                        {/* Buttons */}
                        <div className="absolute bottom-10 right-5 md:right-14 z-20 flex flex-wrap gap-5">
                            <Link href="/ideas" className="animate__animated animate__fadeInUp animate__delay-2s animate__slow">
                            <button className="cursor-pointer flex items-center gap-3 px-8 py-4 rounded-2xl bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg shadow-purple-300 hover:-translate-y-1 hover:scale-105 transition-all duration-300">
                                <FaArrowRight className="text-sm"/>
                                Explore Ideas
                            </button>
                            </Link>
                            <Link href="/addIdea" className="animate__animated animate__fadeInUp animate__delay-3s animate__slow">
                            <button className="cursor-pointer flex items-center gap-3 px-8 py-4 rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl text-white font-semibold hover:bg-white hover:text-black hover:-translate-y-1 hover:scale-105 transition-all duration-300">
                                <FaLightbulb className="text-sm"/>
                                Share Idea   
                            </button>
                            </Link>
                        </div>
                        {/* Floating effect */}
                        <div className="absolute right-10 top-1/2 hidden lg:flex flex-col gap-5 -translate-y-1/2">

                        <div className="w-4 h-4 rounded-full bg-pink-500 animate-ping"></div>

                        <div className="w-3 h-3 rounded-full bg-blue-400 animate-bounce"></div>

                        <div className="w-4 h-4 rounded-full bg-purple-500 animate-pulse"></div>

                        </div>
                    </div>    
                    </SwiperSlide>
                ))}

            </Swiper>

        </section>
    )
}