import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Wind, Droplets, Flame, Cpu, ArrowRight, Phone } from "lucide-react";
import yanginTesisati from "@/assets/yangin-tesisati.webp";
import sihhiTesisatNew from "@/assets/sihhi-tesisat-new.jpg";
import isiPompasi from "@/assets/isi-pompasi.jpg";
import sogutmaHvac from "@/assets/sogutma-hvac.webp";
import binaOtomasyon from "@/assets/bina-otomasyon.jpg";
import havalandirmaSistemleri from "@/assets/havalandirma-sistemleri.png";
import kazanDairesi from "@/assets/kazan-dairesi.jpg";
import projelendirmeMuhendislik from "@/assets/projelendirme-muhendislik.webp";
import { motion } from "framer-motion";
import SEOHead, { createServiceSchema } from "@/components/SEOHead";
import useSubServices from "@/hooks/useSubServices";
import DynamicIcon from "@/components/DynamicIcon";
const MekanikSistemler = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const {
    data: subServices,
    isLoading
  } = useSubServices('mekanik');
  const services = [{
    id: 1,
    icon: <Wind size={40} strokeWidth={1.5} />,
    title: "İklimlendirme",
    desc: "Konforu maksimize eden sessiz ve verimli HVAC çözümleri.",
    detail: "VRF Sistemleri • Chiller • Havalandırma"
  }, {
    id: 2,
    icon: <Droplets size={40} strokeWidth={1.5} />,
    title: "Sıhhi Tesisat",
    desc: "Yapının damarları. Sürdürülebilir su döngüsü ve atık yönetimi.",
    detail: "Temiz Su • Atık Su • Arıtma"
  }, {
    id: 3,
    icon: <Flame size={40} strokeWidth={1.5} />,
    title: "Yangın Güvenliği",
    desc: "NFPA standartlarında, riski sıfıra indiren koruma kalkanları.",
    detail: "Sprinkler • Hidrant • Gazlı Söndürme"
  }, {
    id: 4,
    icon: <Cpu size={40} strokeWidth={1.5} />,
    title: "Otomasyon",
    desc: "Tüm sistemleri tek merkezden yöneten akıllı bina beyni.",
    detail: "BMS • Enerji İzleme • Uzaktan Kontrol"
  }];

  // Service-based image mapping - prevents index shifting issues
  const serviceImageMap: Record<string, string> = {
    "Isı Pompası Sistemleri": isiPompasi,
    "Soğutma & HVAC": sogutmaHvac,
    "Havalandırma Sistemleri": havalandirmaSistemleri,
    "Sıhhi Tesisat": sihhiTesisatNew,
    "Yangın Tesisatı": yanginTesisati,
    "Kazan Dairesi & Isı Merkezleri": kazanDairesi,
    "Projelendirme Mühendislik": projelendirmeMuhendislik,
    "Bina Otomasyon Sistemleri": binaOtomasyon
  };

  // Fallback image for services not in the map
  const getServiceImage = (title: string): string => {
    return serviceImageMap[title] || projelendirmeMuhendislik;
  };
  return <div className="bg-white min-h-screen text-gray-900 selection:bg-[#EAB308]/30 selection:text-gray-900 font-sans pb-0">
      <SEOHead title="Mekanik Tesisat Sistemleri" description="Endüstriyel ve konut tipi mekanik sistemlerde uçtan uca mühendislik çözümleri. HVAC, sıhhi tesisat, yangın güvenliği ve otomasyon sistemleri." canonical="/uzmanliklar/mekanik" jsonLd={createServiceSchema("Mekanik Tesisat Sistemleri", "Endüstriyel ve konut tipi mekanik sistemlerde uçtan uca mühendislik çözümleri", "https://kuzey-yapi.lovable.app/uzmanliklar/mekanik")} />
      
      {/* --- 1. HERO ALANI: SESSİZ GÜÇ --- */}
      <section className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        
        {/* Arka Plan (Grayscale & Derinlik) */}
        <div className="absolute inset-0 z-0">
           <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format" alt="Minimal Architecture" className="w-full h-full object-cover opacity-50 grayscale scale-105" />
           <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/60 to-[#050505]"></div>
        </div>

        {/* İçerik: Merkezde, Minimal ve Özgüvenli */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          
          <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] mb-8 text-white" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }}>
            Karmaşık Problemlere <br />
            <span className="font-medium text-[#EAB308]">Zarif Mühendislik</span>.
          </motion.h1>
          
          <motion.p className="text-lg md:text-xl text-gray-400 font-light tracking-wide max-w-2xl mx-auto leading-relaxed mb-12" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }}>
            Mekanik sistemleri yalnızca çalışır değil, <br className="hidden md:block" />
            yapının mimarisiyle uyumlu bir sanat eseri gibi tasarlarız.
          </motion.p>

          <motion.a href="tel:+902122365743" className="group relative inline-flex items-center gap-2 px-10 py-4 overflow-hidden rounded-full bg-white/5 border border-white/10 text-white transition-all hover:border-[#EAB308]/50 hover:bg-[#EAB308]/10" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }}>
            <span className="relative z-10 font-medium tracking-widest text-sm uppercase group-hover:text-[#EAB308] transition-colors flex items-center gap-2">
              <Phone size={16} />
              Hemen Arayın
            </span>
          </motion.a>

        </div>

        {/* Scroll İkonu (Mikro Detay) */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
          <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent"></div>
        </div>
      </section>


      {/* --- 2. İSTATİSTİK BANDI: MİMARİ DİSİPLİN --- */}
      <section className="py-20 border-b border-white/5 bg-white">
        
      </section>


      {/* --- 3. DETAYLI HİZMET DÖKÜMÜ (ALTERNATING LAYOUT) --- */}
      <section className="py-32 bg-white">
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

          {isLoading ? <div className="space-y-16">
              {[1, 2, 3].map(i => <div key={i} className="h-[400px] bg-[#0a0a0a] animate-pulse rounded-sm"></div>)}
            </div> : <div className="space-y-32">
              {subServices?.map((service, i) => <motion.div key={service.id} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`} initial={{
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
                  {/* Görsel */}
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

                  {/* İçerik */}
                  <div className="w-full lg:w-1/2">
                    <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                      {service.description}
                    </p>
                    <Link to={`/hizmetler/mekanik/${service.slug}`} className="inline-flex items-center gap-2 text-[#EAB308] font-medium hover:gap-4 transition-all duration-300">
                      Detaylı Bilgi Al <ArrowRight size={18} />
                    </Link>
                  </div>
                </motion.div>)}
            </div>}
        </div>
      </section>


      {/* --- 4. SİSTEM BİLEŞENLERİ: ÇİZGİLİ & DENGELİ --- */}
      


      {/* --- 5. CTA: SOFİSTİKE KAPANIŞ --- */}
      <section className="py-24 bg-white border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          
          <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-6 tracking-tight">
            Projenizi birlikte <span className="font-normal border-b border-[#EAB308]/30 pb-1 text-[#EAB308]">değerlendirelim.</span>
          </h2>
          
          <p className="text-gray-600 text-lg font-light mb-12 max-w-xl mx-auto">
            İlk teknik görüşmemiz ve ihtiyaç analizi tamamen ücretsizdir. <br />
            Mühendislik standartlarınızı yükseltin.
          </p>
          
          <a href="/iletisim" className="inline-flex items-center gap-3 bg-[#EAB308] text-black px-12 py-5 rounded-full font-bold tracking-wide transition-all duration-300 hover:bg-[#dca600] hover:shadow-[0_0_40px_-10px_rgba(234,179,8,0.3)] hover:scale-105">
            Mühendislerimizle Görüşün
          </a>

        </div>
      </section>

    </div>;
};
export default MekanikSistemler;