'use client';
import { useState, useEffect } from 'react';
import ProductCard from '@/components/ProductCard';
import { categories } from '@/data/products-data';
import { Product } from '@/types/product';

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>('الكل');
  const [mounted, setMounted] = useState(false);
  const [dbProducts, setDbProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
    const loadData = async () => {
      try {
        const res = await fetch('/api/menu');
        const data = await res.json();
        // Map _id to id to match ProductCard props, and only show available
        const mappedData = data
          .filter((item: any) => item.isAvailable !== false)
          .map((item: any) => ({
            ...item,
            id: item._id,
          }));
        setDbProducts(mappedData);
      } catch (err) {
         console.error('Failed to load menu');
      } finally {
         setLoading(false);
      }
    };
    loadData();
  }, []);

  const filteredProducts: Product[] = activeCategory === 'الكل' ? dbProducts : dbProducts.filter(p => p.category === activeCategory);

  if (!mounted) return null;

  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full relative z-10 transition-colors duration-500">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight relative inline-block">
          قائمة <span className="text-orange-600 drop-shadow-sm">الطعام</span>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
        </h1>
        <p className="mt-8 text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
          تشكيلة فاخرة من المشويات، الأكلات الشعبية، والحلويات بنكهة أصيلة تلبي ذوقك الراقي.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-3 md:gap-5 mb-24">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-8 py-3.5 md:py-4 rounded-xl text-sm md:text-base font-bold transition-all duration-300 border ${
              activeCategory === category
                ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 border-gray-900 dark:border-white shadow-[0_10px_25px_rgba(0,0,0,0.15)] dark:shadow-[0_10px_25px_rgba(255,255,255,0.1)] transform -translate-y-1'
                : 'bg-white/80 dark:bg-[#111827]/80 backdrop-blur-sm text-gray-600 dark:text-gray-300 border-gray-200/80 dark:border-gray-800/80 shadow-sm hover:bg-orange-50/80 dark:hover:bg-gray-800/80 hover:text-orange-600 dark:hover:text-orange-400 hover:border-orange-200/80 dark:hover:border-gray-700 hover:-translate-y-0.5'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map(i => (
             <div key={i} className="animate-pulse flex flex-col gap-4">
                <div className="bg-gray-200 dark:bg-gray-800 rounded-[28px] h-[320px] w-full"></div>
                <div className="bg-gray-200 dark:bg-gray-800 rounded-lg h-6 w-2/3 mx-auto mt-2"></div>
                <div className="bg-gray-200 dark:bg-gray-800 rounded-lg h-4 w-1/3 mx-auto"></div>
             </div>
          ))}
        </div>
      ) : filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-24 bg-white/60 dark:bg-[#111827]/60 backdrop-blur-xl rounded-[24px] border border-gray-100/50 dark:border-gray-800/50 shadow-sm mx-auto max-w-2xl">
          <h3 className="text-2xl font-bold text-gray-400 dark:text-gray-500">لا توجد أصناف في هذا القسم حالياً.</h3>
        </div>
      )}
    </div>
  );
}
