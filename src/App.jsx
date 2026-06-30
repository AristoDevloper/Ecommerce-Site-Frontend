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
import { Header } from './components/Header/Header'
import { useEffect, useState } from 'react'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    async function AuthenticationCheck() {
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
      }
    }

    async function ProductsFetch() {
      try {
        const response = await fetch('http://localhost:8000/products-api/', {
          credentials: 'include'
        });
        const data = await response.json();
        // Do something with the fetched products data
        console.log('Fetched products:', data);
      } catch (error) {
        console.error('Failed to fetch products:', error);
      }
    }

    async function LoginIn() {
      try {
        const response = await fetch('http://localhost:8000/user_login/', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            "username": 'gurughantal',
            "password": 'gogogreen'
          })
        });

        const data = await response.json();
        console.log('Login response:', data);
      } catch (error) {
        console.error('Login failed:', error);
      }
    }

    async function InitializeApp() {
      await LoginIn();
      await ProductsFetch();
      await AuthenticationCheck();
    }

    InitializeApp();

  }, [])


  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage isAuthenticated={isAuthenticated} />} />
        <Route path="/about" element={<AboutPage isAuthenticated={isAuthenticated} />} />
        <Route path="/search" element={<SearchResultPage isAuthenticated={isAuthenticated} />} />
        <Route path="/product" element={<ProductDetailsPage isAuthenticated={isAuthenticated} />} />
        <Route path="/products" element={<ProductListingPage isAuthenticated={isAuthenticated} />} />
        <Route path="/checkout" element={<CheckoutPage isAuthenticated={isAuthenticated} />} />
        <Route path="/cart" element={<ShoppingCartPage isAuthenticated={isAuthenticated} />} />
        <Route path="/track-order" element={<TrackOrderPage isAuthenticated={isAuthenticated} />} />
        <Route path="/conversations" element={<ConversationsPage isAuthenticated={isAuthenticated} />} />
        <Route path="/seller-chat" element={<SellerChatPage isAuthenticated={isAuthenticated} />} />
      </Routes>
    </>
  )
}

export default App
