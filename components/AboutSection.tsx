import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section id="about" className="py-20">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed mb-4">
          Hi, I’m Nikhil Doye, a passionate Data Scientist, Machine Learning Engineer, and AI Enthusiast dedicated to turning raw data into meaningful insights that drive impactful decisions. With almost 3 years in the field, I specialize in building end-to-end machine learning pipelines, designing predictive models, and solving complex data challenges across industries.

What sets me apart is my ability to blend technical expertise with creative problem-solving. Whether creating AI-powered solutions for Large service-based MNCs, building elegant solutions in niche startups, analyzing large datasets to uncover actionable trends, or implementing scalable systems, I thrive on transforming ideas into reality.

Beyond my professional endeavors, I’m deeply committed to advancing the field of AI responsibly. I actively stay updated on the latest advancements in AI ethics, explainability, and generative AI, and I enjoy sharing my knowledge through [blogs, public speaking, or teaching].

When I’m not coding or experimenting with data, you’ll find me reading about psychology and neuroscience(A big admirer of Andrew Huberman) and exploring new cuisines.
        </p>
      </motion.section>
    </section>
  )
}
