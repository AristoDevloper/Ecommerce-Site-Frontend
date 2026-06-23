import './OrderHistoryPage.css'
import { useState } from 'react'
import { DesktopOrderHistoryPage } from './DesktopOrderHistoryPage'
import { MobileOrderHistoryPage } from './MobileOrderHistoryPage'
import './MobileOrderHistoryPage.css'

export function OrderHistoryPage() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024)

    window.addEventListener('resize', () => {
        setIsMobile(window.innerWidth < 1024)
    });
    return (
        <>
            {isMobile ? <MobileOrderHistoryPage /> : <DesktopOrderHistoryPage />}
        </>
    )
}
export default OrderHistoryPage;
