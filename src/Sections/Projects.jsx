// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Project Images (fallback images)
import pethome from "../assets/projects/pethome.png";
import parking from "../assets/projects/park.png";
import ecocoin from "../assets/projects/ecocoin.png";
import travel from "../assets/projects/travel.jpg";

const fallbackProjects = [
  {
    title: "PetHome.lk – Full-Stack Pet Adoption Platform",
    image: pethome,
    description:
      "A full-stack pet adoption system with role-based authentication, secure admin access, and REST APIs for managing pets and adoption requests.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Online Parking System – Landowner Module",
    image: parking,
    description:
      "Landowner dashboard to manage parking slots and booking records with real-time backend integration.",
    technologies: ["React.js", "Node.js", "MySQL", "Tailwind CSS","Firebase","Figma"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Eco Coin – Mobile Reward Application",
    image: ecocoin,
    description:
      "A mobile application promoting eco-friendly activities through a reward-based system with secure authentication.",
    technologies: ["Flutter", "Firebase Authentication", "Figma"],
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    title: "Travel Sri Lanka – Tourism Website Frontend",
    image: travel,
    description:
      "An interactive tourism website showcasing Sri Lankan destinations with clean UI, responsive design, and smooth navigation.",
    technologies: ["React.js", "CSS3"],
    githubUrl: "#",
    liveUrl: "#",
  },
];

// Image mapping for local images
const imageMap = {
  pethome,
  parking,
  ecocoin,
  travel,
};

function Projects() {
  const [projects, setProjects] = useState(fallbackProjects);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/projects");
        if (response.ok) {
          const data = await response.json();
          if (data.success && data.data.length > 0) {
            // Map images from local imports if image field matches a key
            const projectsWithImages = data.data.map((project) => ({
              ...project,
              image: imageMap[project.image] || project.image,
            }));
            setProjects(projectsWithImages);
          }
        }
      } catch (error) {
        console.log("Using fallback projects:", error);
        // Use fallback data if backend is not available
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);
  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-20 bg-linear-to-r from-pink-50 via-white to-blue-50 relative overflow-hidden"
    >
      {/* Background Shapes */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-pink-200 rounded-full opacity-20 blur-3xl" />
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-blue-200 rounded-full opacity-20 blur-3xl" />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-14 relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-blue-900">Projects</h2>
        <p className="mt-4 text-gray-800 text-lg max-w-2xl mx-auto">
          A selection of projects demonstrating my experience in full-stack web,
          mobile, and frontend development.
        </p>
      </motion.div>

      {/* Loading State */}
      {loading && (
        <div className="text-center text-gray-600 py-20">
          <p className="text-xl">Loading projects...</p>
        </div>
      )}

      {/* Project Grid */}
      {!loading && (
      <div className="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto relative z-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group bg-gray-200 rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden w-full"
          >
            {/* Image */}
            <div className="bg-gray-100 p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-blue-900">{project.title}</h3>

                <p className="text-gray-900 mt-3">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {(project.technologies || project.tech || []).map((tech, i) => (
                    <span
                      key={i}
                      className="text-sm bg-gray-50 text-gray-900 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* GitHub & Live Demo Buttons */}
              <div className="flex gap-4 mt-6 flex-wrap">
                {(project.githubUrl || project.github) && (
                  <a
                    href={project.githubUrl || project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 bg-blue-900 text-white rounded-lg font-medium hover:bg-blue-800 transition w-full sm:w-auto text-center"
                  >
                    GitHub
                  </a>
                )}
                {(project.liveUrl || project.linkedin) && (
                  <a
                    href={project.liveUrl || project.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 bg-blue-900 text-white rounded-lg font-medium hover:bg-blue-800 transition w-full sm:w-auto text-center"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      )}
    </section>
  );
}

export default Projects;
