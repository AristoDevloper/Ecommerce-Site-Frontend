import './PaymentPage.css'
import { useState } from 'react'
import { DesktopPayment } from './DesktopPayment'
import { MobilePayment } from './MobilePayment'
import './MobilePayment.css'

export function PaymentPage() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

    window.addEventListener('resize', () => {
        setIsMobile(window.innerWidth < 768)
    });
    return (
        <>
            {isMobile ? <MobilePayment /> : <DesktopPayment />}
        </>
    )
}
