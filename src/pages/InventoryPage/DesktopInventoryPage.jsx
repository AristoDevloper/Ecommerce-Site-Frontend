import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function DesktopInventoryPage({ userRole }) {
    const [isCurator, setIsCurator] = useState(false);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showAddModal, setShowAddModal] = useState(false);
    const [newProduct, setNewProduct] = useState({ name: '', description: '', price: '', stock: '', category: 1 }); // Assuming category 1 exists
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
        <div className="bg-background text-on-surface font-body selection:bg-tertiary/20 selection:text-primary min-h-screen">
            
            {userRole === 'seller' && (
                <div className="fixed top-24 right-8 z-40">
                    <button 
                        onClick={() => setIsCurator(!isCurator)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-[10px] uppercase font-bold tracking-widest shadow-lg hover:brightness-110 transition-all ${isCurator ? 'bg-tertiary text-on-tertiary' : 'bg-primary-container text-on-primary-container'}`}
                    >
                        <span className="material-symbols-outlined text-sm">settings</span>
                        <span>{isCurator ? 'Switch to Buyer View' : 'Switch to Curator View'}</span>
                    </button>
                </div>
            )}

            <main className="pt-24 pb-24 px-8 max-w-screen-2xl mx-auto">
                {!isCurator || userRole !== 'seller' ? (
                    <>
                        {/* Editorial Header */}
                        <header className="mb-20 max-w-3xl animate-in fade-in duration-500">
                            <span className="text-tertiary font-label text-xs uppercase tracking-[0.2em] mb-4 block font-semibold">Seasonal Selection</span>
                            <h1 className="text-5xl md:text-7xl font-headline text-primary mb-8 tracking-tight leading-tight">Objects of <br/><span className="italic font-normal">Singular Intent.</span></h1>
                            <p className="text-on-surface-variant text-lg leading-relaxed font-light">A curated digital gallery for the discerning collector. Every artifact is vetted for material integrity, provenance, and timeless aesthetic value.</p>
                        </header>

                        {/* Buyer View: Product Grid */}
                        {loading ? <p>Loading artifacts...</p> : (
                            <div className="grid grid-cols-12 gap-8 animate-in fade-in duration-500">
                                {products.map((product, index) => (
                                    <div 
                                        key={product.product_id || index} 
                                        onClick={() => navigate(`/product/${product.product_id}`)}
                                        className={`col-span-12 md:col-span-6 lg:col-span-4 group cursor-pointer ${index % 3 === 0 || index % 3 === 2 ? 'lg:mt-16' : ''}`}
                                    >
                                        <div className="aspect-[4/5] overflow-hidden bg-surface-variant mb-6 rounded-md relative">
                                            <img 
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                                                alt={product.name} 
                                                src={product.images && product.images.length > 0 ? product.images[0].image_url : "https://images.unsplash.com/photo-1523275335684-37898b6baf30"}
                                            />
                                            <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 transition-colors duration-500"></div>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <h3 className="font-headline text-xl text-primary">{product.name}</h3>
                                            <p className="text-xs uppercase tracking-widest text-slate-500 font-label">{product.category_name || 'Curated pick'}</p>
                                            <span className="text-tertiary font-bold mt-2">${Number(product.price).toLocaleString()}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </>
                ) : (
                    <>
                        {/* Curator View: Inventory Management */}
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 mt-12">
                            <div className="flex justify-between items-center mb-12">
                                <h2 className="text-3xl font-headline text-primary">Inventory Management</h2>
                                <button 
                                    onClick={() => setShowAddModal(true)}
                                    className="px-6 py-3 bg-primary text-on-primary rounded-lg flex items-center gap-2 text-xs uppercase tracking-widest font-bold transition-all hover:shadow-xl hover:-translate-y-0.5"
                                >
                                    <span className="material-symbols-outlined text-sm">add</span> Add New Artifact
                                </button>
                            </div>
                            
                            <div className="bg-surface-container-low rounded-xl overflow-hidden border border-outline-variant/10">
                                <table className="w-full text-left border-collapse">
                                    <thead className="bg-surface-container-high font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
                                        <tr>
                                            <th className="px-6 py-4 font-bold">Artifact</th>
                                            <th className="px-6 py-4 font-bold">Status</th>
                                            <th className="px-6 py-4 font-bold">Price</th>
                                            <th className="px-6 py-4 font-bold">Inventory</th>
                                            <th className="px-6 py-4 font-bold text-right">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-outline-variant/10 text-sm">
                                        {products.map((product) => (
                                            <tr key={product.product_id} className="hover:bg-surface-container transition-colors">
                                                <td className="px-6 py-4">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-12 h-12 rounded bg-surface-variant overflow-hidden">
                                                            <img 
                                                                className="w-full h-full object-cover" 
                                                                alt={product.name} 
                                                                src={product.images && product.images.length > 0 ? product.images[0].image_url : "https://images.unsplash.com/photo-1523275335684-37898b6baf30"}
                                                            />
                                                        </div>
                                                        <div>
                                                            <p className="font-bold text-primary">{product.name}</p>
                                                            <p className="text-xs text-on-surface-variant uppercase">{product.category_name}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4">
                                                    <span className={`px-2 py-1 text-[10px] font-bold uppercase rounded ${product.stock > 0 ? 'bg-tertiary/10 text-tertiary' : 'bg-slate-200 text-slate-500'}`}>
                                                        {product.stock > 0 ? 'Active' : 'Archived'}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 font-body">${Number(product.price).toLocaleString()}</td>
                                                <td className="px-6 py-4 font-body">{product.stock}</td>
                                                <td className="px-6 py-4 text-right">
                                                    <div className="flex justify-end gap-2">
                                                        <button className="p-2 hover:bg-error-container hover:text-on-error-container rounded transition-colors duration-200 text-red-500">
                                                            <span className="material-symbols-outlined text-lg">delete</span>
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* Add Product Modal */}
                        {showAddModal && (
                            <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 backdrop-blur-sm">
                                <div className="bg-surface p-8 rounded-xl w-full max-w-md shadow-2xl">
                                    <h2 className="text-2xl font-headline text-primary mb-6">Add New Artifact</h2>
                                    <form onSubmit={handleAddProduct} className="space-y-4">
                                        <div>
                                            <label className="block text-xs uppercase tracking-widest font-label text-on-surface-variant mb-1">Name</label>
                                            <input required type="text" value={newProduct.name} onChange={e => setNewProduct({...newProduct, name: e.target.value})} className="w-full bg-surface-container p-3 rounded text-on-surface" />
                                        </div>
                                        <div>
                                            <label className="block text-xs uppercase tracking-widest font-label text-on-surface-variant mb-1">Description</label>
                                            <textarea required value={newProduct.description} onChange={e => setNewProduct({...newProduct, description: e.target.value})} className="w-full bg-surface-container p-3 rounded text-on-surface h-24"></textarea>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-xs uppercase tracking-widest font-label text-on-surface-variant mb-1">Price</label>
                                                <input required type="number" step="0.01" value={newProduct.price} onChange={e => setNewProduct({...newProduct, price: e.target.value})} className="w-full bg-surface-container p-3 rounded text-on-surface" />
                                            </div>
                                            <div>
                                                <label className="block text-xs uppercase tracking-widest font-label text-on-surface-variant mb-1">Stock</label>
                                                <input required type="number" value={newProduct.stock} onChange={e => setNewProduct({...newProduct, stock: e.target.value})} className="w-full bg-surface-container p-3 rounded text-on-surface" />
                                            </div>
                                        </div>
                                        <div className="flex justify-end gap-3 mt-8">
                                            <button type="button" onClick={() => setShowAddModal(false)} className="px-4 py-2 font-label text-xs uppercase tracking-widest text-on-surface-variant hover:text-on-surface">Cancel</button>
                                            <button type="submit" className="px-6 py-2 bg-primary text-on-primary rounded font-label text-xs uppercase tracking-widest font-bold">Add Artifact</button>
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
