export function DesktopPayment() {
    return (
        <div className="bg-background text-on-surface">
            <header className="bg-white/80 backdrop-blur-xl sticky top-0 z-50 shadow-sm">
                <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
                    <div className="text-2xl font-serif tracking-tight text-slate-900">ETHOS CURATED</div>
                    <nav className="hidden md:flex items-center space-x-12">
                        <a className="text-slate-500 hover:text-slate-900 transition-opacity duration-300" href="#">Collections</a>
                        <a className="text-slate-500 hover:text-slate-900 transition-opacity duration-300" href="#">About</a>
                        <a className="text-slate-500 hover:text-slate-900 transition-opacity duration-300" href="#">Support</a>
                    </nav>
                    <div className="flex items-center space-x-6">
                        <span className="material-symbols-outlined cursor-pointer hover:opacity-70 transition-opacity">favorite</span>
                        <span className="material-symbols-outlined cursor-pointer hover:opacity-70 transition-opacity">shopping_bag</span>
                        <span className="material-symbols-outlined cursor-pointer hover:opacity-70 transition-opacity">account_circle</span>
                    </div>
                </div>
            </header>
            <main className="max-w-screen-2xl mx-auto px-8 py-12 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    <section className="lg:col-span-7 space-y-12">
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-5xl font-serif tracking-tight">Finalize Transaction</h1>
                            <p className="text-on-surface-variant font-light max-w-lg">Your artifacts are held for 15 minutes. Secure payment processed via encrypted gateway.</p>
                        </div>
                        <div className="space-y-6">
                            <div className="flex items-center gap-4 text-xs font-bold tracking-widest uppercase text-on-surface-variant opacity-60">
                                <span>Express Checkout</span>
                                <div className="h-px flex-1 bg-outline-variant opacity-20"></div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <button className="flex items-center justify-center gap-2 py-4 bg-black text-white rounded-lg hover:opacity-90 transition-opacity">
                                    <span className="text-sm font-semibold">Apple Pay</span>
                                </button>
                                <button className="flex items-center justify-center gap-2 py-4 bg-[#ffc439] text-[#003087] rounded-lg hover:opacity-90 transition-opacity">
                                    <span className="text-sm font-extrabold italic">PayPal</span>
                                </button>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div className="flex items-center gap-4 text-xs font-bold tracking-widest uppercase text-on-surface-variant opacity-60">
                                <span>Card Details</span>
                                <div className="h-px flex-1 bg-outline-variant opacity-20"></div>
                            </div>
                            <form className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold tracking-wider text-on-surface uppercase" for="cardholder">Cardholder Name</label>
                                    <input className="w-full bg-surface-container-lowest ghost-border px-4 py-4 focus-ring transition-all" id="cardholder" placeholder="Enter full name" type="text" />
                                </div>
                                <div className="space-y-2 relative">
                                    <label className="text-xs font-bold tracking-wider text-on-surface uppercase" for="cardnumber">Card Number</label>
                                    <input className="w-full bg-surface-container-lowest ghost-border px-4 py-4 focus-ring transition-all" id="cardnumber" placeholder="0000 0000 0000 0000" type="text" />
                                    <div className="absolute right-4 bottom-4 flex gap-2">
                                        <span className="material-symbols-outlined text-on-surface-variant opacity-40">credit_card</span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold tracking-wider text-on-surface uppercase" for="expiry">Expiry Date</label>
                                        <input className="w-full bg-surface-container-lowest ghost-border px-4 py-4 focus-ring transition-all" id="expiry" placeholder="MM/YY" type="text" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold tracking-wider text-on-surface uppercase" for="cvc">CVC</label>
                                        <input className="w-full bg-surface-container-lowest ghost-border px-4 py-4 focus-ring transition-all" id="cvc" placeholder="***" type="text" />
                                    </div>
                                </div>
                                <div className="pt-8 flex flex-col gap-6">
                                    <button className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary py-5 rounded-lg text-sm font-bold tracking-widest uppercase shadow-lg shadow-primary/10 hover:opacity-95 transition-all">
                                        Authorize Payment — $1,420.00
                                    </button>
                                    <div className="flex items-center justify-center gap-2 text-on-surface-variant text-xs">
                                        <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
                                        <span>SSL Encrypted Transaction. Payment information is never stored.</span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>
                    <aside className="lg:col-span-5 bg-surface-container-low p-8 md:p-12 rounded-xl sticky top-32">
                        <h2 className="text-2xl font-serif mb-8 border-b border-outline-variant/20 pb-4">Order Summary</h2>
                        <div className="space-y-8 mb-12">
                            <div className="flex gap-6">
                                <div className="w-24 h-32 bg-surface-variant rounded-md overflow-hidden flex-shrink-0">
                                    <img alt="Watch" className="w-full h-full object-cover" data-alt="Minimalist luxury white ceramic watch with silver details on a clean studio background with soft lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZS6vbzTl8FUlWfGRFSro115DNtPEuGHOaG2bRpOdteqtctIX-xYaB_sgh8gTTYYKMYky2gUXOI-dderMRcx17X35f-4yqUZCihbSl1OF0utT989aXUUy_r9SxahXUJ_aONIGS2bqFuuArha1IDuA2NoqHIMDiz-_OJc6At0y9k3TikkGnVbM8ErPe9rPsq3r88_ASfsyhLH_k7oIwsRdf27XN16jpXXsLWpVkj_ubJP2Cty5QGpm8S1LsAy48ILmJO0nTDArOCtPb" />
                                </div>
                                <div className="flex flex-col justify-between py-1">
                                    <div>
                                        <p className="text-xs text-tertiary-container font-bold tracking-widest uppercase mb-1">Timepiece</p>
                                        <h3 className="text-lg font-serif">Aethelred Chrono</h3>
                                        <p className="text-sm text-on-surface-variant">Silver / Italian Leather</p>
                                    </div>
                                    <p className="font-bold text-primary">$850.00</p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="w-24 h-32 bg-surface-variant rounded-md overflow-hidden flex-shrink-0">
                                    <img alt="Stool" className="w-full h-full object-cover" data-alt="Handcrafted dark green velvet designer stool with matte gold legs in a high-end interior setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAG8xRRyOmeHxynck93_vf7wTblOesHiDrFfdEvwUO8BdkS1Eql8x6c035me6dM6GRu8x6TUQTM9H37nJWq2uYwBVZgCikT-wi6gPXmxthokXkmpjDVD5yxsNFd84EfqeT8C8_jmLPJITyAVPXELk6oC-ekZjA76khrSre0p-mFjP9x_Bv74UckSWCVqAgdtELCiXr6C4cAPxZdS4grG5NOs0YRK414tKHlzlRli7gwIu9ukUlbGE1WfRpux8unYa3yC8aPjeKk6ph2" />
                                </div>
                                <div className="flex flex-col justify-between py-1">
                                    <div>
                                        <p className="text-xs text-tertiary-container font-bold tracking-widest uppercase mb-1">Furniture</p>
                                        <h3 className="text-lg font-serif">Velvet Plinth Stool</h3>
                                        <p className="text-sm text-on-surface-variant">Sage / Brushed Brass</p>
                                    </div>
                                    <p className="font-bold text-primary">$570.00</p>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4 border-t border-outline-variant/20 pt-8">
                            <div className="flex justify-between text-sm text-on-surface-variant">
                                <span>Subtotal</span>
                                <span>$1,420.00</span>
                            </div>
                            <div className="flex justify-between text-sm text-on-surface-variant">
                                <span>Shipping (Priority)</span>
                                <span className="text-tertiary font-bold">Complimentary</span>
                            </div>
                            <div className="flex justify-between text-lg font-bold text-primary pt-4">
                                <span>Total</span>
                                <span>$1,420.00</span>
                            </div>
                        </div>
                        <div className="mt-12 grid grid-cols-3 gap-4">
                            <div className="flex flex-col items-center gap-2 opacity-40">
                                <span className="material-symbols-outlined text-2xl">verified</span>
                                <span className="text-[10px] font-bold uppercase tracking-tighter">Verified</span>
                            </div>
                            <div className="flex flex-col items-center gap-2 opacity-40">
                                <span className="material-symbols-outlined text-2xl">shield</span>
                                <span className="text-[10px] font-bold uppercase tracking-tighter">Secure</span>
                            </div>
                            <div className="flex flex-col items-center gap-2 opacity-40">
                                <span className="material-symbols-outlined text-2xl">eco</span>
                                <span className="text-[10px] font-bold uppercase tracking-tighter">Ethical</span>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
            <footer className="bg-slate-50 py-16 mt-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 px-8 max-w-screen-2xl mx-auto">
                    <div className="col-span-2 md:col-span-1 space-y-4">
                        <div className="text-xl font-serif text-slate-900">ETHOS CURATED</div>
                        <p className="text-xs text-slate-500 leading-relaxed uppercase tracking-widest">Defined by rarity.<br />Guided by craft.</p>
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-serif text-sm">Services</h4>
                        <nav className="flex flex-col space-y-2 text-sm text-slate-500">
                            <a className="hover:text-amber-700 transition-colors" href="#">Shipping &amp; Delivery</a>
                            <a className="hover:text-amber-700 transition-colors" href="#">Secure Payment</a>
                            <a className="hover:text-amber-700 transition-colors" href="#">Tracking</a>
                        </nav>
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-serif text-sm">Company</h4>
                        <nav className="flex flex-col space-y-2 text-sm text-slate-500">
                            <a className="hover:text-amber-700 transition-colors" href="#">Brand Story</a>
                            <a className="hover:text-amber-700 transition-colors" href="#">FAQ</a>
                            <a className="hover:text-amber-700 transition-colors" href="#">Contact</a>
                        </nav>
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-serif text-sm">Registry</h4>
                        <p className="text-xs text-slate-500">Subscribe for early access to curated drops.</p>
                        <div className="flex border-b border-slate-300 py-2">
                            <input className="bg-transparent text-xs w-full focus:outline-none" placeholder="email@example.com" type="email" />
                            <button className="material-symbols-outlined text-slate-400">arrow_forward</button>
                        </div>
                    </div>
                </div>
                <div className="max-w-screen-2xl mx-auto px-8 mt-16 pt-8 border-t border-slate-200">
                    <p className="text-[10px] font-bold tracking-[0.2em] text-slate-400">© 2024 ETHOS CURATED. ALL ARTIFACTS RESERVED.</p>
                </div>
            </footer>
        </div>
    )
}