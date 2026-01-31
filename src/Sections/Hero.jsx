// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profile from "../assets/images/prof.jpeg";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-slate-50 relative overflow-hidden px-6"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-14 relative z-10">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-3/4"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900">
            Nadeeshani Wijebandara
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-600 mt-3">
            Full-Stack Developer & Illustrator
          </h2>

          <p className="text-gray-600 mt-6 max-w-xl text-lg md:text-xl">
            I design and develop user-focused digital experiences by combining
            clean code, thoughtful UI, and creative thinking.
          </p>

          {/* BUTTONS */}
          <div className="flex gap-4 mt-8">
            <a
              href="#projects"
              className="bg-blue-900 text-white px-7 py-3 rounded-full 
                         shadow-md hover:bg-blue-800 transition"
            >
              View Projects
            </a>

            <a
              href="/cv.pdf"
              download
              className="border-2 border-blue-900 text-blue-900 px-7 py-3 
                         rounded-full hover:bg-blue-900 hover:text-white transition"
            >
              Download CV
            </a>
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex gap-9 mt-7 text-4xl">
            <a
              href="https://github.com/"
              target="_blank"
              className="text-gray-700 hover:text-black transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              className="text-blue-800 hover:text-blue-900 transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/4 flex justify-center relative"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96">

            {/* SHAPES ONLY BEHIND IMAGE */}
            <motion.div
              className="absolute -top-10 -left-10 w-32 h-32 bg-blue-300 
                         rounded-full opacity-50 blur-xl"
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 6 }}
            />
            <motion.div
              className="absolute top-1/2 -right-12 w-36 h-36 bg-rose-300 
                         rounded-full opacity-50 blur-xl"
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 7 }}
            />
            <motion.div
              className="absolute -bottom-12 left-1/3 w-28 h-28 bg-purple-300 
                         rounded-full opacity-40 blur-xl"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 8 }}
            />

            {/* SUBTLE OUTLINE */}
            <div className="absolute inset-0 rounded-full border-2 border-gray-300"></div>

            {/* PROFILE IMAGE */}
            <img
              src={profile}
              alt="profile"
              className="relative w-full h-full rounded-full object-cover shadow-xl"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;
