import React, { createContext, useContext, useEffect, useState } from 'react'
import api from '../services/api'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('ce_user')) || null
    } catch { return null }
  })
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    localStorage.setItem('ce_user', JSON.stringify(user))
  }, [user])

  const register = async (payload) => {
    setLoading(true)
    try {
      const { data } = await api.post('/users/register', payload)
      setUser(data)
      setLoading(false)
      navigate('/home')
    } catch (err) {
      setLoading(false)
      throw err
    }
  }

  const login = async (payload) => {
    setLoading(true)
    try {
      const { data } = await api.post('/users/login', payload)
      setUser(data)
      setLoading(false)
      navigate('/home')
    } catch (err) {
      setLoading(false)
      throw err
    }
  }

  const logout = async () => {
    try {
      await api.post('/users/logout')
    } catch (err) { /* ignore */ }
    setUser(null)
    navigate('/login')
  }

  return (
    <AuthContext.Provider value={{ user, loading, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
