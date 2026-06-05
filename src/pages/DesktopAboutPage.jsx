export function DesktopAboutPage() {
    return (
        <div className="desktop-screen bg-background text-on-surface selection:bg-primary-container selection:text-white">
            {/*  TopNavBar  */}
            <nav className="bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl docked full-width top-0 sticky z-50 shadow-sm dark:shadow-none">
                <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
                    <div className="text-2xl font-serif tracking-tight text-slate-900 dark:text-slate-50">ETHOS CURATED</div>
                    <div className="hidden md:flex items-center space-x-12">
                        <a className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 hover:opacity-70 transition-opacity duration-300" href="#">Collections</a>
                        <a className="text-slate-900 dark:text-slate-50 font-semibold border-b border-slate-900 dark:border-slate-50 hover:opacity-70 transition-opacity duration-300" href="#">About</a>
                        <a className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 hover:opacity-70 transition-opacity duration-300" href="#">Support</a>
                    </div>
                    <div className="flex items-center space-x-6">
                        <button className="hover:opacity-70 transition-opacity duration-300"><span className="material-symbols-outlined text-slate-900 dark:text-slate-50" data-icon="favorite">favorite</span></button>
                        <button className="hover:opacity-70 transition-opacity duration-300"><span className="material-symbols-outlined text-slate-900 dark:text-slate-50" data-icon="shopping_bag">shopping_bag</span></button>
                        <button className="hover:opacity-70 transition-opacity duration-300"><span className="material-symbols-outlined text-slate-900 dark:text-slate-50" data-icon="account_circle">account_circle</span></button>
                    </div>
                </div>
            </nav>
            <main>
                {/*  Hero Section  */}
                <section className="relative h-[85vh] flex items-center overflow-hidden">
                    <div className="absolute inset-0 z-0">
                        <img alt="Ethos Curated Atmosphere" className="w-full h-full object-cover scale-105" data-alt="high-end minimalist boutique interior with natural sunlight streaming onto curated wooden furniture and soft architectural shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBee6cxgtRcGg1QbPLep7KSg58L-iN4WhPN6FD7o9utR1KB-OLk0V8oiwoKxbBkyoHit64vWBUozWhSAuL3y13UDuWEd9BiEPXBTAK0CKzq1AGR8Au2TxK4a-TGOjK9ibNFu6ZECUgYI0XkBSq3IcqVNeMcpBzxDIVlnHQ3gyYGCvVvimdAzD2GQSkFH5MuqdGU7uoSm7Ge_M4uMXaBiQBubN7wkzun4G8WCWh8kwble7t3AeiiLDxdx0VE5H_DhPcK08AO-Nd-BDiO" />
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent"></div>
                    </div>
                    <div className="relative z-10 px-8 max-w-screen-2xl mx-auto w-full">
                        <div className="max-w-3xl">
                            <span className="font-body text-xs uppercase tracking-[0.4em] text-white/70 mb-8 block font-medium">ESTABLISHED MCMXCVIII</span>
                            <h1 className="text-6xl md:text-[7rem] text-white editorial-spacing mb-10 leading-[0.9] text-glow">Quiet Luxury, <br /><span className="font-light italic">Defined.</span></h1>
                            <p className="text-xl text-white/70 max-w-lg leading-relaxed font-light border-l border-white/20 pl-8">
                                A sanctuary for those who seek depth in simplicity. We curate artifacts that bridge the gap between contemporary design and timeless heritage.
                            </p>
                        </div>
                    </div>
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                        <span className="material-symbols-outlined text-white/30 text-3xl">keyboard_double_arrow_down</span>
                    </div>
                </section>
                {/*  Brand Story Section (Refined Layout)  */}
                <section className="py-40 bg-background overflow-hidden">
                    <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
                        <div className="lg:col-span-5 space-y-16">
                            <div className="relative">
                                <span className="text-8xl font-headline opacity-[0.03] absolute -top-12 -left-8 pointer-events-none">PHILOSOPHY</span>
                                <h2 className="text-5xl editorial-spacing mb-10 text-primary">The Philosophy of Selection</h2>
                                <div className="space-y-8">
                                    <p className="text-on-surface-variant text-lg leading-relaxed font-light">
                                        ETHOS CURATED was born from a singular vision: to challenge the transient nature of modern consumption. We believe that the objects surrounding us should hold weight—not just in mass, but in meaning.
                                    </p>
                                    <p className="text-on-surface-variant text-lg leading-relaxed font-light italic">
                                        "Our team scours the globe to identify artisans who master their craft over decades. We don't just sell products; we facilitate a connection between the maker and the connoisseur."
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-6 p-10 border border-outline-variant/30 rounded-xl bg-surface-container-lowest">
                                <span className="material-symbols-outlined text-tertiary text-4xl mt-1" data-icon="verified">verified</span>
                                <div>
                                    <h3 className="text-xl font-headline mb-3">Integrity First</h3>
                                    <p className="text-sm font-body text-on-surface-variant leading-relaxed">Only 1% of the artifacts we review make it into our seasonal collections. Excellence is our only metric, uncompromising and absolute.</p>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-7 relative">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="pt-20">
                                    <div className="aspect-[3/4] overflow-hidden rounded-2xl shadow-2xl">
                                        <img alt="The Maker's Touch" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" data-alt="close-up of artisan hands carefully shaping a piece of dark refined wood in a sunlit dusty workshop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpzY41qOt0zyM9gtXbgDEbx0BJ99DBbacePQ5Zz0aJ8A5aJQA7pwwBln-x_khLwwpRNvnDq_E6_SMMuasQJFIeAKjbicVxQ_SSisCOa1mhwP7E1DjJJ1_VbVvkYGhdG-dCC-icBKfyMbs8n1DOk1R10t0LfOQbovxvlEQzMjcP-W2Zp-It_y5kJ02_oB4HJVosJlijA5Andcy-5ooCMhyhP_FngtiN6z5xECGkwd5qclv7yP6StsFEsuZH4S9uxgYk7WrNbLw5YKtp" />
                                    </div>
                                </div>
                                <div>
                                    <div className="aspect-[3/5] overflow-hidden rounded-2xl shadow-2xl">
                                        <img alt="Design Aesthetic" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" data-alt="minimalist architectural detail of a concrete staircase and a single designer chair with sharp shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD62dJnEAzECrkSU41iV350pMRG33BRbKpQDn7qBKb0BFFzaPFWA63vMhfQT96qW1uTrJitOJA24ealAdgZ2HtH9UCi9ASmcfLQts7fRD8O0bLTa2gKHFK928Vbau0NrxOAg7OeTq2L9QvMTLNIHOoesYngc4-N-A-oe6KVziuT2lNEP9p1MhAgfAsdPrBQM-WCYN8pHWFOiKg8iEoPWlMaR4IEgLx06bMOlISMI1uMwNALVhVNndulxgg66FlrDIMXwOo8LjY9127i" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*  Manifesto / Gallery Grid  */}
                <section className="py-40 bg-surface-container-low/30">
                    <div className="max-w-screen-2xl mx-auto px-8">
                        <div className="text-center mb-32 max-w-2xl mx-auto">
                            <span className="text-tertiary font-body text-xs uppercase tracking-[0.3em] mb-4 block">The Ethos Way</span>
                            <h2 className="text-5xl editorial-spacing mb-8 text-primary">Our Three Pillars</h2>
                            <p className="text-on-surface-variant font-light">Foundational principles that guide every acquisition and artisan partnership.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                            {/*  Pillar 1  */}
                            <div className="group text-center px-6">
                                <div className="mb-12 relative flex justify-center">
                                    <div className="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
                                        <span className="material-symbols-outlined text-4xl text-primary group-hover:text-white transition-colors duration-500" data-icon="history_edu">history_edu</span>
                                    </div>
                                    <span className="absolute -bottom-4 text-6xl font-headline italic text-tertiary opacity-10 select-none">01</span>
                                </div>
                                <h3 className="text-2xl mb-6 font-headline">Ancestral Tech</h3>
                                <p className="text-on-surface-variant font-light leading-relaxed">
                                    We preserve ancient techniques while integrating them into modern life. Our ceramics are fired in kilns that have burned for centuries.
                                </p>
                            </div>
                            {/*  Pillar 2  */}
                            <div className="group text-center px-6">
                                <div className="mb-12 relative flex justify-center">
                                    <div className="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
                                        <span className="material-symbols-outlined text-4xl text-primary group-hover:text-white transition-colors duration-500" data-icon="biotech">biotech</span>
                                    </div>
                                    <span className="absolute -bottom-4 text-6xl font-headline italic text-tertiary opacity-10 select-none">02</span>
                                </div>
                                <h3 className="text-2xl mb-6 font-headline">Radical Sourcing</h3>
                                <p className="text-on-surface-variant font-light leading-relaxed">
                                    Total transparency in our supply chain. We know the names of the weavers and the origin of every thread of linen we offer.
                                </p>
                            </div>
                            {/*  Pillar 3  */}
                            <div className="group text-center px-6">
                                <div className="mb-12 relative flex justify-center">
                                    <div className="w-24 h-24 rounded-full bg-white shadow-xl flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
                                        <span className="material-symbols-outlined text-4xl text-primary group-hover:text-white transition-colors duration-500" data-icon="cycle">cycle</span>
                                    </div>
                                    <span className="absolute -bottom-4 text-6xl font-headline italic text-tertiary opacity-10 select-none">03</span>
                                </div>
                                <h3 className="text-2xl mb-6 font-headline">Circular Lifecycle</h3>
                                <p className="text-on-surface-variant font-light leading-relaxed">
                                    Designed to age gracefully. We offer a restoration service for all our goods to ensure they remain functional for generations.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/*  Our Heritage Section  */}
                <section className="py-40 bg-primary-container text-white overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
                        <div className="w-full h-full border-l border-white/20 transform rotate-12"></div>
                    </div>
                    <div className="max-w-screen-2xl mx-auto px-8 relative z-10">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                            <div className="order-2 lg:order-1">
                                <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
                                    <img alt="Our Heritage" className="w-full h-full object-cover rounded-xl shadow-[20px_20px_0px_0px_rgba(216,200,96,0.3)]" data-alt="vintage black and white photo of a master craftsman in a traditional european workshop" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0kiuJMumR7UMj9hxF8a0yKlIyKBsrNXM23cpu-KSifw1vnKb7wKLZn5BQMycFY7GQOamgBBNGt168IeefQD4kQ8P4kMERgBj-7mpW8zh4nGqJXfBXudVDFri9Mrp0B7b9FdIQMFKd-olBE0z-lhvH8QWM0m2KY_OYzkx-cqGv9ZkJ9iivPoN9_BJMuIE4pu7ssPpwQ_sZIaRi-YWzBmYrsgiMCSNhROZF3yEJV_WL0h0pKeFn2vh0lGk6MJaEdBG48fo-bpPfJ_nf" />
                                </div>
                            </div>
                            <div className="order-1 lg:order-2 space-y-10">
                                <span className="text-tertiary-fixed font-body text-xs uppercase tracking-[0.3em] block">Our Heritage</span>
                                <h2 className="text-5xl md:text-6xl editorial-spacing leading-tight">A Legacy of <br /><span className="italic font-light">Quiet Intent</span></h2>
                                <div className="h-1 w-20 bg-tertiary-fixed mb-10"></div>
                                <p className="text-white/70 text-lg leading-relaxed font-light">
                                    Founded by the Thorne family in 1998, ETHOS CURATED began as a small restoration atelier in Antwerp. What started as a passion for preserving mid-century Dutch masterpieces evolved into a global network of craft excellence.
                                </p>
                                <p className="text-white/70 text-lg leading-relaxed font-light">
                                    Today, the second generation of the Thorne family continues to lead with the same ethos: that true luxury doesn't scream for attention; it commands respect through its silent presence.
                                </p>
                                <div className="pt-6">
                                    <a className="inline-flex items-center gap-4 text-tertiary-fixed hover:text-white transition-colors group" href="#">
                                        <span className="text-sm uppercase tracking-widest font-semibold">Read the Full Story</span>
                                        <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">arrow_right_alt</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*  Quote Section  */}
                <section className="py-40 bg-background border-y border-outline-variant/10 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.02] flex items-center justify-center">
                        <span className="text-[40rem] font-headline">"</span>
                    </div>
                    <div className="max-w-4xl mx-auto px-8 text-center relative z-10">
                        <span className="material-symbols-outlined text-tertiary text-7xl mb-12 block" data-icon="format_quote">format_quote</span>
                        <blockquote className="text-3xl md:text-5xl font-headline italic leading-snug mb-12 text-primary">
                            "Luxury is not about excess. It is about the presence of excellence and the absence of the unnecessary."
                        </blockquote>
                        <div className="flex items-center justify-center gap-4">
                            <div className="h-[1px] w-12 bg-outline-variant"></div>
                            <cite className="font-body text-sm uppercase tracking-[0.3em] text-on-surface">Elias Thorne, Founder</cite>
                            <div className="h-[1px] w-12 bg-outline-variant"></div>
                        </div>
                    </div>
                </section>
                {/*  CTA / Artifact Selection  */}
                <section className="py-40 relative">
                    <div className="max-w-screen-2xl mx-auto px-8 text-center">
                        <div className="max-w-3xl mx-auto space-y-10">
                            <h2 className="text-5xl md:text-6xl editorial-spacing text-primary">Begin Your Collection</h2>
                            <p className="text-on-surface-variant max-w-xl mx-auto text-lg font-light leading-relaxed">
                                Each curated artifact holds a unique history and a promise of enduring quality. Discover the pieces that will define your space.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-10">
                                <a className="px-16 py-6 bg-primary text-white rounded-full font-medium transition-all hover:bg-primary/90 shadow-2xl hover:-translate-y-1" href="#">
                                    Explore Collections
                                </a>
                                <a className="px-16 py-6 border border-primary text-primary rounded-full font-medium transition-all hover:bg-primary hover:text-white group" href="#">
                                    Contact Curator <span className="inline-block transition-transform group-hover:translate-x-1 ml-2">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            {/*  Footer  */}
            <footer className="bg-slate-50 dark:bg-slate-900 full-width py-24 border-t border-slate-200 dark:border-slate-800">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 px-8 max-w-screen-2xl mx-auto">
                    <div className="col-span-2 md:col-span-1">
                        <div className="text-2xl font-serif text-slate-900 dark:text-slate-50 mb-8 tracking-tighter">ETHOS CURATED</div>
                        <p className="text-slate-500 text-sm leading-relaxed max-w-xs font-light">A gallery of living. Curating the world's most meaningful artifacts for the modern home since 1998.</p>
                    </div>
                    <div className="flex flex-col space-y-6">
                        <span className="font-bold text-xs uppercase tracking-[0.2em] text-slate-900 dark:text-slate-50">Discovery</span>
                        <div className="flex flex-col space-y-4">
                            <a className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm" href="#">Brand Story</a>
                            <a className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm" href="#">Collections</a>
                            <a className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm" href="#">Artisan Stories</a>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-6">
                        <span className="font-bold text-xs uppercase tracking-[0.2em] text-slate-900 dark:text-slate-50">Artifact Support</span>
                        <div className="flex flex-col space-y-4">
                            <a className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm" href="#">Shipping &amp; Delivery</a>
                            <a className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm" href="#">Secure Payment</a>
                            <a className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm" href="#">Tracking</a>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-6">
                        <span className="font-bold text-xs uppercase tracking-[0.2em] text-slate-900 dark:text-slate-50">Company</span>
                        <div className="flex flex-col space-y-4">
                            <a className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm" href="#">FAQ</a>
                            <a className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm" href="#">Contact</a>
                            <a className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors text-sm" href="#">Privacy Policy</a>
                        </div>
                    </div>
                </div>
                <div className="max-w-screen-2xl mx-auto px-8 mt-24 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-xs font-body text-slate-400 tracking-widest uppercase">© 2024 ETHOS CURATED. ALL ARTIFACTS RESERVED.</p>
                    <div className="flex space-x-8">
                        <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-xl" data-icon="public">public</span></a>
                        <a className="text-slate-400 hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined text-xl" data-icon="share">share</span></a>
                    </div>
                </div>
            </footer>
        </div>
    )
}