import { useState, useEffect } from "react";
import heroIndustrial from "@/assets/hero-industrial.jpg";
import heroKitchen from "@/assets/hero-kitchen.jpg";

const Hero = () => {
  const [showKitchen, setShowKitchen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setShowKitchen(prev => !prev), 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroIndustrial} className="absolute inset-0 w-full h-full object-cover brightness-[0.85]" alt="Kuzey Yapı Tesisat" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-slate-900/40 to-slate-900/80" />
        <div className="absolute inset-0 bg-blue-600/[0.02]" />
        <div className="absolute inset-0 bg-white/[0.03]" />
      </div>

      <div className={`absolute inset-0 transition-opacity duration-1000 ${showKitchen ? "opacity-100" : "opacity-0"}`}>
        <img src={heroKitchen} className="absolute inset-0 w-full h-full object-cover brightness-[0.85]" alt="Kuzey Yapı Dekorasyon" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-slate-900/40 to-slate-900/80" />
        <div className="absolute inset-0 bg-blue-600/[0.02]" />
        <div className="absolute inset-0 bg-white/[0.03]" />
      </div>

      <div className="absolute inset-0 flex items-center z-10">
        <div className="container mx-auto px-6 lg:px-12 animate-slide-up">
          <div className="max-w-4xl text-left">
            <h1
              className="font-display font-bold text-[1.9rem] sm:text-[2.9rem] md:text-6xl text-white tracking-wide leading-tight"
              style={{ textShadow: '0 4px 20px rgba(0, 0, 0, 0.4)', transform: 'translateY(-8px) scale(1.19)', transformOrigin: 'left top' }}
            >
              Yapıların <br className="sm:hidden" />Geleceğini <br /> Tasarlıyoruz
            </h1>
            <div className="mt-10 h-1 w-28 sm:w-40 bg-[#D4AF37] rounded-full shadow-sm" />
          </div>
        </div>
      </div>

      
    </section>
  );
};
export default Hero;