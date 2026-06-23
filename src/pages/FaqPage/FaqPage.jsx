import './FaqPage.css'
import { useState } from 'react'
import { DesktopFaqPage } from './DesktopFaqPage'
import { MobileFaqPage } from './MobileFaqPage'
import './MobileFaqPage.css'

export function FaqPage() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024)

    window.addEventListener('resize', () => {
        setIsMobile(window.innerWidth < 1024)
    });
    return (
        <>
            {isMobile ? <MobileFaqPage /> : <DesktopFaqPage />}
        </>
    )
}
export default FaqPage;
