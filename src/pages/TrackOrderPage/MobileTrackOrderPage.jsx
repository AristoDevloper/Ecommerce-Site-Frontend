export function MobileTrackOrderPage() {
    return (
        <div className="bg-background text-on-background selection:bg-primary-fixed selection:text-on-primary-fixed">
            
            <main className="pt-20 pb-28 px-4 md:max-w-md mx-auto">
                {/* Page Title */}
                <section className="mt-4 mb-8">
                    <span className="text-[10px] uppercase tracking-widest font-bold text-tertiary mb-2 block">Order #ET-94210</span>
                    <h2 className="text-3xl font-serif font-bold tracking-tight text-primary">Arriving Today</h2>
                    <p className="text-sm text-on-surface-variant mt-1">Expected between 2:00 PM – 5:00 PM</p>
                </section>
                {/* Live Map Segment */}
                <section className="mb-8 overflow-hidden rounded-xl bg-surface-container-low">
                    <div className="relative h-48 w-full">
                        <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuTXj7Ou8Pn2aAMgS712372SwI-S_QiFC_UaVTSxeA4iKwfmsaldKOnFPzOjvD4nSIVSZKf-Meo8-COvrQaLoItI1KPE8bBl5te-PurRkvHWtLo0b6LUYA8rGek4Wk4rfQOubCKf38CY1G2EG9T3YQ-0L8uDxpt3o8WSqWulQmEbu63ydTiTNWGIT0v5n4AnHKeSRjjmPWeLmlNb1ehOqCh-lZOwp_wP3ki2Wn484q2xuS0DludysVvxL8gw9jBvwXZmdD7pHd10QH" alt="Map" />
                        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="relative">
                                <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-25"></div>
                                <div className="relative bg-primary text-white p-2 rounded-full shadow-lg">
                                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-surface-container-highest overflow-hidden">
                                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbZQg7bai0qFLa-iGW27tAzj-7xzi_MTQRzzstXK9Lk5w66P_SBPZ1ZInk05fYd9XDj6XggEOK0I45iUMGWtuB__bon4WFZ11Inl5MLu__M99DKmvAqJp8kduDp6d9j6Rp2zSI-dtK_hOHW4kTJjt-Z3FHuxoG0G6E11rBbrJkE5f0DOH-p7NlNZO7OkucbDl5NNbULC37V6_xVFnEjwk_gaTbLOnD7F9cu1kkne6y6iDpFwZOnqr4iM2V_Pq08F1eHDWkOAJ8_Hfr" alt="Courier" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-on-surface">Marcus is 3 stops away</p>
                                <p className="text-[10px] text-on-surface-variant uppercase tracking-wider">Electric Van • Clean Delivery</p>
                            </div>
                        </div>
                        <button className="bg-primary text-white rounded-lg px-3 py-2 text-xs font-bold active:scale-95 transition-transform">Call</button>
                    </div>
                </section>
                {/* Visual Progress Tracker */}
                <section className="mb-10 px-2">
                    <div className="flex flex-col space-y-6 relative">
                        {/* Vertical Line */}
                        <div className="absolute left-4 top-2 bottom-2 w-px bg-outline-variant/30"></div>
                        {/* Status Items */}
                        <div className="flex gap-6 items-start relative">
                            <div className="z-10 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
                                <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                            </div>
                            <div className="pt-1">
                                <h4 className="text-sm font-bold text-primary">Order Confirmed</h4>
                                <p className="text-xs text-on-surface-variant">May 12, 10:30 AM</p>
                            </div>
                        </div>
                        <div className="flex gap-6 items-start relative">
                            <div className="z-10 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white shrink-0">
                                <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                            </div>
                            <div className="pt-1">
                                <h4 className="text-sm font-bold text-primary">Quality Inspection</h4>
                                <p className="text-xs text-on-surface-variant">May 12, 11:45 AM</p>
                            </div>
                        </div>
                        <div className="flex gap-6 items-start relative">
                            <div className="z-10 w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white ring-8 ring-background ring-opacity-100 shrink-0">
                                <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>local_shipping</span>
                            </div>
                            <div className="pt-1">
                                <h4 className="text-sm font-bold text-primary">Out for Delivery</h4>
                                <p className="text-xs text-tertiary font-medium">In transit • 1:15 PM</p>
                            </div>
                        </div>
                        <div className="flex gap-6 items-start relative opacity-40">
                            <div className="z-10 w-8 h-8 rounded-full bg-surface-container-highest border border-outline-variant/20 flex items-center justify-center text-on-surface-variant shrink-0">
                                <span className="material-symbols-outlined text-lg">package_2</span>
                            </div>
                            <div className="pt-1">
                                <h4 className="text-sm font-bold text-on-surface">Delivered</h4>
                                <p className="text-xs text-on-surface-variant">Pending</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Order Manifest */}
                <section className="mb-8">
                    <div className="flex items-center justify-between mb-4 border-b border-outline-variant/10 pb-2">
                        <h3 className="text-xs font-extrabold uppercase tracking-widest text-on-surface">Order Manifest</h3>
                        <span className="text-xs text-on-surface-variant">3 Items</span>
                    </div>
                    <div className="space-y-4">
                        {/* Item 1 */}
                        <div className="flex items-center gap-4 bg-surface-container-lowest p-3 rounded-lg">
                            <div className="w-16 h-16 rounded-md bg-surface-variant overflow-hidden shrink-0">
                                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDP0-uPdiGd5pGdgiED5msfHpbr_ZKONtiOzS0bOTEDzzhzkdEBkHrT7_AYH1J7c7OR2Tok1S6EhJOZfVH8FSRICfusHrJjF1WipJDajGiO6G7PNSCOO9l-maMqASq5FTuK1fRoMrnZ3JaIedzEPO146hofsck_2uroV9Vnts0eFPE8Bt2itdMaBDscslx5BbC7mxlip7L7gQ7if0PHulodK0QQSlKlBDThc0fnN9tIcv2kKW439KeBKNfHpFLWhTInlIWsjAw4cYke" alt="Archetype Wristwatch" />
                            </div>
                            <div className="flex-1">
                                <h5 className="text-sm font-bold text-primary">Archetype Wristwatch</h5>
                                <p className="text-[10px] text-on-surface-variant uppercase tracking-tighter">Obsidian / 42mm</p>
                            </div>
                            <p className="text-sm font-serif font-bold text-primary">$240</p>
                        </div>
                        {/* Item 2 */}
                        <div className="flex items-center gap-4 bg-surface-container-lowest p-3 rounded-lg">
                            <div className="w-16 h-16 rounded-md bg-surface-variant overflow-hidden shrink-0">
                                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqAx20jQxiiuADfDNRYJYRdEzosMf7fUUaGBhW-ZgqvocBiVjSvp6IUTf0Df1BtTydG7HRMiQqXubVbvOsJNggG2wNsksXN18ECvhp8WTSXmeAPnVAKvIziPCfCdrPrfRn2bUXVHp7wCmfq5yAyHKAxFP7yj-wVTnpUAOndSMnH-LDvHsw2xLZeQ3lXJKunM6I_VBP2I1TC6sL0wcG-4TuVipQkiUMVu5TzAWAjxDpz116Vjjf6Xow6pPM9aKOKibs9-YoylCoK24W" alt="Stratus Runners" />
                            </div>
                            <div className="flex-1">
                                <h5 className="text-sm font-bold text-primary">Stratus Runners</h5>
                                <p className="text-[10px] text-on-surface-variant uppercase tracking-tighter">Crimson / Size 10</p>
                            </div>
                            <p className="text-sm font-serif font-bold text-primary">$180</p>
                        </div>
                    </div>
                </section>
                {/* Logistics Summary */}
                <section className="bg-surface-container-low rounded-xl p-6 mb-4">
                    <h3 className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-on-surface-variant mb-4">Shipping Logistics</h3>
                    <div className="grid grid-cols-1 gap-6">
                        <div className="flex items-start gap-4">
                            <span className="material-symbols-outlined text-tertiary">location_on</span>
                            <div>
                                <p className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">Shipping Address</p>
                                <p className="text-sm font-medium leading-relaxed">248 North Gallery Way,<br />Suite 104, New York, NY 10012</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <span className="material-symbols-outlined text-tertiary">contact_support</span>
                            <div>
                                <p className="text-[10px] uppercase tracking-widest text-on-surface-variant mb-1">Need Assistance?</p>
                                <p className="text-sm font-medium">Concierge support is available 24/7 for this order.</p>
                                <button className="mt-2 text-primary font-bold text-xs underline underline-offset-4 decoration-tertiary">Contact Support</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            
        </div>
    );
}
