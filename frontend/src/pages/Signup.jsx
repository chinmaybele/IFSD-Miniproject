import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'

export default function Signup(){
  const { register } = useAuth()
  const [form, setForm] = useState({ name:'', email:'', password:'' })
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      await register(form)
    } catch (err) {
      setError(err?.response?.data?.message || 'Registration failed')
      setLoading(false)
    }
  }

  return (
    <div className="container-max mx-auto py-12">
      <div className="max-w-lg mx-auto card">
        <h2 className="text-2xl font-bold mb-2">Create your account</h2>
        <p className="text-gray-600 mb-6">Join your community — create events and invite others.</p>
        {error && <div className="text-red-600 mb-3">{error}</div>}
        <form onSubmit={submit} className="space-y-4">
          <input className="input" placeholder="Full name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required />
          <input className="input" placeholder="Email" type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required />
          <input className="input" placeholder="Password" type="password" value={form.password} onChange={e=>setForm({...form,password:e.target.value})} minLength={6} required />
          <button type="submit" className="btn-primary w-full">{loading ? 'Creating...' : 'Sign up'}</button>
        </form>
      </div>
    </div>
  )
}
