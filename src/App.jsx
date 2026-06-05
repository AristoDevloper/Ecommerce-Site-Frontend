import './App.css'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import SearchResultPage from './pages/SearchResultPage'
import { ProductDetailsPage } from './pages/ProductDetailsPage'
import { ProductListingPage } from './pages/ProductListingPage'
import { CheckoutPage } from './pages/CheckoutPage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/search" element={<SearchResultPage />} />
      <Route path="/product" element={<ProductDetailsPage />} />
      <Route path="/products" element={<ProductListingPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  )
}

export default App
