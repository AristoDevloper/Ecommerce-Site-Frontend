import { useState } from 'react';

export function MobileFaqPage() {
    const [openIndex, setOpenIndex] = useState(2); // Item 3 "How can I track my package?" is open by default in design

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <div className="bg-background text-on-background font-body antialiased">
            {/*  TopAppBar  */}
            <header className="bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-xl fixed top-0 w-full z-50">
                <div className="flex justify-between items-center px-6 py-4 w-full max-w-screen-xl mx-auto">
                    <button className="text-slate-900 dark:text-slate-50 hover:opacity-70 transition-opacity active:scale-95 duration-200">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                    <h1 className="text-xl font-bold tracking-[0.2em] text-slate-900 dark:text-slate-50 font-noto-serif uppercase">Ethos</h1>
                    <button className="text-slate-900 dark:text-slate-50 hover:opacity-70 transition-opacity active:scale-95 duration-200">
                        <span className="material-symbols-outlined">shopping_bag</span>
                    </button>
                </div>
            </header>
            <main className="pt-20 pb-24">
                {/*  Hero Search Section  */}
                <section className="px-6 pt-8 pb-12 bg-surface">
                    <h2 className="font-headline text-4xl text-primary leading-tight mb-6">How can we assist you?</h2>
                    <div className="relative group">
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                            <span className="material-symbols-outlined text-outline">search</span>
                        </div>
                        <input className="w-full h-14 pl-12 pr-4 bg-surface-container-lowest border-none rounded-lg focus:ring-2 focus:ring-primary/10 transition-all font-body text-on-surface placeholder:text-outline/60 shadow-sm" placeholder="Search for help..." type="text" />
                    </div>
                </section>
                {/*  Category Grid  */}
                <section className="px-6 mb-12">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-6 bg-surface-container-low rounded-xl flex flex-col items-center text-center group cursor-pointer active:scale-95 transition-transform">
                            <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center mb-3 group-hover:bg-primary-fixed transition-colors">
                                <span className="material-symbols-outlined text-primary">local_shipping</span>
                            </div>
                            <span className="text-sm font-semibold tracking-wide uppercase text-on-surface-variant font-label">Shipping</span>
                        </div>
                        <div className="p-6 bg-surface-container-low rounded-xl flex flex-col items-center text-center group cursor-pointer active:scale-95 transition-transform">
                            <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center mb-3 group-hover:bg-primary-fixed transition-colors">
                                <span className="material-symbols-outlined text-primary">sync</span>
                            </div>
                            <span className="text-sm font-semibold tracking-wide uppercase text-on-surface-variant font-label">Returns</span>
                        </div>
                        <div className="p-6 bg-surface-container-low rounded-xl flex flex-col items-center text-center group cursor-pointer active:scale-95 transition-transform">
                            <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center mb-3 group-hover:bg-primary-fixed transition-colors">
                                <span className="material-symbols-outlined text-primary">auto_awesome</span>
                            </div>
                            <span className="text-sm font-semibold tracking-wide uppercase text-on-surface-variant font-label">Care Guide</span>
                        </div>
                        <div className="p-6 bg-surface-container-low rounded-xl flex flex-col items-center text-center group cursor-pointer active:scale-95 transition-transform">
                            <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center mb-3 group-hover:bg-primary-fixed transition-colors">
                                <span className="material-symbols-outlined text-primary">inventory_2</span>
                            </div>
                            <span className="text-sm font-semibold tracking-wide uppercase text-on-surface-variant font-label">Orders</span>
                        </div>
                    </div>
                </section>
                {/*  FAQ Sections  */}
                <section className="px-6 space-y-12">
                    {/*  Delivery & Shipping  */}
                    <div>
                        <h3 className="font-headline text-2xl mb-6 flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-tertiary rounded-full"></span>
                            Delivery &amp; Shipping
                        </h3>
                        <div className="space-y-2">
                            <div className={`rounded-lg overflow-hidden group ${openIndex === 0 ? 'border-2 border-primary-container/5' : ''}`}>
                                <button 
                                    className={`w-full px-6 py-5 flex justify-between items-center text-left transition-colors ${openIndex === 0 ? 'bg-surface-container-low font-semibold text-primary' : 'bg-surface-container-lowest hover:bg-surface-container'}`}
                                    onClick={() => handleToggle(0)}
                                >
                                    <span className={openIndex === 0 ? 'text-primary' : 'text-on-surface'}>When will my order ship?</span>
                                    <span className={`material-symbols-outlined text-outline transition-transform ${openIndex === 0 ? 'text-primary rotate-180' : 'group-hover:text-primary'}`}>expand_more</span>
                                </button>
                                {openIndex === 0 && (
                                    <div className="px-6 py-5 text-on-surface-variant text-sm leading-relaxed border-t border-outline-variant/10 bg-surface-container-lowest">
                                        Orders typically ship within 1-2 business days. Once shipped, you will receive a confirmation email with tracking information.
                                    </div>
                                )}
                            </div>
                            <div className={`rounded-lg overflow-hidden group ${openIndex === 1 ? 'border-2 border-primary-container/5' : ''}`}>
                                <button 
                                    className={`w-full px-6 py-5 flex justify-between items-center text-left transition-colors ${openIndex === 1 ? 'bg-surface-container-low font-semibold text-primary' : 'bg-surface-container-lowest hover:bg-surface-container'}`}
                                    onClick={() => handleToggle(1)}
                                >
                                    <span className={openIndex === 1 ? 'text-primary' : 'text-on-surface'}>Do you offer international shipping?</span>
                                    <span className={`material-symbols-outlined text-outline transition-transform ${openIndex === 1 ? 'text-primary rotate-180' : 'group-hover:text-primary'}`}>expand_more</span>
                                </button>
                                {openIndex === 1 && (
                                    <div className="px-6 py-5 text-on-surface-variant text-sm leading-relaxed border-t border-outline-variant/10 bg-surface-container-lowest">
                                        Yes, we ship to most locations worldwide. International delivery rates and timeframes will be calculated at checkout.
                                    </div>
                                )}
                            </div>
                            <div className={`rounded-lg overflow-hidden group ${openIndex === 2 ? 'border-2 border-primary-container/5' : ''}`}>
                                <button 
                                    className={`w-full px-6 py-5 flex justify-between items-center text-left transition-colors ${openIndex === 2 ? 'bg-surface-container-low font-semibold text-primary' : 'bg-surface-container-lowest hover:bg-surface-container'}`}
                                    onClick={() => handleToggle(2)}
                                >
                                    <span className={openIndex === 2 ? 'text-primary' : 'text-on-surface'}>How can I track my package?</span>
                                    <span className={`material-symbols-outlined text-outline transition-transform ${openIndex === 2 ? 'text-primary rotate-180' : 'group-hover:text-primary'}`}>expand_more</span>
                                </button>
                                {openIndex === 2 && (
                                    <div className="px-6 py-5 text-on-surface-variant text-sm leading-relaxed border-t border-outline-variant/10 bg-surface-container-lowest">
                                        Once your order has been dispatched, you will receive an email containing your tracking number. You can also view your order status in the "My Orders" section of your Ethos account.
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    {/*  Returns & Refunds  */}
                    <div>
                        <h3 className="font-headline text-2xl mb-6 flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-tertiary rounded-full"></span>
                            Returns &amp; Refunds
                        </h3>
                        <div className="space-y-2">
                            <div className={`rounded-lg overflow-hidden group ${openIndex === 3 ? 'border-2 border-primary-container/5' : ''}`}>
                                <button 
                                    className={`w-full px-6 py-5 flex justify-between items-center text-left transition-colors ${openIndex === 3 ? 'bg-surface-container-low font-semibold text-primary' : 'bg-surface-container-lowest hover:bg-surface-container'}`}
                                    onClick={() => handleToggle(3)}
                                >
                                    <span className={openIndex === 3 ? 'text-primary' : 'text-on-surface'}>What is your return policy?</span>
                                    <span className={`material-symbols-outlined text-outline transition-transform ${openIndex === 3 ? 'text-primary rotate-180' : 'group-hover:text-primary'}`}>expand_more</span>
                                </button>
                                {openIndex === 3 && (
                                    <div className="px-6 py-5 text-on-surface-variant text-sm leading-relaxed border-t border-outline-variant/10 bg-surface-container-lowest">
                                        We accept returns of unused items in their original packaging within 14 days of delivery. Custom or final sale items cannot be returned.
                                    </div>
                                )}
                            </div>
                            <div className={`rounded-lg overflow-hidden group ${openIndex === 4 ? 'border-2 border-primary-container/5' : ''}`}>
                                <button 
                                    className={`w-full px-6 py-5 flex justify-between items-center text-left transition-colors ${openIndex === 4 ? 'bg-surface-container-low font-semibold text-primary' : 'bg-surface-container-lowest hover:bg-surface-container'}`}
                                    onClick={() => handleToggle(4)}
                                >
                                    <span className={openIndex === 4 ? 'text-primary' : 'text-on-surface'}>How long does a refund take?</span>
                                    <span className={`material-symbols-outlined text-outline transition-transform ${openIndex === 4 ? 'text-primary rotate-180' : 'group-hover:text-primary'}`}>expand_more</span>
                                </button>
                                {openIndex === 4 && (
                                    <div className="px-6 py-5 text-on-surface-variant text-sm leading-relaxed border-t border-outline-variant/10 bg-surface-container-lowest">
                                        Refunds are processed back to your original payment method within 5-10 business days of our receiving the returned item.
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    {/*  Product Care  */}
                    <div>
                        <h3 className="font-headline text-2xl mb-6 flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-tertiary rounded-full"></span>
                            Care &amp; Longevity
                        </h3>
                        <div className="bg-primary text-on-primary p-8 rounded-xl relative overflow-hidden">
                            <div className="relative z-10">
                                <h4 className="font-headline text-xl mb-3">Material Care Guide</h4>
                                <p className="text-on-primary-container text-sm leading-relaxed mb-6 opacity-90">Learn how to extend the life of your Ethos artifacts with our curated maintenance rituals.</p>
                                <button className="px-6 py-3 bg-tertiary text-on-tertiary text-sm font-bold uppercase tracking-widest rounded-lg flex items-center gap-2">
                                    Download PDF <span className="material-symbols-outlined text-base">download</span>
                                </button>
                            </div>
                            <div className="absolute -right-4 -bottom-4 w-32 h-32 opacity-10">
                                <span className="material-symbols-outlined text-[8rem]">spa</span>
                            </div>
                        </div>
                    </div>
                </section>
                {/*  Contact Section  */}
                <section className="mt-16 px-6 pb-12">
                    <div className="bg-surface-container-low rounded-2xl p-8 text-center">
                        <h3 className="font-headline text-2xl mb-2">Still need help?</h3>
                        <p className="text-on-surface-variant text-sm mb-8">Our concierge team is available 24/7 to assist with any inquiries.</p>
                        <div className="flex flex-col gap-3">
                            <a className="flex items-center justify-center gap-3 w-full py-4 bg-primary-container text-on-primary-container rounded-lg font-semibold hover:opacity-90 transition-opacity" href="mailto:support@ethos.com">
                                <span className="material-symbols-outlined text-xl">mail</span>
                                Email Support
                            </a>
                            <button className="flex items-center justify-center gap-3 w-full py-4 border border-outline-variant/20 bg-surface-container-lowest text-primary rounded-lg font-semibold hover:bg-surface-container transition-colors">
                                <span className="material-symbols-outlined text-xl">chat_bubble</span>
                                Live Concierge
                            </button>
                        </div>
                        <div className="mt-10 pt-10 border-t border-outline-variant/10 flex justify-center gap-6">
                            <span className="material-symbols-outlined text-outline text-2xl">social_distance</span>
                            <span className="material-symbols-outlined text-outline text-2xl">public</span>
                            <span className="material-symbols-outlined text-outline text-2xl">fingerprint</span>
                        </div>
                    </div>
                </section>
            </main>
            {/*  BottomNavBar  */}
            <nav className="bg-slate-50/95 dark:bg-slate-950/95 backdrop-blur-xl fixed bottom-0 left-0 w-full flex justify-around items-center px-4 py-3 z-50 pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.06)] border-t border-slate-200/50 dark:border-slate-800/50">
                <button className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 w-16 group transition-colors">
                    <span className="material-symbols-outlined mb-1">grid_view</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider">Explore</span>
                </button>
                <button className="flex flex-col items-center justify-center text-primary dark:text-primary-fixed w-16">
                    <div className="bg-primary/5 dark:bg-primary-fixed/10 p-2 rounded-xl mb-1">
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>help</span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider">Help</span>
                </button>
                <button className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 w-16 group transition-colors">
                    <span className="material-symbols-outlined mb-1">receipt_long</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider">Orders</span>
                </button>
                <button className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 w-16 group transition-colors">
                    <span className="material-symbols-outlined mb-1">local_mall</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider">Cart</span>
                </button>
                <button className="flex flex-col items-center justify-center text-slate-500 dark:text-slate-400 w-16 group transition-colors">
                    <span className="material-symbols-outlined mb-1">person</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider">Account</span>
                </button>
            </nav>
        </div>
    );
}
