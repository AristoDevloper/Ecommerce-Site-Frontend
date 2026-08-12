import { API_BASE_URL } from '../../config/api';
import './TrackOrderPage.css';
import { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { DesktopTrackOrderPage } from './DesktopTrackOrderPage';
import { MobileTrackOrderPage } from './MobileTrackOrderPage';
import './MobileTrackOrderPage.css';

export function TrackOrderPage({ isAuthenticated }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const { orderId } = useParams();
  
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fetchOrderDetails = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/order/${orderId}/`, {
          method: 'GET',
          credentials: 'include'
        });
        
        if (!response.ok) {
          throw new Error('Failed to fetch order details');
        }
        
        const data = await response.json();
        setOrder(data);
      } catch (err) {
        console.error(err);
        setError('Could not load order details.');
      } finally {
        setLoading(false);
      }
    };
    
    fetchOrderDetails();
  }, [orderId]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-background text-on-surface">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Retrieving records...</p>
      </div>
    );
  }

  if (error || !order) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-background text-on-surface px-6 text-center">
        <span className="material-symbols-outlined text-6xl text-outline-variant mb-6" style={{ fontVariationSettings: "'wght' 200" }}>error</span>
        <h2 className="font-headline text-3xl font-bold mb-4 text-primary">Order Not Found</h2>
        <p className="text-on-surface-variant max-w-md mb-8 leading-relaxed">We could not locate this order. It may have been removed or the ID is incorrect.</p>
        <button onClick={() => window.history.back()} className="bg-primary text-on-primary py-4 px-10 rounded font-label uppercase tracking-widest text-xs font-bold hover:opacity-90 active:scale-95 transition-all">
          Go Back
        </button>
      </div>
    );
  }

  return (
    <>{isMobile ? <MobileTrackOrderPage order={order} /> : <DesktopTrackOrderPage order={order} />}</>
  );
}

export default TrackOrderPage;
