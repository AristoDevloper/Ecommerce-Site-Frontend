import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../../config/api';

export function MobileLoginPage({ setIsAuthenticated }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${API_BASE_URL}/user_login/`, {
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
