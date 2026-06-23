import './App.css'
import { Routes, Route } from 'react-router-dom'
import { HomePage } from './pages/HomePage/HomePage'
import { AboutPage } from './pages/AboutPage/AboutPage'
import SearchResultPage from './pages/SearchPage/SearchResultPage'
import { ProductDetailsPage } from './pages/ProductDetailsPage/ProductDetailsPage'
import { ProductListingPage } from './pages/ProductListingPage/ProductListingPage'
import { CheckoutPage } from './pages/CheckoutPage/CheckoutPage'
import { ShoppingCartPage } from './pages/ShoppingCartPage/ShoppingCartPage'
import { TrackOrderPage } from './pages/TrackOrderPage/TrackOrderPage'
import { ConversationsPage } from './pages/ConversationsPage/ConversationsPage'
import { SellerChatPage } from './pages/SellerChatPage/SellerChatPage'

function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/search" element={<SearchResultPage />} />
      <Route path="/product" element={<ProductDetailsPage />} />
      <Route path="/products" element={<ProductListingPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/cart" element={<ShoppingCartPage />} />
      <Route path="/track-order" element={<TrackOrderPage />} />
      <Route path="/conversations" element={<ConversationsPage />} />
      <Route path="/seller-chat" element={<SellerChatPage />} />
    </Routes>
  )
}

export default App
