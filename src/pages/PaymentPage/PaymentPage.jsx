import './PaymentPage.css'
import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { DesktopPayment } from './DesktopPayment'
import { MobilePayment } from './MobilePayment'
import './MobilePayment.css'
import CryptoJS from 'crypto-js'

export function PaymentPage() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
    const location = useLocation();
    const navigate = useNavigate();

    // Order state from checkout
    const checkoutState = location.state;
    const [items, setItems] = useState([]);
    const [subtotal, setSubtotal] = useState(0);
    const [deliveryCost, setDeliveryCost] = useState(0);
    const [tax, setTax] = useState(0);
    const [total, setTotal] = useState(0);
    const [deliveryLabel, setDeliveryLabel] = useState('');
    const [isBuyNow, setIsBuyNow] = useState(false);

    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('credit_card');
    const [placingOrder, setPlacingOrder] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 1024);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (!checkoutState || !checkoutState.items) {
            // Redirect back to cart or checkout if accessed directly without state
            navigate('/cart');
            return;
        }
        setItems(checkoutState.items);
        setSubtotal(checkoutState.subtotal);
        setDeliveryCost(checkoutState.deliveryCost);
        setTax(checkoutState.tax);
        setTotal(checkoutState.total);
        setDeliveryLabel(checkoutState.deliveryLabel || 'Standard Delivery');
        setIsBuyNow(checkoutState.isBuyNow || false);
    }, [checkoutState, navigate]);

    const handlePlaceOrder = async () => {
        if (items.length === 0) return;

        // Build the payload
        // If it's a Buy Now order, send product_id and quantity at the top level
        // If it's from cart, don't send product_id, and the backend handles cart logic
        const payload = {
            payment_method: selectedPaymentMethod,
            address: checkoutState.address
        };

        if (isBuyNow) {
            payload.product_id = items[0].product?.product_id || items[0].product_id;
            payload.quantity = items[0].quantity || 1;
        } else {
            const cartId = sessionStorage.getItem('cart_id');
            if (cartId) {
                payload.cart_id = cartId;
            }
        }

        if (selectedPaymentMethod === 'esewa') {
            // Save payload to localStorage so we can use it after eSewa redirects to success
            localStorage.setItem('pending_esewa_order', JSON.stringify(payload));
            
            const transactionUuid = `TXN-${Date.now()}`;
            const totalAmountStr = total.toFixed(2);
            
            // eSewa HMAC-SHA256 signature generation
            const message = `total_amount=${totalAmountStr},transaction_uuid=${transactionUuid},product_code=EPAYTEST`;
            const secretKey = '8gBm/:&EnhH.1/q'; // eSewa Sandbox Secret
            const hash = CryptoJS.HmacSHA256(message, secretKey);
            const signature = CryptoJS.enc.Base64.stringify(hash);

            // Construct form to submit to eSewa
            const form = document.createElement('form');
            form.setAttribute('method', 'POST');
            form.setAttribute('action', 'https://rc-epay.esewa.com.np/api/epay/main/v2/form');

            const params = {
                amount: subtotal.toFixed(2),
                tax_amount: (tax + deliveryCost).toFixed(2), // adding delivery here to balance total
                total_amount: totalAmountStr,
                transaction_uuid: transactionUuid,
                product_code: 'EPAYTEST',
                product_service_charge: '0',
                product_delivery_charge: '0',
                success_url: `${window.location.origin}/payment/esewa/success`,
                failure_url: `${window.location.origin}/payment/esewa/failure`,
                signed_field_names: 'total_amount,transaction_uuid,product_code',
                signature: signature
            };

            for (const key in params) {
                const hiddenField = document.createElement('input');
                hiddenField.setAttribute('type', 'hidden');
                hiddenField.setAttribute('name', key);
                hiddenField.setAttribute('value', params[key]);
                form.appendChild(hiddenField);
            }

            document.body.appendChild(form);
            form.submit();
            return;
        }

        setPlacingOrder(true);
        try {
            const res = await fetch('http://localhost:8000/order/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify(payload)
            });

            if (!res.ok) {
                throw new Error('Failed to place order');
            }

            await res.json();
            alert('Order placed successfully!');
            navigate('/orders');
        } catch (err) {
            console.error('Order error:', err);
            alert('Could not place order. Please try again.');
        } finally {
            setPlacingOrder(false);
        }
    };

    const sharedProps = {
        items,
        subtotal,
        deliveryCost,
        tax,
        total,
        deliveryLabel,
        selectedPaymentMethod,
        setSelectedPaymentMethod,
        handlePlaceOrder,
        placingOrder
    };

    if (!checkoutState) return null;

    return (
        <>
            {isMobile ? <MobilePayment {...sharedProps} /> : <DesktopPayment {...sharedProps} />}
        </>
    )
}
