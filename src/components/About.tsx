import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Calendar } from 'lucide-react'

const About = () => {
  const personalInfo = [
    { icon: <Mail size={20} />, label: 'Email', value: 'brinslykevin@gmail.com' },
    { icon: <Phone size={20} />, label: 'Phone', value: '+94 74 121 7919' },
    { icon: <MapPin size={20} />, label: 'Location', value: 'Colombo, Sri Lanka' },
    { icon: <Calendar size={20} />, label: 'Experience', value: '2+ Years' }
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Personal Information</h3>
            <div className="space-y-4">
              {personalInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <div className="text-blue-600 dark:text-blue-400">{info.icon}</div>
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">{info.label}</p>
                    <p className="text-gray-900 dark:text-white font-semibold">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Professional Summary</h3>
            
            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                I am a passionate and experienced Software Engineer with over 2 years of experience in developing 
                innovative software solutions. My expertise spans across full-stack development, with a particular 
                focus on modern web technologies and scalable applications.
              </p>
              
              <p>
                Throughout my career, I have successfully delivered numerous projects ranging from small business 
                applications to large-scale enterprise solutions. I am committed to writing clean, maintainable 
                code and following industry best practices to ensure the highest quality deliverables.
              </p>
              
              <p>
                I thrive in collaborative environments and enjoy working with cross-functional teams to solve 
                complex problems. My strong analytical skills and attention to detail enable me to identify 
                potential issues early and implement effective solutions.
              </p>
            </div>

            {/* Key Strengths */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Key Strengths</h4>
              <div className="grid grid-cols-2 gap-3">
                {[
                  'Problem Solving',
                  'Team Collaboration',
                  'Code Quality',
                  'Performance Optimization',
                  'Agile Development',
                  'Technical Leadership',
                  'Continuous Learning',
                  'User Experience'
                ].map((strength, index) => (
                  <motion.div
                    key={strength}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2"
                  >
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{strength}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 