import { Link } from 'react-router-dom';

export function DesktopHeader({ isAuthenticated }) {
    return (
        <nav className="sticky top-0 w-full z-50 glass-nav shadow-sm bg-white/80 backdrop-blur-md">
            <div className="flex justify-between items-center w-full px-6 py-4 md:px-12">
                <div className="flex gap-8 items-center">
                    <Link className="text-2xl serif-tight font-bold tracking-tighter text-slate-900" to="/">CURATED</Link>
                    <div className="hidden md:flex gap-6 font-['Noto_Serif'] tracking-tight text-sm uppercase">
                        <Link className="text-slate-500 hover:text-slate-900 transition-colors" to="/products">Collections</Link>
                        <Link className="text-slate-500 hover:text-slate-900 transition-colors" to="/about">About</Link>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-500">
                        <span className="material-symbols-outlined text-sm">search</span>
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-transparent outline-none text-xs placeholder:text-slate-500 w-24 focus:w-48 transition-all duration-300 text-slate-900"
                        />
                    </div>
                    {isAuthenticated ? (
                        <div className="flex gap-4">
                            <Link to="/orders" className="hover:opacity-70 transition-opacity duration-300 text-slate-500 hover:text-slate-900">
                                <span className="material-symbols-outlined" data-icon="receipt_long">receipt_long</span>
                            </Link>
                            <Link to="/conversations" className="hover:opacity-70 transition-opacity duration-300 text-slate-500 hover:text-slate-900">
                                <span className="material-symbols-outlined" data-icon="chat">chat</span>
                            </Link>
                            <Link to="/cart" className="hover:opacity-70 transition-opacity duration-300 text-slate-500 hover:text-slate-900">
                                <span className="material-symbols-outlined" data-icon="shopping_bag">shopping_bag</span>
                            </Link>
                            <Link to="/account" className="hover:opacity-70 transition-opacity duration-300 text-slate-500 hover:text-slate-900">
                                <span className="material-symbols-outlined" data-icon="person">person</span>
                            </Link>
                        </div>
                    ) : (
                        <div className="flex gap-4">
                            <Link to="/login" className="text-sm font-semibold uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors">Sign In</Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
