export default function ResumeButton() {
  return (
    <a
      href="/resume.pdf"
      download
      className="inline-block bg-primary text-white px-6 py-3 rounded hover:bg-secondary transition-colors"
    >
      Download Resume
    </a>
  )
}
