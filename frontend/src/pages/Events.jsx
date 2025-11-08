import React, { useEffect, useState } from 'react'
import api from '../services/api'
import EventCard from '../components/EventCard'

export default function Events(){
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async ()=> {
      try {
        const { data } = await api.get('/events')
        setEvents(data)
      } catch (err) { console.error(err) }
      setLoading(false)
    })()
  },[])

  return (
    <div className="container-max mx-auto py-12">
      <h2 className="text-2xl font-semibold mb-6">All Events</h2>
      {loading ? <div>Loading...</div> : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map(ev => <EventCard key={ev._id} event={ev} />)}
        </div>
      )}
    </div>
  )
}
