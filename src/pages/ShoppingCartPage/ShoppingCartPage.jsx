import { API_BASE_URL } from '../../config/api';
import './ShoppingCartPage.css';
import { useState, useEffect } from 'react';
import { DesktopShoppingCartPage } from './DesktopShoppingCartPage';
import { MobileShoppingCartPage } from './MobileShoppingCartPage';
import './MobileShoppingCartPage.css';

export function ShoppingCartPage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCart = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/cart/`, {
        method: 'GET',
        credentials: 'include'
      });
      if (!response.ok) {
        throw new Error('Failed to fetch your cart collection');
      }
      const data = await response.json();
      setCartItems(data.items || []);
      if (data.cart_id) {
          sessionStorage.setItem('cart_id', data.cart_id);
      }
    } catch (err) {
      console.error(err);
      setError('Could not load your shopping cart at this time.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    fetchCart();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleUpdateQuantity = async (productId, delta) => {
    try {
      const response = await fetch(`${API_BASE_URL}/cart/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
          product_id: productId,
          quantity: delta
        })
      });
      if (!response.ok) {
        throw new Error('Failed to update product quantity');
      }
      fetchCart();
    } catch (err) {
      console.error(err);
      alert('Failed to update item quantity.');
    }
  };

  const handleRemoveItem = async (productId) => {
    try {
      const response = await fetch(`${API_BASE_URL}/cart/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
          product_id: productId
        })
      });
      if (!response.ok) {
        throw new Error('Failed to remove product from cart');
      }
      fetchCart();
    } catch (err) {
      console.error(err);
      alert('Failed to remove item from cart.');
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-background text-on-surface">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Loading your collection...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-background text-on-surface px-6 text-center">
        <span className="material-symbols-outlined text-6xl text-outline-variant mb-6" style={{ fontVariationSettings: "'wght' 200" }}>sentiment_dissatisfied</span>
        <h2 className="font-headline text-3xl font-bold mb-4 text-primary">Cart Unavailable</h2>
        <p className="text-on-surface-variant max-w-md mb-8 leading-relaxed">{error}</p>
        <button onClick={() => { setLoading(true); fetchCart(); }} className="bg-primary text-on-primary py-4 px-10 rounded font-label uppercase tracking-widest text-xs font-bold hover:opacity-90 active:scale-95 transition-all">
          Retry Loading
        </button>
      </div>
    );
  }

  return (
    <>
      {isMobile ? (
        <MobileShoppingCartPage 
          cartItems={cartItems} 
          onUpdateQuantity={handleUpdateQuantity} 
          onRemoveItem={handleRemoveItem} 
        />
      ) : (
        <DesktopShoppingCartPage 
          cartItems={cartItems} 
          onUpdateQuantity={handleUpdateQuantity} 
          onRemoveItem={handleRemoveItem} 
        />
      )}
    </>
  );
}

export default ShoppingCartPage;
