import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL } from "../../config/api";

const PAGE_SIZE = 6;

function buildPaginationItems(currentPage, totalPages) {
    if (totalPages <= 1) {
        return [1];
    }

    if (totalPages <= 7) {
        return Array.from({ length: totalPages }, (_, index) => index + 1);
    }

    if (currentPage <= 4) {
        return [1, 2, 3, 4, 5, 'ellipsis', totalPages];
    }

    if (currentPage >= totalPages - 3) {
        return [1, 'ellipsis', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages];
    }

    return [1, 'ellipsis', currentPage - 1, currentPage, currentPage + 1, 'ellipsis', totalPages];
}

export function DesktopProductList() {
    const navigate = useNavigate();
    const [productsData, setProductsData] = useState([]);
    const [totalProducts, setTotalProducts] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState('All Objects');
    const [maxPrice, setMaxPrice] = useState(2500);
    const [isLoading, setIsLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    const totalPages = Math.max(1, Math.ceil(totalProducts / PAGE_SIZE));
    const currentPageNumber = Math.min(currentPage, totalPages);
    const paginationItems = useMemo(() => buildPaginationItems(currentPageNumber, totalPages), [currentPageNumber, totalPages]);

    useEffect(() => {
        const controller = new AbortController();

        const fetchProducts = async () => {
            try {
                setIsLoading(true);
                setErrorMessage('');

                const offset = (currentPageNumber - 1) * PAGE_SIZE;
                const queryParams = new URLSearchParams({
                    limit: String(PAGE_SIZE),
                    offset: String(offset),
                    min_price: '50',
                    max_price: String(maxPrice),
                });

                if (selectedCategory !== 'All Objects') {
                    queryParams.set('category', selectedCategory);
                }

                const response = await fetch(`${API_BASE_URL}/products-api/?${queryParams.toString()}`, {
                    signal: controller.signal,
                });

                if (!response.ok) {
                    throw new Error('Unable to load products.');
                }

                const data = await response.json();
                const nextProducts = Array.isArray(data.results) ? data.results : Array.isArray(data) ? data : [];

                setProductsData(nextProducts);
                setTotalProducts(typeof data.count === 'number' ? data.count : nextProducts.length);
            } catch (error) {
                if (error.name !== 'AbortError') {
                    setErrorMessage('We could not load the catalog right now. Please try again.');
                    setProductsData([]);
                    setTotalProducts(0);
                }
            } finally {
                if (!controller.signal.aborted) {
                    setIsLoading(false);
                }
            }
        };

        fetchProducts();

        return () => controller.abort();
    }, [currentPageNumber, selectedCategory, maxPrice]);

    const startItem = totalProducts === 0 ? 0 : (currentPageNumber - 1) * PAGE_SIZE + 1;
    const endItem = Math.min(currentPageNumber * PAGE_SIZE, totalProducts);

    const handlePageChange = (pageNumber) => {
        if (pageNumber < 1 || pageNumber > totalPages || pageNumber === currentPageNumber) {
            return;
        }

        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleCategoryChange = (categoryName) => {
        setSelectedCategory(categoryName);
        setCurrentPage(1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handlePriceChange = (event) => {
        setMaxPrice(Number(event.target.value));
        setCurrentPage(1);
    };

    const getCategoryLabel = (product) => {
        if (product?.category_name) {
            return product.category_name;
        }

        if (typeof product?.category === 'object' && product.category?.name) {
            return product.category.name;
        }

        if (product?.category) {
            return `Category ${product.category}`;
        }

        return 'Curated pick';
    };

    const getProductImageUrl = (product) => {
        const image = product?.images?.[0]?.image_url;
        return typeof image === 'string' && image.trim() ? image : 'https://images.unsplash.com/photo-1523275335684-37898b6baf30';
    };

    return (
        <div className="bg-background text-on-surface flex flex-col min-h-screen">
            <main className="pt-24 pb-12 px-6 md:px-12 flex-grow max-w-screen-2xl mx-auto w-full">
                <div className="flex flex-col lg:flex-row gap-12">
                    <aside className="w-full lg:w-64 flex-shrink-0 space-y-10">
                        <div>
                            <h3 className="font-label text-xs tracking-widest uppercase text-on-surface mb-6 font-bold">Category</h3>
                            <ul className="space-y-3">
                                {['All Objects', 'Home Decor', 'Apparel', 'Ceramics', 'Textiles'].map((categoryName) => (
                                    <li key={categoryName}>
                                        <button
                                            type="button"
                                            className={`w-full text-left flex items-center justify-between transition-colors ${selectedCategory === categoryName ? 'text-primary font-medium' : 'text-on-surface-variant hover:text-primary'}`}
                                            onClick={() => handleCategoryChange(categoryName)}
                                        >
                                            <span>{categoryName}</span>
                                            {categoryName === 'All Objects' && (
                                                <span className="text-[10px] bg-surface-container-high px-1.5 py-0.5 rounded-full">All</span>
                                            )}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-label text-xs tracking-widest uppercase text-on-surface mb-6 font-bold">Price Range</h3>
                            <div className="space-y-4">
                                <input
                                    className="w-full accent-primary h-1 bg-surface-container-high rounded-lg appearance-none cursor-pointer"
                                    type="range"
                                    min="50"
                                    max="2500"
                                    step="25"
                                    value={maxPrice}
                                    onChange={handlePriceChange}
                                />
                                <div className="flex justify-between text-xs text-on-surface-variant font-medium">
                                    <span>$50</span>
                                    <span>${maxPrice.toLocaleString()}+</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-label text-xs tracking-widest uppercase text-on-surface mb-6 font-bold">Material</h3>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1.5 bg-surface-container-lowest ghost-border text-xs rounded text-on-surface-variant">Linen</span>
                                <span className="px-3 py-1.5 bg-surface-container-lowest ghost-border text-xs rounded text-on-surface-variant">Oak</span>
                                <span className="px-3 py-1.5 bg-surface-container-lowest ghost-border text-xs rounded text-on-surface-variant">Raw Silk</span>
                                <span className="px-3 py-1.5 bg-surface-container-lowest ghost-border text-xs rounded text-on-surface-variant">Bronze</span>
                                <span className="px-3 py-1.5 bg-surface-container-lowest ghost-border text-xs rounded text-on-surface-variant">Marble</span>
                            </div>
                        </div>
                    </aside>

                    <div className="flex-grow">
                        <div className="flex justify-between items-center mb-8 pb-4 border-b border-surface-container-high/30">
                            <span className="text-xs text-on-surface-variant font-label tracking-wide uppercase">
                                {totalProducts === 0 ? 'No products found' : `Showing ${startItem}-${endItem} of ${totalProducts} Items`}
                            </span>
                            <button className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest group">
                                <span>Sort By: Newest</span>
                                <span className="material-symbols-outlined text-sm group-hover:translate-y-0.5 transition-transform">expand_more</span>
                            </button>
                        </div>

                        {isLoading ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
                                {Array.from({ length: PAGE_SIZE }).map((_, index) => (
                                    <div className="animate-pulse" key={index}>
                                        <div className="aspect-[4/5] bg-surface-container-low mb-4 overflow-hidden rounded-md" />
                                        <div className="space-y-3">
                                            <div className="h-3 w-24 rounded-full bg-surface-container-high" />
                                            <div className="h-6 w-3/4 rounded-full bg-surface-container-high" />
                                            <div className="h-4 w-20 rounded-full bg-surface-container-high" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : errorMessage ? (
                            <div className="rounded-2xl border border-surface-container-high/40 bg-surface-container-low p-8 text-sm text-on-surface-variant">
                                {errorMessage}
                            </div>
                        ) : (
                            <>
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
                                    {productsData.map((product, index) => (
                                        <div 
                                            className="group cursor-pointer" 
                                            onClick={() => navigate(`/product/${product.product_id}`)}
                                            key={product.product_id ?? product.id ?? `${product.name}-${index}`}
                                        >
                                            <div className="aspect-[4/5] bg-surface-container-low mb-4 overflow-hidden rounded-md relative">
                                                {getProductImageUrl(product) ? (
                                                    <img
                                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                                        src={getProductImageUrl(product)}
                                                        alt={product.name}
                                                        loading="lazy"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full bg-gradient-to-br from-surface-container-low via-surface-container-high/30 to-surface-container-low flex items-end p-5">
                                                        <div>
                                                            <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">{getCategoryLabel(product)}</p>
                                                            <h4 className="serif text-2xl text-primary font-medium tracking-tight mt-2 line-clamp-3">{product.name}</h4>
                                                        </div>
                                                    </div>
                                                )}
                                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[linear-gradient(to_top,rgba(0,0,0,0.24),transparent_45%)]" />
                                                <button className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                                                    <span className="material-symbols-outlined text-primary text-xl">add</span>
                                                </button>
                                            </div>

                                            <div className="space-y-2 mt-4">
                                                <div className="flex justify-between items-baseline gap-4">
                                                    <h4 className="font-headline text-lg font-bold text-primary">{product.name}</h4>
                                                    <p className="text-primary font-bold whitespace-nowrap">${Number(product.price).toFixed(2)}</p>
                                                </div>
                                                <p className="text-on-surface-variant font-body text-sm line-clamp-2">{product.description}</p>
                                                <div className="flex justify-between text-[10px] uppercase tracking-widest text-on-surface-variant pt-1 border-t border-surface-container-high/25">
                                                    <span>{getCategoryLabel(product)}</span>
                                                    <span>Stock: {product.stock}</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {totalPages > 1 && (
                                    <div className="mt-16 flex flex-col items-center gap-4">
                                        <div className="flex flex-wrap items-center justify-center gap-2">
                                            <button
                                                className="px-4 py-2 rounded-full border border-surface-container-high/40 text-xs font-bold uppercase tracking-widest disabled:opacity-40 disabled:cursor-not-allowed hover:bg-surface-container-low transition-colors"
                                                disabled={currentPageNumber === 1}
                                                onClick={() => handlePageChange(currentPageNumber - 1)}
                                            >
                                                Prev
                                            </button>

                                            {paginationItems.map((item, index) => (
                                                item === 'ellipsis' ? (
                                                    <span className="px-2 text-on-surface-variant" key={`ellipsis-${index}`}>...</span>
                                                ) : (
                                                    <button
                                                        className={`min-w-11 h-11 px-4 rounded-full border text-sm font-bold transition-colors ${item === currentPageNumber ? 'bg-primary text-on-primary border-primary' : 'border-surface-container-high/40 text-on-surface-variant hover:bg-surface-container-low hover:text-primary'}`}
                                                        key={item}
                                                        onClick={() => handlePageChange(item)}
                                                    >
                                                        {item}
                                                    </button>
                                                )
                                            ))}

                                            <button
                                                className="px-4 py-2 rounded-full border border-surface-container-high/40 text-xs font-bold uppercase tracking-widest disabled:opacity-40 disabled:cursor-not-allowed hover:bg-surface-container-low transition-colors"
                                                disabled={currentPageNumber === totalPages}
                                                onClick={() => handlePageChange(currentPageNumber + 1)}
                                            >
                                                Next
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </div>
            </main>

            <footer className="w-full py-16 px-6 md:px-12 mt-auto bg-slate-50 dark:bg-slate-900">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto border-t border-slate-200/20 dark:border-slate-800/20">
                    <div className="space-y-6">
                        <div className="text-lg font-['Noto_Serif'] italic text-slate-400">CURATED GALLERY</div>
                        <p className="text-xs tracking-widest uppercase font-['Manrope'] text-slate-400 max-w-xs leading-loose">
                            Defining the intersection of art and living since 2018. Selected works for the modern soul.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-x-12 gap-y-6 justify-start md:justify-end items-center">
                        <a className="font-['Manrope'] text-xs tracking-widest uppercase text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-50 hover:underline decoration-slate-300 underline-offset-4 transition-all" href="#">Sustainability</a>
                        <a className="font-['Manrope'] text-xs tracking-widest uppercase text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-50 hover:underline decoration-slate-300 underline-offset-4 transition-all" href="#">Shipping</a>
                        <a className="font-['Manrope'] text-xs tracking-widest uppercase text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-50 hover:underline decoration-slate-300 underline-offset-4 transition-all" href="#">Returns</a>
                        <a className="font-['Manrope'] text-xs tracking-widest uppercase text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-50 hover:underline decoration-slate-300 underline-offset-4 transition-all" href="#">Contact</a>
                        <a className="font-['Manrope'] text-xs tracking-widest uppercase text-slate-400 dark:text-slate-500 hover:text-slate-900 dark:hover:text-slate-50 hover:underline decoration-slate-300 underline-offset-4 transition-all" href="#">Privacy</a>
                    </div>
                </div>
                <div className="mt-16 text-center">
                    <p className="text-[10px] tracking-widest text-slate-400 uppercase">© 2024 CURATED GALLERY. ALL RIGHTS RESERVED.</p>
                </div>
            </footer>
        </div>
    );
}
