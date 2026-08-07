import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export function MobileSignupPage() {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const nameParts = fullName.trim().split(' ');
            const firstName = nameParts[0] || '';
            const lastName = nameParts.slice(1).join(' ') || '';

            const response = await fetch('http://localhost:8000/user_register/', {
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
        <div className="bg-background text-on-surface font-body min-h-screen flex flex-col antialiased">
            {/* Top Navigation */}
            <header className="fixed top-0 w-full z-50 px-6 py-6 flex items-center justify-between">
                <button
                    aria-label="Go back"
                    className="w-10 h-10 flex items-center justify-start text-primary active:scale-95 transition-transform"
                    onClick={() => navigate(-1)}
                >
                    <span className="material-symbols-outlined !text-xl">arrow_back_ios</span>
                </button>
                <span className="font-headline font-bold tracking-widest text-lg text-primary uppercase">CURATED</span>
                <div className="w-10"></div>
            </header>

            <main className="flex-grow flex flex-col px-8 pt-28 pb-40 max-w-md mx-auto w-full">
                {/* Hero Editorial Section */}
                <section className="mb-14">
                    <h1 className="font-headline text-[2.75rem] font-bold leading-[1.1] tracking-tight text-primary mb-6">
                        Join the <br /><i className="font-normal italic">Collective.</i>
                    </h1>
                    <p className="text-on-surface-variant/80 font-body text-base leading-relaxed max-w-[280px]">
                        Access curated archives, early arrivals, and bespoke collections for the modern connoisseur.
                    </p>
                </section>

                {/* Signup Form */}
                <form className="space-y-10" onSubmit={handleSubmit}>
                    {/* Name Field */}
                    <div className="relative group border-b border-outline-variant focus-within:border-primary transition-colors duration-300">
                        <input
                            className="input-minimal peer w-full bg-transparent border-none px-0 py-3 focus:ring-0 placeholder:text-transparent text-primary"
                            id="full_name"
                            name="full_name"
                            placeholder="Elias Thorne"
                            type="text"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                        <label
                            className="absolute left-0 top-3 text-on-surface-variant/60 font-label text-xs uppercase tracking-widest transition-all duration-300 pointer-events-none origin-left"
                            htmlFor="full_name"
                        >
                            Full Name
                        </label>
                    </div>

                    {/* Email Field */}
                    <div className="relative group border-b border-outline-variant focus-within:border-primary transition-colors duration-300">
                        <input
                            className="input-minimal peer w-full bg-transparent border-none px-0 py-3 focus:ring-0 placeholder:text-transparent text-primary"
                            id="mobile-signup-email"
                            name="email"
                            placeholder="email@artifact.com"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label
                            className="absolute left-0 top-3 text-on-surface-variant/60 font-label text-xs uppercase tracking-widest transition-all duration-300 pointer-events-none origin-left"
                            htmlFor="mobile-signup-email"
                        >
                            Email Address
                        </label>
                    </div>

                    {/* Password Field */}
                    <div className="relative group border-b border-outline-variant focus-within:border-primary transition-colors duration-300">
                        <div className="flex items-center">
                            <input
                                className="input-minimal peer w-full bg-transparent border-none px-0 py-3 focus:ring-0 placeholder:text-transparent text-primary"
                                id="mobile-signup-password"
                                name="password"
                                placeholder="••••••••"
                                type={showPassword ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <label
                                className="absolute left-0 top-3 text-on-surface-variant/60 font-label text-xs uppercase tracking-widest transition-all duration-300 pointer-events-none origin-left"
                                htmlFor="mobile-signup-password"
                            >
                                Password
                            </label>
                            <button
                                className="material-symbols-outlined text-on-surface-variant/40 hover:text-primary transition-colors"
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? 'visibility_off' : 'visibility'}
                            </button>
                        </div>
                    </div>

                    {/* Terms & Conditions Context */}
                    <div className="pt-2">
                        <p className="text-[11px] text-on-surface-variant/60 leading-relaxed text-center font-medium">
                            By creating an account, you agree to our <br />
                            <a className="text-primary underline underline-offset-4 decoration-primary/20" href="#">
                                Terms of Service
                            </a>{' '}
                            and{' '}
                            <a className="text-primary underline underline-offset-4 decoration-primary/20" href="#">
                                Privacy Policy
                            </a>
                            .
                        </p>
                    </div>
                </form>

                {/* Aesthetic Anchor */}
                <div className="mt-16 rounded-xl overflow-hidden aspect-[4/3] bg-surface-container-low shadow-sm">
                    <img
                        alt="minimal architectural detail"
                        className="w-full h-full object-cover opacity-70 grayscale contrast-125"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCzLXwdKY9nozaf9CuBKBeYiirpkn3_gW2gsV9Bbn-JG3oo7VBVCFz0xiPnD3OjRX2s3CAFUOmbVwWErBLZKK5T7VpZTjc5ElztfYwAoFIG79BvBP-0NOUQOBcbQG5_mT1WNRidfoZV1Dsmj9CfsSLfij59rjcWJ-7YUuLue0_2kwxNa1lVL2CIZCVrJKFyCoPbDl3CWBSGm-AM4ltr5LJmjb_hP9DpZw_WvmZBtmUbf07b0MByPNzDpvO7MR8amL8wXG8v6v2FYc4"
                    />
                </div>
            </main>

            {/* Fixed Bottom Action Bar */}
            <footer className="fixed bottom-0 left-0 w-full glass-effect px-8 py-8 flex flex-col gap-6 border-t border-outline-variant/10">
                <button
                    className="group relative w-full overflow-hidden py-5 bg-primary text-on-primary font-label font-bold uppercase tracking-[0.2em] rounded-full active:scale-[0.97] transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20"
                    type="button"
                    onClick={handleSubmit}
                >
                    <span className="relative z-10 text-xs">Create Account</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-fixed-variant to-primary opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </button>
                <div className="flex justify-center items-center gap-3">
                    <span className="text-[11px] text-on-surface-variant uppercase tracking-wider">Member?</span>
                    <Link className="text-[11px] font-bold text-primary uppercase tracking-[0.15em] border-b border-primary" to="/login">
                        Sign In
                    </Link>
                </div>
            </footer>

            {/* Background Decoration */}
            <div className="fixed top-0 left-0 w-full h-screen pointer-events-none -z-10 bg-background overflow-hidden">
                <div className="absolute top-[-15%] right-[-10%] w-[100%] h-[50%] bg-surface-tint/5 blur-[120px] rounded-full rotate-12"></div>
                <div className="absolute bottom-[-10%] left-[-20%] w-[80%] h-[40%] bg-tertiary-container/5 blur-[100px] rounded-full -rotate-12"></div>
            </div>
        </div>
    );
}
