import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function EventCard({ event }){
  return (
    <motion.div whileHover={{ y:-6 }} className="card">
      <div className="flex flex-col h-full">
        <div className="h-44 bg-gray-100 rounded-lg overflow-hidden mb-4">
          {/* image placeholder */}
          <img src={event.image || '/src/assets/logo.png'} alt={event.title} className="w-full h-full object-cover" />
        </div>
        <h3 className="text-lg font-semibold">{event.title}</h3>
        <p className="text-sm text-gray-500">{new Date(event.date).toLocaleString()}</p>
        <p className="mt-2 text-gray-700 grow">{event.description?.slice(0,120) || 'No description'}</p>
        <div className="mt-4 flex items-center justify-between">
          <div className="text-sm text-gray-600">{event.location}</div>
          <Link to={`/events/${event._id}`} className="text-accent font-medium">Details</Link>
        </div>
      </div>
    </motion.div>
  )
}
