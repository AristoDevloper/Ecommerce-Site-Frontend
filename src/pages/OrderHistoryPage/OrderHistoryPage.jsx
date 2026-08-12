import { API_BASE_URL } from '../../config/api';
import './OrderHistoryPage.css'
import { useEffect, useState } from 'react'
import { DesktopOrderHistoryPage } from './DesktopOrderHistoryPage'
import { MobileOrderHistoryPage } from './MobileOrderHistoryPage'
import './MobileOrderHistoryPage.css'

export function OrderHistoryPage() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024)
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchOrders = async () => {
        try {
            const response = await fetch(`${API_BASE_URL}/order/`, {
                method: 'GET',
                credentials: 'include'
            });
            if (!response.ok) {
                throw new Error('Failed to fetch order history');
            }
            const data = await response.json();
            setOrders(data);
        } catch (err) {
            console.error(err);
            setError('Could not load your order history.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024)
        }

        window.addEventListener('resize', handleResize)
        fetchOrders();
        
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-background text-on-surface">
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Loading archives...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-background text-on-surface px-6 text-center">
                <span className="material-symbols-outlined text-6xl text-outline-variant mb-6" style={{ fontVariationSettings: "'wght' 200" }}>error</span>
                <h2 className="font-headline text-3xl font-bold mb-4 text-primary">Archives Unavailable</h2>
                <p className="text-on-surface-variant max-w-md mb-8 leading-relaxed">{error}</p>
                <button onClick={() => { setLoading(true); fetchOrders(); }} className="bg-primary text-on-primary py-4 px-10 rounded font-label uppercase tracking-widest text-xs font-bold hover:opacity-90 active:scale-95 transition-all">
                    Retry
                </button>
            </div>
        );
    }

    return (
        <>
            {isMobile ? <MobileOrderHistoryPage orders={orders} /> : <DesktopOrderHistoryPage orders={orders} />}
        </>
    )
}
export default OrderHistoryPage;
