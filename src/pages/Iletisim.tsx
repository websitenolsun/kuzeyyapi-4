import { useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, Building2 } from "lucide-react";
import SEOHead, { organizationSchema } from "@/components/SEOHead";
import Footer from "@/components/Footer";

const Iletisim = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adres",
      content: "Abbasağa Mah. Yıldız Cd. No:13\n34353 Beşiktaş - İSTANBUL",
      // Harita linkini burada da güncelledim ki karta tıklayan da doğru yere gitsin
      link: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.9476217883416!2d29.0058706!3d41.0482745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7a419c76ac5%3A0x429639ccde3b31f5!2sKuzey%20Yap%C4%B1!5e0!3m2!1str!2str!4v1769272783844!5m2!1str!2str"
    },
    {
      icon: Phone,
      title: "Telefon",
      content: "(0212) 236 57 43",
      link: "tel:+902122365743"
    },
    {
      icon: Mail,
      title: "E-posta",
      content: "info@kuzeyyapi.com",
      link: "mailto:info@kuzeyyapi.com"
    },
    {
      icon: Clock,
      title: "Çalışma Saatleri",
      content: "Hafta İçi: 08:00 - 18:00\nCumartesi: 09:00 - 18:00",
      link: null
    }
  ];

  const jsonLd = {
    ...organizationSchema,
    "@type": "LocalBusiness",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Abbasağa Mah. Yıldız Cd. No:13",
      "addressLocality": "Beşiktaş",
      "addressRegion": "İstanbul",
      "postalCode": "34353",
      "addressCountry": "TR"
    },
    "telephone": "+90-212-236-57-43",
    "email": "info@kuzeyyapi.com.tr",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="İletişim"
        description="Kuzey Yapı ile iletişime geçin. İstanbul Beşiktaş'ta mekanik tesisat ve iç mimari projeleriniz için profesyonel destek alın."
        canonical="/iletisim"
        jsonLd={jsonLd}
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-slate-dark overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(197,165,114,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(197,165,114,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-2 bg-accent/10 border border-accent/20 text-accent font-display text-sm uppercase tracking-widest mb-6">
              İletişim
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-primary-foreground mb-6 leading-tight">
              Projenizi
              <br />
              <span className="text-accent">Birlikte Planlayalım</span>
            </h1>
            <p className="text-xl text-primary-foreground/70 font-serif leading-relaxed">
              Mekanik tesisat, doğalgaz sistemleri veya iç mimari projeleriniz için
              uzman ekibimizle iletişime geçin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-sm p-8 hover:border-accent/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-accent/10 border border-accent/20 rounded-sm mb-6 group-hover:bg-accent/20 transition-colors">
                  <info.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display font-bold text-lg text-foreground mb-3">
                  {info.title}
                </h3>
                {info.link ? (
                  <a
                    href={info.link}
                    target={info.link.startsWith("http") ? "_blank" : undefined}
                    rel={info.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="font-serif text-muted-foreground hover:text-accent transition-colors whitespace-pre-line"
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="font-serif text-muted-foreground whitespace-pre-line">
                    {info.content}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Bizi Ziyaret Edin
            </h2>
            <p className="text-muted-foreground font-serif max-w-2xl mx-auto">
              İstanbul Beşiktaş'taki merkezimize bekleriz
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative rounded-sm overflow-hidden border border-border shadow-lg"
          >
            {/* GÜNCELLENEN HARİTA KODU */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.9476217883416!2d29.0058706!3d41.0482745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7a419c76ac5%3A0x429639ccde3b31f5!2sKuzey%20Yap%C4%B1!5e0!3m2!1str!2str!4v1769272783844!5m2!1str!2str"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kuzey Yapı Konum"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-dark">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Building2 className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-foreground mb-6">
              Hemen İletişime Geçin
            </h2>
            <p className="text-primary-foreground/70 font-serif max-w-2xl mx-auto mb-10">
              Projenizi değerlendirelim, size en uygun çözümü sunalım.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+902122365743"
                className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground font-display font-semibold text-sm uppercase tracking-wider rounded-sm hover:bg-accent/90 transition-colors"
              >
                <Phone className="w-5 h-5" />
                Hemen Arayın
              </a>
              <a
                href="https://wa.me/902122365743?text=Merhaba,%20proje%20hakkında%20bilgi%20almak%20istiyorum."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-primary-foreground/30 text-primary-foreground font-display font-semibold text-sm uppercase tracking-wider rounded-sm hover:border-accent hover:text-accent transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
              <a
                href="mailto:info@kuzeyyapi.com.tr"
                className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-primary-foreground/30 text-primary-foreground font-display font-semibold text-sm uppercase tracking-wider rounded-sm hover:border-accent hover:text-accent transition-colors"
              >
                <Send className="w-5 h-5" />
                E-posta Gönderin
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Iletisim;
