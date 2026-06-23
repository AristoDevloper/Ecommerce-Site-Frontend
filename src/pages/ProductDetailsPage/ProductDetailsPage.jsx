import './ProductDetails.css';
import './MobileProductDetails.css';
import { MobileProductDetails } from './MobileProductDetails';
import { DesktopProductDetails } from './DesktopProductDetails';
import { useState } from 'react';

export function ProductDetailsPage() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

    window.addEventListener('resize', () => {
        setIsMobile(window.innerWidth < 1024);
    });

    return (
        <>
            {isMobile ? <MobileProductDetails /> : <DesktopProductDetails />}
        </>
    )
}