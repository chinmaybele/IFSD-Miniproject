import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-white border-t mt-12">
      <div className="container-max py-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Community Event Planner — Built with care
      </div>
    </footer>
  )
}
