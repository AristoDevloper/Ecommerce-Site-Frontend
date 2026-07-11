import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function EsewaFailurePage() {
    const navigate = useNavigate();

    useEffect(() => {
        // Clear any pending state
        localStorage.removeItem('pending_esewa_order');
        
        // Redirect back to cart after a short delay
        const timer = setTimeout(() => {
            navigate('/cart');
        }, 4000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="bg-surface-container p-8 rounded-xl max-w-md text-center space-y-4 border border-error/20">
                <div className="w-16 h-16 bg-error/10 text-error rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="material-symbols-outlined text-3xl">error</span>
                </div>
                <h1 className="text-2xl font-serif text-primary">Payment Failed</h1>
                <p className="text-on-surface-variant">Your eSewa transaction could not be completed or was cancelled. Redirecting you back to your cart...</p>
                
                <button 
                    onClick={() => navigate('/cart')}
                    className="mt-6 px-6 py-2 bg-primary text-on-primary rounded text-sm font-bold uppercase tracking-widest"
                >
                    Return to Cart Now
                </button>
            </div>
        </div>
    );
}
