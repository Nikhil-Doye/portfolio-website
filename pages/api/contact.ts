import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, email, message } = req.body

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' })
  }

  try {
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`
      },
      body: JSON.stringify({
        personalizations: [{
          to: [{ email: process.env.YOUR_EMAIL }],
          subject: `New message from ${name}`
        }],
        from: { email: 'noreply@yourdomain.com', name: 'Portfolio Contact' },
        content: [{
          type: 'text/plain',
          value: `You have a new message from ${name} (${email}):\n\n${message}`
        }]
      })
    })

    if (response.ok) {
      return res.status(200).json({ message: 'Message sent successfully' })
    } else {
      const error = await response.json()
      console.error('SendGrid error:', error)
      return res.status(500).json({ message: 'Failed to send message' })
    }
  } catch (error) {
    console.error('Error sending email:', error)
    return res.status(500).json({ message: 'Failed to send message' })
  }
}
