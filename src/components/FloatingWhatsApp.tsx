'use client';

export default function FloatingWhatsApp() {
  const whatsappUrl = "https://wa.me/249128333337?text=السلام%20عليكم%D8%8C%20%D8%A3%D8%B1%D9%8A%D8%AF%20%D8%A7%D9%84%D8%B7%D9%84%D8%A8%20%D9%85%D9%86%20%D9%85%D8%B7%D8%B9%D9%85%20%D9%85%D9%8A%D8%B2%D8%A7%D8%A8%20%D9%85%D8%AD%D8%B3%D8%A7%D9%86";

  return (
    <div className="fixed bottom-6 right-6 z-50 group" dir="rtl">
      {/* Tooltip positioned correctly for the right side */}
      <div className="absolute right-full top-1/2 -translate-y-1/2 mr-4 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-bold rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap shadow-xl">
        اطلب عبر واتساب
        <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 border-y-8 border-y-transparent border-l-8 border-l-gray-900 dark:border-l-white"></div>
      </div>
      
      {/* Button */}
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-[60px] h-[60px] bg-[#25D366] text-white rounded-full shadow-[0_8px_30px_rgb(37,211,102,0.4)] hover:shadow-[0_12px_40px_rgb(37,211,102,0.6)] transform hover:-translate-y-2 hover:scale-105 transition-all duration-300"
        aria-label="تواصل معنا عبر واتساب"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.944 0A12 12 0 000 12a12 12 0 001.602 6.002L.034 23.992l6.19-1.624A12 12 0 0011.944 24C18.575 24 24 18.626 24 12S18.575 0 11.944 0zm0 22.008a9.96 9.96 0 01-5.083-1.39l-.364-.216-3.774.99.998-3.682-.236-.376A9.957 9.957 0 012.012 12c0-5.485 4.46-9.945 9.932-9.945A9.962 9.962 0 0121.875 12a9.96 9.96 0 01-9.931 10.008zm5.45-7.447c-.298-.15-1.766-.872-2.04-.972-.273-.1-.472-.15-.67.15-.199.298-.771.97-.945 1.17-.174.198-.348.223-.646.073-.298-.149-1.26-.464-2.4-1.482-.888-.79-1.487-1.766-1.66-2.065-.173-.299-.018-.46.13-.61.134-.135.298-.348.447-.522.15-.174.199-.298.298-.497.099-.199.05-.374-.025-.523-.075-.15-.67-1.616-.918-2.213-.242-.58-.487-.502-.67-.512-.174-.01-.373-.01-.572-.01-.199 0-.522.073-.795.372-.273.298-1.044 1.02-1.044 2.485s1.07 2.883 1.218 3.082c.15.199 2.1 3.203 5.085 4.492.712.308 1.266.492 1.701.63.715.226 1.365.193 1.879.117.575-.084 1.766-.723 2.015-1.42.248-.698.248-1.295.174-1.42-.075-.125-.274-.2-.573-.35z"/>
        </svg>
      </a>
    </div>
  );
}
