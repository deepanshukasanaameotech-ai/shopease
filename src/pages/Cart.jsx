import React from 'react'
import { Link } from 'react-router-dom'

export default function Cart({ cart, updateQty, removeFromCart }) {
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0)

  return (
    <div className='pt-20'>
      <h1 className="text-2xl font-semibold pt-20 mb-4">Your Cart</h1>

      {cart.length === 0 ? (
        <p>
          Your cart is empty.{' '}
          <Link to="/products" className="text-blue-600">Shop Now</Link>
        </p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded shadow">
              <img src={item.images[0]} alt={item.name} className="w-24 h-24 object-cover rounded" />
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-600">₹{item.price}</p>

                <div className="flex items-center gap-2 mt-2">
                  <button onClick={() => updateQty(item.id, Math.max(1, item.qty - 1))} className="px-2 py-1 border rounded">-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => updateQty(item.id, item.qty + 1)} className="px-2 py-1 border rounded">+</button>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-600">Remove</button>
                </div>
              </div>
            </div>
          ))}

          <div className="text-right">
            <div className="text-lg font-semibold">Total: ₹{total}</div>
            <Link to="/checkout" className="btn btn-primary mt-3 inline-block">Proceed to Checkout</Link>
          </div>
        </div>
      )}
    </div>
  )
}
