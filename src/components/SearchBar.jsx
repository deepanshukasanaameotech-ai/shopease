import React from 'react'

export default function SearchBar({ value, onChange, placeholder = 'Search products...' }) {
  return (
    <label className="flex items-center gap-2">
      <span className="sr-only">Search products</span>
      <input
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="px-3 py-2 border rounded-md"
      />
    </label>
  )
}
