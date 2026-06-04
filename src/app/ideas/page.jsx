"use client";

import { useEffect, useState } from "react";
import IdeaCard from "@/components/ideas/IdeaCard";
import { FaSearch, FaChevronDown, FaClock, FaRocket } from "react-icons/fa";
import "animate.css";

export default function IdeaPage(){
  const [ideas, setIdeas] = useState([]);

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("")

  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/ideas")
    .then((res) => res.json())

    .then((data) => setIdeas(data));
  }, []);

  const filteredIdeas = ideas
  .filter((idea) => {
    const matchesSearch = idea.title?.toLowerCase().includes(search.toLowerCase());

    const matchesCategory = category === ""?true:idea.category?.toLowerCase() === category.toLowerCase();

    return matchesSearch && matchesCategory;
  })
  .sort((a,b) => {
    if(sortBy === "newest") {
      return new Date(b.createdAt) - new Date(a.createdAt);
    }
    if (sortBy === "oldest"){
      return new Date(a.createdAt) - new Date(b.createdAt);
    }
    return 0;
  });

  return(
    <section className="relative min-h-screen overflow-hidden bg-slate-50 py-16">

      {/* Background Effects */}
      <div className="absolute left-0 top-40 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"></div>

      <div className="absolute right-0 top-40 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl"></div>

      <div className="absolute left-1/2 bottom-0 h-72 w-72 -translate-x-1/2 rounded-full bg-pink-500/10 blur-3xl"></div>

      <div className="relative z-10 w-11/12 max-w-7xl mx-auto">
      
      <div className="text-center mb-14 animate__animated animate__fadeInDown">
        <h1 className ="text-5xl md:text-6xl font-black leading-tight text-gray-900">
          Explore{" "}
          <span className ="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Startup Ideas
          </span>
        </h1>
        <p className="mt-5 text-gray-600 max-w-2xl mx-auto text-lg">
          Discover innovative startup concepts, explore creative solutions,and find inspiration from entrepreneurs worldwide.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-14 animate__animated animate__fadeInUp">
        {/* Search */}
        <div className="relative lg:col-span-1">
          <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-purple-500" />

          <input type="text"
          placeholder="Search startup ideas..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-14 pr-5 py-4 rounded-3xl bg-white border border-gray-200 shadow-lg shadow-purple-100 outline-none transition-all duration-300 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20" />
        </div>

        {/* Category */}
        <div className="relative">
          <FaRocket className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-500 pointer-events-none" />
          <select 
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="appearance-none w-full rounded-3xl bg-white border border-gray-200 shadow-lg shadow-blue-100 pl-12 pr-12 py-4 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20">
            <option value="">All Categories</option>
            <option value="technology">Technology</option>
            <option value="ai">AI</option>
            <option value="education">Education</option>
            <option value="healthcare">Healthcare</option>
            <option value="business">Business</option>
            <option value="finance">Finance</option>
          </select>
          <FaChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
        </div>

        {/*sort*/}
        <div className="relative">
          <FaClock className="absolute left-5 top-1/2 -translate-y-1/2 text-pink-500 pointer-events-none" />
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="appearance-none w-full rounded-3xl bg-white border border-gray-200 shadow-lg shadow-pink-100 pl-12 pr-12 py-4 outline-none transition-all duration-300 focus:border-pink-500 focus:ring-4 focus:ring-pink-500/20">
            <option value="">Sort by</option>
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
          </select>
          <FaChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 items-stretch md:grid-cols-2 xl:grid-cols-3 gap-8 animate__animated animate__fadeInUp animate__delay-1s">
        {filteredIdeas.map((idea) => (
          <IdeaCard key={idea._id} idea={idea} />
        ))}
      </div>
      {filteredIdeas.length === 0 && (
        <div className="text-center py-24 animate__animated animate__fadeIn">
          <h3 className="text-3xl font-bold text-gray-800">
            No Ideas Found
          </h3>
          <p className="mt-3 text-gray-500">
            Try searching with different keywords or categories.
          </p>
        </div>
      )}
      </div>
    </section>
  )
}