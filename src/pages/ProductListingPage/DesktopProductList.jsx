export function DesktopProductList() {
    return (
        <div className="bg-background text-on-surface flex flex-col min-h-screen">
            
            <main className="pt-24 pb-12 px-6 md:px-12 flex-grow max-w-screen-2xl mx-auto w-full">
                
                <div className="flex flex-col lg:flex-row gap-12">
                    {/*  Sidebar Filter  */}
                    <aside className="w-full lg:w-64 flex-shrink-0 space-y-10">
                        <div>
                            <h3 className="font-label text-xs tracking-widest uppercase text-on-surface mb-6 font-bold">Category</h3>
                            <ul className="space-y-3">
                                <li><a className="text-primary font-medium flex items-center justify-between" href="#">All Objects <span className="text-[10px] bg-surface-container-high px-1.5 py-0.5 rounded-full">42</span></a></li>
                                <li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Home Decor</a></li>
                                <li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Apparel</a></li>
                                <li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Ceramics</a></li>
                                <li><a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Textiles</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-label text-xs tracking-widest uppercase text-on-surface mb-6 font-bold">Price Range</h3>
                            <div className="space-y-4">
                                <input className="w-full accent-primary h-1 bg-surface-container-high rounded-lg appearance-none cursor-pointer" type="range" />
                                <div className="flex justify-between text-xs text-on-surface-variant font-medium">
                                    <span>$50</span>
                                    <span>$2,500+</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-label text-xs tracking-widest uppercase text-on-surface mb-6 font-bold">Material</h3>
                            <div className="flex flex-wrap gap-2">
                                <button className="px-3 py-1.5 bg-surface-container-lowest ghost-border text-xs rounded hover:bg-surface-container-low transition-colors">Linen</button>
                                <button className="px-3 py-1.5 bg-surface-container-lowest ghost-border text-xs rounded hover:bg-surface-container-low transition-colors">Oak</button>
                                <button className="px-3 py-1.5 bg-surface-container-lowest ghost-border text-xs rounded hover:bg-surface-container-low transition-colors">Raw Silk</button>
                                <button className="px-3 py-1.5 bg-surface-container-lowest ghost-border text-xs rounded hover:bg-surface-container-low transition-colors">Bronze</button>
                                <button className="px-3 py-1.5 bg-surface-container-lowest ghost-border text-xs rounded hover:bg-surface-container-low transition-colors">Marble</button>
                            </div>
                        </div>
                    </aside>
                    {/*  Product Grid  */}
                    <div className="flex-grow">
                        {/*  Sorting & View  */}
                        <div className="flex justify-between items-center mb-8 pb-4 border-b border-surface-container-high/30">
                            <span className="text-xs text-on-surface-variant font-label tracking-wide uppercase">Showing 12 of 42 Items</span>
                            <button className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest group">
                                <span>Sort By: Newest</span>
                                <span className="material-symbols-outlined text-sm group-hover:translate-y-0.5 transition-transform">expand_more</span>
                            </button>
                        </div>
                        {/*  Main Grid  */}
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
                            {/*  Product Card 1  */}
                            <div className="group cursor-pointer">
                                <div className="aspect-[4/5] bg-surface-container-low mb-4 overflow-hidden rounded-md relative">
                                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" data-alt="minimalist white ceramic vase with organic texture and elegant curved silhouette on a stone surface with soft morning light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgtBwVwnMDCbswL9xdJVdR0buKvfUbLR-ZdEMzCs10EdGhfwCQl34CUKR0wyGP9WpqJXo64ntzpDiIJReYPYSSjPLcp6yZvjG8IE8CsId7RPdUDx2EG3pkFkANXWPg3bnrOVYj9BuMLD4_6oCzUr8WOD3ucyJV8I6e9MluC4RaRybLhG_Tnkwop5QiARTPHk_GGF33T18uE_2nmZJxda78zFf_Hnib-Ev2mN-o6wNvjUUqAlYNnPxBXz6DXWKcORdjw5vkixmVbQPI" />
                                    <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                                        <span className="material-symbols-outlined text-primary text-xl">add</span>
                                    </button>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] uppercase tracking-widest text-tertiary font-bold">New Arrival</p>
                                    <h4 className="serif text-xl text-primary font-medium tracking-tight">Sculpted Vessel No. 04</h4>
                                    <p className="text-on-surface-variant font-body text-sm">$320.00</p>
                                </div>
                            </div>
                            {/*  Product Card 2  */}
                            <div className="group cursor-pointer">
                                <div className="aspect-[4/5] bg-surface-container-low mb-4 overflow-hidden rounded-md relative">
                                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" data-alt="unisex relaxed fit premium linen t-shirt in bone white draped elegantly over a minimalist wooden chair" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQdShRJrgmv7Xe7EXV4oVcTUj1_b5t8odrjjAoIAmuobuqezrotiwomRbX4915p2s3r_hRGkLNDbTd8Ogw_D293hembUUgwJX5_PWql3hxWD7y5TLWuI2ZqudvBZTMsm9DDY_XmKvi0-uyHbY5FhjHQcsFDRAulDenYJ6XkxZnWbKYvJ9HM0C0eUTjpThsJhAMA6IdN7VR3lVqEQr_kwJXZhSKNmvIyCQOAzBGouFhQQKCdS-xhN2WdDTjfztRo73bx6TWq4DmSHPb" />
                                    <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                                        <span className="material-symbols-outlined text-primary text-xl">add</span>
                                    </button>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Apparel</p>
                                    <h4 className="serif text-xl text-primary font-medium tracking-tight">Heavy Linen Over-Shirt</h4>
                                    <p className="text-on-surface-variant font-body text-sm">$185.00</p>
                                </div>
                            </div>
                            {/*  Product Card 3  */}
                            <div className="group cursor-pointer">
                                <div className="aspect-[4/5] bg-surface-container-low mb-4 overflow-hidden rounded-md relative">
                                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" data-alt="modern brutalist aesthetic concrete table lamp with exposed warm filament bulb on a dark oak desk" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKEj4NHaUCP_Kvt2BxdQuyRhCuCPMz6U4T0FAy35UQQlUo8Xy513LzN9ranJDoJ32m08Z18eq8thRelPgssB7pEZCpNiMwRs2pVUgXkU1eVD64J-YO4UcAqyTcUSNn545wBps6_e6oQttu4P205soCykL8to9KcCad3e7tTHPj4Z3BW4FjzNEswFbws5dxBDx4niWLHPbyuRjt0y_be71ZCOUslXXK7duEkPb34drUuVusBGr0lp38O4mNZE4BYmZ8pVKzKKdmRyza" />
                                    <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                                        <span className="material-symbols-outlined text-primary text-xl">add</span>
                                    </button>
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Lighting</p>
                                    <h4 className="serif text-xl text-primary font-medium tracking-tight">Monolith Task Lamp</h4>
                                    <p className="text-on-surface-variant font-body text-sm">$450.00</p>
                                </div>
                            </div>
                            {/*  Product Card 4  */}
                            <div className="group cursor-pointer">
                                <div className="aspect-[4/5] bg-surface-container-low mb-4 overflow-hidden rounded-md relative">
                                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" data-alt="luxury scented candle in a hand-blown charcoal glass jar resting on a marble slab with wisps of smoke" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQR-5SkRoxqEmUubI2akW3uYfKnesDS_VwM4GdSaceWIdLqpNkaCdnCuidyxrDfYEfLx2Qejrj53eRN9IfsH1A7A149f5RQG5RGnYJhAQ66YB1iMVDCuNTDujuThtE9dGdevKHKQ8ZEzqjInBv1zQa9V5e6qpl8wkNamQm0JJ9hUK13vJLlhPBdm46fSR66C2kFZu9-utPfX0xMEPBJVdiyS1ldl8ub3I-2CPbI5DExkXaig6dA13b95cGCPVloGGWT1eKPJXtuTHS" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Aromatics</p>
                                    <h4 className="serif text-xl text-primary font-medium tracking-tight">No. 09 Cedar &amp; Moss</h4>
                                    <p className="text-on-surface-variant font-body text-sm">$65.00</p>
                                </div>
                            </div>
                            {/*  Product Card 5  */}
                            <div className="group cursor-pointer">
                                <div className="aspect-[4/5] bg-surface-container-low mb-4 overflow-hidden rounded-md relative">
                                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" data-alt="folded stack of high-quality organic cotton towels in earthy terracotta and slate tones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9LYbawnx2kzFuEIqk1-EtiEHxvrU1QZR1tLfIxDKbmMxYBNHENlHmvTqyIR6wVIC3qFHctL-jcfZTpQMCi_4yxxtPztVwZKZI_s1i9zEPQ3kS5Nh8l9mTOlyLOx0DqBnRljM287bodRLrdpW6R_y1gMMiOjS_3AaesGdnjLCzceBJNannpFoBM97lvM4L1dhSmZjQ0pq0S-gf1QwSaEeahyNXFFLKEz5jKDev_l60o6lJVzPhlcopBBnXrrQpQ0MARulJ9HnKq85K" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Textiles</p>
                                    <h4 className="serif text-xl text-primary font-medium tracking-tight">Organic Weave Set</h4>
                                    <p className="text-on-surface-variant font-body text-sm">$120.00</p>
                                </div>
                            </div>
                            {/*  Product Card 6  */}
                            <div className="group cursor-pointer">
                                <div className="aspect-[4/5] bg-surface-container-low mb-4 overflow-hidden rounded-md relative">
                                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" data-alt="abstract architectural sketch framed in minimal thin black frame leaning against a white plaster wall" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbMgf8-yXX6y_WeA5UfCbp4qcGI_jl4f9EYf4t5WJPQJiK0Dlbhfvrl6DiMEIrxC5tNK_VEW_uigoDguJ-8adkaQc3GHhG4JTMEyoDodasIlsH1AAHhQQqfh1YmlJfv0vdTR6lmUBkskyzLgez_6sstmeLHPVP3IUJLEphXxFXfDHG8xk3w0SIg6b3w8CZoB8IHK4AAteWPNwWZqE3NpCKL2w_CuHm2BtG9i1IApZPg-fDUPZkq7OcVZv0qfPQL1jNWR5Vf6kzcCtn" />
                                </div>
                                <div className="space-y-1">
                                    <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Art</p>
                                    <h4 className="serif text-xl text-primary font-medium tracking-tight">Lines in Space Print</h4>
                                    <p className="text-on-surface-variant font-body text-sm">$210.00</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </main>
            {/*  Footer  */}
            <footer className="w-full py-16 px-6 md:px-12 mt-auto bg-slate-50 dark:bg-slate-900">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto border-t border-slate-200/20 dark:border-slate-800/20">
                    <div className="space-y-6">
                        <div className="text-lg font-['Noto_Serif'] italic text-slate-400">CURATED GALLERY</div>
                        <p className="text-xs tracking-widest uppercase font-['Manrope'] text-slate-400 max-w-xs leading-loose">
                            Defining the intersection of art and living since 2018. Selected works for the modern soul.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-x-12 gap-y-6 justify-start md:justify-end items-center">
                        <a className="font-['Manrope'] text-xs tracking-widest uppercase text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-50 hover:underline decoration-slate-300 underline-offset-4 transition-all" href="#">Sustainability</a>
                        <a className="font-['Manrope'] text-xs tracking-widest uppercase text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-50 hover:underline decoration-slate-300 underline-offset-4 transition-all" href="#">Shipping</a>
                        <a className="font-['Manrope'] text-xs tracking-widest uppercase text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-50 hover:underline decoration-slate-300 underline-offset-4 transition-all" href="#">Returns</a>
                        <a className="font-['Manrope'] text-xs tracking-widest uppercase text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-50 hover:underline decoration-slate-300 underline-offset-4 transition-all" href="#">Contact</a>
                        <a className="font-['Manrope'] text-xs tracking-widest uppercase text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-50 hover:underline decoration-slate-300 underline-offset-4 transition-all" href="#">Privacy</a>
                    </div>
                </div>
                <div className="mt-16 text-center">
                    <p className="text-[10px] tracking-widest text-slate-400 uppercase">© 2024 CURATED GALLERY. ALL RIGHTS RESERVED.</p>
                </div>
            </footer>
        </div>
    )
}