import './ProductDetails.css';
import './MobileProductDetails.css';
import { MobileProductDetails } from './MobileProductDetails';
import { DesktopProductDetails } from './DesktopProductDetails';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export function ProductDetailsPage() {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [cartAdding, setCartAdding] = useState(false);
    const [cartSuccess, setCartSuccess] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (!productId) return;

        const loadProduct = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const response = await fetch(`http://localhost:8000/api/products/${productId}/`, {
                    credentials: 'include'
                });
                if (!response.ok) throw new Error('Product not found');
                const data = await response.json();
                setProduct(data);
            } catch (err) {
                console.error("Failed to load product details:", err);
                setError("This masterpiece is currently unavailable. Please verify the URL or explore our other collections.");
            } finally {
                setIsLoading(false);
            }
        };

        loadProduct();
    }, [productId]);

    const handleAddToCart = async () => {
        if (!product) return;
        try {
            setCartAdding(true);
            setCartSuccess(false);
            const response = await fetch('http://localhost:8000/cart/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    product_id: product.product_id,
                    quantity: 1
                })
            });

            if (response.status === 401) {
                alert("Please log in to add items to your collection.");
                navigate('/login');
                return;
            }

            if (!response.ok) {
                throw new Error("Failed to add product to cart");
            }

            setCartSuccess(true);
            setTimeout(() => setCartSuccess(false), 3000);
        } catch (err) {
            console.error("Cart error:", err);
            alert("Could not add item to collection. Please try again.");
        } finally {
            setCartAdding(false);
        }
    };

    const handleBuyNow = () => {
        if (!product) return;
        navigate('/checkout', { state: { buyNowProduct: product } });
    };

    if (isLoading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-background text-on-surface">
                <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
                <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Loading dynamic artifact...</p>
            </div>
        );
    }

    if (error || !product) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-background text-on-surface px-6 text-center">
                <span className="material-symbols-outlined text-6xl text-outline-variant mb-6" style={{ fontVariationSettings: "'wght' 200" }}>sentiment_dissatisfied</span>
                <h2 className="font-headline text-3xl font-bold mb-4 text-primary">Artifact Unavailable</h2>
                <p className="text-on-surface-variant max-w-md mb-8 leading-relaxed">{error || "Product not found."}</p>
                <button onClick={() => navigate('/products')} className="bg-primary text-on-primary py-4 px-10 rounded font-label uppercase tracking-widest text-xs font-bold hover:opacity-90 active:scale-95 transition-all">
                    Back to Collection
                </button>
            </div>
        );
    }

    return (
        <>
            {isMobile ? (
                <MobileProductDetails 
                    product={product} 
                    onAddToCart={handleAddToCart} 
                    onBuyNow={handleBuyNow}
                    cartAdding={cartAdding} 
                    cartSuccess={cartSuccess} 
                />
            ) : (
                <DesktopProductDetails 
                    product={product} 
                    onAddToCart={handleAddToCart} 
                    onBuyNow={handleBuyNow}
                    cartAdding={cartAdding} 
                    cartSuccess={cartSuccess} 
                />
            )}
        </>
    );
}