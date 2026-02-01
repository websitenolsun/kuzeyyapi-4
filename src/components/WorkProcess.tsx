import React from "react";
import { Search, PenTool, HardHat, Handshake } from "lucide-react";

const WorkProcess = () => {
  const steps = [
    {
      icon: <Search className="w-8 h-8 text-[#C5A059]" />, // Altın rengi ikon
      title: "Keşif ve Planlama",
      description: "İhtiyaçlarınızı yerinde analiz ediyor, en doğru yol haritasını belirliyoruz.",
    },
    {
      icon: <PenTool className="w-8 h-8 text-[#C5A059]" />,
      title: "Tasarım ve Proje",
      description: "Hayalinizdeki mekanı teknik ve estetik detaylarla projelendiriyoruz.",
    },
    {
      icon: <HardHat className="w-8 h-8 text-[#C5A059]" />,
      title: "Uygulama ve Montaj",
      description: "Uzman ekibimizle projeyi, takvime sadık kalarak hayata geçiriyoruz.",
    },
    {
      icon: <Handshake className="w-8 h-8 text-[#C5A059]" />,
      title: "Teslim ve Destek",
      description: "Projeyi eksiksiz teslim ediyor, satış sonrası desteğimizle yanınızda oluyoruz.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#C5A059] font-semibold text-sm uppercase tracking-wider">
            NASIL ÇALIŞIYORUZ?
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A192F] mt-2">
            Adım Adım Proje Süreci
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Çizgi efekti (Sadece masaüstünde görünür) */}
          <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-100 -z-10" />

          {steps.map((step, index) => (
            <div key={index} className="relative bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 group">
              <div className="w-16 h-16 bg-[#0A192F] rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0A192F] mb-3 text-center">
                {step.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Alt Kısım Butonu */}
        <div className="text-center mt-12">
            <a href="#contact" className="inline-block px-8 py-3 bg-[#0A192F] text-white font-semibold rounded hover:bg-[#C5A059] transition-colors duration-300">
                Projenizi Başlatın
            </a>
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
