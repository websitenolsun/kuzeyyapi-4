import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Zap, Lightbulb, Home, LayoutGrid, ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import SEOHead, { createServiceSchema } from "@/components/SEOHead";
import useSubServices from "@/hooks/useSubServices";
import DynamicIcon from "@/components/DynamicIcon";
import elektrikTesisati from "@/assets/elektrik-tesisati.jpg";
import aydinlatmaSistemleri from "@/assets/aydinlatma-sistemleri.webp";
import elektrikPanosu from "@/assets/elektrik-panosu.jpg";
import topraklamaSistemleri from "@/assets/topraklama-sistemleri.png";
import enerjiVerimliligiLed from "@/assets/enerji-verimliligi-led.jpg";
import revizyonYenileme from "@/assets/revizyon-yenileme.webp";

// Service-based image mapping for consistent image display
const serviceImageMap: Record<string, string> = {
  "Elektrik Tesisatı (Daire İçi)": elektrikTesisati,
  "Aydınlatma Sistemleri": aydinlatmaSistemleri,
  "Akıllı Ev Sistemleri": "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format",
  "Elektrik Panosu & Güç Dağıtımı": elektrikPanosu,
  "Topraklama Sistemleri": topraklamaSistemleri,
  "Enerji Verimliliği & LED Dönüşüm": enerjiVerimliligiLed,
  "Revizyon & Yenileme": revizyonYenileme
};
const fallbackImage = "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format";
const getServiceImage = (title: string): string => {
  return serviceImageMap[title] || fallbackImage;
};
const ElektrikSistemleri: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const {
    data: subServices,
    isLoading
  } = useSubServices('elektrik');
  const services = [{
    id: 1,
    icon: <Zap size={40} strokeWidth={1.5} />,
    title: "Elektrik Tesisatı",
    desc: "Daire içi elektrik altyapısının kurulumu ve yenilenmesi.",
    detail: "Kablo • Priz • Anahtar • Topraklama"
  }, {
    id: 2,
    icon: <Lightbulb size={40} strokeWidth={1.5} />,
    title: "Aydınlatma Sistemleri",
    desc: "Fonksiyonel ve dekoratif LED aydınlatma çözümleri.",
    detail: "LED • Spot • Şerit • Dekoratif"
  }, {
    id: 3,
    icon: <Home size={40} strokeWidth={1.5} />,
    title: "Akıllı Ev Sistemleri",
    desc: "Aydınlatma, perde ve iklimlendirme için akıllı çözümler.",
    detail: "Otomasyon • Sensör • Uzaktan Kontrol"
  }, {
    id: 4,
    icon: <LayoutGrid size={40} strokeWidth={1.5} />,
    title: "Elektrik Panosu & Güç Dağıtımı",
    desc: "Güvenli pano montajı ve güç dağıtım sistemleri.",
    detail: "Pano • Sigorta • Kaçak Akım • UPS"
  }];
  return <div className="bg-white min-h-screen text-gray-900 selection:bg-[#EAB308]/30 selection:text-gray-900 font-sans pb-0">
      <SEOHead title="Elektrik Sistemleri" description="Güvenli ve modern elektrik altyapısı ile akıllı ev çözümleri. Elektrik tesisatı, aydınlatma, akıllı ev sistemleri ve güç dağıtımı." canonical="/hizmetler/elektrik" jsonLd={createServiceSchema("Elektrik Sistemleri", "Güvenli ve modern elektrik altyapısı ile akıllı ev çözümleri", "https://kuzey-yapi.lovable.app/hizmetler/elektrik")} />
      
      {/* --- 1. HERO ALANI --- */}
      <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format" alt="Elektrik Sistemleri" className="w-full h-full object-cover opacity-40 grayscale scale-105" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-[#050505]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] mb-8 text-white" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }}>
            Güvenli ve Modern <br />
            <span className="font-medium text-[#EAB308]">Elektrik Çözümleri</span>.
          </motion.h1>
          
          <motion.p className="text-lg md:text-xl text-gray-400 font-light tracking-wide max-w-2xl mx-auto leading-relaxed mb-12" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.2
        }}>
            Daire içi tesisattan akıllı ev sistemlerine,<br className="hidden md:block" />
            yaşam alanlarınıza enerji katıyoruz.
          </motion.p>

          <motion.a href="tel:+902122365743" className="group relative inline-flex items-center gap-2 px-10 py-4 overflow-hidden rounded-full bg-white/5 border border-white/10 text-white transition-all hover:border-[#EAB308]/50 hover:bg-[#EAB308]/10" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.4
        }}>
            <span className="relative z-10 font-medium tracking-widest text-sm uppercase group-hover:text-[#EAB308] transition-colors flex items-center gap-2">
              <Phone size={16} />
              Teklif Alın
            </span>
          </motion.a>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent"></div>
        </div>
      </section>

      {/* --- 2. İSTATİSTİK BANDI --- */}
      

      {/* --- 3. DETAYLI HİZMET DÖKÜMÜ --- */}
      {!isLoading && subServices && subServices.length > 0 && <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div className="text-center mb-20" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }}>
              <span className="text-[#EAB308] font-bold tracking-[0.3em] text-xs uppercase mb-4 block">
                Uzmanlık Alanlarımız
              </span>
              <h2 className="text-3xl md:text-5xl font-light text-gray-900">
                Detaylı Hizmet <span className="font-medium text-[#EAB308]">Portföyü</span>
              </h2>
            </motion.div>

            <div className="space-y-32">
              {subServices.map((service, i) => <motion.div key={service.id} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`} initial={{
            opacity: 0,
            y: 50
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8
          }}>
                  <div className="w-full lg:w-1/2 relative group">
                    <div className="absolute -inset-4 border border-white/5 rounded-sm z-0 group-hover:border-[#EAB308]/20 transition-colors duration-700"></div>
                    <div className="relative z-10 h-[400px] bg-[#1a1a1a] rounded-sm overflow-hidden">
                      <img src={getServiceImage(service.title)} alt={service.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-90" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-[#EAB308] flex items-center justify-center rounded-sm">
                            <DynamicIcon name={service.icon_name} size={24} className="text-black" />
                          </div>
                          <span className="text-white font-mono text-sm tracking-widest uppercase">{String(i + 1).padStart(2, '0')}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2">
                    <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                      {service.description}
                    </p>
                    <Link to={`/hizmetler/elektrik/${service.slug}`} className="inline-flex items-center gap-2 text-[#EAB308] font-medium hover:gap-4 transition-all duration-300">
                      Detaylı Bilgi Al <ArrowRight size={18} />
                    </Link>
                  </div>
                </motion.div>)}
            </div>
          </div>
        </section>}

      {/* --- 5. CTA --- */}
      <section className="py-24 bg-white border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Elektrik projenizi birlikte <span className="font-normal border-b border-[#EAB308]/30 pb-1 text-[#EAB308]">planlayalım.</span>
          </h2>
          
          <p className="text-gray-600 text-lg font-light mb-12 max-w-xl mx-auto">
            Güvenli ve modern elektrik sistemleri için <br />
            uzman ekibimizle iletişime geçin.
          </p>
          
          <a href="/iletisim" className="inline-flex items-center gap-3 bg-[#EAB308] text-black px-12 py-5 rounded-full font-bold tracking-wide transition-all duration-300 hover:bg-[#dca600] hover:shadow-[0_0_40px_-10px_rgba(234,179,8,0.3)] hover:scale-105">
            Ücretsiz Keşif Talep Edin
          </a>
        </div>
      </section>
    </div>;
};
export default ElektrikSistemleri;