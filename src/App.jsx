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
import { OrderHistoryPage } from './pages/OrderHistoryPage/OrderHistoryPage'
import { AccountPage } from './pages/AccountPage/AccountPage'
import { WishlistPage } from './pages/WishlistPage/WishlistPage'
import { Header } from './components/Header/Header'
import { LoginPage } from './pages/LoginPage/LoginPage'
import { SignupPage } from './pages/SignupPage/SignupPage'
import { ProtectedRoute } from './components/Routes/ProtectedRoute'
import { AnonymousRoute } from './components/Routes/AnonymousRoute'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAuthLoading, setIsAuthLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    async function AuthenticationCheck() {
      setIsAuthLoading(true);
      try {
        const response = await fetch('http://localhost:8000/auth-check/', {
          method: 'POST',
          credentials: 'include'
        });
        if (response.status === 200) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }

      } catch (error) {
        console.error('Authentication check failed:', error);
        setIsAuthenticated(false);
      } finally {
        setIsAuthLoading(false);
      }
    }

    AuthenticationCheck();

  }, [location.pathname])

  const hideHeader = ['/login', '/signup'].includes(location.pathname);

  return (
    <>
      {!hideHeader && <Header isAuthenticated={isAuthenticated} />}
      <Routes>
        <Route path="/" element={<HomePage isAuthenticated={isAuthenticated} />} />
        <Route path="/about" element={<AboutPage isAuthenticated={isAuthenticated} />} />
        <Route path="/search" element={<SearchResultPage isAuthenticated={isAuthenticated} />} />
        <Route path="/product" element={<ProductDetailsPage isAuthenticated={isAuthenticated} />} />
        <Route path="/products" element={<ProductListingPage isAuthenticated={isAuthenticated} />} />
        {/* Protected Routes */}
        <Route path="/checkout" element={
          <ProtectedRoute isAuthenticated={isAuthenticated} isAuthLoading={isAuthLoading}>
            <CheckoutPage isAuthenticated={isAuthenticated} />
          </ProtectedRoute>
        } />
        <Route path="/cart" element={
          <ProtectedRoute isAuthenticated={isAuthenticated} isAuthLoading={isAuthLoading}>
            <ShoppingCartPage isAuthenticated={isAuthenticated} />
          </ProtectedRoute>
        } />
        <Route path="/track-order" element={
          <ProtectedRoute isAuthenticated={isAuthenticated} isAuthLoading={isAuthLoading}>
            <TrackOrderPage isAuthenticated={isAuthenticated} />
          </ProtectedRoute>
        } />
        <Route path="/conversations" element={
          <ProtectedRoute isAuthenticated={isAuthenticated} isAuthLoading={isAuthLoading}>
            <ConversationsPage isAuthenticated={isAuthenticated} />
          </ProtectedRoute>
        } />
        <Route path="/seller-chat" element={
          <ProtectedRoute isAuthenticated={isAuthenticated} isAuthLoading={isAuthLoading}>
            <SellerChatPage isAuthenticated={isAuthenticated} />
          </ProtectedRoute>
        } />
        <Route path="/orders" element={
          <ProtectedRoute isAuthenticated={isAuthenticated} isAuthLoading={isAuthLoading}>
            <OrderHistoryPage isAuthenticated={isAuthenticated} />
          </ProtectedRoute>
        } />
        <Route path="/account" element={
          <ProtectedRoute isAuthenticated={isAuthenticated} isAuthLoading={isAuthLoading}>
            <AccountPage isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
          </ProtectedRoute>
        } />
        <Route path="/wishlist" element={
          <ProtectedRoute isAuthenticated={isAuthenticated} isAuthLoading={isAuthLoading}>
            <WishlistPage isAuthenticated={isAuthenticated} />
          </ProtectedRoute>
        } />

        {/* Anonymous Routes (Redirect to home if logged in) */}
        <Route path="/login" element={
          <AnonymousRoute isAuthenticated={isAuthenticated} isAuthLoading={isAuthLoading}>
            <LoginPage isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
          </AnonymousRoute>
        } />
        <Route path="/signup" element={
          <AnonymousRoute isAuthenticated={isAuthenticated} isAuthLoading={isAuthLoading}>
            <SignupPage isAuthenticated={isAuthenticated} />
          </AnonymousRoute>
        } />
      </Routes>
    </>
  )
}

export default App
