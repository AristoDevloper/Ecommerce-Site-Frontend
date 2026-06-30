export function MobileOrderHistoryPage() {
    return (
        <div className="bg-background text-on-surface font-body antialiased min-h-screen pb-24">
            
            <main className="pt-24 px-6 max-w-md mx-auto">
                
                {/*  Orders Feed (Asymmetric Layout)  */}
                <div className="space-y-6">
                    {/*  Order Card 1: In Transit  */}
                    <section className="bg-surface-container-lowest rounded-xl p-5 shadow-[0_4px_20px_rgba(25,28,29,0.04)] relative overflow-hidden">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <p className="text-[10px] font-bold text-tertiary tracking-[0.15em] uppercase mb-1">In Transit</p>
                                <h2 className="text-lg font-bold text-primary">Order #GL-89230</h2>
                            </div>
                            <span className="text-xs font-medium text-outline">Oct 24, 2023</span>
                        </div>
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-20 h-24 bg-surface-variant rounded-md flex-shrink-0 overflow-hidden">
                                <img className="w-full h-full object-cover" alt="Azure Horizon No. 4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtfWdBVYDmk54WmTRf5585Y56I72ZWQXfHFH7siiCnSqAJVBFQ84SBf1h1WlYihDl7sTAq8SLggCHdVI3ISq2V-qKwFiCqgK29aqeje4dNssPHuP1FFIizD-hUQnvAvcdAr_VO2Q80xRJs9GoXJH8kB22HZJJdEA9mNNndaJQhG1sMp-J-3jFqX3LGGH3lJqZTqZKogUcmMz8tkt99eY_R8WI4mhu7vquGQ7xyBOlmQsdG7XJEjO3W8tFwWS1eFVSCB8O4GNRopgpN" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-sm font-bold leading-tight">Azure Horizon No. 4</h3>
                                <p className="text-xs text-on-surface-variant mt-1">Limited Edition Giclée Print</p>
                                <p className="text-sm font-bold text-primary mt-2">$1,250.00</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <button className="flex-1 py-3 bg-primary text-on-primary text-xs font-bold rounded-lg tracking-widest uppercase transition-transform active:scale-95">Track Package</button>
                            <button className="px-4 py-3 bg-surface-container text-primary text-xs font-bold rounded-lg transition-transform active:scale-95">
                                <span className="material-symbols-outlined text-sm">more_horiz</span>
                            </button>
                        </div>
                    </section>
                    {/*  Order Card 2: Delivered  */}
                    <section className="bg-surface-container-low rounded-xl p-5 relative">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <p className="text-[10px] font-bold text-outline tracking-[0.15em] uppercase mb-1">Delivered</p>
                                <h2 className="text-lg font-bold text-primary">Order #GL-77102</h2>
                            </div>
                            <span className="text-xs font-medium text-outline">Sep 12, 2023</span>
                        </div>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-20 h-24 bg-surface-variant rounded-md flex-shrink-0 overflow-hidden">
                                <img className="w-full h-full object-cover" alt="Vortex Bronze Study" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEd3i9cOFcmByjusHUt2cYMcuwCHv94qhQZF7t2K0xlclaQnAsJfmfai2AjhvtOpeZ7IogizmikntEP3ztSOZA_XlVfA0LJzwNjywj57oZ4PKmeKXBXVLDBN3au0zM7yPJGKtx-aY_FJu0YrVbgRpPk1wqhn456x_dh7XNwkJMMaklYfBHEFJ5H8PsUFVyMGLxiEXVPnbfOXQ353QiLbGj0MUSU7aFaraYZ3CrIGivY_a6QMlfP4KbSLcQa0g0wZZiUzLxnym5JHiS" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-sm font-bold leading-tight">Vortex Bronze Study</h3>
                                <p className="text-xs text-on-surface-variant mt-1">Hand-cast Bronze Sculpture</p>
                                <p className="text-sm font-bold text-primary mt-2">$3,400.00</p>
                            </div>
                        </div>
                        <div className="border-t border-outline-variant/20 pt-4 flex justify-between items-center">
                            <span className="text-[10px] font-bold text-tertiary tracking-widest uppercase">Certified Original</span>
                            <button className="text-primary text-xs font-bold underline underline-offset-4 decoration-1 decoration-outline-variant/50">Invoice</button>
                        </div>
                    </section>
                    {/*  Order Card 3: Delivered (Bento Style)  */}
                    <section className="grid grid-cols-2 gap-4">
                        <div className="col-span-2 bg-surface-container-lowest rounded-xl p-5 shadow-[0_4px_20px_rgba(25,28,29,0.04)]">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-bold text-primary">Order #GL-66512</h2>
                                <span className="text-[10px] font-bold text-outline tracking-widest uppercase">Delivered</span>
                            </div>
                            <div className="flex -space-x-4 mb-4">
                                <div className="w-16 h-16 rounded-full border-4 border-white overflow-hidden bg-surface-variant">
                                    <img className="w-full h-full object-cover" alt="minimalist ceramic vase" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuF_4mXJUY3mx7r09mOqCLu2rVug6--GAkosquE6MNrwZmjpbVFXeOLCFvYwScjHNOzEhW9o2c_rn1NOf3BPxfkKmX2auQ2u9Kja6hmc9kZdYML7xlWLuKKv8Fu0JMN2oXPXNILuP2bHXXe1pBPGt1_TQFC07jFF7SGOgYJIdgvyCr_IfmVy47aDVHZ--igRQGryFWgZ2ll9UvV41Zj5jtRPCNkdk9r-RCBMT3FFQl-ZJgsV1OyGQwuVMXqQonVFO7ULQjX95u6z6U" />
                                </div>
                                <div className="w-16 h-16 rounded-full border-4 border-white overflow-hidden bg-surface-variant">
                                    <img className="w-full h-full object-cover" alt="leather journal" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0-ZE2o_y-0StueSqG4nPIyFxJq59QZKRKeR4zxuG_8aXdnS1F2S-1Crb4JwPYDH0ws8rnLIxpxhUo2J4891DkHdXJyzQW_zx4ZyuuagYLGM_8w4GrHL9GpGjmGHntuIla2ufWzhuCsMefGCimazOQBfvPEaWRl_t3quGk7YKnQW0HwywsZ6rE9qqZ9kB_PJ3H9pVVLPZii0N0C-2VwcLcFeIYjjdPFkiW9Vh4sn7QP4zJBSvoSLTDygIeVqtC3dFIgOLxgtJ5tH9m" />
                                </div>
                                <div className="w-16 h-16 rounded-full border-4 border-white flex items-center justify-center bg-primary text-on-primary text-xs font-bold">+1</div>
                            </div>
                            <p className="text-xs text-on-surface-variant italic mb-4">"Collection: The Minimalist Summer"</p>
                            <button className="w-full py-3 bg-surface-container-high text-primary text-xs font-bold rounded-lg tracking-widest uppercase">Order Details</button>
                        </div>
                    </section>
                </div>
                {/*  Helpful Assistance  */}
                <div className="mt-12 p-8 bg-primary-container rounded-xl text-center">
                    <h3 className="text-on-primary text-lg mb-2">Need assistance?</h3>
                    <p className="text-on-primary-container text-sm mb-6">Our curators are available 24/7 to help with your acquisitions.</p>
                    <button className="px-8 py-3 bg-tertiary-fixed text-on-tertiary-fixed text-xs font-bold rounded-lg tracking-[0.2em] uppercase">Contact Concierge</button>
                </div>
            </main>
            
        </div>
    );
}
export default MobileOrderHistoryPage;
