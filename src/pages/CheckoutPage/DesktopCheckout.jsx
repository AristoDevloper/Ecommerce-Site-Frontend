export function DesktopCheckout() {
    return (
        <div className="bg-background text-on-surface min-h-screen desktop-screen">
            
            <main className="max-w-screen-2xl mx-auto px-8 py-12 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/*  Left Column: Checkout Steps */}
                    <div className="lg:col-span-7 space-y-16">
                        
                        {/*  Step 1: Shipping Address */}
                        <section>
                            <h2 className="text-3xl font-serif text-primary mb-10 leading-tight">Shipping Address</h2>
                            <form className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="flex flex-col">
                                        <label className="text-[10px] font-label font-bold tracking-widest text-on-surface-variant mb-2">FIRST NAME</label>
                                        <input className="ghost-input py-3 text-sm focus:ring-0" placeholder="Julian" type="text" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="text-[10px] font-label font-bold tracking-widest text-on-surface-variant mb-2">LAST NAME</label>
                                        <input className="ghost-input py-3 text-sm focus:ring-0" placeholder="Vandervall" type="text" />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-[10px] font-label font-bold tracking-widest text-on-surface-variant mb-2">STREET ADDRESS</label>
                                    <input className="ghost-input py-3 text-sm focus:ring-0" placeholder="2400 Editorial Lane, Suite 400" type="text" />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    <div className="flex flex-col md:col-span-1">
                                        <label className="text-[10px] font-label font-bold tracking-widest text-on-surface-variant mb-2">CITY</label>
                                        <input className="ghost-input py-3 text-sm focus:ring-0" placeholder="New York" type="text" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="text-[10px] font-label font-bold tracking-widest text-on-surface-variant mb-2">STATE / PROVINCE</label>
                                        <input className="ghost-input py-3 text-sm focus:ring-0" placeholder="NY" type="text" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="text-[10px] font-label font-bold tracking-widest text-on-surface-variant mb-2">POSTAL CODE</label>
                                        <input className="ghost-input py-3 text-sm focus:ring-0" placeholder="10001" type="text" />
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <label className="text-[10px] font-label font-bold tracking-widest text-on-surface-variant mb-2">PHONE FOR DELIVERY NOTIFICATIONS</label>
                                    <input className="ghost-input py-3 text-sm focus:ring-0" placeholder="+1 (555) 000-0000" type="tel" />
                                </div>
                            </form>
                        </section>
                        {/*  Step 2: Delivery Options */}
                        <section>
                            <h2 className="text-3xl font-serif text-primary mb-10 leading-tight">Delivery Speed</h2>
                            <div className="space-y-4">
                                {/*  Option 1 */}
                                <label className="group relative flex items-center justify-between p-6 cursor-pointer bg-surface-container-low transition-colors hover:bg-surface-container">
                                    <div className="flex items-center gap-4">
                                        <input checked="" className="w-4 h-4 text-primary border-outline-variant focus:ring-0" name="delivery" type="radio" />
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold text-primary">Standard Curated Delivery</span>
                                            <span className="text-xs text-on-surface-variant">5-7 Business Days. Eco-conscious packaging.</span>
                                        </div>
                                    </div>
                                    <span className="text-sm font-bold text-tertiary">Gratis</span>
                                </label>
                                {/*  Option 2 */}
                                <label className="group relative flex items-center justify-between p-6 cursor-pointer bg-surface-container-low transition-colors hover:bg-surface-container">
                                    <div className="flex items-center gap-4">
                                        <input className="w-4 h-4 text-primary border-outline-variant focus:ring-0" name="delivery" type="radio" />
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold text-primary">Expedited Artifact Handling</span>
                                            <span className="text-xs text-on-surface-variant">2-3 Business Days. Signature required.</span>
                                        </div>
                                    </div>
                                    <span className="text-sm font-bold text-primary">$25.00</span>
                                </label>
                                {/*  Option 3 */}
                                <label className="group relative flex items-center justify-between p-6 cursor-pointer bg-surface-container-low transition-colors hover:bg-surface-container">
                                    <div className="flex items-center gap-4">
                                        <input className="w-4 h-4 text-primary border-outline-variant focus:ring-0" name="delivery" type="radio" />
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold text-primary">Overnight White Glove</span>
                                            <span className="text-xs text-on-surface-variant">Next Day by 10 AM. Climate controlled transit.</span>
                                        </div>
                                    </div>
                                    <span className="text-sm font-bold text-primary">$75.00</span>
                                </label>
                            </div>
                        </section>
                        {/*  Action Button */}
                        <div className="pt-8 border-t border-outline-variant/10">
                            <button className="w-full md:w-auto px-12 py-5 bg-gradient-to-r from-primary to-primary-container text-on-primary text-xs font-label font-bold tracking-[0.2em] rounded transition-transform hover:scale-[1.01] active:scale-95 shadow-lg">
                                CONTINUE TO PAYMENT
                            </button>
                            <p className="mt-4 text-[10px] text-on-surface-variant/60 font-label italic">All artifacts are shipped with meticulous care from our central gallery.</p>
                        </div>
                    </div>
                    {/*  Right Column: Sidebar Summary */}
                    <aside className="lg:col-span-5 sticky top-32">
                        <div className="bg-surface-container-low p-10 rounded-xl space-y-10">
                            <h3 className="text-xl font-serif text-primary">Order Summary</h3>
                            {/*  Item List */}
                            <div className="space-y-8">
                                {/*  Item 1 */}
                                <div className="flex gap-6 items-center">
                                    <div className="w-24 h-32 bg-surface-variant rounded-md overflow-hidden flex-shrink-0">
                                        <img alt="Minimalist Watch" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" data-alt="luxury minimalist watch with a dark leather strap and white dial on a clean neutral background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXn-RcoPE2YgsfxK9jg3yt8mU14kwxjCeTybYTCFLw0aNZChtwc_QkyilyYJfb1RODZwRYqqW7So2P4dk40eDPQU96i2aTzr2Mzq2JOqz63H9E0VZNBZGfsTyHJwAWR97I2930ADT7fqaXcTVW7qJUagef7lnZAijLguFytfA7xaOD-newcJ2NTTl07UVDVlGmyELI1x4VNSS3MsW5EN8-80hObOmc7O8UQbykbdTQbeJgHshZtFp2gMyLRdYIoGQ3bq3f9szZOQOw" />
                                    </div>
                                    <div className="flex flex-col justify-between h-full py-1">
                                        <div>
                                            <h4 className="text-sm font-bold text-primary leading-tight">The Monochrome Chronograph</h4>
                                            <p className="text-xs text-on-surface-variant mt-1">Edition of 500 / Black</p>
                                        </div>
                                        <div className="mt-auto">
                                            <span className="text-sm font-bold text-primary">$450.00</span>
                                        </div>
                                    </div>
                                </div>
                                {/*  Item 2 */}
                                <div className="flex gap-6 items-center">
                                    <div className="w-24 h-32 bg-surface-variant rounded-md overflow-hidden flex-shrink-0">
                                        <img alt="Ceramic Artifact" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" data-alt="luxury candle in a dark glass jar sitting on a marble surface with dramatic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIyWkkeCevmoi5rCAeHOy14jldnVKvHU19XU71xVb9RUmpBp_oMT3XV8-aVdXk-C_G2gT6xWHi_W23G2zXhLjdOoJLVgT7VHVnQvCndTGtVm4Xq78B2XQUa0pRRCY_uE0rw8N1bmiOMBmWItlUUpZFVQlG9f45wkge61rl7w5xzT9PT_O9afZZnbqYudajRI1nFc2z0HdxVtix5aWT5Fcn-JV5nPV5Pbl6Li4AukHKo_RkmzPnq_h0KYQ9FQ-NNn9g0bFydYPLaYLK" />
                                    </div>
                                    <div className="flex flex-col justify-between h-full py-1">
                                        <div>
                                            <h4 className="text-sm font-bold text-primary leading-tight">Santalum Sculptural Candle</h4>
                                            <p className="text-xs text-on-surface-variant mt-1">Hand-poured / Large</p>
                                        </div>
                                        <div className="mt-auto">
                                            <span className="text-sm font-bold text-primary">$95.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*  Financials */}
                            <div className="pt-10 border-t border-outline-variant/20 space-y-4">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-on-surface-variant font-label">Subtotal</span>
                                    <span className="text-primary font-bold">$545.00</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-on-surface-variant font-label">Shipping</span>
                                    <span className="text-tertiary font-bold">Complimentary</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-on-surface-variant font-label">Est. Taxes</span>
                                    <span className="text-primary font-bold">$43.60</span>
                                </div>
                                <div className="pt-6 border-t border-primary/10 flex justify-between items-end">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-label font-extrabold tracking-widest text-on-surface-variant">TOTAL DUE</span>
                                        <span className="text-3xl font-serif text-primary mt-1">$588.60</span>
                                    </div>
                                    <span className="text-[10px] font-label text-on-surface-variant italic mb-1">USD</span>
                                </div>
                            </div>
                            {/*  Promotions */}
                            <div className="flex gap-2">
                                <input className="ghost-input flex-grow py-2 text-xs focus:ring-0" placeholder="ENTER CODE" type="text" />
                                <button className="px-4 py-2 border border-primary/20 text-[10px] font-label font-bold hover:bg-primary hover:text-on-primary transition-colors">APPLY</button>
                            </div>
                        </div>
                        {/*  Trust Badge */}
                        <div className="mt-8 flex items-center justify-center gap-6 opacity-30 grayscale">
                            <span className="material-symbols-outlined text-4xl">local_shipping</span>
                            <span className="material-symbols-outlined text-4xl">verified_user</span>
                            <span className="material-symbols-outlined text-4xl">sustainability</span>
                        </div>
                    </aside>
                </div>
            </main>
            {/*  Footer: Static Brand Element */}
            <footer className="w-full py-16 bg-slate-50 mt-20">
                <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="font-serif text-xl text-primary leading-relaxed max-w-md">
                            "Design is not just what it looks like and feels like. Design is how it works."
                        </p>
                        <p className="text-[10px] font-label font-bold tracking-widest mt-4 text-on-surface-variant">© 2024 ETHOS CURATED. ALL ARTIFACTS RESERVED.</p>
                    </div>
                    <div className="flex md:justify-end gap-12 text-xs font-label tracking-widest text-on-surface-variant">
                        <a className="hover:text-primary transition-colors" href="#">PRIVACY POLICY</a>
                        <a className="hover:text-primary transition-colors" href="#">TERMS OF SERVICE</a>
                        <a className="hover:text-primary transition-colors" href="#">CONTACT GALLERY</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}