import Head from 'next/head'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import SkillsSection from '../components/SkillsSection'
import EducationSection from '../components/EducationSection'
import ExperienceSection from '../components/ExperienceSection'
import ProjectsSection from '../components/ProjectsSection'
import TestimonialsSection from '../components/TestimonialsSection'
import ContactSection from '../components/ContactSection'
import ResumeButton from '../components/ResumeButton'

export default function Home() {
  return (
    <>
      <Head>
        <title>Nikhil Doye - Data Science Portfolio</title>
        <meta name="description" content="Professional data science portfolio showcasing my work and skills" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="space-y-20">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </>
  )
}
