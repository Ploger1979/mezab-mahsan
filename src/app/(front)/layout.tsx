import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ScrollToTop from '@/components/ScrollToTop';

export default function FrontLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative z-10 flex flex-col flex-grow w-full">
      <Navbar />
      
      <main className="flex-grow flex flex-col relative w-full">
        {children}
      </main>
      
      <Footer />
      
      {/* Global Floating Elements (Z-40/50) only for front */}
      <FloatingWhatsApp />
      <ScrollToTop />
    </div>
  );
}
