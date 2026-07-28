import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function DesktopInventoryPage() {
    const [isCurator, setIsCurator] = useState(false);
    const navigate = useNavigate();

    // Scroll to top on toggle
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [isCurator]);

    return (
        <div className="bg-background text-on-surface font-body selection:bg-tertiary/20 selection:text-primary min-h-screen">
            {/* Top Navigation Bar */}
            <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl shadow-sm">
                <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
                    <div className="flex items-center gap-12">
                        <span onClick={() => navigate('/')} className="text-2xl font-bold tracking-tighter text-slate-900 font-headline cursor-pointer">ARTIFACT</span>
                        <div className="hidden md:flex gap-8 items-center font-label text-xs uppercase tracking-widest">
                            <span className="text-slate-900 border-b border-slate-900 pb-1 duration-300 cursor-pointer">Collections</span>
                            <span className="text-slate-500 hover:text-slate-900 transition-colors duration-300 cursor-pointer">Lookbook</span>
                            <span className="text-slate-500 hover:text-slate-900 transition-colors duration-300 cursor-pointer">Archive</span>
                            <span className="text-slate-500 hover:text-slate-900 transition-colors duration-300 cursor-pointer">Exhibitions</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <button className="material-symbols-outlined text-slate-900 hover:opacity-70 transition-opacity">shopping_bag</button>
                        <button 
                            onClick={() => setIsCurator(!isCurator)}
                            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[10px] uppercase font-bold tracking-widest hover:brightness-110 transition-all ${isCurator ? 'bg-tertiary text-on-tertiary' : 'bg-primary-container text-on-primary-container'}`}
                        >
                            <span className="material-symbols-outlined text-sm">settings</span>
                            <span>{isCurator ? 'Buyer View' : 'Curator View'}</span>
                        </button>
                        <button className="material-symbols-outlined text-slate-900 hover:opacity-70 transition-opacity">person</button>
                    </div>
                </div>
            </nav>

            <main className="pt-32 pb-24 px-8 max-w-screen-2xl mx-auto">
                {!isCurator ? (
                    <>
                        {/* Editorial Header */}
                        <header className="mb-20 max-w-3xl animate-in fade-in duration-500">
                            <span className="text-tertiary font-label text-xs uppercase tracking-[0.2em] mb-4 block font-semibold">Seasonal Selection</span>
                            <h1 className="text-5xl md:text-7xl font-headline text-primary mb-8 tracking-tight leading-tight">Objects of <br/><span className="italic font-normal">Singular Intent.</span></h1>
                            <p className="text-on-surface-variant text-lg leading-relaxed font-light">A curated digital gallery for the discerning collector. Every artifact is vetted for material integrity, provenance, and timeless aesthetic value.</p>
                        </header>

                        {/* Buyer View: Product Grid */}
                        <div className="grid grid-cols-12 gap-8 animate-in fade-in duration-500">
                            {/* Artifact 1 */}
                            <div className="col-span-12 md:col-span-6 lg:col-span-4 group cursor-pointer lg:mt-16">
                                <div className="aspect-[4/5] overflow-hidden bg-surface-variant mb-6 rounded-md relative">
                                    <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Travertine Void #01" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrYGGVip-U9mG30VX36p4ZAsyjmvpeH3RBaLL9dO4fHQBfvwUHh9CanOBM7LyP0sLve3DjKTolHnp9IKgObR7_WaBHo7YR8eGml1R7qZ-Wt9Cr_zZQ9zvmynB7vsO1gJScu1Ndy0M6dH7TuordFQlf_B6OWqYAqTL94Cogh0EIexceAOfhqN6YzIWLaXEg0ivr2C9s4ZZeIseQ063U9Jxub0LNyo8NgxErIi87ysV-ZxmiooCzAPi4jA"/>
                                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500"></div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h3 className="font-headline text-xl text-primary">Travertine Void #01</h3>
                                    <p className="text-xs uppercase tracking-widest text-slate-500 font-label">Raw Stone &amp; Hand-Carved Oak</p>
                                    <span className="text-tertiary font-bold mt-2">$2,400.00</span>
                                </div>
                            </div>

                            {/* Artifact 2 */}
                            <div className="col-span-12 md:col-span-6 lg:col-span-4 group cursor-pointer">
                                <div className="aspect-[4/5] overflow-hidden bg-surface-variant mb-6 rounded-md relative">
                                    <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Obsidian Flow Vessel" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDp5wsaCZwbiz98645afswBSJUwO46BXx7w1JBFab-X9y3cw4Z4IfkUYUm8rz6-ALKElBPNQX6WJTqr_fiaK5GTlekCmiB1e9IdreURhljRmgyFVgqDsYtcgZsByKXEYc3AzC6qJsAqsvY2H-H7kovl2LY-p_yHnadCe1weHB9Dqv0BE4MOs4AGKPJTRUVVfCQG6ZAShkTVtNYPD3SxxGXlQRvfVTxKBAQQn69CYkbh6ZBIMFRHFAaBMQ"/>
                                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500"></div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h3 className="font-headline text-xl text-primary">Obsidian Flow Vessel</h3>
                                    <p className="text-xs uppercase tracking-widest text-slate-500 font-label">Hand-Blown Smoke Glass</p>
                                    <span className="text-tertiary font-bold mt-2">$1,150.00</span>
                                </div>
                            </div>

                            {/* Artifact 3 */}
                            <div className="col-span-12 md:col-span-6 lg:col-span-4 group cursor-pointer lg:mt-16">
                                <div className="aspect-[4/5] overflow-hidden bg-surface-variant mb-6 rounded-md relative">
                                    <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Brutalist Tapestry IV" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6pyJEkkhh0w7nsSXt_J7bj-vxsIo3fd-SzrwWpLBsu9c2mkVpfr8DWkE1FRA5ZPPJJzcp6MuNqFLCzaQ26PwNnsTLiL5UdrJgRE_rAKA7sIeCfM8NkgqLynNnZIQWCBv7--YRS4yaiqwolUztcPI0MR1q6SbJEQJjIRDlmHalph9oMO7qpeWRRnHTZ9AvcXe9Vt2wNNZ9fPUke8MKrq3QwWgn356ISXs6cvDj7vAbgIhZ87iNEAOVLw"/>
                                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500"></div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h3 className="font-headline text-xl text-primary">Brutalist Tapestry IV</h3>
                                    <p className="text-xs uppercase tracking-widest text-slate-500 font-label">Unbleached Linen &amp; Wool</p>
                                    <span className="text-tertiary font-bold mt-2">$3,850.00</span>
                                </div>
                            </div>
                            
                            {/* Artifact 4 */}
                            <div className="col-span-12 md:col-span-6 lg:col-span-4 group cursor-pointer">
                                <div className="aspect-[4/5] overflow-hidden bg-surface-variant mb-6 rounded-md relative">
                                    <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Axis Steel Chair" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAh9_JwaRAsPp9ZfrAsB0oHtCc5gJ5djv6upPu0BD3KLbspQEu54r6vZcSC4m9vPEStRocQQkkGPo5uKMUmVE0ah96xFAvhF_DTqiXWoNiOyhiA7NgR-CC0wKVJUn8brE-uCBXGnHS6Zxnn3s-yUEhoen9saQAkg6_ZALBM49ep-cOISf1D40XkDeJ_W4Mr6zrHxG7GivXcpQnmXBQlQgzxvBBAzESq2iOSibTwMZfoYQTuYypeJWk_yw"/>
                                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500"></div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h3 className="font-headline text-xl text-primary">Axis Steel Chair</h3>
                                    <p className="text-xs uppercase tracking-widest text-slate-500 font-label">Blackened Steel &amp; Cognac Leather</p>
                                    <span className="text-tertiary font-bold mt-2">$5,200.00</span>
                                </div>
                            </div>

                            {/* Artifact 5 */}
                            <div className="col-span-12 md:col-span-6 lg:col-span-4 group cursor-pointer lg:mt-16">
                                <div className="aspect-[4/5] overflow-hidden bg-surface-variant mb-6 rounded-md relative">
                                    <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Basalt Nesting Set" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB9TZruMI97WUQxOjI7p_daKk4GQX0b760gEtRY_C_V_MD2LULb9no5DYq0W4BODqLIVB-4QFeouUw3urect60TZbejv0fvGXAbGweeplH3c5rJVEEGw8gRj9zQ84BWFMRZbqoDqBPusxfI0rkc30u_AXhJGadTNmRaneMFrzX0hE9gxyJ7-2WZFtORRWOrzE0dZHbOHcCg5L5C_JOUnUihgx5LAwEsHPMf4ZNk30VH-Nmttd6E96T7dQ"/>
                                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500"></div>
                                </div>
                                <div className="flex flex-col gap-1">
                                    <h3 className="font-headline text-xl text-primary">Basalt Nesting Set</h3>
                                    <p className="text-xs uppercase tracking-widest text-slate-500 font-label">Matte Stoneware Ceramic</p>
                                    <span className="text-tertiary font-bold mt-2">$420.00</span>
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        {/* Curator View: Inventory Management */}
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="flex justify-between items-center mb-12">
                                <h2 className="text-3xl font-headline text-primary">Inventory Management</h2>
                                <button className="px-6 py-3 bg-primary text-on-primary rounded-lg flex items-center gap-2 text-xs uppercase tracking-widest font-bold transition-all hover:shadow-xl hover:-translate-y-0.5">
                                    <span className="material-symbols-outlined text-sm">add</span> Add New Artifact
                                </button>
                            </div>
                            
                            <div className="bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant/10">
                                <table className="w-full text-left border-collapse">
                                    <thead className="bg-surface-container-high font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
                                        <tr>
                                            <th className="px-6 py-4 font-bold">Artifact</th>
                                            <th className="px-6 py-4 font-bold">Status</th>
                                            <th className="px-6 py-4 font-bold">Price</th>
                                            <th className="px-6 py-4 font-bold">Inventory</th>
                                            <th className="px-6 py-4 font-bold text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-outline-variant/10 text-sm">
                                        {/* Item 1 */}
                                        <tr className="hover:bg-surface-container transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 rounded bg-surface-variant overflow-hidden">
                                                        <img className="w-full h-full object-cover" alt="Travertine Void #01" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBM3mReSoiFwS-uFkejlwAL218kxH100W9jeTObDXZfauHErrkxsmpp_3jxuetvuWlFa_d29Q6Eu6BG1SFHaYfXpVr_Q4bxul_RkVeCQMh7u-KUjHi0J2knob37W7QiA71TrniWVB_Tq698aUsYwig7A7DRr0QctgPs8OnyDg4b5CCk_BS0_KVfNfOg-rPaEFAtNvwQaRTdgCVMF0MKZurGC-EZmzOkdDkCVbAWgTHyeP9YHTrj1qDldA"/>
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-primary">Travertine Void #01</p>
                                                        <p className="text-xs text-on-surface-variant uppercase">Stone</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="px-2 py-1 bg-tertiary/10 text-tertiary text-[10px] font-bold uppercase rounded">Active</span>
                                            </td>
                                            <td className="px-6 py-4 font-body">$2,400.00</td>
                                            <td className="px-6 py-4 font-body">02</td>
                                            <td className="px-6 py-4 text-right">
                                                <div className="flex justify-end gap-2">
                                                    <button className="p-2 hover:bg-primary-container hover:text-on-primary-container rounded transition-colors duration-200">
                                                        <span className="material-symbols-outlined text-lg">edit</span>
                                                    </button>
                                                    <button className="p-2 hover:bg-error-container hover:text-on-error-container rounded transition-colors duration-200">
                                                        <span className="material-symbols-outlined text-lg">delete</span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        {/* Item 2 */}
                                        <tr className="hover:bg-surface-container transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 rounded bg-surface-variant overflow-hidden">
                                                        <img className="w-full h-full object-cover" alt="Obsidian Flow Vessel" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASfgezhajtU8B1HErPzyYGzD0okNBdPY5zbiz9IzCetI_cDdaOYErsqnz3UtNiiUXOdXYeKVz-uGkaX9lgdpf6qhe56uLjhk78vmNnyQ7mVo4FLYRTRtrQfohOO0dKpAopA1RCa4nH5FZZJHRxXTE5USbwMyYL9F9qHPOpzY9e2_By26CPf4R1wum0nDn6lZjtJCFNAP359jrA1PParLMJwYWmLHULIW0jhuh-kLvskLSsMwkyjF7WmA"/>
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-primary">Obsidian Flow Vessel</p>
                                                        <p className="text-xs text-on-surface-variant uppercase">Glass</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="px-2 py-1 bg-tertiary/10 text-tertiary text-[10px] font-bold uppercase rounded">Active</span>
                                            </td>
                                            <td className="px-6 py-4 font-body">$1,150.00</td>
                                            <td className="px-6 py-4 font-body">05</td>
                                            <td className="px-6 py-4 text-right">
                                                <div className="flex justify-end gap-2">
                                                    <button className="p-2 hover:bg-primary-container hover:text-on-primary-container rounded transition-colors duration-200">
                                                        <span className="material-symbols-outlined text-lg">edit</span>
                                                    </button>
                                                    <button className="p-2 hover:bg-error-container hover:text-on-error-container rounded transition-colors duration-200">
                                                        <span className="material-symbols-outlined text-lg">delete</span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        {/* Item 3 */}
                                        <tr className="hover:bg-surface-container transition-colors">
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 rounded bg-surface-variant overflow-hidden">
                                                        <img className="w-full h-full object-cover" alt="Brutalist Tapestry IV" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBoHHfFfXsr9bi5Bq7_VszdpblarEaotRm9bXdQTn35m6Q21Zmh9QdQadvZWIXN_fxNSaN8XBvDeRVBdMwaY_mICfO10clW4U0jViM_bAGABsvT3uKDVYuJ-QjKFuFKL69P7Pd7xI2GOjeJ5CPG5hthBqpQQmbQnIf--miJz2bZzgmplPtoTRlMPNj-nxAcVwimROCwjo3n6EVI6RS36C9cuawhaLc7IOoDhu5LXIFr7MS1BMAXQXiSA"/>
                                                    </div>
                                                    <div>
                                                        <p className="font-bold text-primary">Brutalist Tapestry IV</p>
                                                        <p className="text-xs text-on-surface-variant uppercase">Textile</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="px-2 py-1 bg-slate-200 text-slate-500 text-[10px] font-bold uppercase rounded">Archived</span>
                                            </td>
                                            <td className="px-6 py-4 font-body">$3,850.00</td>
                                            <td className="px-6 py-4 font-body">01</td>
                                            <td className="px-6 py-4 text-right">
                                                <div className="flex justify-end gap-2">
                                                    <button className="p-2 hover:bg-primary-container hover:text-on-primary-container rounded transition-colors duration-200">
                                                        <span className="material-symbols-outlined text-lg">edit</span>
                                                    </button>
                                                    <button className="p-2 hover:bg-error-container hover:text-on-error-container rounded transition-colors duration-200">
                                                        <span className="material-symbols-outlined text-lg">delete</span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </>
                )}
            </main>

            {/* Footer */}
            <footer className="bg-slate-50 border-t border-slate-200/20 w-full mt-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8 py-16 max-w-screen-2xl mx-auto">
                    <div className="col-span-2">
                        <span className="text-lg font-bold text-slate-900 font-headline mb-4 block">ARTIFACT</span>
                        <p className="font-body text-xs text-slate-500 max-w-xs leading-relaxed uppercase tracking-wider mb-8">Curating the intersection of brutalism and organic warmth for the modern domestic space.</p>
                        <div className="flex gap-4">
                            <span className="material-symbols-outlined text-slate-900 cursor-pointer hover:opacity-50 transition-opacity">public</span>
                            <span className="material-symbols-outlined text-slate-900 cursor-pointer hover:opacity-50 transition-opacity">mail</span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="font-label text-xs uppercase tracking-widest font-bold text-slate-900">Explore</span>
                        <a className="font-label text-xs uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors" href="#">Shipping &amp; Returns</a>
                        <a className="font-label text-xs uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors" href="#">Privacy Policy</a>
                        <a className="font-label text-xs uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors" href="#">Terms of Service</a>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="font-label text-xs uppercase tracking-widest font-bold text-slate-900">Connect</span>
                        <a className="font-label text-xs uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors" href="#">Instagram</a>
                        <a className="font-label text-xs uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors" href="#">Journal</a>
                        <a className="font-label text-xs uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors" href="#">Contact Support</a>
                    </div>
                </div>
                <div className="px-8 py-8 border-t border-slate-200/40 max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between gap-4">
                    <span className="font-label text-[10px] uppercase tracking-[0.2em] text-slate-400">© 2024 ARTIFACT GALLERY. ALL RIGHTS RESERVED.</span>
                    <span className="font-label text-[10px] uppercase tracking-[0.2em] text-slate-400">Ethos Design Framework v2.0</span>
                </div>
            </footer>
        </div>
    );
}
