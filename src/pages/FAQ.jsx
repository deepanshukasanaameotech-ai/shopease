import React from 'react'

export default function FAQ() {
  return (
    <div className='pt-20'>
      <h1 className="text-2xl font-semibold mb-3">Frequently Asked Questions</h1>
      <div className="space-y-4">
        <div>
          <h3 className="font-semibold">Is ShopEase a real store?</h3>
          <p className="text-gray-600">No, it's a frontend-only educational demo.</p>
        </div>
        <div>
          <h3 className="font-semibold">Where is my cart saved?</h3>
          <p className="text-gray-600">In your browser’s localStorage under the key <code>shopease_cart</code>.</p>
        </div>
        <div>
          <h3 className="font-semibold">Can I modify products?</h3>
          <p className="text-gray-600">Yes, open <code>public/data/products.json</code> and edit or add entries.</p>
        </div>
      </div>
    </div>
  )
}
