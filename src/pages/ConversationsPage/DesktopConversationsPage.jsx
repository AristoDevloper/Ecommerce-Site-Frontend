export function DesktopConversationsPage() {
    return (
        <div className="bg-background text-on-surface font-body antialiased h-screen flex flex-col overflow-hidden">
            {/* TopNavBar */}
            <nav className="shrink-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-outline-variant/10 flex justify-between items-center px-8 py-4 max-w-full mx-auto">
                <div className="flex items-center gap-8">
                    <span className="text-2xl font-bold tracking-tighter text-slate-900 font-headline">The Curated Gallery</span>
                    <div className="hidden md:flex items-center gap-6">
                        <a className="text-slate-500 hover:text-slate-900 font-headline tracking-tight transition-opacity hover:opacity-70" href="#">Collections</a>
                        <a className="text-slate-500 hover:text-slate-900 font-headline tracking-tight transition-opacity hover:opacity-70" href="#">Artifacts</a>
                        <a className="text-slate-500 hover:text-slate-900 font-headline tracking-tight transition-opacity hover:opacity-70" href="#">Designers</a>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-slate-900 cursor-pointer transition-opacity hover:opacity-70">shopping_bag</span>
                    <span className="material-symbols-outlined text-slate-900 cursor-pointer transition-opacity hover:opacity-70">account_circle</span>
                </div>
            </nav>
            <div className="flex flex-1 overflow-hidden">
                {/* SideNavBar */}
                <aside className="hidden lg:flex flex-col h-full py-8 px-4 gap-2 bg-slate-50 w-64 border-r border-outline-variant/20 font-body antialiased">
                    <div className="mb-8 px-4">
                        <h2 className="text-slate-900 font-bold text-xl leading-tight">Conversations</h2>
                        <p className="text-slate-500 text-xs tracking-widest uppercase mt-1">Direct Access</p>
                    </div>
                    <nav className="flex flex-col gap-1">
                        <a className="text-slate-900 font-semibold flex items-center gap-3 px-4 py-3 bg-white rounded-lg hover:translate-x-1 duration-200 active:scale-95" href="#">
                            <span className="material-symbols-outlined">chat_bubble</span>
                            <span>All Messages</span>
                        </a>
                        <a className="text-slate-500 flex items-center gap-3 px-4 py-3 hover:bg-slate-100 hover:translate-x-1 duration-200 active:scale-95" href="#">
                            <span className="material-symbols-outlined">storefront</span>
                            <span>Sellers</span>
                        </a>
                        <a className="text-slate-500 flex items-center gap-3 px-4 py-3 hover:bg-slate-100 hover:translate-x-1 duration-200 active:scale-95" href="#">
                            <span className="material-symbols-outlined">help_outline</span>
                            <span>Support</span>
                        </a>
                        <a className="text-slate-500 flex items-center gap-3 px-4 py-3 hover:bg-slate-100 hover:translate-x-1 duration-200 active:scale-95" href="#">
                            <span className="material-symbols-outlined">archive</span>
                            <span>Archived</span>
                        </a>
                    </nav>
                </aside>
                {/* Main Split Pane Layout */}
                <div className="flex-1 flex overflow-hidden">
                    {/* Left Pane: Conversation List */}
                    <section className="w-full md:w-[400px] flex-shrink-0 flex flex-col border-r border-outline-variant/20 bg-white">
                        <div className="p-6 border-b border-outline-variant/10">
                            <header className="mb-6">
                                <span className="text-tertiary font-label text-xs font-bold uppercase tracking-[0.2em] mb-2 block">Inbox</span>
                                <h1 className="text-3xl font-headline font-bold text-on-surface tracking-tighter leading-none">Curated Dialogues</h1>
                            </header>
                            <div className="relative group">
                                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-xl">search</span>
                                <input className="w-full pl-10 pr-4 py-2.5 bg-surface-container-low border-none rounded-lg focus:ring-1 focus:ring-primary/20 transition-all font-body text-sm outline-none" placeholder="Search conversations..." type="text" />
                            </div>
                        </div>
                        <div className="flex-1 overflow-y-auto p-4 space-y-2">
                            {/* Chat Item 1: Active */}
                            <div className="group relative flex items-center gap-4 p-4 rounded-xl bg-surface-container-low border border-primary/10 cursor-pointer transition-all">
                                <div className="relative h-14 w-14 flex-shrink-0">
                                    <img alt="Artifact" className="h-full w-full object-cover rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLlo9FEw3EEdYGfNiyUwJnAPWuKzX6Lgcjq2FXUt5riXkbPu675UMSwPfiXwQb9uSyr6JBVVgnVXLAL-Ty798E2e0hmJ9rP-vXwKqL_Vfa_zHPG9cbbGY7ISgtl3vgav8A1A3jsObmvYHl0RSoiRN6Jq7tN0URAt3Y6Sr9Ac3Mn_NlDzb0eBNTqztqmea63Im8RasA8N5gFfqURkA4f7GzxpocX3EngxtgStLaq7KKNzu2V3DjBXKH20iCQkG7ui2AvgRrR3_CIU-v" />
                                    <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full border-2 border-white overflow-hidden shadow-sm">
                                        <img alt="Seller" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2Tnk0B7-_-MMm4hYdVKh19VNN4wJJ2ZCXYEuisfR4neLuiedWTREjixzQejEBuIasLu83C4Bp-CQm1Xiq-UT4VwFF7-Q8GHaoGmit4NztfnRp8wXKUBQfQ5zEdRiKUitaAO7Mu41jn4nrSLoyxmE84wFg2WnOvotLOkWsVqcMD679aMnARnS1haTEbAMk3qwPCz5lsASvLdy_abNAeIXZwOCzT1jepo85PfTjaP96Q-PrwCvcCcYdnAITvYepTtGpVv7MqntvK9iS" />
                                    </div>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-headline font-bold text-on-surface truncate">Elias Thorne Studios</h3>
                                        <span className="text-[10px] font-label font-medium text-tertiary whitespace-nowrap">2m ago</span>
                                    </div>
                                    <p className="text-xs font-body font-semibold text-primary truncate mb-0.5">Hand-Glazed Terra Vase</p>
                                    <p className="text-[11px] font-body text-on-surface-variant truncate">The kiln just finished its cooling cycle...</p>
                                </div>
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-8 w-1 bg-primary rounded-r-full"></div>
                            </div>
                            {/* Chat Item 2 */}
                            <div className="group flex items-center gap-4 p-4 rounded-xl hover:bg-surface-container-low transition-all cursor-pointer">
                                <div className="relative h-14 w-14 flex-shrink-0">
                                    <img alt="Artifact" className="h-full w-full object-cover rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjCRzGA9MIFbD4KuDF8uXicoWMCYJPN-998JbbCfOrIOM24VnxoLQ6X-RLgb5fkMZWYh-jQrVZUxoO_XJR2uHGeYvOkRgoAI1WfJKroeFnAi-rjB9yezSacWbGTEon8xTzpnB1DVrL7zFILnfbT0MiuD4BDlDK5g05n-nmQxphaRMG-vNLCk-WTfn0pION7to6PHUrHGFWot9cVv92aSjTY5kPTItM-dJYSUgZwn2gh1yftqI0mqcKQPInk5AKKJkGhbVpbdhWDnwg" />
                                    <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full border-2 border-white overflow-hidden shadow-sm">
                                        <img alt="Seller" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZalIRnsHKpC8SNFCgGHhLs618wP698tHY1bswAK9aOEtHxSQ3v3cQ9OSus3jEKXw6fBq8DbIK9sg9juqXXp0YxhOPOVXUIkU8b_Fq7LTKBQBHFMtDH53T8RPO1nHr6yRLTvGdgpbS-E0SfTJKG6Xj1wfXMO2Wo-ewHuzqZBE2DFnBMR2UQfEIUbV3Dw8-7iPYuVndt__H3_NOfaoDlXCWufhWx3RvmZaWyJp5aZ-p5kUzTh_H_dE39M7jQgmoRP68eR8GuKmCT5Gj" />
                                    </div>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-headline font-bold text-on-surface truncate">Heritage Horology</h3>
                                        <span className="text-[10px] font-label text-outline whitespace-nowrap">1h ago</span>
                                    </div>
                                    <p className="text-xs font-body font-semibold text-on-surface truncate mb-0.5">1964 Chronograph Zenith</p>
                                    <p className="text-[11px] font-body text-on-surface-variant truncate">I've attached the authentication documents...</p>
                                </div>
                            </div>
                            {/* Chat Item 3 */}
                            <div className="group flex items-center gap-4 p-4 rounded-xl hover:bg-surface-container-low transition-all cursor-pointer">
                                <div className="relative h-14 w-14 flex-shrink-0">
                                    <img alt="Artifact" className="h-full w-full object-cover rounded-lg" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7CsO-YETB_JNVGCIl8GAO-FGvFw8ep5S7l_Rojwz3_nq55MRh9Ur89nx2bT5m-ownOYI3rkijMwR-cy0MarsWvqyzKoJTOz6zoBQtHIwINNRmOXWmhzpEraRsTv-v8J1e3G4C1zkd1s4R4NKdR10ObdO4-aDtegyqaWdqdEbI_kRWeQpI3gwA9KETR7w4Cl1uqC8ufdsP8IqukuaHgmVvXHpbgEBfzlK775n_CIkUA6CO3nolDhRn86LJRrdu63qsoWSBqxZXJmoC" />
                                    <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full border-2 border-white overflow-hidden shadow-sm flex items-center justify-center bg-primary text-[8px] text-white font-bold">AG</div>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-sm font-headline font-bold text-on-surface truncate">Atelier Gallerie</h3>
                                        <span className="text-[10px] font-label text-outline whitespace-nowrap">Yesterday</span>
                                    </div>
                                    <p className="text-xs font-body font-semibold text-on-surface truncate mb-0.5">Silent Nocturne No. 4</p>
                                    <p className="text-[11px] font-body text-on-surface-variant truncate">We can arrange a private viewing this Saturday...</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Right Pane: Messaging Section */}
                    <section className="flex-1 flex flex-col bg-surface-bright relative">
                        {/* Chat Header */}
                        <div className="h-20 shrink-0 px-8 border-b border-outline-variant/10 bg-white/50 backdrop-blur-md flex items-center justify-between z-10">
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 rounded-full overflow-hidden border border-outline-variant/20">
                                    <img alt="Seller" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2Tnk0B7-_-MMm4hYdVKh19VNN4wJJ2ZCXYEuisfR4neLuiedWTREjixzQejEBuIasLu83C4Bp-CQm1Xiq-UT4VwFF7-Q8GHaoGmit4NztfnRp8wXKUBQfQ5zEdRiKUitaAO7Mu41jn4nrSLoyxmE84wFg2WnOvotLOkWsVqcMD679aMnARnS1haTEbAMk3qwPCz5lsASvLdy_abNAeIXZwOCzT1jepo85PfTjaP96Q-PrwCvcCcYdnAITvYepTtGpVv7MqntvK9iS" />
                                </div>
                                <div>
                                    <h2 className="text-lg font-headline font-bold text-on-surface leading-tight">Elias Thorne Studios</h2>
                                    <div className="flex items-center gap-1.5">
                                        <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                                        <span className="text-[10px] uppercase tracking-wider font-bold text-outline">Online now</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button className="p-2.5 rounded-full hover:bg-surface-container-low transition-colors"><span className="material-symbols-outlined text-on-surface-variant">call</span></button>
                                <button className="p-2.5 rounded-full hover:bg-surface-container-low transition-colors"><span className="material-symbols-outlined text-on-surface-variant">info</span></button>
                                <button className="p-2.5 rounded-full hover:bg-surface-container-low transition-colors"><span className="material-symbols-outlined text-on-surface-variant">more_vert</span></button>
                            </div>
                        </div>
                        {/* Product Preview Card (Pinned) */}
                        <div className="px-8 py-4 bg-white/30 backdrop-blur-sm border-b border-outline-variant/10 flex items-center justify-between z-10 group cursor-pointer hover:bg-white/50 transition-colors">
                            <div className="flex items-center gap-4">
                                <img alt="Vase" className="h-12 w-12 rounded object-cover shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLlo9FEw3EEdYGfNiyUwJnAPWuKzX6Lgcjq2FXUt5riXkbPu675UMSwPfiXwQb9uSyr6JBVVgnVXLAL-Ty798E2e0hmJ9rP-vXwKqL_Vfa_zHPG9cbbGY7ISgtl3vgav8A1A3jsObmvYHl0RSoiRN6Jq7tN0URAt3Y6Sr9Ac3Mn_NlDzb0eBNTqztqmea63Im8RasA8N5gFfqURkA4f7GzxpocX3EngxtgStLaq7KKNzu2V3DjBXKH20iCQkG7ui2AvgRrR3_CIU-v" />
                                <div>
                                    <p className="text-[10px] uppercase tracking-widest font-bold text-tertiary">Discussing Artifact</p>
                                    <h3 className="text-sm font-bold text-on-surface">Hand-Glazed Terra Vase</h3>
                                </div>
                            </div>
                            <div className="text-right">
                                <p className="text-xs font-bold text-primary font-headline">$1,240</p>
                                <p className="text-[10px] text-outline">Limited Edition</p>
                            </div>
                        </div>
                        {/* Message History */}
                        <div className="flex-1 overflow-y-auto px-8 py-10 space-y-8 flex flex-col scroll-smooth">
                            <div className="flex justify-center">
                                <span className="px-3 py-1 bg-surface-container text-[10px] font-bold uppercase tracking-[0.15em] text-outline rounded-full">Monday, Oct 24</span>
                            </div>
                            {/* Seller Message */}
                            <div className="flex gap-4 max-w-[80%]">
                                <div className="h-8 w-8 rounded-full overflow-hidden shrink-0 mt-auto border border-outline-variant/10">
                                    <img alt="Elias" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2Tnk0B7-_-MMm4hYdVKh19VNN4wJJ2ZCXYEuisfR4neLuiedWTREjixzQejEBuIasLu83C4Bp-CQm1Xiq-UT4VwFF7-Q8GHaoGmit4NztfnRp8wXKUBQfQ5zEdRiKUitaAO7Mu41jn4nrSLoyxmE84wFg2WnOvotLOkWsVqcMD679aMnARnS1haTEbAMk3qwPCz5lsASvLdy_abNAeIXZwOCzT1jepo85PfTjaP96Q-PrwCvcCcYdnAITvYepTtGpVv7MqntvK9iS" />
                                </div>
                                <div className="space-y-1">
                                    <div className="bg-white p-4 rounded-2xl rounded-bl-none shadow-sm border border-outline-variant/5">
                                        <p className="text-sm text-on-surface-variant leading-relaxed">Good morning. I've been refining the glaze for your custom Terra Vase. The iron oxide proportions are finally achieving that deep, earthy crackle we discussed.</p>
                                    </div>
                                    <span className="text-[10px] text-outline px-1">10:42 AM</span>
                                </div>
                            </div>
                            {/* Buyer Message */}
                            <div className="flex flex-row-reverse gap-4 max-w-[80%] self-end">
                                <div className="space-y-1 text-right">
                                    <div className="bg-primary text-on-primary p-4 rounded-2xl rounded-br-none shadow-md">
                                        <p className="text-sm leading-relaxed">That sounds perfect. Do you think the finish will be matte or have a slight sheen? I'm hoping it catches the afternoon light in my studio.</p>
                                    </div>
                                    <span className="text-[10px] text-outline px-1">10:45 AM</span>
                                </div>
                            </div>
                            {/* Seller Message with Image */}
                            <div className="flex gap-4 max-w-[80%]">
                                <div className="h-8 w-8 rounded-full overflow-hidden shrink-0 mt-auto border border-outline-variant/10">
                                    <img alt="Elias" className="h-full w-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2Tnk0B7-_-MMm4hYdVKh19VNN4wJJ2ZCXYEuisfR4neLuiedWTREjixzQejEBuIasLu83C4Bp-CQm1Xiq-UT4VwFF7-Q8GHaoGmit4NztfnRp8wXKUBQfQ5zEdRiKUitaAO7Mu41jn4nrSLoyxmE84wFg2WnOvotLOkWsVqcMD679aMnARnS1haTEbAMk3qwPCz5lsASvLdy_abNAeIXZwOCzT1jepo85PfTjaP96Q-PrwCvcCcYdnAITvYepTtGpVv7MqntvK9iS" />
                                </div>
                                <div className="space-y-2">
                                    <div className="bg-white p-4 rounded-2xl rounded-bl-none shadow-sm border border-outline-variant/5">
                                        <p className="text-sm text-on-surface-variant leading-relaxed">The kiln just finished its cooling cycle. The finish is exactly as you requested—a soft eggshell matte that glows rather than shines. Here's a quick look at the texture.</p>
                                    </div>
                                    <div className="w-64 h-48 rounded-xl overflow-hidden shadow-sm border border-outline-variant/10">
                                        <img alt="Vase detail" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLlo9FEw3EEdYGfNiyUwJnAPWuKzX6Lgcjq2FXUt5riXkbPu675UMSwPfiXwQb9uSyr6JBVVgnVXLAL-Ty798E2e0hmJ9rP-vXwKqL_Vfa_zHPG9cbbGY7ISgtl3vgav8A1A3jsObmvYHl0RSoiRN6Jq7tN0URAt3Y6Sr9Ac3Mn_NlDzb0eBNTqztqmea63Im8RasA8N5gFfqURkA4f7GzxpocX3EngxtgStLaq7KKNzu2V3DjBXKH20iCQkG7ui2AvgRrR3_CIU-v" />
                                    </div>
                                    <span className="text-[10px] text-outline px-1">2m ago</span>
                                </div>
                            </div>
                        </div>
                        {/* Message Bar */}
                        <div className="p-6 bg-white border-t border-outline-variant/10">
                            <div className="max-w-4xl mx-auto relative flex items-center gap-2">
                                <div className="flex items-center gap-1">
                                    <button className="p-2 text-outline hover:text-primary transition-colors"><span className="material-symbols-outlined">add_circle</span></button>
                                    <button className="p-2 text-outline hover:text-primary transition-colors"><span className="material-symbols-outlined">image</span></button>
                                </div>
                                <div className="flex-1 relative">
                                    <input className="w-full bg-surface-container-low border-none rounded-full py-3 px-6 pr-12 text-sm focus:ring-1 focus:ring-primary/20 outline-none placeholder:text-outline/60" placeholder="Message Elias Thorne..." type="text" />
                                    <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-outline hover:text-primary transition-colors"><span className="material-symbols-outlined">mood</span></button>
                                </div>
                                <button className="h-11 w-11 rounded-full bg-primary text-on-primary flex items-center justify-center hover:shadow-lg transition-all active:scale-95 shrink-0">
                                    <span className="material-symbols-outlined">send</span>
                                </button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
