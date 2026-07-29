import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export function PrivacyPolicyPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-background text-on-surface font-body min-h-screen pt-24 pb-20 px-6">
            <div className="max-w-3xl mx-auto space-y-12 animate-in fade-in duration-500">
                <header className="space-y-4">
                    <span className="text-tertiary font-label text-xs uppercase tracking-widest font-bold">Legal</span>
                    <h1 className="text-4xl md:text-5xl font-headline text-primary tracking-tight">Privacy Policy</h1>
                    <div className="bg-primary-container text-on-primary-container p-4 rounded-lg border border-primary/20">
                        <p className="text-sm font-bold uppercase tracking-widest mb-1">Disclaimer</p>
                        <p className="text-sm leading-relaxed">
                            This website ("Artifact") is a <strong>demo project</strong> created for portfolio and client demonstration purposes. It is not a real e-commerce business. While it simulates real functionality, no actual transactions, shipping, or business operations take place. Please do not provide any real sensitive information (like real credit card numbers).
                        </p>
                    </div>
                </header>

                <section className="space-y-4">
                    <h2 className="text-2xl font-headline text-primary border-b border-outline-variant/30 pb-2">1. Data We Collect</h2>
                    <p className="text-on-surface-variant leading-relaxed">
                        To demonstrate the capabilities of a modern e-commerce platform, this demo application collects the following information when you create an account or interact with the site:
                    </p>
                    <ul className="list-disc pl-5 text-on-surface-variant space-y-2">
                        <li><strong>Account Information:</strong> Email address, password (hashed securely), and display name.</li>
                        <li><strong>Profile Information:</strong> Optional details such as shipping address and phone number to simulate order fulfillment.</li>
                        <li><strong>Activity Data:</strong> Items added to your cart, wishlist, and simulated order history.</li>
                        <li><strong>Communication Data:</strong> Chat messages sent via the customer-seller chat feature.</li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-headline text-primary border-b border-outline-variant/30 pb-2">2. How We Use Your Data</h2>
                    <p className="text-on-surface-variant leading-relaxed">
                        Since this is a demo environment, your data is used strictly to showcase technical features:
                    </p>
                    <ul className="list-disc pl-5 text-on-surface-variant space-y-2">
                        <li><strong>Authentication &amp; Authorization:</strong> To demonstrate secure login and role-based access control (e.g., Buyer vs. Seller views).</li>
                        <li><strong>Order Simulation:</strong> To populate your order history, cart, and simulated checkout flow.</li>
                        <li><strong>Personalization:</strong> To display your name and profile details in the UI.</li>
                    </ul>
                    <p className="text-on-surface-variant leading-relaxed mt-4">
                        Your data will <strong>never</strong> be sold, shared with third parties, or used for marketing purposes. The database for this demo may be periodically wiped, meaning all accounts and associated data will be deleted.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-headline text-primary border-b border-outline-variant/30 pb-2">3. Cookies and Local Storage</h2>
                    <p className="text-on-surface-variant leading-relaxed">
                        We use HTTP-only cookies and local storage mechanisms to manage your authentication session (JSON Web Tokens). This allows the application to remember that you are logged in as you navigate between pages.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-headline text-primary border-b border-outline-variant/30 pb-2">4. Your Rights</h2>
                    <p className="text-on-surface-variant leading-relaxed">
                        Even in a demo environment, you retain control over the data you provide. You may log in to update your profile details at any time. If you wish to have your demo account deleted, you can simply abandon it, as the database is subject to periodic resets.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-headline text-primary border-b border-outline-variant/30 pb-2">5. Contact</h2>
                    <p className="text-on-surface-variant leading-relaxed">
                        If you are a prospective client viewing this demo and have questions regarding its architecture, security practices, or data handling, please reach out directly through my portfolio contact methods.
                    </p>
                </section>

                <div className="pt-8 text-center">
                    <Link to="/" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest font-label font-bold text-primary hover:text-tertiary transition-colors">
                        <span className="material-symbols-outlined text-sm">arrow_back</span>
                        Return to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
