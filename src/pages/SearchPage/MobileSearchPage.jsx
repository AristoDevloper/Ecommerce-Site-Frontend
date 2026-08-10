import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function MobileSearchPage({ query: initialQuery, results, count, page, loading, error, onPageChange, onSearchSubmit }) {
    const [query, setQuery] = useState(initialQuery || '');

    useEffect(() => {
        setQuery(initialQuery || '');
    }, [initialQuery]);

    const handleSearch = (e) => {
        e.preventDefault();
        onSearchSubmit(query);
    };

    const currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    const totalPages = Math.ceil(count / 10);

    return (
        <div className="mt-12 bg-background text-on-background font-body antialiased mobile-screen min-h-screen">
            <main className="pt-8 pb-24 px-6">
                {/* Search Input Area */}
                <section className="mb-8 mt-4">
                    <form onSubmit={handleSearch} className="relative flex items-center">
                        <span className="material-symbols-outlined absolute left-4 text-slate-400">search</span>
                        <input 
                            type="text" 
                            placeholder="Search products..." 
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            className="w-full bg-surface-container-high text-on-surface rounded-full py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-primary/20 transition-shadow text-sm"
                        />
                    </form>
                    
                    {!initialQuery && !loading && (
                        <div className="mt-8">
                            <p className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant mb-4">Popular Searches</p>
                            <div className="flex flex-wrap gap-2">
                                <button onClick={() => { setQuery('Obsidian Minimalist'); onSearchSubmit('Obsidian Minimalist'); }} className="px-4 py-2 bg-surface-container-high text-on-surface text-[10px] tracking-widest uppercase rounded-lg">Obsidian Minimalist</button>
                                <button onClick={() => { setQuery('Silk Capsule'); onSearchSubmit('Silk Capsule'); }} className="px-4 py-2 bg-surface-container-high text-on-surface text-[10px] tracking-widest uppercase rounded-lg">Silk Capsule</button>
                                <button onClick={() => { setQuery('Lounge Chair'); onSearchSubmit('Lounge Chair'); }} className="px-4 py-2 bg-surface-container-high text-on-surface text-[10px] tracking-widest uppercase rounded-lg">Lounge Chair</button>
                            </div>
                        </div>
                    )}
                </section>

                {/* Loading / Error States */}
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-16">
                        <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
                        <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Searching...</p>
                    </div>
                ) : error ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                        <span className="material-symbols-outlined text-4xl text-error mb-2" style={{ fontVariationSettings: "'wght' 200" }}>error</span>
                        <p className="text-error text-sm">{error}</p>
                    </div>
                ) : initialQuery && results.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                        <span className="material-symbols-outlined text-4xl text-outline-variant mb-4" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200" }}>search_off</span>
                        <h2 className="font-headline text-xl text-primary mb-2">No Results Found</h2>
                        <p className="text-on-surface-variant text-sm max-w-[200px] mx-auto">
                            No items matched your search. Try different keywords.
                        </p>
                    </div>
                ) : (initialQuery || results.length > 0) && (
                    <>
                        <section className="mb-8">
                            <p className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant mb-2">Search Results</p>
                            <h2 className="font-headline text-3xl text-primary leading-tight italic">
                                {initialQuery ? `‘${initialQuery}’` : 'All Products'}
                            </h2>
                            <p className="text-xs text-on-surface-variant mt-2">{count} {count === 1 ? 'item' : 'items'} found</p>
                        </section>

                        <div className="grid grid-cols-2 gap-x-4 gap-y-12">
                            {results.map((product) => {
                                const imageUrl = product.images && product.images.length > 0
                                    ? `https://ecommercesitebackend02.vercel.app${product.images[0].image}`
                                    : 'https://via.placeholder.com/200x250?text=No+Image';

                                return (
                                    <Link key={product.product_id} to={`/product/${product.product_id}`} className="col-span-1">
                                        <div className="relative aspect-[4/5] bg-surface-variant rounded-md overflow-hidden mb-4">
                                            <img src={imageUrl} alt={product.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div>
                                            <h3 className="font-headline text-sm text-primary leading-tight line-clamp-1">{product.name}</h3>
                                            <p className="font-label text-[10px] tracking-widest uppercase text-on-surface-variant line-clamp-1 mt-1">{product.category?.name || 'Artifact'}</p>
                                            <span className="font-body text-sm font-bold text-primary mt-1 block">{currencyFormatter.format(Number(product.price))}</span>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Pagination Controls */}
                        {totalPages > 1 && (
                            <div className="flex justify-center items-center mt-12 gap-6">
                                <button
                                    onClick={() => onPageChange(page - 1)}
                                    disabled={page === 1}
                                    className="p-2 rounded-full hover:bg-surface-container disabled:opacity-30 transition-colors text-primary"
                                >
                                    <span className="material-symbols-outlined text-xl">arrow_back</span>
                                </button>
                                <div className="font-label text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
                                    {page} / {totalPages}
                                </div>
                                <button
                                    onClick={() => onPageChange(page + 1)}
                                    disabled={page === totalPages}
                                    className="p-2 rounded-full hover:bg-surface-container disabled:opacity-30 transition-colors text-primary"
                                >
                                    <span className="material-symbols-outlined text-xl">arrow_forward</span>
                                </button>
                            </div>
                        )}
                    </>
                )}
            </main>
        </div>
    );
}