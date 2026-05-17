import { Link, useLocation } from 'react-router-dom';
import { Menu, Search, ShoppingBasket, Phone, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      id="main-nav"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-surface shadow-sm border-b border-outline-variant/30 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button 
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open navigation menu"
            className="text-primary md:hidden p-2 bg-surface/95 border border-outline-variant/30 shadow-sm hover:bg-primary-fixed rounded-xl transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
          <Link to="/" className="text-2xl font-bold text-primary tracking-tight">
            Tarragon Market
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-sm font-semibold transition-all hover:text-primary relative py-1 ${
                location.pathname === link.path 
                  ? 'text-primary' 
                  : 'text-on-surface-variant'
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div 
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" 
                />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3 md:gap-6">
          <button className="hidden lg:flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:scale-105 active:scale-95 transition-all shadow-md shadow-primary/20">
            <Phone className="w-4 h-4" />
            <span>Call Store</span>
          </button>
          <div className="flex items-center gap-2 md:gap-4 text-on-surface-variant">
            <button className="p-2 hover:bg-primary/5 rounded-full transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-primary/5 rounded-full transition-colors relative">
              <ShoppingBasket className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-lebanese-red rounded-full"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-primary z-50 md:hidden"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              className="fixed inset-y-0 left-0 z-50 flex w-[86vw] max-w-[340px] flex-col bg-[#fcf9f8] p-6 shadow-2xl border-r border-outline-variant/40 md:hidden"
            >
              <div className="flex justify-between items-center mb-8">
                <span className="text-xl font-bold text-primary">Tarragon Market</span>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close navigation menu"
                  className="p-2 bg-surface-container-low hover:bg-primary-fixed rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-on-surface-variant" />
                </button>
              </div>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-lg font-medium p-3 rounded-xl transition-all ${
                      location.pathname === link.path 
                        ? 'bg-primary/10 text-primary' 
                        : 'text-on-surface-variant hover:bg-primary/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <div className="mt-auto pt-8">
                <a href="tel:+13056631121" className="w-full flex items-center justify-center gap-3 bg-primary text-white py-4 rounded-2xl font-bold shadow-lg shadow-primary/20">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
