export function DesktopPayment({
    items, subtotal, deliveryCost, tax, total, deliveryLabel,
    selectedPaymentMethod, setSelectedPaymentMethod, handlePlaceOrder, placingOrder
}) {
    return (
        <div className="bg-background text-on-surface min-h-screen">
            
            <main className="max-w-screen-2xl mx-auto px-8 py-12 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    <section className="lg:col-span-7 space-y-12">
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-5xl font-serif tracking-tight">Finalize Transaction</h1>
                            <p className="text-on-surface-variant font-light max-w-lg">Your artifacts are held for 15 minutes. Secure payment processed via encrypted gateway.</p>
                        </div>
                        
                        {/* Payment Method Selection */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-4 text-xs font-bold tracking-widest uppercase text-on-surface-variant opacity-60">
                                <span>Payment Method</span>
                                <div className="h-px flex-1 bg-outline-variant opacity-20"></div>
                            </div>
                            
                            <div className="space-y-4">
                                {/* Credit Card Option */}
                                <label 
                                    className={`group relative flex flex-col gap-4 p-6 cursor-pointer transition-all rounded-lg ${
                                        selectedPaymentMethod === 'credit_card' 
                                            ? 'bg-primary/5 ring-2 ring-primary/20' 
                                            : 'bg-surface-container-low hover:bg-surface-container'
                                    }`}
                                >
                                    <div className="flex items-center gap-4" onClick={() => setSelectedPaymentMethod('credit_card')}>
                                        <input 
                                            type="radio" 
                                            name="paymentMethod" 
                                            checked={selectedPaymentMethod === 'credit_card'}
                                            onChange={() => setSelectedPaymentMethod('credit_card')}
                                            className="w-4 h-4 text-primary border-outline-variant focus:ring-0" 
                                        />
                                        <div className="flex items-center gap-3">
                                            <span className="material-symbols-outlined text-primary">credit_card</span>
                                            <span className="text-sm font-bold text-primary">Credit or Debit Card</span>
                                        </div>
                                    </div>

                                    {/* Card Form (Expands if selected) */}
                                    {selectedPaymentMethod === 'credit_card' && (
                                        <div className="pl-8 pt-4 border-t border-outline-variant/10 mt-2 space-y-6" onClick={(e) => e.stopPropagation()}>
                                            <div className="space-y-2">
                                                <label className="text-xs font-bold tracking-wider text-on-surface uppercase" htmlFor="cardholder">Cardholder Name</label>
                                                <input className="w-full bg-surface-container-lowest border-none border-b border-outline-variant/20 px-4 py-4 focus:ring-0 focus:border-primary transition-all" id="cardholder" placeholder="Enter full name" type="text" />
                                            </div>
                                            <div className="space-y-2 relative">
                                                <label className="text-xs font-bold tracking-wider text-on-surface uppercase" htmlFor="cardnumber">Card Number</label>
                                                <input className="w-full bg-surface-container-lowest border-none border-b border-outline-variant/20 px-4 py-4 focus:ring-0 focus:border-primary transition-all" id="cardnumber" placeholder="0000 0000 0000 0000" type="text" />
                                            </div>
                                            <div className="grid grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold tracking-wider text-on-surface uppercase" htmlFor="expiry">Expiry Date</label>
                                                    <input className="w-full bg-surface-container-lowest border-none border-b border-outline-variant/20 px-4 py-4 focus:ring-0 focus:border-primary transition-all" id="expiry" placeholder="MM/YY" type="text" />
                                                </div>
                                                <div className="space-y-2">
                                                    <label className="text-xs font-bold tracking-wider text-on-surface uppercase" htmlFor="cvc">CVC</label>
                                                    <input className="w-full bg-surface-container-lowest border-none border-b border-outline-variant/20 px-4 py-4 focus:ring-0 focus:border-primary transition-all" id="cvc" placeholder="***" type="text" />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </label>

                                {/* eSewa Option */}
                                <label 
                                    className={`group relative flex items-center justify-between p-6 cursor-pointer transition-all rounded-lg ${
                                        selectedPaymentMethod === 'esewa' 
                                            ? 'bg-primary/5 ring-2 ring-primary/20' 
                                            : 'bg-surface-container-low hover:bg-surface-container'
                                    }`}
                                    onClick={() => setSelectedPaymentMethod('esewa')}
                                >
                                    <div className="flex items-center gap-4">
                                        <input 
                                            type="radio" 
                                            name="paymentMethod" 
                                            checked={selectedPaymentMethod === 'esewa'}
                                            onChange={() => setSelectedPaymentMethod('esewa')}
                                            className="w-4 h-4 text-primary border-outline-variant focus:ring-0" 
                                        />
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold text-[#60bb46]">eSewa</span>
                                            <span className="text-xs text-on-surface-variant">Pay securely using your eSewa wallet</span>
                                        </div>
                                    </div>
                                </label>

                                {/* Cash on Delivery Option */}
                                <label 
                                    className={`group relative flex items-center justify-between p-6 cursor-pointer transition-all rounded-lg ${
                                        selectedPaymentMethod === 'cod' 
                                            ? 'bg-primary/5 ring-2 ring-primary/20' 
                                            : 'bg-surface-container-low hover:bg-surface-container'
                                    }`}
                                    onClick={() => setSelectedPaymentMethod('cod')}
                                >
                                    <div className="flex items-center gap-4">
                                        <input 
                                            type="radio" 
                                            name="paymentMethod" 
                                            checked={selectedPaymentMethod === 'cod'}
                                            onChange={() => setSelectedPaymentMethod('cod')}
                                            className="w-4 h-4 text-primary border-outline-variant focus:ring-0" 
                                        />
                                        <div className="flex flex-col">
                                            <span className="text-sm font-bold text-primary">Cash on Delivery</span>
                                            <span className="text-xs text-on-surface-variant">Pay when your order arrives</span>
                                        </div>
                                    </div>
                                </label>
                            </div>

                            <div className="pt-8 flex flex-col gap-6">
                                <button 
                                    onClick={handlePlaceOrder}
                                    disabled={placingOrder}
                                    className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary py-5 rounded-lg text-sm font-bold tracking-widest uppercase shadow-lg shadow-primary/10 hover:opacity-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {placingOrder ? 'Processing...' : `Confirm Order — $${total.toFixed(2)}`}
                                </button>
                                <div className="flex items-center justify-center gap-2 text-on-surface-variant text-xs">
                                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>lock</span>
                                    <span>SSL Encrypted Transaction. Payment information is never stored.</span>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    <aside className="lg:col-span-5 bg-surface-container-low p-8 md:p-12 rounded-xl sticky top-32">
                        <h2 className="text-2xl font-serif mb-8 border-b border-outline-variant/20 pb-4">Order Summary</h2>
                        <div className="space-y-8 mb-12">
                            {items.map((item, index) => {
                                const product = item.product || item;
                                const imageUrl = product.images?.[0]?.image_url || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30';
                                return (
                                    <div key={product.product_id || index} className="flex gap-6">
                                        <div className="w-24 h-32 bg-surface-variant rounded-md overflow-hidden flex-shrink-0">
                                            <img alt={product.name} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src={imageUrl} />
                                        </div>
                                        <div className="flex flex-col justify-between py-1">
                                            <div>
                                                <p className="text-xs text-tertiary font-bold tracking-widest uppercase mb-1">{product.category_name || 'Product'}</p>
                                                <h3 className="text-lg font-serif">{product.name}</h3>
                                                <p className="text-sm text-on-surface-variant mt-1">Qty: {item.quantity || 1}</p>
                                            </div>
                                            <p className="font-bold text-primary">${Number(product.price).toFixed(2)}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="space-y-4 border-t border-outline-variant/20 pt-8">
                            <div className="flex justify-between text-sm text-on-surface-variant">
                                <span>Subtotal</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-sm text-on-surface-variant">
                                <span>Shipping ({deliveryLabel})</span>
                                <span className={deliveryCost === 0 ? "text-tertiary font-bold" : ""}>
                                    {deliveryCost === 0 ? 'Complimentary' : `$${deliveryCost.toFixed(2)}`}
                                </span>
                            </div>
                            <div className="flex justify-between text-sm text-on-surface-variant">
                                <span>Est. Tax</span>
                                <span>${tax.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-lg font-bold text-primary pt-4 border-t border-outline-variant/10">
                                <span>Total</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                        </div>
                        <div className="mt-12 grid grid-cols-3 gap-4">
                            <div className="flex flex-col items-center gap-2 opacity-40">
                                <span className="material-symbols-outlined text-2xl">verified</span>
                                <span className="text-[10px] font-bold uppercase tracking-tighter">Verified</span>
                            </div>
                            <div className="flex flex-col items-center gap-2 opacity-40">
                                <span className="material-symbols-outlined text-2xl">shield</span>
                                <span className="text-[10px] font-bold uppercase tracking-tighter">Secure</span>
                            </div>
                            <div className="flex flex-col items-center gap-2 opacity-40">
                                <span className="material-symbols-outlined text-2xl">eco</span>
                                <span className="text-[10px] font-bold uppercase tracking-tighter">Ethical</span>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
            <footer className="bg-slate-50 py-16 mt-20">
                <div className="max-w-screen-2xl mx-auto px-8 mt-16 pt-8 border-t border-slate-200">
                    <p className="text-[10px] font-bold tracking-[0.2em] text-slate-400">© 2024 ETHOS CURATED. ALL ARTIFACTS RESERVED.</p>
                </div>
            </footer>
        </div>
    )
}