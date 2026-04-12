import Logo from '@/components/Logo';
import ThemeToggle from '@/components/ThemeToggle';
import Link from 'next/link';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden transition-colors duration-500 z-10 w-full" dir="rtl">
      
      {/* Decorative localized backgrounds specifically for Admin Pages over Global BG */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-200/20 dark:bg-orange-900/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-amber-100/20 dark:bg-indigo-900/10 rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-screen"></div>
      </div>

      <header className="relative z-10 w-full p-6 md:p-10 flex justify-between items-center border-b border-gray-100/30 dark:border-gray-800/30 bg-white/40 dark:bg-gray-900/40 backdrop-blur-md">
        <Logo />
        <div className="flex items-center gap-6">
          <ThemeToggle />
          <Link href="/" className="text-gray-500 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-500 font-bold text-sm transition flex items-center gap-2">
            العودة للموقع
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </Link>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center p-6 relative z-10 w-full">
        {children}
      </main>
    </div>
  );
}
