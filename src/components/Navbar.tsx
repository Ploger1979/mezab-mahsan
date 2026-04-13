'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ThemeToggle from './ThemeToggle';
import SocialLinks from './SocialIcons';
import { useEffect, useState } from 'react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartItems, toggleCart } = useCart();
  const cartItemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', path: '/' },
    { name: 'القائمة', path: '/menu' },
    { name: 'من نحن', path: '/about' },
    { name: 'تواصل معنا', path: '/contact' },
  ];

  return (
    <nav className="bg-white/70 dark:bg-[#0B0E14]/70 backdrop-blur-xl sticky top-0 z-50 border-b border-gray-100/50 dark:border-gray-800/50 shadow-sm transition-colors duration-500" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between h-[5.5rem] items-center">
          
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center transition-transform hover:scale-105 py-2">
               <img src="/images/logo.png" alt="ميزاب محسان - مشويات بطعم الأصالة" className="h-[4.5rem] md:h-20 w-auto object-contain drop-shadow-sm" />
            </Link>
          </div>
          
          {/* Main Navigation with Active State logic */}
          <div className="hidden md:flex items-center gap-10 lg:gap-12 text-base">
            {mounted && navLinks.map((link) => {
              const isActive = link.path === '/' ? pathname === '/' : pathname?.startsWith(link.path);
              
              return (
                <Link 
                  key={link.path} 
                  href={link.path} 
                  className={`font-bold transition-all duration-300 relative py-2 ${
                    isActive 
                      ? 'text-orange-600 dark:text-orange-400 drop-shadow-sm' 
                      : 'text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400'
                  }`}
                >
                  {link.name}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full transition-all duration-300 ease-out flex ${
                    isActive ? 'w-full opacity-100' : 'w-0 opacity-0'
                  }`}></span>
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center gap-4 lg:gap-5">
            <SocialLinks idSuffix="desktop-nav" />
            
            {mounted && (
              <button onClick={toggleCart} className="relative p-2.5 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-orange-100 dark:hover:bg-orange-900/30 text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-600 text-white min-w-[20px] h-5 rounded-full flex items-center justify-center text-xs font-bold px-1 ring-2 ring-white dark:ring-[#0B0E14]">
                    {cartItemCount}
                  </span>
                )}
              </button>
            )}

            <ThemeToggle />
            <Link 
              href="/menu" 
              className="flex items-center justify-center bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-3 rounded-2xl font-black hover:bg-orange-600 dark:hover:bg-orange-500 hover:text-white dark:hover:text-white shadow-lg shadow-gray-900/10 dark:shadow-white/10 hover:shadow-[0_0_25px_rgba(234,88,12,0.4)] dark:hover:shadow-[0_0_25px_rgba(234,88,12,0.5)] transition-all duration-300 transform hover:-translate-y-1"
            >
              اطلب الآن
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
            
            {mounted && (
              <button onClick={toggleCart} className="relative p-2 text-gray-700 dark:text-gray-300 hover:text-orange-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {cartItemCount > 0 && (
                  <span className="absolute 0 top-0 right-0 bg-orange-600 text-white min-w-[18px] h-5 rounded-full flex items-center justify-center text-[10px] font-bold px-1 ring-2 ring-white dark:ring-[#0B0E14] transform translate-x-1/4 -translate-y-1/4">
                    {cartItemCount}
                  </span>
                )}
              </button>
            )}

            <ThemeToggle />
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
              className="text-gray-700 dark:text-gray-300 hover:text-orange-600 focus:outline-none transition-colors"
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              )}
            </button>
          </div>
          
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full h-[calc(100vh-5.5rem)] bg-white dark:bg-[#0B0E14] py-8 px-4 animate-in slide-in-from-top-4 duration-300 z-50 flex flex-col justify-center items-center gap-12 border-t border-gray-100/50 dark:border-gray-800/50">
          <div className="flex flex-col items-center gap-6 w-full max-w-sm">
            {navLinks.map((link) => {
              const isActive = link.path === '/' ? pathname === '/' : pathname?.startsWith(link.path);
              return (
                <Link 
                  key={link.path} 
                  href={link.path} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-bold text-2xl transition-colors py-3 px-8 text-center rounded-2xl w-full ${
                    isActive 
                      ? 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400' 
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
          
          <div className="flex flex-col items-center gap-6 pb-20 w-full border-t border-gray-100/50 dark:border-gray-800/50 pt-8 max-w-xs">
            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">التواصل الاجتماعي</span>
            <SocialLinks idSuffix="mobile-nav" />
          </div>
        </div>
      )}
    </nav>
  );
}
