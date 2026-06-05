export function MobileProductListing() {
    return (
        <div className="bg-background text-on-background font-body select-none mobile-screen">
            {/*  TopAppBar  */}
            <header className="fixed top-0 w-full z-50 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-xl flex justify-between items-center px-6 h-16 shadow-sm shadow-slate-900/5 dark:shadow-none">
                <div className="flex items-center hover:opacity-70 transition-opacity cursor-pointer active:scale-95 duration-150">
                    <span className="material-symbols-outlined text-slate-900 dark:text-slate-50" data-icon="menu">menu</span>
                </div>
                <div className="text-2xl font-serif tracking-widest text-slate-900 dark:text-slate-50">ETHOS</div>
                <div className="flex items-center hover:opacity-70 transition-opacity cursor-pointer active:scale-95 duration-150">
                    <span className="material-symbols-outlined text-slate-900 dark:text-slate-50" data-icon="shopping_bag">shopping_bag</span>
                </div>
            </header>
            <main className="pt-20 pb-24 px-4 max-w-md mx-auto">
                {/*  Editorial Header  */}
                <section className="mb-10 text-center">
                    <span className="font-label text-[10px] uppercase tracking-[0.2em] text-tertiary mb-2 block font-extrabold">Autumn / Winter '24</span>
                    <h1 className="font-headline text-4xl tracking-tight text-primary italic">The Curated Gallery</h1>
                    <p className="text-sm font-light text-on-surface-variant mt-3 px-8 leading-relaxed">A meticulous selection of artifacts designed for the contemporary connoisseur.</p>
                </section>
                {/*  Filters & Sorting  */}
                <div className="flex items-center justify-between mb-8 sticky top-[64px] z-40 bg-background/95 backdrop-blur-sm py-4">
                    <button className="flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-lg active:scale-95 transition-transform">
                        <span className="material-symbols-outlined text-sm" data-icon="tune">tune</span>
                        <span className="font-label text-xs uppercase font-bold tracking-wider">Refine</span>
                    </button>
                    <div className="flex items-center gap-4">
                        <span className="font-label text-[10px] text-on-surface-variant uppercase tracking-widest">24 Items</span>
                        <button className="material-symbols-outlined text-on-surface-variant" data-icon="grid_view">grid_view</button>
                    </div>
                </div>
                {/*  Product Grid  */}
                <div className="grid grid-cols-1 gap-12">
                    {/*  Product Card 1: Asymmetric Hero  */}
                    <div className="relative group">
                        <div className="aspect-[4/5] bg-surface-variant rounded-md overflow-hidden mb-4 relative">
                            <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" data-alt="Minimalist luxury handbag made of smooth charcoal leather on a clean stone pedestal with soft directional light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfKWfH6CmZe2vBLMpGkEbuJc3H872_Kv6yIWIl1IzxtI1V0aV1QLfjySwbBb9noSTQE6jK-QeFA9k8PdFuZpxcaJzN4DQq2EvndOTziqBcFJRKLezH5p32uN-4k6jjW8x0BlfEI4ndzNwPFkVSSgUqYuIwuI-BxzopomFGnZMwiX9a-i46qyuxJp_fnDRXXimoL-a-lnuw2H9SchXYYSLz97DEmhCNA1QDValQpksp-2Z8U4okDQ17vS8YWAZlqt1ijF6N6KGK6K-x" />
                            <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full">
                                <span className="font-label text-[10px] font-bold text-primary tracking-tighter">LIMITED</span>
                            </div>
                        </div>
                        <div className="flex flex-col items-center">
                            <h2 className="font-headline text-2xl text-primary italic">Obsidian Vessel</h2>
                            <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mt-1">Sculpted Leather</span>
                            <div className="mt-4 flex items-center gap-3">
                                <span className="font-label text-sm font-bold text-primary">$1,240</span>
                                <div className="h-[1px] w-8 bg-outline-variant/30"></div>
                                <button className="text-[10px] uppercase font-bold tracking-wider underline underline-offset-4 hover:text-tertiary transition-colors">Details</button>
                            </div>
                        </div>
                    </div>
                    {/*  2-Column Grid Row  */}
                    <div className="grid grid-cols-2 gap-6 items-start">
                        {/*  Product Card 2  */}
                        <div className="flex flex-col">
                            <div className="aspect-[3/4] bg-surface-container-low rounded-md overflow-hidden mb-3">
                                <img className="w-full h-full object-cover" data-alt="Elegant tailored wool coat in ivory color draped over a vintage wooden chair against a neutral beige wall" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJlrVLB6ZvHREqibPExmsEQO-xCmYLY_rO_L4Md7ddXMd-mHGeVwLaldvULSUakoR7o8uNeqET3CRdtPV2QZXPDvylxKyDzSpbS_tmt_to3jSVBAQE_XNQieDPfPzErkTpccYe1n_J_xmFym7lT5n_aLtR9GdiI0PZdwXUkmFWL7lfbD7QtccHU71nnsh4mdnX82_WccyzWWvW2xZn666T-bzTjZyTkMOMlmlTLisLuqJvMKWzcAsi8rR1IZs8WF8vKad_58w20I_2" />
                            </div>
                            <h3 className="font-headline text-lg italic text-primary leading-tight">Artisan Overcoat</h3>
                            <span className="font-label text-[9px] text-on-surface-variant uppercase tracking-tighter">Merino Wool</span>
                            <span className="font-label text-xs font-bold mt-2">$850</span>
                        </div>
                        {/*  Product Card 3  */}
                        <div className="flex flex-col pt-8">
                            <div className="aspect-[3/4] bg-surface-container-low rounded-md overflow-hidden mb-3">
                                <img className="w-full h-full object-cover" data-alt="Brushed gold designer watch with a simple white face and black leather strap resting on a piece of raw quartz" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAqGim3oqFixLIfezJ3vSyYEs0yAAWXjSarMLFKcz2JQJ5RBcuG8ArjG7rcC22wEuPX3eSSCpUrnlQcu1upwHh__EnlBnVXeqJH2d4VX4VRsc0M3liImnaCi1p_tQAVrGaxdq3fE2Qtt5rM8wAsPxEY8-1G0jEzq4cFQBYyjZqVc6ZA6zjqCrK6m4Yi4VKZQ923yhX44VmnYWPEXJRkOZUEToNyiryDfNEl1TmzARwtF0zmimnmcrafnnnFuHfaRNURgzV9j_LJTifA" />
                            </div>
                            <h3 className="font-headline text-lg italic text-primary leading-tight">Temporal Dial</h3>
                            <span className="font-label text-[9px] text-on-surface-variant uppercase tracking-tighter">Brushed Brass</span>
                            <span className="font-label text-xs font-bold mt-2">$390</span>
                        </div>
                    </div>
                    {/*  Feature Promotion (No Line Rule)  */}
                    <div className="bg-surface-container-low -mx-4 px-8 py-12 flex flex-col items-center text-center">
                        <span className="material-symbols-outlined text-4xl text-tertiary mb-4" data-icon="eco">eco</span>
                        <h4 className="font-headline text-2xl text-primary italic mb-2">Sustainable Grace</h4>
                        <p className="text-xs font-light text-on-surface-variant leading-relaxed max-w-[240px]">Every artifact is sourced from workshops committed to restorative environmental practices.</p>
                        <button className="mt-6 px-6 py-3 bg-primary text-on-primary rounded-lg font-label text-[10px] uppercase tracking-widest active:scale-95 transition-transform bg-gradient-to-br from-primary to-primary-container shadow-xl shadow-primary/10">Read Our Ethos</button>
                    </div>
                    {/*  Product Card 4  */}
                    <div className="relative group">
                        <div className="aspect-[4/5] bg-surface-variant rounded-md overflow-hidden mb-4">
                            <img className="w-full h-full object-cover" data-alt="Sophisticated knit sweater in sage green texture close-up with soft morning light illuminating the fabric fibers" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIDaJgt41Ox4MY6c0EwFAeRwZULKqZvNXzSwNV8g3s29GcFSL6jT4MSbEd0fRw7PsxEXqcaRq2M_vsmc8S3gDgk_tHnkafbBgixYKl-yzofhZX5lSr7iUI0n7s1Vy-cMAwzWScEIp7VUvxp8vb-WJLVXiVqoLV6h7bRU63Ea4Oys9AkLJZDgjxqcAgtlOUooRaJfmdD1KW7FaInleCyyBAqybQ0GzA9NutpqSz2DGrNs64MZ4__SsIzp1JjfOYfw5OQjECBYCor49V" />
                        </div>
                        <div className="flex justify-between items-end">
                            <div>
                                <h2 className="font-headline text-2xl text-primary italic">Flora Knit</h2>
                                <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Organic Cashmere</span>
                            </div>
                            <span className="font-label text-sm font-bold text-primary">$560</span>
                        </div>
                    </div>
                    {/*  Product Card 5 (Asymmetric offset)  */}
                    <div className="grid grid-cols-5 gap-4">
                        <div className="col-span-3">
                            <div className="aspect-[3/4] bg-surface-container-low rounded-md overflow-hidden mb-3">
                                <img className="w-full h-full object-cover" data-alt="High-end designer loafers in dark brown polished leather on a reflective black marble surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC21228yl63hkToT6_uKyp-3J8ERFFiMiY13nNEtJljHrr6hE7bF_IEwDPS0NcJgEXZ5kxQYnP8h_UUC8dGoMJnDQJD-KmzfU2wL0lNn5XXkBvmcnZhGy2ZrXgp6MV0lNYWDUtuGkx_CcO_TqL4vHHxJxhVwLHPi3RdzDWSFhcYDDXA7Smel5X663XcEhcvMqQhB9OPJ1U-vYlZOqoksLZ5JJfJ4vmRk2MRlK2CT3JCT48wkl9wswYy4-dLCd-ZWTpzlansG53uqTZA" />
                            </div>
                            <h3 className="font-headline text-lg italic text-primary leading-tight">Marbled Loafer</h3>
                            <span className="font-label text-xs font-bold mt-2">$425</span>
                        </div>
                        <div className="col-span-2 pt-12">
                            <p className="font-label text-[9px] uppercase leading-relaxed tracking-widest text-on-surface-variant/60">Selected for the Autumn '24 Collection for its timeless silhouette and uncompromising comfort.</p>
                            <div className="mt-4 h-[1px] w-12 bg-tertiary"></div>
                        </div>
                    </div>
                </div>
            </main>
            {/*  BottomNavBar  */}
            <nav className="fixed bottom-0 w-full z-50 pb-safe bg-slate-50/90 dark:bg-slate-950/90 backdrop-blur-2xl flex justify-around items-center px-4 h-20 shadow-[0_-4px_20px_rgba(0,0,0,0.04)]">
                <div className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-600 pt-2 hover:text-slate-600 dark:hover:text-slate-300 transition-colors cursor-pointer">
                    <span className="material-symbols-outlined" data-icon="home_app_logo">home_app_logo</span>
                    <span className="text-[10px] uppercase tracking-[0.1em] font-sans font-bold Manrope">Gallery</span>
                </div>
                <div className="flex flex-col items-center justify-center text-slate-900 dark:text-white border-t-2 border-slate-900 dark:border-white pt-2 transform translate-y-[-2px] transition-transform cursor-pointer">
                    <span className="material-symbols-outlined" data-icon="search">search</span>
                    <span className="text-[10px] uppercase tracking-[0.1em] font-sans font-bold Manrope">Search</span>
                </div>
                <div className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-600 pt-2 hover:text-slate-600 dark:hover:text-slate-300 transition-colors cursor-pointer">
                    <span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
                    <span className="text-[10px] uppercase tracking-[0.1em] font-sans font-bold Manrope">Bag</span>
                </div>
                <div className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-600 pt-2 hover:text-slate-600 dark:hover:text-slate-300 transition-colors cursor-pointer">
                    <span className="material-symbols-outlined" data-icon="person">person</span>
                    <span className="text-[10px] uppercase tracking-[0.1em] font-sans font-bold Manrope">Profile</span>
                </div>
            </nav>
            {/*  Contextual Quick Action (Only on top-level listing)  */}
            <div className="fixed bottom-24 right-6 z-40">
                <button className="bg-primary-container text-on-primary-container w-14 h-14 rounded-full flex items-center justify-center shadow-2xl shadow-primary/40 backdrop-blur-md bg-opacity-95 active:scale-90 transition-transform">
                    <span className="material-symbols-outlined" data-icon="chat_bubble" style={{ fontVariationSettings: "'FILL' 1" }}>chat_bubble</span>
                </button>
            </div>
            {/*  Hidden Drawer / Bottom Sheet Placeholder (Visual representation)  */}
            <div className="fixed inset-0 bg-primary/20 backdrop-blur-sm z-[60] hidden opacity-0 transition-opacity">
                <div className="absolute bottom-0 w-full bg-surface rounded-t-3xl p-8 flex flex-col gap-6">
                    <div className="w-12 h-1 bg-outline-variant/30 rounded-full mx-auto mb-4"></div>
                    <h5 className="font-headline text-2xl italic text-primary">Sort By</h5>
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-between items-center text-primary font-bold italic">
                            <span className="font-body text-lg">Newest Arrivals</span>
                            <span className="material-symbols-outlined" data-icon="check">check</span>
                        </div>
                        <div className="flex justify-between items-center text-on-surface-variant">
                            <span className="font-body text-lg">Price: Low to High</span>
                        </div>
                        <div className="flex justify-between items-center text-on-surface-variant">
                            <span className="font-body text-lg">Price: High to Low</span>
                        </div>
                    </div>
                    <button className="mt-4 w-full py-4 bg-primary text-on-primary font-label text-xs uppercase tracking-[0.2em] rounded-lg">Apply</button>
                </div>
            </div>
        </div>
    )
}