import { useRef } from "react";
import { motion, useInView, type Easing } from "framer-motion";
import { ArrowRight, Palette, Shield, Clock, Leaf } from "lucide-react";
import blueBuilding from "@/assets/blue-building.jpg";
import Footer from "@/components/Footer";

// Animation variants
const easeOut: Easing = [0.16, 1, 0.3, 1];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: easeOut } }
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

// Section 1: Hero with Artistic Collage
const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23334155' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 py-20 lg:py-0 lg:min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="order-2 lg:order-1"
          >
            <motion.p 
              variants={fadeInUp}
              className="font-display text-sm uppercase tracking-[0.3em] text-slate-500 mb-4"
            >
              Yapı & Dekorasyon
            </motion.p>
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-800 leading-tight mb-6"
            >
              Hayallerinizdeki
              <br />
              <span className="text-slate-600">Yaşam Alanını</span>
              <br />
              <span className="bg-gradient-to-r from-slate-700 to-slate-500 bg-clip-text text-transparent">
                İnşa Ediyoruz
              </span>
            </motion.h1>
            <motion.p 
              variants={fadeInUp}
              className="font-serif text-lg text-slate-600 leading-relaxed mb-8 max-w-md"
            >
              Modern mimari anlayışı ve geleneksel ustalığı birleştirerek, 
              yaşam alanlarınızı sanat eserlerine dönüştürüyoruz.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-slate-800 text-white font-display font-semibold text-sm uppercase tracking-wider rounded-sm hover:bg-slate-700 transition-all duration-300 group shadow-lg shadow-slate-300/50"
              >
                Ücretsiz Keşif
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Decoration */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate="visible"
            variants={fadeIn}
            className="order-1 lg:order-2 relative h-[300px] lg:h-[500px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-100 rounded-2xl" />
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/4 left-1/4 w-20 h-20 border-2 border-slate-300 rounded-full opacity-60"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-1/3 right-1/4 w-16 h-16 bg-slate-300 rounded-lg rotate-12 opacity-40"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Section 2: Blue Concept Split Screen
const BlueConcept = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="min-h-screen flex flex-col lg:flex-row">
      {/* Left - Image */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="lg:w-1/2 h-[50vh] lg:h-auto relative"
      >
        <img
          src={blueBuilding}
          alt="Modern endüstriyel bina"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/30 to-transparent" />
      </motion.div>

      {/* Right - Content */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="lg:w-1/2 bg-slate-800 flex items-center"
      >
        <div className="p-10 lg:p-20">
          <span className="font-display text-xs uppercase tracking-[0.4em] text-slate-400 mb-6 block">
            Kurumsal Çözümler
          </span>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-white leading-tight mb-6">
            Endüstriyel Yapılarda
            <br />
            <span className="text-slate-300">Güvenilir Ortaklık</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-slate-400 to-slate-600 mb-8" />
          <p className="font-serif text-slate-300 leading-relaxed mb-8">
            Ticari binalar, endüstriyel tesisler ve kurumsal projeler için 
            uçtan uca mühendislik ve yapım hizmetleri sunuyoruz. Teknik 
            altyapıdan iç mekan tasarımına kadar her aşamada yanınızdayız.
          </p>
          <ul className="space-y-4 mb-10">
            {["Mekanik Tesisat Sistemleri", "Elektrik & Otomasyon", "Çelik Konstrüksiyon", "İç Mimari Uygulama"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-slate-200 font-display text-sm">
                <span className="w-2 h-2 bg-slate-400 rounded-full" />
                {item}
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 px-6 py-3 border-2 border-slate-400 text-slate-200 font-display font-semibold text-sm uppercase tracking-wider rounded-sm hover:bg-slate-400 hover:text-slate-900 transition-all duration-300"
          >
            Detaylı Bilgi
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

// Section 3: Vision Break - Immersive Quote
const VisionBreak = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      ref={ref}
      className="py-32 lg:py-48 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden"
    >
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-400 to-transparent" />
      </div>

      <div className="container mx-auto px-6 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <span className="font-display text-xs uppercase tracking-[0.5em] text-slate-400 mb-8 block">
            Vizyonumuz
          </span>
          <blockquote className="max-w-4xl mx-auto">
            <p 
              className="text-3xl md:text-4xl lg:text-5xl text-slate-700 leading-relaxed font-serif italic"
              style={{ fontFamily: "'Lora', serif" }}
            >
              "Mekanlar sadece beton değil,
              <br className="hidden md:block" />
              <span className="text-slate-500"> yaşamın ta kendisidir."</span>
            </p>
          </blockquote>
          <div className="mt-12 flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-slate-300" />
            <span className="font-display text-sm text-slate-400 uppercase tracking-wider">
              Kuzey Yapı
            </span>
            <div className="w-12 h-px bg-slate-300" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Section 4: Bento Grid Values
const BentoGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Palette,
      title: "Estetik Tasarım",
      description: "Modern çizgiler ve zamansız detaylarla yaşam alanlarınızı şekillendiriyoruz.",
      gradient: "from-rose-50 to-orange-50",
      iconBg: "bg-rose-100 text-rose-600"
    },
    {
      icon: Shield,
      title: "Sağlam Yapı",
      description: "En yüksek kalite malzemeler ve mühendislik standartlarıyla inşa ediyoruz.",
      gradient: "from-blue-50 to-indigo-50",
      iconBg: "bg-blue-100 text-blue-600"
    },
    {
      icon: Clock,
      title: "Zamanında Teslim",
      description: "Proje takvimlerine sadık kalarak, söz verdiğimiz tarihte teslim ediyoruz.",
      gradient: "from-amber-50 to-yellow-50",
      iconBg: "bg-amber-100 text-amber-600"
    },
    {
      icon: Leaf,
      title: "Doğa Dostu",
      description: "Sürdürülebilir malzemeler ve enerji verimli tasarımlarla geleceği koruyoruz.",
      gradient: "from-emerald-50 to-teal-50",
      iconBg: "bg-emerald-100 text-emerald-600"
    }
  ];

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.span 
            variants={fadeInUp}
            className="font-display text-xs uppercase tracking-[0.4em] text-slate-400 mb-4 block"
          >
            Değerlerimiz
          </motion.span>
          <motion.h2 
            variants={fadeInUp}
            className="text-3xl lg:text-4xl font-display font-bold text-slate-800"
          >
            Neden Biz?
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className={`group relative p-8 rounded-2xl bg-gradient-to-br ${value.gradient} border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 cursor-pointer`}
            >
              <div className={`w-14 h-14 rounded-xl ${value.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <value.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-800 mb-3">
                {value.title}
              </h3>
              <p className="font-serif text-slate-600 leading-relaxed text-sm">
                {value.description}
              </p>
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl ring-2 ring-slate-200/50" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

// Section 5: CTA Footer
const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} id="contact" className="py-24 lg:py-32 bg-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="font-display text-xs uppercase tracking-[0.4em] text-slate-400 mb-6 block">
            Başlayalım
          </span>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-6">
            Projenize Başlamaya
            <br />
            <span className="text-slate-300">Hazır mısınız?</span>
          </h2>
          <p className="font-serif text-slate-300 leading-relaxed mb-10">
            Hayalinizdeki yaşam alanını birlikte tasarlayalım. 
            Ücretsiz keşif ve danışmanlık için hemen iletişime geçin.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+902122365743"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-800 font-display font-semibold text-sm uppercase tracking-wider rounded-sm hover:bg-slate-100 transition-all duration-300 group shadow-lg"
            >
              Teklif Alın
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://wa.me/902122365743"
              className="inline-flex items-center gap-3 px-8 py-4 border-2 border-slate-400 text-slate-200 font-display font-semibold text-sm uppercase tracking-wider rounded-sm hover:bg-slate-700 transition-all duration-300"
            >
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Main Page Component
const YapiDekorasyon = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <BlueConcept />
      <VisionBreak />
      <BentoGrid />
      <CTASection />
      <Footer />
    </div>
  );
};

export default YapiDekorasyon;
