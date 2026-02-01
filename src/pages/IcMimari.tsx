import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import './IcMimari.css';
import SEOHead, { createServiceSchema } from '@/components/SEOHead';
import useSubServices from '@/hooks/useSubServices';
import DynamicIcon from '@/components/DynamicIcon';
import mimariTasarim from '@/assets/mimari-tasarim.jpg';
import camAluminyum from '@/assets/cam-aluminyum.webp';
import mekansalPlanlama from '@/assets/mekansal-planlama.jpg';
import santiyeYonetimi from '@/assets/santiye-yonetimi.webp';
import boyaYuzey from '@/assets/boya-yuzey.jpg';
import marangozAhsap from '@/assets/marangoz-ahsap.webp';
import zeminKaplama from '@/assets/zemin-kaplama.webp';
import anahtarTeslimDekorasyon from '@/assets/anahtar-teslim-dekorasyon.jpg';
import donusumOncesi from '@/assets/donusum-oncesi.webp';
const IcMimari = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const {
    data: subServices,
    isLoading
  } = useSubServices('mimari');

  // 1. Slider için State
  const [sliderPosition, setSliderPosition] = useState(50);

  // 2. SSS (FAQ) Açılır/Kapanır Menü için State
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };
  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // SSS Verileri
  const faqs = [{
    question: "Sadece proje çizimi yapıyor musunuz?",
    answer: "Evet. Eğer kendi uygulama ekibiniz varsa, size sadece teknik ve estetik detayları içeren 'Uygulama Projesi'ni teslim edebilir ve süreç boyunca teknik danışmanlık (süpervizörlük) verebiliriz."
  }, {
    question: "Bütçeyi nasıl yönetiyorsunuz, sürpriz masraf çıkar mı?",
    answer: "Hayır. 'Value Engineering' yöntemini kullanıyoruz. Tasarım aşamasında bütçenize en uygun ve en kaliteli malzemeleri seçiyor, satın alma listelerini önceden onaylıyoruz. Sözleşme dışı bir istek olmadığı sürece bütçe şaşmaz."
  }, {
    question: "Tadilat süreci ne kadar sürer?",
    answer: "Bu, projenin kapsamına göre değişir. Ancak 'Süreç' bölümünde belirttiğimiz gibi, işe başlamadan önce size gün-gün işleyen bir 'İş Programı' (Gantt Şeması) sunarız ve buna sadık kalırız."
  }];

  // Service title to image mapping
  const serviceImageMap: Record<string, string> = {
    "Mimari Tasarım": mimariTasarim,
    "Cam & Alüminyum Sistemleri": camAluminyum,
    "Mekansal Planlama": mekansalPlanlama,
    "Mimari Uygulama & Şantiye Yönetimi": santiyeYonetimi,
    "Boya & Yüzey İşleri": boyaYuzey,
    "Marangoz & Ahşap İşleri": marangozAhsap,
    "Zemin & Kaplama": zeminKaplama,
    "Anahtar Teslim Dekorasyon": anahtarTeslimDekorasyon,
    "Konsept Tasarım": "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format",
    "Anahtar Teslim Uygulama": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format",
    "Renovasyon & Tadilat": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format",
    "İç Mekan Tasarımı": "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format",
    "Mimari Projelendirme": "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2000&auto=format",
    "3D Görselleştirme": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2000&auto=format"
  };
  const defaultImage = "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format";
  const getServiceImage = (title: string): string => {
    return serviceImageMap[title] || defaultImage;
  };
  return <div className="ic-mimari-page">
      <SEOHead title="Mimari & Dekorasyon" description="Estetikle fonksiyonelliği buluşturan bütüncül mimari ve iç mekan tasarım hizmetleri. Konsept tasarım, anahtar teslim uygulama ve renovasyon." canonical="/uzmanliklar/ic-mimari" jsonLd={createServiceSchema("Mimari & Dekorasyon", "Estetikle fonksiyonelliği buluşturan bütüncül mimari ve iç mekan tasarım hizmetleri", "https://kuzey-yapi.lovable.app/uzmanliklar/ic-mimari")} />
      
      {/* --- BÖLÜM 1: HERO SECTION --- */}
      <section className="hero-section">
        <div className="hero-bg">
          <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop" alt="Modern Minimalist Salon Tasarımı" className="hero-image" />
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content container">
          <span className="hero-tagline">Ruhu Olan Mekanlar, Kusursuz Çalışan Sistemler.</span>
          <h1 className="hero-title">
              Estetiğin Bilimle <br />
              <span className="italic-accent">Buluştuğu Nokta.</span>
          </h1>
          <p className="hero-description">
              Biz mekanları sadece süslemiyoruz; ışığı, akustiği ve iklimi yöneterek, 
              içinde yaşamaktan keyif alacağınız "çalışan sanat eserleri" tasarlıyoruz.
          </p>
          <a href="tel:+902122365743" className="cta-button">
              <Phone size={18} />
              Hemen Arayın
          </a>
        </div>
      </section>

      {/* --- BÖLÜM 2: FELSEFEMİZ --- */}
      <section className="philosophy-section">
        <div className="container">
            <div className="section-header text-center">
                <h2 className="section-title">Neden Farklıyız?</h2>
                <p className="section-subtitle">Bütüncül Tasarım (Design & Build)</p>
            </div>
            <div className="philosophy-grid">
                <div className="philosophy-card card-architect">
                    <div className="card-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
                    </div>
                    <h3>Mimar Gözü</h3>
                    <p className="card-motto">Ferahlık & Sanat</p>
                    <p className="card-desc">Renk paletlerinden doku uyumuna, mekanın ruhunu ve karakterini yansıtan zamansız çizgiler.</p>
                </div>
                <div className="philosophy-card card-engineer">
                    <div className="card-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" /><circle cx="12" cy="12" r="3" /></svg>
                    </div>
                    <h3>Mühendis Aklı</h3>
                    <p className="card-motto">Otorite & Güven</p>
                    <p className="card-desc">Görünmeyen konfor. Asma tavanın içine gizlenmiş sessiz havalandırma, doğru hesaplanmış aydınlatma ve kusursuz akustik.</p>
                </div>
                <div className="philosophy-card card-unified">
                    <div className="card-icon">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m11 17 2 2a1 1 0 1 0 3-3" /><path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-1.42-1.42l.88-.88a5 5 0 0 1 7.07 0l2.12 2.12a3 3 0 0 1 0 4.24l-8 8a2 2 0 1 1-2.83-2.83l1.42-1.42" /><path d="m12 12 4-4" /><path d="M8 8v1a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2t2-2Z" /></svg>
                    </div>
                    <h3>Tek Muhatap</h3>
                    <p className="card-motto">Anahtar Teslim</p>
                    <p className="card-desc">Tasarlayan da biziz, uygulayan da. Çatışma yok, bahane yok, tek elden kusursuz çözüm var.</p>
                </div>
            </div>
        </div>
      </section>

      {/* --- YENİ BÖLÜM: DETAYLI HİZMET DÖKÜMÜ (CMS'DEN GELİYOR) --- */}
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
              <span className="text-[#D4AF37] font-bold tracking-[0.3em] text-xs uppercase mb-4 block">
                Detaylı Hizmetler
              </span>
              <h2 className="text-3xl md:text-5xl font-light text-gray-900">
                Mimari & Dekorasyon <span className="font-medium text-[#D4AF37]">Portföyü</span>
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
                  {/* Görsel */}
                  <div className="w-full lg:w-1/2 relative group">
                    <div className="absolute -inset-4 border border-white/5 rounded-sm z-0 group-hover:border-[#D4AF37]/20 transition-colors duration-700"></div>
                    <div className="relative z-10 h-[400px] bg-[#1a1a1a] rounded-sm overflow-hidden">
                      <img src={getServiceImage(service.title)} alt={service.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-90" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 bg-[#D4AF37] flex items-center justify-center rounded-sm">
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
                    <Link to={`/hizmetler/mimari/${service.slug}`} className="inline-flex items-center gap-2 text-[#D4AF37] font-medium hover:gap-4 transition-all duration-300">
                      Detaylı Bilgi Al <ArrowRight size={18} />
                    </Link>
                  </div>
                </motion.div>)}
            </div>
          </div>
        </section>}

      {/* --- BÖLÜM 3: HİZMETLERİMİZ --- */}
      

      {/* --- BÖLÜM 4: SÜREÇ --- */}
      <section className="process-section">
        <div className="container">
            <div className="section-header text-center">
                <h2 className="section-title">Nasıl Çalışıyoruz?</h2>
                <p className="section-subtitle">Sıfır Sürpriz, Tam Güven</p>
            </div>
            <div className="process-steps">
                <div className="process-step">
                    <div className="step-number">01</div>
                    <div className="step-content">
                        <h3>Analiz & Keşif</h3>
                        <p>Sizi dinliyor, mekanı lazer tarayıcılarla ölçümlüyor, teknik altyapıyı (tesisat, elektrik) röntgenler gibi inceliyoruz.</p>
                    </div>
                </div>
                <div className="step-connector"></div>
                <div className="process-step">
                    <div className="step-number">02</div>
                    <div className="step-content">
                        <h3>Kurgu & Tasarım</h3>
                        <p>Size özel renk, doku ve malzeme kartelaları hazırlıyor; sürprizlere yer bırakmayan 3D sunumlar yapıyoruz.</p>
                    </div>
                </div>
                <div className="step-connector"></div>
                <div className="process-step">
                    <div className="step-number">03</div>
                    <div className="step-content">
                        <h3>Teknik Projelendirme</h3>
                        <p>Estetiğin altına mühendisliği işliyoruz. Klima nerede duracak, priz nereye gelecek; her şey milimetrik hesaplanır.</p>
                    </div>
                </div>
                <div className="step-connector"></div>
                <div className="process-step">
                    <div className="step-number">04</div>
                    <div className="step-content">
                        <h3>Uygulama & Teslim</h3>
                        <p>Şantiye şeflerimiz gözetiminde, bütçenize sadık kalarak ve zamanında teslimat garantisiyle anahtarı teslim ediyoruz.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- BÖLÜM 5: PORTFOLYO / BEFORE-AFTER SLIDER --- */}
      <section className="portfolio-section">
        <div className="container">
            <div className="portfolio-layout">
                <div className="comparison-container">
                    <div className="image-wrapper before">
                        <img src={donusumOncesi} alt="İnşaat Hali" />
                        <span className="label-badge label-before">ÖNCESİ</span>
                    </div>
                    <div className="image-wrapper after" style={{
              clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
            }}>
                        <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2000&auto=format&fit=crop" alt="Tamamlanmış Proje" />
                        <span className="label-badge label-after">SONRASI</span>
                    </div>
                    <input type="range" min="0" max="100" value={sliderPosition} onChange={handleSliderChange} className="slider-input" />
                    <div className="slider-handle-line" style={{
              left: `${sliderPosition}%`
            }}>
                        <div className="slider-handle-button">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18-6-6 6-6" /><path d="m15 6 6 6-6 6" /></svg>
                        </div>
                    </div>
                </div>
                <div className="project-details">
                    <h2 className="portfolio-title">Dönüşüm Hikayeleri</h2>
                    <div className="project-card">
                        <div className="project-info-row">
                            <span className="info-label">Lokasyon</span>
                            <span className="info-value">Göktürk, İstanbul</span>
                        </div>
                        <div className="project-info-row">
                            <span className="info-label">Konsept</span>
                            <span className="info-value">"Doğal Işık ve Sessiz Konfor"</span>
                        </div>
                        <div className="project-description">
                            <p><strong>Yapılan İş:</strong> Zemin ve duvar renovasyonu, VRF Klima gizleme ve akustik ahşap panel uygulaması.</p>
                            <p className="highlight-result"><strong>Sonuç:</strong> Mekanik altyapı tamamen gizlenerek, %30 daha fazla kullanım alanı ve görsel ferahlık sağlandı.</p>
                        </div>
                        <a href="tel:+905551234567" className="portfolio-link">Projeniz İçin Arayın &rarr;</a>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* --- BÖLÜM 6: SOSYAL KANIT & SSS --- */}
      

      {/* --- CTA SECTION --- */}
      <section className="py-24 bg-gradient-to-t from-[#0a0a0a] to-[#050505] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-light text-white mb-6 tracking-tight">
            Hayalinizdeki mekanı <span className="font-normal border-b border-[#D4AF37]/30 pb-1 text-[#D4AF37]">birlikte tasarlayalım.</span>
          </h2>
          
          <p className="text-gray-400 text-lg font-light mb-12 max-w-xl mx-auto">
            Ücretsiz keşif görüşmesi için hemen iletişime geçin.
          </p>
          
          <a href="/iletisim" className="inline-flex items-center gap-3 bg-[#D4AF37] text-black px-12 py-5 rounded-full font-bold tracking-wide transition-all duration-300 hover:bg-[#c9a430] hover:shadow-[0_0_40px_-10px_rgba(212,175,55,0.3)] hover:scale-105">Mimarlarımıza Hayalinizi Anlatın</a>
        </div>
      </section>

    </div>;
};
export default IcMimari;