import { Link } from 'react-router-dom';

export function DesktopOrderHistoryPage({ orders = [] }) {
    const currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    const formatOrderDate = (createdAt) => {
        return new Date(createdAt).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        });
    };

    const getStatusMeta = (status) => {
        if (status === 'DELIVERED') {
            return {
                label: 'Delivered',
                icon: 'check_circle',
                tone: 'text-tertiary'
            };
        }

        if (status === 'SHIPPED') {
            return {
                label: 'In Transit',
                icon: 'local_shipping',
                tone: 'text-on-surface-variant'
            };
        }

        if (status === 'CANCELLED') {
            return {
                label: 'Cancelled',
                icon: 'cancel',
                tone: 'text-error'
            };
        }

        return {
            label: 'Pending',
            icon: 'schedule',
            tone: 'text-secondary'
        };
    };

    return (
        <div className="bg-background text-on-surface font-body antialiased">

            <main className="max-w-screen-xl mx-auto px-8 py-16">
                {/*  Editorial Header  */}
                <div className="mb-16">
                    <p className="font-body text-xs tracking-[0.2em] uppercase text-on-surface-variant mb-4">Account Archives</p>
                    <h1 className="font-headline text-5xl md:text-6xl text-primary tracking-tighter leading-none mb-6">Order History</h1>
                    <div className="h-[1px] w-24 bg-tertiary"></div>
                </div>
                {orders.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-32 text-center">
                        <span className="material-symbols-outlined text-6xl text-outline-variant mb-6" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200" }}>package</span>
                        <h2 className="serif-heading text-3xl font-bold text-primary mb-4">No Order History</h2>
                        <p className="text-on-surface-variant max-w-md mx-auto mb-10 leading-relaxed">
                            You haven't placed any orders yet. Discover timeless design and exceptional craftsmanship in our collection.
                        </p>
                        <Link to="/" className="bg-gradient-to-r from-primary to-primary-container text-on-primary py-4 px-10 rounded font-label uppercase tracking-widest text-xs font-bold hover:opacity-90 transition-all active:scale-95 shadow-lg">
                            Start Exploring
                        </Link>
                    </div>
                ) : (
                    <>
                        {/*  Orders Table/List  */}
                        <div className="space-y-4">
                            {orders.map((order) => {
                                const statusMeta = getStatusMeta(order.status);

                                return (
                                    <div key={order.order_id} className="bg-surface-container-lowest rounded-md transition-all duration-300 hover:shadow-[0_20px_40px_rgba(25,28,29,0.04)] group">
                                        <div className="p-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                                            <div className="md:col-span-2 flex -space-x-4">
                                                <div className="w-16 h-20 bg-surface-variant rounded-lg overflow-hidden ghost-border flex items-center justify-center">
                                                    <span className="material-symbols-outlined text-2xl text-outline-variant">package_2</span>
                                                </div>
                                            </div>
                                            <div className="md:col-span-3">
                                                <p className="font-body text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">Order Ref.</p>
                                                <p className="font-body font-bold text-primary">#{order.order_id.slice(0, 8).toUpperCase()}</p>
                                                <p className="font-body text-sm text-on-surface-variant mt-2">{formatOrderDate(order.created_at)}</p>
                                            </div>
                                            <div className="md:col-span-2">
                                                <p className="font-body text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">Status</p>
                                                <div className={`flex items-center gap-2 ${statusMeta.tone}`}>
                                                    <span className="material-symbols-outlined text-sm">{statusMeta.icon}</span>
                                                    <p className="font-body text-sm font-medium">{statusMeta.label}</p>
                                                </div>
                                            </div>
                                            <div className="md:col-span-2">
                                                <p className="font-body text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">Investment</p>
                                                <p className="font-headline text-lg">{currencyFormatter.format(Number(order.total_price))}</p>
                                            </div>
                                            <div className="md:col-span-3 flex md:justify-end gap-6">
                                                <Link to={`/track-order/${order.order_id}`} className="font-body text-sm text-primary hover:text-tertiary transition-colors relative group/link">
                                                    View Details
                                                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-tertiary transition-all duration-300 group-hover/link:w-full"></span>
                                                </Link>
                                                <button className="bg-primary-container text-white px-6 py-2.5 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity flex items-center gap-2">
                                                    <span className="material-symbols-outlined text-sm">rebase_edit</span>
                                                    Reorder
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        {/*  Pagination / Load More  */}
                        <div className="mt-16 flex justify-center">
                            <button className="font-body text-xs tracking-[0.3em] uppercase text-on-surface-variant hover:text-primary transition-colors flex flex-col items-center gap-4">
                                View Older Artifacts
                                <span className="material-symbols-outlined animate-bounce">expand_more</span>
                            </button>
                        </div>
                    </>
                )}
            </main>
            {/*  Footer Component  */}
            <footer className="bg-slate-50 dark:bg-slate-900 full-width py-16 mt-20 transition-all duration-300">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 px-8 max-w-screen-2xl mx-auto">
                    <div className="col-span-2 md:col-span-1">
                        <div className="text-xl font-serif text-slate-900 dark:text-slate-50 mb-6">ETHOS CURATED</div>
                        <p className="font-body text-sm text-slate-500 leading-relaxed max-w-xs">Elevating the everyday through a curated selection of timeless design and exceptional craftsmanship.</p>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <p className="font-body text-[10px] uppercase tracking-widest text-slate-400">Discover</p>
                        <a className="text-sm text-slate-500 hover:text-amber-700 dark:hover:text-amber-500 transition-colors" href="#">Brand Story</a>
                        <a className="text-sm text-slate-500 hover:text-amber-700 dark:hover:text-amber-500 transition-colors" href="#">Shipping &amp; Delivery</a>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <p className="font-body text-[10px] uppercase tracking-widest text-slate-400">Support</p>
                        <a className="text-sm text-slate-500 hover:text-amber-700 dark:hover:text-amber-500 transition-colors" href="#">Secure Payment</a>
                        <a className="text-sm text-slate-500 hover:text-amber-700 dark:hover:text-amber-500 transition-colors" href="#">Tracking</a>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <p className="font-body text-[10px] uppercase tracking-widest text-slate-400">Legal</p>
                        <a className="text-sm text-slate-500 hover:text-amber-700 dark:hover:text-amber-500 transition-colors" href="#">FAQ</a>
                        <a className="text-sm text-slate-500 hover:text-amber-700 dark:hover:text-amber-500 transition-colors" href="#">Contact</a>
                    </div>
                </div>
                <div className="max-w-screen-2xl mx-auto px-8 mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
                    <p className="font-body text-[10px] tracking-widest text-slate-400">© 2024 ETHOS CURATED. ALL ARTIFACTS RESERVED.</p>
                    <div className="flex gap-4">
                        <span className="material-symbols-outlined text-slate-400 text-lg">public</span>
                        <span className="material-symbols-outlined text-slate-400 text-lg">payments</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
export default DesktopOrderHistoryPage;
