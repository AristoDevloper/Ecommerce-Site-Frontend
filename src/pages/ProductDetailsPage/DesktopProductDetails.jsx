export function DesktopProductDetails() {
    return (
        <div className="bg-background text-on-surface font-body selection:bg-tertiary-container selection:text-on-tertiary-container">
            {/*  Top Navigation Bar  */}
            <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl flex justify-between items-center px-6 py-4 md:px-12">
                <div className="text-2xl font-['Noto_Serif'] font-bold tracking-tighter text-slate-900 dark:text-slate-50 uppercase">CURATED</div>
                <div className="hidden md:flex items-center space-x-8 font-['Noto_Serif'] tracking-tight text-sm uppercase">
                    <a className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" href="#">Collections</a>
                    <a className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" href="#">Archive</a>
                    <a className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" href="#">Journal</a>
                </div>
                <div className="flex items-center space-x-6">
                    <button className="hover:opacity-70 transition-opacity duration-300">
                        <span className="material-symbols-outlined text-slate-900">shopping_bag</span>
                    </button>
                    <button className="hover:opacity-70 transition-opacity duration-300">
                        <span className="material-symbols-outlined text-slate-900">person</span>
                    </button>
                </div>
            </nav>
            <main className="pt-24 pb-20">
                {/*  Product Hero Section (Asymmetric Editorial Layout)  */}
                <section className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/*  Gallery Grid  */}
                    <div className="lg:col-span-7 space-y-8">
                        <div className="aspect-[4/5] bg-surface-container-low rounded-md overflow-hidden">
                            <img className="w-full h-full object-cover" data-alt="studio shot of a minimalist luxury timepiece on a textured charcoal background with sharp editorial lighting and soft shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCoQXqDxSRGKPo4aiHjHdP3LCm7W7rvVYOakW5wr6XgEr_cgqdM81FmB5JytntYT2sF2kLlN-Pppepv5zCyxKEkwrcjiKPa2NMVsyE-_OhCF3hGSVLU8QB16phcwIH2S09B3JXb3dpeRZD4FiLzI9Ofu38_3dtWOPr32rpqfcQMtxdbr9zfj8prQYcn4MXNRgdPjGab6O_ebFTSarPA1rBbyPBpACJ5pujK3iThCqYNW6VeO7CLjSBDXf-r3OladvR4IkvwFAvwhg3v" />
                        </div>
                        <div className="grid grid-cols-2 gap-8">
                            <div className="aspect-square bg-surface-container-low rounded-md overflow-hidden">
                                <img className="w-full h-full object-cover" data-alt="extreme close up of a watch crown and bezel showing intricate mechanical details and polished steel reflections" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQ_FuqmHvv8sJYmiaEwMkETKVbKJCFufOy3e9H3nQdYdekF8UYf540oIxMRWapgjjg5XZhQLmR2DLAV4PBAmO30wfd-TMGv__dITHvxl_bxEsrTqDc0lou6tZ1z2TrXmywFZMiAvXX-67MlI_eNuQ7i5NM7oVQD7odax94lc0IiwSEdL4tLovfKziZxeORhI_CtHz1lOZWAEMilhp7unSu4kkKiHYsoKCeRMUUUOeAxz_ZopCZlImowjn8fKBbKOhniWyGXeVlYIlO" />
                            </div>
                            <div className="aspect-square bg-surface-container-low rounded-md overflow-hidden translate-y-12">
                                <img className="w-full h-full object-cover" data-alt="lifestyle shot of a luxury watch worn on a wrist under a tailored wool sleeve in a soft lit architectural setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAs_EB-S3oHLtGBCDR8xA0pyMh6soKNGCC7jqoXolCr22cB-GMAImAd5Ku48DWk4JHnSwbNuIu219_StUKGDvS9X4iVNMhPHUGmnfCUlUeB_1xtPxxULmMwwYmEV36vza_qRvDjhlB4VTXNY1_niolZLm51x1h_e9y11wiFPwVFdveX9Y8Lh1ihQgEdUL4_MfPVNFZhnVOoNsJrak5B7f3uph7hICdsiANicKJB0THFhSNo4C0__fodCCGOvOkSMCuL_sMgvM4JthBW" />
                            </div>
                        </div>
                    </div>
                    {/*  Product Details Sticky Container  */}
                    <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-10">
                        <div className="space-y-4">
                            <p className="font-label text-xs tracking-widest uppercase text-tertiary font-bold">New Arrival — Edition 01</p>
                            <h1 className="font-headline text-5xl md:text-6xl text-primary tracking-tighter leading-none">The Obsidian Chronograph</h1>
                            <p className="font-headline text-2xl italic text-secondary">$3,450</p>
                        </div>
                        <div className="space-y-6">
                            <div className="space-y-3">
                                <span className="font-label text-[10px] uppercase tracking-[0.2em] text-outline">Select Material</span>
                                <div className="flex gap-4">
                                    <button className="w-12 h-12 rounded-full border-2 border-primary bg-[#051125] p-1 shadow-sm"></button>
                                    <button className="w-12 h-12 rounded-full border border-outline-variant/20 bg-[#c5c6cd] p-1"></button>
                                    <button className="w-12 h-12 rounded-full border border-outline-variant/20 bg-[#d8c860] p-1"></button>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <span className="font-label text-[10px] uppercase tracking-[0.2em] text-outline">Strap Size</span>
                                <div className="flex flex-wrap gap-2">
                                    <button className="px-6 py-2 border border-outline-variant/20 text-sm hover:border-primary transition-colors">40mm</button>
                                    <button className="px-6 py-2 border border-primary text-sm font-bold">42mm</button>
                                    <button className="px-6 py-2 border border-outline-variant/20 text-sm hover:border-primary transition-colors">44mm</button>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-4 pt-4">
                            <button className="velvet-gradient w-full py-5 text-on-primary font-label text-sm tracking-widest uppercase rounded-lg shadow-lg active:scale-[0.98] transition-all">
                                Add to Collection
                            </button>
                            <p className="text-center text-[10px] text-outline uppercase tracking-widest">Complimentary insured global shipping included.</p>
                        </div>
                        <div className="pt-10 border-t border-outline-variant/10">
                            <h3 className="font-headline text-lg mb-4">Provenance &amp; Philosophy</h3>
                            <p className="text-on-surface-variant text-sm leading-relaxed max-w-md">
                                Hand-assembled in our Zurich atelier, the Obsidian series represents the pinnacle of tactile horology. Featuring a sapphire crystal exhibition caseback and an 80-hour reserve, it is an artifact designed for generations.
                            </p>
                        </div>
                    </div>
                </section>
                {/*  Curator Perspectives (Reviews)  */}
                <section className="mt-40 bg-surface-container-low py-24">
                    <div className="max-w-7xl mx-auto px-6 md:px-12">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                            <div className="max-w-xl">
                                <h2 className="font-headline text-4xl mb-6">Curator Perspectives</h2>
                                <p className="text-on-surface-variant font-body">Reflections from our community of connoisseurs and horological experts.</p>
                            </div>
                            <button className="text-primary font-label text-sm uppercase tracking-widest border-b border-primary pb-1 hover:opacity-60 transition-opacity">Write a Reflection</button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/*  Review Card 1  */}
                            <div className="bg-surface-container-lowest p-10 rounded-xl space-y-6">
                                <div className="flex text-tertiary">
                                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                </div>
                                <p className="font-headline italic text-lg leading-snug">"The weight of the case is perfectly balanced. It feels less like a tool and more like an extension of one's own presence."</p>
                                <div className="pt-4">
                                    <p className="font-label text-xs font-extrabold uppercase tracking-widest">Julian V.</p>
                                    <p className="text-[10px] text-outline uppercase tracking-tighter">Verified Collector</p>
                                </div>
                            </div>
                            {/*  Review Card 2  */}
                            <div className="bg-surface-container-lowest p-10 rounded-xl space-y-6">
                                <div className="flex text-tertiary">
                                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                </div>
                                <p className="font-headline italic text-lg leading-snug">"Exceptional craftsmanship. The movement is silent yet powerful. A true masterclassName in minimalist design."</p>
                                <div className="pt-4">
                                    <p className="font-label text-xs font-extrabold uppercase tracking-widest">Marcus Chen</p>
                                    <p className="text-[10px] text-outline uppercase tracking-tighter">Design Director</p>
                                </div>
                            </div>
                            {/*  Review Card 3  */}
                            <div className="bg-surface-container-lowest p-10 rounded-xl space-y-6">
                                <div className="flex text-tertiary">
                                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                                </div>
                                <p className="font-headline italic text-lg leading-snug">"The waitlist was long, but holding this piece makes every day of waiting worthwhile. The finish is peerless."</p>
                                <div className="pt-4">
                                    <p className="font-label text-xs font-extrabold uppercase tracking-widest">Elena Rossi</p>
                                    <p className="text-[10px] text-outline uppercase tracking-tighter">Art Curator</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*  Complete the Look  */}
                <section className="py-32">
                    <div className="max-w-7xl mx-auto px-6 md:px-12">
                        <h2 className="font-headline text-3xl mb-12 text-center">Complete the Look</h2>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            {/*  Recommendation 1  */}
                            <div className="group">
                                <div className="aspect-[3/4] bg-surface-container mb-4 overflow-hidden rounded-md relative">
                                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="folded dark cashmere sweater on a clean white surface with soft moody shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAE0FgjZLhZmcQSlqI2ZzF6GTEJ1CSV5r3q8AszRj28jCRMAf70mqHPuALVCzOQ098jTwZPke3FiKWaAC0Fm0aooqDB2ER8oWjrWe3-xZifytq_T0CaCULkpktpxqGHgmCu2UNwj1aGRwGIDITWFQaB1tkWHsnBKPqS6FbFl-7FI42S8ee-Y1cKy1xwUQpxyPyba571HhVnnRe4UAdpNvju-cbKsIgGWHu0NXfaBZj-osb1BQnQZLuwJZj1ofnqKj6B8H7c6MT4lPFM" />
                                    <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="material-symbols-outlined text-primary">add</span>
                                    </button>
                                </div>
                                <h4 className="font-label text-sm font-bold">Midnight Cashmere Knit</h4>
                                <p className="text-on-surface-variant text-xs">$820</p>
                            </div>
                            {/*  Recommendation 2  */}
                            <div className="group">
                                <div className="aspect-[3/4] bg-surface-container mb-4 overflow-hidden rounded-md relative">
                                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="luxury leather travel humidor with elegant stitching and brass accents" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnZ1_H0oeH9vr2qOPJjJsG6Znq9iFhj1Q9q0gkYpipEvpAMZN69GSEUto1K0I3sy1d2UUDSQrpw7gwqjmRqnADv-ZhLTjRO_soBTKLCvffLQDf4Bqq_aHT-Dmyr117Kkv0BVyxyso14jiQobUU3q6hpMR5MZt-sigkS-xzzs0jSgvKwIjSuVHotNs3v866CvotiIX2pRoa8uP1l_KUp-genj-Y2_dOzF69yM7lzzgycrnl31pkUm2Qzcx9wxKbRpmSivXo79_-Xfn9" />
                                    <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="material-symbols-outlined text-primary">add</span>
                                    </button>
                                </div>
                                <h4 className="font-label text-sm font-bold">Heritage Travel Case</h4>
                                <p className="text-on-surface-variant text-xs">$450</p>
                            </div>
                            {/*  Recommendation 3  */}
                            <div className="group">
                                <div className="aspect-[3/4] bg-surface-container mb-4 overflow-hidden rounded-md relative">
                                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="sleek modern silver cufflinks with minimal geometric engravings on a silk background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlDaBTJzDrPKi-N-A4MjGJBwtgrlEc2Pecd7RexjYUrEHGlZ5P5yJvWbTJ39eYateFcOY1arR_el3YU7XaNIMPa68sZ_NNYU_pyNiTLBJsutWD8vzX_XLs8g9OkwkpC_pQWs_siXTep05fI0IsquFvA3oxb_wVHj4RJnpnx6wlSCftsDfePCRm5OGbm9aWx6QwSd5GlwHnMZanVWiKYPTgKUscppT41iWH-vJJalBSr_dxAmJXsOsSOhz52LkN0iIT8GXIFVhn1KJF" />
                                    <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="material-symbols-outlined text-primary">add</span>
                                    </button>
                                </div>
                                <h4 className="font-label text-sm font-bold">Bespoke Cufflinks</h4>
                                <p className="text-on-surface-variant text-xs">$320</p>
                            </div>
                            {/*  Recommendation 4  */}
                            <div className="group">
                                <div className="aspect-[3/4] bg-surface-container mb-4 overflow-hidden rounded-md relative">
                                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="pair of handmade dark brown leather oxfords with high polish finish" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjDIZzHQEOzmPqkN-Aa6pS2bnWLaJNMKI5zqqUao4iM2sVuM-9dcTRx2KU9l2_wNSJPXJN7bUY5MA5nV9i6Lqzy2AJ9EDNMkj2iaxL3BRhM-rhN4x5wAcRlruBlsd3TTTIcbNjyUwXQXpR80Rkhdm8WFozU3NTla6NCDXWmvJFiHutz2lMPu5MnEgbOPqLPdc7vjR38df_smR_KkKrdA7DceGaqTF-K8UiW7FBNcvM6Y4cFhSyq8P_ka0PW3qcvjFfD691sokv0heZ" />
                                    <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                        <span className="material-symbols-outlined text-primary">add</span>
                                    </button>
                                </div>
                                <h4 className="font-label text-sm font-bold">Cordovan Derbys</h4>
                                <p className="text-on-surface-variant text-xs">$1,100</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            {/*  Footer Component  */}
            <footer className="w-full py-16 px-6 md:px-12 mt-auto bg-slate-50 dark:bg-slate-900">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto border-t border-slate-200/20 dark:border-slate-800/20 pt-16">
                    <div className="space-y-6">
                        <div className="text-lg font-['Noto_Serif'] italic text-slate-400">CURATED GALLERY</div>
                        <p className="text-slate-400 max-w-xs text-xs font-['Manrope'] uppercase tracking-widest">Exceptional design, meticulously sourced for the modern collector.</p>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                        <div className="flex flex-col space-y-4">
                            <span className="font-['Manrope'] text-[10px] uppercase tracking-widest text-slate-900 font-bold">Client Services</span>
                            <a className="font-['Manrope'] text-xs tracking-widest uppercase text-slate-400 hover:text-slate-900 hover:underline decoration-slate-300 underline-offset-4 transition-all" href="#">Sustainability</a>
                            <a className="font-['Manrope'] text-xs tracking-widest uppercase text-slate-400 hover:text-slate-900 hover:underline decoration-slate-300 underline-offset-4 transition-all" href="#">Shipping</a>
                            <a className="font-['Manrope'] text-xs tracking-widest uppercase text-slate-400 hover:text-slate-900 hover:underline decoration-slate-300 underline-offset-4 transition-all" href="#">Returns</a>
                        </div>
                        <div className="flex flex-col space-y-4">
                            <span className="font-['Manrope'] text-[10px] uppercase tracking-widest text-slate-900 font-bold">Company</span>
                            <a className="font-['Manrope'] text-xs tracking-widest uppercase text-slate-400 hover:text-slate-900 hover:underline decoration-slate-300 underline-offset-4 transition-all" href="#">Contact</a>
                            <a className="font-['Manrope'] text-xs tracking-widest uppercase text-slate-400 hover:text-slate-900 hover:underline decoration-slate-300 underline-offset-4 transition-all" href="#">Privacy</a>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-200/10">
                    <p className="font-['Manrope'] text-[10px] tracking-widest uppercase text-slate-400">© 2024 CURATED GALLERY. ALL RIGHTS RESERVED.</p>
                </div>
            </footer>
        </div>
    )
}