import React, { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  if (sent) return <p className="bg-white p-6 rounded shadow">Thanks for contacting us!</p>

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className='pt-20'>
      <h1 className="text-2xl font-semibold mb-3">Contact Us</h1>
      <form onSubmit={handleSubmit} className="space-y-3 bg-white p-6 rounded shadow">
        <label>Name<input required className="mt-1 w-full px-3 py-2 border rounded" /></label>
        <label>Email<input required type="email" className="mt-1 w-full px-3 py-2 border rounded" /></label>
        <label>Message<textarea required className="mt-1 w-full px-3 py-2 border rounded" /></label>
        <button className="btn btn-primary" type="submit">Send</button>
      </form>
    </div>
  )
}
