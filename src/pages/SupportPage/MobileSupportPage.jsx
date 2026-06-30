import { useState } from 'react';

export function MobileSupportPage() {
    const [expandedIndex, setExpandedIndex] = useState(1); // Default item 2 expanded as in design

    const handleToggle = (index) => {
        setExpandedIndex(expandedIndex === index ? -1 : index);
    };

    return (
        <div className="mobile-screen bg-background text-on-background font-body antialiased">
            
            <main className="pt-24 pb-32 px-6 max-w-md mx-auto">
                {/*  Hero Header  */}
                <section className="mb-12">
                    <h2 className="font-headline text-4xl leading-tight tracking-tighter text-primary mb-4">How can we assist you?</h2>
                    <div className="relative">
                        <input className="w-full bg-surface-container-low border-none rounded-lg py-4 pl-12 pr-4 text-sm focus:ring-1 focus:ring-primary placeholder:text-on-surface-variant/50 font-body" placeholder="Search for help..." type="text" />
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant/60">search</span>
                    </div>
                </section>
                {/*  Categories Bento-lite Layout  */}
                <section className="grid grid-cols-2 gap-4 mb-12">
                    <div className="col-span-2 bg-primary-container p-6 rounded-xl relative overflow-hidden group">
                        <div className="relative z-10">
                            <span className="material-symbols-outlined text-tertiary mb-2 block">local_shipping</span>
                            <h3 className="font-headline text-xl text-on-primary mb-1">Shipping</h3>
                            <p className="text-on-primary-container text-xs font-label tracking-widest uppercase">Global Logistics</p>
                        </div>
                        <div className="absolute right-[-10%] bottom-[-10%] opacity-10 group-hover:scale-110 transition-transform duration-500">
                            <span className="material-symbols-outlined text-9xl" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
                        </div>
                    </div>
                    <div className="bg-surface-container-low p-6 rounded-xl border-outline-variant/10 border group">
                        <span className="material-symbols-outlined text-primary mb-2 block">assignment_return</span>
                        <h3 className="font-headline text-lg text-primary mb-1">Returns</h3>
                        <p className="text-on-surface-variant text-[10px] font-label tracking-widest uppercase">Exchanges &amp; Refunds</p>
                    </div>
                    <div className="bg-surface-container-low p-6 rounded-xl border-outline-variant/10 border group">
                        <span className="material-symbols-outlined text-primary mb-2 block">auto_awesome</span>
                        <h3 className="font-headline text-lg text-primary mb-1">Care Guide</h3>
                        <p className="text-on-surface-variant text-[10px] font-label tracking-widest uppercase">Maintenance</p>
                    </div>
                </section>
                {/*  Featured Resource Card  */}
                <section className="mb-12">
                    <div className="relative h-48 rounded-xl overflow-hidden mb-4 shadow-sm">
                        <img className="w-full h-full object-cover" alt="minimalist support space" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXJFrIjDBf4LJLCt6UGhT6rd3IHilnWbYZdIHP9n0uKwW2xFLtLzrnvY4a-mI59EWFefNPoM_-GbfUv5YWLNhD8rZkY6aYptM2ROc1OWFiEVPg0j44-OrRZWC15uB7P8XQhmhEc-LDVgiSdwZ0bvegIi_PN74OMtJGH2zauxyZzgP6GzOhKojcgGsrNdIcrdXl4_06zdVRdu6yo_SYZhMc-_g6Faf3KAaOpij2vROlFXG30uScHAh6WaWn4-s_4Vbe80hQhkTL1ybE" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex flex-col justify-end p-6">
                            <h4 className="text-on-primary font-headline text-lg">Curated Assistance</h4>
                            <p className="text-on-primary/80 text-xs">Speak with our specialist curators for personalized care.</p>
                        </div>
                    </div>
                </section>
                {/*  FAQ Accordion  */}
                <section className="mb-8">
                    <div className="flex justify-between items-end mb-6">
                        <h3 className="font-headline text-2xl text-primary">Common Questions</h3>
                        <span className="text-[10px] font-label tracking-widest uppercase text-tertiary">View All</span>
                    </div>
                    <div className="space-y-4">
                        {/*  Accordion Item 1  */}
                        <div
                            className={`rounded-xl p-5 border cursor-pointer ${expandedIndex === 0 ? 'bg-surface-container-low border-outline-variant/20' : 'bg-surface-container-lowest border-outline-variant/10'}`}
                            onClick={() => handleToggle(0)}
                        >
                            <div className="flex justify-between items-center">
                                <span className="font-semibold text-primary text-sm">When will my artifact arrive?</span>
                                <span className="material-symbols-outlined text-sm text-outline">
                                    {expandedIndex === 0 ? 'expand_less' : 'expand_more'}
                                </span>
                            </div>
                            {expandedIndex === 0 && (
                                <p className="text-on-surface-variant text-sm leading-relaxed mt-4">
                                    Delivery takes 5-7 business days for Standard Curated Delivery, and 2-3 business days for Expedited Artifact Handling.
                                </p>
                            )}
                        </div>
                        {/*  Accordion Item 2  */}
                        <div
                            className={`rounded-xl p-5 border cursor-pointer ${expandedIndex === 1 ? 'bg-surface-container-low border-outline-variant/20' : 'bg-surface-container-lowest border-outline-variant/10'}`}
                            onClick={() => handleToggle(1)}
                        >
                            <div className="flex justify-between items-center mb-2">
                                <span className="font-semibold text-primary text-sm">How do I request an exchange?</span>
                                <span className="material-symbols-outlined text-sm text-primary">
                                    {expandedIndex === 1 ? 'expand_less' : 'expand_more'}
                                </span>
                            </div>
                            {expandedIndex === 1 && (
                                <>
                                    <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                                        Visit our returns portal within 14 days of delivery. Artifacts must be in their original curated condition with all gallery tags attached.
                                    </p>
                                    <button className="bg-primary text-on-primary px-4 py-2 text-xs font-label tracking-widest uppercase rounded">Start Return</button>
                                </>
                            )}
                        </div>
                        {/*  Accordion Item 3  */}
                        <div
                            className={`rounded-xl p-5 border cursor-pointer ${expandedIndex === 2 ? 'bg-surface-container-low border-outline-variant/20' : 'bg-surface-container-lowest border-outline-variant/10'}`}
                            onClick={() => handleToggle(2)}
                        >
                            <div className="flex justify-between items-center">
                                <span className="font-semibold text-primary text-sm">International handling fees?</span>
                                <span className="material-symbols-outlined text-sm text-outline">
                                    {expandedIndex === 2 ? 'expand_less' : 'expand_more'}
                                </span>
                            </div>
                            {expandedIndex === 2 && (
                                <p className="text-on-surface-variant text-sm leading-relaxed mt-4">
                                    Duties and taxes are calculated at checkout depending on the shipping destination.
                                </p>
                            )}
                        </div>
                        {/*  Accordion Item 4  */}
                        <div
                            className={`rounded-xl p-5 border cursor-pointer ${expandedIndex === 3 ? 'bg-surface-container-low border-outline-variant/20' : 'bg-surface-container-lowest border-outline-variant/10'}`}
                            onClick={() => handleToggle(3)}
                        >
                            <div className="flex justify-between items-center">
                                <span className="font-semibold text-primary text-sm">Sourcing &amp; Authenticity?</span>
                                <span className="material-symbols-outlined text-sm text-outline">
                                    {expandedIndex === 3 ? 'expand_less' : 'expand_more'}
                                </span>
                            </div>
                            {expandedIndex === 3 && (
                                <p className="text-on-surface-variant text-sm leading-relaxed mt-4">
                                    All of our curated pieces come with the original papers and a certificate of authenticity.
                                </p>
                            )}
                        </div>
                    </div>
                </section>
                {/*  Contact Support Floating-style CTA  */}
                <section className="mt-8 bg-tertiary/10 rounded-xl p-6 flex items-center justify-between">
                    <div>
                        <p className="font-headline text-lg text-tertiary">Still need help?</p>
                        <p className="text-xs text-on-surface-variant">Our concierges are available 24/7.</p>
                    </div>
                    <button className="bg-white text-primary p-3 rounded-full shadow-sm">
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>chat_bubble</span>
                    </button>
                </section>
            </main>
            
        </div>
    );
}
