import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white mt-20">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">

        {/* Logo Section */}
        <div className="text-center lg:text-left">

          <div className="flex items-center justify-center lg:justify-start gap-3">
            <div className="w-10 h-10 rounded-full bg-red-700 text-white flex items-center justify-center text-lg font-bold">
              YS
            </div>

            <h1 className="text-xl font-bold tracking-wide">
              YASHWANT
              <span className="text-red-700"> SAHU</span>
            </h1>
          </div>

          

        </div>

        {/* Contact Info */}
        <div className="text-center lg:text-left">

          <h2 className="text-lg font-semibold mb-4">
            Contact
          </h2>

          <div className="space-y-2 text-gray-400 text-sm">

            <p>📧 sahuyashwant000@gmail.com</p>

            <p>📍 Bilaspur, Chhattisgarh, India</p>

            <p>💻 MERN Stack Developer</p>

          </div>

        </div>

        {/* Social Links */}
        <div className="text-center lg:text-left">

          <h2 className="text-lg font-semibold mb-4">
            Follow Me
          </h2>

          <div className="flex items-center justify-center lg:justify-start gap-4">

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/yashwant-sahu-0b008b345/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-red-700 hover:border-red-700 transition-all duration-300"
            >
              <i className="ri-linkedin-fill text-lg"></i>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Yashwantsahu9907"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-red-700 hover:border-red-700 transition-all duration-300"
            >
              <i className="ri-github-fill text-lg"></i>
            </a>

            {/* Email */}
            <a
              href="mailto:sahuyashwant000@gmail.com"
              className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:bg-red-700 hover:border-red-700 transition-all duration-300"
            >
              <i className="ri-mail-fill text-lg"></i>
            </a>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">

        <div className="max-w-7xl mx-auto px-6 lg:px-20 py-4 flex items-center justify-center">

          <p className="text-gray-500 text-xs text-center">
            © 2026 Yashwant Sahu. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;