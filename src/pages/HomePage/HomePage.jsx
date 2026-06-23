import './HomePage.css'
import './MobileHomePage.css'
import { MobileHomePage } from './MobileHomePage';
import { DesktopHomePage } from './DesktopHomePage';
import { useState } from 'react';

export function HomePage() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

    window.addEventListener('resize', () => {
        setIsMobile(window.innerWidth < 1024);
    });

    return (
        <>
            {isMobile ? <MobileHomePage /> : <DesktopHomePage />}
        </>
    )
}