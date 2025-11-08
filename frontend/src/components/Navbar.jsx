import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Navbar(){
  const { user, logout } = useAuth()
  return (
    <header className="bg-white shadow">
      <div className="container-max flex items-center justify-between h-16 mx-auto">
        <Link to="/home" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold">CE</div>
          <div className="text-xl font-bold" style={{color:'var(--brand)'}}>CommunityEvents</div>
        </Link>

        <nav className="flex items-center gap-6">
          <Link to="/events" className="text-sm hover:text-accent">Events</Link>
          <Link to="/create" className="text-sm hover:text-accent">Create</Link>

          {user ? (
            <>
              <Link to="/profile" className="text-sm px-3 py-1 rounded hover:bg-gray-100">{user.name}</Link>
              <button onClick={logout} className="text-sm px-3 py-1 bg-gray-100 rounded">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-sm">Login</Link>
              <Link to="/signup" className="btn-primary text-sm">Sign up</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  )
}
