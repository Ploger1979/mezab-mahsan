import Hero from '@/components/Hero';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center relative z-10 w-full transition-colors duration-500">
        <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">اكتشف أشهى الأطباق</h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-medium mb-12 leading-relaxed">
          من المشويات المختارة بعناية لحومها، إلى أشهر الأكلات الشعبية الأصيلة. كل طبق يروي قصة عراقة تتذوقها في كل لقمة.
        </p>
        <Link 
          href="/menu" 
          className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-12 py-4.5 rounded-2xl font-bold text-lg border border-orange-500 shadow-[0_0_20px_rgba(234,88,12,0.3)] hover:shadow-[0_0_30px_rgba(234,88,12,0.4)] transform hover:-translate-y-1 transition-all duration-300"
        >
          تصفح القائمة الكاملة
        </Link>
      </div>
    </>
  );
}
