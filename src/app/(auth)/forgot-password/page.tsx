'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Mock dispatch
    setTimeout(() => {
      setSent(true);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="w-full max-w-[420px] bg-white/70 dark:bg-[#111827]/70 backdrop-blur-2xl rounded-[32px] shadow-[0_8px_30px_rgb(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)] border border-gray-100/50 dark:border-gray-800/80 p-10 transform hover:-translate-y-1 transition-all duration-300">
      
      <div className="text-center mb-10">
        <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-3">استعادة كلمة المرور</h1>
        <p className="text-gray-500 dark:text-gray-400 font-medium">أدخل بريدك الإلكتروني المرتبط بصلاحياتك لإرسال رابط الاستعادة</p>
      </div>

      {!sent ? (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 dark:text-gray-300 mb-2">البريد الإلكتروني</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#0B0E14] text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all shadow-sm"
              placeholder="admin@mezab.com"
              required
              dir="ltr"
            />
          </div>
          
          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-black dark:hover:bg-gray-100 font-bold py-4 mt-2 rounded-xl shadow-lg shadow-gray-900/20 dark:shadow-white/10 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {loading ? 'جاري الإرسال...' : 'إرسال رابط الاستعادة'}
          </button>
        </form>
      ) : (
        <div className="text-center py-6">
          <div className="w-20 h-20 bg-green-50 dark:bg-green-900/20 text-green-500 dark:text-green-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-green-100 dark:border-green-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-3">تم الإرسال بنجاح</h3>
          <p className="text-gray-500 dark:text-gray-400 mb-2 font-medium leading-relaxed">
            لقد أرسلنا تعليمات استعادة كلمة المرور إلى البريد:
          </p>
          <div className="text-orange-600 dark:text-orange-400 font-bold mb-8" dir="ltr">{email}</div>
          
          <Link href="/login" className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-bold px-8 py-3 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
            العودة لتسجيل الدخول
          </Link>
        </div>
      )}

      {!sent && (
        <div className="mt-8 text-center pt-6 border-t border-gray-100 dark:border-gray-800">
          <Link href="/login" className="text-sm font-bold text-gray-500 dark:text-gray-400 hover:text-orange-600 dark:hover:text-orange-500 transition-colors">
            العودة إلى صفحة تسجيل الدخول
          </Link>
        </div>
      )}
    </div>
  );
}
