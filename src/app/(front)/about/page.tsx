import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full relative z-10 transition-colors duration-500">
      
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight relative inline-block">
          من <span className="text-orange-600 drop-shadow-sm">نحن</span>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
        </h1>
      </div>

      <div className="bg-white/70 dark:bg-[#111827]/70 backdrop-blur-2xl rounded-[32px] shadow-2xl shadow-gray-200/50 dark:shadow-black/50 border border-gray-100/50 dark:border-gray-800/50 p-8 md:p-16 text-center transform transition-all duration-500 hover:shadow-[0_0_40px_rgba(234,88,12,0.05)] hover:-translate-y-1">
        <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-8">مرحباً بكم في ميزاب محسان</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-12 font-medium">
          نحن في ميزاب محسان نقدم لكم أشهى المشويات على الفحم والأكلات الشعبية الأصيلة والحلويات المتميزة. نسعى دائماً لنقل أصالة المطبخ السوداني وتقديمه بطابع عصري ورقي، ليعيش كل زائر تجربة طعم لا تُنسى تعكس التزامنا التام بالجودة.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-right">
          
          <div className="bg-white/50 dark:bg-[#161F33]/50 backdrop-blur-sm p-8 rounded-3xl border border-white/80 dark:border-gray-800 transition-colors">
            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 flex items-center gap-3">
              <span className="text-3xl text-orange-600">🎯</span> رؤيتنا
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
              أن نكون الوجهة الأولى لعشاق المذاق الأصيل، حيث نجمع بين جودة المكونات وتفرد التحضير لتقديم كل وجبة بشغف وعناية تامة تناسب تطلعات رواد المطعم.
            </p>
          </div>
          
          <div className="bg-white/50 dark:bg-[#161F33]/50 backdrop-blur-sm p-8 rounded-3xl border border-white/80 dark:border-gray-800 transition-colors">
            <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 flex items-center gap-3">
              <span className="text-3xl text-orange-600">⭐</span> ما يميزنا
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
              تتبيلات حصرية وعمل دؤوب في تحضير المشويات على فحم طبيعي، مع خيارات واسعة من الأكلات الشعبية تلبي جميع الأذواق بمستوى خدمة فاخر يضاهي أرقى المطاعم.
            </p>
          </div>
          
        </div>

        <div className="mt-16">
          <Link href="/menu" className="inline-block bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-12 py-4.5 rounded-2xl font-bold text-lg shadow-lg shadow-gray-900/30 dark:shadow-white/20 hover:shadow-xl dark:hover:shadow-white/30 hover:-translate-y-1 transition-all duration-300">
            استكشف المنيو الخاص بنا
          </Link>
        </div>
      </div>
    </div>
  );
}
