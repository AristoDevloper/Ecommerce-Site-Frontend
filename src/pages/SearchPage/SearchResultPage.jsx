import './SearchPage.css'
import './MobileSearchPage.css'
import { MobileSearchPage } from './MobileSearchPage';
import { DesktopSearchPage } from './DesktopSearchPage';
import { useState } from 'react';

export default function SearchResultPage() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

    window.addEventListener('resize', () => {
        setIsMobile(window.innerWidth < 1024);
    });

    return (
        <>
            {isMobile ? <MobileSearchPage /> : <DesktopSearchPage />}
        </>
    )
}