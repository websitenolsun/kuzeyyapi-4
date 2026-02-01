import { useEffect } from "react";
import { Award, Clock, Users, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
const KalitePolitikamiz = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const values = [{
    icon: <Award size={40} strokeWidth={1.5} />,
    title: "Kalite",
    description: "Standartlara ve mühendislik esaslarına uygun, uygulanabilir ve sürdürülebilir çözümler üretiriz. Kaliteli malzeme ve uzman işçilikle projelerimizi titizlikle hayata geçiririz.",
    color: "from-amber-500/20 to-amber-600/5"
  }, {
    icon: <Clock size={40} strokeWidth={1.5} />,
    title: "Zamanında Teslim",
    description: "Zamanın değerinin bilinciyle, kaynak ve iş planlamasını doğru yapar; kalite ve projeden ödün vermeden işlerimizi taahhüt edilen sürede teslim ederiz.",
    color: "from-blue-500/20 to-blue-600/5"
  }, {
    icon: <Users size={40} strokeWidth={1.5} />,
    title: "Uzman Kadro",
    description: "Alanında eğitimli ve deneyimli mühendis, tekniker ve usta kadromuzla her türlü mekanik ve mühendislik ihtiyacına çözüm sunarız.",
    color: "from-emerald-500/20 to-emerald-600/5"
  }, {
    icon: <ShieldCheck size={40} strokeWidth={1.5} />,
    title: "Güvenilir ve Güvenli Hizmet",
    description: "Tüm uygulamalarımızı yürürlükteki yönetmeliklere uygun şekilde gerçekleştiririz.",
    color: "from-purple-500/20 to-purple-600/5"
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
            Kalite Politikamız
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Mükemmellik arayışımız, her projemizin temelini oluşturur.
          </p>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-8"></div>
        </motion.div>
      </section>

      {/* DEĞERLER KARTLARI */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* Başlık */}
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
            <span className="text-[#D4AF37] font-bold tracking-[0.2em] text-xs uppercase mb-4 block">
              Değerlerimiz
            </span>
            <h2 className="text-3xl md:text-4xl font-light text-gray-900">
              Kaliteyi <span className="font-medium text-[#D4AF37]">Tanımlayan</span> İlkeler
            </h2>
          </motion.div>

          {/* Kartlar Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, i) => <motion.div key={i} className={`group relative bg-gradient-to-br ${value.color} p-10 rounded-sm border border-white/5 hover:border-[#D4AF37]/40 transition-all duration-500 hover:-translate-y-2 overflow-hidden`} initial={{
            opacity: 0,
            y: 40
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: i * 0.15
          }}>
                {/* Arka Plan Glow */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#D4AF37]/5 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* İkon */}
                <div className="relative z-10 text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform duration-500">
                  {value.icon}
                </div>

                {/* İçerik */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-medium text-gray-900 mb-4 group-hover:text-[#D4AF37] transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-500 transition-colors duration-300">
                    {value.description}
                  </p>
                </div>

                {/* Köşe Dekorasyon */}
                <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-[#D4AF37]/20 group-hover:border-[#D4AF37]/50 transition-colors duration-500"></div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* TAAHHÜT BÖLÜMÜ */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div className="flex flex-col lg:flex-row items-center gap-12" initial={{
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
            {/* Sol: Büyük Rakam */}
            <div className="flex-shrink-0 text-center lg:text-left">
              <span className="text-8xl md:text-9xl font-light text-[#D4AF37]/20">%100</span>
              <p className="text-[#D4AF37] text-sm tracking-widest uppercase mt-2">Müşteri Memnuniyeti</p>
            </div>

            {/* Sağ: İçerik */}
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-light text-gray-900 mb-6">
                Kalite, bizim için <span className="text-[#D4AF37]">seçenek değil, zorunluluktur.</span>
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Her projemizde, müşteri beklentilerini karşılamanın ötesine geçmeyi hedefliyoruz. 
                Kalite standartlarımız, sektörün en iyileriyle yarışır düzeydedir.
              </p>
              
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-12">
            Kalite standartlarımızı <span className="font-normal border-b border-[#D4AF37]/30 pb-1 text-[#D4AF37]">projelerinizde</span> deneyimleyin.
          </h2>
          <a href="/iletisim" className="inline-flex items-center justify-center gap-3 bg-[#D4AF37] text-black px-12 py-5 rounded-full font-bold tracking-wide transition-all duration-300 hover:bg-[#c9a430] hover:shadow-[0_0_40px_-10px_rgba(212,175,55,0.3)] hover:scale-105">
            Teklif Alın
          </a>
        </div>
      </section>
    </div>;
};
export default KalitePolitikamiz;