import { Link } from 'react-router-dom';

import { API_BASE_URL } from '../../config/api';

export function DesktopTrackOrderPage({ order }) {
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
        <div className="bg-background text-on-surface min-h-screen selection:bg-primary-fixed selection:text-on-primary-fixed">
            <main className="max-w-screen-xl mx-auto px-6 md:px-8 py-12 md:py-20">
                
                <div className="mb-12">
                    <h1 className="text-4xl font-headline tracking-tighter text-primary">Order #{order.order_id.slice(0, 8).toUpperCase()}</h1>
                    <p className="text-on-surface-variant font-body mt-2">Placed on {formatOrderDate(order.created_at)}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Left: Timeline and Details */}
                    <div className="lg:col-span-8 space-y-12">
                        {/* Visual Timeline */}
                        <section className="bg-surface-container-low p-8 md:p-12 rounded-xl relative">
                            {order.status === 'CANCELLED' ? (
                                <div className="flex items-center gap-4 text-error">
                                    <span className="material-symbols-outlined text-4xl">cancel</span>
                                    <div>
                                        <h3 className="text-xl font-bold">Order Cancelled</h3>
                                        <p className="text-sm opacity-80">This order has been cancelled.</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative">
                                    {/* Connecting Line (Desktop) */}
                                    <div className="hidden md:block absolute top-6 left-0 w-full h-[1px] bg-outline-variant/30 -z-0"></div>
                                    {/* Active Progress Bar (Desktop) */}
                                    <div className={`hidden md:block absolute top-6 left-0 h-[1px] bg-primary transition-all duration-1000 -z-0 ${order.status === 'DELIVERED' ? 'w-full' : order.status === 'SHIPPED' ? 'w-[50%]' : 'w-0'}`}></div>
                                    
                                    {/* Step 1: Confirmed */}
                                    <div className="relative z-10 flex md:flex-col items-center md:items-center gap-4 md:gap-6 w-full md:w-auto mb-8 md:mb-0">
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-500 ${isStepActive('PENDING') ? 'bg-primary text-on-primary' : 'bg-surface-container-highest border border-outline-variant/20 text-on-surface-variant'}`}>
                                            <span className="material-symbols-outlined text-xl" style={isStepActive('PENDING') ? { fontVariationSettings: "'FILL' 1" } : {}}>check_circle</span>
                                        </div>
                                        <div className="flex flex-col md:items-center text-left md:text-center">
                                            <span className={`text-xs font-bold tracking-widest uppercase font-label mb-1 ${isStepActive('PENDING') ? 'text-primary' : 'text-on-surface-variant/50'}`}>Confirmed</span>
                                        </div>
                                    </div>

                                    {/* Step 2: Shipped */}
                                    <div className="relative z-10 flex md:flex-col items-center md:items-center gap-4 md:gap-6 w-full md:w-auto mb-8 md:mb-0">
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-500 ${isStepActive('SHIPPED') ? 'bg-primary text-on-primary' : 'bg-surface-container-highest border border-outline-variant/20 text-on-surface-variant'}`}>
                                            <span className="material-symbols-outlined text-xl" style={isStepActive('SHIPPED') ? { fontVariationSettings: "'FILL' 1" } : {}}>local_shipping</span>
                                        </div>
                                        <div className="flex flex-col md:items-center text-left md:text-center">
                                            <span className={`text-xs font-bold tracking-widest uppercase font-label mb-1 ${isStepActive('SHIPPED') ? 'text-primary' : 'text-on-surface-variant/50'}`}>Shipped</span>
                                        </div>
                                    </div>

                                    {/* Step 3: Delivered */}
                                    <div className="relative z-10 flex md:flex-col items-center md:items-center gap-4 md:gap-6 w-full md:w-auto">
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-500 ${isStepActive('DELIVERED') ? 'bg-primary text-on-primary ring-4 ring-primary/10' : 'bg-surface-container-highest border border-outline-variant/20 text-on-surface-variant'}`}>
                                            <span className="material-symbols-outlined text-xl">home</span>
                                        </div>
                                        <div className="flex flex-col md:items-center text-left md:text-center">
                                            <span className={`text-xs font-bold tracking-widest uppercase font-label mb-1 ${isStepActive('DELIVERED') ? 'text-primary' : 'text-on-surface-variant/50'}`}>Delivered</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </section>

                        {/* Order Artifacts (Bento Grid Style) */}
                        <section>
                            <div className="flex items-baseline justify-between mb-8 border-b border-outline-variant/10 pb-4">
                                <h2 className="text-2xl font-serif text-primary">Purchased Items</h2>
                                <span className="text-sm font-label text-on-surface-variant">{order.items?.length || 0} Items Total</span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {order.items?.map((item) => (
                                    <div key={item.product?.product_id || item.product} className="flex gap-6 bg-surface-container-lowest p-5 rounded-xl transition-all hover:bg-surface-container-low group">
                                        <div className="w-24 h-32 flex-shrink-0 bg-surface-variant rounded-md overflow-hidden">
                                            {item.product?.images && item.product.images.length > 0 ? (
                                                <img 
                                                    className="w-full h-full object-cover mix-blend-multiply opacity-90 transition-transform group-hover:scale-105" 
                                                    src={`${API_BASE_URL}${item.product.images[0].image}`} 
                                                    alt={item.product?.name} 
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center bg-surface-variant text-on-surface-variant text-[10px] uppercase">No Image</div>
                                            )}
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <h3 className="font-medium text-lg text-on-surface line-clamp-1">{item.product?.name || 'Unknown Product'}</h3>
                                            <p className="text-sm text-on-surface-variant mb-3 line-clamp-1">Qty: {item.quantity}</p>
                                            <p className="text-primary font-bold">{currencyFormatter.format(Number(item.price))}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Right: Summary panel */}
                    <div className="lg:col-span-4 sticky top-28">
                        <div className="bg-surface-container-lowest p-8 rounded-xl">
                            <h2 className="font-serif text-2xl text-primary mb-8 border-b border-outline-variant/10 pb-4">Financial Overview</h2>
                            
                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-sm font-body text-on-surface-variant">
                                    <span>Subtotal</span>
                                    <span>{currencyFormatter.format(Number(order.total_price))}</span>
                                </div>
                                <div className="flex justify-between text-sm font-body text-on-surface-variant">
                                    <span>Shipping</span>
                                    <span>Calculated at checkout</span>
                                </div>
                                <div className="flex justify-between text-sm font-body text-on-surface-variant">
                                    <span>Tax</span>
                                    <span>Calculated at checkout</span>
                                </div>
                            </div>
                            
                            <div className="flex justify-between items-end border-t border-outline-variant/10 pt-6">
                                <div>
                                    <span className="block text-xs font-bold tracking-widest uppercase font-label text-on-surface-variant mb-1">Total Paid</span>
                                </div>
                                <span className="text-2xl font-headline tracking-tighter text-primary">{currencyFormatter.format(Number(order.total_price))}</span>
                            </div>
                            
                            <Link to="/orders" className="mt-8 w-full block text-center py-4 border border-primary/20 rounded-lg text-primary font-bold uppercase tracking-widest text-xs hover:bg-primary/5 transition-colors">
                                Back to Archives
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
