import type { Metadata } from 'next';
import { Cairo } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const cairo = Cairo({
  variable: '--font-cairo',
  subsets: ['arabic', 'latin'],
  weight: ['400', '600', '700', '900'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'ميزاب محسان - مشويات بطعم الأصالة',
  description: 'مشويات على الفحم، أكلات شعبية، وحلويات بطعم سوداني أصيل',
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col font-sans text-gray-900 dark:text-gray-100 transition-colors duration-500 overflow-x-hidden relative bg-[#FCFBF9] dark:bg-[#0B0F19]">
        <Script
          id="theme-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark')
                } else {
                  document.documentElement.classList.remove('dark')
                }
              } catch (_) {}
            `,
          }}
        />
        
        {/* GLOBAL DYNAMIC BACKGROUND (Z-0) */}
        <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-orange-100/40 dark:bg-orange-600/10 blur-[120px] transition-all duration-700"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-amber-100/30 dark:bg-[#1E1B4B]/30 blur-[130px] transition-all duration-700"></div>
          <div className="absolute top-[40%] right-[10%] w-[30%] h-[30%] rounded-full bg-orange-50/50 dark:bg-purple-900/10 blur-[100px] transition-all duration-700"></div>
        </div>

        {/* Global Components Layout (Z-10) delegated to route groups */}
        {children}
      </body>
    </html>
  );
}
