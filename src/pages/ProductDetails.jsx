import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

export default function ProductDetails({ products, addToCart }) {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  useEffect(() => {
    if (products.length) {
      const found = products.find((p) => String(p.id) === String(id))
      setProduct(found)
    } else {
      fetch('/data/products.json')
        .then((res) => res.json())
        .then((data) => setProduct(data.find((p) => String(p.id) === String(id))))
    }
  }, [id, products])

  if (!product) return <p>Loading...</p>

  const related = products.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4)

  return (
    <div className="grid md:grid-cols-2 gap-6 pt-20">
      <div>
        {product.images.map((src, i) => (
          <img key={i} src={src} alt={`${product.name}-${i}`} className="mb-3 rounded" />
        ))}
      </div>

      <div>
        <h1 className="text-2xl font-bold">{product.name}</h1>
        <p className="text-xl mt-2 font-semibold text-blue-700">₹{product.price}</p>
        <p className="mt-4 text-gray-600">{product.desc}</p>

        <div className="mt-6 flex gap-3">
          <button onClick={() => addToCart(product)} className="btn btn-primary">
            Add to Cart
          </button>
          <Link to="/cart" className="btn btn-outline">
            Go to Cart
          </Link>
        </div>

        <section className="mt-8">
          <h3 className="font-semibold mb-3">Related Products</h3>
          <div className="grid grid-cols-2 gap-3">
            {related.map((r) => (
              <Link
                key={r.id}
                to={`/product/${r.id}`}
                className="bg-white rounded shadow p-2 flex items-center gap-2 hover:shadow-md transition"
              >
                <img src={r.images[0]} alt={r.name} className="w-16 h-16 object-cover rounded" />
                <div>
                  <div className="font-medium">{r.name}</div>
                  <div className="text-sm">₹{r.price}</div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
