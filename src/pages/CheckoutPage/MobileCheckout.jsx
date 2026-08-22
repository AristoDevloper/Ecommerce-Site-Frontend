export function MobileCheckout({
    items, isLoading, useDefaultAddress, setUseDefaultAddress,
    defaultAddress, profileLoading, newAddress, handleNewAddressChange,
    selectedDelivery, setSelectedDelivery, deliveryOptions,
    subtotal, deliveryCost, tax, total, handleContinueToPayment
}) {
    return (
        <div className="bg-background text-on-background selection:bg-primary/10 mobile-screen">
            
            <main className="pt-24 pb-52 px-6 max-w-lg mx-auto">
                {/*  Progress Indicator  */}
                <div className="flex justify-between items-center mb-10 px-2">
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">1</div>
                        <span className="text-[10px] uppercase tracking-widest font-bold text-primary">Shipping</span>
                    </div>
                    <div className="flex-1 h-[1px] bg-outline-variant/20 mx-4 mb-6"></div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">2</div>
                        <span className="text-[10px] uppercase tracking-widest font-bold text-primary">Delivery</span>
                    </div>
                    <div className="flex-1 h-[1px] bg-outline-variant/20 mx-4 mb-6"></div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-8 h-8 rounded-full border border-outline-variant/30 text-outline-variant flex items-center justify-center text-xs font-bold">3</div>
                        <span className="text-[10px] uppercase tracking-widest text-outline">Payment</span>
                    </div>
                </div>

                {/*  Order Summary Toggle  */}
                <div className="mb-8 p-5 bg-surface-container-low rounded-xl">
                    <details className="group">
                        <summary className="list-none flex justify-between items-center cursor-pointer">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">local_mall</span>
                                <span className="font-bold text-sm">Order Summary ({items.length} {items.length === 1 ? 'item' : 'items'})</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-bold text-primary">${subtotal.toFixed(2)}</span>
                                <span className="material-symbols-outlined text-sm transition-transform group-open:rotate-180">expand_more</span>
                            </div>
                        </summary>
                        <div className="mt-6 space-y-4 border-t border-outline-variant/10 pt-4">
                            {isLoading ? (
                                <div className="flex items-center gap-3 py-4">
                                    <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                                    <span className="text-xs text-on-surface-variant">Loading items...</span>
                                </div>
                            ) : items.length === 0 ? (
                                <p className="text-xs text-on-surface-variant py-2">No items in your order.</p>
                            ) : (
                                <>
                                    {items.map((item, index) => {
                                        const product = item.product || item;
                                        const imageUrl = product.images?.[0]?.image_url || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30';
                                        return (
                                            <div key={product.product_id || index} className="flex gap-4">
                                                <div className="w-16 h-16 bg-surface-variant rounded-md overflow-hidden flex-shrink-0">
                                                    <img className="w-full h-full object-cover" alt={product.name} src={imageUrl} />
                                                </div>
                                                <div className="flex-1">
                                                    <p className="text-xs font-bold uppercase tracking-wider text-outline">{product.category_name || 'Product'}</p>
                                                    <p className="text-sm font-headline">{product.name}</p>
                                                    <p className="text-xs text-on-surface-variant mt-1">Qty: {item.quantity || 1} — ${Number(product.price).toFixed(2)}</p>
                                                </div>
                                            </div>
                                        );
                                    })}
                                    <div className="pt-4 space-y-2 border-t border-outline-variant/10">
                                        <div className="flex justify-between text-xs text-on-surface-variant">
                                            <span>Subtotal</span>
                                            <span>${subtotal.toFixed(2)}</span>
                                        </div>
                                        <div className="flex justify-between text-xs text-on-surface-variant">
                                            <span>Shipping</span>
                                            <span className={deliveryCost === 0 ? 'text-tertiary font-bold' : ''}>
                                                {deliveryCost === 0 ? 'Free' : `$${deliveryCost.toFixed(2)}`}
                                            </span>
                                        </div>
                                        <div className="flex justify-between text-xs text-on-surface-variant">
                                            <span>Est. Tax</span>
                                            <span>${tax.toFixed(2)}</span>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </details>
                </div>

                {/*  Section 1: Shipping Address  */}
                <section className="mb-12">
                    <h2 className="text-2xl mb-6 tracking-tight">Shipping Address</h2>
                    
                    {profileLoading ? (
                        <div className="flex items-center gap-3 py-4">
                            <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                            <span className="text-xs text-on-surface-variant">Loading saved address...</span>
                        </div>
                    ) : (
                        <>
                            {defaultAddress && (
                                <div className="space-y-3 mb-6">
                                    {/* Default address card */}
                                    <label 
                                        className={`flex items-start gap-4 p-4 rounded-xl cursor-pointer transition-all ${
                                            useDefaultAddress 
                                                ? 'bg-primary/5 ring-2 ring-primary/20' 
                                                : 'bg-surface-container-lowest ghost-border'
                                        }`}
                                        onClick={() => setUseDefaultAddress(true)}
                                    >
                                        <input 
                                            type="radio" 
                                            name="mobileAddressChoice" 
                                            checked={useDefaultAddress} 
                                            onChange={() => setUseDefaultAddress(true)}
                                            className="hidden peer" 
                                        />
                                        <div className="w-4 h-4 rounded-full border-2 border-outline-variant flex items-center justify-center mt-0.5 flex-shrink-0 peer-checked:border-primary">
                                            {useDefaultAddress && <div className="w-2 h-2 rounded-full bg-primary"></div>}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-1">
                                                <span className="text-sm font-bold">Default Address</span>
                                                <span className="text-[9px] px-1.5 py-0.5 bg-tertiary/10 text-tertiary rounded-full font-bold uppercase tracking-wider">Saved</span>
                                            </div>
                                            <p className="text-xs text-on-surface-variant">{defaultAddress.name}</p>
                                            <p className="text-xs text-on-surface-variant">{defaultAddress.address}</p>
                                            {defaultAddress.phone && (
                                                <p className="text-xs text-on-surface-variant/60 mt-1">{defaultAddress.phone}</p>
                                            )}
                                        </div>
                                    </label>

                                    {/* New address toggle */}
                                    <label 
                                        className={`flex items-center gap-4 p-4 rounded-xl cursor-pointer transition-all ${
                                            !useDefaultAddress 
                                                ? 'bg-primary/5 ring-2 ring-primary/20' 
                                                : 'bg-surface-container-lowest ghost-border'
                                        }`}
                                        onClick={() => setUseDefaultAddress(false)}
                                    >
                                        <input 
                                            type="radio" 
                                            name="mobileAddressChoice" 
                                            checked={!useDefaultAddress} 
                                            onChange={() => setUseDefaultAddress(false)}
                                            className="hidden peer" 
                                        />
                                        <div className="w-4 h-4 rounded-full border-2 border-outline-variant flex items-center justify-center flex-shrink-0 peer-checked:border-primary">
                                            {!useDefaultAddress && <div className="w-2 h-2 rounded-full bg-primary"></div>}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-primary text-base">add_location</span>
                                            <span className="text-sm font-bold">Use a different address</span>
                                        </div>
                                    </label>
                                </div>
                            )}

                            {/* New address form */}
                            {!useDefaultAddress && (
                                <form className="space-y-6">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="relative group">
                                            <label className="absolute -top-2 left-3 bg-background px-1 text-[10px] uppercase tracking-widest font-bold text-outline transition-colors group-focus-within:text-primary">First Name</label>
                                            <input 
                                                className="w-full bg-transparent ghost-border rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-primary transition-colors" 
                                                placeholder="First name" 
                                                type="text"
                                                value={newAddress.firstName}
                                                onChange={(e) => handleNewAddressChange('firstName', e.target.value)}
                                            />
                                        </div>
                                        <div className="relative group">
                                            <label className="absolute -top-2 left-3 bg-background px-1 text-[10px] uppercase tracking-widest font-bold text-outline transition-colors group-focus-within:text-primary">Last Name</label>
                                            <input 
                                                className="w-full bg-transparent ghost-border rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-primary transition-colors" 
                                                placeholder="Last name" 
                                                type="text"
                                                value={newAddress.lastName}
                                                onChange={(e) => handleNewAddressChange('lastName', e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="relative group">
                                        <label className="absolute -top-2 left-3 bg-background px-1 text-[10px] uppercase tracking-widest font-bold text-outline transition-colors group-focus-within:text-primary">Street Address</label>
                                        <input 
                                            className="w-full bg-transparent ghost-border rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-primary transition-colors" 
                                            placeholder="Street address" 
                                            type="text"
                                            value={newAddress.street}
                                            onChange={(e) => handleNewAddressChange('street', e.target.value)}
                                        />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="relative group">
                                            <label className="absolute -top-2 left-3 bg-background px-1 text-[10px] uppercase tracking-widest font-bold text-outline transition-colors group-focus-within:text-primary">City</label>
                                            <input 
                                                className="w-full bg-transparent ghost-border rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-primary transition-colors" 
                                                placeholder="City" 
                                                type="text"
                                                value={newAddress.city}
                                                onChange={(e) => handleNewAddressChange('city', e.target.value)}
                                            />
                                        </div>
                                        <div className="relative group">
                                            <label className="absolute -top-2 left-3 bg-background px-1 text-[10px] uppercase tracking-widest font-bold text-outline transition-colors group-focus-within:text-primary">Postal Code</label>
                                            <input 
                                                className="w-full bg-transparent ghost-border rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-primary transition-colors" 
                                                placeholder="Postal code" 
                                                type="text"
                                                value={newAddress.postalCode}
                                                onChange={(e) => handleNewAddressChange('postalCode', e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="relative group">
                                        <label className="absolute -top-2 left-3 bg-background px-1 text-[10px] uppercase tracking-widest font-bold text-outline transition-colors group-focus-within:text-primary">Phone</label>
                                        <input 
                                            className="w-full bg-transparent ghost-border rounded-lg px-4 py-4 text-sm focus:outline-none focus:border-primary transition-colors" 
                                            placeholder="+1 (555) 000-0000" 
                                            type="tel"
                                            value={newAddress.phone}
                                            onChange={(e) => handleNewAddressChange('phone', e.target.value)}
                                        />
                                    </div>
                                </form>
                            )}
                        </>
                    )}
                </section>

                {/*  Section 2: Delivery Speed Selection  */}
                <section className="mb-12">
                    <h2 className="text-2xl mb-6 tracking-tight">Delivery Method</h2>
                    <div className="space-y-4">
                        {deliveryOptions.map((option) => (
                            <label 
                                key={option.id}
                                className={`flex items-center justify-between p-4 rounded-xl cursor-pointer transition-all relative ${
                                    selectedDelivery === option.id 
                                        ? 'bg-primary/5 ring-2 ring-primary/20' 
                                        : 'bg-surface-container-lowest ghost-border hover:bg-surface-container-low'
                                }`}
                                onClick={() => setSelectedDelivery(option.id)}
                            >
                                <input 
                                    checked={selectedDelivery === option.id}
                                    onChange={() => setSelectedDelivery(option.id)}
                                    className="hidden peer" 
                                    name="mobileDelivery" 
                                    type="radio" 
                                />
                                <div className="flex items-center gap-4">
                                    <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                                        selectedDelivery === option.id ? 'border-primary' : 'border-outline-variant'
                                    }`}>
                                        {selectedDelivery === option.id && <div className="w-2 h-2 rounded-full bg-primary"></div>}
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold">{option.label}</p>
                                        <p className="text-xs text-on-surface-variant">{option.description}</p>
                                    </div>
                                </div>
                                <span className={`text-sm font-bold ${option.price === 0 ? 'text-tertiary' : ''}`}>
                                    {option.price === 0 ? 'Free' : `$${option.price.toFixed(2)}`}
                                </span>
                            </label>
                        ))}
                    </div>
                </section>
            </main>

            {/*  Fixed Bottom CTA  */}
            <div className="fixed bottom-20 left-0 w-full bg-surface-bright/95 backdrop-blur-md px-6 py-6 shadow-[0_-10px_30px_rgba(0,0,0,0.03)] z-40">
                <div className="flex items-center justify-between mb-4">
                    <div>
                        <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-outline">Total Amount</p>
                        <p className="text-xl font-headline font-bold text-primary">${total.toFixed(2)}</p>
                    </div>
                    <div className="text-right">
                        {deliveryCost === 0 && <p className="text-xs text-tertiary font-bold">Free shipping</p>}
                        <p className="text-xs text-on-surface-variant/60 italic">Includes est. tax</p>
                    </div>
                </div>
                <button 
                    onClick={handleContinueToPayment}
                    disabled={isLoading || items.length === 0}
                    className="w-full bg-gradient-to-r from-primary to-primary-container text-white py-4 rounded-lg font-bold text-sm tracking-widest uppercase flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    Continue to Payment
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
            </div>
        </div>
    )
}