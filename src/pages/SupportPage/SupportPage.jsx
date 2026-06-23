import './SupportPage.css'
import { useState } from 'react'
import { DesktopSupportPage } from './DesktopSupportPage'
import { MobileSupportPage } from './MobileSupportPage'
import './MobileSupportPage.css'

export function SupportPage() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024)

    window.addEventListener('resize', () => {
        setIsMobile(window.innerWidth < 1024)
    });
    return (
        <>
            {isMobile ? <MobileSupportPage /> : <DesktopSupportPage />}
        </>
    )
}
export default SupportPage;
