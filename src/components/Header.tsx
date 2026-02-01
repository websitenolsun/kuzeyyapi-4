import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import kuzeyLogoFull from "@/assets/kuzey-logo-full.jpg";
import kuzeyLogoHorizontal from "@/assets/kuzey-logo-horizontal.png";

const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);

  const darkTextPages = ['/hakkimizda', '/isg-politikamiz', '/kalite-politikamiz'];
  const useDarkText = darkTextPages.includes(location.pathname) && !isScrolled;
  const useFullLogo = darkTextPages.includes(location.pathname) && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const DropdownItem = ({ href, text }: { href: string; text: string; }) => (
    <Link to={href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-black transition-colors duration-200">
      {text}
    </Link>
  );

  const SocialIcon = ({ href, children, label }: { href: string; children: React.ReactNode; label: string; }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} 
       className={`w-9 h-9 flex items-center justify-center rounded-full border hover:border-[#D4AF37] hover:text-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300 ${useDarkText ? 'border-gray-300 text-gray-600' : 'border-white/20 text-white/70'}`}>
      {children}
    </a>
  );

  const toggleMobileDropdown = (dropdown: string) => {
    setOpenMobileDropdown(openMobileDropdown === dropdown ? null : dropdown);
  };

  const handleMobileLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
      isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10 shadow-sm py-4" : useDarkText ? "bg-transparent py-6" : "bg-transparent py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* LOGO ALANI */}
        <Link to="/" className="flex-shrink-0 flex items-center group cursor-pointer">
          {useFullLogo ? (
            <img src={kuzeyLogoFull} alt="Kuzey Yapı" className="h-20 w-auto" />
          ) : (
            <img src={kuzeyLogoHorizontal} alt="Kuzey Yapı" className="h-20 w-auto" />
          )}
        </Link>

        {/* DESKTOP MENÜ */}
        <div className="hidden md:flex items-center space-x-8">
          
          {/* 1. KURUMSAL (Dropdown) */}
          <div className="relative group">
            <button className={`flex items-center text-sm font-medium hover:text-[#D4AF37] tracking-wider transition-colors uppercase gap-1 focus:outline-none ${useDarkText ? 'text-gray-900' : 'text-white'}`}>
              KURUMSAL
              <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-sm shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="py-2 border-t-2 border-[#D4AF37]">
                <DropdownItem href="/hakkimizda" text="Hakkımızda" />
                <DropdownItem href="/isg-politikamiz" text="İSG Politikamız" />
                <DropdownItem href="/kalite-politikamiz" text="Kalite Politikamız" />
              </div>
            </div>
          </div>

          {/* 2. HİZMETLERİMİZ (Dropdown) */}
          <div className="relative group">
            <button className={`flex items-center text-sm font-medium hover:text-[#D4AF37] tracking-wider transition-colors uppercase gap-1 focus:outline-none ${useDarkText ? 'text-gray-900' : 'text-white'}`}>
              HİZMETLERİMİZ
              <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-sm shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="py-2 border-t-2 border-[#D4AF37]">
                <DropdownItem href="/uzmanliklar/mekanik" text="Mekanik Tesisat" />
                <DropdownItem href="/hizmetler/dogalgaz" text="Doğalgaz Sistemleri" />
                <DropdownItem href="/uzmanliklar/ic-mimari" text="Mimari & Dekorasyon" />
                <DropdownItem href="/hizmetler/elektrik" text="Elektrik Sistemleri" />
              </div>
            </div>
          </div>

          {/* 3. REFERANSLAR */}
          <Link to="/referanslar" className={`text-sm font-medium hover:text-[#D4AF37] tracking-wider transition-colors uppercase ${useDarkText ? 'text-gray-900' : 'text-white'}`}>
            REFERANSLAR
          </Link>

          {/* 4. İLETİŞİM */}
          <Link to="/iletisim" className={`text-sm font-medium hover:text-[#D4AF37] tracking-wider transition-colors uppercase ${useDarkText ? 'text-gray-900' : 'text-white'}`}>
            İLETİŞİM
          </Link>

          {/* SOSYAL MEDYA İKONLARI */}
          <div className={`flex items-center space-x-3 ml-4 pl-4 border-l ${useDarkText ? 'border-gray-300' : 'border-white/20'}`}>
            {/* Facebook */}
            <SocialIcon href="https://www.facebook.com/profile.php?id=100081296332346&mibextid=rS40aB7S9Ucbxw6v" label="Facebook">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </SocialIcon>

            {/* Instagram */}
            <SocialIcon href="https://www.instagram.com/kuzeyyapi.mekanik?igsh=ZTVzY3Fia3I2ajhh" label="Instagram">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </SocialIcon>

            {/* WhatsApp */}
            <SocialIcon href="https://wa.me/902122365743" label="WhatsApp">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </SocialIcon>
          </div>
        </div>

        {/* MOBİL MENÜ BUTONU */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className={`hover:text-[#D4AF37] transition-colors ${useDarkText ? 'text-gray-900' : 'text-white'}`}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBİL MENÜ İÇERİĞİ */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-t border-gray-800 h-screen overflow-y-auto">
          <div className="flex flex-col p-8 space-y-4">
            
            {/* Mobil Kurumsal */}
            <div className="space-y-2">
              <button onClick={() => toggleMobileDropdown('kurumsal')} className="flex items-center justify-between w-full text-[#D4AF37] text-xs uppercase tracking-widest font-bold py-2">
                Kurumsal
                <ChevronDown size={16} className={`transition-transform duration-300 ${openMobileDropdown === 'kurumsal' ? 'rotate-180' : ''}`} />
              </button>
              {openMobileDropdown === 'kurumsal' && (
                <div className="space-y-2 pl-4 border-l border-[#D4AF37]/30">
                  <Link to="/hakkimizda" onClick={handleMobileLinkClick} className="block text-gray-300 py-1 hover:text-white transition-colors">Hakkımızda</Link>
                  <Link to="/isg-politikamiz" onClick={handleMobileLinkClick} className="block text-gray-300 py-1 hover:text-white transition-colors">İSG Politikamız</Link>
                  <Link to="/kalite-politikamiz" onClick={handleMobileLinkClick} className="block text-gray-300 py-1 hover:text-white transition-colors">Kalite Politikamız</Link>
                </div>
              )}
            </div>

            {/* Mobil Hizmetlerimiz */}
            <div className="space-y-2">
              <button onClick={() => toggleMobileDropdown('hizmetler')} className="flex items-center justify-between w-full text-[#D4AF37] text-xs uppercase tracking-widest font-bold py-2">
                Hizmetlerimiz
                <ChevronDown size={16} className={`transition-transform duration-300 ${openMobileDropdown === 'hizmetler' ? 'rotate-180' : ''}`} />
              </button>
              {openMobileDropdown === 'hizmetler' && (
                <div className="space-y-2 pl-4 border-l border-[#D4AF37]/30">
                  <Link to="/uzmanliklar/mekanik" onClick={handleMobileLinkClick} className="block text-gray-300 py-1 hover:text-white transition-colors">Mekanik Tesisat</Link>
                  <Link to="/hizmetler/dogalgaz" onClick={handleMobileLinkClick} className="block text-gray-300 py-1 hover:text-white transition-colors">Doğalgaz Sistemleri</Link>
                  <Link to="/uzmanliklar/ic-mimari" onClick={handleMobileLinkClick} className="block text-gray-300 py-1 hover:text-white transition-colors">Mimari & Dekorasyon</Link>
                  <Link to="/hizmetler/elektrik" onClick={handleMobileLinkClick} className="block text-gray-300 py-1 hover:text-white transition-colors">Elektrik Sistemleri</Link>
                </div>
              )}
            </div>

            {/* Mobil Referanslarımız */}
            <Link to="/referanslar" onClick={handleMobileLinkClick} className="text-[#D4AF37] text-xs uppercase tracking-widest font-bold py-2 hover:text-white transition-colors">
              Referanslarımız
            </Link>

            {/* Mobil İletişim */}
            <Link to="/iletisim" onClick={handleMobileLinkClick} className="text-[#D4AF37] text-xs uppercase tracking-widest font-bold py-2 hover:text-white transition-colors">
              İletişim
            </Link>

            {/* Mobil Sosyal Medya */}
            <div className="pt-6 mt-4 border-t border-gray-800">
              <span className="text-gray-500 text-xs uppercase tracking-widest mb-4 block">Bizi Takip Edin</span>
              <div className="flex items-center space-x-4">
                {/* Facebook */}
                <a href="https://www.facebook.com/profile.php?id=100081296332346&mibextid=rS40aB7S9Ucbxw6v" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white/70 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a href="https://www.instagram.com/kuzey.yapibuderus?igsh=Ym1xYzZhOTJnd3Jp" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white/70 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;