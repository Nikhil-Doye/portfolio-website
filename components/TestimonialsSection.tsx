import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Abhijit Pal',
    role: 'AI Engineer at Nextiva',
    text: "I  had the pleasure of working with Nikhil at LTI for over a year, and I can confidently say that he is a great coworker to have. Nikhil's positive attitude and collaborative approach make him not just a valuable colleague but also a team player who contributes to a positive work environment. His excellent communication skills and willingness to go the extra mile significantly contributed to the success of our tasks. He demonstrated great proficiency in various web development technologies.",
    image: '/images/testimonials/abhijit.jpg'
  },
  // Add more testimonials
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
