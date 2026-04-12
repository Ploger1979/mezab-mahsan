import Link from "next/link";

export default function AdminDashboardPage() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="mb-10">
        <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-2">نظرة عامة</h1>
        <p className="text-gray-500 dark:text-gray-400 font-medium">مرحباً بك في لوحة تحكم ميزاب محسان لتنظيم تفاصيل المطعم</p>
      </div>

      {/* KPI Cards Placeholder */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        
        {/* Stat Card: Total Products */}
        <div className="bg-white dark:bg-[#111827] p-6 rounded-[24px] border border-gray-100/50 dark:border-gray-800/80 shadow-[0_8px_30px_rgb(0,0,0,0.03)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] flex items-center gap-5 transition-transform hover:-translate-y-1">
          <div className="w-14 h-14 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-500 rounded-2xl flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div>
            <div className="text-gray-500 dark:text-gray-400 text-sm font-bold mb-1">إجمالي الأصناف</div>
            <div className="text-3xl font-black text-gray-900 dark:text-white">12</div>
          </div>
        </div>

        {/* Stat Card: Active Offers */}
        <div className="bg-white dark:bg-[#111827] p-6 rounded-[24px] border border-gray-100/50 dark:border-gray-800/80 shadow-[0_8px_30px_rgb(0,0,0,0.03)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] flex items-center gap-5 transition-transform hover:-translate-y-1">
          <div className="w-14 h-14 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-500 rounded-2xl flex items-center justify-center flex-shrink-0">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
          </div>
          <div>
            <div className="text-gray-500 dark:text-gray-400 text-sm font-bold mb-1">العروض النشطة</div>
            <div className="text-3xl font-black text-gray-900 dark:text-white">2</div>
          </div>
        </div>

      </div>


    
    </div>
  );
}
