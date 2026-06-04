"use client";

import { useState } from "react";
import{ toast } from "react-toastify";
import { FaRocket, FaLightbulb, FaImage, FaUser, FaChevronDown } from "react-icons/fa";
import "animate.css";

export default function AddIdeaPage() {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  //Validation
  const validationForm = (data) => {
    const newErrors = {};
    if(!data.title?.trim()) {
      newErrors.title = "Idea title is required";
    }
    if(!data.category?.trim()) {
      newErrors.category = "please select a category";
    }
    if(!data.userName?.trim()) {
      newErrors.userName = "Your name is required";
    }
    if(!data.image?.trim()) {
      newErrors.image = "Image URL is required";
    }
    if(!data.description?.trim()) {
      newErrors.description = "description is required";
    }
    return newErrors;
  };
  //Submit
  const onSubmit = async(e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const ideaData = Object.fromEntries(formData.entries());
    const validationErrors = validationForm(ideaData);
    //error check
    if(Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fill all required fields");
      return;
    }
    setErrors({});
    setLoading(true);
    //Extra data
    ideaData.likes = 0;
    ideaData.comments = 0;
    ideaData.createdAt = new Date();
    ideaData.userEmail = "user@gmail.com";
    console.log(ideaData);
    const res = await fetch('http://localhost:5000/addIdea', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body:JSON.stringify(ideaData)
    })
    const data = await res.json()
    console.log(data)
    toast.success("Idea Published Successfully");
    setLoading(false);
    e.target.reset();
  };
  return(
    <section className="relative overflow-hidden py-16 md:py-18 lg:py-10 bg-slate-50 bg-linear-to-br from-slate-100 via-white to-slate-200 dark:from-[#020617] dark:via-[#0f172a] dark:to-[#111827] transition-all duration-500">
      <div className="relative z-10 w-11/12 max-w-5xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-16 animate__animated animate__fadeInDown">
      {/* Badge */}
      <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-white/20 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur-2xl shadow-xl shadow-gray-200 dark:shadow-none mb-8 hover:scale-105 transition-all duration-500">
      <span className="relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-500 opacity-75"></span>

        <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
        </span>
        <p className="text-sm md:text-base font-semibold tracking-[2px] uppercase bg-linear-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
          Launch Your Innovation
        </p>
      </div>
      {/* Title */}
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] text-gray-900 dark:text-white">
        <span className="block animate__animated animate__fadeInUp animate__slow"> Share Your</span>
        <span className="bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
          Startup Idea
        </span>

        <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-44 md:w-64 h-4 bg-linear-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-2xl rounded-full"></span>
      </h1>
      {/* Description */}
      <p className="mt-8 text-base font-semibold md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed animate__animated animate__fadeInUp animate__delay-2s">
        Turn your imagination into a real startup vision and inspire creators,innovators, and entrepreneurs worldwide.

        <span className="block mt-3 text-purple-500 font-semibold">
          Your next big idea could change the future 
        </span>
      </p>
      </div>
      {/* Form Card */}
      <div className="relative rounded-3xl border border-gray-200 dark:border-white/10 bg-white/75 dark:bg-white/5 backdrop-blur-3xl p-6 md:p-10 lg:p-14 shadow-xl shadow-pink-200 dark:shadow-xl dark:shadow-purple-200 overflow-hidden animate__animated animate__fadeInUp">

      {/* Top line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500"></div>

      <form onSubmit={onSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Title */}
          <div className="md:col-span-2">
            <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">

            <FaLightbulb className="text-purple-500" />
            Idea Title
            </label>
            <input 
            type="text"
            name="title"
            placeholder="AI Powered Startup Platform" 
            className={`w-full rounded-2xl bg-white dark:bg-white/5 border px-5 py-4 outline-none transition-all duration-300 text-gray-800 dark:text-white placeholder:text-gray-400 focus:scale-[1.01] ${
              errors.title ? "border-red-500 focus:ring-red-500/20": "border-gray-200 dark:border-white/10 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20"
            }`}/>
            {errors.title && (
              <p className="mt-2 text-sm text-red-500 animate__animated animate__fadeIn">
                {errors.title}
              </p>
            )}
          </div>
          {/* category */}
          <div>
            <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
              <FaRocket className="text-blue-500"/>
                Category
            </label>
            <div className="relative">
            <select name="category" className={`w-full rounded-2xl appearance-none bg-white dark:bg-white/5 border px-5 py-4 outline-none transition-all duration-300 text-gray-800 dark:text-white focus:scale-[1.01] ${
              errors.category ? "border-red-500 focus:ring-4 focus:ring-red-500/20" : "border-gray-200 dark:border-white/10 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20"
            }`}>

              <option value="">Select Category</option>
              <option>Technology</option>
              <option>AI</option>
              <option>Education</option>
              <option>Healthcare</option>
              <option>Business</option>
              <option>Finance</option>
            </select>
            <FaChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none text-sm"/> 
            </div>
            {errors.category && (
              <p className="mt-2 text-sm text-red-500 animate__animated animate__fadeIn">
                {errors.category}
              </p>
            )}
          </div>
          {/* User Name */}
          <div>
            <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
              <FaUser className="text-pink-500" />
              Your Name
            </label>
            <input 
            type="text"
            name="userName"
            placeholder="John Doe"
            className={`w-full rounded-2xl bg-white dark:bg-white/5 border px-5 py-4 outline-none transition-all duration-300 text-gray-800 dark:text-white placeholder:text-gray-400 focus:scale-[1.01] ${
              errors.userName ? "border-red-500 focus:ring-4 focus:ring-red-500/20" : "border-gray-200 dark:border-white/10 focus:border-pink-500 focus:ring-4 focus:ring-pink-500/20"
            }`} />
            {errors.userName && (
              <p className="mt-2 text-sm text-red-500 animate__animated animate__fadeIn">
                {errors.userName}
              </p>
            )}
          </div>
          {/* Image */}
          <div className="md:col-span-2">
            <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
              <FaImage className="text-purple-500"/>
              Idea Image URL
            </label>
            <input 
            type="url"
            name="image"
            placeholder="https://example.com/image.jpg"
            className={`w-full rounded-2xl bg-white dark:bg-white/5 border px-5 py-4 outline-none transition-all duration-300 text-gray-800 dark:text-white placeholder:text-gray-400 focus:scale-[1.01] ${
              errors.image ? "border-red-500 focus:ring-4 focus:ring-red-500/20" : "border-gray-200 dark:border-white/10 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/20"
            }`}/>
            {errors.image && (
              <p className="mt-2 text-sm text-red-500 animate__animated animate__fadeIn">
                {errors.image}
              </p>
            )}
          </div>
          {/* Description */}
          <div className="md:col-span-2">
            <label className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
              <FaLightbulb className="text-yellow-500"/>
              Short Description
            </label>
            <textarea 
            name="description"
            rows={6}
            placeholder="Describe your startup idea..."
            className={`w-full rounded-3xl bg-white dark:bg-white/5 border px-5 py-4 outline-none transition-all duration-300 resize-none text-gray-800 dark:text-white placeholder:text-gray-400 focus:scale-[1.01] ${
              errors.description ? "border-red-500 focus:ring-4 focus:ring-red-500/20" : "border-gray-200 dark:border-white/10 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20"
            }`}></textarea>
            {errors.description && (
              <p className="mt-2 text-sm text-red-500 animate__animated animate__fadeIn">
                {errors.description}
              </p>
            )}
          </div>
        </div>
        {/* Button */}
        <button 
        type="submit"
        disabled={loading}
        className="group relative overflow-hidden cursor-pointer w-full hover:scale-105 active:scale-95 transform flex items-center justify-center gap-3 rounded-2xl bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 py-4 text-lg font-semibold text-white shadow-lg shadow-purple-400 hover:-translate-y-1 transition-all duration-500 disabled:opacity-70">

          <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></span>

          <FaLightbulb className="relative z-10 group-hover:scale-110 transition-all duration-300" />

          <span className="relative z-10">
            {loading ? "Publishing..." : "Publish Idea"}
          </span>
        </button>
      </form>
      </div>
      </div>
    </section>
  )
}