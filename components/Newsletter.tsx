
'use client'
import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Replace with Brevo or Mailchimp API call or embed form
    setSent(true)
  }

  if (sent) return <div className="p-4 bg-emerald-50 border rounded-2xl text-sm">Thanks — check your inbox!</div>

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 w-full md:w-auto">
      <input value={email} onChange={(e)=>setEmail(e.target.value)} required placeholder="you@domain.com" className="input w-64" />
      <button className="btn btn-primary">Join</button>
    </form>
  )
}
