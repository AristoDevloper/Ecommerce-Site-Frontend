export function MobileSellerChatPage() {
    return (
        <div className="bg-background text-on-surface min-h-screen flex flex-col">
            {/* TopAppBar */}
            <header className="fixed top-0 w-full z-50 bg-[#f8f9fa] dark:bg-slate-950 backdrop-blur-xl bg-opacity-80 shadow-[0px_20px_40px_rgba(25,28,29,0.04)]">
                <div className="flex justify-between items-center px-6 py-4 w-full">
                    <div className="flex items-center gap-4">
                        <span className="material-symbols-outlined text-[#051125] dark:text-slate-100 cursor-pointer active:scale-95 duration-200">arrow_back</span>
                        <h1 className="font-noto-serif tracking-tighter text-lg font-bold text-[#051125] dark:text-white">Customer Inquiries</h1>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="material-symbols-outlined text-[#051125] dark:text-slate-100 cursor-pointer active:scale-95 duration-200">more_vert</span>
                    </div>
                </div>
            </header>
            <main className="flex-1 mt-16 mb-36 px-4 pt-4">
                {/* Active Chat Context Banner */}
                <section className="bg-surface-container-low rounded-xl p-4 mb-6 transition-all border-l-4 border-tertiary">
                    <div className="flex items-start justify-between">
                        <div className="flex gap-4">
                            <div className="w-16 h-16 rounded-lg overflow-hidden bg-surface-variant flex-shrink-0">
                                <img alt="Obsidian Chronograph" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9_Sn9dkHu0T4JtcOJXEZc_aCgf5gbNRdPFCwP6PLmszs01wNrllxGQ36U7bh1VYu6iSRZslPgRWND4lN-iqppgFvbXfkle2VhGKGE0PxmCp47DxFMWZiGeT5U0IsVPqAonmrKjIGSd82cDEauMoRH9wbS599XH8b08BvKwN9ilA_RBt-S7-FoFkKoWiknLRK3u8B7wj2LT4QobocxLLYyOtSYLtTcZjc2wCTyw_VPRKUtRUOyybBRFr8_fJ9oI1-YZ5soRleRaiPM" />
                            </div>
                            <div>
                                <p className="font-label text-[10px] uppercase tracking-widest text-tertiary font-bold">Active Inquiry</p>
                                <h2 className="text-lg font-noto-serif text-primary leading-tight">Obsidian Chronograph</h2>
                                <p className="text-sm text-secondary font-medium">Customer: Alexander V.</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="text-sm font-bold text-primary">$4,850.00</p>
                            <span className="text-[10px] bg-secondary-container text-on-secondary-fixed px-2 py-0.5 rounded font-bold uppercase tracking-tighter">In Stock</span>
                        </div>
                    </div>
                    {/* Seller Tools */}
                    <div className="mt-4 flex gap-2 overflow-x-auto pb-1 no-scrollbar">
                        <button className="bg-primary text-on-primary px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 active:scale-95 transition-transform">
                            <span className="material-symbols-outlined text-sm">payments</span>
                            Send Offer
                        </button>
                        <button className="bg-surface-container-highest text-primary px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 active:scale-95 transition-transform">
                            <span className="material-symbols-outlined text-sm">visibility</span>
                            View Order
                        </button>
                        <button className="bg-surface-container-highest text-primary px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 active:scale-95 transition-transform">
                            <span className="material-symbols-outlined text-sm">inventory_2</span>
                            Inventory
                        </button>
                    </div>
                </section>
                {/* Message Feed */}
                <div className="space-y-6 mb-8">
                    <div className="flex justify-center">
                        <span className="text-[10px] uppercase tracking-[0.2em] text-outline font-bold bg-surface px-4 py-1">Yesterday</span>
                    </div>
                    {/* Customer Message */}
                    <div className="flex flex-col items-start max-w-[85%]">
                        <div className="bg-surface-container-highest p-4 rounded-2xl rounded-bl-none shadow-sm">
                            <p className="text-sm leading-relaxed text-on-surface">Good afternoon. Is the Obsidian Chronograph currently in its original packaging? I noticed it was part of the 'Heirloom' collection.</p>
                        </div>
                        <span className="text-[10px] text-outline mt-1 ml-1">14:22 • Alexander V.</span>
                    </div>
                    {/* Seller Reply (You) */}
                    <div className="flex flex-col items-end ml-auto max-w-[85%]">
                        <div className="bg-primary text-on-primary p-4 rounded-2xl rounded-br-none shadow-md">
                            <p className="text-sm leading-relaxed">Hello Alexander. Yes, it remains in its original presentation box with all certificates of authenticity. It has been curated specifically for its pristine condition.</p>
                        </div>
                        <div className="flex items-center gap-1 mt-1 mr-1">
                            <span className="text-[10px] text-outline">14:45 • Read</span>
                            <span className="material-symbols-outlined text-[12px] text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        </div>
                    </div>
                    {/* Customer Message */}
                    <div className="flex flex-col items-start max-w-[85%]">
                        <div className="bg-surface-container-highest p-4 rounded-2xl rounded-bl-none shadow-sm">
                            <p className="text-sm leading-relaxed text-on-surface">Excellent. I am highly interested. Could you provide a slightly more detailed shot of the bezel under direct light?</p>
                        </div>
                        <span className="text-[10px] text-outline mt-1 ml-1">15:10 • Alexander V.</span>
                    </div>
                </div>
                {/* Chat List Preview / Inbox */}
                <div className="mt-12 border-t border-outline-variant/20 pt-6">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-sm font-bold uppercase tracking-widest text-secondary">Other Inquiries</h3>
                        <span className="text-xs font-bold text-tertiary">12 Active</span>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 p-2 opacity-60">
                            <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-variant">
                                <img alt="Customer Julian" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkiwGnDTTA-tAlAdahIesFoV_Oy0QIFSLKvJg8FNfqqk1u0WylPH-xYbcOVUoiSUFDKbDB7Y0rnXmt9YQPhhI-5raHLxHxQyhZ1wkY8gH7wKHboRDBMcnIWHcL91VJYf_WDkhOoM1O8PDLbPtLJfAK23tsyEIldTjK0a__t0aimn2pw1XwwLyLEsJ-wNsybXLBsnNxMhRi3kBaySSSio3TAAkO84aQzyVHHtsTJs0E7kWUKWaGVrbMsa6-jQdAumEmufEJHWrig2UI" />
                            </div>
                            <div className="flex-1 border-b border-outline-variant/10 pb-2">
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-sm">Julian R.</span>
                                    <span className="text-[10px] text-outline">2h ago</span>
                                </div>
                                <p className="text-xs text-secondary truncate">Is the 'Ethereal Vase' still available for shipping to Paris?</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4 p-2 opacity-60">
                            <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-variant">
                                <img alt="Customer Elena" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYRsAifl1cXnPT6XwnkcO5POtTb3W9eXU96p_X-r-zi-S7mZS_htvmnadL107BMuT8xbF27LDkjRjC0DW0gxFGZCplNSQwGCf2N1GoC0015sTBtWuo2WBORfWUIxS4aZkMnDToBxeAqNPnAnP_1tMMClZ-noBgBohzXcBaqYKxzBUOYLaaCnvEFE8ltDtgIEtZwgOU2Z4Xdny96UiF2RwMz3WRVhEZFE7LsHI-7U8qzFC_b80adNO5DNBSW5pT_um0yiFIqMelbqZR" />
                            </div>
                            <div className="flex-1 border-b border-outline-variant/10 pb-2">
                                <div className="flex justify-between items-center">
                                    <span className="font-bold text-sm">Elena M.</span>
                                    <span className="text-[10px] text-outline">Yesterday</span>
                                </div>
                                <p className="text-xs text-secondary truncate">Regarding the silk tapestry—could we discuss custom dimensions?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {/* Message Input Bar */}
            <div className="fixed bottom-20 left-0 w-full px-4 z-40">
                <div className="bg-[#ffffff] dark:bg-slate-900 backdrop-blur-lg bg-opacity-90 rounded-2xl shadow-2xl p-2 flex items-center gap-3">
                    <button className="w-10 h-10 rounded-xl bg-surface-container-low flex items-center justify-center text-primary active:scale-90 transition-transform">
                        <span className="material-symbols-outlined">add</span>
                    </button>
                    <div className="flex-1 relative">
                        <input className="w-full bg-transparent border-none focus:ring-0 text-sm py-2 placeholder:text-outline-variant" placeholder="Draft your reply..." type="text" />
                    </div>
                    <button className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center active:scale-90 transition-transform">
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>send</span>
                    </button>
                </div>
            </div>
            {/* BottomNavBar */}
            <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-3 bg-[#ffffff] dark:bg-slate-900 backdrop-blur-lg bg-opacity-90 z-50 rounded-t-lg shadow-[0px_-10px_30px_rgba(25,28,29,0.06)]">
                <div className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-3 py-1.5 active:translate-y-0.5 duration-150 hover:text-[#6a5f00] transition-colors">
                    <span className="material-symbols-outlined text-xl">storefront</span>
                    <span className="font-['Manrope'] text-[10px] uppercase tracking-[0.1em] font-semibold mt-1">Boutique</span>
                </div>
                <div className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-3 py-1.5 active:translate-y-0.5 duration-150 hover:text-[#6a5f00] transition-colors">
                    <span className="material-symbols-outlined text-xl">search</span>
                    <span className="font-['Manrope'] text-[10px] uppercase tracking-[0.1em] font-semibold mt-1">Search</span>
                </div>
                <div className="flex flex-col items-center justify-center text-[#051125] dark:text-white bg-[#f3f4f5] dark:bg-slate-800 rounded-xl px-4 py-2 active:translate-y-0.5 duration-150 transition-colors">
                    <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>chat_bubble</span>
                    <span className="font-['Manrope'] text-[10px] uppercase tracking-[0.1em] font-semibold mt-1">Inbox</span>
                </div>
                <div className="flex flex-col items-center justify-center text-slate-400 dark:text-slate-500 px-3 py-1.5 active:translate-y-0.5 duration-150 hover:text-[#6a5f00] transition-colors">
                    <span className="material-symbols-outlined text-xl">person</span>
                    <span className="font-['Manrope'] text-[10px] uppercase tracking-[0.1em] font-semibold mt-1">Account</span>
                </div>
            </nav>
        </div>
    );
}
