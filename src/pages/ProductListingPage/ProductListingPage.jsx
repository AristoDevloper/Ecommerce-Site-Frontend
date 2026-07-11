import { DesktopProductList } from "./DesktopProductList"
import { MobileProductListing } from "./MobileProductListing"
import './ProductListing.css'
import './MobileProductListing.css'
import { useEffect, useState } from "react"

export function ProductListingPage() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024)
        }

        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <>
            {isMobile ? <MobileProductListing /> : <DesktopProductList />}
        </>
    )
}