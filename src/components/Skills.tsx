import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Java', level: 90 },
        { name: 'Python', level: 80 },
        { name: 'JavaScript/TypeScript', level: 80 },  
        { name: 'PHP', level: 75 },
      ]
    },
    {
      title: 'Frontend Technologies',
      skills: [
        { name: 'React', level: 95 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 95 },
        { name: 'TypeScript', level: 85 },
        { name: 'Framer Motion', level: 85 },
        { name: 'Material-UI', level: 80 }
      ]
    },
    {
      title: 'Backend Technologies',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 85 },
        { name: 'Nest.js', level: 90 },
        { name: 'Django', level: 50 },
        { name: 'Spring Boot', level: 50 },
        { name: 'Flask', level: 80 }
      ]
    },
    {
      title: 'Databases',
      skills: [
        { name: 'PostgreSQL', level: 80 },
        { name: 'MongoDB', level: 85 },
        { name: 'MySQL', level: 85 },
        { name: 'SQLite', level: 90 },
      ]
    },
    {
      title: 'DevOps & Tools',
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'Kubernetes', level: 75 },
        { name: 'AWS', level: 80 },
        { name: 'Git', level: 90 },
        { name: 'CI/CD', level: 80 }
      ]
    },
    {
      title: 'Other Technologies',
      skills: [
        { name: 'GraphQL', level: 60 },
        { name: 'REST APIs', level: 90 },
        { name: 'Microservices', level: 75 },
        { name: 'Testing', level: 85 },
        { name: 'Agile/Scrum', level: 90 }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-4 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and expertise across various technologies and frameworks.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + skillIndex * 0.05 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Additional Skills & Competencies
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Beyond technical skills, I also excel in various professional competencies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Problem Solving', description: 'Analytical thinking and creative solutions' },
              { title: 'Team Leadership', description: 'Leading development teams and mentoring' },
              { title: 'Communication', description: 'Clear technical and non-technical communication' },
              { title: 'Project Management', description: 'Agile methodologies and project coordination' }
            ].map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-6 h-6 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {skill.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 