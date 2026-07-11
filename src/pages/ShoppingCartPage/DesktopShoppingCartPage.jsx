import { Link } from 'react-router-dom';

export function DesktopShoppingCartPage({ cartItems = [], onUpdateQuantity, onRemoveItem }) {
    const currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    const subtotal = cartItems.reduce((total, item) => {
        return total + Number(item.product.price) * item.quantity;
    }, 0);

    return (
        <div className="bg-background text-on-surface min-h-screen flex flex-col">

            <main className="flex-grow pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto w-full">

                {cartItems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-32 text-center">
                        <span className="material-symbols-outlined text-6xl text-outline-variant mb-6" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200" }}>shopping_bag</span>
                        <h2 className="serif-heading text-3xl font-bold text-primary mb-4">Your Private Collection is Empty</h2>
                        <p className="text-on-surface-variant max-w-md mx-auto mb-10 leading-relaxed">
                            You haven't added any artifacts to your cart yet. Explore our curated selections to find your next masterpiece.
                        </p>
                        <Link to="/" className="bg-gradient-to-r from-primary to-primary-container text-on-primary py-4 px-10 rounded font-label uppercase tracking-widest text-xs font-bold hover:opacity-90 transition-all active:scale-95 shadow-lg">
                            Explore Collection
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        {/* Left Column: Items */}
                        <div className="lg:col-span-8 space-y-12">
                            {cartItems.map((item) => {
                                const productImage = item.product.images?.[0]?.image_url;

                                return (
                                    <div key={item.id} className="group flex flex-col md:flex-row gap-8 pb-12 border-b border-outline-variant/10 last:border-b-0 last:pb-0">
                                        <div className="w-full md:w-48 aspect-[3/4] bg-surface-container-low rounded-md overflow-hidden relative">
                                            <img
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                                src={productImage}
                                                alt={item.product.name}
                                            />
                                        </div>
                                        <div className="flex-grow flex flex-col justify-between">
                                            <div>
                                                <div className="flex justify-between items-start gap-4">
                                                    <h3 className="serif-heading text-2xl font-bold text-primary">{item.product.name}</h3>
                                                    <p className="text-xl font-medium text-primary">{currencyFormatter.format(Number(item.product.price) * item.quantity)}</p>
                                                </div>
                                                <p className="text-on-surface-variant mt-2 max-w-md leading-relaxed">{item.product.description}</p>
                                                <p className="text-xs font-label uppercase tracking-widest text-secondary mt-4">Qty: {item.quantity}</p>
                                            </div>
                                            <div className="flex items-center justify-between mt-8">
                                                <div className="flex items-center ghost-border rounded px-2 py-1">
                                                    <button 
                                                        onClick={() => onUpdateQuantity(item.product.product_id, -1)}
                                                        className="p-1 hover:text-primary transition-colors"
                                                    >
                                                        <span className="material-symbols-outlined text-sm">remove</span>
                                                    </button>
                                                    <span className="px-4 text-sm font-medium">{item.quantity}</span>
                                                    <button 
                                                        onClick={() => onUpdateQuantity(item.product.product_id, 1)}
                                                        className="p-1 hover:text-primary transition-colors"
                                                    >
                                                        <span className="material-symbols-outlined text-sm">add</span>
                                                    </button>
                                                </div>
                                                <button 
                                                    onClick={() => onRemoveItem(item.product.product_id)}
                                                    className="text-xs font-label uppercase tracking-widest text-outline hover:text-error transition-colors flex items-center gap-1"
                                                >
                                                    <span className="material-symbols-outlined text-base">close</span> Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        {/* Right Column: Summary */}
                        <div className="lg:col-span-4">
                            <div className="bg-surface-container-lowest p-8 rounded-lg shadow-sm sticky top-32">
                                <h2 className="serif-heading text-2xl font-bold text-primary mb-8">Summary</h2>
                                <div className="space-y-4 mb-8">
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-on-surface-variant font-label uppercase tracking-widest">Subtotal</span>
                                        <span className="text-primary font-medium">{currencyFormatter.format(subtotal)}</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-on-surface-variant font-label uppercase tracking-widest">Shipping</span>
                                        <span className="text-primary font-medium">Calculated at checkout</span>
                                    </div>
                                    <div className="flex justify-between items-center text-sm">
                                        <span className="text-on-surface-variant font-label uppercase tracking-widest">Estimated Tax</span>
                                        <span className="text-primary font-medium">$0.00</span>
                                    </div>
                                    <div className="pt-6 mt-6 border-t border-outline-variant/20">
                                        <div className="flex justify-between items-center">
                                            <span className="serif-heading text-lg font-bold text-primary">Total</span>
                                            <span className="serif-heading text-xl font-bold text-primary">{currencyFormatter.format(subtotal)}</span>
                                        </div>
                                    </div>
                                </div>
                                <Link 
                                    to="/checkout" 
                                    className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary py-4 rounded font-label uppercase tracking-widest text-xs font-bold hover:opacity-90 transition-all active:scale-95 shadow-lg block text-center"
                                >
                                    Proceed to Checkout
                                </Link>
                                <div className="mt-8 space-y-4">
                                    <div className="flex gap-4 items-start text-xs text-on-surface-variant">
                                        <span className="material-symbols-outlined text-tertiary">verified_user</span>
                                        <p>Authenticity guaranteed for all original artifacts and limited editions.</p>
                                    </div>
                                    <div className="flex gap-4 items-start text-xs text-on-surface-variant">
                                        <span className="material-symbols-outlined text-tertiary">local_shipping</span>
                                        <p>Insured white-glove delivery available for all international shipments.</p>
                                    </div>
                                </div>
                                <div className="mt-12">
                                    <p className="text-[10px] font-label uppercase tracking-widest text-outline text-center">We Accept</p>
                                    <div className="flex justify-center gap-4 mt-4 opacity-40 grayscale">
                                        <span className="material-symbols-outlined">payments</span>
                                        <span className="material-symbols-outlined">account_balance_wallet</span>
                                        <span className="material-symbols-outlined">credit_card</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </main>
            {/* Footer */}
            <footer className="w-full py-16 px-6 md:px-12 mt-auto bg-slate-50 dark:bg-slate-900 border-t border-slate-200/20 dark:border-slate-800/20">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <div className="text-lg font-['Noto_Serif'] italic text-slate-400">Curated Gallery</div>
                        <p className="font-['Manrope'] text-xs tracking-widest uppercase text-slate-400 dark:text-slate-500">© 2024 CURATED GALLERY. ALL RIGHTS RESERVED.</p>
                    </div>
                    <div className="flex flex-wrap gap-x-8 gap-y-4 md:justify-end font-['Manrope'] text-xs tracking-widest uppercase">
                        <a className="text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-50 hover:underline decoration-slate-300 underline-offset-4 transition-all" href="#">Sustainability</a>
                        <a className="text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-50 hover:underline decoration-slate-300 underline-offset-4 transition-all" href="#">Shipping</a>
                        <a className="text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-50 hover:underline decoration-slate-300 underline-offset-4 transition-all" href="#">Returns</a>
                        <a className="text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-50 hover:underline decoration-slate-300 underline-offset-4 transition-all" href="#">Contact</a>
                        <a className="text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-50 hover:underline decoration-slate-300 underline-offset-4 transition-all" href="#">Privacy</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
