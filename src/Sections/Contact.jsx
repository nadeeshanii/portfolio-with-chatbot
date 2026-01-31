// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-[80vh] px-6 py-16 bg-linear-to-r from-blue-50 via-white to-pink-50 relative overflow-hidden"
    >
      {/* Background Shapes */}
      <motion.div
        className="absolute -top-24 -left-24 w-72 h-72 bg-pink-200 rounded-full opacity-20 blur-3xl"
        animate={{ x: [0, 15, 0], y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-24 -right-24 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl"
        animate={{ x: [0, -15, 0], y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-10 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
          Contact Me
        </h2>
        <p className="mt-3 text-gray-800 text-lg max-w-2xl mx-auto">
          Feel free to reach out for collaborations, internship opportunities, or just to say hi!
        </p>
      </motion.div>

      {/* Contact Container */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 relative z-10">

        {/* Left: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col justify-center space-y-4"
        >
          <h3 className="text-2xl font-semibold text-gray-900">Get in Touch</h3>
          <p className="text-gray-700">
            You can reach me via email, phone, or LinkedIn. Open to exciting projects and opportunities!
          </p>

          <div className="space-y-2 text-gray-900">
            <p><span className="font-semibold">Email:</span> shaniwijebandaraw@gmail.com</p>
            <p><span className="font-semibold">Phone:</span> 071 9141319</p>
            <p>
              <span className="font-semibold">LinkedIn:</span>{" "}
              <a href="https://linkedin.com/" target="_blank" className="text-blue-700 hover:underline">
                linkedin.com/in/yourprofile
              </a>
            </p>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <form className="bg-white shadow-lg rounded-2xl p-5 flex flex-col space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
              required
            />
            <textarea
              placeholder="Your Message"
              className="border border-gray-300 rounded-lg px-3 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
              required
            />
            <button
              type="submit"
              className="bg-blue-800 text-white font-semibold px-5 py-2 rounded-full hover:bg-blue-900 transition"
            >
              Send Message
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}

export default Contact;
