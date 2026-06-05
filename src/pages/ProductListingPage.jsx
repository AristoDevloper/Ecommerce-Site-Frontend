import { DesktopProductList } from "./DesktopProductList"
import { MobileProductListing } from "./MobileProductListing"
import './ProductListing.css'
import './MobileProductListing.css'
import { useState } from "react"

export function ProductListingPage() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
    window.addEventListener('resize', () => {
        setIsMobile(window.innerWidth < 768)
    })
    return (
        <>
            {isMobile ? <MobileProductListing /> : <DesktopProductList />}
        </>
    )
}