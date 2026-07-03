import './SignupPage.css'
import { MobileSignupPage } from './MobileSignupPage';
import { DesktopSignupPage } from './DesktopSignupPage';
import { useState, useEffect } from 'react';

export function SignupPage({ isAuthenticated }) {
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
            {isMobile ? <MobileSignupPage /> : <DesktopSignupPage />}
        </>
    )
}
