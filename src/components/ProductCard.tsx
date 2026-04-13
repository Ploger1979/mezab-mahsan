'use client';
import { Product } from '../types/product';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart, cartItems, updateQuantity, removeFromCart } = useCart();
  const existingCartItem = cartItems.find(item => item.id === product.id);

  return (
    <div className="bg-white dark:bg-[#111827] rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.4)] border border-gray-100/80 dark:border-gray-800/80 overflow-hidden hover:shadow-[0_20px_40px_rgb(234,88,12,0.08)] dark:hover:shadow-[0_20px_40px_rgb(234,88,12,0.15)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full group" dir="rtl">
      
      <div className="relative w-full h-52 overflow-hidden bg-gray-50 dark:bg-gray-900 flex-shrink-0 m-2 rounded-[16px] w-[calc(100%-16px)]">
        
        {/* Placeholder text logic */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-gray-300 dark:text-gray-700 font-medium text-sm">صورة المنتج</span>
        </div>
        
        {product.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover z-10 transition-transform duration-700 ease-out group-hover:scale-110"
          />
        )}
        
        {/* Gradient for dark overlay on images to separate visually */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent z-10 pointer-events-none"></div>

        {!product.isAvailable && (
          <div className="absolute top-3 right-3 bg-red-600/90 backdrop-blur text-white text-xs font-bold px-3 py-1.5 rounded-lg z-20 shadow-md">
            غير متوفر
          </div>
        )}
      </div>
      
      <div className="p-5 pt-4 flex flex-col flex-grow relative bg-white dark:bg-[#111827] z-20 transition-colors duration-300">
        <div className="flex justify-between items-start mb-3 gap-3">
          <h3 className="font-black text-xl text-gray-900 dark:text-gray-100 leading-tight">
            {product.name}
          </h3>
          <span className="bg-orange-50/80 dark:bg-orange-950/40 text-orange-600 dark:text-orange-400 border border-orange-100/50 dark:border-orange-800/80 text-[11px] font-bold px-3 py-1.5 rounded-full whitespace-nowrap flex-shrink-0">
            {product.category}
          </span>
        </div>
        
        <p className="text-gray-500 dark:text-gray-400 font-medium text-[15px] mb-6 leading-relaxed flex-grow">
          {product.description}
        </p>
        
        <div className="flex justify-between items-end mt-auto pt-5 border-t border-gray-50 dark:border-gray-800/60 w-full">
          <div className="flex flex-col flex-1">
            <span className="text-[11px] text-gray-400 dark:text-gray-500 font-bold mb-1 tracking-wider">السعر</span>
            <div className="text-2xl font-black text-gray-900 dark:text-white tracking-tight flex items-baseline">
              <span className="text-orange-600 dark:text-orange-500 mr-0.5">{product.price}</span>
              <span className="text-sm font-bold text-gray-500 dark:text-gray-400 mr-1.5">ج.س</span>
            </div>
          </div>
          
          <div className="flex-shrink-0">
            {existingCartItem && existingCartItem.quantity > 0 ? (
              <div className="flex items-center gap-2 bg-orange-50 dark:bg-orange-900/40 rounded-xl px-2 py-1.5 border border-orange-200 dark:border-orange-800">
                <button onClick={() => updateQuantity(product.id, existingCartItem.quantity - 1)} className="w-8 h-8 flex justify-center items-center rounded-lg bg-white dark:bg-[#0B0F19] text-orange-600 dark:text-orange-400 font-bold shadow-sm hover:scale-105 transition-transform" disabled={existingCartItem.quantity <= 0}>-</button>
                <span className="font-bold text-gray-900 dark:text-white min-w-[20px] text-center">{existingCartItem.quantity}</span>
                <button onClick={() => addToCart(product)} className="w-8 h-8 flex justify-center items-center rounded-lg bg-orange-600 text-white font-bold shadow-sm hover:scale-105 transition-transform">+</button>
              </div>
            ) : (
              <button 
                onClick={() => addToCart(product)}
                disabled={!product.isAvailable}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold transition-all shadow-sm ${
                  product.isAvailable 
                    ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-orange-600 dark:hover:bg-orange-500 hover:text-white hover:scale-105 hover:shadow-orange-500/25' 
                    : 'bg-gray-200 dark:bg-gray-800 text-gray-400 cursor-not-allowed'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="text-sm">أضف للسلة</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
