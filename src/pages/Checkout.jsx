import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Checkout({ cart, clearCart }) {
  const [form, setForm] = useState({ name: '', address: '', phone: '' })
  const navigate = useNavigate()
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.address || !form.phone) return alert('Fill all fields!')
    alert('Order placed successfully!')
    clearCart()
    navigate('/')
  }

  return (
    <div className='pt-20'>
      <h1 className="text-2xl font-semibold mb-4">Checkout</h1>

      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow">
        <label className="block">
          Name
          <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="mt-1 w-full px-3 py-2 border rounded" />
        </label>
        <label className="block">
          Address
          <textarea required value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} className="mt-1 w-full px-3 py-2 border rounded" />
        </label>
        <label className="block">
          Phone
          <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="mt-1 w-full px-3 py-2 border rounded" />
        </label>

        <div className="text-right font-semibold text-blue-700">Total: ₹{total}</div>
        <button type="submit" className="btn btn-primary">Place Order</button>
      </form>
    </div>
  )
}
