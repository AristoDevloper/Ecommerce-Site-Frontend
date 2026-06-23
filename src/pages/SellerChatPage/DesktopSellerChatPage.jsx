export function DesktopSellerChatPage() {
    return (
        <div className="bg-background text-on-background antialiased flex flex-col h-screen overflow-hidden">
            {/* Top Navigation Header */}
            <header className="h-16 w-full border-b border-slate-200/50 bg-white flex items-center justify-between px-6 z-30 shrink-0">
                <div className="flex items-center gap-8">
                    <a className="flex items-center gap-2" href="#">
                        <span className="text-xl font-noto-serif font-bold text-primary tracking-tight">Ethos Curated</span>
                        <span className="px-2 py-0.5 bg-primary/5 text-primary text-[10px] font-bold rounded uppercase tracking-wider">Seller Studio</span>
                    </a>
                    <nav className="hidden md:flex items-center gap-6">
                        <a className="text-sm font-medium text-slate-500 hover:text-primary transition-colors" href="#">Marketplace</a>
                        <a className="text-sm font-medium text-slate-500 hover:text-primary transition-colors" href="#">Community</a>
                        <a className="text-sm font-medium text-slate-500 hover:text-primary transition-colors" href="#">Resources</a>
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-3 pl-2">
                        <div className="text-right hidden sm:block">
                            <p className="text-xs font-bold text-slate-900 leading-none">Artisan Collective</p>
                            <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-tighter">Premium Partner</p>
                        </div>
                        <img alt="Seller Avatar" className="w-8 h-8 rounded-full object-cover border border-slate-200" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-udJy_A-IW7ja7t9NzB5MN_XDJEo5xus76V9l2spRUGJvXyFMrkNZEhqt9paoNT9Ed_y_EsIY__PXCO4qEmpM6ZdBHiST55KN4lq1ZU_KHnNAd7_dP1VgrstJGhcPpHfMN_SPe3P8BcvysP6Id4luE7FmOyLTOyE0dF69Ko3RACFlPbH0HN44EXEUduFNR3KgHrUVcUeNahcyY2xnSnD58QOpWvPxeLDyklhwZ90euVQgTS3MBbwQHvJ-miMSt1iGn6PAX6KY-y40" />
                    </div>
                </div>
            </header>
            <div className="flex flex-1 overflow-hidden">
                {/* SideNavBar Component */}
                <aside className="h-full w-64 border-r border-slate-200/20 dark:border-slate-800/20 bg-slate-50 dark:bg-slate-900 flex flex-col p-6 space-y-8 z-20 shrink-0">
                    <div className="space-y-4">
                        <button className="w-full py-2.5 px-4 bg-primary text-on-primary rounded-lg text-sm font-semibold flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90 shadow-sm">
                            <span className="material-symbols-outlined text-sm">add</span>
                            List New Product
                        </button>
                    </div>
                    <nav className="flex-1 space-y-1">
                        <a className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all duration-200 rounded-lg text-sm" href="#">
                            <span className="material-symbols-outlined">dashboard</span>
                            Dashboard
                        </a>
                        <a className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all duration-200 rounded-lg text-sm" href="#">
                            <span className="material-symbols-outlined">inventory_2</span>
                            Inventory
                        </a>
                        {/* Active Tab: Messages */}
                        <a className="flex items-center gap-3 px-4 py-3 text-slate-900 dark:text-white font-semibold bg-white dark:bg-slate-800 rounded-lg shadow-sm text-sm" href="#">
                            <span className="material-symbols-outlined">forum</span>
                            Messages
                        </a>
                        {/* New Tab: Customer Insights */}
                        <a className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all duration-200 rounded-lg text-sm" href="#">
                            <span className="material-symbols-outlined">person_search</span>
                            Customer Data
                        </a>
                        <a className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all duration-200 rounded-lg text-sm" href="#">
                            <span className="material-symbols-outlined">monitoring</span>
                            Analytics
                        </a>
                        <a className="flex items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all duration-200 rounded-lg text-sm" href="#">
                            <span className="material-symbols-outlined">settings</span>
                            Settings
                        </a>
                    </nav>
                    <div className="pt-6 border-t border-slate-200/50 dark:border-slate-800/50">
                        <div className="flex items-center gap-3 px-4 text-xs text-slate-400 cursor-pointer hover:text-slate-600 transition-colors">
                            <span className="material-symbols-outlined text-sm">help</span>
                            Support Center
                        </div>
                    </div>
                </aside>
                {/* Main Content Canvas */}
                <main className="flex-1 flex flex-row overflow-hidden bg-white">
                    {/* Message List Sidebar */}
                    <section className="w-80 border-r border-slate-100 flex flex-col shrink-0">
                        <header className="p-6 border-b border-slate-100 flex justify-between items-center">
                            <h3 className="text-xl font-noto-serif font-bold text-primary">Inquiries</h3>
                            <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-colors">tune</span>
                        </header>
                        <div className="flex-1 overflow-y-auto">
                            {/* Message Item: Active */}
                            <div className="p-6 bg-surface-container-low cursor-pointer border-l-4 border-primary">
                                <div className="flex justify-between items-start mb-1">
                                    <span className="font-bold text-slate-900">Julian V.</span>
                                    <span className="text-[10px] text-slate-400 uppercase font-bold">14:20</span>
                                </div>
                                <p className="text-xs text-slate-600 mb-2 font-medium">Obsidian Chronograph...</p>
                                <div className="flex items-center gap-2">
                                    <span className="px-2 py-0.5 bg-tertiary/10 text-tertiary text-[10px] font-bold rounded uppercase tracking-wider">New Inquiry</span>
                                </div>
                            </div>
                            {/* Message Item */}
                            <div className="p-6 hover:bg-slate-50 cursor-pointer border-b border-slate-50 transition-colors">
                                <div className="flex justify-between items-start mb-1">
                                    <span className="font-medium text-slate-700">Elena Rossi</span>
                                    <span className="text-[10px] text-slate-400 uppercase">Yesterday</span>
                                </div>
                                <p className="text-xs text-slate-400 truncate">Is the 'Lumina' still available for viewing in Milan?</p>
                                <div className="mt-2 flex items-center gap-2">
                                    <span className="px-2 py-0.5 bg-slate-100 text-slate-500 text-[10px] font-bold rounded uppercase tracking-wider">Replied</span>
                                </div>
                            </div>
                            {/* Message Item */}
                            <div className="p-6 hover:bg-slate-50 cursor-pointer border-b border-slate-50 transition-colors">
                                <div className="flex justify-between items-start mb-1">
                                    <span className="font-medium text-slate-700">Marcus Thorne</span>
                                    <span className="text-[10px] text-slate-400 uppercase">2 days ago</span>
                                </div>
                                <p className="text-xs text-slate-400 truncate">Thank you for the tracking details. Looking forward...</p>
                                <div className="mt-2 flex items-center gap-2">
                                    <span className="px-2 py-0.5 bg-green-50 text-green-600 text-[10px] font-bold rounded uppercase tracking-wider">Completed</span>
                                </div>
                            </div>
                            {/* Message Item */}
                            <div className="p-6 hover:bg-slate-50 cursor-pointer border-b border-slate-50 transition-colors">
                                <div className="flex justify-between items-start mb-1">
                                    <span className="font-medium text-slate-700">Sophia Chen</span>
                                    <span className="text-[10px] text-slate-400 uppercase">Oct 12</span>
                                </div>
                                <p className="text-xs text-slate-400 truncate">I'd like to discuss a custom engraving for the...</p>
                                <div className="mt-2 flex items-center gap-2">
                                    <span className="px-2 py-0.5 bg-slate-100 text-slate-500 text-[10px] font-bold rounded uppercase tracking-wider">Replied</span>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* Main Chat Window */}
                    <section className="flex-1 flex flex-col min-w-0 bg-background">
                        {/* Chat Header */}
                        <header className="h-20 px-8 flex items-center justify-between bg-white border-b border-slate-100 shadow-sm z-10 shrink-0">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-primary font-bold">JV</div>
                                <div>
                                    <h4 className="font-bold text-primary">Julian V.</h4>
                                    <p className="text-xs text-slate-400">London, United Kingdom • Local time: 2:20 PM</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <button className="px-4 py-2 text-xs font-bold text-slate-600 border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors">View Order History</button>
                                <button className="p-2 text-slate-400 hover:text-slate-600"><span className="material-symbols-outlined">more_horiz</span></button>
                            </div>
                        </header>
                        {/* Chat Messages Area */}
                        <div className="flex-1 overflow-y-auto p-8 space-y-8 bg-slate-50/50">
                            {/* Date Separator */}
                            <div className="flex justify-center">
                                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold px-3 py-1 bg-white rounded-full border border-slate-100">Today</span>
                            </div>
                            {/* Product Context Block */}
                            <div className="max-w-2xl mx-auto bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex gap-4">
                                <img alt="Obsidian Chronograph" className="w-20 h-20 object-cover rounded-md bg-surface-variant" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBb9O2BcjxBZJwwK7m0tzv1kXUcmGJC2Z752WptOIOilc6XMbtxuisHqDJe-epX6zAauONdg68pw3YyO-C6T0ypYAOVML1WPMZRF7W-AyFvUhfDIyvDKdx_oHiDraOuceZUV_hpOzlvEhS-g2smXZfroPMFPFqYxe2Vl-9BSetuOmWNjMdzjKxfCyy0jguQE4tIYC2FUkUROgCcl2imf-MOEHOzph5KOo1GB0hM_C6ORPeixcLqEpmY3tU9CgVzLXrPAYDwiM7sauf-" />
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <h5 className="font-bold text-slate-900 text-sm">Obsidian Chronograph</h5>
                                        <span className="text-sm font-noto-serif text-primary font-bold">£4,250.00</span>
                                    </div>
                                    <p className="text-xs text-slate-500 mb-3">Ref: OC-2024-001 • In Stock (2)</p>
                                    <div className="flex gap-2">
                                        <button className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary-container/10 px-3 py-1.5 rounded hover:bg-primary-container/20 transition-colors">Check Inventory</button>
                                        <button className="text-[10px] font-bold uppercase tracking-wider text-tertiary border border-tertiary/20 px-3 py-1.5 rounded hover:bg-tertiary/5 transition-colors">Send Offer</button>
                                    </div>
                                </div>
                            </div>
                            {/* Incoming Message */}
                            <div className="flex items-end gap-3 max-w-3xl">
                                <div className="w-8 h-8 rounded-full bg-slate-200 shrink-0 flex items-center justify-center text-[10px] font-bold">JV</div>
                                <div className="bg-white p-4 rounded-2xl rounded-bl-none shadow-sm text-sm text-slate-700 leading-relaxed border border-slate-100">
                                    Hello. I've been following the Obsidian Chronograph for a few weeks now. Does this specific piece come with the original certificate of authenticity and the travel roll shown in the listing?
                                </div>
                            </div>
                            {/* Seller Reply */}
                            <div className="flex flex-row-reverse items-end gap-3 max-w-3xl ml-auto">
                                <div className="w-8 h-8 rounded-full overflow-hidden shrink-0">
                                    <img alt="Seller Avatar" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwp9qA-FnpcR8JKjamBMxSAZ5Y9NbTHkCAY8P2J02m_C1Pjl2tByTwvq6tKNmgueCWUBeZB342rnYg218n2qym8OVYzjxKxb-kSf01dT87aR2Gj9EM9gM-db_iitJYPxWahLFU9jn183tqVhQZwfIOc7RFOuYWtMYHwGEi4NpnA4Op7QKHYxza8LUC-HcOhRjBXZMRcrfAbshvRiZw9MFJPWFVIslQF-Kdt6Z_CsjuOUlsvZkIRKndYX4G9-035dK8eHAEFG3ssRfy" />
                                </div>
                                <div className="bg-primary text-on-primary p-4 rounded-2xl rounded-br-none shadow-md text-sm leading-relaxed">
                                    Good afternoon Julian. Yes, absolutely. All of our curated pieces come with the original papers and a handcrafted leather travel roll as standard. This particular chronograph was just serviced in our workshop last month.
                                </div>
                            </div>
                            {/* Incoming Message (Latest) */}
                            <div className="flex items-end gap-3 max-w-3xl">
                                <div className="w-8 h-8 rounded-full bg-slate-200 shrink-0 flex items-center justify-center text-[10px] font-bold">JV</div>
                                <div className="bg-white p-4 rounded-2xl rounded-bl-none shadow-sm text-sm text-slate-700 leading-relaxed border border-slate-100">
                                    That sounds excellent. If I were to order today, would it be possible to arrange for express shipping to London? I'm hoping to have it before Friday.
                                </div>
                            </div>
                        </div>
                        {/* Chat Input & Tools */}
                        <footer className="p-6 bg-white border-t border-slate-100">
                            <div className="flex items-center gap-4 bg-surface-container-low p-2 rounded-xl focus-within:ring-2 focus-within:ring-primary/5 transition-all">
                                <div className="flex items-center">
                                    <button className="p-2 text-outline hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined">add_circle</span>
                                    </button>
                                    <button className="p-2 text-outline hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined">sentiment_satisfied</span>
                                    </button>
                                </div>
                                <input className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-2" placeholder="Type your message..." type="text" />
                                <div className="flex items-center gap-2">
                                    <button className="p-2 text-outline hover:text-primary transition-colors">
                                        <span className="material-symbols-outlined">image</span>
                                    </button>
                                    <button className="bg-primary text-on-primary p-3 rounded-lg flex items-center justify-center transition-all active:scale-95 shadow-md">
                                        <span className="material-symbols-outlined text-sm font-bold">send</span>
                                    </button>
                                </div>
                            </div>
                            <div className="mt-3 flex justify-center">
                                <p className="text-[10px] text-outline font-medium">Your messages are private and secure within the Ethos ecosystem.</p>
                            </div>
                        </footer>
                    </section>
                </main>
            </div>
        </div>
    );
}
