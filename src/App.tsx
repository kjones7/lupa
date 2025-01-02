
import { useEffect, useState } from 'react'
import './App.css'

export default function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('/api/test')
      .then(res => res.json())
      .then(data => setMessage(data.message))
  }, [])

  return (
    <main>
      <h1>React ⚛️ + Vite ⚡ + Replit 🌀</h1>
      <p>API Message: {message}</p>
    </main>
  )
}
