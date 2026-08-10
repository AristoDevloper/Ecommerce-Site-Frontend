import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { API_BASE_URL } from '../../config/api';

export function DesktopLoginPage({ setIsAuthenticated }) {
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
        <main className="min-h-screen flex flex-col md:flex-row relative overflow-hidden">
            {/* Left Side: Editorial Image/Atmosphere (Asymmetric Layout) */}
            <div className="hidden md:flex md:w-1/2 lg:w-3/5 bg-surface-container-low relative items-center justify-center p-12 lg:p-24">
                <div className="relative z-10 w-full max-w-xl">
                    <h1 className="font-headline text-display-lg text-primary text-5xl lg:text-7xl mb-8 leading-tight tracking-tight">
                        Welcome back <br />to the <span className="italic text-tertiary">Artifact</span>.
                    </h1>
                    <p className="font-body text-on-surface-variant text-lg max-w-md leading-relaxed">
                        Access your curated collections and discover the latest arrivals in our archival series.
                    </p>
                </div>
                {/* Atmospheric background element */}
                <div className="absolute inset-0 z-0">
                    <img
                        alt="Minimalist fashion editorial photography"
                        className="w-full h-full object-cover opacity-10"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGvltzEuNXwJ0Ob7XtJi41NEXZI0Kbii0tTAN-SHqfhrmcaKh4AnGCO71R1KjW-1Zpdd_BD0YBS5LN6JLbXA4C-EM4w-lFwDDZhuMB0wznt6rbSwW-OErAhfUKOYIWt7JWb22cq2K5GYmccTsYVLPr_CaLkFa2bedgRWB5VHvS4FGashybCMlPsPpV0h60XZoa20OU35mmwL6lz49jzmorhgb3nM5BfJHwtyGZpqFifYtrSVHS-fJaU1gXhF6ZoND0jAkhd8ZTndip"
                    />
                </div>
                {/* Asymmetrical floating element */}
                <div className="absolute bottom-12 left-12 p-6 bg-surface-container-lowest/80 backdrop-blur-xl rounded-lg ghost-border editorial-shadow max-w-xs">
                    <p className="font-label text-xs uppercase tracking-widest text-tertiary mb-2">Current Collection</p>
                    <p className="font-headline italic text-on-surface">"The Obsidian Series - Autumn 2024"</p>
                </div>
            </div>

            {/* Right Side: Focused Login Form */}
            <div className="w-full md:w-1/2 lg:w-2/5 flex flex-col justify-center items-center p-6 md:p-12 lg:p-20 bg-background">
                {/* Mobile Brand Logo */}
                <div className="md:hidden mb-12">
                    <span className="text-3xl font-headline font-bold tracking-tighter text-primary">ARTIFACT</span>
                </div>

                <div className="w-full max-w-sm space-y-10">
                    <div className="space-y-2">
                        <h2 className="font-headline text-3xl font-bold tracking-tight text-on-surface">Login</h2>
                        <p className="font-body text-on-surface-variant text-sm">Please enter your details to continue.</p>
                    </div>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {/* Email Field */}
                        <div className="space-y-2">
                            <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-semibold" htmlFor="login-email">
                                Email Address
                            </label>
                            <div className="relative group">
                                <input
                                    className="pl-3 w-full bg-transparent border-b ghost-border focus:border-primary focus:ring-0 transition-colors py-3 px-0 font-body placeholder:text-outline/30 text-on-surface"
                                    id="login-email"
                                    name="email"
                                    placeholder="name@example.com"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label className="font-label text-xs uppercase tracking-widest text-on-surface-variant font-semibold" htmlFor="login-password">
                                    Password
                                </label>
                                <a className="font-label text-xs text-tertiary hover:text-on-tertiary-fixed-variant transition-colors" href="#">
                                    Forgot password?
                                </a>
                            </div>
                            <div className="relative group">
                                <input
                                    className="pl-3 w-full bg-transparent border-b ghost-border focus:border-primary focus:ring-0 transition-colors py-3 px-0 font-body placeholder:text-outline/30 text-on-surface"
                                    id="login-password"
                                    name="password"
                                    placeholder="••••••••"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="pt-4 space-y-6">
                            <button
                                className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary py-4 rounded font-label text-sm uppercase tracking-widest font-bold hover:opacity-90 active:scale-[0.98] transition-all editorial-shadow"
                                type="submit"
                            >
                                Login
                            </button>

                        </div>
                    </form>

                    {/* Footer Link */}
                    <p className="text-center font-body text-sm text-on-surface-variant pt-4">
                        Don't have an account?{' '}
                        <Link className="text-primary font-semibold hover:underline decoration-tertiary underline-offset-4" to="/signup">
                            Sign up
                        </Link>
                    </p>

                    <div className="pt-6 border-t ghost-border">
                        <p className="text-center font-label text-xs uppercase tracking-widest text-on-surface-variant mb-4">Demo Accounts</p>
                        <div className="flex flex-col gap-3">
                            <button
                                type="button"
                                onClick={() => { setEmail('buyer@demo.com'); setPassword('password123'); }}
                                className="w-full py-2 border border-outline-variant/50 text-xs font-label uppercase tracking-widest text-on-surface hover:bg-surface-variant transition-colors rounded"
                            >
                                Demo Buyer
                            </button>
                            <button
                                type="button"
                                onClick={() => { setEmail('seller@demo.com'); setPassword('password123'); }}
                                className="w-full py-2 border border-outline-variant/50 text-xs font-label uppercase tracking-widest text-on-surface hover:bg-surface-variant transition-colors rounded"
                            >
                                Demo Seller
                            </button>
                            <button
                                type="button"
                                onClick={() => { setEmail('admin@demo.com'); setPassword('password123'); }}
                                className="w-full py-2 border border-outline-variant/50 text-xs font-label uppercase tracking-widest text-on-surface hover:bg-surface-variant transition-colors rounded"
                            >
                                Demo Admin
                            </button>
                        </div>
                    </div>
                </div>

                {/* Discrete Copyright for focus screens */}
                <div className="absolute bottom-8 text-center md:text-left">
                    <p className="font-label text-[10px] uppercase tracking-[0.2em] text-outline">
                        © 2024 ARTIFACT GALLERY. ALL RIGHTS RESERVED.
                    </p>
                </div>
            </div>
        </main>
    );
}
