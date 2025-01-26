import { motion } from 'framer-motion'

const skills = [
  { name: 'Python', level: 95 },
  { name: 'Machine Learning', level: 90 },
  { name: 'Data Analysis', level: 92 },
  { name: 'SQL', level: 88 },
  { name: 'Data Visualization', level: 90 },
  { name: 'Deep Learning', level: 85 },
  { name: 'Big Data', level: 80 },
  { name: 'Statistics', level: 93 },
]

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Data Science Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="space-y-2"
            >
              <div className="flex justify-between">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className="h-full bg-primary rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
