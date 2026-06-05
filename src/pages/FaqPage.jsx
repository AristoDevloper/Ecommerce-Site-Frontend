import './FaqPage.css'
import { useState } from 'react'
import { DesktopFaqPage } from './DesktopFaqPage'
import { MobileFaqPage } from './MobileFaqPage'
import './MobileFaqPage.css'

export function FaqPage() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)

    window.addEventListener('resize', () => {
        setIsMobile(window.innerWidth < 768)
    });
    return (
        <>
            {isMobile ? <MobileFaqPage /> : <DesktopFaqPage />}
        </>
    )
}
export default FaqPage;
