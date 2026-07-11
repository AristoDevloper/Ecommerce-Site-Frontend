export function MobileProductDetails({ product, onAddToCart, onBuyNow, cartAdding, cartSuccess }) {
    if (!product) return null;

    const imageUrl = product.images?.[0]?.image_url || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30';
    const categoryName = product.category_name || 'Curated pick';

    return (
        <div className="bg-background text-on-background font-body antialiased mobile-screen">
            
            <main className="pb-32 pt-16">
                {/*  Hero Carousel Section  */}
                <section className="relative w-full aspect-[4/5] bg-surface-container overflow-hidden">
                    <div className="flex h-full w-full overflow-x-auto snap-x snap-mandatory hide-scrollbar">
                        <div className="flex-shrink-0 w-full h-full snap-center">
                            <img alt={product.name} className="w-full h-full object-cover" src={imageUrl} />
                        </div>
                    </div>
                    {/*  Carousel Indicators  */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    </div>
                </section>
                {/*  Product Header  */}
                <section className="px-6 pt-10 pb-6 space-y-4">
                    <div className="flex justify-between items-start">
                        <div className="space-y-1">
                            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-tertiary">{categoryName}</p>
                            <h1 className="text-4xl font-headline tracking-tight text-primary leading-none">{product.name}</h1>
                        </div>
                        <div className="text-right">
                            <p className="text-xl font-headline text-primary">${Number(product.price).toLocaleString()}</p>
                        </div>
                    </div>
                    <p className="text-on-surface-variant font-light text-base leading-relaxed max-w-[90%]">
                        {product.description}
                    </p>
                </section>
                {/*  Provenance & Philosophy (Collapsible)  */}
                <section className="mt-8 space-y-0.5">
                    <div className="bg-surface-container-low px-6 py-5 flex justify-between items-center group cursor-pointer transition-colors hover:bg-surface-container">
                        <span className="text-sm font-bold uppercase tracking-widest text-primary">Provenance &amp; Philosophy</span>
                        <span className="material-symbols-outlined text-primary group-hover:translate-y-1 transition-transform">expand_more</span>
                    </div>
                    <div className="bg-surface-container-low px-6 py-6 border-t border-outline-variant/10">
                        <p className="text-sm leading-relaxed text-on-surface-variant">
                            {product.description}
                        </p>
                    </div>
                    <div className="bg-surface-container-low px-6 py-5 flex justify-between items-center cursor-pointer">
                        <span className="text-sm font-bold uppercase tracking-widest text-primary">Specifications</span>
                        <span className="material-symbols-outlined text-primary">chevron_right</span>
                    </div>
                </section>
                {/*  Curator Perspectives (Horizontal Scroll)  */}
                <section className="mt-16">
                    <div className="px-6 mb-6 flex justify-between items-end">
                        <h2 className="text-2xl font-headline text-primary italic">Curator Perspectives</h2>
                        <span className="text-[10px] uppercase tracking-widest font-bold text-on-surface-variant">4 Entries</span>
                    </div>
                    <div className="flex gap-4 overflow-x-auto px-6 hide-scrollbar">
                        {/*  Review 1  */}
                        <div className="flex-shrink-0 w-72 p-6 bg-surface-container-lowest shadow-sm shadow-slate-900/5 rounded-xl space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full overflow-hidden bg-surface-variant">
                                    <img alt="" className="w-full h-full object-cover" data-alt="Portrait of a sophisticated male interior designer with glasses and a black turtleneck." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvFkgFD7jn2_Y55-QOjmRxa1rg10PjCnCLBV8zt7C1X9imEKyLMAO6wtI2o8TKiLXbnC-4sXZaxtn__UYvFMP4GKUdAmXU6axGNdJg5k6G1UMybZSiaTJbuNtEjYa4pyn2AUhnn1QGtfrFmCCoHDKdZauxttZuq14G4pKiNDOoAwii5JCmkB6m3fyXDthkptrqCiuykYH_dZjocrtEwACzN-Um8qw2rDVQYKjA150E-eLt1DHCVJGF6uswbrWcjqkvHkEzM1vqcDdT" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-primary">Julian Vane</p>
                                    <p className="text-[10px] text-on-surface-variant uppercase tracking-tighter">Architectural Digest</p>
                                </div>
                            </div>
                            <p className="text-sm italic font-headline leading-relaxed text-primary">
                                "The way the light catches the grain of the oak is transformative. It's more of a sculpture than a chair."
                            </p>
                        </div>
                        {/*  Review 2  */}
                        <div className="flex-shrink-0 w-72 p-6 bg-surface-container-lowest shadow-sm shadow-slate-900/5 rounded-xl space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full overflow-hidden bg-surface-variant">
                                    <img alt="" className="w-full h-full object-cover" data-alt="Close up portrait of a stylish woman curator with minimalist jewelry." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbK4AEJrzJgZz7062W4W15DvW_QBq7dOb1FVxaFTpMuemgJ-Q5yBB911nEwzy1n5kU2Bnh3zaloRYgIoEMAb99BvZP0foPEAXIy9fzgkV7nDpXQbaFJoyeAUjhbNN8O6dGvl6k_XHjQxam96lk37yeHxXg7gjkXzDMMefxXn9Qv4BrOPd0lS9fFM_ubnGPjMTV4b2lFaJwfp99jEmKYRZlIJzrszEv2ebDm-zodutNwDWfsMwK0qROpYurK8tyZ0QRH6v1gpEFwNHs" />
                                </div>
                                <div>
                                    <p className="text-xs font-bold text-primary">Elena Ross</p>
                                    <p className="text-[10px] text-on-surface-variant uppercase tracking-tighter">MOMA Curator</p>
                                </div>
                            </div>
                            <p className="text-sm italic font-headline leading-relaxed text-primary">
                                "A rare balance of brutalism and warmth. It commands the room without shouting."
                            </p>
                        </div>
                    </div>
                </section>
                {/*  Complete the Look (Asymmetric Grid)  */}
                <section className="mt-20 px-6">
                    <h2 className="text-xl font-headline text-primary mb-8 text-center tracking-wide">Complete the Look</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-3 pt-8">
                            <div className="aspect-[3/4] bg-surface-container-low rounded-md overflow-hidden">
                                <img alt="" className="w-full h-full object-cover" data-alt="Minimalist ceramic vase with a single dried branch on a stone plinth." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDt6XM0iABa9c6nNkwOQtZZZGv5whzPDq5M5rMfFjXf7bmzfTia0Bd5Kq19TIl5g3jBZfhSlPd_NGOk2rAFscf-v7dCY-4AQzmeC-N_ToK6JCNzVkJ27P74QX9aycQ7PKSdKJFZ5JXmRRtRIPRC4UTMw54ZpNtnrqyIhurZkqBQtUzJZc2I23dk8qWI6AhouatJxawrm5uqAdnNUmVvksxs08goBs7TJWDtHieNIeOOO5dHdbtRUWe8wBcW-aJS6PXsBB3JKoE4PIU" />
                            </div>
                            <div>
                                <p className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">The Vessel</p>
                                <p className="text-sm font-headline">$280</p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div className="aspect-[3/4] bg-surface-container-low rounded-md overflow-hidden">
                                <img alt="" className="w-full h-full object-cover" data-alt="Hand-knotted textured wool rug in cream and slate grey geometric patterns." src="https://lh3.googleusercontent.com/aida-public/AB6AXuApi8FpVD_f_jEseV-UIL0N6ZyEt_NRj-4h21k9-FEWG9SGMWNVDkLBZz2rLglLdiiVXhha0UXga8b3KIUzk9vbBJTbKue2Up3unZOGLePVwOSKUW8skU59KmKn8JzuR0Efsh_XzQ9ChzBQKfm7_EjesHaAiw4fmSOaQw_5B-glX5Lsm5G9RnXcB1f6ncp5BhRVrvmUyVCYBF2a4Y6WHa__T0V_s1C1pyqcWasOSLY1cpW4J8THZIMasQTZ3LJ4oXPauQ3A87xXSdvD" />
                            </div>
                            <div>
                                <p className="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">Observer Rug</p>
                                <p className="text-sm font-headline">$1,200</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <footer className="fixed bottom-0 w-full z-50 p-4 bg-slate-50/90 dark:bg-slate-950/90 backdrop-blur-2xl shadow-[0_-4px_20px_rgba(0,0,0,0.04)]">
                <div className="flex gap-3">
                    <button className="w-12 h-12 flex items-center justify-center bg-surface-container-highest text-primary rounded-lg active:scale-95 transition-transform flex-shrink-0">
                        <span className="material-symbols-outlined">favorite</span>
                    </button>
                    <button 
                        onClick={onAddToCart} 
                        disabled={cartAdding || product.stock <= 0}
                        className="flex-1 h-12 border border-primary text-primary font-bold text-xs tracking-wider uppercase rounded-lg active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {cartAdding ? "Adding..." : cartSuccess ? "Added ✓" : "Add to Cart"}
                    </button>
                    <button 
                        onClick={onBuyNow} 
                        disabled={cartAdding || product.stock <= 0}
                        className="flex-1 h-12 bg-primary text-on-primary font-bold text-xs tracking-wider uppercase rounded-lg active:scale-95 transition-all shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Buy Now
                    </button>
                </div>
            </footer>
            {/*  Bottom Navigation Bar (Hidden on this transactional detail page per hierarchy rule)  */}
        </div>
    )
}