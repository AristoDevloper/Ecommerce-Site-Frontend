import './ShoppingCartPage.css';
import { useState, useEffect } from 'react';
import { DesktopShoppingCartPage } from './DesktopShoppingCartPage';
import { MobileShoppingCartPage } from './MobileShoppingCartPage';
import './MobileShoppingCartPage.css';

export function ShoppingCartPage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>{isMobile ? <MobileShoppingCartPage /> : <DesktopShoppingCartPage />}</>
  );
}

export default ShoppingCartPage;
