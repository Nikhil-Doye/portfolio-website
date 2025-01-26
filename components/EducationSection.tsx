import { motion } from 'framer-motion'

const education = [
  {
    institution: 'Northeastern University',
    degree: 'Master of Professional Studies in Applied Machine Intelligence',
    details: 'GPA: 3.9/4.0',
    location: 'Boston, MA',
    duration: 'September 2023 - March 2025'
  },
  {
    institution: 'Indian Institute of Technology Tirupati',
    degree: 'Bachelor of Technology in Electrical Engineering',
    details: '',
    location: 'India',
    duration: 'August 2017 - June 2021'
  }
]

export default function EducationSection() {
  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-2xl font-bold">{edu.institution}</h3>
                <span className="text-gray-500">{edu.duration}</span>
              </div>
              <h4 className="text-xl font-semibold mb-2">{edu.degree}</h4>
              <div className="flex justify-between items-center">
                <p className="text-gray-600">{edu.location}</p>
                {edu.details && (
                  <p className="text-gray-600 font-medium">{edu.details}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
