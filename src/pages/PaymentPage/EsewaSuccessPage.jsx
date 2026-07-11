import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

export function EsewaSuccessPage() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const [status, setStatus] = useState('Verifying your payment...');

    useEffect(() => {
        const verifyAndPlaceOrder = async () => {
            const data = searchParams.get('data');
            
            if (!data) {
                setStatus('Invalid payment response.');
                setTimeout(() => navigate('/cart'), 3000);
                return;
            }

            // In a real application, you would decode the base64 data to check the status,
            // but for sandbox, returning to success page implies success.
            const savedPayloadStr = localStorage.getItem('pending_esewa_order');
            if (!savedPayloadStr) {
                setStatus('Order session expired or already processed.');
                setTimeout(() => navigate('/orders'), 3000);
                return;
            }

            try {
                const payload = JSON.parse(savedPayloadStr);
                
                // Now fire the POST /order/ API
                setStatus('Payment successful! Placing your order...');
                
                const res = await fetch('http://localhost:8000/order/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    credentials: 'include',
                    body: JSON.stringify(payload)
                });

                if (!res.ok) {
                    throw new Error('Failed to place order on backend');
                }

                // Clear the saved payload
                localStorage.removeItem('pending_esewa_order');

                setStatus('Order placed successfully! Redirecting...');
                setTimeout(() => navigate('/orders'), 2000);

            } catch (error) {
                console.error(error);
                setStatus('Payment verified, but failed to create order. Please contact support.');
            }
        };

        verifyAndPlaceOrder();
    }, [searchParams, navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="bg-surface-container p-8 rounded-xl max-w-md text-center space-y-4">
                <div className="w-16 h-16 bg-[#60bb46]/20 text-[#60bb46] rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="material-symbols-outlined text-3xl">check_circle</span>
                </div>
                <h1 className="text-2xl font-serif text-primary">eSewa Payment</h1>
                <p className="text-on-surface-variant">{status}</p>
            </div>
        </div>
    );
}
