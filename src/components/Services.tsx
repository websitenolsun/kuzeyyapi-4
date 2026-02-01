import blueprintHvac from "@/assets/blueprint-hvac.jpg";
import luxuryLiving from "@/assets/luxury-living.jpg";

const Services = () => {
  return (
    <section className="py-0">
      {/* Mechanical Installation Section - Image Right */}
      <div className="relative min-h-[600px] flex items-center bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-0 items-stretch">
            {/* Text Content - Clean background */}
            <div className="flex flex-col justify-center py-16 md:py-24 md:pr-16 order-2 md:order-1">
              <div className="animate-slide-up">
                <p className="text-accent font-display text-sm uppercase tracking-[0.2em] mb-4">
                  Endüstriyel Mühendislik
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight mb-6">
                  Endüstriyel Ve Modern
                  <br />
                  <span className="text-accent">Mekanik Tesisat</span>
                </h2>
                <p className="font-serif text-muted-foreground text-lg leading-relaxed mb-8">
                  Isıtma, soğutma ve havalandırma (HVAC) sistemlerinde yenilikçi çözümler; 
                  yüksek verimlilik odaklı mühendislik yaklaşımıyla endüstriyel tesislerinize 
                  değer katıyoruz.
                </p>
                <a
                  href="#mekanik"
                  className="inline-flex items-center gap-2 text-accent font-display font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all duration-300"
                >
                  Detaylı Bilgi
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Image */}
            <div className="relative overflow-hidden order-1 md:order-2 min-h-[350px] md:min-h-[600px]">
              <img
                src={blueprintHvac}
                alt="Endüstriyel HVAC Sistemleri"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/20" />
            </div>
          </div>
        </div>
      </div>

      {/* Interior Design Section - Image Left (Zig-Zag) */}
      <div className="relative min-h-[600px] flex items-center bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-0 items-stretch">
            {/* Image */}
            <div className="relative overflow-hidden min-h-[350px] md:min-h-[600px]">
              <img
                src={luxuryLiving}
                alt="Lüks Yaşam Alanı"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-muted/10" />
            </div>
            
            {/* Text Content - Clean background */}
            <div className="flex flex-col justify-center py-16 md:py-24 md:pl-16 bg-muted/30">
              <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
                <p className="text-accent font-display text-sm uppercase tracking-[0.2em] mb-4">
                  Mimari Tasarım
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight mb-6">
                  Yaşam Alanlarına
                  <br />
                  <span className="text-accent italic">Estetik Dokunuş</span>
                </h2>
                <p className="font-serif text-muted-foreground text-lg leading-relaxed mb-8">
                  Işığın ve sadeliğin uyumuyla, hayalinizdeki atmosferi gerçeğe taşıyoruz.
                  Modern mimari prensipler ve zamansız tasarım anlayışıyla yaşam kalitesini
                  yükseltiyoruz.
                </p>
                <a
                  href="#tasarim"
                  className="inline-flex items-center gap-2 text-accent font-display font-semibold text-sm uppercase tracking-wider hover:gap-3 transition-all duration-300"
                >
                  Projelerimizi Keşfedin
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;