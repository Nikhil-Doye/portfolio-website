import { motion } from 'framer-motion'

const experiences = [
  {
    company: 'Fix-It 24/7 Group LLC',
    position: 'Data Analyst Intern',
    location: 'Remote',
    duration: 'July 2024 - December 2024',
    description: [
      'Developed predictive models using Python and Scikit-Learn, improving technician scheduling efficiency by 35%',
      'Built interactive Power BI dashboards to visualize KPIs, reducing decision-making time and annual expenses by 20%',
      'Performed trend analysis on customer usage patterns, supporting data-driven service delivery'
    ]
  },
  {
    company: 'Northeastern University',
    position: 'Graduate Teaching Assistant (MKTG3501 - Marketing Analytics)',
    location: 'Boston, MA',
    duration: 'September 2024 - December 2024',
    description: [
      'Conducted sessions on data storytelling and modeling, using Python and Plotly to teach RFM analysis and ROMI prediction',
      'Guided 40+ students on A/B testing and clustering techniques, improving their problem-solving and analytical skills'
    ]
  },
  {
    company: 'LTI-Mindtree',
    position: 'Senior Software Engineer',
    location: 'India',
    duration: 'December 2021 - June 2023',
    description: [
      'Designed and deployed an NLP-based classification model using BERT and PyTorch, improving IT incident resolution by automating categorization',
      'Designed scalable Microservices and APIs in Java, optimized data workflows, saving over 3 hours per client',
      'Collaborated on automating repetitive tasks using data engineering pipelines with MongoDB and custom microservices'
    ]
  },
  {
    company: 'LTI-Mindtree',
    position: 'Software Engineer',
    location: 'India',
    duration: 'July 2021 - December 2021',
    description: [
      'Developed APIs and Microservices using Java and ArrangoDB for customer management in an in-house orchestration tool'
    ]
  },
  {
    company: 'Tarah Technologies',
    position: 'Machine Learning Intern',
    location: 'India',
    duration: 'May 2020 - July 2020',
    description: [
      'Developed a CNN model with an F1-score of 0.96 for real-time image classification',
      'Implemented segmentation algorithms for biomedical imaging, achieving an F1-score of 0.89'
    ]
  }
]

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Professional Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company + exp.position}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-2xl font-bold">{exp.company}</h3>
                <span className="text-gray-500">{exp.duration}</span>
              </div>
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-xl font-semibold">{exp.position}</h4>
                <p className="text-gray-600">{exp.location}</p>
              </div>
              <ul className="list-disc list-inside space-y-2">
                {exp.description.map((desc, i) => (
                  <li key={i} className="text-gray-600">{desc}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
