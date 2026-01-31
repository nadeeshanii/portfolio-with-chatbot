// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaJava, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiMongodb, SiFirebase, SiFlutter, SiExpress, SiFigma, SiPostman } from "react-icons/si";

function Skills() {

  const categories = [
    {
      title: "Languages",
      skills: [
        { name: "Java", icon: <FaJava className="text-red-500" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
        { name: "Python", icon: <FaPython className="text-blue-500" /> },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
        { name: "React.js", icon: <FaReact className="text-blue-400" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
        { name: "Express.js", icon: <SiExpress className="text-gray-600" /> },
        { name: "REST APIs", icon: <SiPostman className="text-orange-400" /> },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-700" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-400" /> },
      ],
    },
    {
      title: "Mobile",
      skills: [
        { name: "Flutter", icon: <SiFlutter className="text-blue-400" /> },
      ],
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", icon: <FaGitAlt className="text-red-500" /> },
        { name: "GitHub", icon: <FaGitAlt className="text-gray-800" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
        { name: "Figma", icon: <SiFigma className="text-purple-500" /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col justify-center items-center bg-white px-6 relative overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-6"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
          My Skills
        </h2>
        <p className="mt-3 text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
          I work with a wide range of technologies to create responsive, efficient, and user-friendly web and mobile applications.
        </p>
      </motion.div>

      {/* Skill Categories Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-7xl w-full"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {categories.map((category, index) => (
          <div key={index} className="bg-gray-200 rounded-2xl shadow-lg p-4 flex flex-col items-center w-full">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">{category.title}</h3>

            <div className="flex flex-wrap justify-center gap-4">
              {category.skills.map((skill, idx) => (
                skill.icon ? (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex flex-col items-center cursor-pointer"
                  >
                    <div className="text-4xl md:text-5xl">{skill.icon}</div>
                    <span className="mt-1 text-gray-700 text-base">{skill.name}</span>
                  </motion.div>
                ) : (
                  <span key={idx} className="text-gray-700 text-base">{skill.name}</span>
                )
              ))}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Floating background shapes */}
      <div className="absolute -top-10 -left-10 w-36 h-36 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-rose-100 rounded-full opacity-20 animate-pulse"></div>
    </section>
  );
}

export default Skills;
