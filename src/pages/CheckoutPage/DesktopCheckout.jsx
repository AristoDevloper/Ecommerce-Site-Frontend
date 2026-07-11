export function DesktopCheckout({
    items, isLoading, useDefaultAddress, setUseDefaultAddress,
    defaultAddress, profileLoading, newAddress, handleNewAddressChange,
    selectedDelivery, setSelectedDelivery, deliveryOptions,
    subtotal, deliveryCost, tax, total, handleContinueToPayment
}) {
    return (
        <div className="bg-background text-on-surface min-h-screen desktop-screen">
            
            <main className="max-w-screen-2xl mx-auto px-8 py-12 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/*  Left Column: Checkout Steps */}
                    <div className="lg:col-span-7 space-y-16">
                        
                        {/*  Step 1: Shipping Address */}
                        <section>
                            <h2 className="text-3xl font-serif text-primary mb-10 leading-tight">Shipping Address</h2>
                            
                            {/* Address Toggle */}
                            {profileLoading ? (
                                <div className="flex items-center gap-3 py-6">
                                    <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                                    <span className="text-sm text-on-surface-variant">Loading your saved address...</span>
                                </div>
                            ) : (
                                <>
                                    {defaultAddress && (
                                        <div className="mb-8 space-y-4">
                                            {/* Default address card */}
                                            <label 
                                                className={`group relative flex items-start gap-4 p-6 cursor-pointer transition-all rounded-lg ${
                                                    useDefaultAddress 
                                                        ? 'bg-primary/5 ring-2 ring-primary/20' 
                                                        : 'bg-surface-container-low hover:bg-surface-container'
                                                }`}
                                                onClick={() => setUseDefaultAddress(true)}
                                            >
                                                <input 
                                                    type="radio" 
                                                    name="addressChoice" 
                                                    checked={useDefaultAddress} 
                                                    onChange={() => setUseDefaultAddress(true)}
                                                    className="w-4 h-4 mt-1 text-primary border-outline-variant focus:ring-0" 
                                                />
                                                <div className="flex-1">
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <span className="text-sm font-bold text-primary">Default Address</span>
                                                        <span className="text-[10px] px-2 py-0.5 bg-tertiary/10 text-tertiary rounded-full font-bold tracking-wider uppercase">Saved</span>
                                                    </div>
                                                    <p className="text-sm text-on-surface-variant">{defaultAddress.name}</p>
                                                    <p className="text-sm text-on-surface-variant">{defaultAddress.address}</p>
                                                    {defaultAddress.phone && (
                                                        <p className="text-xs text-on-surface-variant/60 mt-1">{defaultAddress.phone}</p>
                                                    )}
                                                </div>
                                            </label>

                                            {/* New address option */}
                                            <label 
                                                className={`group relative flex items-center gap-4 p-6 cursor-pointer transition-all rounded-lg ${
                                                    !useDefaultAddress 
                                                        ? 'bg-primary/5 ring-2 ring-primary/20' 
                                                        : 'bg-surface-container-low hover:bg-surface-container'
                                                }`}
                                                onClick={() => setUseDefaultAddress(false)}
                                            >
                                                <input 
                                                    type="radio" 
                                                    name="addressChoice" 
                                                    checked={!useDefaultAddress} 
                                                    onChange={() => setUseDefaultAddress(false)}
                                                    className="w-4 h-4 text-primary border-outline-variant focus:ring-0" 
                                                />
                                                <div className="flex items-center gap-2">
                                                    <span className="material-symbols-outlined text-primary text-lg">add_location</span>
                                                    <span className="text-sm font-bold text-primary">Use a different address</span>
                                                </div>
                                            </label>
                                        </div>
                                    )}

                                    {/* New address form (shown when no default or user chose new) */}
                                    {!useDefaultAddress && (
                                        <form className="space-y-8">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                <div className="flex flex-col">
                                                    <label className="text-[10px] font-label font-bold tracking-widest text-on-surface-variant mb-2">FIRST NAME</label>
                                                    <input 
                                                        className="ghost-input py-3 text-sm focus:ring-0" 
                                                        placeholder="First name" 
                                                        type="text" 
                                                        value={newAddress.firstName}
                                                        onChange={(e) => handleNewAddressChange('firstName', e.target.value)}
                                                    />
                                                </div>
                                                <div className="flex flex-col">
                                                    <label className="text-[10px] font-label font-bold tracking-widest text-on-surface-variant mb-2">LAST NAME</label>
                                                    <input 
                                                        className="ghost-input py-3 text-sm focus:ring-0" 
                                                        placeholder="Last name" 
                                                        type="text"
                                                        value={newAddress.lastName}
                                                        onChange={(e) => handleNewAddressChange('lastName', e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex flex-col">
                                                <label className="text-[10px] font-label font-bold tracking-widest text-on-surface-variant mb-2">STREET ADDRESS</label>
                                                <input 
                                                    className="ghost-input py-3 text-sm focus:ring-0" 
                                                    placeholder="Street address" 
                                                    type="text"
                                                    value={newAddress.street}
                                                    onChange={(e) => handleNewAddressChange('street', e.target.value)}
                                                />
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                                <div className="flex flex-col md:col-span-1">
                                                    <label className="text-[10px] font-label font-bold tracking-widest text-on-surface-variant mb-2">CITY</label>
                                                    <input 
                                                        className="ghost-input py-3 text-sm focus:ring-0" 
                                                        placeholder="City" 
                                                        type="text"
                                                        value={newAddress.city}
                                                        onChange={(e) => handleNewAddressChange('city', e.target.value)}
                                                    />
                                                </div>
                                                <div className="flex flex-col">
                                                    <label className="text-[10px] font-label font-bold tracking-widest text-on-surface-variant mb-2">STATE / PROVINCE</label>
                                                    <input 
                                                        className="ghost-input py-3 text-sm focus:ring-0" 
                                                        placeholder="State" 
                                                        type="text"
                                                        value={newAddress.state}
                                                        onChange={(e) => handleNewAddressChange('state', e.target.value)}
                                                    />
                                                </div>
                                                <div className="flex flex-col">
                                                    <label className="text-[10px] font-label font-bold tracking-widest text-on-surface-variant mb-2">POSTAL CODE</label>
                                                    <input 
                                                        className="ghost-input py-3 text-sm focus:ring-0" 
                                                        placeholder="Postal code" 
                                                        type="text"
                                                        value={newAddress.postalCode}
                                                        onChange={(e) => handleNewAddressChange('postalCode', e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="flex flex-col">
                                                <label className="text-[10px] font-label font-bold tracking-widest text-on-surface-variant mb-2">PHONE FOR DELIVERY NOTIFICATIONS</label>
                                                <input 
                                                    className="ghost-input py-3 text-sm focus:ring-0" 
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

                        {/*  Step 2: Delivery Options */}
                        <section>
                            <h2 className="text-3xl font-serif text-primary mb-10 leading-tight">Delivery Speed</h2>
                            <div className="space-y-4">
                                {deliveryOptions.map((option) => (
                                    <label 
                                        key={option.id}
                                        className={`group relative flex items-center justify-between p-6 cursor-pointer transition-all rounded-lg ${
                                            selectedDelivery === option.id 
                                                ? 'bg-primary/5 ring-2 ring-primary/20' 
                                                : 'bg-surface-container-low hover:bg-surface-container'
                                        }`}
                                        onClick={() => setSelectedDelivery(option.id)}
                                    >
                                        <div className="flex items-center gap-4">
                                            <input 
                                                checked={selectedDelivery === option.id} 
                                                onChange={() => setSelectedDelivery(option.id)}
                                                className="w-4 h-4 text-primary border-outline-variant focus:ring-0" 
                                                name="delivery" 
                                                type="radio" 
                                            />
                                            <div className="flex flex-col">
                                                <span className="text-sm font-bold text-primary">{option.label}</span>
                                                <span className="text-xs text-on-surface-variant">{option.description}</span>
                                            </div>
                                        </div>
                                        <span className={`text-sm font-bold ${option.price === 0 ? 'text-tertiary' : 'text-primary'}`}>
                                            {option.price === 0 ? 'Free' : `$${option.price.toFixed(2)}`}
                                        </span>
                                    </label>
                                ))}
                            </div>
                        </section>

                        {/*  Action Button */}
                        <div className="pt-8 border-t border-outline-variant/10">
                            <button 
                                onClick={handleContinueToPayment}
                                disabled={isLoading || items.length === 0}
                                className="w-full md:w-auto px-12 py-5 bg-gradient-to-r from-primary to-primary-container text-on-primary text-xs font-label font-bold tracking-[0.2em] rounded transition-transform hover:scale-[1.01] active:scale-95 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                CONTINUE TO PAYMENT
                            </button>
                            <p className="mt-4 text-[10px] text-on-surface-variant/60 font-label italic">You will choose your payment method on the next step.</p>
                        </div>
                    </div>

                    {/*  Right Column: Sidebar Summary */}
                    <aside className="lg:col-span-5 sticky top-32">
                        <div className="bg-surface-container-low p-10 rounded-xl space-y-10">
                            <h3 className="text-xl font-serif text-primary">Order Summary</h3>
                            
                            {/*  Item List */}
                            <div className="space-y-8">
                                {isLoading ? (
                                    <div className="flex items-center gap-3 py-6">
                                        <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                                        <span className="text-sm text-on-surface-variant">Loading items...</span>
                                    </div>
                                ) : items.length === 0 ? (
                                    <p className="text-sm text-on-surface-variant py-4">No items in your order.</p>
                                ) : (
                                    items.map((item, index) => {
                                        const product = item.product || item;
                                        const imageUrl = product.images?.[0]?.image_url || 'https://images.unsplash.com/photo-1523275335684-37898b6baf30';
                                        return (
                                            <div key={product.product_id || index} className="flex gap-6 items-center">
                                                <div className="w-24 h-32 bg-surface-variant rounded-md overflow-hidden flex-shrink-0">
                                                    <img 
                                                        alt={product.name} 
                                                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" 
                                                        src={imageUrl} 
                                                    />
                                                </div>
                                                <div className="flex flex-col justify-between h-full py-1">
                                                    <div>
                                                        <h4 className="text-sm font-bold text-primary leading-tight">{product.name}</h4>
                                                        <p className="text-xs text-on-surface-variant mt-1">Qty: {item.quantity || 1}</p>
                                                    </div>
                                                    <div className="mt-auto">
                                                        <span className="text-sm font-bold text-primary">${Number(product.price).toFixed(2)}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })
                                )}
                            </div>

                            {/*  Financials */}
                            <div className="pt-10 border-t border-outline-variant/20 space-y-4">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-on-surface-variant font-label">Subtotal</span>
                                    <span className="text-primary font-bold">${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-on-surface-variant font-label">Shipping</span>
                                    <span className={`font-bold ${deliveryCost === 0 ? 'text-tertiary' : 'text-primary'}`}>
                                        {deliveryCost === 0 ? 'Complimentary' : `$${deliveryCost.toFixed(2)}`}
                                    </span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-on-surface-variant font-label">Est. Taxes</span>
                                    <span className="text-primary font-bold">${tax.toFixed(2)}</span>
                                </div>
                                <div className="pt-6 border-t border-primary/10 flex justify-between items-end">
                                    <div className="flex flex-col">
                                        <span className="text-[10px] font-label font-extrabold tracking-widest text-on-surface-variant">TOTAL DUE</span>
                                        <span className="text-3xl font-serif text-primary mt-1">${total.toFixed(2)}</span>
                                    </div>
                                    <span className="text-[10px] font-label text-on-surface-variant italic mb-1">USD</span>
                                </div>
                            </div>
                        </div>

                        {/*  Trust Badge */}
                        <div className="mt-8 flex items-center justify-center gap-6 opacity-30 grayscale">
                            <span className="material-symbols-outlined text-4xl">local_shipping</span>
                            <span className="material-symbols-outlined text-4xl">verified_user</span>
                            <span className="material-symbols-outlined text-4xl">sustainability</span>
                        </div>
                    </aside>
                </div>
            </main>

            {/*  Footer */}
            <footer className="w-full py-16 bg-slate-50 mt-20">
                <div className="max-w-screen-2xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="font-serif text-xl text-primary leading-relaxed max-w-md">
                            "Design is not just what it looks like and feels like. Design is how it works."
                        </p>
                        <p className="text-[10px] font-label font-bold tracking-widest mt-4 text-on-surface-variant">© 2024 ETHOS CURATED. ALL ARTIFACTS RESERVED.</p>
                    </div>
                    <div className="flex md:justify-end gap-12 text-xs font-label tracking-widest text-on-surface-variant">
                        <a className="hover:text-primary transition-colors" href="#">PRIVACY POLICY</a>
                        <a className="hover:text-primary transition-colors" href="#">TERMS OF SERVICE</a>
                        <a className="hover:text-primary transition-colors" href="#">CONTACT GALLERY</a>
                    </div>
                </div>
            </footer>
        </div>
    )
}