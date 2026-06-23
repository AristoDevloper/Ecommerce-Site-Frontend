import './SellerChatPage.css';
import { useState, useEffect } from 'react';
import { DesktopSellerChatPage } from './DesktopSellerChatPage';
import { MobileSellerChatPage } from './MobileSellerChatPage';
import './MobileSellerChatPage.css';

export function SellerChatPage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>{isMobile ? <MobileSellerChatPage /> : <DesktopSellerChatPage />}</>
  );
}

export default SellerChatPage;
