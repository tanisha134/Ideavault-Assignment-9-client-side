"use client";

import Link from "next/link";
import { FaArrowRight, FaLightbulb } from "react-icons/fa";

export default function IdeaCard({ idea }) {
  const { _id, title, image, category, description, likes, createdAt } = idea;
  const data = new Date(createdAt).toLocaleDateString();
  return (
    <div className="flex flex-col group relative overflow-hidden rounded-3xl border border-white/20 bg-white shadow-lg shadow-slate-300/40 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-indigo-300">
      {/* Glow effects */}
      <div className="absolute -left-20 -top-20 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl transition-all duration-700 group-hover:scale-150" />

      <div className="absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-pink-500/10 blur-3xl transition-all duration-700 group-hover:scale-150" />

      {/* Border Glow */}
      <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-indigo-500/10 via-transparent to-purple-500/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Image */}
      <div className="relative aspect-4/3 lg:aspect-10/8 overflow-hidden mx-4 mt-4 rounded-xl">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />

        {/* Category Badge */}
        <div className="absolute top-5 left-5 z-20">
          <span className="rounded-full bg-white/15 backdrop-blur-2xl border border-white/20 px-4 py-2 text-xs font-bold text-white shadow-xl">
            {category}
          </span>
        </div>
        {/* Likes */}
        <div className="absolute bottom-5 right-5 z-20">
          <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-sm font-medium text-white backdrop-blur-xl">
            <FaLightbulb className="text-yellow-300" />
            <span>{likes || 0}</span>
          </div>
        </div>
        {/* Shine effect */}
        <div className="absolute -left-40 top-0 h-full w-24 rotate-12 bg-white/20 blur-xl transition-all duration-1000 group-hover:left-[120%]" />
      </div>
      {/* Content */}
      <div className="relative z-10 px-6 pb-6 pt-4 flex flex-col flex-1">
        {/* Title */}
        <h2 className="line-clamp-2 text-xl font-bold leading-tight text-gray-900 transition-colors duration-300 group-hover:text-indigo-800">
          {title}
        </h2>
        {/* Description */}
        <p className="mt-4 line-clamp-3 text-sm leading-7 text-gray-600">
          {description}
        </p>
        {/* Divider */}
        <div className="my-5 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent" />

        {/* Meta */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-linear-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold">
              {idea?.userName?.charAt(0)?.toUpperCase()}
            </div>
            <div className="group">
              <p className="relative inline-block text-xs text-gray-500">
                Created by
                <span className="absolute left-0 bottom-0 h-[2px] w-0 rounded-full bg-linear-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </p>
              <p className="text-sm font-semibold text-gray-800 transition-colors duration-300 group-hover:text-pink-700">
                {idea?.userName}
              </p>
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {category}
            </p>
          </div>
        </div>
        {/* Button */}
        <Link href={`/ideaDetails/${_id}`} className="mt-auto">
          <button className="mt-6 relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 py-4 text-sm font-semibold text-white shadow-lg shadow-purple-500/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-purple-500/40 active:scale-[0.98]">
            <span className="absolute -left-20 top-0 h-full w-20 rotate-12 bg-white/20 blur-md transition-all duration-1000 group-hover:left-[120%]" />
            <span>View Details</span>
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </Link>
      </div>
      {/* Bottom line*/}
      <div className="absolute bottom-0 left-0 h-1 w-full bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    </div>
  );
}