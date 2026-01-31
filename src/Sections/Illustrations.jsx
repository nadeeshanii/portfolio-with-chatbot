// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

// Import your 8 illustration images
import illu1 from "../assets/illustrations/1.jpeg";
import illu2 from "../assets/illustrations/2.jpeg";
import illu3 from "../assets/illustrations/3.jpeg";
import illu4 from "../assets/illustrations/4.jpeg";
import illu5 from "../assets/illustrations/5.jpeg";
import illu6 from "../assets/illustrations/6.jpeg";
import illu7 from "../assets/illustrations/7.jpg";
import illu8 from "../assets/illustrations/8.jpeg";

// Captions for each illustration
const illustrations = [
  { image: illu1, caption: "Vocalist Digital Portrait" },
  { image: illu2, caption: "Unstoppable Girl- Narrative Vector Illustration" },
  { image: illu3, caption: "Minimalist Boy Illustration" },
  { image: illu4, caption: "Minimalist Girl Illustration" },
  { image: illu5, caption: "Traditional Cultural Portrait" },
  { image: illu6, caption: "Marvel Fan Art" },
  { image: illu7, caption: "Minimalist Line Art" },
  { image: illu8, caption: "Character Aesthetic Illustration" },
];

function Illustrations() {
  return (
    <section
      id="illustrations"
      className="min-h-screen px-6 py-20 bg-linear-to-r from-pink-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-14 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
          Illustrations
        </h2>
        <p className="mt-4 text-gray-800 text-lg max-w-2xl mx-auto">
          A selection of my hand-drawn and digital illustrations, showcasing creativity and design.
        </p>
      </motion.div>

      {/* Illustration Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto relative z-10">
        {illustrations.map((illu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group flex flex-col items-center rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
          >
            {/* Image */}
            <div className="w-full overflow-hidden">
              <img
                src={illu.image}
                alt={illu.caption}
                className="w-full h-64 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Caption Container */}
            <div className="w-full bg-white bg-opacity-80 text-center py-2">
              <p className="text-gray-900 font-medium text-sm md:text-base">
                {illu.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Illustrations;
