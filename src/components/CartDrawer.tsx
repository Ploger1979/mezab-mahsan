'use client';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';

export default function CartDrawer() {
  const { isCartOpen, toggleCart, cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

  const handleCheckout = () => {
    // Format cart into WhatsApp message
    let message = `*طلب جديد من ميزاب محسان* 🍔\n\n`;
    message += `*الطلبات:*\n`;
    
    cartItems.forEach(item => {
      message += `- ${item.name} (${item.quantity}x) = ${item.price * item.quantity} ج.س\n`;
    });
    
    message += `\n*الإجمالي:* ${cartTotal} ج.س\n\n`;
    message += `الرجاء تأكيد الطلب واختيار طريقة الدفع (بنكك / نقدي عند الاستلام).`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/249128333337?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-50 transition-opacity"
          onClick={toggleCart}
        />
      )}

      {/* Drawer */}
      <div 
        className={`fixed top-0 left-0 w-full md:w-96 h-full bg-white dark:bg-[#0B0E14] shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          isCartOpen ? 'translate-x-0' : '-translate-x-full'
        } flex flex-col`}
      >
        <div className="p-6 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
          <h2 className="text-2xl font-black text-gray-900 dark:text-white">سلة المشتريات</h2>
          <button 
            onClick={toggleCart}
            className="p-2 text-gray-500 hover:text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-950/30 rounded-full transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500 dark:text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 text-gray-300 dark:text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <p className="font-medium text-lg">سلتك فارغة حالياً</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 bg-gray-50 dark:bg-gray-900 rounded-2xl p-3 border border-gray-100 dark:border-gray-800">
                <div className="w-20 h-20 rounded-xl overflow-hidden relative flex-shrink-0 bg-gray-200 dark:bg-gray-800">
                  {item.image && (
                    <Image src={item.image} alt={item.name} layout="fill" objectFit="cover" />
                  )}
                </div>
                <div className="flex flex-col flex-grow justify-between py-1">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-gray-900 dark:text-white line-clamp-1">{item.name}</h4>
                    <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700 p-1">
                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex justify-between items-end mt-2">
                    <div className="flex items-center gap-3 bg-white dark:bg-[#111827] rounded-lg px-2 border border-gray-200 dark:border-gray-700 shadow-sm">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="text-lg font-bold text-gray-600 hover:text-orange-600 px-1" disabled={item.quantity <= 1}>-</button>
                      <span className="font-bold text-gray-900 dark:text-white w-4 text-center">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="text-lg font-bold text-gray-600 hover:text-orange-600 px-1">+</button>
                    </div>
                    <span className="font-black text-orange-600 dark:text-orange-500 text-lg">{item.price * item.quantity} <span className="text-xs text-gray-500">ج.س</span></span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-gray-100 dark:border-gray-800 p-6 bg-gray-50 dark:bg-gray-900/50">
            <div className="flex justify-between items-center mb-6">
              <span className="text-gray-500 dark:text-gray-400 font-bold">الإجمالي المبدئي</span>
              <span className="text-3xl font-black text-gray-900 dark:text-white">{cartTotal} <span className="text-sm text-gray-500">ج.س</span></span>
            </div>
            <button 
              onClick={handleCheckout}
              className="w-full bg-[#25D366] hover:bg-[#1ebd59] text-white py-4 rounded-2xl font-black text-lg shadow-lg shadow-[#25D366]/30 transform hover:-translate-y-1 transition-all flex items-center justify-center gap-3"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M11.944 0A12 12 0 000 12a12 12 0 001.602 6.002L.034 23.992l6.19-1.624A12 12 0 0011.944 24C18.575 24 24 18.626 24 12S18.575 0 11.944 0zm0 22.008a9.96 9.96 0 01-5.083-1.39l-.364-.216-3.774.99.998-3.682-.236-.376A9.957 9.957 0 012.012 12c0-5.485 4.46-9.945 9.932-9.945A9.962 9.962 0 0121.875 12a9.96 9.96 0 01-9.931 10.008zm5.45-7.447c-.298-.15-1.766-.872-2.04-.972-.273-.1-.472-.15-.67.15-.199.298-.771.97-.945 1.17-.174.198-.348.223-.646.073-.298-.149-1.26-.464-2.4-1.482-.888-.79-1.487-1.766-1.66-2.065-.173-.299-.018-.46.13-.61.134-.135.298-.348.447-.522.15-.174.199-.298.298-.497.099-.199.05-.374-.025-.523-.075-.15-.67-1.616-.918-2.213-.242-.58-.487-.502-.67-.512-.174-.01-.373-.01-.572-.01-.199 0-.522.073-.795.372-.273.298-1.044 1.02-1.044 2.485s1.07 2.883 1.218 3.082c.15.199 2.1 3.203 5.085 4.492.712.308 1.266.492 1.701.63.715.226 1.365.193 1.879.117.575-.084 1.766-.723 2.015-1.42.248-.698.248-1.295.174-1.42-.075-.125-.274-.2-.573-.35z"/>
              </svg>
              تأكيد الطلب والتوجه للدفع
            </button>
          </div>
        )}
      </div>
    </>
  );
}
