import { useEffect } from "react";
import { Shield, GraduationCap, HardHat, RefreshCw, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
const ISGPolitikamiz = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const policies = [{
    icon: <Shield size={36} strokeWidth={1.5} />,
    title: "Risk Önleme",
    description: "İş kazaları ve meslek hastalıklarını önlemek amacıyla riskleri önceden tespit eder, gerekli tedbirleri eksiksiz uygularız."
  }, {
    icon: <GraduationCap size={36} strokeWidth={1.5} />,
    title: "Eğitim ve Bilinç",
    description: "Çalışanlarımızın İSG bilincini artırmak için düzenli eğitimler verir, güvenli çalışma yöntemlerini destekleriz."
  }, {
    icon: <HardHat size={36} strokeWidth={1.5} />,
    title: "Ekipman ve Denetim",
    description: "İş sahalarında uygun ekipman kullanımını ve güvenli çalışma koşullarını sürekli denetleriz."
  }, {
    icon: <RefreshCw size={36} strokeWidth={1.5} />,
    title: "Sürekli İyileştirme",
    description: "Tüm iş süreçlerimizde sürekli iyileştirme anlayışıyla hareket eder, güvenli çalışma kültürünü kalıcı hale getiririz."
  }];
  return <div className="bg-white min-h-screen text-gray-900 selection:bg-[#D4AF37]/30 selection:text-gray-900 font-sans">
      
      {/* HERO ALANI */}
      <section className="relative w-full min-h-[50vh] flex items-center justify-center overflow-hidden pt-32 pb-16 bg-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/10 blur-[120px] rounded-full"></div>
        </div>

        <motion.div className="relative z-10 max-w-4xl mx-auto px-6 text-center" initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }}>
          <span className="text-[#D4AF37] font-bold tracking-[0.3em] text-xs uppercase mb-6 block">
            Kurumsal
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] mb-6 text-gray-900">
            İSG Politikamız
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-600">
            İş Sağlığı ve Güvenliği, Kuzey Yapı'nın temel değerlerinin ayrılmaz bir parçasıdır.
          </p>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-8"></div>
        </motion.div>
      </section>

      {/* POLİTİKA MADDELERİ */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          
          {/* Başlık */}
          <motion.div className="text-center mb-16" initial={{
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
            <span className="text-[#D4AF37] font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
              Taahhütlerimiz
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900">
              Güvenli Çalışma <span className="font-medium text-[#D4AF37]">Kültürü</span>
            </h2>
          </motion.div>

          {/* Maddeler Listesi */}
          <div className="space-y-6">
            {policies.map((policy, i) => <motion.div key={i} className="group relative bg-gray-50 p-8 rounded-sm border border-gray-200 hover:border-[#D4AF37]/50 transition-all duration-500" initial={{
            opacity: 0,
            x: -30
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: i * 0.1
          }}>
                <div className="flex items-start gap-6">
                  
                  {/* İkon */}
                  <div className="flex-shrink-0 w-16 h-16 bg-[#D4AF37]/10 rounded-sm flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-white transition-all duration-500">
                    {policy.icon}
                  </div>

                  {/* İçerik */}
                  <div className="flex-1">
                    <h3 className="text-xl font-medium text-[#D4AF37] mb-3 transition-colors duration-300">
                      {policy.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {policy.description}
                    </p>
                  </div>

                  {/* Sağ Taraf Dekorasyon */}
                  <div className="hidden md:flex items-center">
                    <CheckCircle2 size={24} className="text-[#D4AF37]/30 group-hover:text-[#D4AF37] transition-colors duration-500" />
                  </div>
                </div>

                {/* Alt Çizgi Animasyonu */}
                <div className="absolute bottom-0 left-0 h-[2px] bg-[#D4AF37] w-0 group-hover:w-full transition-all duration-700"></div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* EK BİLGİ BÖLÜMÜ */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div className="bg-gradient-to-br from-[#D4AF37]/10 to-transparent p-10 rounded-sm border border-[#D4AF37]/20" initial={{
          opacity: 0,
          scale: 0.95
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }}>
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center">
                <Shield size={24} className="text-black" />
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-900 mb-4">
                  Sıfır Kaza Hedefimiz
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Kuzey Yapı olarak, tüm projelerimizde "sıfır kaza" hedefiyle hareket ediyoruz. 
                  Her çalışanımızın evine sağ salim dönmesi, en büyük önceliğimizdir.
                </p>
                <p className="text-gray-500 text-sm">
                  Bu anlayışla, iş sağlığı ve güvenliği standartlarımızı sürekli yükseltiyor, 
                  sektördeki en iyi uygulamaları takip ediyoruz.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white border-t border-gray-100">
        
      </section>
    </div>;
};
export default ISGPolitikamiz;