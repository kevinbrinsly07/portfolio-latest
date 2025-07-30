import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Software Engineering",
      institution: "Informatics Institute of Technology",
      location: "Colombo, Sri Lanka",
      period: "2021 - 2025",
      description:
        "Focused on programming, machine learning, and software design patterns.",
      relevantCourses: [
        "Programming Fundamentals",
        "Web Development",
        "Data Structures",
        "Object-Oriented Programming",
        "Database Systems",
        "Cyber Security",
        "Advanced Server-side Programming",
        "Machine Learning and Data Mining",
      ],
    },

    {
      degree: "Advanced Level and Ordinary Level ",
      institution: "St.Joseph Vaz College",
      location: "Wennappuwa, Sri Lanka",
      period: "2011 - 2019",
      description:
        "Focused on Computer System fundamentals",
      relevantCourses: [
        "Programming Fundamentals",
        "Web Development Fundamentals",
        "Computer Systems Fundamentals",
      ],
    },
  ];

  const certifications = [
    {
      name: "Express Essential Training",
      issuer: "LinkedIn Learning",
      date: "2023",
      credentialId: "AWS-123456",
      description:
        "Express Essentials: Build Powerful Web Apps with Node.js.",
    },
    {
      name: "React.js Essential Training",
      issuer: "LinkedIn Learning",
      date: "2023",
      credentialId: "GCP-789012",
      description:
        "React.js Essential.",
    },
    {
      name: "Introduction to Web APIs",
      issuer: "LinkedIn Learning",
      date: "2022",
      credentialId: "CKA-345678",
      description:
        "essentials of this core piece of modern web development.",
    },
    {
      name: "Flutter",
      issuer: "LinkedIn Learning",
      date: "2022",
      credentialId: "MDB-901234",
      description:
        "Introduction, Building Apps, Widgets",
    },
  ];

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-4 max-w-3xl mx-auto">
            My academic background and professional certifications that
            demonstrate my commitment to continuous learning.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 dark:bg-blue-500 rounded-full mb-4">
                <GraduationCap size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Education
              </h3>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {edu.degree}
                      </h4>
                      <div className="flex items-center space-x-4 text-gray-600 dark:text-gray-400 text-sm">
                        <div className="flex items-center space-x-1">
                          <MapPin size={14} />
                          <span>{edu.institution}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar size={14} />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                    </div>
                    {/* <div className="text-right">
                      <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                        {edu.gpa}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        GPA
                      </div>
                    </div> */}
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {edu.description}
                  </p>

                  <div>
                    <h5 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Relevant Courses:
                    </h5>
                    <div className="grid grid-cols-2 gap-2">
                      {edu.relevantCourses.map((course) => (
                        <div
                          key={course}
                          className="flex items-center space-x-2"
                        >
                          <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {course}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 dark:bg-green-500 rounded-full mb-4">
                <Award size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Certifications
              </h3>
            </div>

            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                        {cert.name}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium">
                        {cert.issuer}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">
                        {cert.date}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        Issued
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-3">
                    {cert.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      ID: {cert.credentialId}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium transition-colors duration-200"
                    >
                      Verify Certificate
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Learning */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6"
            >
              <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                Continuous Learning
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Regular participation in online courses and workshops
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Active member of developer communities and forums
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Attending tech conferences and meetups
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">
                    Contributing to open-source projects
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
