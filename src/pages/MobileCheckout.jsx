export function MobileCheckout() {
    return (
        <div className="bg-background text-on-background selection:bg-primary/10 mobile-screen">
            {/*  Header (Shared Component: TopAppBar)  */}
            <header className="bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-xl fixed top-0 w-full z-50">
                <div className="flex justify-between items-center px-6 py-4 w-full max-w-screen-xl mx-auto">
                    <div className="flex items-center gap-4">
                        <span className="material-symbols-outlined text-slate-900 cursor-pointer transition-opacity hover:opacity-70">arrow_back</span>
                        <h1 className="text-xl font-bold tracking-[0.2em] text-slate-900 uppercase">ETHOS</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="material-symbols-outlined text-slate-900 cursor-pointer transition-opacity hover:opacity-70">shopping_bag</span>
                    </div>
                </div>
            </header>
            <main className="pt-24 pb-32 px-6 max-w-lg mx-auto">
                {/*  Progress Indicator  */}
                <div className="flex justify-between items-center mb-10 px-2">
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">1</div>
                        <span className="text-[10px] uppercase tracking-widest font-bold text-primary">Shipping</span>
                    </div>
                    <div className="flex-1 h-[1px] bg-outline-variant/20 mx-4 mb-6"></div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-8 h-8 rounded-full border border-outline-variant/30 text-outline-variant flex items-center justify-center text-xs font-bold">2</div>
                        <span className="text-[10px] uppercase tracking-widest text-outline">Delivery</span>
                    </div>
                    <div className="flex-1 h-[1px] bg-outline-variant/20 mx-4 mb-6"></div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-8 h-8 rounded-full border border-outline-variant/30 text-outline-variant flex items-center justify-center text-xs font-bold">3</div>
                        <span className="text-[10px] uppercase tracking-widest text-outline">Payment</span>
                    </div>
                </div>
                {/*  Order Summary Toggle (Glassmorphism Card)  */}
                <div className="mb-8 p-5 bg-surface-container-low rounded-xl">
                    <details className="group">
                        <summary className="list-none flex justify-between items-center cursor-pointer">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">local_mall</span>
                                <span className="font-bold text-sm">Order Summary (2 items)</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold text-primary">$1,240.00</span>
                                <span className="material-symbols-outlined text-sm transition-transform group-open:rotate-180">expand_more</span>
                            </div>
                        </summary>
                        <div className="mt-6 space-y-4 border-t border-outline-variant/10 pt-4">
                            <div className="flex gap-4">
                                <div className="w-16 h-16 bg-surface-variant rounded-md overflow-hidden flex-shrink-0">
                                    <img className="w-full h-full object-cover" data-alt="minimalist glass water bottle on neutral aesthetic background with soft shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCIPlYMSrQFRTfJTGHAniVjo93XnLSOOlV2ZPBvqGWpy9mpZKgd-rZwtyNQ3lwx-Bh6zKQJddtLTHFmRTgx95Pn4cVU2ay4A55ocpqK6JFv5PlxT0nrh7z3fkrZH3BeG_JfX4xSIycpjM7NvI5bDUjXlKmelS_cpS60OThDyoOvUZeNCZQKPCtmruNAYrCTEDLOYhO5WGw0DolU1ewg2mVmSSgdFx2rgfwsAQFVzVrKp9M-s_LEA-Xs9Fq0iZWbusB9ZNPc2-WlZbRD" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-xs font-bold uppercase tracking-wider text-outline">Ethos Home</p>
                                    <p className="text-sm font-headline">Serene Glass Vessel</p>
                                    <p className="text-xs text-on-surface-variant mt-1">Qty: 1 — $420.00</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="w-16 h-16 bg-surface-variant rounded-md overflow-hidden flex-shrink-0">
                                    <img className="w-full h-full object-cover" data-alt="red limited edition sleek running shoe on professional studio background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaD04bx5s-Q7ZTpFFWjX3T2RLv6llKjO_2IvZuVZVyK9w8-sT6FHOubzgZtY7X_--EY5Wbx37bzyKRMJcyNTbb7OQRqZTCAVyR-4K8PzicRO35vA62Zt_V5cNFxBYeJioRKtssOGOzWwP8ozXMU2f4Y7lOqpKcvUCKES3eXCdAah9xUO7wk-DiQ4WgSWh1X_xKV6faK5QxzN1vjRVXkD64JFvb0wDDbgETne1nszK37gFui_U5UzshKibWvyCncbzIBnucT-FFGsKJ" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-xs font-bold uppercase tracking-wider text-outline">Limited Edition</p>
                                    <p className="text-sm font-headline">Velocity Sport One</p>
                                    <p className="text-xs text-on-surface-variant mt-1">Qty: 1 — $820.00</p>
                                </div>
                            </div>
                            <div className="pt-4 space-y-2 border-t border-outline-variant/10">
                                <div className="flex justify-between text-xs text-on-surface-variant">
                                    <span>Subtotal</span>
                                    <span>$1,240.00</span>
                                </div>
                                <div className="flex justify-between text-xs text-on-surface-variant">
                                    <span>Shipping</span>
                                    <span className="text-tertiary font-bold">Calculated next step</span>
                                </div>
                            </div>
                        </div>
                    </details>
                </div>
                {/*  Section 1: Shipping Details  */}
                <section className="mb-12">
                    <h2 className="text-2xl mb-6 tracking-tight">Shipping Information</h2>
                    <form className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative group">
                                <label className="absolute -top-2 left-3 bg-background px-1 text-[10px] uppercase tracking-widest font-bold text-outline transition-colors group-focus-within:text-primary">First Name</label>
                                <input className="w-full bg-transparent ghost-border rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-primary transition-colors" placeholder="Alexander" type="text" />
                            </div>
                            <div className="relative group">
                                <label className="absolute -top-2 left-3 bg-background px-1 text-[10px] uppercase tracking-widest font-bold text-outline transition-colors group-focus-within:text-primary">Last Name</label>
                                <input className="w-full bg-transparent ghost-border rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-primary transition-colors" placeholder="Vance" type="text" />
                            </div>
                        </div>
                        <div className="relative group">
                            <label className="absolute -top-2 left-3 bg-background px-1 text-[10px] uppercase tracking-widest font-bold text-outline transition-colors group-focus-within:text-primary">Street Address</label>
                            <input className="w-full bg-transparent ghost-border rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-primary transition-colors" placeholder="742 Evergreen Terrace" type="text" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="relative group">
                                <label className="absolute -top-2 left-3 bg-background px-1 text-[10px] uppercase tracking-widest font-bold text-outline transition-colors group-focus-within:text-primary">City</label>
                                <input className="w-full bg-transparent ghost-border rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-primary transition-colors" placeholder="Springfield" type="text" />
                            </div>
                            <div className="relative group">
                                <label className="absolute -top-2 left-3 bg-background px-1 text-[10px] uppercase tracking-widest font-bold text-outline transition-colors group-focus-within:text-primary">Postal Code</label>
                                <input className="w-full bg-transparent ghost-border rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-primary transition-colors" placeholder="62704" type="text" />
                            </div>
                        </div>
                        <div className="relative group">
                            <label className="absolute -top-2 left-3 bg-background px-1 text-[10px] uppercase tracking-widest font-bold text-outline transition-colors group-focus-within:text-primary">Phone</label>
                            <input className="w-full bg-transparent ghost-border rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-primary transition-colors" placeholder="+1 (555) 000-0000" type="tel" />
                        </div>
                    </form>
                </section>
                {/*  Section 2: Delivery Speed Selection  */}
                <section className="mb-12">
                    <h2 className="text-2xl mb-6 tracking-tight">Delivery Method</h2>
                    <div className="space-y-4">
                        <label className="flex items-center justify-between p-4 bg-surface-container-lowest ghost-border rounded-xl cursor-pointer hover:bg-surface-container-low transition-colors relative">
                            <input checked="" className="hidden peer" name="delivery" type="radio" />
                            <div className="flex items-center gap-4">
                                <div className="w-4 h-4 rounded-full border-2 border-outline-variant peer-checked:border-primary flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-primary opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                                </div>
                                <div>
                                    <p className="text-sm font-bold">Standard Gallery</p>
                                    <p className="text-xs text-on-surface-variant">4-7 business days</p>
                                </div>
                            </div>
                            <span className="text-sm font-bold">Free</span>
                            <div className="absolute inset-0 rounded-xl pointer-events-none peer-checked:ring-2 peer-checked:ring-primary/20"></div>
                        </label>
                        <label className="flex items-center justify-between p-4 bg-surface-container-lowest ghost-border rounded-xl cursor-pointer hover:bg-surface-container-low transition-colors relative">
                            <input className="hidden peer" name="delivery" type="radio" />
                            <div className="flex items-center gap-4">
                                <div className="w-4 h-4 rounded-full border-2 border-outline-variant peer-checked:border-primary flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-primary opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                                </div>
                                <div>
                                    <p className="text-sm font-bold">Priority Curated</p>
                                    <p className="text-xs text-on-surface-variant">2-3 business days</p>
                                </div>
                            </div>
                            <span className="text-sm font-bold">$25.00</span>
                            <div className="absolute inset-0 rounded-xl pointer-events-none peer-checked:ring-2 peer-checked:ring-primary/20"></div>
                        </label>
                        <label className="flex items-center justify-between p-4 bg-surface-container-lowest ghost-border rounded-xl cursor-pointer hover:bg-surface-container-low transition-colors relative">
                            <input className="hidden peer" name="delivery" type="radio" />
                            <div className="flex items-center gap-4">
                                <div className="w-4 h-4 rounded-full border-2 border-outline-variant peer-checked:border-primary flex items-center justify-center">
                                    <div className="w-2 h-2 rounded-full bg-primary opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                                </div>
                                <div>
                                    <p className="text-sm font-bold">Vault Delivery</p>
                                    <p className="text-xs text-on-surface-variant">Next morning delivery</p>
                                </div>
                            </div>
                            <span className="text-sm font-bold">$50.00</span>
                            <div className="absolute inset-0 rounded-xl pointer-events-none peer-checked:ring-2 peer-checked:ring-primary/20"></div>
                        </label>
                    </div>
                </section>
                {/*  Final CTA Area  */}
                <div className="fixed bottom-0 left-0 w-full bg-surface-bright/95 backdrop-blur-md px-6 py-6 pb-10 shadow-[0_-10px_30px_rgba(0,0,0,0.03)] z-40">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-outline">Total Amount</p>
                            <p className="text-xl font-headline font-bold text-primary">$1,240.00</p>
                        </div>
                        <div className="text-right">
                            <p className="text-xs text-tertiary italic">Includes insurance</p>
                        </div>
                    </div>
                    <button className="w-full bg-gradient-to-r from-primary to-primary-container text-white py-4 rounded-lg font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all">
                        Continue to Payment
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                </div>
            </main>
            {/*  Hidden Bottom Nav (Suppressed for focused checkout task)  */}
            {/*  The navigation shell is suppressed as per The "Destination" Rule for Transactional/Checkout pages  */}
            <script>
        // Placeholder for interactions if needed, though instructions prohibit JS code for functional logic.
            </script>
        </div>
    )
}