import { Link, useLocation } from 'react-router-dom';

export function MobileBottomNav() {
    const location = useLocation();
    
    return (
        <nav className="fixed bottom-0 w-full z-50 bg-slate-50/90 backdrop-blur-2xl flex justify-around items-center px-4 h-20 shadow-[0_-4px_20px_rgba(0,0,0,0.04)] pb-safe">
            {/*  Gallery  */}
            <Link 
                className={`flex flex-col items-center justify-center pt-2 transition-transform ${location.pathname === '/' ? 'text-slate-900 border-t-2 border-slate-900 transform translate-y-[-2px]' : 'text-slate-400 hover:text-slate-600'}`} 
                to="/"
            >
                <span className="material-symbols-outlined" data-icon="home_app_logo" style={location.pathname === '/' ? { fontVariationSettings: "'FILL' 1" } : {}}>home_app_logo</span>
                <span className="text-[10px] uppercase tracking-[0.1em] font-sans font-bold mt-1">Gallery</span>
            </Link>
            
            {/*  Search  */}
            <Link 
                className={`flex flex-col items-center justify-center pt-2 transition-colors ${location.pathname === '/search' ? 'text-slate-900 border-t-2 border-slate-900 transform translate-y-[-2px]' : 'text-slate-400 hover:text-slate-600'}`} 
                to="/search"
            >
                <span className="material-symbols-outlined" data-icon="search" style={location.pathname === '/search' ? { fontVariationSettings: "'FILL' 1" } : {}}>search</span>
                <span className="text-[10px] uppercase tracking-[0.1em] font-sans font-bold mt-1">Search</span>
            </Link>
            
            {/*  Bag  */}
            <Link 
                className={`flex flex-col items-center justify-center pt-2 transition-colors ${location.pathname === '/cart' ? 'text-slate-900 border-t-2 border-slate-900 transform translate-y-[-2px]' : 'text-slate-400 hover:text-slate-600'}`} 
                to="/cart"
            >
                <span className="material-symbols-outlined" data-icon="shopping_cart" style={location.pathname === '/cart' ? { fontVariationSettings: "'FILL' 1" } : {}}>shopping_cart</span>
                <span className="text-[10px] uppercase tracking-[0.1em] font-sans font-bold mt-1">Bag</span>
            </Link>

            {/*  Chat  */}
            <Link 
                className={`flex flex-col items-center justify-center pt-2 transition-colors ${location.pathname === '/conversations' ? 'text-slate-900 border-t-2 border-slate-900 transform translate-y-[-2px]' : 'text-slate-400 hover:text-slate-600'}`} 
                to="/conversations"
            >
                <span className="material-symbols-outlined" data-icon="chat" style={location.pathname === '/conversations' ? { fontVariationSettings: "'FILL' 1" } : {}}>chat</span>
                <span className="text-[10px] uppercase tracking-[0.1em] font-sans font-bold mt-1">Chat</span>
            </Link>
            
            {/*  Profile  */}
            <Link 
                className={`flex flex-col items-center justify-center pt-2 transition-colors ${location.pathname === '/about' ? 'text-slate-900 border-t-2 border-slate-900 transform translate-y-[-2px]' : 'text-slate-400 hover:text-slate-600'}`} 
                to="/about"
            >
                <span className="material-symbols-outlined" data-icon="person" style={location.pathname === '/about' ? { fontVariationSettings: "'FILL' 1" } : {}}>person</span>
                <span className="text-[10px] uppercase tracking-[0.1em] font-sans font-bold mt-1">Profile</span>
            </Link>
        </nav>
    );
}
