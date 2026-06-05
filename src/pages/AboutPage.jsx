import './AboutPage.css'
import './MobileAboutPage.css'
import { MobileAboutPage } from './MobileAboutPage';
import { DesktopAboutPage } from './DesktopAboutPage';
import { useState } from 'react';

export function AboutPage() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
    window.addEventListener('resize', () => {
        setIsMobile(window.innerWidth < 768);
    });
    return (
        <>
            {isMobile ? <MobileAboutPage /> : <DesktopAboutPage />}
        </>
    )
}