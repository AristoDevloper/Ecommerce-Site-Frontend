export function MobileHomePage() {
    return (
        <div className="mobile-screen bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container">
            {/*  TopAppBar Shell  */}
            <header className="fixed top-0 w-full z-50 bg-slate-50/80 backdrop-blur-xl flex justify-between items-center px-6 h-16 shadow-sm shadow-slate-900/5">
                <div className="flex items-center gap-4">
                    <button className="text-slate-900 hover:opacity-70 transition-opacity active:scale-95 duration-150">
                        <span className="material-symbols-outlined" data-icon="menu">menu</span>
                    </button>
                </div>
                <h1 className="text-2xl font-serif tracking-widest text-slate-900">ETHOS</h1>
                <div className="flex items-center gap-4">
                    <button className="text-slate-900 hover:opacity-70 transition-opacity active:scale-95 duration-150">
                        <span className="material-symbols-outlined" data-icon="shopping_bag">shopping_bag</span>
                    </button>
                </div>
            </header>
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
                            <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-4 rounded-DEFAULT text-xs font-bold uppercase tracking-widest hover:opacity-90 active:scale-95 transition-all">
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
                        <button className="text-primary text-xs font-bold underline underline-offset-4 decoration-primary/20 hover:decoration-primary transition-all">View All</button>
                    </div>
                    <div className="flex overflow-x-auto gap-6 px-8 hide-scrollbar snap-x snap-mandatory">
                        {/*  Product Card 1  */}
                        <div className="min-w-[260px] snap-start group">
                            <div className="relative aspect-[3/4] bg-surface-variant rounded-md overflow-hidden mb-4">
                                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Minimalist handmade ceramic vase on a raw concrete surface with warm sunlight hitting the texture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCD39mprIJ-2JTuJNYjgeU-HyD-LPHM0MsM1HlOuPMD74dYuEKY9t0JIHhARjt7Ac-4pMFogf-fzhLZ7znrTWRiNBPC-9FXTEfHouITL83cHyJUFXSPxaIlv7zb44bKnL_HnmBiqZYknLu8NOFDX69xkeex84ePD0SKWlbHyqR4Qv896yEXNS93fpLZyWB-KRPtl287IZNE2Yz3rMkFkENwycfr4IE9wEnte6ERf_X1qo8MUqIoTy87uB3TbrlHCXC_AcVmII_G5zH" />
                                <div className="absolute top-3 right-3">
                                    <span className="bg-white/80 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold tracking-tighter">NEW</span>
                                </div>
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs font-light text-on-surface-variant">L’Objet</p>
                                <h4 className="font-headline text-lg">Fracture Ceramic Vase</h4>
                                <p className="text-tertiary font-bold text-sm">$285.00</p>
                            </div>
                        </div>
                        {/*  Product Card 2  */}
                        <div className="min-w-[260px] snap-start group">
                            <div className="relative aspect-[3/4] bg-surface-variant rounded-md overflow-hidden mb-4">
                                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Sleek black architectural floor lamp against a pale gray wall with clean lines and soft ambient lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrQalzuHdYkgXpKgGN6EciRIh4PfbbxkBTl4_M9XoFVkvDb7AqtVugavL7wf5jFplDbCIfn6fjwR4sazXnM5Cyzc5tc1u81JHAPb015FivncXRMPBCOjdEd6wkZtXqvPz6LMu5HceIel3u3xX2679V2lX-Vej46NoRoMqFSG03YmD17wzgZodbZbC2nsnFqvevyTkSt4Cu146CCoB_z8xeruQC6-KCqXyrBNBCc4hsC3w5wBmOsm-yAvyRLN--OIRTua8TDLBbUnh5" />
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs font-light text-on-surface-variant">Artek</p>
                                <h4 className="font-headline text-lg">A811 Floor Lamp</h4>
                                <p className="text-tertiary font-bold text-sm">$1,420.00</p>
                            </div>
                        </div>
                        {/*  Product Card 3  */}
                        <div className="min-w-[260px] snap-start group">
                            <div className="relative aspect-[3/4] bg-surface-variant rounded-md overflow-hidden mb-4">
                                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="A pair of elegant hand-blown glass carafes with amber tints on a dark wooden tray" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLODmczCha8G_yJnDCJ8l9OZQQNn-o6thjTOra70DXpSUMyP57tvGVNtRbOmXc24SFZ4VSHpY7YsuuCr8PFIqCm7iLQqP_IiexyItVZbPFRMGZQRW2zvhc3MI4pWF4lxWlmnSf7XiLhmERiwLvJgESCGrtguCKYS5Ux0TdHnfQZAqzE-Nmf0_J2rN48jUPPYbvZbdoohpVsQCf91nmqU_MpUz9-2zeljiQo5l1Dc9wch6FUeArwdzZYF9H0nIyyEZJK5Urp9Epv5Vv" />
                            </div>
                            <div className="space-y-1">
                                <p className="text-xs font-light text-on-surface-variant">Ferm Living</p>
                                <h4 className="font-headline text-lg">Ripple Carafe Set</h4>
                                <p className="text-tertiary font-bold text-sm">$65.00</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/*  Limited Edition Section  */}
                <section className="py-20 px-8 bg-surface-container-low">
                    <div className="flex flex-col gap-12">
                        <div className="relative group">
                            <div className="aspect-square w-full overflow-hidden rounded-md bg-surface-variant">
                                <img className="w-full h-full object-cover" data-alt="High-end mid-century modern leather lounge chair with dark walnut frame in a moody art gallery setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_3Tg3pOZcS-dZHjIandqlM4id1otqo-K-ZdDnaNzcVcMlfpKdhxFnZ0BBHDn9zy0KI1qcdVungRAkN4FwrqpbdXeOsc_MBEsaGtW1qNQbcCTh6yVmsZeY-_gsfr4o9mo4mQTA4eoF7NjSWKMOzftvjUA246_gJ5DeEHswQDYdzMWGp4iS1JyDCFOMHFz05lbdmzFoJBSNNYf9e6BWwm3AghmFkCw49WZHGGIx48bNdj466X6mR9JMcRQNyDBjdHVBgMyGIfI4hofa" />
                            </div>
                            <div className="absolute -bottom-6 -right-4 bg-primary p-8 max-w-[200px] shadow-xl">
                                <span className="text-tertiary-fixed-dim text-[10px] uppercase tracking-[0.2em] font-bold">Limited Release</span>
                                <h5 className="text-white font-headline text-xl mt-2">The Eames <br />Legacy Ed.</h5>
                            </div>
                        </div>
                        <div className="pt-8 space-y-6">
                            <h3 className="text-3xl font-headline leading-tight italic">Objects of permanence, crafted for the few.</h3>
                            <p className="text-on-surface-variant leading-relaxed font-light text-sm">
                                Our Limited Edition series features collaborations with master artisans, producing numbered pieces that bridge the gap between utility and fine art.
                            </p>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-4 py-4 border-b border-outline-variant/20">
                                    <span className="text-tertiary font-bold">01</span>
                                    <span className="text-sm font-medium tracking-wide uppercase">Hand-stitched Italian Leather</span>
                                </div>
                                <div className="flex items-center gap-4 py-4 border-b border-outline-variant/20">
                                    <span className="text-tertiary font-bold">02</span>
                                    <span className="text-sm font-medium tracking-wide uppercase">Sustainably Sourced Walnut</span>
                                </div>
                                <div className="flex items-center gap-4 py-4">
                                    <span className="text-tertiary font-bold">03</span>
                                    <span className="text-sm font-medium tracking-wide uppercase">Individually Numbered</span>
                                </div>
                            </div>
                            <button className="w-full border border-primary text-primary py-4 rounded-DEFAULT text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all">
                                Inquire About Series
                            </button>
                        </div>
                    </div>
                </section>
                {/*  Newsletter Subscription  */}
                <section className="py-24 px-8 text-center bg-primary text-on-primary">
                    <div className="max-w-md mx-auto space-y-8">
                        <div className="space-y-4">
                            <h3 className="text-3xl font-headline italic">Join the Connoisseurs</h3>
                            <p className="text-white/60 text-sm font-light leading-relaxed">
                                Weekly insights into curated living, exclusive collection previews, and invitations to private gallery events.
                            </p>
                        </div>
                        <form className="space-y-4">
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
            </main>
            {/*  BottomNavBar Shell  */}
            <nav className="fixed bottom-0 w-full z-50 bg-slate-50/90 backdrop-blur-2xl flex justify-around items-center px-4 h-20 shadow-[0_-4px_20px_rgba(0,0,0,0.04)] pb-safe">
                {/*  Gallery (Active)  */}
                <a className="flex flex-col items-center justify-center text-slate-900 border-t-2 border-slate-900 pt-2 transform translate-y-[-2px] transition-transform" href="#">
                    <span className="material-symbols-outlined" data-icon="home_app_logo" style={{ fontVariationSettings: "'FILL' 1" }}>home_app_logo</span>
                    <span className="text-[10px] uppercase tracking-[0.1em] font-sans font-bold mt-1">Gallery</span>
                </a>
                {/*  Search  */}
                <a className="flex flex-col items-center justify-center text-slate-400 pt-2 hover:text-slate-600 transition-colors" href="#">
                    <span className="material-symbols-outlined" data-icon="search">search</span>
                    <span className="text-[10px] uppercase tracking-[0.1em] font-sans font-bold mt-1">Search</span>
                </a>
                {/*  Bag  */}
                <a className="flex flex-col items-center justify-center text-slate-400 pt-2 hover:text-slate-600 transition-colors" href="#">
                    <span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
                    <span className="text-[10px] uppercase tracking-[0.1em] font-sans font-bold mt-1">Bag</span>
                </a>
                {/*  Profile  */}
                <a className="flex flex-col items-center justify-center text-slate-400 pt-2 hover:text-slate-600 transition-colors" href="#">
                    <span className="material-symbols-outlined" data-icon="person">person</span>
                    <span className="text-[10px] uppercase tracking-[0.1em] font-sans font-bold mt-1">Profile</span>
                </a>
            </nav>
        </div>
    )
}

