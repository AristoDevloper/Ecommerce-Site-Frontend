import { DesktopProductList } from "./DesktopProductList"
import { MobileProductListing } from "./MobileProductListing"
import './ProductListing.css'
import './MobileProductListing.css'
import { useState } from "react"

export function ProductListingPage() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024)
    window.addEventListener('resize', () => {
        setIsMobile(window.innerWidth < 1024)
    })
    return (
        <>
            {isMobile ? <MobileProductListing /> : <DesktopProductList />}
        </>
    )
}