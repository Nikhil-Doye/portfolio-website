import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed mb-4">
          I'm a passionate data scientist with expertise in machine learning, 
          data analysis, and AI solutions. I specialize in transforming complex 
          data into actionable insights and building intelligent systems that 
          drive business value.
        </p>
        <p className="text-lg leading-relaxed">
          With a strong foundation in mathematics and programming, I enjoy 
          solving challenging problems and creating data-driven solutions. 
          My experience spans across predictive modeling, natural language 
          processing, and big data technologies.
        </p>
      </motion.div>
    </section>
  )
}
