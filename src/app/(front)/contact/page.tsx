import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full relative z-10 transition-colors duration-500">
      
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight relative inline-block">
          تواصل <span className="text-orange-600 drop-shadow-sm">معنا</span>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1.5 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"></div>
        </h1>
        <p className="mt-8 text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
          يسعدنا تواصلكم معنا، وآراؤكم تهمنا دائمًا لتقديم تجربة أفضل بلمسة الوفاء والجودة، نحن دائماً هنا في خدمتكم.
        </p>
      </div>

      <div className="bg-white/70 dark:bg-[#111827]/70 backdrop-blur-2xl rounded-[32px] shadow-2xl shadow-gray-200/50 dark:shadow-black/50 border border-gray-100/50 dark:border-gray-800/50 overflow-hidden transform transition-all duration-500 hover:shadow-[0_0_40px_rgba(234,88,12,0.05)]">
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          <div className="p-10 md:p-16 flex flex-col justify-center">
            <h2 className="text-3xl font-black text-gray-900 dark:text-white mb-8">نحن هنا لخدمتكم 🤝</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-10 font-medium">
              تواصل معنا لأي استفسار، طلبات خاصة، لحجز الطاولات أو تنظيم المناسبات. فريقنا مجهز للإجابة على جميع استفساراتكم بترحيب ومحبة لتوفير وقتكم وجهدكم.
            </p>
            
            <ul className="space-y-6">
              <li className="flex items-center gap-5 text-gray-700 dark:text-gray-300 font-bold text-lg p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/80 dark:border-gray-700">
                <div className="w-14 h-14 bg-white dark:bg-gray-900 shadow-sm text-orange-600 dark:text-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span>رقم المتجر: 249128333337+</span>
              </li>
              <li className="flex items-center gap-5 text-gray-700 dark:text-gray-300 font-bold text-lg p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-white/80 dark:border-gray-700">
                <div className="w-14 h-14 bg-white dark:bg-gray-900 shadow-sm text-orange-600 dark:text-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span>الخرطوم، السودان</span>
              </li>
            </ul>
          </div>

          <div className="bg-orange-50/50 dark:bg-[#0B0E14]/70 p-10 md:p-16 border-r border-gray-100/50 dark:border-gray-800/50 flex flex-col justify-center text-center items-center relative overflow-hidden backdrop-blur-md">
            <div className="absolute inset-0 bg-gradient-to-t from-orange-200/40 dark:from-indigo-900/10 to-transparent pointer-events-none mix-blend-multiply dark:mix-blend-screen"></div>
            
            <a href="https://wa.me/249128333337?text=السلام%20عليكم%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%B7%D9%84%D8%A8%20%D9%85%D9%86%20%D9%85%D8%B7%D8%B9%D9%85%20%D9%85%D9%8A%D8%B2%D8%A7%D8%A8%20%D9%85%D8%AD%D8%B3%D8%A7%D9%86" target="_blank" rel="noopener noreferrer" className="w-24 h-24 bg-gradient-to-br from-[#25D366] to-[#1DA851] text-white rounded-[24px] flex items-center justify-center mb-8 shadow-2xl shadow-[#25D366]/30 transform rotate-0 transition-transform hover:-rotate-6 hover:scale-105 duration-300 relative z-10 border border-[#25D366]/40 cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#25D366]/20 block">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                 <path d="M11.944 0A12 12 0 000 12a12 12 0 001.602 6.002L.034 23.992l6.19-1.624A12 12 0 0011.944 24C18.575 24 24 18.626 24 12S18.575 0 11.944 0zm0 22.008a9.96 9.96 0 01-5.083-1.39l-.364-.216-3.774.99.998-3.682-.236-.376A9.957 9.957 0 012.012 12c0-5.485 4.46-9.945 9.932-9.945A9.962 9.962 0 0121.875 12a9.96 9.96 0 01-9.931 10.008zm5.45-7.447c-.298-.15-1.766-.872-2.04-.972-.273-.1-.472-.15-.67.15-.199.298-.771.97-.945 1.17-.174.198-.348.223-.646.073-.298-.149-1.26-.464-2.4-1.482-.888-.79-1.487-1.766-1.66-2.065-.173-.299-.018-.46.13-.61.134-.135.298-.348.447-.522.15-.174.199-.298.298-.497.099-.199.05-.374-.025-.523-.075-.15-.67-1.616-.918-2.213-.242-.58-.487-.502-.67-.512-.174-.01-.373-.01-.572-.01-.199 0-.522.073-.795.372-.273.298-1.044 1.02-1.044 2.485s1.07 2.883 1.218 3.082c.15.199 2.1 3.203 5.085 4.492.712.308 1.266.492 1.701.63.715.226 1.365.193 1.879.117.575-.084 1.766-.723 2.015-1.42.248-.698.248-1.295.174-1.42-.075-.125-.274-.2-.573-.35z"/>
               </svg>
            </a>
            <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-4 relative z-10">للطلب السريع</h3>
            <p className="text-gray-500 dark:text-gray-300 font-medium text-lg relative z-10 max-w-xs mx-auto">
              يمكنك ببساطة الضغط على أيقونة الواتساب أعلاه، نحن جاهزون لاستقبال طلبك وإرساله فوراً.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
