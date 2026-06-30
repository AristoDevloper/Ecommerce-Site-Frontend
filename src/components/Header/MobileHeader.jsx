import { Link } from 'react-router-dom';

export function MobileHeader() {
    return (
        <header className="fixed top-0 w-full z-50 bg-slate-50/80 backdrop-blur-xl flex justify-between items-center px-6 h-16 shadow-sm shadow-slate-900/5">
            <div className="flex items-center gap-4">
                <button className="text-slate-900 hover:opacity-70 transition-opacity active:scale-95 duration-150">
                    <span className="material-symbols-outlined" data-icon="menu">menu</span>
                </button>
            </div>
            <Link to="/">
                <h1 className="text-2xl font-serif tracking-widest text-slate-900">CURATED</h1>
            </Link>
            <div className="flex items-center gap-4">
                <Link to="/cart" className="text-slate-900 hover:opacity-70 transition-opacity active:scale-95 duration-150">
                    <span className="material-symbols-outlined" data-icon="shopping_bag">shopping_bag</span>
                </Link>
            </div>
        </header>
    );
}
