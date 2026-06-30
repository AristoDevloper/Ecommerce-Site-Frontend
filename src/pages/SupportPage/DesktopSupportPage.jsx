export function DesktopSupportPage() {
    return (
        <div className="bg-background text-on-surface font-body antialiased">
            
            <main className="max-w-screen-2xl mx-auto px-8 py-16">
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    <div className="lg:col-span-5">
                        <h1 className="font-serif text-5xl md:text-6xl text-primary leading-tight mb-6 -tracking-[0.02em]">Concierge &amp; <br />Assistance</h1>
                        <p className="text-on-surface-variant text-lg leading-relaxed mb-12 max-w-md">
                            Our curators are available to assist you with inquiries regarding artifact sourcing, order status, or archival details. Experience personalized stewardship for your collection.
                        </p>
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 flex items-center justify-center bg-surface-container-low rounded-lg">
                                    <span className="material-symbols-outlined text-primary">mail</span>
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-primary font-bold mb-1">Direct Correspondence</p>
                                    <p className="text-lg font-medium text-on-surface">concierge@ethoscurated.com</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 flex items-center justify-center bg-surface-container-low rounded-lg">
                                    <span className="material-symbols-outlined text-primary">call</span>
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-primary font-bold mb-1">Stewardship Line</p>
                                    <p className="text-lg font-medium text-on-surface">+1 (888) 243-ARTIFACT</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 flex items-center justify-center bg-surface-container-low rounded-lg">
                                    <span className="material-symbols-outlined text-primary">location_on</span>
                                </div>
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-primary font-bold mb-1">Flagship Studio</p>
                                    <p className="text-lg font-medium text-on-surface">642 Madison Avenue, NY</p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-16 rounded-xl overflow-hidden grayscale contrast-125 opacity-90 transition-all hover:grayscale-0 hover:opacity-100 duration-700">
                            <div className="h-64 w-full bg-surface-container">
                                <img alt="Minimalist street map" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBEtQxitqReiHH2lqi0VFheBE_Sbf2_9mB1DxRkqwz2MnO-pzTgSpSo4fafuPON_9y745-pgNK8KDVIIlvrPrn23SlHDF-ce8PI83POOilNiurhaxsLnBCQqHeoyjGQyD4XPDsTMb2s3kZqIsAdTQErOJwG3CHea85WA577NzEV2gd1rxGTMs0yhDtoa1CHchw0xj8QIQPvzgCSFjsrLIUEszdjVqBkDYAFsVzLXQkXewT9oM5D9TH38pyA32wtW-2TLC6JsZZHz1Yo" />
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-7 bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-sm">
                        <div className="mb-10">
                            <h2 className="font-serif text-3xl text-primary mb-2">Send an Inquiry</h2>
                            <p className="text-on-surface-variant">Fields marked with an asterisk are required for correspondence.</p>
                        </div>
                        <form className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="relative">
                                    <label className="text-xs uppercase tracking-widest text-on-surface-variant font-bold mb-2 block">Full Name *</label>
                                    <input className="w-full bg-transparent border-0 border-b border-outline-variant/20 focus:ring-0 focus:border-primary px-0 py-3 transition-colors placeholder:text-outline-variant" placeholder="Elias Thorne" type="text" />
                                </div>
                                <div className="relative">
                                    <label className="text-xs uppercase tracking-widest text-on-surface-variant font-bold mb-2 block">Email Address *</label>
                                    <input className="w-full bg-transparent border-0 border-b border-outline-variant/20 focus:ring-0 focus:border-primary px-0 py-3 transition-colors placeholder:text-outline-variant" placeholder="elias@domain.com" type="email" />
                                </div>
                            </div>
                            <div className="relative">
                                <label className="text-xs uppercase tracking-widest text-on-surface-variant font-bold mb-2 block">Subject of Inquiry</label>
                                <select className="w-full bg-transparent border-0 border-b border-outline-variant/20 focus:ring-0 focus:border-primary px-0 py-3 transition-colors appearance-none">
                                    <option>Order Status &amp; Tracking</option>
                                    <option>Custom Archival Sourcing</option>
                                    <option>Artifact Authentication</option>
                                    <option>Collaborations</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div className="relative">
                                <label className="text-xs uppercase tracking-widest text-on-surface-variant font-bold mb-2 block">Your Message *</label>
                                <textarea className="w-full bg-transparent border-0 border-b border-outline-variant/20 focus:ring-0 focus:border-primary px-0 py-3 transition-colors placeholder:text-outline-variant resize-none" placeholder="How may we assist in the curation of your space?" rows="5"></textarea>
                            </div>
                            <button className="w-full md:w-auto px-12 py-5 bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold uppercase tracking-[0.2em] text-xs rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-2">
                                Send Message
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </button>
                        </form>
                    </div>
                </section>
                <section className="mt-32">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                        <div>
                            <span className="text-tertiary font-bold tracking-[0.3em] uppercase text-xs mb-3 block">Self-Service Archives</span>
                            <h2 className="font-serif text-4xl text-primary">Helpful Articles</h2>
                        </div>
                        <a className="text-primary font-bold uppercase tracking-widest text-xs border-b border-primary pb-1 hover:text-tertiary hover:border-tertiary transition-colors" href="#">View All Resources</a>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <a className="group block p-8 bg-surface-container-low rounded-xl transition-all hover:bg-surface-container-high" href="#">
                            <span className="material-symbols-outlined text-tertiary mb-4 text-3xl">local_shipping</span>
                            <h3 className="font-serif text-xl mb-3 group-hover:text-primary transition-colors">Shipping &amp; Global Handling</h3>
                            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Detailed information on our climate-controlled white-glove delivery service.</p>
                            <span className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-1">Read More <span className="material-symbols-outlined text-xs">chevron_right</span></span>
                        </a>
                        <a className="group block p-8 bg-surface-container-low rounded-xl transition-all hover:bg-surface-container-high" href="#">
                            <span className="material-symbols-outlined text-tertiary mb-4 text-3xl">verified_user</span>
                            <h3 className="font-serif text-xl mb-3 group-hover:text-primary transition-colors">Authenticity &amp; Provenance</h3>
                            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Our rigorous 12-point authentication process and artifact certification.</p>
                            <span className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-1">Read More <span className="material-symbols-outlined text-xs">chevron_right</span></span>
                        </a>
                        <a className="group block p-8 bg-surface-container-low rounded-xl transition-all hover:bg-surface-container-high" href="#">
                            <span className="material-symbols-outlined text-tertiary mb-4 text-3xl">history_edu</span>
                            <h3 className="font-serif text-xl mb-3 group-hover:text-primary transition-colors">Care &amp; Preservation</h3>
                            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">Professional guidelines for maintaining the integrity of your curated pieces.</p>
                            <span className="text-xs font-bold uppercase tracking-widest text-primary flex items-center gap-1">Read More <span className="material-symbols-outlined text-xs">chevron_right</span></span>
                        </a>
                    </div>
                </section>
            </main>
            <footer className="bg-slate-50 dark:bg-slate-900 full-width py-16 mt-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 px-8 max-w-screen-2xl mx-auto">
                    <div className="col-span-2 md:col-span-1">
                        <div className="text-xl font-serif text-slate-900 dark:text-slate-50 mb-6">ETHOS CURATED</div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed max-w-xs">
                            Curating timeless artifacts for the modern connoisseur. Each piece tells a story of craftsmanship and heritage.
                        </p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-slate-50 mb-2">Company</p>
                        <a className="text-slate-500 dark:text-slate-400 hover:text-amber-700 dark:hover:text-amber-500 text-sm transition-colors" href="#">Brand Story</a>
                        <a className="text-slate-500 dark:text-slate-400 hover:text-amber-700 dark:hover:text-amber-500 text-sm transition-colors" href="#">Sustainability</a>
                        <a className="text-slate-500 dark:text-slate-400 hover:text-amber-700 dark:hover:text-amber-500 text-sm transition-colors" href="#">Contact</a>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-slate-50 mb-2">Stewardship</p>
                        <a className="text-slate-500 dark:text-slate-400 hover:text-amber-700 dark:hover:text-amber-500 text-sm transition-colors" href="#">Shipping &amp; Delivery</a>
                        <a className="text-slate-500 dark:text-slate-400 hover:text-amber-700 dark:hover:text-amber-500 text-sm transition-colors" href="#">Tracking</a>
                        <a className="text-slate-500 dark:text-slate-400 hover:text-amber-700 dark:hover:text-amber-500 text-sm transition-colors" href="#">FAQ</a>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-xs font-bold uppercase tracking-widest text-slate-900 dark:text-slate-50 mb-2">Legal</p>
                        <a className="text-slate-500 dark:text-slate-400 hover:text-amber-700 dark:hover:text-amber-500 text-sm transition-colors" href="#">Privacy Policy</a>
                        <a className="text-slate-500 dark:text-slate-400 hover:text-amber-700 dark:hover:text-amber-500 text-sm transition-colors" href="#">Terms of Service</a>
                        <a className="text-slate-500 dark:text-slate-400 hover:text-amber-700 dark:hover:text-amber-500 text-sm transition-colors" href="#">Secure Payment</a>
                    </div>
                </div>
                <div className="max-w-screen-2xl mx-auto px-8 mt-20 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between gap-4">
                    <p className="text-xs text-slate-500 dark:text-slate-400 tracking-widest">© 2024 ETHOS CURATED. ALL ARTIFACTS RESERVED.</p>
                    <div className="flex gap-6">
                        <a className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors uppercase text-[10px] font-bold tracking-widest" href="#">Instagram</a>
                        <a className="text-slate-500 dark:text-slate-400 hover:text-primary transition-colors uppercase text-[10px] font-bold tracking-widest" href="#">Pinterest</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
