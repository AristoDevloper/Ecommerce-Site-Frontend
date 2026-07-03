import { Link } from 'react-router-dom';

export function DesktopShoppingCartPage({ cartItems = [] }) {
    return (
        <div className="bg-background text-on-surface min-h-screen flex flex-col">
            
            <main className="flex-grow pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full">
                
                {cartItems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-32 text-center">
                        <span className="material-symbols-outlined text-6xl text-outline-variant mb-6" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200" }}>shopping_bag</span>
                        <h2 className="serif-heading text-3xl font-bold text-primary mb-4">Your Private Collection is Empty</h2>
                        <p className="text-on-surface-variant max-w-md mx-auto mb-10 leading-relaxed">
                            You haven't added any artifacts to your cart yet. Explore our curated selections to find your next masterpiece.
                        </p>
                        <Link to="/" className="bg-gradient-to-r from-primary to-primary-container text-on-primary py-4 px-10 rounded font-label uppercase tracking-widest text-xs font-bold hover:opacity-90 transition-all active:scale-95 shadow-lg">
                            Explore Collection
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        {/* Left Column: Items */}
                        <div className="lg:col-span-8 space-y-12">
                            {/* Artifact 1 */}
                            <div className="group flex flex-col md:flex-row gap-8 pb-12">
                                <div className="w-full md:w-48 aspect-[3/4] bg-surface-container-low rounded-md overflow-hidden relative">
                                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Minimalist alabaster sculpture with smooth organic curves sitting on a dark wooden plinth in soft morning light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCta2F7uu6qts3E0JeNKJ9w08fvxqXvYPF0A3MMbfKVwRDarUaeSYmk_n1jm7hC2ol-vsi2NwhrCT--bklVpLfWc1Y_Kr_zmBZHk2LNjQjWpvdegGYqk9TwhMqBRtrT1OXhtz04vCZx_BgOxmZfgStAKHZEb3zKRvvsREWwI5g-Lfst8odkgUcFfnL8ppJzP3JA8e5dJ4WgpVLmZnGw0mcLQC4mntnNofJDthQ0QSrYYhWi9yRFns5f-nrU_TPdK_Jr-g4QMC6oe-Ve" alt="Alabaster Form" />
                                </div>
                                <div className="flex-grow flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-between items-start">
                                            <h3 className="serif-heading text-2xl font-bold text-primary">Alabaster Form № 04</h3>
                                            <p className="text-xl font-medium text-primary">$1,200</p>
                                        </div>
                                        <p className="text-on-surface-variant mt-2 max-w-md leading-relaxed">Hand-carved mineral stone sculpture. A study of light and negative space.</p>
                                        <p className="text-xs font-label uppercase tracking-widest text-secondary mt-4">Edition: 1 of 12</p>
                                    </div>
                                    <div className="flex items-center justify-between mt-8">
                                        <div className="flex items-center ghost-border rounded px-2 py-1">
                                            <button className="p-1 hover:text-primary transition-colors"><span className="material-symbols-outlined text-sm">remove</span></button>
                                            <span className="px-4 text-sm font-medium">1</span>
                                            <button className="p-1 hover:text-primary transition-colors"><span className="material-symbols-outlined text-sm">add</span></button>
                                        </div>
                                        <button className="text-xs font-label uppercase tracking-widest text-outline hover:text-error transition-colors flex items-center gap-1">
                                            <span className="material-symbols-outlined text-base">close</span> Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* Artifact 2 */}
                            <div className="group flex flex-col md:flex-row gap-8 pb-12">
                                <div className="w-full md:w-48 aspect-[3/4] bg-surface-container-low rounded-md overflow-hidden relative">
                                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Hand-thrown ceramic vase with a matte charcoal glaze and subtle gold leaf repair along the rim" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCj2lMszUHFAX_oOTd3UbUAIv6Adlm5mg1R_84ATqIKA3MAT4ENh_a5KhmeeIn5atDtcS6hsg3CKIRFbWraKDIDxgq4bI-EMHfnFqi6lzPykEGtn0_C0mVUr5sOTLPHtvIvPJewwlaq30yLR8-yhBQHbqLaCTV3qDB_bM_y_YItZZzrZHuDLuUB-TYVAy418p5gLF-04z56s0adJhQjzII0Tav5EV9m-cgt7AXGigUzxWuMGHs0GRNSGazyxFVXl8iqQvjPrwR26RX_" alt="Obsidian Vessel" />
                                </div>
                                <div className="flex-grow flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-between items-start">
                                            <h3 className="serif-heading text-2xl font-bold text-primary">Obsidian Vessel</h3>
                                            <p className="text-xl font-medium text-primary">$850</p>
                                        </div>
                                        <p className="text-on-surface-variant mt-2 max-w-md leading-relaxed">High-fire stoneware with a reactive metallic glaze. Part of the Nocturne Collection.</p>
                                        <p className="text-xs font-label uppercase tracking-widest text-secondary mt-4">Size: Large (42cm)</p>
                                    </div>
                                    <div className="flex items-center justify-between mt-8">
                                        <div className="flex items-center ghost-border rounded px-2 py-1">
                                            <button className="p-1 hover:text-primary transition-colors"><span className="material-symbols-outlined text-sm">remove</span></button>
                                            <span className="px-4 text-sm font-medium">1</span>
                                            <button className="p-1 hover:text-primary transition-colors"><span className="material-symbols-outlined text-sm">add</span></button>
                                        </div>
                                        <button className="text-xs font-label uppercase tracking-widest text-outline hover:text-error transition-colors flex items-center gap-1">
                                            <span className="material-symbols-outlined text-base">close</span> Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* Artifact 3 */}
                            <div className="group flex flex-col md:flex-row gap-8 pb-12">
                                <div className="w-full md:w-48 aspect-[3/4] bg-surface-container-low rounded-md overflow-hidden relative">
                                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Monochrome textured oil painting on linen with heavy impasto strokes in cream and beige tones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUZHY2RZUhfvvOy8NYyo7Z_1OIVrwHG4yN53gcJphr-8I8Qw4GmHEKpQjLWvC28F9C7c5cRKeg4CXeGCAzJqBcoVpgEqjloIib_1TvWX0NVpmhYKLCAw2T-lKq-aFJ8wvWNdH2j6rY6Ek0hZV3zoV2S4hzip2kNNL5fIjLSytOUmjvjLM9eLq5YxRWRZnI3FnfdTsPATk1p6JHK58kBJBRbdsmhpoMJrpNZR143ewEkFMv55ZAibc6W1Uz0vw1SnxYlGpeBXR7YZUr" alt="Texture Study III" />
                                </div>
                                <div className="flex-grow flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-between items-start">
                                            <h3 className="serif-heading text-2xl font-bold text-primary">Texture Study III</h3>
                                            <p className="text-xl font-medium text-primary">$3,400</p>
                                        </div>
                                        <p className="text-on-surface-variant mt-2 max-w-md leading-relaxed">Original oil on Belgian linen. Explores the tactile nature of white pigments.</p>
                                        <p className="text-xs font-label uppercase tracking-widest text-secondary mt-4">Frame: Natural Oak</p>
                                    </div>
                                    <div className="flex items-center justify-between mt-8">
                                        <div className="flex items-center ghost-border rounded px-2 py-1">
                                            <button className="p-1 hover:text-primary transition-colors"><span className="material-symbols-outlined text-sm">remove</span></button>
                                            <span className="px-4 text-sm font-medium">1</span>
                                            <button className="p-1 hover:text-primary transition-colors"><span className="material-symbols-outlined text-sm">add</span></button>
                                        </div>
                                        <button className="text-xs font-label uppercase tracking-widest text-outline hover:text-error transition-colors flex items-center gap-1">
                                            <span className="material-symbols-outlined text-base">close</span> Remove
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Right Column: Summary */}
                        <div className="lg:col-span-4">
                            <div className="bg-surface-container-lowest p-8 rounded-lg shadow-sm sticky top-32">
                                <h2 className="serif-heading text-2xl font-bold text-primary mb-8">Summary</h2>
                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-on-surface-variant font-label uppercase tracking-widest">Subtotal</span>
                                        <span className="text-primary font-medium">$5,450.00</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-on-surface-variant font-label uppercase tracking-widest">Shipping</span>
                                        <span className="text-primary font-medium">Calculated at checkout</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-on-surface-variant font-label uppercase tracking-widest">Estimated Tax</span>
                                        <span className="text-primary font-medium">$0.00</span>
                                    </div>
                                    <div className="pt-6 mt-6 border-t border-outline-variant/20">
                                        <div className="flex justify-between items-center">
                                            <span className="serif-heading text-lg font-bold text-primary">Total</span>
                                            <span className="serif-heading text-xl font-bold text-primary">$5,450.00</span>
                                        </div>
                                    </div>
                                </div>
                                <button className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary py-4 rounded font-label uppercase tracking-widest text-xs font-bold hover:opacity-90 transition-all active:scale-95 shadow-lg">
                                    Proceed to Checkout
                                </button>
                                <div className="mt-8 space-y-4">
                                    <div className="flex gap-4 items-start text-xs text-on-surface-variant">
                                        <span className="material-symbols-outlined text-tertiary">verified_user</span>
                                        <p>Authenticity guaranteed for all original artifacts and limited editions.</p>
                                    </div>
                                    <div className="flex gap-4 items-start text-xs text-on-surface-variant">
                                        <span className="material-symbols-outlined text-tertiary">local_shipping</span>
                                        <p>Insured white-glove delivery available for all international shipments.</p>
                                    </div>
                                </div>
                                <div className="mt-12">
                                    <p className="text-[10px] font-label uppercase tracking-widest text-outline text-center">We Accept</p>
                                    <div className="flex justify-center gap-4 mt-4 opacity-40 grayscale">
                                        <span className="material-symbols-outlined">payments</span>
                                        <span className="material-symbols-outlined">account_balance_wallet</span>
                                        <span className="material-symbols-outlined">credit_card</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>
            {/* Footer */}
            <footer className="w-full py-16 px-6 md:px-12 mt-auto bg-slate-50 dark:bg-slate-900 border-t border-slate-200/20 dark:border-slate-800/20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <div className="text-lg font-['Noto_Serif'] italic text-slate-400">Curated Gallery</div>
                        <p className="font-['Manrope'] text-xs tracking-widest uppercase text-slate-400 dark:text-slate-500">© 2024 CURATED GALLERY. ALL RIGHTS RESERVED.</p>
                    </div>
                    <div className="flex flex-wrap gap-x-8 gap-y-4 md:justify-end font-['Manrope'] text-xs tracking-widest uppercase">
                        <a className="text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-50 hover:underline decoration-slate-300 underline-offset-4 transition-all" href="#">Sustainability</a>
                        <a className="text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-50 hover:underline decoration-slate-300 underline-offset-4 transition-all" href="#">Shipping</a>
                        <a className="text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-50 hover:underline decoration-slate-300 underline-offset-4 transition-all" href="#">Returns</a>
                        <a className="text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-50 hover:underline decoration-slate-300 underline-offset-4 transition-all" href="#">Contact</a>
                        <a className="text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-50 hover:underline decoration-slate-300 underline-offset-4 transition-all" href="#">Privacy</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
