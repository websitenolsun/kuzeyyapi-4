import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, Loader2 } from "lucide-react";
import SEOHead, { organizationSchema } from "@/components/SEOHead";
import Footer from "@/components/Footer";
import { db } from "@/lib/firebase";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import type { Project } from "@/types/project";

type TabType = "tamamlanan" | "devam";

const Referanslar = () => {
  const [activeTab, setActiveTab] = useState<TabType>("tamamlanan");
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  // createdAt string / timestamp / undefined -> güvenli parse
  const getDateMs = (value: unknown): number => {
    if (!value) return 0;

    // Firestore Timestamp benzeri (toDate fonksiyonu varsa)
    if (typeof value === "object" && value !== null && "toDate" in value) {
      try {
        const d = (value as any).toDate();
        return d instanceof Date ? d.getTime() : 0;
      } catch {
        return 0;
      }
    }

    // ISO string (sende şu an bu var)
    if (typeof value === "string") {
      const ms = Date.parse(value);
      return Number.isFinite(ms) ? ms : 0;
    }

    // number (ms) gelirse
    if (typeof value === "number") return value;

    return 0;
  };

  const formatCreatedAt = (value: unknown) => {
    const ms = getDateMs(value);
    if (!ms) return "Tarih yok";
    const d = new Date(ms);
    if (Number.isNaN(d.getTime())) return "Tarih yok";

    return d.toLocaleDateString("tr-TR", {
      year: "numeric",
      month: "short",
    });
  };

  // Firebase'den projeleri çek
  useEffect(() => {
    setLoading(true);

    const projectType = activeTab === "tamamlanan" ? "completed" : "ongoing";

    // ✅ Collection adı kesin: "projects"
    // ✅ Alan adı kesin: "type"
    // ❌ orderBy kaldırıldı (createdAt string olduğu için)
    const q = query(
      collection(db, "projects"),
      where("type", "==", projectType)
    );

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const projectsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Project[];

        setProjects(projectsData);
        setLoading(false);
      },
      (error) => {
        console.error("Firestore error:", error);
        setProjects([]);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [activeTab]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Client-side sıralama: createdAt DESC
  const sortedProjects = useMemo(() => {
    return [...projects].sort((a, b) => {
      const aMs = getDateMs((a as any).createdAt);
      const bMs = getDateMs((b as any).createdAt);
      return bMs - aMs;
    });
  }, [projects]);

  const projectCount = sortedProjects.length;

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Referanslar - Tamamlanan Projeler"
        description="Kuzey Yapı'nın tamamladığı 81+ başarılı proje. Endüstriyel tesisler, ticari binalar, oteller ve konut projelerinde mekanik tesisat referanslarımız."
        canonical="/referanslar"
        jsonLd={organizationSchema}
      />

      {/* Hero Section - Compact */}
      <section className="relative pt-28 pb-12 bg-slate-dark overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1486718448742-163732cd1544?w=1920&h=600&fit=crop&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/75" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-2xl md:text-4xl font-display font-bold text-primary-foreground mb-3">
              Tamamlanan Projeler
            </h1>
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link
                to="/"
                className="hover:text-accent transition-colors font-serif"
              >
                Anasayfa
              </Link>
              <ChevronRight className="w-3 h-3" />
              <span className="hover:text-accent transition-colors font-serif">
                Referanslar
              </span>
              <ChevronRight className="w-3 h-3" />
              <span className="text-accent font-serif font-medium">
                Tamamlanan Projeler
              </span>
            </nav>
          </motion.div>
        </div>
      </section>

      {/* Control Bar */}
      <section className="bg-card border-b border-border sticky top-20 z-40">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between py-4 gap-4">
            {/* Tab Buttons */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setActiveTab("tamamlanan")}
                className={`px-5 py-2 font-display text-sm tracking-wide transition-all duration-300 border rounded ${
                  activeTab === "tamamlanan"
                    ? "bg-card border-accent text-accent"
                    : "bg-transparent border-border text-muted-foreground hover:border-accent/50 hover:text-foreground"
                }`}
              >
                Tamamlanan Projeler
              </button>
              <span className="hidden md:block w-6 h-px bg-border" />
              <button
                onClick={() => setActiveTab("devam")}
                className={`px-5 py-2 font-display text-sm tracking-wide transition-all duration-300 border rounded ${
                  activeTab === "devam"
                    ? "bg-card border-accent text-accent"
                    : "bg-transparent border-border text-muted-foreground hover:border-accent/50 hover:text-foreground"
                }`}
              >
                Devam Eden Projeler
              </button>
            </div>

            {/* Project Count */}
            <p className="text-muted-foreground font-serif text-sm">
              Toplam{" "}
              <span className="font-semibold text-accent">{projectCount}</span>{" "}
              Proje {activeTab === "tamamlanan" ? "Tamamlandı" : "Devam Ediyor"}
            </p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <Loader2 className="w-12 h-12 text-accent animate-spin mb-4" />
              <p className="text-muted-foreground font-serif">
                Projeler yükleniyor...
              </p>
            </div>
          ) : sortedProjects.length === 0 ? (
            <div className="text-center py-20">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-muted mb-6">
                <ChevronRight className="w-10 h-10 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                Henüz Proje Bulunmuyor
              </h3>
              <p className="text-muted-foreground font-serif text-sm max-w-md mx-auto">
                {activeTab === "tamamlanan"
                  ? "Tamamlanan projeler yakında burada listelenecektir."
                  : "Devam eden projeler yakında burada listelenecektir."}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-card rounded-lg overflow-hidden border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/5"
                >
                  {/* Image Container */}
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    <img
                      src={(project as any).imageUrl}
                      alt={(project as any).name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.src =
                          "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&h=450&fit=crop&q=80";
                      }}
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-dark/80 via-slate-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-display font-bold text-foreground mb-3 line-clamp-2 group-hover:text-accent transition-colors">
                      {(project as any).name}
                    </h3>
                    <p className="text-sm text-muted-foreground font-serif leading-relaxed line-clamp-3 mb-4">
                      {(project as any).description}
                    </p>

                    {/* Metadata */}
                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <span className="text-xs font-display uppercase tracking-wider text-muted-foreground">
                        {formatCreatedAt((project as any).createdAt)}
                      </span>

                      <div
                        className={`px-3 py-1 rounded-full text-xs font-display font-semibold uppercase tracking-wide ${
                          (project as any).type === "completed"
                            ? "bg-accent/10 text-accent border border-accent/20"
                            : "bg-royal/10 text-royal border border-royal/20"
                        }`}
                      >
                        {(project as any).type === "completed"
                          ? "Tamamlandı"
                          : "Devam Ediyor"}
                      </div>
                    </div>
                  </div>

                  {/* Decorative accent line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-accent to-gold group-hover:w-full transition-all duration-500" />
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-slate-dark">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground mb-4">
              Projenizi Birlikte Hayata Geçirelim
            </h2>
            <p className="text-primary-foreground/70 font-serif max-w-xl mx-auto mb-8 text-sm">
              Deneyimli ekibimiz ve kanıtlanmış çözümlerimizle projenize değer
              katalım.
            </p>

            <Link
              to="/iletisim"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground font-display font-semibold text-sm uppercase tracking-wide rounded hover:bg-accent/90 transition-colors"
            >
              İletişime Geçin
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Referanslar;
