import './HomePage.css'
import './MobileHomePage.css'
import { MobileHomePage } from './MobileHomePage';
import { DesktopHomePage } from './DesktopHomePage';
import { useState, useEffect } from 'react';

export function HomePage({ isAuthenticated }) {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

    window.addEventListener('resize', () => {
        setIsMobile(window.innerWidth < 1024);
    });

    useEffect(() => {
        if (isAuthenticated) {
            console.log('User is authenticated');
        }
        else {
            console.log('User is not authenticated');
        }
    }, [isAuthenticated]);

    return (
        <>
            {isMobile ? <MobileHomePage /> : <DesktopHomePage />}
        </>
    )
}