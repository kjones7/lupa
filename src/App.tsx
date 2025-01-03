
import { useEffect, useState } from 'react'
import './App.css'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'

export default function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('/api/test')
      .then(res => res.json())
      .then(data => setMessage(data.message))
  }, [])

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>React ⚛️ + Vite ⚡ + Replit 🌀</CardTitle>
          <CardDescription>With shadcn/ui components</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4">API Message: {message}</p>
          <Button onClick={() => alert('Button clicked!')}>
            Click me!
          </Button>
        </CardContent>
      </Card>
    </main>
  )
}
