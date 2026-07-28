import { useState, useEffect } from 'react';
import { DesktopInventoryPage } from './DesktopInventoryPage';
import { MobileInventoryPage } from './MobileInventoryPage';

export function InventoryPage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {isMobile ? <MobileInventoryPage /> : <DesktopInventoryPage />}
    </>
  );
}

export default InventoryPage;
