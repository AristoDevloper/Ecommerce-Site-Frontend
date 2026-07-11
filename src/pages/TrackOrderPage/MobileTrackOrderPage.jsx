import { Link } from 'react-router-dom';

export function MobileTrackOrderPage({ order }) {
    const currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    const formatOrderDate = (createdAt) => {
        return new Date(createdAt).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric'
        });
    };

    const isStepActive = (stepStatus) => {
        const statuses = ['PENDING', 'SHIPPED', 'DELIVERED'];
        const currentIndex = statuses.indexOf(order.status);
        const stepIndex = statuses.indexOf(stepStatus);
        
        if (order.status === 'CANCELLED') {
            return stepStatus === 'CANCELLED';
        }
        
        return currentIndex >= stepIndex;
    };

    return (
        <div className="bg-background text-on-background selection:bg-primary-fixed selection:text-on-primary-fixed">
            <main className="pt-20 pb-28 px-4 md:max-w-md mx-auto">
                {/* Page Title */}
                <section className="mt-4 mb-8">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-tertiary mb-2 block">Order #{order.order_id.slice(0, 8).toUpperCase()}</span>
                    <h2 className="text-3xl font-serif font-bold tracking-tight text-primary">
                        {order.status === 'CANCELLED' ? 'Cancelled' : 
                         order.status === 'DELIVERED' ? 'Delivered' : 
                         order.status === 'SHIPPED' ? 'On the Way' : 'Confirmed'}
                    </h2>
                    <p className="text-sm text-on-surface-variant mt-1">Placed on {formatOrderDate(order.created_at)}</p>
                </section>

                {/* Visual Progress Tracker */}
                <section className="mb-10 px-2">
                    {order.status === 'CANCELLED' ? (
                        <div className="flex flex-col space-y-6 relative">
                            <div className="flex gap-6 items-start relative">
                                <div className="z-10 w-8 h-8 rounded-full bg-error flex items-center justify-center text-white shrink-0">
                                    <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>cancel</span>
                                </div>
                                <div className="pt-1">
                                    <h4 className="text-sm font-bold text-error">Order Cancelled</h4>
                                    <p className="text-xs text-on-surface-variant">We're sorry this didn't work out.</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col space-y-6 relative">
                            {/* Vertical Line */}
                            <div className="absolute left-4 top-2 bottom-2 w-px bg-outline-variant/30"></div>
                            
                            {/* Status Items */}
                            <div className={`flex gap-6 items-start relative ${isStepActive('PENDING') ? '' : 'opacity-40'}`}>
                                <div className={`z-10 w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${isStepActive('PENDING') ? 'bg-primary text-white' : 'bg-surface-container-highest border border-outline-variant/20 text-on-surface-variant'}`}>
                                    <span className="material-symbols-outlined text-lg" style={isStepActive('PENDING') ? { fontVariationSettings: "'FILL' 1" } : {}}>check</span>
                                </div>
                                <div className="pt-1">
                                    <h4 className={`text-sm font-bold ${isStepActive('PENDING') ? 'text-primary' : 'text-on-surface'}`}>Order Confirmed</h4>
                                </div>
                            </div>
                            
                            <div className={`flex gap-6 items-start relative ${isStepActive('SHIPPED') ? '' : 'opacity-40'}`}>
                                <div className={`z-10 w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${isStepActive('SHIPPED') ? 'bg-primary text-white' : 'bg-surface-container-highest border border-outline-variant/20 text-on-surface-variant'}`}>
                                    <span className="material-symbols-outlined text-lg" style={isStepActive('SHIPPED') ? { fontVariationSettings: "'FILL' 1" } : {}}>local_shipping</span>
                                </div>
                                <div className="pt-1">
                                    <h4 className={`text-sm font-bold ${isStepActive('SHIPPED') ? 'text-primary' : 'text-on-surface'}`}>Shipped</h4>
                                </div>
                            </div>

                            <div className={`flex gap-6 items-start relative ${isStepActive('DELIVERED') ? '' : 'opacity-40'}`}>
                                <div className={`z-10 w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${isStepActive('DELIVERED') ? 'bg-primary text-white' : 'bg-surface-container-highest border border-outline-variant/20 text-on-surface-variant'}`}>
                                    <span className="material-symbols-outlined text-lg" style={isStepActive('DELIVERED') ? { fontVariationSettings: "'FILL' 1" } : {}}>home</span>
                                </div>
                                <div className="pt-1">
                                    <h4 className={`text-sm font-bold ${isStepActive('DELIVERED') ? 'text-primary' : 'text-on-surface'}`}>Delivered</h4>
                                </div>
                            </div>
                        </div>
                    )}
                </section>

                {/* Order Manifest */}
                <section className="mb-8">
                    <div className="flex items-center justify-between mb-4 border-b border-outline-variant/10 pb-2">
                        <h3 className="text-xs font-extrabold uppercase tracking-widest text-on-surface">Order Manifest</h3>
                        <span className="text-xs text-on-surface-variant">{order.items?.length || 0} Items</span>
                    </div>
                    <div className="space-y-4">
                        {order.items?.map((item) => (
                            <div key={item.product?.product_id || item.product} className="flex items-center gap-4 bg-surface-container-lowest p-3 rounded-lg">
                                <div className="w-16 h-16 rounded-md bg-surface-variant overflow-hidden shrink-0">
                                    {item.product?.images && item.product.images.length > 0 ? (
                                        <img 
                                            className="w-full h-full object-cover" 
                                            src={`http://localhost:8000${item.product.images[0].image}`} 
                                            alt={item.product?.name} 
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-[10px] uppercase text-on-surface-variant">No Img</div>
                                    )}
                                </div>
                                <div className="flex-1">
                                    <h5 className="text-sm font-bold text-primary line-clamp-1">{item.product?.name || 'Unknown'}</h5>
                                    <p className="text-[10px] text-on-surface-variant uppercase tracking-tighter">Qty: {item.quantity}</p>
                                </div>
                                <p className="text-sm font-serif font-bold text-primary">{currencyFormatter.format(Number(item.price))}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Billing Summary */}
                <section className="mb-8 p-4 rounded-xl border border-outline-variant/20 bg-surface-container-lowest">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-on-surface mb-4">Billing Summary</h3>
                    <div className="space-y-2 mb-4">
                        <div className="flex justify-between text-xs text-on-surface-variant">
                            <span>Subtotal</span>
                            <span>{currencyFormatter.format(Number(order.total_price))}</span>
                        </div>
                        <div className="flex justify-between text-xs text-on-surface-variant">
                            <span>Delivery</span>
                            <span>Calculated at checkout</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center border-t border-outline-variant/20 pt-4">
                        <span className="text-xs font-extrabold uppercase tracking-widest text-primary">Total</span>
                        <span className="font-serif font-bold text-lg text-primary">{currencyFormatter.format(Number(order.total_price))}</span>
                    </div>
                </section>

                {/* Support Actions */}
                <section className="grid grid-cols-2 gap-3 mb-8">
                    <button className="flex flex-col items-center justify-center gap-2 bg-surface-container-low p-4 rounded-xl active:scale-95 transition-transform text-on-surface">
                        <span className="material-symbols-outlined text-outline-variant">receipt_long</span>
                        <span className="text-[10px] font-bold uppercase tracking-widest">Invoice</span>
                    </button>
                    <Link to="/orders" className="flex flex-col items-center justify-center gap-2 bg-surface-container-low p-4 rounded-xl active:scale-95 transition-transform text-on-surface">
                        <span className="material-symbols-outlined text-outline-variant">history</span>
                        <span className="text-[10px] font-bold uppercase tracking-widest">History</span>
                    </Link>
                </section>
            </main>
        </div>
    );
}
