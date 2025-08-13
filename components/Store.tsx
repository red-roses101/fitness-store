
'use client'
import Image from 'next/image'
import { ShoppingCart, Heart } from 'lucide-react'
import { useMemo, useState } from 'react'
import Newsletter from './Newsletter'
import { PRODUCTS } from './products'

export default function Store() {
  const [query, setQuery] = useState('')
  const [cart, setCart] = useState({})
  const [favorites, setFavorites] = useState([])

  const items = useMemo(()=> PRODUCTS.filter(p => p.name.toLowerCase().includes(query.toLowerCase())), [query])

  const cartItems = Object.entries(cart).map(([id, qty]) => {
    const p = PRODUCTS.find(x=>x.id===id)
    return { ...p, qty, subtotal: p.price * qty }
  })

  const total = cartItems.reduce((s,i)=> s + i.subtotal, 0)

  return (
    <main id="shop" className="container pb-16">
      <div className="flex items-center justify-between mb-6">
        <div className="text-sm text-slate-600">{items.length} items</div>
        <div className="flex gap-2">
          <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search products..." className="input" />
          <div className="p-2 rounded-xl border bg-white flex items-center gap-2"><strong>Cart</strong> ({cartItems.length})</div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map(p=> (
          <article key={p.id} className="card hover:shadow-xl transition-shadow">
            <div className="relative">
              <img src={p.image} alt={p.name} className="w-full h-56 object-cover" />
              <div className="absolute top-3 left-3"><span className="badge">{p.tag}</span></div>
              <button onClick={()=> setFavorites(f => f.includes(p.id) ? f.filter(x=>x!==p.id) : [...f,p.id])} className="absolute top-3 right-3 p-2 rounded-full bg-white/90 shadow">
                <Heart className="h-4 w-4" />
              </button>
            </div>
            <div className="p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="font-semibold">{p.name}</div>
                  <div className="text-sm text-slate-500">{p.category}</div>
                </div>
                <div className="text-right font-semibold">${p.price}</div>
              </div>
              <p className="mt-3 text-sm text-slate-600 line-clamp-2">{p.description}</p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                <button className="btn" onClick={()=> setCart(c => ({...c, [p.id]: (c[p.id]||0)+1}))}>Add to cart</button>
                {p.stripeLink ? (
                  <a className="btn btn-primary text-center" href={p.stripeLink} target="_blank" rel="noreferrer">Buy now</a>
                ) : (
                  <button className="btn btn-primary opacity-80" title="Add Stripe link in components/products.ts">Buy now</button>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      <section className="mt-10 p-6 card">
        <h3 className="text-xl font-semibold mb-2">Order summary</h3>
        {cartItems.length === 0 ? <div className="text-sm text-slate-500">Your cart is empty.</div> : (
          <div className="space-y-2">
            {cartItems.map(i=> <div key={i.id} className="flex justify-between text-sm">{i.name} × {i.qty} <span>${i.subtotal.toFixed(2)}</span></div>)}
            <div className="border-t pt-2 flex justify-between font-semibold"><div>Subtotal</div><div>${total.toFixed(2)}</div></div>
            <div className="mt-4 text-sm text-slate-600">Checkout is handled via Stripe Payment Links for each product (secure, no backend required).</div>
          </div>
        )}
      </section>

      <section className="mt-10 card p-6">
        <h3 className="text-lg font-semibold">Join our fitness community</h3>
        <p className="text-sm text-slate-600">Get weekly workouts, product drops and exclusive discounts.</p>
        <div className="mt-4"><Newsletter /></div>
      </section>
    </main>
  )
}
