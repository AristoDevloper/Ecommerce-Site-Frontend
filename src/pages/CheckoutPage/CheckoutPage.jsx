import { API_BASE_URL } from '../../config/api';
import './CheckoutPage.css'
import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { DesktopCheckout } from './DesktopCheckout'
import { MobileCheckout } from './MobileCheckout'
import './MobileCheckout.css'

const DELIVERY_OPTIONS = [
    { id: 'standard', label: 'Standard Delivery', description: '5-7 Business Days. Eco-conscious packaging.', price: 0 },
    { id: 'expedited', label: 'Expedited Delivery', description: '2-3 Business Days. Signature required.', price: 25 },
    { id: 'overnight', label: 'Overnight Delivery', description: 'Next Day by 10 AM. Priority handling.', price: 75 },
];

export function CheckoutPage() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
    const location = useLocation();
    const navigate = useNavigate();

    // Items to checkout: either a single buyNow product or cart items
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // Address state
    const [useDefaultAddress, setUseDefaultAddress] = useState(true);
    const [defaultAddress, setDefaultAddress] = useState(null);
    const [profileLoading, setProfileLoading] = useState(true);
    const [newAddress, setNewAddress] = useState({
        firstName: '', lastName: '', street: '', city: '', state: '', postalCode: '', phone: ''
    });

    // Delivery state
    const [selectedDelivery, setSelectedDelivery] = useState('standard');

    // Order placement
    const [placingOrder, setPlacingOrder] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Fetch user profile for default address
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const res = await fetch(`${API_BASE_URL}/profile/`, {
                    credentials: 'include'
                });
                if (res.ok) {
                    const data = await res.json();
                    if (data.address || data.phone_number) {
                        setDefaultAddress({
                            address: data.address || '',
                            phone: data.phone_number || '',
                            name: data.name || data.user || ''
                        });
                    } else {
                        setUseDefaultAddress(false);
                    }
                }
            } catch (err) {
                console.error('Failed to fetch profile:', err);
                setUseDefaultAddress(false);
            } finally {
                setProfileLoading(false);
            }
        };
        fetchProfile();
    }, []);

    // Load checkout items
    useEffect(() => {
        const buyNowProduct = location.state?.buyNowProduct;
        if (buyNowProduct) {
            setItems([{
                product: buyNowProduct,
                quantity: 1,
                price: buyNowProduct.price
            }]);
            setIsLoading(false);
        } else {
            // Fetch cart items
            const fetchCart = async () => {
                try {
                    const res = await fetch(`${API_BASE_URL}/cart/`, {
                        credentials: 'include'
                    });
                    if (res.ok) {
                        const data = await res.json();
                        setItems(data.items || []);
                    }
                } catch (err) {
                    console.error('Failed to fetch cart:', err);
                } finally {
                    setIsLoading(false);
                }
            };
            fetchCart();
        }
    }, [location.state]);

    const subtotal = items.reduce((sum, item) => {
        const price = Number(item.product?.price || item.price || 0);
        const qty = item.quantity || 1;
        return sum + price * qty;
    }, 0);

    const deliveryCost = DELIVERY_OPTIONS.find(d => d.id === selectedDelivery)?.price || 0;
    const tax = Math.round(subtotal * 0.08 * 100) / 100;
    const total = subtotal + deliveryCost + tax;

    const handleNewAddressChange = (field, value) => {
        setNewAddress(prev => ({ ...prev, [field]: value }));
    };

    const handleContinueToPayment = () => {
        // Validate address
        if (!useDefaultAddress) {
            const { firstName, lastName, street, city, postalCode, phone } = newAddress;
            if (!firstName || !lastName || !street || !city || !postalCode || !phone) {
                alert('Please fill in all address fields.');
                return;
            }
        } else if (!defaultAddress) {
            alert('No default address found. Please add a new address.');
            setUseDefaultAddress(false);
            return;
        }

        if (items.length === 0) {
            alert('No items to checkout.');
            return;
        }

        const address = useDefaultAddress ? defaultAddress : newAddress;
        const deliveryLabel = DELIVERY_OPTIONS.find(d => d.id === selectedDelivery)?.label || 'Standard';

        const isBuyNow = !!location.state?.buyNowProduct;

        navigate('/payment', {
            state: {
                items,
                address,
                selectedDelivery,
                deliveryLabel,
                subtotal,
                deliveryCost,
                tax,
                total,
                isBuyNow,
            }
        });
    };

    const sharedProps = {
        items,
        isLoading,
        useDefaultAddress,
        setUseDefaultAddress,
        defaultAddress,
        profileLoading,
        newAddress,
        handleNewAddressChange,
        selectedDelivery,
        setSelectedDelivery,
        deliveryOptions: DELIVERY_OPTIONS,
        subtotal,
        deliveryCost,
        tax,
        total,
        handleContinueToPayment,
    };

    return (
        <>
            {isMobile ? <MobileCheckout {...sharedProps} /> : <DesktopCheckout {...sharedProps} />}
        </>
    )
}