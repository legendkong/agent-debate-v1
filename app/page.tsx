'use client'
import { useState } from 'react'

export default function Home() {
  const [query, setQuery] = useState('')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  async function createIndexAndEmbeddings() {
    try {
      const result = await fetch('/api/setup', {
        method: 'POST'
      })
      const json = await result.json()
      console.log('result: ', json)
    } catch (err) {
      console.log('err: ', err)
    }
  }

  // function to query opinecone
  async function sendQuery() {
    if (!query) return
    setResult('')
    setLoading(true)
    try {
      const result = await fetch('/api/read', {
        method: 'POST',
        body: JSON.stringify(query)
      })
      const json = await result.json()
      setResult(json.data)
      setLoading(false)
    } catch (err) {
      console.log('err:', err)
      setLoading(false)
    }
  }

  return (
    // min-h-screen missing (to add in in the future)
    <main className='flex flex-col items-center justify-between p-24'></main>
  )
}
