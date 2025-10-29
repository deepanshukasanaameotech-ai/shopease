import React, { useState, useMemo } from 'react'
import ProductCard from '../components/ProductCard'
import SearchBar from '../components/SearchBar'

export default function Products({ products = [], addToCart }) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')
  const [sort, setSort] = useState('none')

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(products.map((p) => p.category)))],
    [products]
  )

  let filtered = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  )
  if (category !== 'All') filtered = filtered.filter((p) => p.category === category)
  if (sort === 'low') filtered.sort((a, b) => a.price - b.price)
  if (sort === 'high') filtered.sort((a, b) => b.price - a.price)

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4 pt-20">Products</h1>
      <div className="flex gap-3 flex-wrap mb-4">
        <SearchBar value={query} onChange={setQuery} />
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="px-3 py-2 border rounded">
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
        <select value={sort} onChange={(e) => setSort(e.target.value)} className="px-3 py-2 border rounded">
          <option value="none">Sort</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
    </div>
  )
}
