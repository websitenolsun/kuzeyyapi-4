import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";
import WorkProcess from "@/components/WorkProcess";
import SEOHead, { organizationSchema } from "@/components/SEOHead";

const Index = () => {
  const homeJsonLd = {
    ...organizationSchema,
    "@type": ["Organization", "LocalBusiness"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Abbasağa Mah. Yıldız Cd. No:13",
      "addressLocality": "Beşiktaş",
      "addressRegion": "İstanbul",
      "postalCode": "34353",
      "addressCountry": "TR"
    },
    "telephone": "+90-212-236-57-43",
    "priceRange": "₺₺₺",
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
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Mühendislik Hizmetleri",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mekanik Tesisat",
            "description": "HVAC, yangın tesisatı, sıhhi tesisat sistemleri"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Doğalgaz Sistemleri",
            "description": "Doğalgaz tesisatı ve kazan dairesi kurulumu"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "İç Mimari",
            "description": "Mimari tasarım ve dekorasyon hizmetleri"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Elektrik Sistemleri",
            "description": "Elektrik tesisatı ve akıllı ev sistemleri"
          }
        }
      ]
    }
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Mekanik Tesisat ve İç Tasarım"
        description="Kuzey Yapı - 15+ yıllık deneyim ile mekanik tesisat, doğalgaz sistemleri, iç mimari ve dekorasyon hizmetleri. İstanbul Beşiktaş'ta profesyonel mühendislik çözümleri."
        canonical="/"
        jsonLd={homeJsonLd}
      />
      <Hero />
      <Stats />
      <WorkProcess />
      <Services />
      <Blog />
      <Footer />
    </div>
  );
};

export default Index;
