'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import ThemeToggle from '@/components/ThemeToggle';
import Logo from '@/components/Logo';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    // Clear mock token to trigger middleware redirect on next navigation
    document.cookie = "admin_session=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT";
    window.location.href = '/login';
  };

  const [adminData, setAdminData] = useState({ name: '', role: '' });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const getAdminData = () => {
      try {
        const cookieData = document.cookie.split('; ').find(row => row.startsWith('admin_session='));
        if (!cookieData) return null;
        const token = cookieData.split('=')[1];
        
        // Robust Base64 Decoding that supports UTF-8 (Umlauts like ö, ä, ü and Arabic)
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
      } catch (e) {
        return null;
      }
    };

    const data = getAdminData();
    if (data) {
      setAdminData({ name: data.name, role: data.role });
    }
  }, []);

  if (!isMounted) {
    return <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#0B0E14]" />;
  }

  const initial = adminData.name ? adminData.name.charAt(0).toUpperCase() : 'A';
  const roleDisplay = adminData.role === 'super_admin' ? 'Super Admin' : 'Admin';

  const navItems = [
    { name: 'الرئيسية', path: '/admin', icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' },
    { name: 'إدارة المنيو', path: '/admin/menu', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01' },
    { name: 'الفواتير', path: '/admin/invoices', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
    // Only show 'المديرين' if the logged-in role is super_admin
    ...(adminData.role === 'super_admin' ? [
      { name: 'المديرين', path: '/admin/users', icon: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' }
    ] : []),
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB] dark:bg-[#0B0E14] flex transition-colors duration-500" dir="rtl">
      
      {/* Desktop Sidebar */}
      <aside className="w-72 bg-white dark:bg-[#111827] flex-col hidden md:flex h-screen sticky top-0 border-l border-gray-100/50 dark:border-gray-800/80 shadow-[10px_0_15px_rgba(0,0,0,0.02)] z-30">
        <div className="p-8 border-b border-gray-100/50 dark:border-gray-800/80 flex items-center justify-center">
          <Logo />
        </div>
        
        <div className="p-4 flex-grow space-y-2 mt-4 overflow-y-auto">
          <div className="px-4 mb-4 text-xs font-black text-gray-400 dark:text-gray-500 tracking-wider">الوصول السريع</div>
          {navItems.map(item => {
            const isActive = pathname === item.path;
            return (
              <Link key={item.path} href={item.path} className={`flex items-center gap-4 px-4 py-3.5 rounded-2xl font-bold transition-all duration-300 ${isActive ? 'bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-500 shadow-sm border border-orange-100 dark:border-orange-900/30' : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill={isActive ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={isActive ? 0 : 2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                </svg>
                {item.name}
              </Link>
            )
          })}
        </div>
        
        <div className="p-6 border-t border-gray-100/50 dark:border-gray-800/80">
          <button onClick={handleLogout} className="flex flex-row items-center justify-center gap-3 w-full px-4 py-3.5 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-2xl font-bold hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            تسجيل الخروج
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        
        {/* Top Header */}
        <header className="h-[5.5rem] bg-white/80 dark:bg-[#111827]/80 backdrop-blur-xl border-b border-gray-100/50 dark:border-gray-800/80 flex items-center justify-between px-6 lg:px-10 sticky top-0 z-20 shadow-sm transition-colors duration-500">
          
          <div className="md:hidden flex items-center">
             {/* Mobile Logo Fallback */}
             <span className="font-black text-xl text-gray-900 dark:text-white">إدارة ميزاب</span>
          </div>
          
          <div className="hidden md:block">
            <h2 className="text-xl font-bold text-gray-800 dark:text-white/90">
              {navItems.find(i => i.path === pathname)?.name || 'لوحة التحكم'}
            </h2>
          </div>

          <div className="flex items-center gap-5">
            <ThemeToggle />
            
            <div className="h-8 w-px bg-gray-200 dark:bg-gray-700 hidden sm:block"></div>
            
            <div className="flex items-center gap-3 cursor-pointer p-1.5 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <div className="text-left hidden sm:block">
                <div className="text-sm font-bold text-gray-900 dark:text-white">{adminData.name}</div>
                <div className="text-xs text-orange-600 dark:text-orange-500 font-bold mt-0.5">{roleDisplay}</div>
              </div>
              <div className="h-10 w-10 bg-gradient-to-tr from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 rounded-full flex items-center justify-center text-white dark:text-gray-900 font-black border-2 border-white dark:border-gray-800 shadow-sm uppercase">
                {initial}
              </div>
            </div>
          </div>
        </header>

        {/* Dynamic Route Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-10 pb-28 md:pb-10 relative z-0">
          <div className="max-w-6xl mx-auto">
            {children}
          </div>
        </main>

      </div>

      {/* Mobile Bottom Navigation (Native App Feel) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-[#111827]/80 backdrop-blur-xl border-t border-gray-100 dark:border-gray-800 z-50 flex justify-around items-center p-2 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] transition-colors duration-500">
        {navItems.map(item => {
          const isActive = pathname === item.path;
          return (
            <Link key={item.path} href={item.path} className={`flex flex-col items-center py-2 px-3 rounded-2xl transition-all duration-300 ${isActive ? 'text-orange-600 dark:text-orange-500 bg-orange-50 dark:bg-orange-900/20 shadow-sm' : 'text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mb-1" fill={isActive ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={isActive ? 0 : 2}>
                <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
              </svg>
              <span className="text-[10px] font-black">{item.name}</span>
            </Link>
          );
        })}
        <button onClick={handleLogout} className="flex flex-col items-center py-2 px-3 rounded-2xl text-red-500 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all">
          <svg className="h-6 w-6 mb-1 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <span className="text-[10px] font-black">خروج</span>
        </button>
      </nav>
      
    </div>
  );
}
