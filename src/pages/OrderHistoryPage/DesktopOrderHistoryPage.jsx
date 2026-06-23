export function DesktopOrderHistoryPage() {
    return (
        <div className="bg-background text-on-surface font-body antialiased">
            {/*  TopNavBar Component  */}
            <header className="bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-sm dark:shadow-none sticky top-0 z-50 transition-all duration-300 ease-in-out">
                <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
                    <div className="text-2xl font-serif tracking-tight text-slate-900 dark:text-slate-50">ETHOS CURATED</div>
                    <nav className="hidden md:flex items-center space-x-12">
                        <a className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 transition-opacity duration-300" href="#">Collections</a>
                        <a className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 transition-opacity duration-300" href="#">About</a>
                        <a className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 transition-opacity duration-300" href="#">Support</a>
                    </nav>
                    <div className="flex items-center space-x-6">
                        <button className="hover:opacity-70 transition-opacity duration-300">
                            <span className="material-symbols-outlined text-slate-900 dark:text-slate-50">favorite</span>
                        </button>
                        <button className="hover:opacity-70 transition-opacity duration-300">
                            <span className="material-symbols-outlined text-slate-900 dark:text-slate-50">shopping_bag</span>
                        </button>
                        <button className="text-slate-900 dark:text-slate-50 font-semibold border-b border-slate-900 dark:border-slate-50 hover:opacity-70 transition-opacity duration-300">
                            <span className="material-symbols-outlined align-middle">account_circle</span>
                        </button>
                    </div>
                </div>
            </header>
            <main className="max-w-screen-xl mx-auto px-8 py-16">
                {/*  Editorial Header  */}
                <div className="mb-16">
                    <p className="font-body text-xs tracking-[0.2em] uppercase text-on-surface-variant mb-4">Account Archives</p>
                    <h1 className="font-headline text-5xl md:text-6xl text-primary tracking-tighter leading-none mb-6">Order History</h1>
                    <div className="h-[1px] w-24 bg-tertiary"></div>
                </div>
                {/*  Orders Table/List  */}
                <div className="space-y-4">
                    {/*  Order Entry 01  */}
                    <div className="bg-surface-container-lowest rounded-md transition-all duration-300 hover:shadow-[0_20px_40px_rgba(25,28,29,0.04)] group">
                        <div className="p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                            {/*  Image/Thumbnail Block  */}
                            <div className="md:col-span-2 flex -space-x-4">
                                <div className="w-16 h-20 bg-surface-variant rounded-lg overflow-hidden ghost-border">
                                    <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="leather sneakers" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWwtEbdGPXhUquzBEu37ebSQ795IsFgm0G0UX9OfIZMoyo_EhjOKICBM0oUtuNkU3k37svlMqbMKZKkusqruiVj9dzpzvLa-2RHcazFD_pqRSA6ZvYB93krazzDqns_30wUlIOR5SVBqe3ohbmxXKVgCDPheNc0ueDsfopdQkBI0UHfOEzQ-PUNhuN1xYUi0TQ_Ibiw1IJrFpKyCxKNOau3hnjVIsTJvcRbg5F09eeGgp78VW_fQtihm0S8prem6WoPvd7GjBFISDq" />
                                </div>
                                <div className="w-16 h-20 bg-surface-variant rounded-lg overflow-hidden ghost-border">
                                    <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="wool knitwear" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCiVW1Nl-y5pZknDjrrq74yV7mXLtX9vVFvFTZP3EAnkudQHVUWwIsRQC6Qdc7fn5g1m7pGvv7wtwUuuI7JLLTCNV7zUi8M0QD7C7iSlH-T441BUBrDMY2QGpV2HTV6AJQvVptsXarvNVqqJk9C6D40LUw755KFx4euS5OpIUZutxrMoZBGSyiN4zYvZW5XFy4V4wCb9IhgGQE6L-KKX-PjKXu7nNaWTaf-R9cv_0_QdizovBCHX7YNMgifs2_vOaSGl_inRAHwSaoC" />
                                </div>
                            </div>
                            {/*  Details Block  */}
                            <div className="md:col-span-3">
                                <p className="font-body text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">Order Ref.</p>
                                <p className="font-body font-bold text-primary">#EC-92841-B</p>
                                <p className="font-body text-sm text-on-surface-variant mt-2">November 12, 2023</p>
                            </div>
                            {/*  Status Block  */}
                            <div className="md:col-span-2">
                                <p className="font-body text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">Status</p>
                                <div className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                                    <p className="font-body text-sm font-medium">Delivered</p>
                                </div>
                            </div>
                            {/*  Total Block  */}
                            <div className="md:col-span-2">
                                <p className="font-body text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">Investment</p>
                                <p className="font-headline text-lg">$1,240.00</p>
                            </div>
                            {/*  Actions Block  */}
                            <div className="md:col-span-3 flex md:justify-end gap-6">
                                <button className="font-body text-sm text-primary hover:text-tertiary transition-colors relative group/link">
                                    View Details
                                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-tertiary transition-all duration-300 group-hover/link:w-full"></span>
                                </button>
                                <button className="bg-primary-container text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sm">rebase_edit</span>
                                    Reorder
                                </button>
                            </div>
                        </div>
                    </div>
                    {/*  Order Entry 02  */}
                    <div className="bg-surface-container-low rounded-md group">
                        <div className="p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                            <div className="md:col-span-2">
                                <div className="w-16 h-20 bg-surface-variant rounded-lg overflow-hidden ghost-border">
                                    <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="luxury watch" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzjgxnVD75ptQoUOhwOK0ePUMF1ZpqsghHX5PFCpfkHXWF0cXumxbH4Qj1VnIagJbm4nrPhEzexFZCdJQFSsfiGKB9zuNQ3oBsODpa9AjC7joWNOuMrXa0YpEeUNPokKPEJdUmciYQStToAeHE6AkmlCKrfzn7zGOh_Lk6IHJMslavy1GsNNElptR9vmQi9R-OFcUiF9SvMEWy6HVa8cYHC8uG1tR2aotvjtnHWlY1Ae2lh4UH0N8YJkBe4pjDqpGQL8_QjoWzWYaY" />
                                </div>
                            </div>
                            <div className="md:col-span-3">
                                <p className="font-body text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">Order Ref.</p>
                                <p className="font-body font-bold text-primary">#EC-88210-C</p>
                                <p className="font-body text-sm text-on-surface-variant mt-2">October 28, 2023</p>
                            </div>
                            <div className="md:col-span-2">
                                <p className="font-body text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">Status</p>
                                <div className="flex items-center gap-2 text-on-surface-variant">
                                    <span className="material-symbols-outlined text-sm">local_shipping</span>
                                    <p className="font-body text-sm font-medium">In Transit</p>
                                </div>
                            </div>
                            <div className="md:col-span-2">
                                <p className="font-body text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">Investment</p>
                                <p className="font-headline text-lg">$850.00</p>
                            </div>
                            <div className="md:col-span-3 flex md:justify-end gap-6">
                                <button className="font-body text-sm text-primary hover:text-tertiary transition-colors relative group/link">
                                    View Details
                                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-tertiary transition-all duration-300 group-hover/link:w-full"></span>
                                </button>
                                <button className="bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sm">rebase_edit</span>
                                    Reorder
                                </button>
                            </div>
                        </div>
                    </div>
                    {/*  Order Entry 03  */}
                    <div className="bg-surface-container-lowest rounded-md transition-all duration-300 hover:shadow-[0_20px_40px_rgba(25,28,29,0.04)] group">
                        <div className="p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                            <div className="md:col-span-2 flex -space-x-4">
                                <div className="w-16 h-20 bg-surface-variant rounded-lg overflow-hidden ghost-border">
                                    <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="wool coat" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgkWu7bsrP4MFFb0Y8OhGJ3vUNRCp2_KIrahnt05cI8N7LLwTt4SQc9DvOnAw6BuEULdDG0tIqhXUiGkCqGcPYDW0C8Sf1DbsW4cd5yRZlkcxo6r5p3oZyu_IE8kgLUg8e0sGTFRf17tb9DI8UNm-iREh0FJW7ZHLHz3_qg2jOdt7VYG0H1EKGLG3evlRcVttwiNnN-ru70ZKRT4O3mXj4eOSyMDPqw_EoxZ91G8aNCKFS2txz2USKdN9Y8FEcWTXOUPce_o3SslR3" />
                                </div>
                            </div>
                            <div className="md:col-span-3">
                                <p className="font-body text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">Order Ref.</p>
                                <p className="font-body font-bold text-primary">#EC-71044-A</p>
                                <p className="font-body text-sm text-on-surface-variant mt-2">September 14, 2023</p>
                            </div>
                            <div className="md:col-span-2">
                                <p className="font-body text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">Status</p>
                                <div className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
                                    <p className="font-body text-sm font-medium">Delivered</p>
                                </div>
                            </div>
                            <div className="md:col-span-2">
                                <p className="font-body text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">Investment</p>
                                <p className="font-headline text-lg">$2,100.00</p>
                            </div>
                            <div className="md:col-span-3 flex md:justify-end gap-6">
                                <button className="font-body text-sm text-primary hover:text-tertiary transition-colors relative group/link">
                                    View Details
                                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-tertiary transition-all duration-300 group-hover/link:w-full"></span>
                                </button>
                                <button className="bg-primary-container text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sm">rebase_edit</span>
                                    Reorder
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/*  Pagination / Load More  */}
                <div className="mt-16 flex justify-center">
                    <button className="font-body text-xs tracking-[0.3em] uppercase text-on-surface-variant hover:text-primary transition-colors flex flex-col items-center gap-4">
                        View Older Artifacts
                        <span className="material-symbols-outlined animate-bounce">expand_more</span>
                    </button>
                </div>
            </main>
            {/*  Footer Component  */}
            <footer className="bg-slate-50 dark:bg-slate-900 full-width py-16 mt-20 transition-all duration-300">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 px-8 max-w-screen-2xl mx-auto">
                    <div className="col-span-2 md:col-span-1">
                        <div className="text-xl font-serif text-slate-900 dark:text-slate-50 mb-6">ETHOS CURATED</div>
                        <p className="font-body text-sm text-slate-500 leading-relaxed max-w-xs">Elevating the everyday through a curated selection of timeless design and exceptional craftsmanship.</p>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <p className="font-body text-[10px] uppercase tracking-widest text-slate-400">Discover</p>
                        <a className="text-sm text-slate-500 hover:text-amber-700 dark:hover:text-amber-500 transition-colors" href="#">Brand Story</a>
                        <a className="text-sm text-slate-500 hover:text-amber-700 dark:hover:text-amber-500 transition-colors" href="#">Shipping &amp; Delivery</a>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <p className="font-body text-[10px] uppercase tracking-widest text-slate-400">Support</p>
                        <a className="text-sm text-slate-500 hover:text-amber-700 dark:hover:text-amber-500 transition-colors" href="#">Secure Payment</a>
                        <a className="text-sm text-slate-500 hover:text-amber-700 dark:hover:text-amber-500 transition-colors" href="#">Tracking</a>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <p className="font-body text-[10px] uppercase tracking-widest text-slate-400">Legal</p>
                        <a className="text-sm text-slate-500 hover:text-amber-700 dark:hover:text-amber-500 transition-colors" href="#">FAQ</a>
                        <a className="text-sm text-slate-500 hover:text-amber-700 dark:hover:text-amber-500 transition-colors" href="#">Contact</a>
                    </div>
                </div>
                <div className="max-w-screen-2xl mx-auto px-8 mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
                    <p className="font-body text-[10px] tracking-widest text-slate-400">© 2024 ETHOS CURATED. ALL ARTIFACTS RESERVED.</p>
                    <div className="flex gap-4">
                        <span className="material-symbols-outlined text-slate-400 text-lg">public</span>
                        <span className="material-symbols-outlined text-slate-400 text-lg">payments</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
export default DesktopOrderHistoryPage;
