import SocialLinks from './SocialIcons';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-white/60 dark:bg-[#0B0E14]/60 backdrop-blur-2xl border-t border-gray-100/50 dark:border-gray-800/50 pt-24 pb-12 transition-colors duration-500 relative overflow-hidden" dir="rtl">
      
      {/* Decorative Sub-Glow */}
      <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[80%] max-w-4xl h-40 bg-orange-200/20 dark:bg-orange-600/10 blur-[120px] pointer-events-none transition-colors duration-1000 mix-blend-multiply dark:mix-blend-screen"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col items-center text-center gap-6 mb-16 border-b border-gray-100/50 dark:border-gray-800/50 pb-16">
          
          <Link href="/" className="flex flex-col items-center gap-2 transition-transform hover:scale-105">
            <img src="/images/logo.png" alt="ميزاب محسان - مشويات بطعم الأصالة" className="w-48 h-auto object-contain drop-shadow-md" />
          </Link>
          
          <p className="text-gray-500 dark:text-gray-400 font-medium text-lg max-w-lg leading-relaxed">
            مشويات، أكلات شعبية، وحلويات بطعم سوداني أصيل. التميز في كل طبق نعده لكم بشغف متوارث.
          </p>

          <div className="mt-2 mb-2">
            <SocialLinks idSuffix="footer" />
          </div>
          
          <div className="flex gap-8 md:gap-12 font-bold text-gray-700 dark:text-gray-300 flex-wrap justify-center text-lg mt-4">
            <Link href="/" className="hover:text-orange-600 dark:hover:text-orange-500 transition-colors">الرئيسية</Link>
            <Link href="/menu" className="hover:text-orange-600 dark:hover:text-orange-500 transition-colors">القائمة</Link>
            <Link href="/about" className="hover:text-orange-600 dark:hover:text-orange-500 transition-colors">من نحن</Link>
            <Link href="/contact" className="hover:text-orange-600 dark:hover:text-orange-500 transition-colors">تواصل معنا</Link>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-sm font-bold text-gray-400 dark:text-gray-500">
          
          <div className="flex items-center transition-transform hover:-translate-y-1 hover:scale-[1.02] duration-300">
            <div className="flex items-center gap-2.5 bg-gradient-to-r from-gray-50/80 to-white/80 dark:from-[#111827]/80 dark:to-[#0B0E14]/80 backdrop-blur-xl px-7 py-3.5 rounded-2xl border border-gray-100/80 dark:border-gray-800/80 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)]">
              <span className="text-gray-500 dark:text-gray-400 font-medium">إدارة المطعم:</span>
              <span className="text-gray-900 dark:text-white font-black text-base tracking-wide bg-clip-text text-transparent bg-gradient-to-l from-orange-600 to-amber-500 drop-shadow-sm px-1">هيثم الليبي</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          <div className="tracking-wide text-[15px]">
            &copy; {new Date().getFullYear()} ميزاب محسان - جميع الحقوق محفوظة
          </div>
        </div>
      </div>
    </footer>
  );
}
