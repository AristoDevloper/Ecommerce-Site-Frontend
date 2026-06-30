export function MobileConversationsPage() {
    return (
        <div className="bg-background text-on-surface min-h-screen">
            
            {/* Main Content */}
            <main className="pt-20 pb-24 px-4 max-w-md mx-auto">
                {/* Filter Tabs */}
                <div className="flex gap-4 mb-8 overflow-x-auto no-scrollbar py-2">
                    <button className="bg-primary text-on-primary px-5 py-2 rounded-lg text-xs font-bold tracking-widest uppercase">Active</button>
                    <button className="bg-surface-container text-on-surface-variant px-5 py-2 rounded-lg text-xs font-bold tracking-widest uppercase">Archived</button>
                    <button className="bg-surface-container text-on-surface-variant px-5 py-2 rounded-lg text-xs font-bold tracking-widest uppercase">Requests</button>
                </div>
                {/* Conversations List */}
                <div className="space-y-4">
                    {/* Conversation Item 1 */}
                    <div className="bg-surface-container-lowest rounded-xl p-4 flex gap-4 items-center transition-all active:scale-[0.98]">
                        <div className="relative flex-shrink-0">
                            <img alt="Elias Thorne Studios profile" className="w-14 h-14 rounded-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgnfr_2A5FTBwMkF8LMSVIUG1SY7Yz9-oVsZxdHx8wiaFmLMKqggs3_B4zlUBdLUHmfPE-xmplaXkWtl-2898MAZBNW7b7XUdN0FD-MhSJVGehdSEbx5ZJWejtL0A6nJxzCGR4UzZ3E5CJzPAHbtMl7jTER5Ryqfqp6XOtnwtfYbOA_ucGVifvmXKCJyh287s5-qZn4QcRxOHP2LrYsLmyRokG1YvAoSJb6VeMhjDzgWWRuT7KzqThEmyFfJjXd27FEz6Bx1Dt-uq4" />
                            <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-tertiary border-2 border-surface-container-lowest rounded-full"></div>
                        </div>
                        <div className="flex-grow min-w-0">
                            <div className="flex justify-between items-baseline mb-0.5">
                                <h3 className="serif-header font-bold text-on-surface truncate">Elias Thorne Studios</h3>
                                <span className="text-[10px] font-bold text-outline uppercase tracking-wider">12m</span>
                            </div>
                            <p className="text-sm text-on-surface font-semibold truncate leading-tight">The frame is ready for inspection...</p>
                            <p className="text-xs text-on-surface-variant truncate mt-1">Shall we proceed with the gold leaf gilding?</p>
                        </div>
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden bg-surface-variant">
                            <img alt="Product thumbnail" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-sblrCP76KM48tmWxfY3bHfCY1eILksVarGRrsPuaJXQKPd3PxHmKAejZ4ogUD2X2QXONG6Srv3e-V9lRu6leODM2YbB3kmjVG56bFwpaoDF13EZu6c5RZhAMMFDW_di5CppWy_AMNXzPvJVwwtio2RaOxUw5sgdD5xjgszMcb1aN00R4d7cA-vLb-bjH9LhLQLljDTdrQF8p95jnQATzVf6vphgufItSDDxXz5FQESjEYtU4iJ1PSnVnya8hQ_Hdsb8uJmbtXT-B" />
                        </div>
                    </div>
                    {/* Conversation Item 2 */}
                    <div className="bg-surface-container-lowest rounded-xl p-4 flex gap-4 items-center transition-all active:scale-[0.98]">
                        <div className="relative flex-shrink-0">
                            <img alt="Heritage Horology profile" className="w-14 h-14 rounded-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAZqwpOLg7FxsLnliuAdkaqtQqsps-sZazIKPtrJizlHjBvfkdKoFJXWpSci2xuah6ViANO9-nS2RLJYvTdznYwbU3r1fHvJ4t0L6LMBNS1Rm6l7oOLBTQ6HZ9WjMc63Qiyhc1h8RHVKwxZjOZ_m49l6ywniHaRsQ2BOslEK2ilzYFMuQ0oWlf0mztD9gY87L7i-surMpLJhiQKsT87FOFlfAPRY1kpK9poWgzRyMpuB6DyMYc0tt-3DiWA6Aj4oIGzEh9J8hWAfkC" />
                        </div>
                        <div className="flex-grow min-w-0">
                            <div className="flex justify-between items-baseline mb-0.5">
                                <h3 className="serif-header font-bold text-on-surface truncate">Heritage Horology</h3>
                                <span className="text-[10px] font-bold text-outline uppercase tracking-wider">2h</span>
                            </div>
                            <p className="text-sm text-on-surface-variant truncate leading-tight italic">You: Can I see the movement?</p>
                            <p className="text-xs text-on-surface-variant truncate mt-1">I will upload high-res macros shortly.</p>
                        </div>
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden bg-surface-variant">
                            <img alt="Product thumbnail" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMLfSEeZgeibtQg3Gp5ptu2wdaqUaImNyAHAU4jB5a9WhTPEFWEN2o_FJX1BYEZa1DpT2q6aBrtdbTS42HiMYSWzsTF-59yi7DbybOk-JJQsAJfQ2IBlH-gBKctKZagcFmon6ayXJuoVESWQaNtfXn4ivhKUwg80Qdxn2hveXqzpsHfAKjQ-QDcuPpvZV1q9pbem0RnaFlG_05Be3wEC3xRdw2jNSRMK4zBXc0Fnb55Keoaokv_FaJErdX2LPASZau-N0CjkV7hr11" />
                        </div>
                    </div>
                    {/* Conversation Item 3 (Unread) */}
                    <div className="bg-surface-container-low rounded-xl p-4 flex gap-4 items-center border-l-4 border-primary transition-all active:scale-[0.98]">
                        <div className="relative flex-shrink-0">
                            <img alt="Atelier Gallerie profile" className="w-14 h-14 rounded-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDhl6t76EUNqhs-esJH-Ip8zsLsQdQKtL1-XIlFMbGQ2i2kRURu8wDANGUHH0SaFaToI8SLhJfNtkkllJ_JzAVzl9W2M4-Zz95fXbzqsGJzGbGue1rxdgrLeGDYPBPIPt0M5n08iInwHQMdedV3ASy9zlOt04R2GkrpVCMH361kzWI0GyMK-dZ5JkltD7JSVoP1VgYifaNoHWZK36O0V7XuepM6RiJkNZiw75yKHrUTxzjmZggDEyRqFkJtO296JXlN-PCKpcxnKpJ" />
                        </div>
                        <div className="flex-grow min-w-0">
                            <div className="flex justify-between items-baseline mb-0.5">
                                <h3 className="serif-header font-bold text-on-surface truncate">Atelier Gallerie</h3>
                                <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Just now</span>
                            </div>
                            <p className="text-sm text-on-surface font-extrabold truncate leading-tight">Private view invitation</p>
                            <p className="text-xs text-on-surface-variant truncate mt-1">We are holding a preview for the curated collection...</p>
                        </div>
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden bg-surface-variant">
                            <img alt="Product thumbnail" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7Uuj3ynFOrPMMNQbgogJDx_4F5X6mhqFcnYn23lfHpPSKHr-A4yWuN6XVPe_fkLTI_T9BdGmhMiz8juHLhmFwNhStsj-ZGiYLSBROo1yCkMmU9YPtG6J1oyB_QTAZr6zlBjE_yDHQo__Y3riPtWTRaThMGUTEEv9XcuS2eP2WyJEl9RbDo7yMFQ-46WOjP_fEOg6v8-yKQ7Zu_lTPwFmPCrXU7EZQflwnTLQriMY2PI9HaGOt50_-l3scHtuRx4jJYlD0vn4hQXbW" />
                        </div>
                    </div>
                    {/* Conversation Item 4 */}
                    <div className="bg-surface-container-lowest rounded-xl p-4 flex gap-4 items-center transition-all active:scale-[0.98]">
                        <div className="relative flex-shrink-0">
                            <div className="w-14 h-14 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-bold text-xl">SO</div>
                        </div>
                        <div className="flex-grow min-w-0">
                            <div className="flex justify-between items-baseline mb-0.5">
                                <h3 className="serif-header font-bold text-on-surface truncate">Sloane Objects</h3>
                                <span className="text-[10px] font-bold text-outline uppercase tracking-wider">Yesterday</span>
                            </div>
                            <p className="text-sm text-on-surface-variant truncate leading-tight italic">You: What is the provenance?</p>
                            <p className="text-xs text-on-surface-variant truncate mt-1">It was acquired from a Parisian estate in 1984.</p>
                        </div>
                        <div className="flex-shrink-0 w-12 h-12 rounded-lg overflow-hidden bg-surface-variant">
                            <img alt="Product thumbnail" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvLoeiXCVc9Kz4Udp8I3fSj0WK9_yEgMuqd9vAVzkTu9sHQ1dFp-9Zr7Hf3crUcUeIkN1Z8ZNTbAHfpldI1OAgCBD-pU3eMCUJEsSi6K7J0wnjKM37ySwr50kPWZf6rPKSz2lwH5C85U-RzyBrDFPpZZ6WscrOBa9Lob90v6Jfuwe_ZAZSAZ6tyKanFREDxqLMZtzuc3LADcOOaSvfkVFpumOvbntJTCsKBr6yYWu_VQuStH-i7-idJjUZATuKVsVQJkjjvu53aKoV" />
                        </div>
                    </div>
                </div>
                {/* Empty State Whisper */}
                <p className="text-center text-[10px] uppercase tracking-[0.2em] text-outline mt-12 opacity-50">End of curated conversations</p>
            </main>
            
        </div>
    );
}
