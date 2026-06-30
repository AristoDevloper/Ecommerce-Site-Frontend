export function DesktopWishlistPage() {
    return (
        <div className="bg-background text-on-surface font-body antialiased">
            
            <main className="max-w-screen-2xl mx-auto px-8 pt-16">
                
                {/*  Wishlist Bento-Style Grid  */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                    {/*  Item 1: Large Featured Card  */}
                    <div className="md:col-span-8 group">
                        <div className="relative overflow-hidden bg-surface-container-low rounded-xl">
                            <img className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" alt="Sculptural Lounge Chair" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAD_OLJdKsP7tmRO4zVYxUGBaR3IU8GZg5ZXDG008cjRStpT5AAGVq8vaZHTsSvwJBrcezqbzgDVtALPHHyaXgKQAvyuDEEwwIckwI5GgzbQg0S5vyLBX5tnL1yPdDTKZ6blT76Qw7skGAPRTZC5FH9w_pDamwWd7OyVy0RC5uyYWkN4eDABGyDHlHYvHO_ZvhRDW6fj_WnsPFcgRwOHTrC0RZM-mEIXDTdm-krRrLUpEN3NRANxYJ3SkiuCKe3I9liHJTgPJNsW-Jp" />
                            <button className="absolute top-6 right-6 w-10 h-10 rounded-full glass-panel flex items-center justify-center text-primary shadow-sm">
                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                            </button>
                        </div>
                        <div className="mt-6 flex justify-between items-start">
                            <div>
                                <h3 className="text-2xl font-serif text-primary">Sculptural Lounge Chair</h3>
                                <p className="text-on-surface-variant font-body mt-1">Limited Edition • Ash Wood &amp; Linen</p>
                                <p className="text-primary font-bold mt-2 text-xl">$2,450.00</p>
                            </div>
                            <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-3 rounded-lg font-label font-medium text-sm tracking-wide transition-all hover:opacity-90">
                                Add to Bag
                            </button>
                        </div>
                    </div>
                    {/*  Item 2: Vertical Profile  */}
                    <div className="md:col-span-4 group">
                        <div className="relative overflow-hidden bg-surface-container-low rounded-xl">
                            <img className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105" alt="Hand-Thrown Ceramic Vase" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKZWzkXxqZIf44timHxZyGIZVQ1024zJ1xlpUHU05VIT2KLUCZZ-6cW8pWMSQ8DeJzeyfqaGUZcUvLCDyQrCZKKhIaHwCjA4nhiw3qZKIyNeJWvTFx4BReg0n8wy8CYG6gOOfK4fRUWa5N8H_IGm_z2tFckivvW8t4rOR9nowvF1lvZUTfdJc2m7wZ_D2MgxrpteF5avoJrdQdX7dUdaKQpW1Dsg5VWTB5l04krLAHA40ljtBtna0QGZV9MubamSt3TIDRXReNwJ9w3" />
                            <button className="absolute top-6 right-6 w-10 h-10 rounded-full glass-panel flex items-center justify-center text-primary shadow-sm">
                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                            </button>
                        </div>
                        <div className="mt-6">
                            <h3 className="text-xl font-serif text-primary">Hand-Thrown Ceramic Vase</h3>
                            <p className="text-on-surface-variant font-body text-sm mt-1">Artifact No. 042</p>
                            <div className="flex justify-between items-center mt-4 pt-4 border-t border-outline-variant/20">
                                <span className="text-primary font-bold text-lg">$380.00</span>
                                <button className="text-primary font-label font-bold text-xs uppercase tracking-widest hover:underline decoration-1 underline-offset-4">
                                    Add to Bag
                                </button>
                            </div>
                        </div>
                    </div>
                    {/*  Item 3: Secondary Row  */}
                    <div className="md:col-span-4 group">
                        <div className="relative overflow-hidden bg-surface-container-low rounded-xl">
                            <img className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" alt="Italian Cashmere Throw" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBY_Vyq_8ly-mT3lIC_fAWBdfZleSjs_xWtCZnZ317G0-kiYHyx11YlijlCmYmiuLse6M0Ec7WIYeSMqP0iwfeRrYQDWJ25vBVxrUrx2ECyhzVJ2owkZCp7WquVc5SYJoZgIZdrZ7C8r8viH_jRcUZv0iOXVtvozMuq1kRXurY_fhkY9kEBIDb3TOqePJedPPreZ1aCIHukWe0Wv419BrrDt4ZHVgDG5obnfcKQDmiJK65W4yEW2RcdaSn7F57dXvGVMiWwpGzH7iwc" />
                            <button className="absolute top-6 right-6 w-10 h-10 rounded-full glass-panel flex items-center justify-center text-primary shadow-sm">
                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                            </button>
                        </div>
                        <div className="mt-6">
                            <h3 className="text-xl font-serif text-primary">Italian Cashmere Throw</h3>
                            <p className="text-on-surface-variant font-body text-sm mt-1">Sustainably Sourced</p>
                            <div className="flex justify-between items-center mt-4">
                                <span className="text-primary font-bold text-lg">$890.00</span>
                                <button className="text-primary font-label font-bold text-xs uppercase tracking-widest hover:underline decoration-1 underline-offset-4">
                                    Add to Bag
                                </button>
                            </div>
                        </div>
                    </div>
                    {/*  Item 4: Wide Card  */}
                    <div className="md:col-span-8 group">
                        <div className="relative overflow-hidden bg-surface-container-low rounded-xl">
                            <img className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" alt="Satin Brass Fixture Set" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8gm90yzg1ePnB0U26pu-8H_KfpXMZIXkR5xs_5u6nWgNPBP1Ok0ENdiaBTXWVVUaK0dh6O13LbqQXJGPAeVc9WZN7c3TJj1frCUuA0a8cPO_Ex9FteXM5v5SgyRHV8P_G67LlM_8lsfn0X4Pdc8vvauf9kjxrNwfXkRlmEU1zTxH6TdoYhQyFxwedVjdh76wP6rXuBmQ1eU8TOGSgwk1EZESClcg5K9-QfnCgM7jQSKOJSsry2K-yBactHmot0uR_tDUrDXNkAqYG" />
                            <button className="absolute top-6 right-6 w-10 h-10 rounded-full glass-panel flex items-center justify-center text-primary shadow-sm">
                                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                            </button>
                        </div>
                        <div className="mt-6 flex justify-between items-center">
                            <div>
                                <h3 className="text-2xl font-serif text-primary">Satin Brass Fixture Set</h3>
                                <p className="text-on-surface-variant font-body mt-1">Set of 4 • Hand-Polished</p>
                                <p className="text-primary font-bold mt-2 text-xl">$1,120.00</p>
                            </div>
                            <button className="bg-surface-container-highest text-primary px-8 py-3 rounded-lg font-label font-medium text-sm tracking-wide transition-all hover:bg-primary hover:text-on-primary">
                                Add to Bag
                            </button>
                        </div>
                    </div>
                </div>
                {/*  Inspiration Section  */}
                <section className="mt-32 p-12 bg-surface-container-low rounded-xl text-center">
                    <h2 className="text-3xl font-serif text-primary mb-4 italic">"Curating a space is an act of storytelling."</h2>
                    <p className="text-on-surface-variant max-w-xl mx-auto font-body leading-relaxed mb-8">
                        Your wishlist artifacts represent the chapters of your home's unique narrative. Move them to your bag and begin the next installment of your curated life.
                    </p>
                    <button className="bg-primary text-on-primary px-10 py-4 rounded-lg font-label font-bold uppercase tracking-widest text-xs">
                        Browse New Arrivals
                    </button>
                </section>
            </main>
            {/*  Footer  */}
            <footer className="bg-slate-50 dark:bg-slate-900 full-width py-16 mt-20">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 px-8 max-w-screen-2xl mx-auto">
                    <div className="col-span-2 md:col-span-1">
                        <span className="text-xl font-serif text-slate-900 dark:text-slate-50 mb-6 block">ETHOS CURATED</span>
                        <p className="text-slate-500 dark:text-slate-400 font-body text-sm leading-relaxed">
                            A destination for those who seek artifacts over products. Curating timeless pieces for the modern connoisseur.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-label font-bold text-xs uppercase tracking-widest text-primary mb-6">Experience</h4>
                        <ul className="space-y-4">
                            <li><a className="text-slate-500 dark:text-slate-400 hover:text-amber-700 dark:hover:text-amber-500 transition-colors text-sm" href="#">Brand Story</a></li>
                            <li><a className="text-slate-500 dark:text-slate-400 hover:text-amber-700 dark:hover:text-amber-500 transition-colors text-sm" href="#">Shipping &amp; Delivery</a></li>
                            <li><a className="text-slate-500 dark:text-slate-400 hover:text-amber-700 dark:hover:text-amber-500 transition-colors text-sm" href="#">Secure Payment</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-label font-bold text-xs uppercase tracking-widest text-primary mb-6">Support</h4>
                        <ul className="space-y-4">
                            <li><a className="text-slate-500 dark:text-slate-400 hover:text-amber-700 dark:hover:text-amber-500 transition-colors text-sm" href="#">Tracking</a></li>
                            <li><a className="text-slate-500 dark:text-slate-400 hover:text-amber-700 dark:hover:text-amber-500 transition-colors text-sm" href="#">FAQ</a></li>
                            <li><a className="text-slate-500 dark:text-slate-400 hover:text-amber-700 dark:hover:text-amber-500 transition-colors text-sm" href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-span-2 md:col-span-4 pt-12 border-t border-outline-variant/20 flex justify-between items-center">
                        <span className="text-slate-500 dark:text-slate-400 text-xs font-label">© 2024 ETHOS CURATED. ALL ARTIFACTS RESERVED.</span>
                        <div className="flex gap-6">
                            <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-primary">language</span>
                            <span className="material-symbols-outlined text-slate-400 cursor-pointer hover:text-primary">share</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
export default DesktopWishlistPage;
