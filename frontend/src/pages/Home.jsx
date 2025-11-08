import React, { useEffect, useState } from 'react'
import api from '../services/api'
import EventCard from '../components/EventCard'
import { Link } from 'react-router-dom'

export default function Home(){
  const [events, setEvents] = useState([])

  useEffect(() => {
    (async ()=> {
      try {
        const { data } = await api.get('/events')
        setEvents(data.slice(0,6))
      } catch (err) {
        console.error(err)
      }
    })()
  },[])

  return (
    <>
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="container-max mx-auto text-center">
          <h1 className="text-4xl font-bold mb-3">Plan & discover community events</h1>
          <p className="mb-6 text-lg">Find local meetups, workshops and community gatherings near you.</p>
          <div className="flex justify-center gap-4">
            <Link to="/events" className="btn-primary">Browse events</Link>
            <Link to="/create" className="btn-primary bg-white text-black">Create event</Link>
          </div>
        </div>
      </section>

      <div className="container-max mx-auto py-12">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold">Upcoming events</h2>
          <Link to="/events" className="text-accent">View all</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map(ev => <EventCard key={ev._id} event={ev} />)}
        </div>
      </div>
    </>
  )
}
