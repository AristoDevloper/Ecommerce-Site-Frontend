import './ConversationsPage.css';
import { useState, useEffect } from 'react';
import { DesktopConversationsPage } from './DesktopConversationsPage';
import { MobileConversationsPage } from './MobileConversationsPage';
import './MobileConversationsPage.css';

export function ConversationsPage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>{isMobile ? <MobileConversationsPage /> : <DesktopConversationsPage />}</>
  );
}

export default ConversationsPage;
