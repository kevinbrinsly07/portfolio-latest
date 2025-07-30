import { motion } from 'framer-motion'
import { ExternalLink, Github, Globe } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, product management, shopping cart, payment integration, and admin dashboard.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redux', 'Express'],
      liveUrl: 'https://ecommerce-demo.com',
      githubUrl: 'https://github.com/username/ecommerce-platform',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with Vue.js and Socket.io.',
      image: '/api/placeholder/400/250',
      technologies: ['Vue.js', 'Socket.io', 'MongoDB', 'Express', 'JWT', 'WebSockets'],
      liveUrl: 'https://task-manager-demo.com',
      githubUrl: 'https://github.com/username/task-manager',
      featured: true
    },
    // {
    //   title: 'Weather Dashboard',
    //   description: 'A responsive weather dashboard that displays current weather conditions and forecasts. Integrates with multiple weather APIs and includes interactive charts.',
    //   image: '/api/placeholder/400/250',
    //   technologies: ['React', 'Chart.js', 'Weather API', 'CSS3', 'Axios', 'Responsive Design'],
    //   liveUrl: 'https://weather-dashboard-demo.com',
    //   githubUrl: 'https://github.com/username/weather-dashboard',
    //   featured: false
    // },
    {
      title: 'Blog Platform',
      description: 'A modern blog platform with markdown support, user authentication, and content management system. Built with Next.js and MongoDB.',
      image: '/api/placeholder/400/250',
      technologies: ['Next.js', 'MongoDB', 'Markdown', 'JWT', 'Tailwind CSS', 'Vercel'],
      liveUrl: 'https://blog-platform-demo.com',
      githubUrl: 'https://github.com/username/blog-platform',
      featured: false
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with React and Framer Motion. Features smooth animations, dark mode, and modern design principles.',
      image: '/api/placeholder/400/250',
      technologies: ['React', 'Framer Motion', 'Tailwind CSS', 'TypeScript', 'Responsive Design'],
      liveUrl: 'https://portfolio-demo.com',
      githubUrl: 'https://github.com/username/portfolio',
      featured: false
    },
    {
      title: 'API Gateway',
      description: 'A microservices API gateway built with Node.js and Express. Includes rate limiting, authentication, logging, and load balancing features.',
      image: '/api/placeholder/400/250',
      technologies: ['Node.js', 'Express', 'Redis', 'JWT', 'Rate Limiting', 'Docker'],
      liveUrl: 'https://api-gateway-demo.com',
      githubUrl: 'https://github.com/username/api-gateway',
      featured: false
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-4 max-w-3xl mx-auto">
            A showcase of my recent projects, demonstrating my skills in full-stack development and modern technologies.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                <div className="text-white text-4xl font-bold">{project.title.split(' ')[0]}</div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-blue-600 dark:bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200"
                  >
                    <Globe size={16} />
                    <span>Live Demo</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Other Projects</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="h-32 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <div className="text-white text-2xl font-bold">{project.title.split(' ')[0]}</div>
              </div>
              
              <div className="p-4">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{project.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-3">{project.description}</p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 bg-blue-600 dark:bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200"
                  >
                    <ExternalLink size={14} />
                    <span>Demo</span>
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-3 py-1 rounded text-sm hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
                  >
                    <Github size={14} />
                    <span>Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-500 dark:to-indigo-500 rounded-lg p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Interested in Working Together?</h3>
            <p className="text-blue-100 dark:text-blue-200 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and exciting projects. 
              Let's create something amazing together!
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contact')
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="bg-white dark:bg-gray-100 text-blue-600 dark:text-blue-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors duration-200"
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects 