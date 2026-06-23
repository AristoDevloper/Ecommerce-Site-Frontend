export function DesktopTrackOrderPage() {
    return (
        <div className="bg-background text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed">
            {/* TopNavBar */}
            <nav className="bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl text-slate-900 dark:text-slate-50 sticky top-0 z-50 shadow-sm dark:shadow-none transition-all duration-300 ease-in-out">
                <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
                    <div className="text-2xl font-serif tracking-tight text-slate-900 dark:text-slate-50">ETHOS CURATED</div>
                    <div className="hidden md:flex items-center gap-10">
                        <a className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 hover:opacity-70 transition-opacity duration-300 font-label" href="#">Collections</a>
                        <a className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 hover:opacity-70 transition-opacity duration-300 font-label" href="#">About</a>
                        <a className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 hover:opacity-70 transition-opacity duration-300 font-label" href="#">Support</a>
                    </div>
                    <div className="flex items-center gap-6">
                        <button className="hover:opacity-70 transition-opacity duration-300"><span className="material-symbols-outlined">favorite</span></button>
                        <button className="hover:opacity-70 transition-opacity duration-300"><span className="material-symbols-outlined">shopping_bag</span></button>
                        <button className="hover:opacity-70 transition-opacity duration-300 text-slate-900 dark:text-slate-50 font-semibold border-b border-slate-900 dark:border-slate-50"><span className="material-symbols-outlined">account_circle</span></button>
                    </div>
                </div>
            </nav>
            <main className="max-w-screen-xl mx-auto px-6 md:px-8 py-12 md:py-20">
                {/* Header Section */}
                <header className="mb-16">
                    <div className="inline-block px-3 py-1 bg-surface-container-high rounded-full mb-4">
                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-on-surface-variant font-label">Tracking Artifact #EC-29410</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-serif tracking-tight leading-tight mb-4">Your acquisition is in transit.</h1>
                    <p className="text-on-surface-variant max-w-lg leading-relaxed text-lg">Estimated arrival for your curated selection is <span className="text-primary font-bold">October 24th, 2024</span>.</p>
                </header>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Left: Timeline and Details */}
                    <div className="lg:col-span-8 space-y-12">
                        {/* Visual Timeline */}
                        <section className="bg-surface-container-low p-8 md:p-12 rounded-xl">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative">
                                {/* Connecting Line (Desktop) */}
                                <div className="hidden md:block absolute top-6 left-0 w-full h-[1px] bg-outline-variant/30 -z-0"></div>
                                {/* Active Progress Bar (Desktop) */}
                                <div className="hidden md:block absolute top-6 left-0 w-[66%] h-[1px] bg-primary -z-0"></div>
                                {/* Step 1: Confirmed */}
                                <div className="relative z-10 flex md:flex-col items-center md:items-center gap-4 md:gap-6 w-full md:w-auto mb-8 md:mb-0">
                                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary">
                                        <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                                    </div>
                                    <div className="flex flex-col md:items-center text-left md:text-center">
                                        <span className="text-xs font-bold tracking-widest uppercase font-label mb-1 text-on-surface-variant">Confirmed</span>
                                        <span className="text-sm text-on-surface/60">Oct 18, 09:12 AM</span>
                                    </div>
                                </div>
                                {/* Step 2: Shipped */}
                                <div className="relative z-10 flex md:flex-col items-center md:items-center gap-4 md:gap-6 w-full md:w-auto mb-8 md:mb-0">
                                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary">
                                        <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
                                    </div>
                                    <div className="flex flex-col md:items-center text-left md:text-center">
                                        <span className="text-xs font-bold tracking-widest uppercase font-label mb-1 text-on-surface-variant">Shipped</span>
                                        <span className="text-sm text-on-surface/60">Oct 20, 02:45 PM</span>
                                    </div>
                                </div>
                                {/* Step 3: In Transit */}
                                <div className="relative z-10 flex md:flex-col items-center md:items-center gap-4 md:gap-6 w-full md:w-auto mb-8 md:mb-0 step-active">
                                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-on-primary ring-4 ring-primary/10">
                                        <span className="material-symbols-outlined text-xl">package_2</span>
                                    </div>
                                    <div className="flex flex-col md:items-center text-left md:text-center">
                                        <span className="text-xs font-bold tracking-widest uppercase font-label mb-1 text-primary">In Transit</span>
                                        <span className="text-sm text-on-surface/60 italic">Expected Today</span>
                                    </div>
                                </div>
                                {/* Step 4: Delivered */}
                                <div className="relative z-10 flex md:flex-col items-center md:items-center gap-4 md:gap-6 w-full md:w-auto">
                                    <div className="w-12 h-12 rounded-full bg-surface-container-highest border border-outline-variant/20 flex items-center justify-center text-on-surface-variant">
                                        <span className="material-symbols-outlined text-xl">home</span>
                                    </div>
                                    <div className="flex flex-col md:items-center text-left md:text-center">
                                        <span className="text-xs font-bold tracking-widest uppercase font-label mb-1 text-on-surface-variant/50">Delivered</span>
                                        <span className="text-sm text-on-surface/40">Pending Arrival</span>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* Order Artifacts (Bento Grid Style) */}
                        <section>
                            <div className="flex items-baseline justify-between mb-8 border-b border-outline-variant/10 pb-4">
                                <h2 className="text-2xl font-serif">Curated Manifest</h2>
                                <span className="text-sm font-label text-on-surface-variant">3 Items Total</span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Item 1 */}
                                <div className="flex gap-6 bg-surface-container-lowest p-5 rounded-xl transition-all hover:bg-surface-container-low group">
                                    <div className="w-24 h-32 flex-shrink-0 bg-surface-variant rounded-md overflow-hidden">
                                        <img className="w-full h-full object-cover mix-blend-multiply opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAZjfnVvMhdzwKChe7NvpcGUpNkZrBzsYQWwKbS81AegOxc30-Unmbjur0s7YiaYUVzioCAS3psAPkBhZwHq8JgdSYtcKf3LpQFTa8YzU-d4JzkAXx-UNcketRCrLx723Xj63z9y-zxIM03xJ9KMWqHZSOtZCalmTteA4PttCMkUZmNpuTVXySydcbpbCl_WD1B3eYKSkmAq3oUyy1P57_yiqquwfoqp9mfbsUlBUs4sQffjNWbso0Odt7_i3H2QQkGeJGcXwUSmkbV" alt="Monolith Series 01" />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <p className="text-xs font-bold tracking-widest uppercase text-tertiary mb-1 font-label">Horology</p>
                                        <h3 className="font-medium text-lg text-on-surface">Monolith Series 01</h3>
                                        <p className="text-sm text-on-surface-variant mb-3">Brushed Steel / Italian Leather</p>
                                        <p className="text-primary font-bold">$1,250.00</p>
                                    </div>
                                </div>
                                {/* Item 2 */}
                                <div className="flex gap-6 bg-surface-container-lowest p-5 rounded-xl transition-all hover:bg-surface-container-low">
                                    <div className="w-24 h-32 flex-shrink-0 bg-surface-variant rounded-md overflow-hidden">
                                        <img className="w-full h-full object-cover mix-blend-multiply opacity-90" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwDPvHtRl2pgmsZxETD87BBMuKFe2hShW8A9SYTm-G5A4zFBG5d3sTI7aVVDGeiFqej805kWo9ORxRhbCWEyq3sE8eJOCVW8qFbYtchU44GeV-a12npHmXSXZFDWJGR0HRkcyfu8EwpZzcscv8o12-p4FPh7xbChENSD_Z6i4myDTmk2GhEnYR1p8yQma307SV6tgu_I0R0MMuEnqUalwpYebLoNwKYyi3oII7mitVzx3ltCrpyLOkkGG2YVCPJjScpZTEcFRwzKgR" alt="Vagabond Satchel" />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <p className="text-xs font-bold tracking-widest uppercase text-tertiary mb-1 font-label">Carry</p>
                                        <h3 className="font-medium text-lg text-on-surface">Vagabond Satchel</h3>
                                        <p className="text-sm text-on-surface-variant mb-3">Tanned Cognac Hide</p>
                                        <p className="text-primary font-bold">$890.00</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* Detailed History */}
                        <section className="space-y-6">
                            <h2 className="text-2xl font-serif">Journey Log</h2>
                            <div className="space-y-0">
                                <div className="flex gap-8 p-6 bg-surface-container-low border-l-2 border-primary">
                                    <span className="text-sm font-label font-bold text-primary tabular-nums">22 OCT</span>
                                    <div>
                                        <h4 className="font-bold text-on-surface">Departed Sorting Facility</h4>
                                        <p className="text-sm text-on-surface-variant">North London Distribution Center, UK</p>
                                    </div>
                                </div>
                                <div className="flex gap-8 p-6 bg-surface border-l-2 border-outline-variant/30">
                                    <span className="text-sm font-label font-bold text-on-surface-variant tabular-nums">21 OCT</span>
                                    <div>
                                        <h4 className="font-semibold text-on-surface">Processed through Customs</h4>
                                        <p className="text-sm text-on-surface-variant">London Gateway Hub</p>
                                    </div>
                                </div>
                                <div className="flex gap-8 p-6 bg-surface border-l-2 border-outline-variant/30">
                                    <span className="text-sm font-label font-bold text-on-surface-variant tabular-nums">20 OCT</span>
                                    <div>
                                        <h4 className="font-semibold text-on-surface">Manifest Created</h4>
                                        <p className="text-sm text-on-surface-variant">Milan Boutique Warehouse, IT</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                    {/* Right: Order Info Card */}
                    <aside className="lg:col-span-4 sticky top-28 space-y-6">
                        {/* Logistics Summary */}
                        <div className="bg-surface-container-low p-8 rounded-xl">
                            <h3 className="text-xl font-serif mb-6">Logistics Summary</h3>
                            <div className="space-y-6">
                                <div>
                                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-on-surface-variant font-label mb-2">Carrier</p>
                                    <div className="flex items-center justify-between">
                                        <p className="font-bold">Global Curated Freight</p>
                                        <span className="material-symbols-outlined text-primary">verified</span>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-on-surface-variant font-label mb-2">Tracking ID</p>
                                    <div className="flex items-center justify-between group cursor-pointer">
                                        <p className="font-mono text-sm">TRK-882-991-X01</p>
                                        <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors text-sm">content_copy</span>
                                    </div>
                                </div>
                                <div className="pt-6 border-t border-outline-variant/20">
                                    <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-on-surface-variant font-label mb-2">Delivery Destination</p>
                                    <p className="text-sm leading-relaxed text-on-surface-variant">
                                        James Sterling<br />
                                        42 Kensington Terrace<br />
                                        Apartment 4B<br />
                                        London, W8 4NB<br />
                                        United Kingdom
                                    </p>
                                </div>
                            </div>
                            <button className="w-full mt-8 bg-gradient-to-r from-primary to-primary-container text-on-primary py-4 rounded-lg font-label font-bold tracking-widest uppercase text-xs hover:opacity-90 transition-all">
                                Contact Curator
                            </button>
                            <button className="w-full mt-3 text-primary py-3 font-label font-bold text-xs hover:underline transition-all">
                                Request Delivery Change
                            </button>
                        </div>
                        {/* Map Placeholder */}
                        <div className="relative h-48 rounded-xl overflow-hidden bg-surface-container-high">
                            <div className="absolute inset-0 bg-primary/5 mix-blend-multiply pointer-events-none"></div>
                            <img className="w-full h-full object-cover grayscale opacity-50 contrast-125" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAgSFPWTdhjSM67V1fbXwLMVAFnMGGMZApxTUc1_aJma3l1rrJvxoni9jcP3VueebpGwvXV6R61MXMLRoszenTMn341Fy3ncs8V5whdTQFCLZiMHUAhRyS-U4PG9jlbU5S8TBkT3rIBUqV03OUIdNAm8PidMSPLQlnyfF17wckfPx5fawbdbD07vRbuKjlNKghDHg8gVRmEActAO19IzVQgOu-3_7-72-mpsT9zMWm0JLTmRwVOlBlQK0iJVJiIzZdcJO2ix3he4WY" alt="Map" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center ring-[12px] ring-primary/10">
                                    <span className="material-symbols-outlined text-on-primary" style={{ fontVariationSettings: "'FILL' 1" }}>near_me</span>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
            {/* Footer */}
            <footer className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-50 py-16 mt-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 px-8 max-w-screen-2xl mx-auto">
                    <div className="col-span-2 md:col-span-1">
                        <div className="text-xl font-serif text-slate-900 dark:text-slate-50 mb-6">ETHOS CURATED</div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xs">Elevating the mundane through intentional curation and timeless craftsmanship.</p>
                    </div>
                    <div>
                        <h4 className="font-serif text-sm mb-6 uppercase tracking-widest">Experience</h4>
                        <ul className="space-y-4">
                            <li><a className="text-slate-500 dark:text-slate-400 hover:text-amber-700 dark:hover:text-amber-500 transition-colors text-sm" href="#">Brand Story</a></li>
                            <li><a className="text-slate-500 dark:text-slate-400 hover:text-amber-700 dark:hover:text-amber-500 transition-colors text-sm" href="#">Shipping &amp; Delivery</a></li>
                            <li><a className="text-slate-500 dark:text-slate-400 hover:text-amber-700 dark:hover:text-amber-500 transition-colors text-sm underline" href="#">Tracking</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-serif text-sm mb-6 uppercase tracking-widest">Support</h4>
                        <ul className="space-y-4">
                            <li><a className="text-slate-500 dark:text-slate-400 hover:text-amber-700 dark:hover:text-amber-500 transition-colors text-sm" href="#">Secure Payment</a></li>
                            <li><a className="text-slate-500 dark:text-slate-400 hover:text-amber-700 dark:hover:text-amber-500 transition-colors text-sm" href="#">FAQ</a></li>
                            <li><a className="text-slate-500 dark:text-slate-400 hover:text-amber-700 dark:hover:text-amber-500 transition-colors text-sm" href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-span-2 md:col-span-1 border-t md:border-t-0 pt-8 md:pt-0">
                        <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-on-surface-variant font-label mb-4">Registry</p>
                        <div className="text-slate-500 dark:text-slate-400 text-xs">© 2024 ETHOS CURATED. ALL ARTIFACTS RESERVED.</div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
