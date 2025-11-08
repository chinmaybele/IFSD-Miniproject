import React, { useState } from 'react'
import api from '../services/api'
import { useNavigate } from 'react-router-dom'

export default function CreateEvent(){
  const [form, setForm] = useState({ title:'', description:'', date:'', location:'', image:'' })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await api.post('/events', form)
      setLoading(false)
      navigate('/events')
    } catch (err) {
      setLoading(false)
      alert(err?.response?.data?.message || 'Error creating event')
    }
  }

  return (
    <div className="container-max mx-auto py-12">
      <div className="max-w-2xl mx-auto card">
        <h2 className="text-xl font-semibold mb-4">Create Event</h2>
        <form onSubmit={submit} className="space-y-4">
          <input className="input" placeholder="Title" value={form.title} onChange={e=>setForm({...form,title:e.target.value})} required />
          <textarea className="input" placeholder="Description" value={form.description} onChange={e=>setForm({...form,description:e.target.value})} rows={5} required />
          <input className="input" type="date" value={form.date} onChange={e=>setForm({...form,date:e.target.value})} required />
          <input className="input" placeholder="Location" value={form.location} onChange={e=>setForm({...form,location:e.target.value})} required />
          <input className="input" placeholder="Image URL (optional)" value={form.image} onChange={e=>setForm({...form,image:e.target.value})} />
          <button type="submit" className="btn-primary w-full">{loading ? 'Creating...' : 'Create Event'}</button>
        </form>
      </div>
    </div>
  )
}
