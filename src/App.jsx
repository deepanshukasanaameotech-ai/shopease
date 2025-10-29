import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import About from './pages/About'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import NotFound from './pages/NotFound'
import { fetchProducts } from './data/fetchProducts'

export default function App() {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState(() =>
    JSON.parse(localStorage.getItem('shopease_cart') || '[]')
  )
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')

  useEffect(() => { fetchProducts().then(setProducts) }, [])
  useEffect(() => { localStorage.setItem('shopease_cart', JSON.stringify(cart)) }, [cart])
  useEffect(() => { document.documentElement.className = theme }, [theme])

  const addToCart = (p) => {
    setCart(prev => {
      const found = prev.find(i => i.id === p.id)
      if (found) return prev.map(i => i.id === p.id ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { ...p, qty: 1 }]
    })
  }
  const updateQty = (id, qty) => setCart(prev => prev.map(p => p.id === id ? { ...p, qty } : p))
  const removeFromCart = (id) => setCart(prev => prev.filter(p => p.id !== id))
  const clearCart = () => setCart([])

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar cartCount={cart.reduce((a,b)=>a+b.qty,0)} theme={theme} setTheme={setTheme}/>
      <main className="flex-1 container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home products={products} addToCart={addToCart} />} />
          <Route path="/products" element={<Products products={products} addToCart={addToCart} />} />
          <Route path="/product/:id" element={<ProductDetails products={products} addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} updateQty={updateQty} removeFromCart={removeFromCart} />} />
          <Route path="/checkout" element={<Checkout cart={cart} clearCart={clearCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
