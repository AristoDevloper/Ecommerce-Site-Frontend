import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { API_BASE_URL } from "../../config/api";

export function DesktopHomePage({ isAuthenticated }) {
    const navigate = useNavigate();
    const [shopProducts, setShopProducts] = useState([]);

    useEffect(() => {
        const fetchShopProducts = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/products-api/?limit=3`);
                if (response.ok) {
                    const data = await response.json();
                    const results = Array.isArray(data.results) ? data.results : Array.isArray(data) ? data : [];
                    setShopProducts(results.slice(0, 3));
                }
            } catch (err) {
                console.error("Failed to fetch shop the look products:", err);
            }
        };
        fetchShopProducts();
    }, []);

    return (
        <div className="bg-background text-on-surface font-body selection:bg-primary-fixed selection:text-on-primary-fixed">

            {/*  Main Content  */}
            <main className="pt-0">
                {/*  Hero Section  */}
                <section className="relative h-[921px] w-full flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0">
                        <img className="w-full h-full object-cover" data-alt="Editorial fashion photography of a woman in high-end minimalist silk clothing standing in a sun-drenched architectural space with soft shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcNhrAQxsQHS4n2i0lxpCtiC2FfbvQX12iR4JYxuQ_yCDYepTZm3MYZTX5l3GEZjAOqLWR1ruSmPG--6bmW7_nma528cdfgAgppRf7qx2igkfk1qRQDrWF8OTY0zWSrq3ge8h2Pbu2aTOdel3m5pV65gSM3GgEZwafvTzWf7R0KhT8ld-qxv5jpAVFScrh7kWS1yOlSdld2rAsd5GSdZhGvG8-MgJURke9F814qTiIB-1TEtQZ26N73a0_YomlxWOiHQmzRLZZ_ueu" />
                        <div className="absolute inset-0 hero-gradient"></div>
                    </div>
                    <div className="relative z-10 text-center px-6 max-w-4xl">
                        <span className="manrope-caps text-white mb-6 block tracking-[0.3em] font-medium opacity-90">Spring Summer 2024</span>
                        <h1 className="serif-tight text-6xl md:text-8xl text-white font-bold leading-tight mb-8">Refining the Art of Living</h1>
                        <div className="flex flex-col md:flex-row gap-4 justify-center">
                            <button
                                className="bg-primary text-on-primary px-10 py-4 rounded-lg font-medium manrope-caps hover:scale-[1.02] transition-transform shadow-xl"
                                onClick={() => navigate('/products')}
                            >Shop The Collection</button>
                        </div>
                    </div>
                </section>
                {/*  Trending Now: Bento Grid  */}
                <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
                    <div className="flex justify-between items-end mb-16">
                        <div className="space-y-2">
                            <h2 className="serif-tight text-4xl font-bold">Trending Now</h2>
                            <p className="text-on-surface-variant max-w-md">Our most-coveted pieces curated for the current season's essential wardrobe.</p>
                        </div>
                        <Link to="/products" className="manrope-caps text-xs font-bold text-primary border-b border-primary/20 hover:border-primary transition-colors pb-1">
                            Explore All
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[800px]">
                        {/*  Large Item  */}
                        <div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-low shadow-sm">
                            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Close up of high quality wool coat in charcoal grey with intricate stitching detail against a clean studio background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAthUKhFvHuzlHi4LiKCPRovle941YDywOa09vz1Nd0-7Dirau4Yj7TEEnIU86P9JxEEpiWb25M8C9HRRSPZHJTeMSignNa3T7f7tfiH4-X_6kwO0o1iKvqKnlht0fqB-x7PquZJ5glR_b7KYqbphRANo7V26OMuofaZTOnqQO8On9IHBpnZWbtl3ywAS2Pch7lMiH_vpoZ1JsmY18nklgvmt2ij2UYwXsCz7VfZAtUQpFPGnDAknGxUg2Yj6A-_TcDviBhM7SoFsy7" />
                            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/60 to-transparent text-white">
                                <p className="manrope-caps text-[10px] mb-2 opacity-80">Premium Outerwear</p>
                                <h3 className="serif-tight text-3xl font-bold mb-4">The Sculpted Overcoat</h3>
                                <p className="text-sm font-light max-w-xs mb-6 opacity-90">Hand-finished double-faced wool in an architectural silhouette.</p>
                                <button className="text-xs manrope-caps font-bold border-b border-white pb-1">Shop Now</button>
                            </div>
                        </div>
                        {/*  Tall Item  */}
                        <div className="md:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container-low shadow-sm">
                            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Artistic shot of minimalist leather footwear on a stone pedestal with sharp morning light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASU0N3hjRiuOy0-I8j2S3aryK7cO9XggLfe-NkTev8BlLeNTexuYxWpKqWWGr3d1dI1nskWmgEVYF2ez-kgsFtcMN1bNvxti1mcGAc4nRD_hKGlpIfAj4ufzov8SRyhgoBlamZuKzee8gdHrrPaZ1XM_Q7KmNrw_AEqqBU9yu2aBZ83gw0wvyvIThT79NSl_e0ohnYUT2WzwU9g5cyOLV5Too60W2e2xSQcJuh1uPF0YF-5XctA9C9Os3jBTAYJ5TfpHMM7daIsEgM" />
                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                                <button className="bg-white text-primary px-8 py-3 manrope-caps text-xs font-bold rounded shadow-lg" onClick={() => navigate('/products')}>
                                    View Details
                                </button>
                            </div>
                        </div>
                        {/*  Small Items  */}
                        <div className="md:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container-low shadow-sm h-64 md:h-auto">
                            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Minimalist street style shot of a woman wearing high-waisted linen trousers in soft cream tone" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDCUkR7_xrzoa4PgcVekY0vhaZLnk-xQV7e4Lz5lUyevDnPfjwTByLD4G3dYwI3BHW4aDEUs1QyuMo6SlmUuH8wcfQwOLtSxkHBTUjNhKg-jb-UABezCMOhr-q60vCczAJpZzHrHGzb9kuqSQm5nTGKiGKHQ2ztthNkGumu6MW_B7G-ez1lxG_iXGAoVdxPzD6jFIO3Ubt2gZIWb9zlf9VIpm5QSt-Kj1DpJ0Ri27zBeeptje60lBgjFCYOHS89-89nlDOEvMjP0Q5P" />
                        </div>
                        <div className="md:col-span-8 flex flex-col justify-center items-start p-12 bg-surface-container-high rounded-xl">
                            <span className="text-tertiary manrope-caps font-bold mb-4">Limited Edition</span>
                            <h3 className="serif-tight text-4xl text-primary font-bold mb-6">The Silk Capsule</h3>
                            <p className="text-secondary max-w-lg mb-8 leading-relaxed">Introducing a curated series of 100% mulberry silk essentials, designed to transition effortlessly from morning to evening.</p>
                            <button className="text-primary border border-primary px-8 py-3 manrope-caps text-xs font-bold hover:bg-primary hover:text-white transition-colors" onClick={() => navigate('/products')}>
                                Discover Series
                            </button>
                        </div>
                    </div>
                </section>
                {/*  Shop the Look: Editorial Grid  */}
                <section className="bg-surface-container-low py-24">
                    <div className="px-6 md:px-12 max-w-7xl mx-auto">
                        <div className="text-center mb-20">
                            <h2 className="serif-tight text-5xl font-bold mb-4">Shop The Look</h2>
                            <p className="manrope-caps text-xs tracking-[0.2em] text-on-surface-variant">Editorial Perspectives</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {shopProducts.map((product, index) => {
                                const imageUrl = product.images?.[0]?.image_url || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30';
                                return (
                                    <div key={product.product_id || index} className={`space-y-6 ${index === 1 ? 'md:translate-y-12' : ''}`}>
                                        <div className="aspect-[3/4] overflow-hidden rounded-lg bg-surface-variant cursor-pointer" onClick={() => navigate(`/product/${product.product_id}`)}>
                                            <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" alt={product.name} src={imageUrl} />
                                        </div>
                                        <div className="space-y-4">
                                            <h4 className="serif-tight text-2xl cursor-pointer" onClick={() => navigate(`/product/${product.product_id}`)}>{product.name}</h4>
                                            <div className="space-y-2 border-l border-outline-variant pl-4">
                                                <div className="flex flex-col text-sm">
                                                    <span className="text-on-surface-variant line-clamp-2">{product.description || "A curated piece of exceptional design."}</span>
                                                    <span className="font-bold text-lg mt-2">${Number(product.price).toLocaleString()}</span>
                                                </div>
                                            </div>
                                            <button 
                                                className="w-full py-3 bg-primary text-on-primary manrope-caps text-[10px] font-bold mt-4"
                                                onClick={() => navigate(`/product/${product.product_id}`)}
                                            >
                                                View Details
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                            {shopProducts.length === 0 && (
                                <div className="col-span-3 text-center text-on-surface-variant py-12">
                                    Loading curated looks...
                                </div>
                            )}
                        </div>
                    </div>
                </section>
                {/*  Minimal Newsletter  */}
                {!isAuthenticated && (
                    <section className="py-32 px-6 bg-white border-t border-outline-variant/10">
                        <div className="max-w-2xl mx-auto text-center space-y-8">
                            <span className="material-symbols-outlined text-4xl text-tertiary">mail</span>
                            <h2 className="serif-tight text-4xl font-bold">The Weekly Muse</h2>
                            <p className="text-on-surface-variant leading-relaxed font-light">Join our inner circle for early access to collection drops, editorial stories, and curated lifestyle inspiration.</p>
                            <form className="flex flex-col md:flex-row gap-4 mt-8" onSubmit={(e) => { e.preventDefault(); navigate('/signup'); }}>
                                <input className="flex-1 bg-surface-container border-none focus:ring-1 focus:ring-primary text-sm px-6 py-4 rounded ghost-border" placeholder="Email Address" type="email" />
                                <button className="bg-primary text-on-primary px-10 py-4 manrope-caps text-xs font-bold hover:bg-primary-container transition-colors rounded">Subscribe</button>
                            </form>
                            <p className="text-[10px] text-slate-400 manrope-caps">By subscribing, you agree to our privacy policy. unsubscribe at any time.</p>
                        </div>
                    </section>
                )}
            </main>
            {/*  Footer  */}
            <footer className="w-full py-16 px-6 md:px-12 mt-auto bg-slate-50 border-t border-slate-200/20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
                    <div className="space-y-6">
                        <div className="text-lg font-['Noto_Serif'] italic text-slate-400">CURATED GALLERY</div>
                        <div className="flex gap-8 font-['Manrope'] text-xs tracking-widest uppercase">
                            <a className="text-slate-400 hover:text-slate-900 transition-all hover:underline decoration-slate-300 underline-offset-4" href="#">Sustainability</a>
                        </div>
                    </div>
                    <div className="md:text-right space-y-6">
                        <div className="flex md:justify-end gap-8 font-['Manrope'] text-xs tracking-widest uppercase">
                            <Link className="text-slate-400 hover:text-slate-900 transition-all" to="/terms">Terms & Conditions</Link>
                            <Link className="text-slate-400 hover:text-slate-900 transition-all" to="/privacy">Privacy</Link>
                        </div>
                        <p className="font-['Manrope'] text-xs tracking-widest uppercase text-slate-400 opacity-60">© 2024 CURATED GALLERY. ALL RIGHTS RESERVED.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}