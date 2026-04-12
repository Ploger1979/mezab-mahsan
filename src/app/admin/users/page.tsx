export default function AdminUsersPage() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex justify-between items-end mb-10">
        <div>
          <h1 className="text-3xl font-black text-gray-900 dark:text-white mb-2">إدارة المديرين</h1>
          <p className="text-gray-500 dark:text-gray-400 font-medium">تحكم في الصلاحيات وأضف مديرين جدد للمنصة بحماية كاملة.</p>
        </div>
        <button className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 px-6 py-3 rounded-xl font-bold shadow-sm transition-all flex items-center gap-2">
           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
          </svg>
          إضافة مدير
        </button>
      </div>

      <div className="bg-white dark:bg-[#111827] rounded-[24px] border border-gray-100/50 dark:border-gray-800/80 shadow-[0_8px_30px_rgb(0,0,0,0.03)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.1)] p-8 text-center">
        <div className="py-16">
           <div className="w-20 h-20 bg-gray-50 dark:bg-gray-800/50 rounded-full flex items-center justify-center mx-auto mb-6">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
           </div>
           <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2">نظام الإدارة تحت الإنشاء</h3>
           <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto">سيتم ربط صلاحيات المديرين بقاعدة بيانات MongoDB لاحقاً.</p>
        </div>
      </div>
    </div>
  );
}
