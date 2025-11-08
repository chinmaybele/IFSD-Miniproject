import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import api from '../services/api'
import { useAuth } from '../context/AuthContext'

export default function EventDetails(){
  const { id } = useParams()
  const [ev, setEv] = useState(null)
  const { user } = useAuth()

  useEffect(() => {
    (async ()=> {
      try {
        const { data } = await api.get(`/events/${id}`)
        setEv(data)
      } catch (err) { console.error(err) }
    })()
  },[id])

  if (!ev) return <div className="container-max mx-auto py-12">Loading...</div>

  return (
    <div className="container-max mx-auto py-12">
      <div className="card">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-2/3">
            <img src={ev.image || '/src/assets/logo.png'} alt={ev.title} className="w-full rounded-lg mb-4 object-cover h-72" />
            <h1 className="text-2xl font-bold">{ev.title}</h1>
            <p className="text-gray-600">{new Date(ev.date).toLocaleString()} • {ev.location}</p>
            <div className="mt-4 text-gray-800">{ev.description}</div>
          </div>
          <aside className="md:w-1/3">
            <div className="bg-gray-50 border p-4 rounded-lg">
              <p className="text-sm text-gray-600">Organizer</p>
              <p className="font-medium">{ev.createdBy?.name || 'Unknown'}</p>
              <div className="mt-4">
                {user ? <button className="btn-primary w-full" onClick={()=>alert('Join API not implemented')}>Join Event</button>
                      : <a href="/login" className="btn-primary w-full inline-block text-center">Login to join</a>}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
