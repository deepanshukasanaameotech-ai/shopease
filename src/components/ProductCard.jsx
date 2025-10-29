import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ product, addToCart }) {
  return (
    <article className="bg-white rounded-xl shadow hover:shadow-lg p-4 flex flex-col transition">
      <Link to={`/product/${product.id}`} className="block mb-3">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-48 object-cover rounded"
        />
      </Link>
      <h3 className="font-semibold text-lg">{product.name}</h3>
      <p className="text-sm text-gray-500 flex-1">{product.desc}</p>
      <div className="mt-3 flex items-center justify-between">
        <span className="font-bold">₹{product.price}</span>
        <div className="flex gap-2">
          <Link to={`/product/${product.id}`} className="text-blue-600 text-sm">View</Link>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
          >
            Add
          </button>
        </div>
      </div>
    </article>
  )
}
