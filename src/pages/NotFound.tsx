import { Link } from 'react-router-dom'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <p className="font-cormorant text-8xl font-bold text-gold/20 mb-4">404</p>
      <h1 className="font-poppins font-black text-3xl text-white mb-2">Page Not Found</h1>
      <p className="text-gray-dim font-inter mb-8">
        This page doesn't exist — or maybe it moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-gold text-black font-poppins font-semibold px-6 py-3 rounded-full hover:-translate-y-0.5 transition-transform"
      >
        <Home size={16} /> Back to Home
      </Link>
    </div>
  )
}
