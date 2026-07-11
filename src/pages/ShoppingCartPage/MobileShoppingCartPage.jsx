import { Link } from 'react-router-dom';

export function MobileShoppingCartPage({ cartItems = [], onUpdateQuantity, onRemoveItem }) {
    const currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    const subtotal = cartItems.reduce((total, item) => {
        return total + Number(item.product.price) * item.quantity;
    }, 0);

    return (
        <div className="bg-background text-on-background font-body min-h-screen pb-32 mobile-screen">

            <main className="pt-24 px-6 max-w-md mx-auto">
                {/* Editorial Header */}
                <div className="mb-12">
                    <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant block mb-2">Shopping Bag</span>
                    <h2 className="text-4xl font-headline tracking-tight text-primary leading-tight">Your Bag.</h2>
                </div>
                {cartItems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <span className="material-symbols-outlined text-5xl text-outline-variant mb-4" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200" }}>shopping_bag</span>
                        <h2 className="text-2xl font-headline tracking-tight text-primary mb-3">Your Bag is Empty</h2>
                        <p className="text-sm text-on-surface-variant max-w-[250px] mx-auto mb-8 leading-relaxed">
                            Looks like you haven't added anything to your cart yet.
                        </p>
                        <Link to="/" className="w-full bg-primary text-on-primary py-4 rounded-sm text-xs font-bold uppercase tracking-widest shadow-lg shadow-primary/10 transition-all active:scale-95 block">
                            Explore Collection
                        </Link>
                    </div>
                ) : (
                    <>
                        {/* Cart Items List */}
                        <div className="space-y-8">
                            {cartItems.map((item) => {
                                const productImage = item.product.images?.[0]?.image_url;

                                return (
                                    <div key={item.id} className="flex gap-6 items-start group">
                                        <div className="w-32 aspect-[3/4] bg-surface-variant rounded-md overflow-hidden flex-shrink-0">
                                            <img className="w-full h-full object-cover grayscale-[0.2] group-hover:scale-105 transition-transform duration-700" src={productImage} alt={item.product.name} />
                                        </div>
                                        <div className="flex flex-col justify-between h-32 flex-grow">
                                            <div>
                                                <div className="flex justify-between items-start gap-4">
                                                    <h3 className="text-lg font-headline italic text-primary">{item.product.name}</h3>
                                                    <button 
                                                        onClick={() => onRemoveItem(item.product.product_id)}
                                                        className="text-on-surface-variant/40 hover:text-error transition-colors"
                                                    >
                                                        <span className="material-symbols-outlined text-sm">close</span>
                                                    </button>
                                                </div>
                                                <p className="text-[10px] uppercase tracking-widest text-tertiary mt-1">{item.product.category_name}</p>
                                                <p className="text-sm text-on-surface-variant mt-2">Qty {item.quantity}</p>
                                            </div>
                                            <div className="flex justify-between items-end">
                                                <div className="flex items-center gap-4 bg-surface-container-low px-3 py-1 rounded-sm">
                                                    <button 
                                                        onClick={() => onUpdateQuantity(item.product.product_id, -1)}
                                                        className="text-xs text-on-surface-variant hover:text-primary"
                                                    >
                                                        -
                                                    </button>
                                                    <span className="text-xs font-bold">{item.quantity}</span>
                                                    <button 
                                                        onClick={() => onUpdateQuantity(item.product.product_id, 1)}
                                                        className="text-xs text-on-surface-variant hover:text-primary"
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                                <span className="text-sm font-bold text-primary">{currencyFormatter.format(Number(item.product.price) * item.quantity)}</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Complementary Pieces Suggestion */}
                        <section className="mt-16 mb-8 border-t border-outline-variant/20 pt-10">
                            <h3 className="text-sm font-label uppercase tracking-widest text-on-surface-variant mb-6 text-center">Complementary Pieces</h3>
                            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 -mx-6 px-6">
                                {/* Suggestion 1 */}
                                <div className="min-w-[160px] space-y-3">
                                    <div className="aspect-square bg-surface-container-low rounded-sm overflow-hidden">
                                        <img className="w-full h-full object-cover opacity-80" data-alt="a minimalist art book with thick cream paper on a dark surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBC-8eO8Z3a_pT03B7n783nC48HofZ2aVl07O11-kG3D5_xM4A-gq_X1uB29q9B7H26E7w9i-5-gLp_rLgH393AgytJ5J9A8B17c8E8sA5o8B6X_v3g87_c6tC8B2A6_tC0E7h5mO0N3qLpM7-fJ7WvV3w2X0dC_g5tH1-c7A9pG5g9L4vD-y9C8T_r6J9sN1zW" alt="The Art of Stillness" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-primary">The Art of Stillness</p>
                                        <p className="text-[10px] text-on-surface-variant">$65.00</p>
                                    </div>
                                </div>
                                <div className="min-w-[160px] space-y-3">
                                    <div className="aspect-square bg-surface-container-low rounded-sm overflow-hidden">
                                        <img className="w-full h-full object-cover opacity-80" data-alt="a minimalist luxury room spray bottle with metallic nozzle on a stone surface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2YkBQVV1mWA9POsv2ajxSc7eCTV4PcGIEDjsurdCjzmqk6rj-s7OEiMHmKAd3siXd17OaFm4LOwjePQDIYcYe483iLEb82Qrdi28Ae4a3qIRu80340QgUSbyemM2LaPjAOamlz0CAkr-d_X58xq3XBjtLWHjV6GsSUKLQldCOCOHnp2MXMgNI-OD39negCREtWOPC-u5M7EHy1APf47pVDifmIwr-1p3AkNbuFec-ClUPxsbTUtC-RELy-OJMOf6Psry1mvZije-8" alt="Cedar Mist" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-primary">Cedar Mist</p>
                                        <p className="text-[10px] text-on-surface-variant">$48.00</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                )}
            </main>
            {/* Floating Summary Section (Mobile Summary Bar) */}
            {cartItems.length > 0 && (
                <div className="fixed bottom-20 left-0 w-full px-6 pb-6 pt-8 bg-slate-50/90 backdrop-blur-2xl shadow-[0_-10px_30px_rgba(0,0,0,0.03)] z-40">
                    <div className="max-w-md mx-auto space-y-4">
                        <div className="flex justify-between items-center text-on-surface-variant">
                            <span className="text-xs tracking-wider uppercase font-medium">Estimated Shipping</span>
                            <span className="text-xs font-bold">Complimentary</span>
                        </div>
                        <div className="flex justify-between items-end">
                            <div>
                                <span className="text-[10px] uppercase tracking-widest text-on-surface-variant block">Subtotal</span>
                                <span className="text-2xl font-headline tracking-tighter text-primary">{currencyFormatter.format(subtotal)}</span>
                            </div>
                            <Link 
                                to="/checkout"
                                className="bg-primary hover:bg-primary-container text-on-primary px-8 py-4 rounded-sm text-xs font-bold uppercase tracking-widest shadow-lg shadow-primary/10 transition-all active:scale-95 block text-center"
                            >
                                Proceed to Checkout
                            </Link>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}
