import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function MobileLoginPage({ setIsAuthenticated }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://ecommercesitebackend02.vercel.app/user_login/', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                }),
            });
            const data = await response.json();
            if (response.ok) {
                console.log('Login successful:', data);
                setIsAuthenticated(true);
                navigate('/');
            } else {
                console.error('Login failed:', data);
            }
        } catch (error) {
            console.error('Login error:', error);
        }
    };

    return (
        <div className="bg-background text-on-surface font-body min-h-screen flex flex-col">
            <main className="flex-grow flex flex-col items-center justify-center px-6 py-12">
                <div className="w-full max-w-md space-y-12">
                    <header className="text-center space-y-4">
                        <div className="inline-block mb-2">
                            <span className="text-3xl font-bold tracking-tighter text-primary font-headline">ARTIFACT</span>
                        </div>
                        <h1 className="text-4xl font-headline font-normal tracking-tight text-on-surface">Welcome back</h1>
                        <p className="text-on-surface-variant font-body text-sm tracking-wide">Enter your credentials to access your collection.</p>
                    </header>

                    <div className="space-y-8">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="space-y-2">
                                <label className="block text-xs font-semibold uppercase tracking-widest text-on-surface-variant px-1" htmlFor="mobile-login-email">
                                    Email Address
                                </label>
                                <div className="relative group">
                                    <input
                                        className="w-full bg-surface-container-low ghost-border rounded px-4 py-4 focus:ring-0 focus:border-primary transition-all duration-300 outline-none text-on-surface placeholder:text-outline/50"
                                        id="mobile-login-email"
                                        name="email"
                                        placeholder="name@artifact-gallery.com"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between items-center px-1">
                                    <label className="block text-xs font-semibold uppercase tracking-widest text-on-surface-variant" htmlFor="mobile-login-password">
                                        Password
                                    </label>
                                    <a className="text-xs font-medium text-tertiary hover:opacity-70 transition-opacity" href="#">
                                        Forgot password?
                                    </a>
                                </div>
                                <div className="relative group">
                                    <input
                                        className="w-full bg-surface-container-low ghost-border rounded px-4 py-4 focus:ring-0 focus:border-primary transition-all duration-300 outline-none text-on-surface placeholder:text-outline/50"
                                        id="mobile-login-password"
                                        name="password"
                                        placeholder="••••••••"
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <button
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary transition-colors"
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        <span className="material-symbols-outlined text-lg">
                                            {showPassword ? 'visibility_off' : 'visibility'}
                                        </span>
                                    </button>
                                </div>
                            </div>

                            <div className="pt-4">
                                <button
                                    className="w-full btn-gradient text-on-primary font-semibold py-5 rounded shadow-lg active:scale-[0.98] transition-all duration-200 tracking-wider text-sm uppercase"
                                    type="submit"
                                >
                                    Login to Account
                                </button>
                            </div>
                        </form>

                        <div className="relative py-4">
                            <div aria-hidden="true" className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-outline-variant/20"></div>
                            </div>
                            <div className="relative flex justify-center text-xs uppercase tracking-widest">
                                <span className="bg-background px-4 text-on-surface-variant">Or continue with</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <button className="flex items-center justify-center gap-3 py-4 rounded bg-surface-container-lowest ghost-border hover:bg-surface-container-high transition-colors active:scale-95 duration-200">
                                <svg className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="currentColor"></path>
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="currentColor"></path>
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="currentColor"></path>
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 12-4.53z" fill="currentColor"></path>
                                </svg>
                                <span className="text-xs font-bold uppercase tracking-widest">Google</span>
                            </button>
                            <button className="flex items-center justify-center gap-3 py-4 rounded bg-surface-container-lowest ghost-border hover:bg-surface-container-high transition-colors active:scale-95 duration-200">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.671-1.48 3.674-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.039 2.48-4.5 2.597-4.571-1.428-2.09-3.623-2.324-4.402-2.376-1.857-.156-3.39 1.117-4.296 1.117zM15.53 4.654c.805-.975 1.35-2.325 1.208-3.654-1.143.052-2.52.766-3.338 1.716-.74.844-1.39 2.234-1.208 3.537 1.272.104 2.532-.61 3.338-1.599z"></path>
                                </svg>
                                <span className="text-xs font-bold uppercase tracking-widest">Apple</span>
                            </button>
                        </div>
                    </div>

                    <footer className="text-center pt-8">
                        <p className="text-on-surface-variant text-sm font-body">
                            Don't have an account?{' '}
                            <Link className="text-primary font-bold hover:underline underline-offset-4 ml-1" to="/signup">
                                Create Account
                            </Link>
                        </p>
                        <div className="pt-8">
                            <p className="text-center font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-4">Demo Accounts</p>
                            <div className="flex flex-col gap-3">
                                <button
                                    type="button"
                                    onClick={() => { setEmail('buyer@demo.com'); setPassword('password123'); }}
                                    className="w-full py-3 border border-outline-variant/30 text-[10px] font-label uppercase tracking-widest text-on-surface hover:bg-surface-variant transition-colors rounded shadow-sm"
                                >
                                    Demo Buyer
                                </button>
                                <button
                                    type="button"
                                    onClick={() => { setEmail('seller@demo.com'); setPassword('password123'); }}
                                    className="w-full py-3 border border-outline-variant/30 text-[10px] font-label uppercase tracking-widest text-on-surface hover:bg-surface-variant transition-colors rounded shadow-sm"
                                >
                                    Demo Seller
                                </button>
                                <button
                                    type="button"
                                    onClick={() => { setEmail('admin@demo.com'); setPassword('password123'); }}
                                    className="w-full py-3 border border-outline-variant/30 text-[10px] font-label uppercase tracking-widest text-on-surface hover:bg-surface-variant transition-colors rounded shadow-sm"
                                >
                                    Demo Admin
                                </button>
                            </div>
                        </div>
                    </footer>
                </div>
            </main>

            {/* Background decorations */}
            <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-tertiary-fixed/10 blur-[120px]"></div>
                <div className="absolute bottom-[-5%] left-[-5%] w-[40%] h-[40%] rounded-full bg-primary-fixed/20 blur-[100px]"></div>
            </div>
        </div>
    );
}
