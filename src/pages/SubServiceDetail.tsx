import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Phone, MapPin, ChevronRight, ChevronDown, ChevronUp } from "lucide-react";
import SEOHead from "@/components/SEOHead";
import { useSubServiceDetail, useRelatedSubServices } from "./hooks/useSubServiceDetail";
import DynamicIcon from "@/components/DynamicIcon";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// Default service areas for Beşiktaş region
const defaultServiceAreas = [
  "Beşiktaş",
  "Şişli",
  "Sarıyer",
  "Beyoğlu",
  "Kağıthane",
  "Eyüpsultan",
  "Fatih",
  "Üsküdar"
];

// Service slug to Turkish name mapping
const serviceSlugToName: Record<string, string> = {
  'elektrik': 'Elektrik Sistemleri',
  'mekanik': 'Mekanik Sistemler',
  'dogalgaz': 'Doğalgaz Sistemleri',
  'mimari': 'Mimari & Dekorasyon'
};

// Service slug to route mapping
const serviceSlugToRoute: Record<string, string> = {
  'elektrik': '/hizmetler/elektrik',
  'mekanik': '/uzmanliklar/mekanik',
  'dogalgaz': '/hizmetler/dogalgaz',
  'mimari': '/uzmanliklar/ic-mimari'
};

// Service accent colors
const serviceAccentColors: Record<string, string> = {
  'elektrik': '#EAB308',
  'mekanik': '#EAB308',
  'dogalgaz': '#EAB308',
  'mimari': '#D4AF37'
};

