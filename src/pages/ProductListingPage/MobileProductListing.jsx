import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function MobileProductListing() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setLoading(true);
                const response = await fetch('http://localhost:8000/products-api/');
                if (!response.ok) {
                    throw new Error('Failed to fetch products');
                }
                const data = await response.json();
                const items = Array.isArray(data.results) ? data.results : Array.isArray(data) ? data : [];
                setProducts(items);
            } catch (err) {
                console.error(err);
                setError('Unable to load products.');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="bg-background text-on-background font-body select-none mobile-screen">
            <main className="pt-20 pb-24 px-4 max-w-md mx-auto">
                {/*  Editorial Header  */}
                <section className="mb-10 text-center">
                    <span className="font-label text-[10px] uppercase tracking-[0.2em] text-tertiary mb-2 block font-extrabold">Autumn / Winter '24</span>
                    <h1 className="font-headline text-4xl tracking-tight text-primary italic">The Curated Gallery</h1>
                    <p className="text-sm font-light text-on-surface-variant mt-3 px-8 leading-relaxed">A meticulous selection of artifacts designed for the contemporary connoisseur.</p>
                </section>
                {/*  Filters & Sorting  */}
                <div className="flex items-center justify-between mb-8 sticky top-[64px] z-40 bg-background/95 backdrop-blur-sm py-4">
                    <button className="flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-lg active:scale-95 transition-transform">
                        <span className="material-symbols-outlined text-sm" data-icon="tune">tune</span>
                        <span className="font-label text-xs uppercase font-bold tracking-wider">Refine</span>
                    </button>
                    <div className="flex items-center gap-4">
                        <span className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest">{products.length} Items</span>
                    </div>
                </div>
                {/*  Product Grid  */}
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20">
                        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
                        <p className="text-xs uppercase tracking-widest text-on-surface-variant">Loading collection...</p>
                    </div>
                ) : error ? (
                    <div className="text-center py-10 text-sm text-on-surface-variant">{error}</div>
                ) : (
                    <div className="grid grid-cols-1 gap-12">
                        {products.map((product) => {
                            const imageUrl = product.images?.[0]?.image_url || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30';
                            const categoryName = product.category_name || 'Curated pick';
                            return (
                                <div 
                                    key={product.product_id || product.id} 
                                    className="relative group cursor-pointer"
                                    onClick={() => navigate(`/product/${product.product_id}`)}
                                >
                                    <div className="aspect-[4/5] bg-surface-variant rounded-md overflow-hidden mb-4 relative">
                                        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={product.name} src={imageUrl} />
                                    </div>
                                    <div className="flex flex-col items-center text-center px-4">
                                        <h2 className="font-headline text-2xl text-primary italic leading-tight">{product.name}</h2>
                                        <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mt-1">{categoryName}</span>
                                        <div className="mt-4 flex items-center gap-3">
                                            <span className="font-label text-sm font-bold text-primary">${Number(product.price).toLocaleString()}</span>
                                            <div className="h-[1px] w-8 bg-outline-variant/30"></div>
                                            <button className="text-[10px] uppercase font-bold tracking-wider underline underline-offset-4 hover:text-tertiary transition-colors">Details</button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </main>
            {/*  Contextual Quick Action (Only on top-level listing)  */}
            <div className="fixed bottom-24 right-6 z-40">
                <button className="bg-primary-container text-on-primary-container w-14 h-14 rounded-full flex items-center justify-center shadow-2xl shadow-primary/40 backdrop-blur-md bg-opacity-95 active:scale-90 transition-transform" onClick={() => navigate('/conversations')}>
                    <span className="material-symbols-outlined" data-icon="chat_bubble" style={{ fontVariationSettings: "'FILL' 1" }}>chat_bubble</span>
                </button>
            </div>
        </div>
    );
}