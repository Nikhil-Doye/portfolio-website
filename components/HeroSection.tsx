import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center">
      <div className="text-center w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-4"
        >
        Nikhil Doye
          <br />
        Data Scientist | Machine Learning Engineer | AI Enthusiast
        <p className="text-xl mb-8 mt-8">
          Transforming Data into Insights
        </p>
          </motion.div>
        <div className="flex justify-center space-x-4 mt-6">
          <a href="https://github.com/yourusername" className="hover:text-primary transition-colors">
            <FaGithub size={32} />
          </a>
          <a href="https://linkedin.com/in/yourusername" className="hover:text-primary transition-colors">
            <FaLinkedin size={32} />
          </a>
        </div>
      </div>
    </section>
  )
}