const SubServiceDetail = () => {
  const { serviceSlug, subServiceSlug } = useParams<{ serviceSlug: string; subServiceSlug: string }>();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  
  const { data: subService, isLoading, error } = useSubServiceDetail(
    serviceSlug || '', 
    subServiceSlug || ''
  );
  
  const { data: relatedServices } = useRelatedSubServices(
    subService?.service_id || '',
    subService?.id || ''
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [subServiceSlug]);

  const accentColor = serviceAccentColors[serviceSlug || 'elektrik'] || '#EAB308';
  const serviceAreas = subService?.service_areas || defaultServiceAreas;
  const faqs = subService?.faqs || [];

  // Generate JSON-LD for Service
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": subService?.title || '',
    "description": subService?.seo_description || subService?.description || '',
    "url": `https://kuzey-yapi.lovable.app/hizmetler/${serviceSlug}/${subServiceSlug}`,
    "provider": {
      "@type": "Organization",
      "name": "Kuzey Yapı Mühendislik",
      "url": "https://kuzey-yapi.lovable.app"
    },
    "areaServed": serviceAreas.map(area => ({
      "@type": "City",
      "name": `${area}, İstanbul`
    })),
    "serviceType": subService?.title || ''
  };

  // Generate JSON-LD for FAQ
  const faqSchema = faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  // Combined schema
  const combinedSchema = faqSchema ? [serviceSchema, faqSchema] : serviceSchema;

  if (isLoading) {
    return (
      <div className="bg-[#050505] min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-t-transparent rounded-full animate-spin" style={{ borderColor: `${accentColor} transparent transparent transparent` }}></div>
      </div>
    );
  }

  if (error || !subService) {
    return (
      <div className="bg-[#050505] min-h-screen flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-light mb-4">Hizmet Bulunamadı</h1>
          <p className="text-gray-400 mb-8">Aradığınız hizmet sayfası mevcut değil.</p>
          <Link to="/" className="px-8 py-3 rounded-full font-medium" style={{ backgroundColor: accentColor, color: '#000' }}>
            Ana Sayfaya Dön
          </Link>
        </div>
      </div>
    );
  }

  const parentServiceName = serviceSlugToName[serviceSlug || ''] || 'Hizmetler';
  const parentServiceRoute = serviceSlugToRoute[serviceSlug || ''] || '/';

  return (
    <div className="bg-[#050505] min-h-screen text-white selection:bg-[#EAB308]/30 selection:text-white font-sans pb-0">
      <SEOHead 
        title={subService.seo_title || `${subService.title} | ${parentServiceName}`}
        description={subService.seo_description || subService.description}
        canonical={`/hizmetler/${serviceSlug}/${subServiceSlug}`}
        jsonLd={combinedSchema}
      />
      
      {/* --- 1. HERO SECTION --- */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/80 to-[#050505]"></div>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          {/* Breadcrumb */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Breadcrumb>
              <BreadcrumbList className="justify-center">
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/" className="text-gray-400 hover:text-white">Ana Sayfa</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ChevronRight className="h-4 w-4 text-gray-600" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to={parentServiceRoute} className="text-gray-400 hover:text-white">{parentServiceName}</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator>
                  <ChevronRight className="h-4 w-4 text-gray-600" />
                </BreadcrumbSeparator>
                <BreadcrumbItem>
                  <BreadcrumbPage className="font-medium" style={{ color: accentColor }}>{subService.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </motion.div>

          {/* Icon */}
          <motion.div
            className="w-20 h-20 mx-auto mb-8 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: accentColor }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <DynamicIcon name={subService.icon_name} size={40} className="text-black" />
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.1] mb-8 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {subService.title.split(' ').slice(0, -1).join(' ')}{' '}
            <span className="font-medium" style={{ color: accentColor }}>
              {subService.title.split(' ').slice(-1)}
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-400 font-light tracking-wide max-w-2xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {subService.description}
          </motion.p>

          <motion.a 
            href="tel:+902122365743" 
            className="group relative inline-flex items-center gap-2 px-10 py-4 overflow-hidden rounded-full bg-white/5 border border-white/10 text-white transition-all"
            style={{ 
              '--hover-border-color': `${accentColor}50`,
              '--hover-bg-color': `${accentColor}10`
            } as React.CSSProperties}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = `${accentColor}50`;
              e.currentTarget.style.backgroundColor = `${accentColor}10`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)';
            }}
          >
            <span 
              className="relative z-10 font-medium tracking-widest text-sm uppercase transition-colors flex items-center gap-2"
              style={{ color: 'white' }}
              onMouseEnter={(e) => e.currentTarget.style.color = accentColor}
              onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
            >
              <Phone size={16} />
              Hemen Arayın
            </span>
          </motion.a>
        </div>
      </section>

      {/* --- 2. DETAYLI AÇIKLAMA --- */}
      <section className="py-20 bg-[#080808]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-light text-white mb-8">
              Hizmet <span className="font-medium" style={{ color: accentColor }}>Detayları</span>
            </h2>
            
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed text-lg">
                {subService.long_description || subService.description}
              </p>
            </div>

            {/* Avantajlar Listesi */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
              "Uzman ve sertifikalı teknik kadro",
                "Yönetmeliklere tam uyum",
                "Kaliteli ve garantili malzemeler",
                "Zamanında teslimat garantisi",
                "Şeffaf ve detaylı fiyatlandırma"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-300">
                  <div 
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: accentColor }}
                  ></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 3. HİZMET BÖLGELERİ (YEREL SEO) --- */}
      <section className="py-20 bg-[#050505] border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span 
              className="font-bold tracking-[0.3em] text-xs uppercase mb-4 block"
              style={{ color: accentColor }}
            >
              Hizmet Bölgelerimiz
            </span>
            <h2 className="text-2xl md:text-4xl font-light text-white">
              İstanbul'un <span className="font-medium" style={{ color: accentColor }}>Beşiktaş ve Çevresinde</span> Hizmetinizdeyiz
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {serviceAreas.map((area, i) => (
              <motion.div
                key={area}
                className="group p-6 bg-white/5 border border-white/10 rounded-sm hover:border-opacity-50 transition-all duration-300 cursor-default"
                style={{ '--hover-border-color': accentColor } as React.CSSProperties}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = accentColor}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
              >
                <div className="flex items-center gap-3">
                  <MapPin size={18} style={{ color: accentColor }} />
                  <div>
                    <span className="text-white font-medium">{area}</span>
                    <p className="text-gray-500 text-sm mt-1">{subService.title}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-gray-500 mt-8 text-sm">
            {subService.title} için {serviceAreas.join(', ')} ve çevre ilçelerde profesyonel hizmet veriyoruz.
          </p>
        </div>
      </section>

      {/* --- 4. SSS (FAQ) BÖLÜMÜ --- */}
      {faqs.length > 0 && (
        <section className="py-20 bg-[#080808] border-t border-white/5">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span 
                className="font-bold tracking-[0.3em] text-xs uppercase mb-4 block"
                style={{ color: accentColor }}
              >
                Sık Sorulan Sorular
              </span>
              <h2 className="text-2xl md:text-4xl font-light text-white">
                {subService.title} Hakkında <span className="font-medium" style={{ color: accentColor }}>Merak Edilenler</span>
              </h2>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  className="border border-white/10 rounded-sm overflow-hidden"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <button
                    className="w-full p-6 flex items-center justify-between text-left bg-white/5 hover:bg-white/10 transition-colors"
                    onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  >
                    <span className="text-white font-medium pr-4">{faq.question}</span>
                    {activeFaq === i ? (
                      <ChevronUp size={20} style={{ color: accentColor }} />
                    ) : (
                      <ChevronDown size={20} className="text-gray-500" />
                    )}
                  </button>
                  {activeFaq === i && (
                    <div className="p-6 bg-black/20">
                      <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* --- 5. İLGİLİ HİZMETLER --- */}
      {relatedServices && relatedServices.length > 0 && (
        <section className="py-20 bg-[#050505] border-t border-white/5">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span 
                className="font-bold tracking-[0.3em] text-xs uppercase mb-4 block"
                style={{ color: accentColor }}
              >
                Diğer Hizmetlerimiz
              </span>
              <h2 className="text-2xl md:text-4xl font-light text-white">
                İlgili <span className="font-medium" style={{ color: accentColor }}>Hizmetler</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((related, i) => (
                <motion.div
                  key={related.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={`/hizmetler/${serviceSlug}/${related.slug}`}
                    className="block p-6 bg-white/5 border border-white/10 rounded-sm hover:border-opacity-50 transition-all duration-300 group h-full"
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = accentColor}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
                  >
                    <div 
                      className="w-12 h-12 rounded-sm flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${accentColor}20` }}
                    >
                      <DynamicIcon name={related.icon_name} size={24} className="text-[#EAB308]" />
                    </div>
                    <h3 className="text-white font-medium mb-2 group-hover:text-opacity-80 transition-colors">
                      {related.title}
                    </h3>
                    <p className="text-gray-500 text-sm line-clamp-2">{related.description}</p>
                    <div 
                      className="mt-4 inline-flex items-center gap-1 text-sm font-medium transition-all group-hover:gap-2"
                      style={{ color: accentColor }}
                    >
                      Detaylı Bilgi <ArrowRight size={14} />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* --- 6. CTA SECTION --- */}
      <section className="py-24 bg-gradient-to-t from-[#0a0a0a] to-[#050505] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-light text-white mb-6 tracking-tight">
              {subService.title} için{' '}
              <span 
                className="font-normal border-b pb-1"
                style={{ borderColor: `${accentColor}30`, color: accentColor }}
              >
                bize ulaşın
              </span>
            </h2>
            
            <p className="text-gray-400 text-lg font-light mb-12 max-w-xl mx-auto">
              {serviceAreas.slice(0, 3).join(', ')} ve çevresinde {subService.title.toLowerCase()} hizmeti için<br />
              uzman ekibimizle iletişime geçin.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/iletisim" 
                className="inline-flex items-center justify-center gap-3 px-12 py-5 rounded-full font-bold tracking-wide transition-all duration-300 hover:scale-105"
                style={{ 
                  backgroundColor: accentColor, 
                  color: '#000',
                  boxShadow: `0 0 40px -10px ${accentColor}50`
                }}
              >
                Ücretsiz Keşif Talep Edin
              </a>
              <a 
                href="tel:+902122365743" 
                className="inline-flex items-center justify-center gap-3 px-12 py-5 rounded-full font-bold tracking-wide border border-white/20 text-white hover:bg-white/5 transition-all duration-300"
              >
                <Phone size={18} />
                Hemen Arayın
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SubServiceDetail;
