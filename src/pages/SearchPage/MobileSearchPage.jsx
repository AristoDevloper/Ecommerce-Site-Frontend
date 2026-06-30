import { useState } from 'react';

export function MobileSearchPage() {
    const [query, setQuery] = useState('');
    const [hasSearched, setHasSearched] = useState(false);

    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            setHasSearched(true);
        } else {
            setHasSearched(false);
        }
    };

    return (
        <div className="bg-background text-on-background font-body antialiased mobile-screen min-h-screen">
            
            <main className="pt-8 pb-24 px-6">
                {/* Search Input Area */}
                <section className="mb-8 mt-4">
                    <form onSubmit={handleSearch} className="relative flex items-center">
                        <span className="material-symbols-outlined absolute left-4 text-slate-400">search</span>
                        <input 
                            type="text" 
                            placeholder="Search products..." 
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="w-full bg-surface-container-high text-on-surface rounded-full py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-primary/20 transition-shadow text-sm"
                        />
                    </form>
                    
                    {!hasSearched && (
                        <div className="mt-8">
                            <p className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant mb-4">Popular Searches</p>
                            <div className="flex flex-wrap gap-2">
                                <button onClick={() => { setQuery('Obsidian Minimalist'); setHasSearched(true); }} className="px-4 py-2 bg-surface-container-high text-on-surface text-[10px] tracking-widest uppercase rounded-lg">Obsidian Minimalist</button>
                                <button onClick={() => { setQuery('Silk Capsule'); setHasSearched(true); }} className="px-4 py-2 bg-surface-container-high text-on-surface text-[10px] tracking-widest uppercase rounded-lg">Silk Capsule</button>
                                <button onClick={() => { setQuery('Lounge Chair'); setHasSearched(true); }} className="px-4 py-2 bg-surface-container-high text-on-surface text-[10px] tracking-widest uppercase rounded-lg">Lounge Chair</button>
                            </div>
                        </div>
                    )}
                </section>

                {hasSearched && (
                    <>
                        {/*  Search Header  */}
                        <section className="mb-8">
                            <p className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant mb-2">Search Results</p>
                            <h2 className="font-headline text-3xl text-primary leading-tight italic">‘{query}’</h2>
                            <div className="mt-4 flex items-center gap-2 overflow-x-auto no-scrollbar py-2">
                                <button className="flex-none px-4 py-2 bg-primary text-on-primary text-[10px] tracking-widest uppercase rounded-lg">Aesthetic Finish</button>
                                <button className="flex-none px-4 py-2 bg-surface-container-high text-on-surface text-[10px] tracking-widest uppercase rounded-lg">Matte</button>
                                <button className="flex-none px-4 py-2 bg-surface-container-high text-on-surface text-[10px] tracking-widest uppercase rounded-lg">Brushed</button>
                                <button className="flex-none px-4 py-2 bg-surface-container-high text-on-surface text-[10px] tracking-widest uppercase rounded-lg">Raw</button>
                            </div>
                        </section>
                        {/*  Product Grid (Asymmetric Editorial Style)  */}
                        <div className="grid grid-cols-2 gap-x-4 gap-y-12">
                            {/*  Artifact 01: Clock  */}
                            <div className="col-span-2">
                                <div className="relative aspect-[4/5] bg-surface-variant rounded-md overflow-hidden mb-4">
                                    <img className="w-full h-full object-cover" data-alt="Minimalist obsidian wall clock with no numbers, smooth matte black stone texture, soft dramatic shadows on a white gallery wall" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBvn2aYPtqTkay7LMdsI1goo-Sb6uQGN6av_6KNcdQRx5kmtkVyhg3hti24zsfnhefpHheCl1RiwOkCPgdcUI6cOkVEEt4S7v1PtfaCUwoA24r29GuDaDajEFQlbz9v1EJHzF8QEo5JNfitX2xdFFiNhqplwWNVocO0rI1S-f_VV7mEXuYPoRz43C1uf8acPdVqqB4PcsRIdb7rYMlgiP6g3EYHYLZHXz--MBaMnw6n3E0FWSFIGIj1NtjnMmY-r4tnIrDtgeNn-bOd" />
                                    <div className="absolute top-4 right-4 px-3 py-1 bg-white/80 backdrop-blur-md rounded-full">
                                        <span className="font-label text-[10px] tracking-widest uppercase text-tertiary">Rare Find</span>
                                    </div>
                                </div>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-headline text-xl text-primary">Eclipse Obsidian Clock</h3>
                                        <p className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant">Hand-Carved Volcanic Glass</p>
                                    </div>
                                    <span className="font-body text-sm font-bold text-primary">$420</span>
                                </div>
                            </div>
                            {/*  Artifact 02: Vase  */}
                            <div className="col-span-1 mt-4">
                                <div className="relative aspect-square bg-surface-variant rounded-md overflow-hidden mb-4">
                                    <img className="w-full h-full object-cover" data-alt="Sculptural obsidian vase with organic asymmetrical form, deep black glass-like surface, minimalist still life setting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBUUFdQWdqi-Lo6sKULl-PyVlQHYi6xZy4u55NsLvWQJk5ESzILsuyytRfyURIS0b855-30pSnuXZAETw0rWqELXmigqZxDyh8CAZHGZ3w0CnG6pLaGEncywvacTveQBM4-viMooyHSmR1scb0MKoB7QhB1VOhIeHNRFphfw4zd_uy5ImEt1OyuVczskueo2R7W8ElRgFhiPC6PDOO-Zhjs_zoi8ddKMO7k3vq9KJPUmwgzTAgEvn_DmkVnxO1t3FOXSIRC1_ek3Kok" />
                                </div>
                                <div>
                                    <h3 className="font-headline text-lg text-primary leading-tight">Monolith Vase</h3>
                                    <p className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant">Matte Finish</p>
                                    <span className="font-body text-sm font-bold text-primary mt-1 block">$185</span>
                                </div>
                            </div>
                            {/*  Artifact 03: Minimalist Accessory  */}
                            <div className="col-span-1">
                                <div className="relative aspect-square bg-surface-variant rounded-md overflow-hidden mb-4">
                                    <img className="w-full h-full object-cover" data-alt="Small obsidian geometric sphere on a stone pedestal, dark moody lighting, luxury interior decor artifact" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOAZ_1wqOgeBil-6UjM7oziTRKyADF3_b2YeYRzhnoLvE6ZzbZklqM7nVbxAhpFv0jtjh9Qsz11ohGK-wqv_Mik5GcgBo7Urq9Ibb0DtAMaIIB02JMhfy5A1Nu1lUzuhczE869EqVBq4l4IfylYtbsriyaOHxxPUQrsZp30cdnhdY8cHbDUisGMiED3MpuYPoZBaox073d-cUpZ_jbpfI1_OV-aDI1a1mZVkJSwpzTg63JUqodHXQCGuX2iWCF30TG10qVTufc5UUP" />
                                </div>
                                <div>
                                    <h3 className="font-headline text-lg text-primary leading-tight">Void Sphere</h3>
                                    <p className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant">Polished Stone</p>
                                    <span className="font-body text-sm font-bold text-primary mt-1 block">$95</span>
                                </div>
                            </div>
                            {/*  Artifact 04: Sofa/Seating  */}
                            <div className="col-span-2 mt-4">
                                <div className="relative aspect-[16/9] bg-surface-variant rounded-md overflow-hidden mb-4">
                                    <img className="w-full h-full object-cover" data-alt="Ultra-low profile minimalist sofa in charcoal black wool, architectural silhouette, placed in a large empty bright room" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxwD2_qaLmDRlvvL88y0F-svA1ot2UgKtBs2th12LltMJvzY3xQKVtuxXFmCwY5-IlOiWYITQ9yJWzZo6RYQfkVEw15L4OyyWNS_ovcaSjDSw0IsfCNqldrThyIlYaelxqhFBksHnItm1Q87SJOK0cR37iGsB8LXd6cAZFwLnScoVLNu4KSGV_X-Qe4TQRuuqgkML1qpmxtDxY1gQKpeTrHnH78v7YL2ZLaFuyyE5Stf5iTCfES6MB6gA1WehPlKLa3NN8msW65LxH" />
                                </div>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h3 className="font-headline text-xl text-primary">Noire Low Sofa</h3>
                                        <p className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant">Obsidian Weave Fabric</p>
                                    </div>
                                    <span className="font-body text-sm font-bold text-primary">$3,200</span>
                                </div>
                            </div>
                            {/*  Artifact 05: Lamp/Object  */}
                            <div className="col-span-1 mt-4">
                                <div className="relative aspect-[3/4] bg-surface-variant rounded-md overflow-hidden mb-4">
                                    <img className="w-full h-full object-cover" data-alt="Minimalist table lamp with obsidian base and black shade, soft ambient glow, editorial product photography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGMXnT40zr0p4dhO5dCbvSPcpUkVZAJzIHjUjmbjSHhG_C3lINIhjiY1eUsIe3P5VlgWbXdJWWJhJf2CAFxmqd4Za_us4cFFFPUS1D5G-UyWEpuBPRCwA2cTL4EYCmpAR91g8DrwyjomXGj3tcKqeKhWXBrSUfmJcwyW9ngLvL6SOBeqci4o5-8ppP79oOlqL2gE8krQqjx--re1XGe48zWXirBq-8tviJTkGnrnTyMcs0EL0fVo_S6glzLNsstO-o6GXuLMGQhqT1" />
                                </div>
                                <div>
                                    <h3 className="font-headline text-lg text-primary leading-tight">Umbra Lamp</h3>
                                    <p className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant">Brushed Base</p>
                                    <span className="font-body text-sm font-bold text-primary mt-1 block">$540</span>
                                </div>
                            </div>
                            {/*  Artifact 06: Stool  */}
                            <div className="col-span-1 mt-12">
                                <div className="relative aspect-[3/4] bg-surface-variant rounded-md overflow-hidden mb-4">
                                    <img className="w-full h-full object-cover" data-alt="Modern minimalist three-legged stool in burnt wood finish resembling obsidian, sharp clean lines, luxury furniture" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxpN2AV8wWWB5BW9I5KBqX6lbiMBHuEC9lRcESXsVo1PJgYW9N9STXy57YpdvKKBOvg4g_eUn69Rnpaeyo5x1OZVTcbOm5UWygldQbZpEKhn2eApdjjHHIxC4GUfdDCXLUfUNmGf98knFGk9p5BsYhTvvV5I4EsrEO_4QWbogFCSGuXZuZlH5xCsPkHDe4pRch0fpkrx8vSAgnWCUjATMdfVc_WsszS2ORBmXjlmMGej5APSQ2-sdQJbf1IK0AFMypEB4Eyq0fwsPY" />
                                </div>
                                <div>
                                    <h3 className="font-headline text-lg text-primary leading-tight">Basalt Stool</h3>
                                    <p className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant">Sculpted Wood</p>
                                    <span className="font-body text-sm font-bold text-primary mt-1 block">$780</span>
                                </div>
                            </div>
                        </div>
                        {/*  Pagination/More Space  */}
                        <div className="mt-16 flex justify-center pb-8">
                            <button className="font-label text-[10px] tracking-[0.2em] uppercase text-primary border-b border-primary pb-1">Discover More Artifacts</button>
                        </div>
                    </>
                )}
            </main>
            
        </div>
    )
}