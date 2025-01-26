import { motion } from 'framer-motion'

export default function ContactSection() {
  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <p className="mb-6 text-lg">
          Feel free to reach out to me via email. I'll get back to you as soon as possible!
        </p>
        <a
          href="mailto:doye.n@northeastern.edu?subject=Portfolio%20Contact"
          className="inline-block bg-primary text-white px-6 py-3 rounded hover:bg-secondary transition-colors"
        >
          Send Email
        </a>
      </motion.div>
    </section>
  )
}
