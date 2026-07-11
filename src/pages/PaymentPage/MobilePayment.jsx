export function MobilePayment({
    items, subtotal, deliveryCost, tax, total, deliveryLabel,
    selectedPaymentMethod, setSelectedPaymentMethod, handlePlaceOrder, placingOrder
}) {
    return (
        <div className="mobile-screen bg-background text-on-background font-body selection:bg-primary-fixed-dim selection:text-primary min-h-screen pb-32">
            
            <main className="pt-24 px-6 max-w-md mx-auto">
                {/*  Editorial Title  */}
                <div className="mb-10 text-center">
                    <span className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-2 block font-label font-bold">Secure Checkout</span>
                    <h2 className="font-headline text-3xl tracking-tight text-on-background">Payment Details</h2>
                </div>
                
                {/*  Payment Method Selection  */}
                <section className="space-y-4 mb-12">
                    <div className="flex items-center mb-6">
                        <div className="flex-grow h-px bg-outline-variant/20"></div>
                        <span className="px-4 text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">Select Payment Method</span>
                        <div className="flex-grow h-px bg-outline-variant/20"></div>
                    </div>

                    {/* Credit Card Option */}
                    <div className="space-y-4">
                        <label 
                            className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all ${
                                selectedPaymentMethod === 'credit_card' 
                                    ? 'bg-primary/5 ring-2 ring-primary/20' 
                                    : 'bg-surface-container-lowest ghost-border'
                            }`}
                            onClick={() => setSelectedPaymentMethod('credit_card')}
                        >
                            <input 
                                type="radio" 
                                name="mobilePaymentMethod" 
                                checked={selectedPaymentMethod === 'credit_card'}
                                onChange={() => setSelectedPaymentMethod('credit_card')}
                                className="hidden peer" 
                            />
                            <div className="w-4 h-4 rounded-full border-2 border-outline-variant flex items-center justify-center flex-shrink-0 peer-checked:border-primary">
                                {selectedPaymentMethod === 'credit_card' && <div className="w-2 h-2 rounded-full bg-primary"></div>}
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary text-base">credit_card</span>
                                <span className="text-sm font-bold">Credit or Debit Card</span>
                            </div>
                        </label>

                        {/* Card Entry Form (Shown if selected) */}
                        {selectedPaymentMethod === 'credit_card' && (
                            <div className="space-y-6 px-2 py-4 animate-in fade-in slide-in-from-top-2">
                                <div className="space-y-1">
                                    <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold ml-1">Card Number</label>
                                    <div className="relative">
                                        <input className="w-full bg-surface-container-low border-none border-b border-outline-variant/20 py-4 px-4 text-on-surface placeholder:text-outline focus:ring-0 focus:border-primary transition-all" placeholder="0000 0000 0000 0000" type="text" />
                                        <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-1">
                                            <span className="material-symbols-outlined text-outline">credit_card</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                        <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold ml-1">Expiry Date</label>
                                        <input className="w-full bg-surface-container-low border-none border-b border-outline-variant/20 py-4 px-4 text-on-surface placeholder:text-outline focus:ring-0 focus:border-primary transition-all" placeholder="MM/YY" type="text" />
                                    </div>
                                    <div className="space-y-1">
                                        <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold ml-1">CVV</label>
                                        <input className="w-full bg-surface-container-low border-none border-b border-outline-variant/20 py-4 px-4 text-on-surface placeholder:text-outline focus:ring-0 focus:border-primary transition-all" placeholder="123" type="text" />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold ml-1">Cardholder Name</label>
                                    <input className="w-full bg-surface-container-low border-none border-b border-outline-variant/20 py-4 px-4 text-on-surface placeholder:text-outline focus:ring-0 focus:border-primary transition-all uppercase" placeholder="J. DOE" type="text" />
                                </div>
                            </div>
                        )}
                    </div>

                    {/* eSewa Option */}
                    <label 
                        className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all ${
                            selectedPaymentMethod === 'esewa' 
                                ? 'bg-primary/5 ring-2 ring-primary/20' 
                                : 'bg-surface-container-lowest ghost-border'
                        }`}
                        onClick={() => setSelectedPaymentMethod('esewa')}
                    >
                        <input 
                            type="radio" 
                            name="mobilePaymentMethod" 
                            checked={selectedPaymentMethod === 'esewa'}
                            onChange={() => setSelectedPaymentMethod('esewa')}
                            className="hidden peer" 
                        />
                        <div className="w-4 h-4 rounded-full border-2 border-outline-variant flex items-center justify-center flex-shrink-0 peer-checked:border-[#60bb46]">
                            {selectedPaymentMethod === 'esewa' && <div className="w-2 h-2 rounded-full bg-[#60bb46]"></div>}
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-bold text-[#60bb46]">eSewa</span>
                            <span className="text-[10px] text-on-surface-variant">Pay securely using your eSewa wallet</span>
                        </div>
                    </label>

                    {/* Cash on Delivery Option */}
                    <label 
                        className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all ${
                            selectedPaymentMethod === 'cod' 
                                ? 'bg-primary/5 ring-2 ring-primary/20' 
                                : 'bg-surface-container-lowest ghost-border'
                        }`}
                        onClick={() => setSelectedPaymentMethod('cod')}
                    >
                        <input 
                            type="radio" 
                            name="mobilePaymentMethod" 
                            checked={selectedPaymentMethod === 'cod'}
                            onChange={() => setSelectedPaymentMethod('cod')}
                            className="hidden peer" 
                        />
                        <div className="w-4 h-4 rounded-full border-2 border-outline-variant flex items-center justify-center flex-shrink-0 peer-checked:border-primary">
                            {selectedPaymentMethod === 'cod' && <div className="w-2 h-2 rounded-full bg-primary"></div>}
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-bold text-primary">Cash on Delivery</span>
                            <span className="text-[10px] text-on-surface-variant">Pay when your order arrives</span>
                        </div>
                    </label>
                </section>
                
                {/*  Order Summary Glass Card  */}
                <section className="mt-12 p-6 bg-surface-container-low rounded-xl border border-white/40 backdrop-blur-sm">
                    <h3 className="font-headline text-lg mb-4 text-on-background">Order Summary</h3>
                    
                    <div className="space-y-4 mb-4 border-b border-outline-variant/10 pb-4">
                        {items.map((item, index) => {
                            const product = item.product || item;
                            return (
                                <div key={product.product_id || index} className="flex justify-between text-sm text-on-surface-variant">
                                    <span className="truncate pr-4">{product.name} <span className="text-xs">x{item.quantity || 1}</span></span>
                                    <span className="text-on-surface font-medium whitespace-nowrap">${(Number(product.price) * (item.quantity || 1)).toFixed(2)}</span>
                                </div>
                            )
                        })}
                    </div>

                    <div className="space-y-3">
                        <div className="flex justify-between text-sm text-on-surface-variant">
                            <span>Subtotal</span>
                            <span className="text-on-surface font-medium">${subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between text-sm text-on-surface-variant">
                            <span>Shipping ({deliveryLabel})</span>
                            <span className={`font-medium ${deliveryCost === 0 ? 'text-tertiary font-bold' : 'text-on-surface'}`}>
                                {deliveryCost === 0 ? 'Free' : `$${deliveryCost.toFixed(2)}`}
                            </span>
                        </div>
                        <div className="flex justify-between text-sm text-on-surface-variant">
                            <span>Est. Tax</span>
                            <span className="text-on-surface font-medium">${tax.toFixed(2)}</span>
                        </div>
                        <div className="pt-3 mt-3 border-t border-outline-variant/20 flex justify-between items-baseline">
                            <span className="text-[10px] uppercase tracking-widest font-bold">Total Amount</span>
                            <span className="text-2xl font-headline text-primary">${total.toFixed(2)}</span>
                        </div>
                    </div>
                </section>
                <div className="mt-10 mb-20 flex items-center justify-center gap-2 text-on-surface-variant">
                    <span className="material-symbols-outlined text-sm">lock</span>
                    <span className="text-[10px] uppercase tracking-widest font-bold">256-bit SSL Encrypted Payment</span>
                </div>
            </main>
            {/*  Bottom Action Bar (Fixed)  */}
            <div className="fixed bottom-0 left-0 w-full bg-slate-50/90 dark:bg-slate-950/90 backdrop-blur-xl px-6 py-6 pb-10 z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.04)]">
                <button 
                    onClick={handlePlaceOrder}
                    disabled={placingOrder}
                    className="w-full h-14 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-lg font-label font-bold uppercase tracking-widest text-sm hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {placingOrder ? 'Processing...' : 'Confirm Order'}
                    {!placingOrder && <span className="material-symbols-outlined text-sm">arrow_forward</span>}
                </button>
            </div>
        </div>
    );
}
