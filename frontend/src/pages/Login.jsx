import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'

export default function Login(){
  const { login } = useAuth()
  const [form, setForm] = useState({ email:'', password:'' })
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      await login(form)
    } catch (err) {
      setError(err?.response?.data?.message || 'Login failed')
      setLoading(false)
    }
  }

  return (
    <div className="container-max mx-auto py-12">
      <div className="max-w-md mx-auto card">
        <h2 className="text-2xl font-bold mb-2">Welcome back</h2>
        <p className="text-gray-600 mb-6">Log in to manage and join events.</p>
        {error && <div className="text-red-600 mb-3">{error}</div>}
        <form onSubmit={submit} className="space-y-4">
          <input className="input" placeholder="Email" type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} required />
          <input className="input" placeholder="Password" type="password" value={form.password} onChange={e=>setForm({...form,password:e.target.value})} required />
          <button type="submit" className="btn-primary w-full">{loading ? 'Signing in...' : 'Login'}</button>
        </form>
      </div>
    </div>
  )
}
