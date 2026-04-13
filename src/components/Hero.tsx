import Link from 'next/link';

export default function Hero() {
  return (
    // Hero is completely transparent because we use the global layout background
    <div className="relative overflow-hidden w-full transition-colors duration-500">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-40 relative z-10 flex flex-col items-center text-center">
        
        <div className="bg-white/60 dark:bg-gray-900/40 text-orange-700 dark:text-orange-400 border border-orange-200/50 dark:border-orange-900/30 font-bold px-6 py-2.5 rounded-full text-sm mb-10 inline-block shadow-sm backdrop-blur-md">
          أهلاً بك في مطعمك المفضل
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black text-gray-900 dark:text-white mb-6 tracking-tight leading-tight transition-colors duration-500">
          <span className="block mb-2">ميزاب محسان</span>
        </h1>
        
        <h2 className="text-orange-600 dark:text-orange-500 block text-3xl md:text-5xl font-black mb-8 tracking-tighter drop-shadow-sm">
          الطعم الذي تبحث عنه
        </h2>
        
        <p className="mt-8 text-xl md:text-[22px] text-gray-600 dark:text-gray-300 max-w-3xl font-medium leading-relaxed mb-12 transition-colors duration-500">
          مشويات على الفحم، شاورما مميزة، وأكلات سودانية بطابع عصري.<br className="hidden md:block" /> كل طبق يروي قصة عراقة تتذوقها في كل لقمة.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 justify-center w-full sm:w-auto mt-4">
          <Link href="/menu" className="w-full sm:w-auto bg-orange-600 hover:bg-orange-500 dark:hover:bg-orange-500 text-white px-10 py-5 rounded-2xl font-black text-lg shadow-[0_0_30px_rgba(234,88,12,0.2)] hover:shadow-[0_0_40px_rgba(234,88,12,0.4)] transition-all transform hover:-translate-y-1 text-center">
            اكتشف أشهى الأطباق
          </Link>
          <a href="/contact" className="w-full sm:w-auto bg-white/80 dark:bg-gray-800/80 backdrop-blur-md hover:bg-white dark:hover:bg-gray-700 text-gray-900 dark:text-white border border-gray-200/80 dark:border-gray-700 px-10 py-5 rounded-2xl font-black text-lg shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-1 text-center">
            تواصل معنا
          </a>
        </div>
      </div>
    </div>
  );
}
