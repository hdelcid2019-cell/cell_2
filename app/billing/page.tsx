'use client'
import { useState } from 'react'

const plans = [
  { id: 'basic', name: 'Basic', price: 19, features: ['Start & reply DMs', 'Access public photos'] },
  { id: 'plus',  name: 'Plus',  price: 29, features: ['DMs + 1 monthly boost', 'Private photo requests'] },
  { id: 'vip',   name: 'VIP',   price: 49, features: ['DMs + weekly boost', 'Read receipts'] },
]

export default function Billing() {
  const [loading, setLoading] = useState<string | null>(null)

  const checkout = async (plan: string) => {
    setLoading(plan)
    try {
      const res = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ plan })
      })
      const data = await res.json()
      if (data?.url) {
        window.location.href = data.url
      } else {
        alert('Checkout not configured in preview mode.')
      }
    } catch {
      alert('Checkout not available in preview mode.')
    } finally {
      setLoading(null)
    }
  }

  return (
    <div className="grid gap-8">
      <h1 className="text-2xl font-semibold">Plans</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {plans.map(p => (
          <div key={p.id} className="card">
            <div className="text-xl font-semibold">{p.name}</div>
            <div className="text-3xl font-bold mt-2">
              ${p.price}<span className="text-base opacity-70">/mo</span>
            </div>
            <ul className="mt-3 space-y-1 text-sm opacity-90">
              {p.features.map(f => <li key={f}>• {f}</li>)}
            </ul>
            <button onClick={() => checkout(p.id)} className="btn mt-4" disabled={loading === p.id}>
              {loading === p.id ? 'Loading…' : 'Subscribe'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
