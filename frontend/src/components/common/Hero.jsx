import React from "react";
import { assets } from "../../assets";

const Hero = () => {
    return (
        <section className="w-full min-h-screen flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-20 pt-32 pb-16 bg-gradient-to-br from-white to-gray-100 overflow-hidden">

            {/* Left Side */}
            <div className="w-full lg:w-1/2 mt-12 lg:mt-0">

                <p className="text-red-700 font-semibold tracking-widest uppercase mb-4">
                    Hello There 👋
                </p>

                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight text-gray-900">
                    I'm{" "}
                    <span className="text-red-700">
                        Yashwant
                    </span>
                </h1>

                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mt-4">
                    MERN Stack Developer
                </h2>

                <p className="text-gray-600 text-lg leading-8 mt-6 max-w-xl">
                    I build modern, responsive and scalable web applications
                    with clean UI/UX and powerful backend systems using the
                    MERN Stack.
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap items-center gap-5 mt-10">
                    <a href="mailto:sahuyashwant000@gmail.com">
                        <button className="bg-red-700 hover:bg-red-800 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all duration-300">
                            Hire Me
                        </button>
                    </a>

                    <a
                        href="https://drive.google.com/file/d/1OhNv9Jd1AGfGo_V_2f_kQgRD6vYbyBmx/view?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="border-2 border-gray-300 hover:border-red-700 hover:text-red-700 px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                            View Resume
                        </button>
                    </a>

                </div>

                {/* Social */}
                <div className="flex items-center gap-6 mt-12">

                    <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-red-700 hover:text-white hover:border-red-700 transition-all duration-300 cursor-pointer">
                        <a
                            href="https://github.com/Yashwantsahu9907"
                            target="_blank"
                            rel="noopener noreferrer"
                        ><i className="ri-github-fill text-xl"></i> </a>
                    </div>

                    <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-red-700 hover:text-white hover:border-red-700 transition-all duration-300 cursor-pointer">
                        <a
                            href="https://www.linkedin.com/in/yashwant-sahu-0b008b345/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-red-700 hover:text-white hover:border-red-700 transition-all duration-300 cursor-pointer"
                        >
                            <i className="ri-linkedin-fill text-xl"></i>
                        </a>
                    </div>

                    <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-red-700 hover:text-white hover:border-red-700 transition-all duration-300 cursor-pointer">
                        <a
                            href="insta_link"
                            target="_blank"
                            rel="noopener noreferrer"
                        > <i className="ri-instagram-line text-xl"></i> </a>
                    </div>

                </div>
            </div>

            {/* Right Side */}
            <div className="w-full lg:w-1/2 flex justify-center relative">

                {/* Background Blur */}
                <div className="absolute w-[350px] h-[350px] bg-red-200 rounded-full blur-3xl opacity-40"></div>

                {/* Image */}
                <img
                    src={assets.Hero}
                    alt="Hero"
                    className="relative w-[320px] sm:w-[420px] lg:w-[550px] object-cover rounded-3xl shadow-2xl border-4 border-white hover:scale-105 transition-all duration-500"
                />
            </div>
        </section>
    );
};

export default Hero;