import './ProductDetails.css';
import './MobileProductDetails.css';
import { MobileProductDetails } from './MobileProductDetails';
import { DesktopProductDetails } from './DesktopProductDetails';
import { useState } from 'react';

export function ProductDetailsPage() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    window.addEventListener('resize', () => {
        setIsMobile(window.innerWidth < 768);
    });

    return (
        <>
            {isMobile ? <MobileProductDetails /> : <DesktopProductDetails />}
        </>
    )
}