import './LoginPage.css'
import { MobileLoginPage } from './MobileLoginPage';
import { DesktopLoginPage } from './DesktopLoginPage';
import { useState, useEffect } from 'react';

export function LoginPage({ isAuthenticated, setIsAuthenticated }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (isAuthenticated) {
            console.log('User is authenticated');
        } else {
            console.log('User is not authenticated');
        }
    }, [isAuthenticated]);

    return (
        <>
            {isMobile ? <MobileLoginPage setIsAuthenticated={setIsAuthenticated} /> : <DesktopLoginPage setIsAuthenticated={setIsAuthenticated} />}
        </>
    )
}

