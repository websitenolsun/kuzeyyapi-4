import { MapPin, Phone, Instagram, MessageCircle, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-slate-dark text-primary-foreground">
      {/* Contact Bar */}
      <div className="container mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-sm bg-accent/10 border border-accent/20">
              <MapPin className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h4 className="font-display font-semibold text-accent uppercase tracking-wider text-sm mb-2">
                Adres
              </h4>
              <p className="font-serif text-primary-foreground/80 leading-relaxed">
                Abbasağa Mah. Yıldız Cd. No:13
                <br />
                34353 Beşiktaş - İSTANBUL
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-sm bg-accent/10 border border-accent/20">
              <Phone className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h4 className="font-display font-semibold text-accent uppercase tracking-wider text-sm mb-2">
                Telefon
              </h4>
              <a href="tel:+902122365743" className="font-serif text-primary-foreground/80 hover:text-accent transition-colors">
                (0212) 236 57 43
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-accent uppercase tracking-wider text-sm mb-4">
              Sosyal Medya
            </h4>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/kuzeyyapi.mekanik?igsh=NzIwb2F0ampycndp&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-sm bg-accent/10 border border-accent/20 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100081296332346&mibextid=rS40aB7S9Ucbxw6v"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-sm bg-accent/10 border border-accent/20 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="container mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 py-14">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 border-2 border-accent flex items-center justify-center">
                <span className="text-accent font-display font-bold text-lg">K</span>
              </div>
              <h2 className="text-xl font-display font-bold tracking-[0.1em]">
                KUZEY YAPI
              </h2>
            </div>
            <p className="font-serif text-primary-foreground/70 italic leading-relaxed">
              Mekanik Tesisat Ve İç Tasarımda Güvenilir Çözüm Ortağınız
            </p>
          </div>

          {/* Kurumsal */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-5 flex items-center gap-3">
              <span className="w-8 h-0.5 bg-accent" />
              Kurumsal
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/hakkimizda" className="font-serif text-primary-foreground/70 hover:text-accent transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link to="/referanslar" className="font-serif text-primary-foreground/70 hover:text-accent transition-colors">
                  Referanslar
                </Link>
              </li>
              <li>
                <Link to="/iletisim" className="font-serif text-primary-foreground/70 hover:text-accent transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Hizmetlerimiz */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-5 flex items-center gap-3">
              <span className="w-8 h-0.5 bg-accent" />
              Hizmetlerimiz
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/uzmanliklar/mekanik" className="font-serif text-primary-foreground/70 hover:text-accent transition-colors">
                  Mekanik Tesisat
                </Link>
              </li>
              <li>
                <Link to="/hizmetler/dogalgaz" className="font-serif text-primary-foreground/70 hover:text-accent transition-colors">
                  Doğalgaz Sistemleri
                </Link>
              </li>
              <li>
                <Link to="/uzmanliklar/ic-mimari" className="font-serif text-primary-foreground/70 hover:text-accent transition-colors">
                  Mimari Tasarım
                </Link>
              </li>
              <li>
                <Link to="/hizmetler/elektrik" className="font-serif text-primary-foreground/70 hover:text-accent transition-colors">
                  Elektrik Sistemleri
                </Link>
              </li>
            </ul>
          </div>

          {/* Çalışma Saatleri */}
          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-5 flex items-center gap-3">
              <span className="w-8 h-0.5 bg-accent" />
              Çalışma Saatleri
            </h4>
            <div className="space-y-4 font-serif text-primary-foreground/70">
              <div>
                <p className="font-display font-medium text-primary-foreground text-sm mb-1">Hafta İçi</p>
                <p>08:00 - 18:00</p>
              </div>
              <div>
                <p className="font-display font-medium text-primary-foreground text-sm mb-1">Cumartesi</p>
                <p>09:00 - 18:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-display text-primary-foreground/50 uppercase tracking-wider">
              {/* HTML yerine React Router Link kullanıldı */}
              <Link to="/kvkk" className="hover:text-accent transition-colors">
                Kişisel Verilerin Korunması
              </Link>
              <Link to="/cerez-politikasi" className="hover:text-accent transition-colors">
                Çerez Politikaları
              </Link>
              <Link to="/cerez-politikasi" className="hover:text-accent transition-colors">
                Gizlilik Ayarları
              </Link>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-primary-foreground/50 hover:text-accent transition-colors group"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              <span className="text-xs font-display uppercase tracking-wider">Başa Dön</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
