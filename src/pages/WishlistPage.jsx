import './WishlistPage.css'
import { useState } from 'react'
import { DesktopWishlistPage } from './DesktopWishlistPage'
import { MobileWishlistPage } from './MobileWishlistPage'
import './MobileWishlistPage.css'

export function WishlistPage() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

    window.addEventListener('resize', () => {
        setIsMobile(window.innerWidth < 768)
    });
    return (
        <>
            {isMobile ? <MobileWishlistPage /> : <DesktopWishlistPage />}
        </>
    )
}
export default WishlistPage;
