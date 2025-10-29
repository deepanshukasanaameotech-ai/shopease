import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="text-center pt-20">
      <h1 className="text-3xl font-bold">404</h1>
      <p className="mt-2">Page not found.</p>
      <Link to="/" className="text-blue-600">Go Home</Link>
    </div>
  )
}
