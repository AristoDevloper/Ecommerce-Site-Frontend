import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function MobileInventoryPage({ userRole }) {
    const [isCurator, setIsCurator] = useState(false);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showAddModal, setShowAddModal] = useState(false);
    const [newProduct, setNewProduct] = useState({ name: '', description: '', price: '', stock: '', category: 1 });
    const navigate = useNavigate();

    // Scroll to top on toggle
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [isCurator]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            const response = await fetch('http://localhost:8000/products-api/');
            const data = await response.json();
            if (response.ok) {
                setProducts(data.results || data);
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleAddProduct = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8000/products-api/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(newProduct)
            });
            if (response.ok) {
                setShowAddModal(false);
                setNewProduct({ name: '', description: '', price: '', stock: '', category: 1 });
                fetchProducts();
            } else {
                console.error("Failed to add product", await response.json());
            }
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    return (
        <div className="bg-background text-on-surface font-body selection:bg-tertiary/20 selection:text-primary min-h-screen pb-20">
            {userRole === 'seller' && (
                <div className="sticky top-20 z-40 bg-surface/80 backdrop-blur px-6 py-4 flex justify-end">
                    <button 
                        onClick={() => setIsCurator(!isCurator)}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-[10px] uppercase font-bold tracking-widest shadow-sm ${isCurator ? 'bg-tertiary text-on-tertiary' : 'bg-primary-container text-on-primary-container'}`}
                    >
                        <span className="material-symbols-outlined text-sm">settings</span>
                        <span>{isCurator ? 'Buyer View' : 'Curator View'}</span>
                    </button>
                </div>
            )}

            <main className="pt-8 px-6 pb-24">
                {!isCurator || userRole !== 'seller' ? (
                    <>
                        <header className="mb-12 animate-in fade-in duration-500">
                            <span className="text-tertiary font-label text-[10px] uppercase tracking-[0.2em] mb-3 block font-semibold">Seasonal Selection</span>
                            <h1 className="text-4xl font-headline text-primary mb-6 tracking-tight leading-tight">Objects of <br/><span className="italic font-normal">Singular Intent.</span></h1>
                            <p className="text-on-surface-variant text-sm leading-relaxed font-light">A curated digital gallery for the discerning collector.</p>
                        </header>

                        {loading ? <p>Loading artifacts...</p> : (
                            <div className="flex flex-col gap-8 animate-in fade-in duration-500">
                                {products.map((product) => (
                                    <div 
                                        key={product.product_id}
                                        onClick={() => navigate(`/product/${product.product_id}`)}
                                        className="group cursor-pointer"
                                    >
                                        <div className="aspect-[4/5] overflow-hidden bg-surface-variant mb-4 rounded relative">
                                            <img 
                                                className="w-full h-full object-cover" 
                                                alt={product.name} 
                                                src={product.images && product.images.length > 0 ? product.images[0].image_url : "https://images.unsplash.com/photo-1523275335684-37898b6baf30"}
                                            />
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <h3 className="font-headline text-lg text-primary">{product.name}</h3>
                                            <p className="text-[10px] uppercase tracking-widest text-slate-500 font-label">{product.category_name}</p>
                                            <span className="text-tertiary font-bold mt-1">${Number(product.price).toLocaleString()}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </>
                ) : (
                    <>
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <div className="flex justify-between items-end mb-8">
                                <h2 className="text-2xl font-headline text-primary">Inventory<br/>Management</h2>
                                <button 
                                    onClick={() => setShowAddModal(true)}
                                    className="p-3 bg-primary text-on-primary rounded-full shadow-lg active:scale-95 transition-transform"
                                >
                                    <span className="material-symbols-outlined">add</span>
                                </button>
                            </div>
                            
                            <div className="flex flex-col gap-4">
                                {products.map((product) => (
                                    <div key={product.product_id} className="bg-surface-container-low p-4 rounded-xl border border-outline-variant/10 flex items-center gap-4">
                                        <div className="w-16 h-16 shrink-0 rounded bg-surface-variant overflow-hidden">
                                            <img 
                                                className="w-full h-full object-cover" 
                                                alt={product.name} 
                                                src={product.images && product.images.length > 0 ? product.images[0].image_url : "https://images.unsplash.com/photo-1523275335684-37898b6baf30"}
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="font-bold text-primary truncate">{product.name}</p>
                                            <div className="flex justify-between items-center mt-1">
                                                <span className="text-tertiary text-sm font-bold">${Number(product.price).toLocaleString()}</span>
                                                <span className={`px-2 py-0.5 text-[8px] font-bold uppercase rounded ${product.stock > 0 ? 'bg-tertiary/10 text-tertiary' : 'bg-slate-200 text-slate-500'}`}>
                                                    Stock: {product.stock}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-2 border-l border-outline-variant/20 pl-4 ml-2 shrink-0">
                                            <button className="text-error">
                                                <span className="material-symbols-outlined text-lg">delete</span>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {showAddModal && (
                            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                                <div className="bg-surface p-6 rounded-xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
                                    <h2 className="text-xl font-headline text-primary mb-4">Add New Artifact</h2>
                                    <form onSubmit={handleAddProduct} className="space-y-4">
                                        <div>
                                            <label className="block text-[10px] uppercase tracking-widest font-label text-on-surface-variant mb-1">Name</label>
                                            <input required type="text" value={newProduct.name} onChange={e => setNewProduct({...newProduct, name: e.target.value})} className="w-full bg-surface-container p-3 rounded text-sm text-on-surface" />
                                        </div>
                                        <div>
                                            <label className="block text-[10px] uppercase tracking-widest font-label text-on-surface-variant mb-1">Description</label>
                                            <textarea required value={newProduct.description} onChange={e => setNewProduct({...newProduct, description: e.target.value})} className="w-full bg-surface-container p-3 rounded text-sm text-on-surface h-20"></textarea>
                                        </div>
                                        <div className="grid grid-cols-2 gap-3">
                                            <div>
                                                <label className="block text-[10px] uppercase tracking-widest font-label text-on-surface-variant mb-1">Price</label>
                                                <input required type="number" step="0.01" value={newProduct.price} onChange={e => setNewProduct({...newProduct, price: e.target.value})} className="w-full bg-surface-container p-3 rounded text-sm text-on-surface" />
                                            </div>
                                            <div>
                                                <label className="block text-[10px] uppercase tracking-widest font-label text-on-surface-variant mb-1">Stock</label>
                                                <input required type="number" value={newProduct.stock} onChange={e => setNewProduct({...newProduct, stock: e.target.value})} className="w-full bg-surface-container p-3 rounded text-sm text-on-surface" />
                                            </div>
                                        </div>
                                        <div className="flex justify-end gap-3 mt-6">
                                            <button type="button" onClick={() => setShowAddModal(false)} className="px-4 py-2 font-label text-xs uppercase tracking-widest text-on-surface-variant">Cancel</button>
                                            <button type="submit" className="px-6 py-2 bg-primary text-on-primary rounded font-label text-xs uppercase tracking-widest font-bold">Add</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </main>
        </div>
    );
}
