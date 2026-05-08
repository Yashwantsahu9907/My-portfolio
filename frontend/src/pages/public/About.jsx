import React from "react";

const About = () => {
  return (
    <section className="w-full min-h-screen bg-white pt-32 pb-20 px-6 lg:px-20">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>

          <p className="text-red-700 text-2xl font-semibold tracking-[4px] uppercase mb-4">
            About Me
          </p>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900">
            Passionate Full Stack
            <span className="text-red-700"> Developer</span>
          </h1>

          <p className="text-gray-600 text-lg leading-8 mt-8">
            I’m a passionate MERN Stack Developer focused on building
            scalable, responsive, and user-friendly web applications. 
            I enjoy transforming real-world ideas into modern digital
            products with clean UI, efficient backend architecture,
            and smooth user experiences.
          </p>

          <p className="text-gray-600 text-lg leading-8 mt-6">
            My expertise includes React.js, Node.js, Express.js,
            MongoDB, REST APIs, JWT Authentication, and real-time
            features using Socket.io. I also work on workflow
            automation using n8n to improve productivity and reduce
            repetitive tasks.
          </p>

          <p className="text-gray-600 text-lg leading-8 mt-6">
            Currently pursuing B.Tech in Information Technology at
            Government Engineering College, Bilaspur, I’m actively
            seeking opportunities where I can contribute, grow as a
            developer, and build impactful products using modern
            technologies.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-12">

            <div className="bg-gray-100 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300">
              <h2 className="text-3xl font-bold text-red-700">
                5+
              </h2>
              <p className="text-gray-600 mt-2">
                Projects
              </p>
            </div>

            <div className="bg-gray-100 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300">
              <h2 className="text-3xl font-bold text-red-700">
                MERN
              </h2>
              <p className="text-gray-600 mt-2">
                Stack
              </p>
            </div>

            <div className="bg-gray-100 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300">
              <h2 className="text-3xl font-bold text-red-700">
                2028
              </h2>
              <p className="text-gray-600 mt-2">
                Graduate
              </p>
            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="relative flex justify-center">

          {/* Background Effect */}
          <div className="absolute w-[350px] h-[350px] bg-red-200 rounded-full blur-3xl opacity-40"></div>

          {/* Card */}
          <div className="relative bg-white border border-gray-200 shadow-2xl rounded-3xl p-10 max-w-lg w-full hover:-translate-y-2 transition-all duration-500">

            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              My Skills
            </h2>

            <div className="space-y-6">

              {/* Skill */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold text-gray-700">
                    Frontend Development
                  </p>
                  <p className="text-red-700 font-semibold">
                    90%
                  </p>
                </div>

                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div className="w-[90%] h-full bg-red-700 rounded-full"></div>
                </div>
              </div>

              {/* Skill */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold text-gray-700">
                    Backend Development
                  </p>
                  <p className="text-red-700 font-semibold">
                    80%
                  </p>
                </div>

                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div className="w-[80%] h-full bg-red-700 rounded-full"></div>
                </div>
              </div>

              {/* Skill */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold text-gray-700">
                    Database & APIs
                  </p>
                  <p className="text-red-700 font-semibold">
                    80%
                  </p>
                </div>

                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div className="w-[80%] h-full bg-red-700 rounded-full"></div>
                </div>
              </div>

              {/* Skill */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold text-gray-700">
                    Problem Solving
                  </p>
                  <p className="text-red-700 font-semibold">
                    88%
                  </p>
                </div>

                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div className="w-[88%] h-full bg-red-700 rounded-full"></div>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;