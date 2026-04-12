import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="inline-flex items-center gap-3 group">
      <div className="flex items-center justify-center w-12 h-12 rounded-[14px] bg-gradient-to-br from-orange-500 to-orange-700 text-white shadow-lg shadow-orange-500/30 transform group-hover:-rotate-6 transition-transform duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
        </svg>
      </div>
      <div className="text-2xl font-black tracking-tight text-gray-900 dark:text-white transition-colors duration-300 mt-1 uppercase">
        ميزاب <span className="text-orange-600">محسان</span>
      </div>
    </Link>
  );
}
