import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export function TermsAndConditionsPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="bg-background text-on-surface font-body min-h-screen pt-24 pb-20 px-6">
            <div className="max-w-3xl mx-auto space-y-12 animate-in fade-in duration-500">
                <header className="space-y-4">
                    <span className="text-tertiary font-label text-xs uppercase tracking-widest font-bold">Legal</span>
                    <h1 className="text-4xl md:text-5xl font-headline text-primary tracking-tight">Terms & Conditions</h1>
                    <div className="bg-primary-container text-on-primary-container p-4 rounded-lg border border-primary/20">
                        <p className="text-sm font-bold uppercase tracking-widest mb-1">Disclaimer</p>
                        <p className="text-sm leading-relaxed">
                            This website ("Artifact") is a <strong>demo project</strong> created for portfolio and client demonstration purposes. It is not a real e-commerce business. While it simulates real functionality, no actual transactions, shipping, or business operations take place.
                        </p>
                    </div>
                </header>

                <section className="space-y-4">
                    <h2 className="text-2xl font-headline text-primary border-b border-outline-variant/30 pb-2">1. Acceptance of Terms</h2>
                    <p className="text-on-surface-variant leading-relaxed">
                        By accessing this demo platform, you acknowledge that it is a conceptual project designed solely for demonstration. There are no real products for sale, and no legal agreements are formed by interacting with this site.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-headline text-primary border-b border-outline-variant/30 pb-2">2. Use of the Demo Platform</h2>
                    <p className="text-on-surface-variant leading-relaxed">
                        You are welcome to create accounts, test out purchasing flows, and explore the interface. However, please do not upload, post, or transmit any sensitive, real-world data (such as actual credit card numbers, passwords used elsewhere, or confidential personal information).
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-headline text-primary border-b border-outline-variant/30 pb-2">3. Intellectual Property</h2>
                    <p className="text-on-surface-variant leading-relaxed">
                        The design, code, and overall architecture of this demo application are part of a personal portfolio. The product images used are sourced from public domains like Unsplash and remain the property of their respective creators.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-headline text-primary border-b border-outline-variant/30 pb-2">4. No Warranties</h2>
                    <p className="text-on-surface-variant leading-relaxed">
                        This demo is provided "as is" without any warranties of any kind. There is no guarantee of uptime, data retention, or bug-free performance. The database may be wiped without notice.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-headline text-primary border-b border-outline-variant/30 pb-2">5. Contact</h2>
                    <p className="text-on-surface-variant leading-relaxed">
                        For inquiries related to hiring, freelance work, or discussing the technical details of this project, please refer to my personal portfolio.
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
