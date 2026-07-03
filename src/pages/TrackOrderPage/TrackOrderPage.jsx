import './TrackOrderPage.css';
import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { DesktopTrackOrderPage } from './DesktopTrackOrderPage';
import { MobileTrackOrderPage } from './MobileTrackOrderPage';
import './MobileTrackOrderPage.css';

export function TrackOrderPage({ orders = [] }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (orders.length === 0) {
    return <Navigate to="/order-history" replace />;
  }

  return (
    <>{isMobile ? <MobileTrackOrderPage /> : <DesktopTrackOrderPage />}</>
  );
}

export default TrackOrderPage;
