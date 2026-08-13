import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { API_BASE_URL } from "../../config/api";

export function MobileHomePage({ isAuthenticated }) {
    const navigate = useNavigate();
    const [trendingProducts, setTrendingProducts] = useState([]);

    useEffect(() => {
        const fetchTrending = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/products-api/?limit=4`);
                if (response.ok) {
                    const data = await response.json();
                    const results = Array.isArray(data.results) ? data.results : Array.isArray(data) ? data : [];
                    setTrendingProducts(results.slice(0, 4));
                }
            } catch (err) {
                console.error("Failed to fetch trending products:", err);
            }
        };
        fetchTrending();
    }, []);
    return (
        <div className="mobile-screen bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container">

            <main className="pt-16 pb-24">
                {/*  Hero Section  */}
                <section className="relative h-[751px] w-full overflow-hidden flex flex-col justify-end">
                    <div className="absolute inset-0 z-0">
                        <img className="w-full h-full object-cover" data-alt="Luxurious minimalist interior with a single sculptural chair in a sun-drenched room with dramatic shadows and high ceilings" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtYTMUQbK9hNMgg00_EuqA7KUa7RpjZlEvjPRYdv8r3RCuS_iH6x7PWh3rm9saUB-Xtv-Qn3klHFFdFfash-Un5YQ_ZBA-r5OSCD8js_8KHGH1QuR1GFR4Ql1xy4xZ7Ms6tMmfEvC9uO5p20tSmVauuO017H6Df-I3ibmr0F08UugJYbNFQaddiOUTOMqDqrveZF5nh6q_GskV5vFIAm_BTw1H_0yFpYbp0GGNEiHnh6Snt7gSSYCEOAut1kJO8UBq8GNBo-GuuVuy" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                    </div>
                    <div className="relative z-10 p-8 space-y-6">
                        <div className="space-y-2">
                            <span className="text-white/60 text-[10px] uppercase tracking-[0.3em] font-bold">New Arrival — Spring 24</span>
                            <h2 className="text-4xl md:text-5xl font-headline text-white leading-[1.1] italic">The Quiet <br />Authority</h2>
                        </div>
                        <p className="text-white/80 text-sm max-w-[280px] leading-relaxed font-light">
                            Explore our latest curation of architectural furniture and objects of intent.
                        </p>
                        <div className="pt-2">
                            <button 
                                className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-4 rounded-DEFAULT text-xs font-bold uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all"
                                onClick={() => navigate('/products')}
                            >
                                Shop Collection
                            </button>
                        </div>
                    </div>
                </section>
                {/*  Trending Now - Horizontal Scroll  */}
                <section className="py-16 bg-surface">
                    <div className="px-8 mb-8 flex justify-between items-end">
                        <div className="space-y-1">
                            <h3 className="text-2xl font-headline italic">Trending Now</h3>
                            <p className="text-on-surface-variant text-[10px] uppercase tracking-widest">Most sought after pieces</p>
                        </div>
                        <button 
                            className="text-primary text-xs font-bold underline underline-offset-4 decoration-primary/20 hover:decoration-primary transition-all"
                            onClick={() => navigate('/products')}
                        >View All</button>
                    </div>
                    <div className="flex overflow-x-auto gap-6 px-8 hide-scrollbar snap-x snap-mandatory">
                        {trendingProducts.map((product, index) => {
                            const imageUrl = product.images?.[0]?.image_url || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30';
                            const categoryName = product.category_name || 'Curated pick';
                            return (
                                <div key={product.product_id || index} className="min-w-[260px] snap-start group cursor-pointer" onClick={() => navigate(`/product/${product.product_id}`)}>
                                    <div className="relative aspect-[3/4] bg-surface-variant rounded-md overflow-hidden mb-4">
                                        <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={product.name} src={imageUrl} />
                                        {index === 0 && (
                                            <div className="absolute top-3 right-3">
                                                <span className="bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-tighter">NEW</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-xs font-light text-on-surface-variant uppercase tracking-widest">{categoryName}</p>
                                        <h4 className="font-headline text-lg line-clamp-1">{product.name}</h4>
                                        <p className="text-tertiary font-bold text-sm">${Number(product.price).toLocaleString()}</p>
                                    </div>
                                </div>
                            );
                        })}
                        {trendingProducts.length === 0 && (
                            <div className="text-on-surface-variant text-sm py-8">
                                Loading trending pieces...
                            </div>
                        )}
                    </div>
                </section>
                {/*  Featured Product Section  */}
                {trendingProducts.length > 0 && (
                    <section className="py-20 px-8 bg-surface-container-low">
                        <div className="flex flex-col gap-12">
                            <div className="relative group cursor-pointer" onClick={() => navigate(`/product/${trendingProducts[0].product_id}`)}>
                                <div className="aspect-square w-full overflow-hidden rounded-md bg-surface-variant">
                                    <img className="w-full h-full object-cover" alt={trendingProducts[0].name} src={trendingProducts[0].images?.[0]?.image_url || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30'} />
                                </div>
                                <div className="absolute -bottom-6 -right-4 bg-primary p-8 max-w-[200px] shadow-xl">
                                    <span className="text-tertiary-fixed-dim text-[10px] uppercase tracking-[0.2em] font-bold">Featured Piece</span>
                                    <h5 className="text-white font-headline text-xl mt-2 line-clamp-2">{trendingProducts[0].name}</h5>
                                </div>
                            </div>
                            <div className="pt-8 space-y-6">
                                <h3 className="text-3xl font-headline leading-tight italic">Objects of permanence, crafted for the few.</h3>
                                <p className="text-on-surface-variant leading-relaxed font-light text-sm line-clamp-3">
                                    {trendingProducts[0].description || "Our featured series showcases pieces that bridge the gap between utility and fine art."}
                                </p>
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-4 py-4 border-b border-outline-variant/20">
                                        <span className="text-tertiary font-bold">01</span>
                                        <span className="text-sm font-medium tracking-wide uppercase">Exceptional Quality</span>
                                    </div>
                                    <div className="flex items-center gap-4 py-4 border-b border-outline-variant/20">
                                        <span className="text-tertiary font-bold">02</span>
                                        <span className="text-sm font-medium tracking-wide uppercase">Curated Selection</span>
                                    </div>
                                    <div className="flex items-center gap-4 py-4">
                                        <span className="text-tertiary font-bold">03</span>
                                        <span className="text-sm font-medium tracking-wide uppercase">Available Now</span>
                                    </div>
                                </div>
                                <button 
                                    className="w-full border border-primary text-primary py-4 rounded-DEFAULT text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all"
                                    onClick={() => navigate(`/product/${trendingProducts[0].product_id}`)}
                                >
                                    View Details
                                </button>
                            </div>
                        </div>
                    </section>
                )}
                {/*  Newsletter Subscription  */}
                {!isAuthenticated && (
                    <section className="py-24 px-8 text-center bg-primary text-on-primary">
                        <div className="max-w-md mx-auto space-y-8">
                            <div className="space-y-4">
                                <h3 className="text-3xl font-headline italic">Join the Connoisseurs</h3>
                                <p className="text-white/60 text-sm font-light leading-relaxed">
                                    Weekly insights into curated living, exclusive collection previews, and invitations to private gallery events.
                                </p>
                            </div>
                            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); navigate('/signup'); }}>
                                <div className="relative">
                                    <input className="w-full bg-transparent border-b border-white/20 py-4 text-sm focus:border-white focus:ring-0 placeholder:text-white/30 transition-all outline-none" placeholder="Email Address" type="email" />
                                </div>
                                <button className="w-full py-4 bg-tertiary text-on-tertiary text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-tertiary-fixed transition-colors" type="submit">
                                    Subscribe
                                </button>
                            </form>
                            <p className="text-[10px] text-white/40 uppercase tracking-widest font-medium">
                                Unsubscribe at any time. Privacy is luxury.
                            </p>
                        </div>
                    </section>
                )}
            </main>
            
            <footer className="w-full py-10 px-8 bg-surface-container-low border-t border-outline-variant/20 text-center">
                <div className="flex justify-center gap-6 mb-6 font-label text-[10px] tracking-widest uppercase">
                    <Link to="/terms" className="text-on-surface-variant hover:text-primary transition-colors">Terms & Conditions</Link>
                    <Link to="/privacy" className="text-on-surface-variant hover:text-primary transition-colors">Privacy Policy</Link>
                </div>
                <p className="text-[10px] tracking-widest uppercase text-on-surface-variant/60">
                    © 2024 CURATED GALLERY.<br/>ALL RIGHTS RESERVED.
                </p>
            </footer>

        </div>
    )
}

