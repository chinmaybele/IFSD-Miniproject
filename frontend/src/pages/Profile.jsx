import React from 'react'
import { useAuth } from '../context/AuthContext'

export default function Profile(){
  const { user } = useAuth()
  if (!user) return <div className="container-max mx-auto py-12">Please login</div>

  return (
    <div className="container-max mx-auto py-12">
      <div className="max-w-2xl mx-auto card">
        <h2 className="text-xl font-semibold">Your profile</h2>
        <div className="mt-4">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      </div>
    </div>
  )
}
