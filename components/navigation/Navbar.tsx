'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/#projects' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (href: string) => {
    setIsMobileMenuOpen(false);
    
    // If it's a hash link and we're on the home page
    if (href.startsWith('/#') && pathname === '/') {
      const element = document.querySelector(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'py-4 bg-black/80 backdrop-blur-lg'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <motion.a
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              AJ
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div key={index}>
                  <Link
                    href={item.href}
                    onClick={() => handleNavigation(item.href)}
                    className="text-white/90 hover:text-white transition-colors relative group"
                  >
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600 transition-all duration-300 group-hover:w-full" />
                    </motion.span>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        navItems={navItems} 
        onNavigate={handleNavigation}
      />
    </>
  );
}

function MobileMenu({ 
  isOpen, 
  navItems, 
  onNavigate 
}: { 
  isOpen: boolean; 
  navItems: { name: string; href: string }[];
  onNavigate: (href: string) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: '100%' }}
      animate={{
        opacity: isOpen ? 1 : 0,
        x: isOpen ? 0 : '100%',
      }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 right-0 h-screen w-64 bg-black/95 backdrop-blur-lg z-40 md:hidden
        ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
    >
      <div className="flex flex-col items-center justify-center h-full space-y-8">
        {navItems.map((item, index) => (
          <motion.div key={index}>
            <Link
              href={item.href}
              onClick={() => onNavigate(item.href)}
              className="text-white/90 hover:text-white text-lg font-medium"
            >
              <motion.span
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : 50 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {item.name}
              </motion.span>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}