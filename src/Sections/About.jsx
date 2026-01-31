// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen scroll-mt-24 flex flex-col justify-center items-center bg-gray-50 px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
          About Me
        </h2>

        <p className="mt-6 text-gray-600 text-lg md:text-xl">
          I’m an undergraduate Software Engineering student passionate about building full-stack web applications 
          and creating user-focused solutions. With a background in English Literature and a love for illustration, 
          I combine creativity with technical skills to deliver clean, responsive, and visually appealing designs.
        </p>
      </motion.div>

      {/* Education Cards */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-12 grid md:grid-cols-3 gap-6 max-w-6xl"
      >
        {/* Card 1 */}
        <div className="bg-gray-200 rounded-2xl shadow-lg p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800">National Diploma in Technology (IT)</h3>
          <p className="text-gray-600 mt-2">University of Moratuwa (2024 – Present)</p>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-200 rounded-2xl shadow-lg p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800">Diploma in English Literature</h3>
          <p className="text-gray-600 mt-2">BCI Campus, Negombo (2023 – 2024)</p>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-200 rounded-2xl shadow-lg p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800">G.C.E. Advanced Level – Physical Science</h3>
          <p className="text-gray-600 mt-2">Bandaranayake Central College, Veyangoda (2021)</p>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
