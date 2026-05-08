import React from "react";

const Contact = () => {
  return (
    <section className="w-full min-h-screen bg-white pt-32 pb-20 px-6 lg:px-20">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center">

          <p className="text-red-700 text-2xl font-semibold tracking-[4px] uppercase mb-4">
            Contact Me
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900">
            Let’s Work
            <span className="text-red-700"> Together</span>
          </h1>

          <p className="text-gray-600 text-lg leading-8 mt-6 max-w-3xl mx-auto">
            Have a project idea, internship opportunity, or want to
            collaborate? Feel free to reach out. I’m always open to
            discussing new projects and opportunities.
          </p>

        </div>

        {/* Main Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-20 items-start">

          {/* Left Side */}
          <div>

            <h2 className="text-3xl font-bold text-gray-900 mb-10">
              Get In Touch
            </h2>

            <div className="space-y-8">

              {/* Email */}
              <div className="flex items-start gap-5 bg-gray-100 hover:bg-red-50 transition-all duration-300 p-6 rounded-2xl">

                <div className="w-14 h-14 rounded-full bg-red-700 text-white flex items-center justify-center text-2xl">
                  <i className="ri-mail-fill"></i>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Email
                  </h3>

                  <a
                    href="mailto:sahuyashwant000@gmail.com"
                    className="text-gray-600 hover:text-red-700 transition-all duration-300"
                  >
                    sahuyashwant000@gmail.com
                  </a>
                </div>

              </div>

              {/* Location */}
              <div className="flex items-start gap-5 bg-gray-100 hover:bg-red-50 transition-all duration-300 p-6 rounded-2xl">

                <div className="w-14 h-14 rounded-full bg-red-700 text-white flex items-center justify-center text-2xl">
                  <i className="ri-map-pin-fill"></i>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    Location
                  </h3>

                  <p className="text-gray-600">
                    Bilaspur, Chhattisgarh, India
                  </p>
                </div>

              </div>

              {/* LinkedIn */}
              <div className="flex items-start gap-5 bg-gray-100 hover:bg-red-50 transition-all duration-300 p-6 rounded-2xl">

                <div className="w-14 h-14 rounded-full bg-red-700 text-white flex items-center justify-center text-2xl">
                  <i className="ri-linkedin-fill"></i>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    LinkedIn
                  </h3>

                  <a
                    href="https://www.linkedin.com/in/yashwant-sahu-0b008b345/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-red-700 transition-all duration-300"
                  >
                    Connect on LinkedIn
                  </a>
                </div>

              </div>

            </div>

          </div>

          {/* Right Side - Form */}
          <div className="bg-white border border-gray-200 shadow-2xl rounded-3xl p-8 lg:p-10">

            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Send Message
            </h2>

            <form className="space-y-6">

              {/* Name */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-red-700 transition-all duration-300"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-red-700 transition-all duration-300"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-xl px-5 py-4 outline-none focus:border-red-700 transition-all duration-300 resize-none"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full bg-red-700 hover:bg-red-800 text-white py-4 rounded-xl font-semibold shadow-lg hover:scale-[1.02] transition-all duration-300"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;