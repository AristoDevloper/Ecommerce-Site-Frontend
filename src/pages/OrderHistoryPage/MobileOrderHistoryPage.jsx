import { Link } from 'react-router-dom';

export function MobileOrderHistoryPage({ orders = [] }) {
    const currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    const formatOrderDate = (createdAt) => {
        return new Date(createdAt).toLocaleDateString('en-US', {
            month: 'short',
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
        <div className="bg-background text-on-surface font-body antialiased min-h-screen pb-24">

            <main className="pt-24 px-6 max-w-md mx-auto">

                {/*  Orders Feed (Asymmetric Layout)  */}
                {orders.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 text-center">
                        <span className="material-symbols-outlined text-5xl text-outline-variant mb-4" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200" }}>package</span>
                        <h2 className="text-2xl font-headline tracking-tight text-primary mb-3">No Orders Yet</h2>
                        <p className="text-sm text-on-surface-variant max-w-[250px] mx-auto mb-8 leading-relaxed">
                            You haven't placed any orders. Discover our curated collection.
                        </p>
                        <Link to="/" className="w-full bg-primary text-on-primary py-4 rounded-sm text-xs font-bold uppercase tracking-widest shadow-lg shadow-primary/10 transition-all active:scale-95 block">
                            Explore Collection
                        </Link>
                    </div>
                ) : (
                    <div className="space-y-6">
                        {orders.map((order) => {
                            const statusMeta = getStatusMeta(order.status);

                            return (
                                <section key={order.order_id} className="bg-surface-container-lowest rounded-xl p-5 shadow-[0_4px_20px_rgba(25,28,29,0.04)] relative overflow-hidden">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <p className={`text-[10px] font-bold tracking-[0.15em] uppercase mb-1 ${statusMeta.tone}`}>{statusMeta.label}</p>
                                            <h2 className="text-lg font-bold text-primary">Order #{order.order_id.slice(0, 8).toUpperCase()}</h2>
                                        </div>
                                        <span className="text-xs font-medium text-outline">{formatOrderDate(order.created_at)}</span>
                                    </div>
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-20 h-24 bg-surface-variant rounded-md flex-shrink-0 overflow-hidden flex items-center justify-center">
                                            <span className="material-symbols-outlined text-3xl text-outline-variant">package_2</span>
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-sm font-bold leading-tight">Order total</h3>
                                            <p className="text-xs text-on-surface-variant mt-1">Backend-shaped order record</p>
                                            <p className="text-sm font-bold text-primary mt-2">{currencyFormatter.format(Number(order.total_price))}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <Link to={`/track-order/${order.order_id}`} className="flex-1 py-3 bg-primary text-on-primary text-xs font-bold rounded-lg tracking-widest uppercase transition-transform active:scale-95 text-center flex items-center justify-center">
                                            {order.status === 'SHIPPED' ? 'Track Package' : 'View Details'}
                                        </Link>
                                        <button className="px-4 py-3 bg-surface-container text-primary text-xs font-bold rounded-lg transition-transform active:scale-95">
                                            <span className="material-symbols-outlined text-sm">more_horiz</span>
                                        </button>
                                    </div>
                                </section>
                            );
                        })}
                    </div>
                )}
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
