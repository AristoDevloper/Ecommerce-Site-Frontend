import { useState, useEffect } from 'react';
import { DesktopHeader } from './DesktopHeader';
import { MobileHeader } from './MobileHeader';
import { MobileBottomNav } from './MobileBottomNav';

export function Header({ isAuthenticated, setIsAuthenticated, setUserRole, userRole }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        
        window.addEventListener('resize', handleResize);
        
        // Clean up event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return isMobile ? (
        <>
            <MobileHeader isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUserRole={setUserRole} userRole={userRole} />
            <MobileBottomNav isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUserRole={setUserRole} userRole={userRole} />
        </>
    ) : <DesktopHeader isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} setUserRole={setUserRole} userRole={userRole} />;
}
