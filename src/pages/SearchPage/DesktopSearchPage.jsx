export function DesktopSearchPage() {
    return (
        <div className="bg-background text-on-surface desktop-screen">
            
            <main className="max-w-screen-2xl mx-auto px-8 pt-12">
                
                <div className="flex flex-col md:flex-row gap-12">
                    {/*  Sidebar Filters  */}
                    <aside className="w-full md:w-64 flex-shrink-0">
                        <div className="sticky top-28 space-y-10">
                            {/*  Category Filter  */}
                            <div>
                                <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-primary">Collections</h3>
                                <ul className="space-y-4 font-body text-sm">
                                    <li className="flex items-center justify-between text-primary font-semibold">
                                        <span>Home Objects</span>
                                        <span className="text-[10px] bg-surface-container px-2 py-1 rounded-full">08</span>
                                    </li>
                                    <li className="flex items-center justify-between text-on-surface-variant hover:text-primary transition-colors">
                                        <span>Wearables</span>
                                        <span className="text-[10px] text-on-surface-variant/50">04</span>
                                    </li>
                                    <li className="flex items-center justify-between text-on-surface-variant hover:text-primary transition-colors">
                                        <span>Stationery</span>
                                        <span className="text-[10px] text-on-surface-variant/50">00</span>
                                    </li>
                                </ul>
                            </div>
                            {/*  Price Range  */}
                            <div>
                                <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-primary">Price Range</h3>
                                <div className="space-y-4">
                                    <input className="w-full h-1 bg-surface-container-highest rounded-lg appearance-none cursor-pointer accent-primary" type="range" />
                                    <div className="flex justify-between text-xs font-body text-on-surface-variant">
                                        <span>$0</span>
                                        <span>$2,500+</span>
                                    </div>
                                </div>
                            </div>
                            {/*  Material/Finish  */}
                            <div>
                                <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-6 text-primary">Aesthetic Finish</h3>
                                <div className="flex flex-wrap gap-2">
                                    <button className="px-4 py-2 text-xs font-label bg-primary text-on-primary rounded-lg">Matte Black</button>
                                    <button className="px-4 py-2 text-xs font-label bg-surface-container-low text-on-surface-variant rounded-lg border border-outline-variant/20 hover:border-outline-variant transition-all">Polished Silver</button>
                                    <button className="px-4 py-2 text-xs font-label bg-surface-container-low text-on-surface-variant rounded-lg border border-outline-variant/20 hover:border-outline-variant transition-all">Raw Concrete</button>
                                    <button className="px-4 py-2 text-xs font-label bg-surface-container-low text-on-surface-variant rounded-lg border border-outline-variant/20 hover:border-outline-variant transition-all">Smoked Glass</button>
                                </div>
                            </div>
                            {/*  Availability  */}
                            <div className="pt-6 border-t border-outline-variant/10">
                                <label className="flex items-center space-x-3 cursor-pointer group">
                                    <div className="w-5 h-5 border border-outline-variant rounded flex items-center justify-center group-hover:border-primary transition-colors">
                                        <span className="material-symbols-outlined text-xs text-primary hidden group-active:block">check</span>
                                    </div>
                                    <span className="text-sm font-body text-on-surface-variant">In Stock Only</span>
                                </label>
                            </div>
                        </div>
                    </aside>
                    {/*  Product Grid (Asymmetric Bento Style)  */}
                    <section className="flex-grow">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                            {/*  Product 1: Large Featured Card  */}
                            <div className="group lg:col-span-2 relative">
                                <div className="aspect-[16/9] overflow-hidden bg-surface-container-low rounded-xl mb-6 relative">
                                    <img alt="Obsidian Table Lamp" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Minimalist matte black obsidian table lamp on a raw concrete surface with sharp geometric shadows and soft ambient lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_2ex3eBWeVvoipLqjpBH9IF5OcP6z9v0l1VcbgmYStOCqKcp3MEmK-Cv3iWx7fmwShySjf8w4GNXv9rfUnZoqZgD9lJ6UyrO0DHC6a0I0zTgI5NRjmih2jmtfw-r-n4_qT1gxn6FsW9iEUPCbXk1rLA_55X2RhiSiforq7_5DM5GDfPm6jgnPAQmjsoRnEjUMox7gp0Sr6euv4ALORU8UJK3G_ZjJh6bYK7ZH6SMTiCNJtGJcIXZStZVmNbtbCVtr5KgOU4TG8Nry" />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-tertiary text-on-tertiary px-3 py-1 text-[10px] font-bold uppercase tracking-widest rounded-full">Limited Edition</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-serif text-2xl text-primary mb-1">Mono-01 Obsidian Lamp</h3>
                                        <p className="text-on-surface-variant text-sm font-body">Hand-carved volcanic stone, dimmable LED core.</p>
                                    </div>
                                    <span className="font-body font-semibold text-lg">$1,240</span>
                                </div>
                            </div>
                            {/*  Product 2  */}
                            <div className="group">
                                <div className="aspect-square overflow-hidden bg-surface-container-low rounded-xl mb-6">
                                    <img alt="Ceramic Vessel" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Handcrafted matte black ceramic vessel with an irregular organic silhouette set against a neutral grey studio background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2My1ru7I8eNiJTReN3iiDPQJduhjBAoXELqD2gp4_bkf6-9yBJpa4j8nsSpJXrT7Tg4YkgH0rYYIFyGc8JNe3K8IC64-vRQ4Dd1PQvcT3UY7XIcaO7EutkppvPD8YDjrRkiMVuodSi-aEXMncwKZ1r8CH5WRWhidh7tt1VCkIL8DbP_PoLKMl6UM-45vXVx1uxe3MJwvVBKYv6lLfaPssXTEmt1M9EaLstBdP1Et5u8k9BF3AU4TMIPsqypmD7uo49pXWWSMXvEJv" />
                                </div>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-serif text-lg text-primary mb-1">Vessel No. 04</h3>
                                        <p className="text-on-surface-variant text-xs font-body">Textured ceramic sculpture.</p>
                                    </div>
                                    <span className="font-body font-medium text-sm">$320</span>
                                </div>
                            </div>
                            {/*  Product 3  */}
                            <div className="group">
                                <div className="aspect-[4/5] overflow-hidden bg-surface-container-low rounded-xl mb-6">
                                    <img alt="Brushed Steel Clock" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Ultra-minimalist wall clock with brushed dark steel face and no numerals, hanging on a white textured wall with morning sunlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBssiLqCzjZ1SZhksOagCZDxiE-r0klwhcBnELv702oeO38Niog_fTJxgGIDDciBccT2sbKvz0sSkgdHTNgExgFrvqp9cK87q17rqe3_u3KN0VwnWQltcqt0_nw02M3AKlizYO0NM7DFma8wU62VF10RVWaRidaNNPMlO34KMrt7q9ZFlECPb18oAuJegRnWM6wfStQ1Yfw5qlIMEKMWcv9FI4ZinbjlzZ07MjeIbfQijQzepHUisYUZ61mvqrNSioZiGExzbqiqrwc" />
                                </div>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-serif text-lg text-primary mb-1">Interval Wall Piece</h3>
                                        <p className="text-on-surface-variant text-xs font-body">Brushed charcoal steel.</p>
                                    </div>
                                    <span className="font-body font-medium text-sm">$580</span>
                                </div>
                            </div>
                            {/*  Product 4: Wide Card  */}
                            <div className="group lg:col-span-2">
                                <div className="aspect-[21/9] overflow-hidden bg-surface-container-low rounded-xl mb-6">
                                    <img alt="Modern Modular Sofa" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Sleek low-profile modular sofa in deep navy fabric within a bright minimalist living room with floor to ceiling windows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbJOdYvcAMqW-Ud_bxXn0TuzyiSL5dGjJ28bkY2WFEuEH2IJyKTGyUb5NVBK8oWol11MbdaGhH5vI5UYAevZrTcG97TPjJIQcw2sAWjvVhPOZteuWzEJYOw_FT_Su-0PWhHhe_t8Yt-DB6f1-wuM0S0Bs9Z5NkxV7vVgKqkiWkOJ56OqnHNGfMahsJWezj2BzENXXZeTMGeOvECTaEb6i-o94xRvtI53f6RVjLgwxiP4KzJO3QK27xLwp0ofhnWo-PTdgOaeAXCs1Y" />
                                </div>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-serif text-2xl text-primary mb-1">Stratos Low Sofa</h3>
                                        <p className="text-on-surface-variant text-sm font-body">Modular Italian textile system in Midnight.</p>
                                    </div>
                                    <span className="font-body font-semibold text-lg">$4,800</span>
                                </div>
                            </div>
                            {/*  Product 5  */}
                            <div className="group">
                                <div className="aspect-square overflow-hidden bg-surface-container-low rounded-xl mb-6">
                                    <img alt="Watch" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" data-alt="Top-down shot of a minimalist black wristwatch with a leather strap on a smooth dark slate surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUBVtImaxRQSOwGFxMcRUpBsCS4bmeWAEQK0jR65XrrE_LmNK3KNdQZo_59y2zy581ngtECoqMiToftc9joS2orGrdTnuJFyMB0UdteS32qC357_d3Tvrn6j024wPJuDxb4nhFke8-ePbDwM51A6IIggpELYvA-KuXTc9nnMsEEa9o6DpLW5Of03sT-cuyIX3_CPgs8BG15iwGZIw1IPUDcz1jwFBnZN2_R0OiFZFT22ZOhPm2DWEZU65f3RdteHwB1rgSl3NasVCt" />
                                </div>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-serif text-lg text-primary mb-1">Chrono Obsidian</h3>
                                        <p className="text-on-surface-variant text-xs font-body">Automatic movement, sapphire crystal.</p>
                                    </div>
                                    <span className="font-body font-medium text-sm">$1,100</span>
                                </div>
                            </div>
                        </div>
                        {/*  Pagination  */}
                        <div className="mt-24 flex items-center justify-center space-x-4">
                            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant/20 text-on-surface-variant hover:border-primary hover:text-primary transition-all">
                                <span className="material-symbols-outlined">chevron_left</span>
                            </button>
                            <div className="flex items-center space-x-2 font-label text-sm">
                                <span className="text-primary font-bold underline decoration-2 underline-offset-8">01</span>
                                <span className="text-on-surface-variant hover:text-primary cursor-pointer px-3">02</span>
                                <span className="text-on-surface-variant hover:text-primary cursor-pointer px-3">03</span>
                                <span className="text-on-surface-variant px-2">...</span>
                                <span className="text-on-surface-variant hover:text-primary cursor-pointer px-3">08</span>
                            </div>
                            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant/20 text-on-surface-variant hover:border-primary hover:text-primary transition-all">
                                <span className="material-symbols-outlined">chevron_right</span>
                            </button>
                        </div>
                    </section>
                </div>
            </main>
            {/*  Footer  */}
            <footer className="bg-slate-50 dark:bg-slate-900 full-width py-16 mt-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 px-8 max-w-screen-2xl mx-auto">
                    <div>
                        <div className="text-xl font-serif text-slate-900 dark:text-slate-50 mb-6 uppercase">ETHOS CURATED</div>
                        <p className="text-sm font-body text-slate-500 dark:text-slate-400 leading-relaxed">Curating rare artifacts for the modern connoisseur. Quality over quantity, intention over impulse.</p>
                    </div>
                    <div>
                        <h4 className="font-serif text-slate-900 dark:text-slate-50 mb-6">Collections</h4>
                        <ul className="space-y-4 text-sm font-body">
                            <li><a className="text-slate-500 dark:text-slate-400 hover:text-amber-700 dark:hover:text-amber-500 transition-colors" href="#">New Artifacts</a></li>
                            <li><a className="text-slate-500 dark:text-slate-400 hover:text-amber-700 dark:hover:text-amber-500 transition-colors" href="#">The Monolith Series</a></li>
                            <li><a className="text-slate-500 dark:text-slate-400 hover:text-amber-700 dark:hover:text-amber-500 transition-colors" href="#">Archival Items</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-serif text-slate-900 dark:text-slate-50 mb-6">Experience</h4>
                        <ul className="space-y-4 text-sm font-body">
                            <li><a className="text-slate-500 dark:text-slate-400 hover:text-amber-700 dark:hover:text-amber-500 transition-colors" href="#">Brand Story</a></li>
                            <li><a className="text-slate-500 dark:text-slate-400 hover:text-amber-700 dark:hover:text-amber-500 transition-colors" href="#">Secure Payment</a></li>
                            <li><a className="text-slate-500 dark:text-slate-400 hover:text-amber-700 dark:hover:text-amber-500 transition-colors" href="#">FAQ</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-serif text-slate-900 dark:text-slate-50 mb-6">Connection</h4>
                        <ul className="space-y-4 text-sm font-body">
                            <li><a className="text-slate-500 dark:text-slate-400 hover:text-amber-700 dark:hover:text-amber-500 transition-colors" href="#">Instagram</a></li>
                            <li><a className="text-slate-500 dark:text-slate-400 hover:text-amber-700 dark:hover:text-amber-500 transition-colors" href="#">Journal</a></li>
                            <li><a className="text-slate-500 dark:text-slate-400 hover:text-amber-700 dark:hover:text-amber-500 transition-colors" href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-16 px-8 max-w-screen-2xl mx-auto border-t border-outline-variant/10 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-[0.2em] font-label text-slate-400 uppercase">
                    <span>© 2024 ETHOS CURATED. ALL ARTIFACTS RESERVED.</span>
                    <div className="flex space-x-8 mt-4 md:mt-0">
                        <a className="hover:text-primary transition-colors" href="#">Privacy</a>
                        <a className="hover:text-primary transition-colors" href="#">Terms</a>
                        <a className="hover:text-primary transition-colors" href="#">Cookies</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}