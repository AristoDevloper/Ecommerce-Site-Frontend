import './CheckoutPage.css'
import { useState } from 'react'
import { DesktopCheckout } from './DesktopCheckout'
import { MobileCheckout } from './MobileCheckout'
import './MobileCheckout.css'

export function CheckoutPage() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

    window.addEventListener('resize', () => {
        setIsMobile(window.innerWidth < 768)
    });
    return (
        <>
            {isMobile ? <MobileCheckout /> : <DesktopCheckout />}
        </>
    )
}