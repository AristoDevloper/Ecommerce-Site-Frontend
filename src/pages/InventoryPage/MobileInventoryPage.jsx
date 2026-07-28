import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function MobileInventoryPage() {
    const [view, setView] = useState('buyer');
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [view]);

    return (
        <div className="bg-background text-on-surface font-body selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen">
            {/* TopNavBar */}
            <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-sm">
                <div className="flex justify-between items-center w-full px-6 py-4 max-w-screen-2xl mx-auto">
                    <h1 onClick={() => navigate('/')} className="text-2xl font-bold tracking-tighter text-slate-900 font-headline uppercase cursor-pointer">ARTIFACT</h1>
                    <div className="flex items-center gap-5">
                        <span className="material-symbols-outlined text-slate-900 cursor-pointer">shopping_bag</span>
                        <span className="material-symbols-outlined text-slate-900 cursor-pointer">person</span>
                    </div>
                </div>
                {/* View Toggle (Buyer vs Seller) */}
                <div className="flex border-t border-outline-variant/10">
                    <button 
                        className={`flex-1 py-3 text-xs font-label tracking-[0.2em] uppercase transition-all border-b-2 ${view === 'buyer' ? 'border-primary text-primary' : 'border-transparent text-slate-400'}`} 
                        onClick={() => setView('buyer')}
                    >
                        Acquisitions
                    </button>
                    <button 
                        className={`flex-1 py-3 text-xs font-label tracking-[0.2em] uppercase transition-all border-b-2 ${view === 'seller' ? 'border-primary text-primary' : 'border-transparent text-slate-400'}`} 
                        onClick={() => setView('seller')}
                    >
                        Inventory
                    </button>
                </div>
            </header>

            <main className="pt-32 pb-32 min-h-screen px-6">
                {view === 'buyer' ? (
                    /* BUYER VIEW */
                    <section className="block animate-in fade-in duration-500">
                        <div className="mb-10">
                            <h2 className="font-display text-3xl tracking-tight mb-2">Curated Artifacts</h2>
                            <p className="text-on-surface-variant text-sm font-light max-w-xs leading-relaxed">Hand-selected pieces for the modern connoisseur, ranging from brutalist ceramics to contemporary canvas.</p>
                        </div>
                        {/* Asymmetrical Grid */}
                        <div className="grid grid-cols-1 gap-12">
                            {/* Product Card 1 */}
                            <div className="group">
                                <div className="relative aspect-[3/4] overflow-hidden bg-surface-container-low mb-4">
                                    <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Vessel No. 042" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjUCnVaHnY4-9QSwn2nePVi8_ECpSpK7t9GnFawQlEkmlpR778M0w9yW3H2Sox9MdnT7z42bq9jc3yPLydsFaFXakeKrZu-4By8cKghIOK-5_NKgVc7V61F0S4VuD9FW53fUHFj6c4PAo1PhqdmEsBX6T7jbeJrjhMayCSPetSyO67D95FzvCLwNW69-JNBA_Id8-rY3nf__qjs_WitJLTtVOhOO_7MlEgdIncD_BYbKey6y58iXmGZw"/>
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 text-[10px] tracking-widest uppercase font-bold text-primary">Limited Edition</div>
                                </div>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-display text-xl mb-1">Vessel No. 042</h3>
                                        <p className="text-xs uppercase tracking-widest text-on-surface-variant">Studio Kintsugi</p>
                                    </div>
                                    <p className="font-display text-lg">$1,240</p>
                                </div>
                                <button className="mt-4 w-full py-3 bg-primary text-on-primary text-xs uppercase tracking-widest font-bold hover:opacity-90 transition-opacity">
                                    View Details
                                </button>
                            </div>
                            {/* Product Card 2 */}
                            <div className="group">
                                <div className="relative aspect-[3/4] overflow-hidden bg-surface-container-low mb-4">
                                    <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Ethereal Form I" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjbAaSqy-xvmNHht5DEvsW7iRhbvM9kMZRlJPnDlf8l8rNQ-bfjahZiJwwCTJGYxW-jhCIHSR-3SyhPbgj78k2_WeAmdhfHIqUWOA4nQik_r5dzUQEE6sFn43EQi4lgNJlQjT-YBhw-CdERmz9suh7XR4YCOHgyCEcuBVcb24esIrdyORDJ9UfHXsPPKYr3YkERZ_jGCXMRUA2XVAHP86YbVZ_hDtZvXq77C65qxvPngYWg1xlSVoqAQ"/>
                                </div>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-display text-xl mb-1">Ethereal Form I</h3>
                                        <p className="text-xs uppercase tracking-widest text-on-surface-variant">Elena Rossi</p>
                                    </div>
                                    <p className="font-display text-lg">$3,800</p>
                                </div>
                                <button className="mt-4 w-full py-3 border border-primary/20 text-primary text-xs uppercase tracking-widest font-bold hover:bg-primary/5 transition-colors">
                                    Inquire
                                </button>
                            </div>
                            {/* Product Card 3 */}
                            <div className="group">
                                <div className="relative aspect-square overflow-hidden bg-surface-container-low mb-4">
                                    <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Observer Seat" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArsGXrgot-8-jHT6bwzgFUVUKYfzeGkO9eZS7zbf0IVFzdmmz43hJIO23xrsN5t4pYRqiMiFI_WJ-TaGXzetwf5ijjrzy1pygCyFuS1s4PWSzQgRR2oBVNu32xnX9JgkrO85gNgPM1UJ24_A_v6CPCV6TXEp1ngWQaTuMu0KWzNdepUzmhAszi13MkI0E5-S9HlYCvh_BT4ib9tj62bdJPc4BzykcUmuKP_IF-ZG5hC5UioVleB44Ltg"/>
                                </div>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-display text-xl mb-1">Observer Seat</h3>
                                        <p className="text-xs uppercase tracking-widest text-on-surface-variant">Artifact Design Lab</p>
                                    </div>
                                    <p className="font-display text-lg">$2,150</p>
                                </div>
                                <button className="mt-4 w-full py-3 bg-primary text-on-primary text-xs uppercase tracking-widest font-bold">
                                    Add to Bag
                                </button>
                            </div>
                        </div>
                    </section>
                ) : (
                    /* SELLER VIEW */
                    <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="mb-10 flex justify-between items-end">
                            <div>
                                <h2 className="font-display text-3xl tracking-tight mb-2">Inventory Management</h2>
                                <p className="text-on-surface-variant text-sm font-light leading-relaxed">Manage your exhibition pieces and active listings.</p>
                            </div>
                            <button className="bg-tertiary w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg">
                                <span className="material-symbols-outlined">add</span>
                            </button>
                        </div>
                        {/* Inventory List */}
                        <div className="space-y-6">
                            {/* Inventory Item 1 */}
                            <div className="flex gap-4 p-4 bg-surface-container-low rounded-lg items-center">
                                <div className="w-20 h-20 bg-surface-variant overflow-hidden rounded">
                                    <img className="w-full h-full object-cover" alt="Weave Motif 01" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNTyxRa0rpefsKt761HMScnE9UFYi8bCcd5iAEF2L8v9ZyPmzpjuXq-XRRIhlvenfU47R2a3ERSa8DML3XVcicf6RKyDW9joUOkE7AmxswxJirYLysqjzXeuBcTnJGXjATu8p32nrE76q0PpBUoes3sbubJqAdx55lE3cYZr0blRY3xekuclNc6t6VfrmP94vTogAu202ZWj_Zpw-CD8k60o9DCBh6dROP7Enn2herFyBm252WV5W7hg"/>
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-headline text-base">Weave Motif 01</h4>
                                    <p className="text-xs text-on-surface-variant font-label">$850 • 2 Units</p>
                                    <div className="flex gap-3 mt-2">
                                        <span className="text-[10px] uppercase font-bold text-tertiary">Active</span>
                                        <span className="text-[10px] uppercase font-bold text-on-surface-variant cursor-pointer hover:underline">Edit</span>
                                    </div>
                                </div>
                                <button className="text-on-surface-variant">
                                    <span className="material-symbols-outlined">more_vert</span>
                                </button>
                            </div>
                            {/* Inventory Item 2 */}
                            <div className="flex gap-4 p-4 bg-surface-container-low rounded-lg items-center">
                                <div className="w-20 h-20 bg-surface-variant overflow-hidden rounded">
                                    <img className="w-full h-full object-cover" alt="Pavilion Model B" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzIxaRF5hfDQkgYviE1_cPHYe9esmRFnaRzlcHod_Py_nJ7tO3Y-ocF9baBwb3qwNszHY9Qhe3jdx-oBseB0mIQXAp8y3U7rnDgAjgkKEGakJVBKpIsdHTN3RWjR3fp_YsmjEokHz6HDsK_xi2kCZuohl5YQhVjjDZaDHLf_zGtAtt8TgS6ngpP093Guc9YCxnXodB20SxXqjpNS5gJwbSl_pDPide9-uvq5BUIgKCXQRhLTOvWTHG8Q"/>
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-headline text-base">Pavilion Model B</h4>
                                    <p className="text-xs text-on-surface-variant font-label">$1,100 • 1 Unit</p>
                                    <div className="flex gap-3 mt-2">
                                        <span className="text-[10px] uppercase font-bold text-tertiary">Active</span>
                                        <span className="text-[10px] uppercase font-bold text-on-surface-variant cursor-pointer hover:underline">Edit</span>
                                    </div>
                                </div>
                                <button className="text-on-surface-variant">
                                    <span className="material-symbols-outlined">more_vert</span>
                                </button>
                            </div>
                            {/* Stats Card */}
                            <div className="mt-12 p-8 bg-primary-container text-on-primary-container rounded-xl">
                                <p className="text-xs uppercase tracking-widest font-bold mb-6 opacity-60">Performance Overview</p>
                                <div className="grid grid-cols-2 gap-8">
                                    <div>
                                        <p className="text-3xl font-display text-white mb-1">$12,450</p>
                                        <p className="text-[10px] uppercase tracking-tighter opacity-70">Total Revenue</p>
                                    </div>
                                    <div>
                                        <p className="text-3xl font-display text-white mb-1">14</p>
                                        <p className="text-[10px] uppercase tracking-tighter opacity-70">Artifacts Sold</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </main>

            {/* BottomNavBar */}
            <nav className="fixed bottom-0 w-full z-50 bg-white/90 backdrop-blur-xl border-t border-outline-variant/10 md:hidden">
                <div className="flex justify-around items-center px-4 py-4">
                    <a className="flex flex-col items-center gap-1 text-primary" href="#">
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>gallery_thumbnail</span>
                        <span className="text-[10px] font-label uppercase tracking-tighter">Gallery</span>
                    </a>
                    <a className="flex flex-col items-center gap-1 text-on-surface-variant" href="#">
                        <span className="material-symbols-outlined">search</span>
                        <span className="text-[10px] font-label uppercase tracking-tighter">Search</span>
                    </a>
                    <a className="flex flex-col items-center gap-1 text-on-surface-variant" href="#">
                        <span className="material-symbols-outlined">shopping_bag</span>
                        <span className="text-[10px] font-label uppercase tracking-tighter">Bag</span>
                    </a>
                    <a className="flex flex-col items-center gap-1 text-on-surface-variant" href="#">
                        <span className="material-symbols-outlined">person</span>
                        <span className="text-[10px] font-label uppercase tracking-tighter">Profile</span>
                    </a>
                </div>
            </nav>

            {/* Footer */}
            <footer className="bg-slate-50 dark:bg-slate-900 w-full border-t border-slate-200/20 pb-24 md:pb-8">
                <div className="grid grid-cols-2 gap-8 px-8 py-16 max-w-screen-2xl mx-auto">
                    <div className="col-span-2 mb-4">
                        <h2 className="text-lg font-bold text-slate-900 font-headline">ARTIFACT GALLERY</h2>
                    </div>
                    <div className="space-y-3">
                        <p className="font-body text-xs uppercase tracking-widest text-slate-500">Service</p>
                        <ul className="space-y-2">
                            <li><a className="text-xs uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors" href="#">Shipping &amp; Returns</a></li>
                            <li><a className="text-xs uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors" href="#">Privacy Policy</a></li>
                            <li><a className="text-xs uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors" href="#">Terms of Service</a></li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <p className="font-body text-xs uppercase tracking-widest text-slate-500">Connect</p>
                        <ul className="space-y-2">
                            <li><a className="text-xs uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors" href="#">Instagram</a></li>
                            <li><a className="text-xs uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors" href="#">Journal</a></li>
                            <li><a className="text-xs uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors" href="#">Contact Support</a></li>
                        </ul>
                    </div>
                    <div className="col-span-2 pt-8 border-t border-slate-200/20">
                        <p className="font-body text-[10px] uppercase tracking-widest text-slate-400">© 2024 ARTIFACT GALLERY. ALL RIGHTS RESERVED.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
