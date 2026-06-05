export function MobilePayment() {
    return (
        <div className="mobile-screen bg-background text-on-background font-body selection:bg-primary-fixed-dim selection:text-primary min-h-screen pb-32">
            {/*  TopAppBar  */}
            <header className="fixed top-0 w-full z-50 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-xl">
                <div className="flex justify-between items-center px-6 py-4 w-full max-w-screen-xl mx-auto">
                    <button className="text-slate-900 dark:text-slate-50 hover:opacity-70 transition-opacity active:scale-95 duration-200">
                        <span className="material-symbols-outlined">arrow_back</span>
                    </button>
                    <h1 className="text-xl font-bold tracking-[0.2em] text-slate-900 dark:text-slate-50 font-noto-serif">ETHOS</h1>
                    <button className="text-slate-900 dark:text-slate-50 hover:opacity-70 transition-opacity active:scale-95 duration-200">
                        <span className="material-symbols-outlined">shopping_bag</span>
                    </button>
                </div>
            </header>
            <main className="pt-24 px-6 max-w-md mx-auto">
                {/*  Editorial Title  */}
                <div className="mb-10 text-center">
                    <span className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 block font-label font-bold">Secure Checkout</span>
                    <h2 className="font-headline text-3xl tracking-tight text-on-background">Payment Details</h2>
                </div>
                {/*  Express Checkout Section  */}
                <section className="mb-12">
                    <div className="flex flex-col gap-4">
                        <button className="w-full h-14 bg-black text-white rounded-lg flex items-center justify-center gap-2 hover:opacity-90 transition-all active:scale-[0.98]">
                            <span className="font-bold text-lg">Pay</span>
                        </button>
                        <button className="w-full h-14 bg-[#ffc439] text-[#111] rounded-lg flex items-center justify-center hover:opacity-90 transition-all active:scale-[0.98]">
                            <svg className="h-6" fill="currentColor" viewBox="0 0 135 32">
                                <path d="M11.9 4C10.2 4 8.7 4.7 7.7 5.9V4.5H3.6V27.4H7.8V18.1C8.8 19.3 10.3 20 11.9 20 15.1 20 17.8 17.3 17.8 14C17.8 10.7 15.1 8 11.9 8V4ZM11.4 16.4C10 16.4 8.8 15.2 8.8 13.8V10.2C8.8 8.8 10 7.6 11.4 7.6C12.8 7.6 14 8.8 14 10.2V13.8C14 15.2 12.8 16.4 11.4 16.4Z"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="flex items-center my-8">
                        <div className="flex-grow h-px bg-outline-variant/20"></div>
                        <span className="px-4 text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Or Pay with Card</span>
                        <div className="flex-grow h-px bg-outline-variant/20"></div>
                    </div>
                </section>
                {/*  Card Entry Form  */}
                <section className="space-y-6">
                    <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold ml-1">Card Number</label>
                        <div className="relative">
                            <input className="w-full bg-surface-container-low border-none border-b border-outline-variant/20 py-4 px-4 text-on-surface placeholder:text-outline focus:ring-0 focus:border-primary transition-all" placeholder="0000 0000 0000 0000" type="text" />
                            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-1">
                                <span className="material-symbols-outlined text-outline">credit_card</span>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold ml-1">Expiry Date</label>
                            <input className="w-full bg-surface-container-low border-none border-b border-outline-variant/20 py-4 px-4 text-on-surface placeholder:text-outline focus:ring-0 focus:border-primary transition-all" placeholder="MM/YY" type="text" />
                        </div>
                        <div className="space-y-1">
                            <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold ml-1">CVV</label>
                            <input className="w-full bg-surface-container-low border-none border-b border-outline-variant/20 py-4 px-4 text-on-surface placeholder:text-outline focus:ring-0 focus:border-primary transition-all" placeholder="123" type="text" />
                        </div>
                    </div>
                    <div className="space-y-1">
                        <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold ml-1">Cardholder Name</label>
                        <input className="w-full bg-surface-container-low border-none border-b border-outline-variant/20 py-4 px-4 text-on-surface placeholder:text-outline focus:ring-0 focus:border-primary transition-all uppercase" placeholder="J. DOE" type="text" />
                    </div>
                    <div className="flex items-start gap-3 mt-4">
                        <input className="mt-1 rounded-sm border-outline-variant text-primary focus:ring-primary" id="save_card" type="checkbox" />
                        <label className="text-xs text-on-surface-variant leading-relaxed" htmlFor="save_card">Securely save this card for future purchases. Your data is encrypted and handled via PCI DSS standards.</label>
                    </div>
                </section>
                {/*  Order Summary Glass Card  */}
                <section className="mt-12 p-6 bg-surface-container-low rounded-xl border border-white/40 backdrop-blur-sm">
                    <h3 className="font-headline text-lg mb-4 text-on-background">Order Summary</h3>
                    <div className="space-y-3">
                        <div className="flex justify-between text-sm text-on-surface-variant">
                            <span>Artifact No. 042 (Sculptural Vase)</span>
                            <span className="text-on-surface font-medium">$420.00</span>
                        </div>
                        <div className="flex justify-between text-sm text-on-surface-variant">
                            <span>Shipping (Global Priority)</span>
                            <span className="text-on-surface font-medium">$35.00</span>
                        </div>
                        <div className="pt-3 mt-3 border-t border-outline-variant/20 flex justify-between items-baseline">
                            <span className="text-[10px] uppercase tracking-widest font-bold">Total Amount</span>
                            <span className="text-2xl font-headline text-primary">$455.00</span>
                        </div>
                    </div>
                </section>
                <div className="mt-10 mb-20 flex items-center justify-center gap-2 text-on-surface-variant">
                    <span className="material-symbols-outlined text-sm">lock</span>
                    <span className="text-[10px] uppercase tracking-widest font-bold">256-bit SSL Encrypted Payment</span>
                </div>
            </main>
            {/*  Bottom Action Bar (Fixed)  */}
            <div className="fixed bottom-0 left-0 w-full bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-xl px-8 py-6 z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.04)]">
                <button className="w-full h-14 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-lg font-label font-bold uppercase tracking-widest text-sm hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-3">
                    Authorize Payment
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
                <div className="h-safe"></div>
            </div>
        </div>
    );
}
