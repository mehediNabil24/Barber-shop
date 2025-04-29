"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const Navbar = () => {
    const pathName = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    if (!pathName.includes('dashboard')) {
        return (
            <nav className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-between items-center py-4">
                        {/* Logo or Brand */}
                        <div className="text-xl font-bold text-gray-800">
                            MyWebsite
                        </div>

                        {/* Desktop Menu */}
                        <ul className="hidden md:flex gap-6 items-center">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href} className="text-gray-700 hover:text-blue-500 transition">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden text-2xl"
                            onClick={() => setMenuOpen(!menuOpen)}
                        >
                            ☰
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {menuOpen && (
                        <ul className="flex flex-col gap-4 pb-4 md:hidden">
                            {navLinks.map((link, index) => (
                                <li key={index}>
                                    <Link href={link.href} className="block text-black hover:text-blue-500 transition">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </nav>
        );
    } else {
        return null;
    }
};

// Links array to keep code clean
const navLinks = [
    { name: "Blog", href: "/" },
    { name: "Blog Details", href: "/blogDetails" },
  
  
   
    
    { name: "Recent Activity", href: "/activity" },
    { name: "Service Details", href: "/serviceDetails" },
    { name: "Subscription", href: "/tabPanel" },
    { name: "Home", href: "/home" },
    { name: "ClickServiceOne", href: "/clickServiceOne" },
    { name: "HomeBlog", href: "/homeBlog" },
    { name: "About Us", href: "/aboutUs" },
    { name: "Main-Blog_Details", href: "/mainBlogDetails" },
    { name: "Hair-Cut_Service", href: "/hairCutService" },
    { name: "Contact_Form", href: "/contactForm" },
    { name: "Click Service Page", href: "/clickServicePage" },
    { name: "Login", href: "/login" },
    { name: "Feedback", href: "/feedback" },
    { name: "Service Card", href: "/service" },
    { name: "Service Card 2", href: "/service2" },
    { name: "Metric Card", href: "/metricCard" },
    { name: "Connecxz", href: "/connecxz" },
];

export default Navbar;
