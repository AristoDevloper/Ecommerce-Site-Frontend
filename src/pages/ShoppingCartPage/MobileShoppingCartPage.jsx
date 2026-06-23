export function MobileShoppingCartPage() {
    return (
        <div className="bg-background text-on-background font-body min-h-screen pb-32 mobile-screen">
            {/* TopAppBar */}
            <header className="fixed top-0 w-full z-50 bg-slate-50/80 backdrop-blur-xl flex justify-between items-center px-6 h-16 shadow-sm shadow-slate-900/5">
                <button className="hover:opacity-70 transition-opacity active:scale-95 duration-150 text-slate-900">
                    <span className="material-symbols-outlined">menu</span>
                </button>
                <h1 className="text-2xl font-serif tracking-widest text-slate-900">ETHOS</h1>
                <button className="hover:opacity-70 transition-opacity active:scale-95 duration-150 text-slate-900 relative">
                    <span className="material-symbols-outlined">shopping_bag</span>
                    <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">3</span>
                </button>
            </header>
            <main className="pt-24 px-6 max-w-md mx-auto">
                {/* Editorial Header */}
                <div className="mb-12">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant block mb-2">Shopping Bag</span>
                    <h2 className="text-4xl font-headline tracking-tight text-primary leading-tight">Your Bag.</h2>
                </div>
                {/* Cart Items List */}
                <div className="space-y-8">
                    {/* Item 1 */}
                    <div className="flex gap-6 items-start group">
                        <div className="w-32 aspect-[3/4] bg-surface-variant rounded-md overflow-hidden flex-shrink-0">
                            <img className="w-full h-full object-cover grayscale-[0.2] group-hover:scale-105 transition-transform duration-700" data-alt="minimalist sculptural glass vase on a linen cloth with soft morning shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUguxqaN1SPe1PIgiYn6DIdxxfIpwbbvm1BCjpgjUg7xaTclvLIdZKIxnns6-7H1tnv_Wo30zKHo_Fk-O-U0NjT8leJyr6lv9GHPniFM0OAw56HzidAwSbHG4WWR-g2tTJGt2Elsi0bZs-ek-IayGKv_X6xIb9rdjcUH0QkMypM5JXlWnHwbsCZRAvAtutuuPnaO7oSott6HiJnNn_Swn4-JNzaFCA1DwAcFRLqfSXdTRaPX5XoYYbJz6PTzQ9ACPzs9UzjzH8GJBd" alt="Orbital Vase" />
                        </div>
                        <div className="flex flex-col justify-between h-32 flex-grow">
                            <div>
                                <div className="flex justify-between items-start">
                                    <h3 className="text-lg font-headline italic text-primary">Orbital Vase</h3>
                                    <button className="text-on-surface-variant/40 hover:text-error transition-colors">
                                        <span className="material-symbols-outlined text-sm">close</span>
                                    </button>
                                </div>
                                <p className="text-[10px] uppercase tracking-widest text-tertiary mt-1">Hand-Blown Glass</p>
                                <p className="text-sm text-on-surface-variant mt-2">Clear / Large</p>
                            </div>
                            <div className="flex justify-between items-end">
                                <div className="flex items-center gap-4 bg-surface-container-low px-3 py-1 rounded-sm">
                                    <button className="text-xs text-on-surface-variant hover:text-primary">-</button>
                                    <span className="text-xs font-bold">1</span>
                                    <button className="text-xs text-on-surface-variant hover:text-primary">+</button>
                                </div>
                                <span className="text-sm font-bold text-primary">$240.00</span>
                            </div>
                        </div>
                    </div>
                    {/* Item 2 */}
                    <div className="flex gap-6 items-start group">
                        <div className="w-32 aspect-[3/4] bg-surface-variant rounded-md overflow-hidden flex-shrink-0">
                            <img className="w-full h-full object-cover grayscale-[0.2] group-hover:scale-105 transition-transform duration-700" data-alt="premium organic cotton lounge chair with wooden frame in a bright minimalist gallery setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcrVqbrCWz2SG1ampUlfM7APYeJO9gLehgrGZpzhxt4QwlPIOzmmJXIfhuE2S34sNq4Yr0hqTbDfFzGuriYRxR4cCR5bdyZgnzp8JYy4hmrYE5ejZEaNh0IBk8vQjsh1k1kg47-nP7DEtFRBaEQ6EnfG7lCRv7XaQ0cnGA8ozjEDEPI37zJgpYc0gbyNc1LtPkrwwyUUZbC19zi_LNXUKMksAeLOycaAt2tzW8Ixd6Acv7IiftL67t-7HebQf2xyx9EXJrrd7OSONq" alt="Sable Lounge" />
                        </div>
                        <div className="flex flex-col justify-between h-32 flex-grow">
                            <div>
                                <div className="flex justify-between items-start">
                                    <h3 className="text-lg font-headline italic text-primary">Sable Lounge</h3>
                                    <button className="text-on-surface-variant/40 hover:text-error transition-colors">
                                        <span className="material-symbols-outlined text-sm">close</span>
                                    </button>
                                </div>
                                <p className="text-[10px] uppercase tracking-widest text-tertiary mt-1">Natural Oak</p>
                                <p className="text-sm text-on-surface-variant mt-2">Sand / Standard</p>
                            </div>
                            <div className="flex justify-between items-end">
                                <div className="flex items-center gap-4 bg-surface-container-low px-3 py-1 rounded-sm">
                                    <button className="text-xs text-on-surface-variant hover:text-primary">-</button>
                                    <span className="text-xs font-bold">1</span>
                                    <button className="text-xs text-on-surface-variant hover:text-primary">+</button>
                                </div>
                                <span className="text-sm font-bold text-primary">$1,850.00</span>
                            </div>
                        </div>
                    </div>
                    {/* Item 3 */}
                    <div className="flex gap-6 items-start group">
                        <div className="w-32 aspect-[3/4] bg-surface-variant rounded-md overflow-hidden flex-shrink-0">
                            <img className="w-full h-full object-cover grayscale-[0.2] group-hover:scale-105 transition-transform duration-700" data-alt="abstract textured ceramic candle holder with a single lit candle in a moody dark room" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDflHR4PirucveJAOzPVpWdHpSH9zz67m_Pr9qKTIyTmG37VuC58RvIDRFV863pdFmDIB9Uf07Rlzmgmi2vL-vhha3meVCEBGCwitFrj8PnMh1-tPoYKuu6DLwXlsLFKaOYIe3M6tfzA-_hQ5cBrucIzyXBRMS3rDZpTwoP2Fqk2FHc_zKBRUIG1NQZ5wk_KfYQbyyHvYgIbzriIfNhtbMlA5UpAVMUWPcDXNgPzsvcyKmPFCEM_b7Pls0yuq4tjn0rDZaJn90jb42S" alt="Ember Holder" />
                        </div>
                        <div className="flex flex-col justify-between h-32 flex-grow">
                            <div>
                                <div className="flex justify-between items-start">
                                    <h3 className="text-lg font-headline italic text-primary">Ember Holder</h3>
                                    <button className="text-on-surface-variant/40 hover:text-error transition-colors">
                                        <span className="material-symbols-outlined text-sm">close</span>
                                    </button>
                                </div>
                                <p className="text-[10px] uppercase tracking-widest text-tertiary mt-1">Raw Ceramic</p>
                                <p className="text-sm text-on-surface-variant mt-2">Charcoal</p>
                            </div>
                            <div className="flex justify-between items-end">
                                <div className="flex items-center gap-4 bg-surface-container-low px-3 py-1 rounded-sm">
                                    <button className="text-xs text-on-surface-variant hover:text-primary">-</button>
                                    <span className="text-xs font-bold">2</span>
                                    <button className="text-xs text-on-surface-variant hover:text-primary">+</button>
                                </div>
                                <span className="text-sm font-bold text-primary">$110.00</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Curated Recommendation Section (Editorial Pacing) */}
                <section className="mt-20 mb-10 pt-10 border-t border-outline-variant/10">
                    <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant mb-6">Complete the atmosphere</h4>
                    <div className="flex overflow-x-auto gap-4 no-scrollbar pb-4">
                        <div className="min-w-[160px] space-y-3">
                            <div className="aspect-square bg-surface-container-low rounded-sm overflow-hidden">
                                <img className="w-full h-full object-cover opacity-80" data-alt="high quality black and white photography book lying on a dark wooden table" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsR-lotSilqRx41V8dIYeoRuOQel8U4hE6wgXCnp57-HdVn2fXZdxlpkFia10SCJvw6otmnfdt3xRQgkePVHfWQjp_0ZZicdlo9xblSJBOlitQUQsMetqoWrgjzEBW7-yiex5xEWgHMMwEuF_29JvczJOujfpQeEDODTtpeSABnx4X-3yUW9X9WJ2RU2Ze6YRRSPTRdlbE1uN1V0BjD5vxI_gVDh2P7ZBPB1FOxk4IwoLo-hVaycrJ-5gOvAS5sSLYjWs3WAXaIqkr" alt="The Art of Stillness" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-primary">The Art of Stillness</p>
                                <p className="text-[10px] text-on-surface-variant">$65.00</p>
                            </div>
                        </div>
                        <div className="min-w-[160px] space-y-3">
                            <div className="aspect-square bg-surface-container-low rounded-sm overflow-hidden">
                                <img className="w-full h-full object-cover opacity-80" data-alt="a minimalist luxury room spray bottle with metallic nozzle on a stone surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2YkBQVV1mWA9POsv2ajxSc7eCTV4PcGIEDjsurdCjzmqk6rj-s7OEiMHmKAd3siXd17OaFm4LOwjePQDIYcYe483iLEb82Qrdi28Ae4a3qIRu80340QgUSbyemM2LaPjAOamlz0CAkr-d_X58xq3XBjtLWHjV6GsSUKLQldCOCOHnp2MXMgNI-OD39negCREtWOPC-u5M7EHy1APf47pVDifmIwr-1p3AkNbuFec-ClUPxsbTUtC-RELy-OJMOf6Psry1mvZije-8" alt="Cedar Mist" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-primary">Cedar Mist</p>
                                <p className="text-[10px] text-on-surface-variant">$48.00</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            {/* Floating Summary Section (Mobile Summary Bar) */}
            <div className="fixed bottom-20 left-0 w-full px-6 pb-6 pt-8 bg-slate-50/90 backdrop-blur-2xl shadow-[0_-10px_30px_rgba(0,0,0,0.03)] z-40">
                <div className="max-w-md mx-auto space-y-4">
                    <div className="flex justify-between items-center text-on-surface-variant">
                        <span className="text-xs tracking-wider uppercase font-medium">Estimated Shipping</span>
                        <span className="text-xs font-bold">Complimentary</span>
                    </div>
                    <div className="flex justify-between items-end">
                        <div>
                            <span className="text-[10px] uppercase tracking-widest text-on-surface-variant block">Subtotal</span>
                            <span className="text-2xl font-headline tracking-tighter text-primary">$2,200.00</span>
                        </div>
                        <button className="bg-primary hover:bg-primary-container text-on-primary px-8 py-4 rounded-sm text-xs font-bold uppercase tracking-widest shadow-lg shadow-primary/10 transition-all active:scale-95">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>
            {/* BottomNavBar */}
            <nav className="fixed bottom-0 w-full z-50 bg-slate-50/90 backdrop-blur-2xl flex justify-around items-center px-4 h-20 shadow-[0_-4px_20px_rgba(0,0,0,0.04)]">
                <a className="flex flex-col items-center justify-center text-slate-400 pt-2 hover:text-slate-600 transition-colors" href="#">
                    <span className="material-symbols-outlined">home_app_logo</span>
                    <span className="text-[10px] uppercase tracking-[0.1em] font-sans font-bold mt-1">Gallery</span>
                </a>
                <a className="flex flex-col items-center justify-center text-slate-400 pt-2 hover:text-slate-600 transition-colors" href="#">
                    <span className="material-symbols-outlined">search</span>
                    <span className="text-[10px] uppercase tracking-[0.1em] font-sans font-bold mt-1">Search</span>
                </a>
                <a className="flex flex-col items-center justify-center text-slate-900 border-t-2 border-slate-900 pt-2 transform translate-y-[-2px] transition-transform" href="#">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_cart</span>
                    <span className="text-[10px] uppercase tracking-[0.1em] font-sans font-bold mt-1">Bag</span>
                </a>
                <a className="flex flex-col items-center justify-center text-slate-400 pt-2 hover:text-slate-600 transition-colors" href="#">
                    <span className="material-symbols-outlined">person</span>
                    <span className="text-[10px] uppercase tracking-[0.1em] font-sans font-bold mt-1">Profile</span>
                </a>
            </nav>
        </div>
    );
}
