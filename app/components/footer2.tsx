'use client'
import React from 'react';
import { MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
    className?: string;
}

const Footer2: React.FC<FooterProps> = ({ className = '' }) => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const navigationLinks = [
        { label: 'Home', href: '#home' },
        { label: 'How it works', href: '#how-it-works' },
        { label: 'Features', href: '#features' },
        { label: 'Contact', href: '#contact' },
        { label: 'Testimonial', href: '#testimonial' }
    ];

    const socialLinks = [
        { label: 'Facebook', href: '#facebook' },
        { label: 'Twitter', href: '#twitter' },
        { label: 'Linkedin', href: '#linkedin' },
        { label: 'Instagram', href: '#instagram' }
    ];

    return (
        <footer className={`bg-gradient-to-br from-amber-900 via-amber-950 to-black text-amber-100 ${className}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Brand Section */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                            <div className="relative">
                                <MapPin className="w-8 h-8 text-amber-400" />
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
                            </div>
                            <h2 className="text-2xl font-bold text-white">RIDERO</h2>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                                <div>
                                    <p className="text-sm font-medium text-white">5123 Market St. #22B</p>
                                    <p className="text-sm text-amber-200">Charlottesville, California 44635</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            {navigationLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-amber-200 hover:text-amber-400 transition-colors duration-200 inline-block hover:translate-x-1 transform"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                        <ul className="space-y-3">
                            {socialLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-amber-200 hover:text-amber-400 transition-colors duration-200 inline-block hover:translate-x-1 transform"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-white mb-4">Get in Touch</h3>
                        <div className="space-y-3">
                            <a
                                href="tel:4345464356"
                                className="flex items-center space-x-3 text-sm text-amber-200 hover:text-amber-400 transition-colors duration-200 group"
                            >
                                <Phone className="w-5 h-5 text-amber-400 group-hover:rotate-12 transition-transform duration-200" />
                                <span>(434) 546-4356</span>
                            </a>
                            <a
                                href="mailto:contact@lift.agencyr.com"
                                className="flex items-center space-x-3 text-sm text-amber-200 hover:text-amber-400 transition-colors duration-200 group break-all"
                            >
                                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                                <span>contact@lift.agencyr.com</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-amber-800/50">
                    <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                        <p className="text-sm text-amber-300 text-center sm:text-left">
                            © 2020 Lift Media. All rights reserved.
                        </p>
                        <button
                            onClick={scrollToTop}
                            className="bg-amber-600 hover:bg-amber-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-amber-950"
                            aria-label="Scroll to top"
                        >
                            <ArrowUp className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer2;