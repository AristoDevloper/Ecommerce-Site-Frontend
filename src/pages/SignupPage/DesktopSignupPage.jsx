import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function DesktopSignupPage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [agreedToTerms, setAgreedToTerms] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            console.error('Passwords do not match');
            return;
        }
        if (!agreedToTerms) {
            console.error('You must agree to Terms & Conditions');
            return;
        }
        try {
            const response = await fetch('https://ecommercesitebackend02.vercel.app/user_register/', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    first_name: firstName,
                    last_name: lastName,
                    email: email,
                    password: password,
                }),
            });
            const data = await response.json();
            if (response.ok) {
                console.log('Signup successful:', data);
                navigate('/login');
            } else {
                console.error('Signup failed:', data);
            }
        } catch (error) {
            console.error('Signup error:', error);
        }
    };

    return (
        <>
            {/* Top Navigation */}
            <header className="fixed top-0 w-full z-50 bg-slate-50/80 backdrop-blur-xl shadow-sm">
                <div className="flex justify-between items-center w-full px-6 py-6 md:px-12 max-w-screen-2xl mx-auto">
                    <Link className="text-2xl font-bold tracking-tighter text-slate-900 font-headline uppercase" to="/">
                        CURATED
                    </Link>
                    <div className="hidden md:flex gap-8 items-center">
                        <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant">Already a member?</span>
                        <Link className="text-xs font-label uppercase tracking-widest font-bold border-b border-primary pb-1" to="/login">
                            Login
                        </Link>
                    </div>
                </div>
            </header>

            <main className="flex-grow flex items-center justify-center pt-24 pb-12 px-6">
                <div className="max-w-6xl w-full grid md:grid-cols-2 bg-surface-container-lowest rounded-lg overflow-hidden shadow-2xl shadow-on-surface/5">
                    {/* Left Side: Editorial Content */}
                    <div className="relative hidden md:block bg-primary-container p-16 overflow-hidden">
                        <div className="absolute inset-0 opacity-40">
                            <img
                                alt="Abstract texture"
                                className="w-full h-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCUIvinJnv2hSrNKDr8VyI37vZiiPYMCfehDrXq2MWWB1e5EfcmIHoPrs7S9X2Bjrr8AhMzbzF6F841YYBCra5SDvgoPJiqEhQ68zCivLr1wQ9-uwGo0UMTbr6hGu5zu_Q-UjkIxzCT-nFAZ1dnqfSy85iRoaddmMvWPlrt61BTGjl_wtbbWR98rc8MhiPmvgyaOzZ_PmxN9dobIX2xgLcrtGAOFLlmsRv5nI4-L3w9W5dLbx5aH97qTfgWZdNR0UYRtk1yhjz0tu5H"
                            />
                        </div>
                        <div className="relative z-10">
                            <span className="text-tertiary font-label text-xs uppercase tracking-[0.3em] mb-6 block">The Curated Gallery</span>
                            <h2 className="text-display-md text-white font-headline text-5xl leading-tight mb-8">
                                Begin your <br />curation.
                            </h2>
                            <p className="text-on-primary-container text-lg font-body leading-relaxed max-w-sm">
                                Join an exclusive ecosystem where products are treated as artifacts and users as connoisseurs.
                            </p>
                        </div>
                        <div className="relative z-10 pt-12">
                            <div className="flex items-center gap-4 text-white/60 text-xs font-label uppercase tracking-widest">
                                <span>Collections</span>
                                <span className="w-8 h-[1px] bg-white/20"></span>
                                <span>Archive</span>
                                <span className="w-8 h-[1px] bg-white/20"></span>
                                <span>Artifacts</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Signup Form */}
                    <div className="p-8 md:p-16 lg:p-20 flex flex-col justify-center bg-white">
                        <div className="mb-10">
                            <h1 className="text-4xl font-headline text-primary mb-2 tracking-tight">Create Account</h1>
                            <p className="text-on-surface-variant text-sm font-body">Enter your details to access the gallery.</p>
                        </div>

                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-1">
                                    <label className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant block px-1">
                                        First Name
                                    </label>
                                    <input
                                        className="w-full bg-surface-container-low border-none ghost-border rounded px-4 py-3 text-sm focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-on-surface-variant/40"
                                        placeholder="John"
                                        type="text"
                                        value={firstName}
                                        onChange={(e) => setFirstName(e.target.value)}
                                    />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant block px-1">
                                        Last Name
                                    </label>
                                    <input
                                        className="w-full bg-surface-container-low border-none ghost-border rounded px-4 py-3 text-sm focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-on-surface-variant/40"
                                        placeholder="Doe"
                                        type="text"
                                        value={lastName}
                                        onChange={(e) => setLastName(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant block px-1">
                                    Email Address
                                </label>
                                <input
                                    className="w-full bg-surface-container-low border-none ghost-border rounded px-4 py-3 text-sm focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-on-surface-variant/40"
                                    placeholder="curator@artifact.com"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="space-y-1">
                                <label className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant block px-1">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        className="w-full bg-surface-container-low border-none ghost-border rounded px-4 py-3 text-sm focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-on-surface-variant/40"
                                        placeholder="••••••••"
                                        type={showPassword ? 'text' : 'password'}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <span
                                        className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm cursor-pointer hover:text-primary transition-colors"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? 'visibility_off' : 'visibility'}
                                    </span>
                                </div>
                            </div>

                            <div className="space-y-1">
                                <label className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant block px-1">
                                    Confirm Password
                                </label>
                                <input
                                    className="w-full bg-surface-container-low border-none ghost-border rounded px-4 py-3 text-sm focus:ring-1 focus:ring-primary outline-none transition-all placeholder:text-on-surface-variant/40"
                                    placeholder="••••••••"
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </div>

                            <div className="flex items-start gap-3 py-2">
                                <div className="relative flex items-center">
                                    <input
                                        className="w-4 h-4 rounded-sm border-outline-variant text-primary focus:ring-primary transition-all"
                                        id="terms"
                                        type="checkbox"
                                        checked={agreedToTerms}
                                        onChange={(e) => setAgreedToTerms(e.target.checked)}
                                    />
                                </div>
                                <label className="text-xs text-on-surface-variant leading-relaxed select-none" htmlFor="terms">
                                    I agree to the{' '}
                                    <a className="text-primary font-semibold hover:underline" href="#">
                                        Terms &amp; Conditions
                                    </a>{' '}
                                    and acknowledge the privacy policy.
                                </label>
                            </div>

                            <div className="pt-4">
                                <button
                                    className="w-full premium-gradient text-white font-label uppercase tracking-[0.2em] text-xs py-4 rounded shadow-lg shadow-primary/20 hover:scale-[1.01] active:scale-95 transition-all duration-300"
                                    type="submit"
                                >
                                    Create Account
                                </button>
                            </div>

                            <div className="md:hidden pt-6 text-center">
                                <p className="text-xs font-label uppercase tracking-widest text-on-surface-variant">
                                    Already a member?{' '}
                                    <Link className="text-primary font-bold ml-1 border-b border-primary" to="/login">
                                        Login
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-slate-100 dark:bg-slate-900 w-full py-12">
                <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 md:px-12 gap-6 max-w-screen-2xl mx-auto">
                    <span className="font-label text-[10px] uppercase tracking-widest text-slate-500">
                        © 2024 ARTIFACT GALLERY. ALL RIGHTS RESERVED.
                    </span>
                    <div className="flex gap-8">
                        <a className="font-label text-[10px] uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors" href="#">
                            Privacy Policy
                        </a>
                        <a className="font-label text-[10px] uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors" href="#">
                            Terms of Service
                        </a>
                        <a className="font-label text-[10px] uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors" href="#">
                            Contact
                        </a>
                        <a className="font-label text-[10px] uppercase tracking-widest text-slate-500 hover:text-slate-900 transition-colors" href="#">
                            Shipping
                        </a>
                    </div>
                </div>
            </footer>
        </>
    );
}
