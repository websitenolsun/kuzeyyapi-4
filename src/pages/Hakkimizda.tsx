import { useEffect } from "react";
import { motion } from "framer-motion";
import "lucide-react";
import SEOHead, { organizationSchema } from "@/components/SEOHead";
import useCompanyValues from "@/hooks/useCompanyValues";
import DynamicIcon from "@/components/DynamicIcon";
const Hakkimizda = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const {
    data: values,
    isLoading
  } = useCompanyValues();
  const fadeInUp = {
    initial: {
      opacity: 0,
      y: 40
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  };
  return <div className="bg-white min-h-screen text-gray-900 selection:bg-[#D4AF37]/30 selection:text-gray-900 font-sans">
      <SEOHead title="Hakkımızda" description="Kuzey Yapı, 2011 yılından bu yana mühendislik tecrübesini yapı sektöründeki estetik arayışıyla birleştiriyor. Mekanik Tesisat, Doğalgaz, Mimari Tasarım." canonical="/hakkimizda" jsonLd={organizationSchema} />
      
      {/* Spacer for fixed navbar */}
      <div className="pt-24"></div>

      {/* ANA İÇERİK */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Sol: Görsel */}
            <motion.div className="relative group" initial={{
            opacity: 0,
            x: -50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8
          }}>
              <div className="absolute -inset-4 border border-white/5 rounded-sm group-hover:border-[#D4AF37]/20 transition-colors duration-700"></div>
              <div className="relative h-[600px] bg-[#1a1a1a] rounded-sm overflow-hidden">
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format" alt="Kuzey Yapı Mühendislik" className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-[#D4AF37] flex items-center justify-center font-bold text-black text-2xl rounded-sm">
                      K
                    </div>
                    <div>
                      <span className="text-white font-semibold text-xl block">KUZEY YAPI</span>
                      <span className="text-gray-400 text-sm tracking-widest uppercase">Mühendislik</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Sağ: İçerik */}
            <motion.div initial={{
            opacity: 0,
            x: 50
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }}>
              <span className="text-[#D4AF37] font-bold tracking-[0.2em] text-xs uppercase mb-6 block">
                Hikayemiz
              </span>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Kuzey Yapı, 2011 yılından bu yana mühendislik tecrübesini yapı sektöründeki 
                estetik arayışıyla birleştiriyor.
              </p>
              <p className="text-gray-500 text-base leading-relaxed mb-12">
                Asıl uzmanlık alanımız olan <span className="text-gray-900">Mekanik Tesisat</span> ve <span className="text-gray-900">Doğal Gaz Sistemleri</span> başta olmak üzere;
                mimari tasarım ve dekorasyon süreçlerinde entegre, güvenli ve yüksek verimli çözümler sunuyoruz.
              </p>

              {/* İstatistikler */}
              
            </motion.div>
          </div>
        </div>
      </section>

      {/* BİZİ BİZ YAPAN İLKELER - BENTO GRİD */}
      <section className="py-32 bg-white border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div className="text-center mb-20" initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }}>
            <span className="text-[#D4AF37] font-bold tracking-[0.3em] text-xs uppercase mb-6 block">
              Değerlerimiz
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900">
              Bizi Biz Yapan <span className="font-medium text-[#D4AF37]">İlkeler</span>
            </h2>
          </motion.div>

          {/* Bento Grid */}
          {isLoading ? <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map(i => <div key={i} className="h-[300px] bg-[#0a0a0a] animate-pulse rounded-sm"></div>)}
            </div> : <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values?.map((value, i) => <motion.div key={value.id} className={`group relative bg-[#0a0a0a] rounded-sm border border-white/5 overflow-hidden
                    ${i === 0 ? 'md:row-span-2' : ''}
                    hover:border-[#D4AF37]/30 transition-all duration-700`} initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: i * 0.1
          }}>
                  {/* Background Glow */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  <div className={`relative z-10 p-10 ${i === 0 ? 'h-full flex flex-col justify-center' : ''}`}>
                    {/* Icon */}
                    <div className="w-16 h-16 bg-[#D4AF37]/10 rounded-sm flex items-center justify-center mb-8 group-hover:bg-[#D4AF37]/20 transition-colors duration-500">
                      <DynamicIcon name={value.icon_name} size={32} strokeWidth={1.5} className="text-[#D4AF37]" />
                    </div>
                    
                    {/* Title */}
                    <h3 className={`font-medium text-[#D4AF37] mb-4 transition-colors duration-300
                      ${i === 0 ? 'text-3xl' : 'text-2xl'}`}>
                      {value.title}
                    </h3>
                    
                    {/* Description */}
                    <p className={`text-white leading-relaxed transition-colors duration-300
                      ${i === 0 ? 'text-lg' : 'text-base'}`}>
                      {value.description}
                    </p>
                  </div>
                </motion.div>)}
            </div>}
        </div>
      </section>

      {/* CTA - DOĞRUDAN İLETİŞİM */}
      <section className="py-24 bg-white border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-light text-gray-900 mb-6">
            Projeleriniz için <span className="font-normal border-b border-[#D4AF37]/30 pb-1 text-[#D4AF37]">yanınızdayız.</span>
          </h2>
          <p className="text-gray-600 text-lg font-light mb-12 max-w-xl mx-auto">
            Mekanik sistemlerden mimari tasarıma, tüm ihtiyaçlarınız için bize ulaşın.
          </p>
          
          <a href="/iletisim" className="inline-flex items-center gap-3 bg-[#D4AF37] text-black px-12 py-5 rounded-full font-bold tracking-wide transition-all duration-300 hover:bg-[#c9a430] hover:shadow-[0_0_40px_-10px_rgba(212,175,55,0.3)] hover:scale-105">
            İletişime Geçin
          </a>
        </div>
      </section>
    </div>;
};
export default Hakkimizda;