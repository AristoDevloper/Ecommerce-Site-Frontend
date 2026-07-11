import { Link } from 'react-router-dom';

export function DesktopSearchPage({ query, results, count, page, loading, error, onPageChange }) {
    const currencyFormatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    const totalPages = Math.ceil(count / 10);

    return (
        <div className="bg-background text-on-surface desktop-screen min-h-screen">
            <main className="max-w-screen-2xl mx-auto px-8 pt-12">
                <div className="mb-12">
                    <h1 className="font-headline text-4xl text-primary tracking-tighter">
                        {query ? `Search Results for "${query}"` : 'All Products'}
                    </h1>
                    <p className="text-on-surface-variant mt-2 font-body">
                        {count} {count === 1 ? 'result' : 'results'} found
                    </p>
                </div>

                {loading ? (
                    <div className="flex flex-col items-center justify-center py-32">
                        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mb-4"></div>
                        <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Searching archives...</p>
                    </div>
                ) : error ? (
                    <div className="flex flex-col items-center justify-center py-32 text-center">
                        <span className="material-symbols-outlined text-6xl text-error mb-4" style={{ fontVariationSettings: "'wght' 200" }}>error</span>
                        <p className="text-error mb-8">{error}</p>
                    </div>
                ) : results.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-32 text-center">
                        <span className="material-symbols-outlined text-6xl text-outline-variant mb-6" style={{ fontVariationSettings: "'FILL' 0, 'wght' 200" }}>search_off</span>
                        <h2 className="serif-heading text-2xl font-bold text-primary mb-4">No Results Found</h2>
                        <p className="text-on-surface-variant max-w-md mx-auto leading-relaxed">
                            We couldn't find any items matching your search. Try adjusting your query or exploring our collections.
                        </p>
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                            {results.map((product) => {
                                const imageUrl = product.images && product.images.length > 0
                                    ? `http://localhost:8000${product.images[0].image}`
                                    : 'https://via.placeholder.com/400x500?text=No+Image';

                                return (
                                    <Link key={product.product_id} to={`/product/${product.product_id}`} className="group block">
                                        <div className="aspect-[4/5] overflow-hidden bg-surface-container-low rounded-xl mb-6 relative">
                                            <img
                                                src={imageUrl}
                                                alt={product.name}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="font-serif text-lg text-primary mb-1 group-hover:text-tertiary transition-colors">{product.name}</h3>
                                                <p className="text-on-surface-variant text-xs font-body line-clamp-1">{product.description}</p>
                                            </div>
                                            <span className="font-body font-medium text-sm ml-4">{currencyFormatter.format(Number(product.price))}</span>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                        
                        {/* Pagination Controls */}
                        {totalPages > 1 && (
                            <div className="flex justify-center items-center mt-20 gap-8">
                                <button
                                    onClick={() => onPageChange(page - 1)}
                                    disabled={page === 1}
                                    className="p-3 rounded-full hover:bg-surface-container disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-primary"
                                >
                                    <span className="material-symbols-outlined text-2xl">arrow_back</span>
                                </button>
                                <div className="font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant">
                                    Page {page} <span className="mx-2">/</span> {totalPages}
                                </div>
                                <button
                                    onClick={() => onPageChange(page + 1)}
                                    disabled={page === totalPages}
                                    className="p-3 rounded-full hover:bg-surface-container disabled:opacity-30 disabled:hover:bg-transparent transition-colors text-primary"
                                >
                                    <span className="material-symbols-outlined text-2xl">arrow_forward</span>
                                </button>
                            </div>
                        )}
                    </>
                )}
            </main>
        </div>
    );
}