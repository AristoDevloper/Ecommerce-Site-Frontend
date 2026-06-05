export function MobileAboutPage() {
    return (
        <div className="mobile-screen bg-background text-on-background font-body antialiased">
            {/*  TopAppBar  */}
            <header className="fixed top-0 w-full z-50 bg-slate-50/80 backdrop-blur-xl">
                <div className="flex justify-between items-center px-6 py-4 w-full max-w-screen-xl mx-auto">
                    <div className="flex items-center gap-4">
                        <span className="material-symbols-outlined text-slate-900 cursor-pointer">menu</span>
                    </div>
                    <h1 className="text-xl font-bold tracking-[0.2em] text-slate-900 font-headline uppercase">ETHOS</h1>
                    <div className="flex items-center gap-4">
                        <span className="material-symbols-outlined text-slate-900 cursor-pointer">shopping_bag</span>
                    </div>
                </div>
            </header>
            <main className="pt-20 pb-32">
                {/*  Hero Section  */}
                <section className="px-6 py-12">
                    <div className="mb-12 overflow-hidden rounded-md">
                        <img alt="Artisan workspace" className="w-full aspect-[4/5] object-cover" data-alt="Minimalist high-end fashion studio with clean limestone walls, neutral fabric samples, and soft natural lighting through a large window" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7aek8YCgXmTy8hzyLbawf5DPlTt1XZgbeyTEH2P2iYJv_6rQLkPl9_KmSx6aPhGA7uxjXXtBcyOBFu6DNOp1swn49c_SkerKlaf9sRDBpbyuXsnkQk6B67KDh2dnT7nooe_9gX3KSKbFzzoZl22OLKwr9Vxeg4J9RE5PgSNvws0t5qjRA5-51Rgqb3uMPHIIfCb5M_PwyKHRFrzBqkmjOJNC3R8z6pvqrhNeAApaBhN5hlo8mrOJV2B0lE-sR79pa-22Sefq2I9hY" />
                    </div>
                    <div className="space-y-6">
                        <span className="font-label text-[10px] uppercase tracking-[0.25em] text-tertiary">Our Origin</span>
                        <h2 className="font-headline text-4xl leading-tight tracking-tight text-primary">A Legacy of Quiet Excellence</h2>
                        <p className="text-on-surface-variant leading-relaxed text-lg font-light">
                            Founded on the belief that luxury is found in the unspoken, ETHOS represents a meticulous approach to modern living. We don't follow trends; we curate constants.
                        </p>
                    </div>
                </section>
                {/*  The Three Pillars Section (Bento Style Layout)  */}
                <section className="bg-surface-container-low px-6 py-20">
                    <div className="mb-16">
                        <h3 className="font-headline text-3xl text-primary mb-4">The Three Pillars</h3>
                        <div className="h-px w-12 bg-tertiary"></div>
                    </div>
                    <div className="grid gap-8">
                        {/*  Pillar 1: Material  */}
                        <div className="bg-surface-container-lowest p-8 rounded-lg editorial-shadow border border-outline-variant/10">
                            <span className="material-symbols-outlined text-tertiary mb-6" style={{ fontVariationSettings: "'FILL' 1" }}>diamond</span>
                            <h4 className="font-headline text-xl text-primary mb-3">Honest Materials</h4>
                            <p className="text-on-surface-variant font-light leading-relaxed">Sourcing only the finest natural fibers and metals that age with dignity and tell a story of longevity.</p>
                        </div>
                        {/*  Pillar 2: Craft  */}
                        <div className="relative group overflow-hidden rounded-lg aspect-[4/3]">
                            <img alt="Craftsmanship detail" className="w-full h-full object-cover" data-alt="Extreme close-up of high-quality charcoal grey cashmere texture showing delicate weaving and soft fibers with dramatic lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjTkY7ZtnRG2DaRhrdLtob0SykONYVBl6q2phn0BOaBX6IEGu2qIiMUIKZhWTfrPeHK9Pabhz4eGFB2j_Iw9uugeGnWIdjbiYy4z9foWmbUTfThJINHDNysqkAkTTdHaDpmqhYf423xnGsGGPpokdHUYAik03oPc1mR_NWWUXgX0zoNgUf0bOrAWp4y81UdOa2Wh1H4Xv2FMxTA-KQ5Jsu08UgYqPg7O-7I3wEknEE40Ns4w3uqvNnTgWJtS58JUXO8v9dMC-3lKRf" />
                            <div className="absolute inset-0 bg-primary/40 flex flex-col justify-end p-8 backdrop-blur-[2px]">
                                <h4 className="font-headline text-xl text-white mb-2">Intentional Craft</h4>
                                <p className="text-white/80 font-light text-sm">Every stitch is a conscious choice, performed by artisans who value precision over speed.</p>
                            </div>
                        </div>
                        {/*  Pillar 3: Curation  */}
                        <div className="bg-primary text-white p-8 rounded-lg editorial-shadow flex flex-col justify-between aspect-square">
                            <span className="material-symbols-outlined text-tertiary-fixed text-4xl">grid_view</span>
                            <div>
                                <h4 className="font-headline text-2xl mb-4">Timeless Curation</h4>
                                <p className="text-white/60 font-light leading-relaxed">A limited selection designed to harmonize perfectly, creating a modular wardrobe of enduring elegance.</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/*  Brand Story Mid-Break  */}
                <section className="px-6 py-24 text-center">
                    <blockquote className="font-headline text-2xl italic text-on-surface leading-snug">
                        "We believe the pieces you surround yourself with should be as intentional as the life you lead."
                    </blockquote>
                    <p className="mt-8 font-label text-xs uppercase tracking-widest text-on-surface-variant">— THE FOUNDER</p>
                </section>
                {/*  CTA Section: Begin Your Collection  */}
                <section className="px-6 mb-12">
                    <div className="relative overflow-hidden rounded-xl bg-surface-container-highest p-12 text-center flex flex-col items-center gap-8">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                        <h3 className="font-headline text-3xl text-primary max-w-[280px]">Begin Your Collection</h3>
                        <p className="text-on-surface-variant font-light">Explore our foundational pieces and start your journey toward a more intentional lifestyle.</p>
                        <button className="w-full py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary font-label text-xs tracking-widest uppercase rounded-lg hover:opacity-90 transition-opacity">
                            Shop The Essentials
                        </button>
                        <button className="font-label text-xs text-primary underline underline-offset-8 decoration-tertiary/40 tracking-widest uppercase">
                            View Lookbook
                        </button>
                    </div>
                </section>
            </main>
            {/*  BottomNavBar  */}
            <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-8 py-4 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-[0_-4px_20px_rgba(0,0,0,0.04)] z-50 pb-safe">
                {/*  Home (Inactive)  */}
                <div className="flex flex-col items-center justify-center text-slate-400 w-12 h-12 active:scale-90 transition-transform tap-highlight-none">
                    <span className="material-symbols-outlined">grid_view</span>
                </div>
                {/*  Search (Inactive)  */}
                <div className="flex flex-col items-center justify-center text-slate-400 w-12 h-12 active:scale-90 transition-transform tap-highlight-none">
                    <span className="material-symbols-outlined">search</span>
                </div>
                {/*  Mall (Inactive)  */}
                <div className="flex flex-col items-center justify-center text-slate-400 w-12 h-12 active:scale-90 transition-transform tap-highlight-none">
                    <span className="material-symbols-outlined">local_mall</span>
                </div>
                {/*  Profile (Active - Since About Us is a brand anchor, we assume the user's intent is brand exploration/profile context)  */}
                <div className="flex flex-col items-center justify-center bg-slate-900 text-white rounded-full w-12 h-12 active:scale-90 transition-transform tap-highlight-none">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
                </div>
            </nav>
        </div>
    )
}