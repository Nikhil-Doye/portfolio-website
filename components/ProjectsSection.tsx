import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { getGitHubRepos } from '../utils/github'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

interface Project {
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  topics: string[]
  language: string | null
}

export default function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const repos = await getGitHubRepos('nikhil-doye')
        setProjects(repos)
      } catch (error) {
        console.error('Error fetching projects:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  if (loading) {
    return <div className="text-center py-20">Loading projects...</div>
  }

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
          >
            <div className="p-6 flex-1">
              <h3 className="text-xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-600 mb-4">
                {project.description || 'No description available'}
              </p>
              {project.language && (
                <div className="text-sm text-gray-500 mb-4">
                  Language: {project.language}
                </div>
              )}
              {project.topics.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.topics.map((topic) => (
                    <span
                      key={topic}
                      className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className="border-t p-4 flex justify-between items-center">
              <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary flex items-center"
              >
                <FaGithub className="mr-2" />
                GitHub
              </a>
              {project.homepage && (
                <a
                  href={project.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-secondary flex items-center"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
