import './TrackOrderPage.css';
import { useState, useEffect } from 'react';
import { DesktopTrackOrderPage } from './DesktopTrackOrderPage';
import { MobileTrackOrderPage } from './MobileTrackOrderPage';
import './MobileTrackOrderPage.css';

export function TrackOrderPage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>{isMobile ? <MobileTrackOrderPage /> : <DesktopTrackOrderPage />}</>
  );
}

export default TrackOrderPage;
