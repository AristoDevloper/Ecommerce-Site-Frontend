export function DesktopFaqPage() {
    return (
        <div className="bg-background text-on-surface">
            
            <main className="max-w-screen-2xl mx-auto px-8 py-20">
                
                {/*  Bento Grid Navigation for FAQ Categories  */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-32">
                    <a className="group relative bg-surface-container-low p-8 h-64 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:bg-surface-container-high" href="#shipping">
                        <span className="material-symbols-outlined text-3xl text-tertiary">local_shipping</span>
                        <div>
                            <h3 className="font-serif text-2xl mb-1">Shipping</h3>
                            <p className="text-sm text-on-surface-variant opacity-60">Global Logistics &amp; Handling</p>
                        </div>
                        <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <span className="material-symbols-outlined text-[12rem]">local_shipping</span>
                        </div>
                    </a>
                    <a className="group relative bg-surface-container-low p-8 h-64 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:bg-surface-container-high" href="#returns">
                        <span className="material-symbols-outlined text-3xl text-tertiary">rebase_edit</span>
                        <div>
                            <h3 className="font-serif text-2xl mb-1">Returns</h3>
                            <p className="text-sm text-on-surface-variant opacity-60">Exchanges &amp; Artifact Recovery</p>
                        </div>
                        <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <span className="material-symbols-outlined text-[12rem]">rebase_edit</span>
                        </div>
                    </a>
                    <a className="group relative bg-surface-container-low p-8 h-64 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:bg-surface-container-high" href="#sizing">
                        <span className="material-symbols-outlined text-3xl text-tertiary">straighten</span>
                        <div>
                            <h3 className="font-serif text-2xl mb-1">Sizing</h3>
                            <p className="text-sm text-on-surface-variant opacity-60">Fit Guides &amp; Dimensions</p>
                        </div>
                        <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <span className="material-symbols-outlined text-[12rem]">straighten</span>
                        </div>
                    </a>
                    <a className="group relative bg-surface-container-low p-8 h-64 flex flex-col justify-between overflow-hidden transition-all duration-500 hover:bg-surface-container-high" href="#care">
                        <span className="material-symbols-outlined text-3xl text-tertiary">sanitizer</span>
                        <div>
                            <h3 className="font-serif text-2xl mb-1">Care</h3>
                            <p className="text-sm text-on-surface-variant opacity-60">Preservation &amp; Maintenance</p>
                        </div>
                        <div className="absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity">
                            <span className="material-symbols-outlined text-[12rem]">sanitizer</span>
                        </div>
                    </a>
                </div>
                {/*  FAQ Content Sections  */}
                <div className="space-y-40">
                    {/*  Shipping Section  */}
                    <section className="grid grid-cols-1 md:grid-cols-12 gap-12" id="shipping">
                        <div className="md:col-span-4 sticky top-32 h-fit">
                            <h2 className="font-serif text-3xl mb-4 tracking-tight">Shipping &amp; Logistics</h2>
                            <p className="text-on-surface-variant leading-relaxed mb-8">We treat every delivery as a curated transit of value. Every package is tracked and insured for its full market appraisal.</p>
                            <div className="w-full aspect-[4/5] bg-surface-container-low overflow-hidden rounded-lg">
                                <img className="w-full h-full object-cover" alt="minimalist delivery box" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDI2R9zJxeJ2TOLQb8L6mzCYqyGbsC0CJ9XzObdrFnL4rChbFxaEn4Ht_elUkKY6jGVkHGx5H0yN0KSIbBUijSF81Q-ZBIPvEofrJu6Znk91kknXFOqiCIKmr8e4_OsnjpU32ptUvr1NHkwaHdL356bPy2jYdpYDgAxIiaf2Eoj-y1K2tJKu12LC2BDQs0SjiMFOSd3i4Ej77fIHI54_q3Yh8-Y0mIfNVpOE_4ERdt2viqY4-BJ8vEKlfeD4qLPPYsG_76lboyn79RT" />
                            </div>
                        </div>
                        <div className="md:col-span-8 space-y-2">
                            <details className="group bg-surface-container-lowest transition-all">
                                <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                                    <span className="text-xl font-medium">What is the estimated delivery timeframe for international orders?</span>
                                    <span className="material-symbols-outlined expand-icon transition-transform duration-300">add</span>
                                </summary>
                                <div className="px-8 pb-8 text-on-surface-variant leading-relaxed max-w-2xl">
                                    International acquisitions typically arrive within 7-12 business days. Each artifact undergoes a final quality inspection at our London hub before being dispatched via white-glove courier services.
                                </div>
                            </details>
                            <details className="group bg-surface-container-lowest transition-all">
                                <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                                    <span className="text-xl font-medium">How are shipping costs calculated?</span>
                                    <span className="material-symbols-outlined expand-icon transition-transform duration-300">add</span>
                                </summary>
                                <div className="px-8 pb-8 text-on-surface-variant leading-relaxed max-w-2xl">
                                    Ethos Curated provides complimentary standard shipping on all acquisitions over $500. For orders below this threshold, a flat rate of $25 is applied to cover specialized climate-controlled handling.
                                </div>
                            </details>
                            <details className="group bg-surface-container-lowest transition-all">
                                <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                                    <span className="text-xl font-medium">Can I track my artifact in real-time?</span>
                                    <span className="material-symbols-outlined expand-icon transition-transform duration-300">add</span>
                                </summary>
                                <div className="px-8 pb-8 text-on-surface-variant leading-relaxed max-w-2xl">
                                    Upon dispatch, you will receive a digital folio containing a bespoke tracking link. This link monitors the environmental conditions and GPS location of your artifact until it reaches your door.
                                </div>
                            </details>
                        </div>
                    </section>
                    {/*  Returns Section  */}
                    <section className="grid grid-cols-1 md:grid-cols-12 gap-12" id="returns">
                        <div className="md:col-span-8 order-2 md:order-1 space-y-2">
                            <details className="group bg-surface-container-low transition-all">
                                <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                                    <span className="text-xl font-medium">What is the return window for an artifact?</span>
                                    <span className="material-symbols-outlined expand-icon transition-transform duration-300">add</span>
                                </summary>
                                <div className="px-8 pb-8 text-on-surface-variant leading-relaxed max-w-2xl">
                                    If an artifact does not resonate with your space, you may initiate a return within 14 days of delivery. The item must remain in its original archival condition with all authentication documents present.
                                </div>
                            </details>
                            <details className="group bg-surface-container-low transition-all">
                                <summary className="flex items-center justify-between p-8 cursor-pointer list-none">
                                    <span className="text-xl font-medium">How do I process a return?</span>
                                    <span className="material-symbols-outlined expand-icon transition-transform duration-300">add</span>
                                </summary>
                                <div className="px-8 pb-8 text-on-surface-variant leading-relaxed max-w-2xl">
                                    Contact our concierge team at concierge@ethoscurated.com. We will arrange for a private courier to collect the artifact from your location at a time of your convenience.
                                </div>
                            </details>
                        </div>
                        <div className="md:col-span-4 order-1 md:order-2 sticky top-32 h-fit">
                            <h2 className="font-serif text-3xl mb-4 tracking-tight">Returns &amp; Recovery</h2>
                            <p className="text-on-surface-variant leading-relaxed mb-8">We believe in a friction-less lifecycle. If a piece doesn't align with your vision, we facilitate a graceful transition.</p>
                            <div className="w-full aspect-[4/3] bg-surface-container-low overflow-hidden rounded-lg">
                                <img className="w-full h-full object-cover" alt="minimalist warehouse interior" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBf0yXUnuxHTNcsxNVoyO9UP8f_YUQjwr5XXwx--GfqOQP080XIJzK1_XFOR2I_FesEKqThf4rQL3EBSiC2Bt80EKHwXMg5wy94krF_ttcvah2WYkSeKR5voPlCNwkuKyfsq_W1M5xQwKxfILfDTBBJphHDe9LJHZg9ZljWLZ3gaf-5o_8aaFnadb3EtOHBp6yaOUMnptFbBCsYs90gpMGwHTrs_QSNyvcFYQDTqQhLTDZgAilFiRwCGsxRfSAD5wNXm9GiZB8n2gxq" />
                            </div>
                        </div>
                    </section>
                    {/*  Sizing Section  */}
                    <section className="grid grid-cols-1 md:grid-cols-12 gap-12" id="sizing">
                        <div className="md:col-span-4 sticky top-32 h-fit">
                            <h2 className="font-serif text-3xl mb-4 tracking-tight">Sizing &amp; Proportion</h2>
                            <p className="text-on-surface-variant leading-relaxed mb-8">Proportion is the soul of curation. Use our technical guides to ensure a perfect integration into your environment.</p>
                        </div>
                        <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="p-8 bg-surface-container-lowest shadow-sm">
                                <h4 className="font-serif text-xl mb-4">Apparel Archives</h4>
                                <ul class="space-y-4 text-on-surface-variant">
                                    <li className="flex justify-between border-b border-outline-variant/20 pb-2"><span>S / Small</span> <span className="text-primary font-medium">36-38"</span></li>
                                    <li className="flex justify-between border-b border-outline-variant/20 pb-2"><span>M / Medium</span> <span className="text-primary font-medium">38-40"</span></li>
                                    <li className="flex justify-between border-b border-outline-variant/20 pb-2"><span>L / Large</span> <span className="text-primary font-medium">40-42"</span></li>
                                    <li className="flex justify-between border-b border-outline-variant/20 pb-2"><span>XL / X-Large</span> <span className="text-primary font-medium">42-44"</span></li>
                                </ul>
                                <button className="mt-8 text-primary font-medium border-b border-primary py-1 hover:opacity-70 transition-opacity">Detailed Fit Guide</button>
                            </div>
                            <div className="p-8 bg-surface-container-lowest shadow-sm">
                                <h4 className="font-serif text-xl mb-4">Objects &amp; Forms</h4>
                                <p className="text-on-surface-variant text-sm mb-6">For furniture and sculpture, we provide detailed volumetric measurements (L x W x H) in the product technical specs.</p>
                                <div className="aspect-video bg-surface-container-low rounded-lg overflow-hidden">
                                    <img className="w-full h-full object-cover" alt="minimalist wooden chair" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEj5G1qUgly7sbD2uSJfGmOJ2sM58qZ4CQWUGWsBN9cYbgvc2QEti3n0olG4eep7vEHZH2Bh7ndpC1hFCtXdzT9Al2UvBYc2q0wa51cQaCL3_wnuf2EJOGlEiwKNgOFx9Aug3a_BQvscu7ZNn5D486uvhoEFnr-PbvQ5Is4M_cvWi-44Aex_WVfPC8qfxqNDDne6YnLnMQpcaiHyp_BvDUJQGwKIuP0ZgQpQy5yzPc4VjG9kPS6_92GbZ8wOUu-QcBi6OicxdB2fAL" />
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*  Care Instructions  */}
                    <section className="bg-primary text-on-primary p-12 md:p-24 rounded-lg relative overflow-hidden" id="care">
                        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                            <div>
                                <h2 className="font-serif text-4xl mb-6">Artifact Preservation</h2>
                                <p className="text-on-primary-container text-lg leading-relaxed mb-8">Each Ethos Curated piece is designed to age into a legacy. Proper maintenance ensures its narrative remains untarnished through time.</p>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <span className="material-symbols-outlined text-tertiary-fixed">light_mode</span>
                                        <div>
                                            <h5 className="font-bold mb-1">Exposure Control</h5>
                                            <p className="text-sm opacity-80">Limit direct sunlight exposure for textiles and natural wood finishes to prevent pigment oxidation.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <span className="material-symbols-outlined text-tertiary-fixed">humidity_mid</span>
                                        <div>
                                            <h5 className="font-bold mb-1">Climate Regulation</h5>
                                            <p className="text-sm opacity-80">Maintain a stable humidity level between 45% and 55% for organic material stability.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-primary-container/30 backdrop-blur-md p-8 border border-white/5">
                                <h3 className="font-serif text-2xl mb-6">Request Restoration Service</h3>
                                <p className="text-sm mb-6 opacity-70">If your artifact requires professional cleaning or structural restoration, our network of master artisans is available for private commissions.</p>
                                <a className="inline-block bg-white text-primary px-8 py-3 font-bold hover:opacity-90 transition-opacity" href="mailto:restore@ethoscurated.com">Inquire via Concierge</a>
                            </div>
                        </div>
                    </section>
                </div>
                {/*  Contact CTA  */}
                <section className="mt-40 text-center max-w-xl mx-auto">
                    <span className="block font-medium tracking-widest text-xs mb-4 text-tertiary">STILL SEEKING ANSWERS?</span>
                    <h2 className="font-serif text-4xl mb-8">Our curators are standing by to assist with your journey.</h2>
                    <div className="flex justify-center gap-8">
                        <button className="font-semibold text-primary underline underline-offset-8 decoration-1 hover:text-tertiary transition-colors">Chat Live</button>
                        <button className="font-semibold text-primary underline underline-offset-8 decoration-1 hover:text-tertiary transition-colors">Book a Call</button>
                    </div>
                </section>
            </main>
            {/*  Footer  */}
            <footer className="bg-slate-50 dark:bg-slate-900 full-width py-16 mt-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 px-8 max-w-screen-2xl mx-auto">
                    <div className="col-span-2 md:col-span-1">
                        <div className="text-xl font-serif text-slate-900 dark:text-slate-50 mb-6">ETHOS CURATED</div>
                        <p className="text-sm text-slate-500 leading-relaxed max-w-xs">A digital gallery of timeless artifacts. Curated with precision, delivered with care.</p>
                    </div>
                    <div>
                        <h4 className="text-xs font-bold tracking-widest text-slate-900 dark:text-slate-50 mb-6">SERVICES</h4>
                        <ul className="space-y-4">
                            <li><a className="text-slate-500 hover:text-amber-700 dark:hover:text-amber-500 transition-colors text-sm" href="#">Shipping &amp; Delivery</a></li>
                            <li><a className="text-slate-500 hover:text-amber-700 dark:hover:text-amber-500 transition-colors text-sm" href="#">Tracking</a></li>
                            <li><a className="text-slate-500 hover:text-amber-700 dark:hover:text-amber-500 transition-colors text-sm" href="#">Secure Payment</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xs font-bold tracking-widest text-slate-900 dark:text-slate-50 mb-6">BRAND</h4>
                        <ul className="space-y-4">
                            <li><a className="text-slate-500 hover:text-amber-700 dark:hover:text-amber-500 transition-colors text-sm" href="#">Brand Story</a></li>
                            <li><a className="text-slate-500 hover:text-amber-700 dark:hover:text-amber-500 transition-colors text-sm" href="#">Sustainability</a></li>
                            <li><a className="text-slate-500 hover:text-amber-700 dark:hover:text-amber-500 transition-colors text-sm" href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-xs font-bold tracking-widest text-slate-900 dark:text-slate-50 mb-6">CONNECT</h4>
                        <ul className="space-y-4">
                            <li><a className="text-slate-500 hover:text-amber-700 dark:hover:text-amber-500 transition-colors text-sm" href="#">Instagram</a></li>
                            <li><a className="text-slate-500 hover:text-amber-700 dark:hover:text-amber-500 transition-colors text-sm" href="#">Pinterest</a></li>
                            <li><a className="text-slate-500 hover:text-amber-700 dark:hover:text-amber-500 transition-colors text-sm" href="#">Newsletter</a></li>
                        </ul>
                    </div>
                </div>
                <div className="max-w-screen-2xl mx-auto px-8 mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
                    <span className="text-xs text-slate-400">© 2024 ETHOS CURATED. ALL ARTIFACTS RESERVED.</span>
                    <div className="flex gap-4">
                        <span className="material-symbols-outlined text-slate-400 text-lg">payments</span>
                        <span className="material-symbols-outlined text-slate-400 text-lg">shield</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
