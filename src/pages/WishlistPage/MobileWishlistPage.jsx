export function MobileWishlistPage() {
    return (
        <div className="mobile-screen bg-background text-on-background font-body selection:bg-primary-fixed-dim selection:text-primary min-h-screen pb-32">
            {/*  TopAppBar  */}
            <header className="bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-xl fixed top-0 w-full z-50">
                <div className="flex justify-between items-center px-6 py-4 w-full max-w-screen-xl mx-auto">
                    <button className="text-slate-900 dark:text-slate-50 hover:opacity-70 transition-opacity active:scale-95 duration-200">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                    <h1 className="text-xl font-bold tracking-[0.2em] text-slate-900 dark:text-slate-50 font-noto-serif">ETHOS</h1>
                    <button className="text-slate-900 dark:text-slate-50 hover:opacity-70 transition-opacity active:scale-95 duration-200 relative">
                        <span className="material-symbols-outlined">shopping_bag</span>
                        <span className="absolute top-0 -right-1 w-2 h-2 bg-tertiary rounded-full"></span>
                    </button>
                </div>
            </header>
            <main className="pt-24 pb-32 px-6">
                {/*  Editorial Header  */}
                <section className="mb-12">
                    <p className="font-label text-[10px] uppercase tracking-[0.3em] text-on-surface-variant mb-2">Private Collection</p>
                    <h2 className="font-headline text-4xl text-primary leading-tight -tracking-[0.02em]">Your Wishlist</h2>
                    <p className="font-body text-sm text-on-surface-variant mt-4 max-w-[260px] leading-relaxed italic">
                        A curated selection of artifacts, gathered for your consideration.
                    </p>
                </section>
                {/*  Wishlist Grid (Single Column Asymmetric Gallery)  */}
                <div className="flex flex-col gap-12">
                    {/*  Item 1  */}
                    <article className="flex flex-col group">
                        <div className="relative w-full aspect-[4/5] bg-surface-variant rounded-md overflow-hidden mb-4">
                            <img className="w-full h-full object-cover" alt="Obscura Vessel" src="https://lh3.googleusercontent.com/aida-public/AB6AXuABDwqJrJV-4hcY_XQaTjn5ZkIFiHzHYI1ECKUA1hWHVpxFj_EmmQrxxdTPksEk1tcZVr9YjewTULte6pBjLZVqTqACDKRb5UtvdQ1kX2Vyl_egJ4nnhp5hX4l7vc86EHsOevtPTnoHko46W_KXyi3xH7IMjroPUA8Rq5eeJ09V1Hq8Xuvw-sSgmx0AEJHV1LbIUGdozS0bL2cZTmLXPIvfKTz5tcncHmfO__u2MqezkEgvQmdWP_gmhGAWrMDPQrvxZObdksrxj_y2" />
                            <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-primary shadow-sm">
                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                            </button>
                        </div>
                        <div className="flex justify-between items-start">
                            <div className="flex-1 pr-4">
                                <h3 className="font-headline text-lg text-primary">Obscura Vessel</h3>
                                <p className="font-body text-xs text-on-surface-variant uppercase tracking-wider mt-1">Hand-thrown Stoneware</p>
                            </div>
                            <div className="text-right">
                                <span className="font-body text-primary font-bold text-lg">$285</span>
                            </div>
                        </div>
                        <div className="mt-6 flex gap-3">
                            <button className="flex-1 py-4 bg-primary text-white text-[10px] uppercase tracking-widest font-bold rounded-lg hover:opacity-90 transition-opacity">
                                Add to Bag
                            </button>
                            <button className="w-12 h-12 flex items-center justify-center bg-surface-container-high rounded-lg">
                                <span className="material-symbols-outlined text-primary">share</span>
                            </button>
                        </div>
                    </article>
                    {/*  Promotional Interstitial (Asymmetric)  */}
                    <div className="bg-surface-container-low p-8 rounded-xl my-4">
                        <p className="font-headline text-2xl text-primary leading-snug mb-4">The Winter <br />Edit is Here.</p>
                        <a className="inline-block font-label text-[10px] uppercase tracking-[0.2em] text-tertiary font-bold border-b border-tertiary/20 pb-1" href="#">Explore Editorial</a>
                    </div>
                    {/*  Item 2  */}
                    <article className="flex flex-col group">
                        <div className="relative w-full aspect-[4/5] bg-surface-variant rounded-md overflow-hidden mb-4">
                            <img className="w-full h-full object-cover" alt="Aura Drop Ring" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx_SzJol4pWZ4STH0FrVt3Y6o2qkMATJ3rZ462IMIApQiXe0-sqWiMWu_wxVMFS94Z2VvASqOqj5LX7KpZw9tV9xQJD8cDD4Sw7CFCesGQmEBwF1_BHiriOmouKulwtMuNomOe0F6GR3uS_M8BhXQv65VkV05jxWQA300CDpj4flgLGRrHlVMj_x5hkzvrxC7rfSHolu_qwqVClmlEx9X54dzSHCuM4CvehUeVMn-gA2r191-t1MentH8L7OQPoHVkvAypW15vDtJP" />
                            <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-primary shadow-sm">
                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                            </button>
                        </div>
                        <div className="flex justify-between items-start">
                            <div className="flex-1 pr-4">
                                <h3 className="font-headline text-lg text-primary">Aura Drop Ring</h3>
                                <p className="font-body text-xs text-on-surface-variant uppercase tracking-wider mt-1">18k Recycled Gold</p>
                            </div>
                            <div className="text-right">
                                <span className="font-body text-primary font-bold text-lg">$1,420</span>
                            </div>
                        </div>
                        <div className="mt-6 flex gap-3">
                            <button className="flex-1 py-4 bg-primary text-white text-[10px] uppercase tracking-widest font-bold rounded-lg">
                                Add to Bag
                            </button>
                            <button className="w-12 h-12 flex items-center justify-center bg-surface-container-high rounded-lg">
                                <span className="material-symbols-outlined text-primary">share</span>
                            </button>
                        </div>
                    </article>
                    {/*  Item 3  */}
                    <article className="flex flex-col group">
                        <div className="relative w-full aspect-[4/5] bg-surface-variant rounded-md overflow-hidden mb-4">
                            <img className="w-full h-full object-cover" alt="Petrichor Mist" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCV2m-gF4ewqCSb_yQobqaBikAG3Q5TnVzRx59krQKsY_-hzeTlKldzSuq2OoT820KjrM3PQ04dQODr4tHTYLCTSFZm-7zemVPEXxdU09BDktwRAvhSBsjCTeVPf487BJkk4SvFmVRaLZl-X0CfdTHlfkjDthSUpZCS_3ZFgKkAYfAwv5WaEqQPtDGClNk6ZkLkjrIqNVgpFe5-kFIi0NP9MSHaXE_YCjc-kp03PIUiElz3erYYhlUvBvlfz2RjBQfKM7FbS-SieUJK" />
                            <button className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-primary shadow-sm">
                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                            </button>
                        </div>
                        <div className="flex justify-between items-start">
                            <div className="flex-1 pr-4">
                                <h3 className="font-headline text-lg text-primary">Petrichor Mist</h3>
                                <p className="font-body text-xs text-on-surface-variant uppercase tracking-wider mt-1">Botanical Essence</p>
                            </div>
                            <div className="text-right">
                                <span className="font-body text-primary font-bold text-lg">$85</span>
                            </div>
                        </div>
                        <div className="mt-6 flex gap-3">
                            <button className="flex-1 py-4 bg-primary text-white text-[10px] uppercase tracking-widest font-bold rounded-lg">
                                Add to Bag
                            </button>
                            <button className="w-12 h-12 flex items-center justify-center bg-surface-container-high rounded-lg">
                                <span className="material-symbols-outlined text-primary">share</span>
                            </button>
                        </div>
                    </article>
                </div>
                {/*  Empty State Whisper  */}
                <div className="mt-24 text-center pb-12">
                    <p className="font-body text-xs text-on-surface-variant/60 tracking-widest uppercase">End of Selection</p>
                    <div className="w-px h-12 bg-outline-variant/20 mx-auto mt-6"></div>
                </div>
            </main>
            {/*  BottomNavBar  */}
            <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-8 py-4 bg-slate-50/80 dark:bg-slate-950/80 backdrop-blur-xl z-50 pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.04)]">
                <button className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-600 w-12 h-12 hover:text-slate-900 dark:hover:text-slate-50 transition-colors tap-highlight-none active:scale-90 transition-transform">
                    <span className="material-symbols-outlined">grid_view</span>
                </button>
                <button className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-600 w-12 h-12 hover:text-slate-900 dark:hover:text-slate-50 transition-colors tap-highlight-none active:scale-90 transition-transform">
                    <span className="material-symbols-outlined">search</span>
                </button>
                <button className="flex flex-col items-center justify-center bg-slate-900 dark:bg-slate-50 text-white dark:text-slate-900 rounded-full w-12 h-12 tap-highlight-none active:scale-90 transition-transform shadow-lg">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>local_mall</span>
                </button>
                <button className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-600 w-12 h-12 hover:text-slate-900 dark:hover:text-slate-50 transition-colors tap-highlight-none active:scale-90 transition-transform">
                    <span className="material-symbols-outlined">person</span>
                </button>
            </nav>
        </div>
    );
}
export default MobileWishlistPage;
