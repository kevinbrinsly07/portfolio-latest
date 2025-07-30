import { motion } from 'framer-motion'
import { Calendar, MapPin, Building } from 'lucide-react'

const Experience = () => {
  const experiences = [
    {
      title: 'Frontend Developer',
      company: 'Jaan Network',
      location: 'Colombo, Sri Lanka',
      period: '2025 - Present',
      description: 'Developing and maintaining frontend applications with focus on user experience and performance.',
      achievements: [
        'Developed and maintained React components for a customer-facing dashboard with 10K+ active users',
        'Improved page load performance by 35% through implementing lazy loading and optimizing images',
        'Built responsive UI components using modern CSS Grid and Flexbox layouts',
        'Collaborated with backend team to integrate REST APIs and implement proper error handling',
        'Created reusable React components and custom hooks to improve code reusability',
        'Participated in code reviews and contributed to team coding standards and documentation'
      ],
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Vite']
    },
    {
      title: 'Full Stack Developer',
      company: 'Cloud99x',
      location: 'Colombo, Sri Lanka',
      period: '2023 - 2024',
      description: 'Developed full-stack web applications with focus on both frontend and backend technologies.',
      achievements: [
        'Developed full-stack web applications using React frontend and Node.js/Express backend',
        'Built RESTful APIs and integrated them with frontend applications for seamless data flow',
        'Implemented user authentication and authorization using JWT tokens and bcrypt',
        'Designed and optimized database schemas using MongoDB and implemented CRUD operations',
        'Deployed applications to cloud platforms and configured CI/CD pipelines for automated testing',
        'Collaborated with cross-functional teams to deliver features from concept to production'
      ],
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'REST APIs', 'JWT', 'Git', 'Docker']
    },
  ]

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Work Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-4 max-w-3xl mx-auto">
            My professional journey in software development, showcasing growth and achievements across different roles.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((experience, index) => (
            <motion.div
              key={`${experience.company}-${experience.title}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gray-300 dark:bg-gray-600"></div>
              )}

              <div className="flex items-start space-x-6">
                {/* Timeline dot */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {experience.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Building size={16} />
                          <span className="font-semibold">{experience.company}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span>{experience.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>{experience.period}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {experience.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {experience.achievements.map((achievement, achievementIndex) => (
                        <motion.li
                          key={achievementIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.2 + achievementIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-start space-x-2"
                        >
                          <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.2 + techIndex * 0.05 }}
                          viewport={{ once: true }}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors duration-200"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Career Highlights</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">2+</div>
              <div className="text-gray-700 dark:text-gray-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">10+</div>
              <div className="text-gray-700 dark:text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">10+</div>
              <div className="text-gray-700 dark:text-gray-300">Technologies Mastered</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience 