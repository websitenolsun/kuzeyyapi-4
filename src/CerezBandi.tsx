import { useState, useEffect } from "react";

export default function CerezBandi() {
  const [goster, setGoster] = useState(false);

  useEffect(() => {
    // Daha önce bir seçim yapılmamışsa göster
    const onay = localStorage.getItem("cerez_onayi");
    if (!onay) {
      setGoster(true);
      // Modal açıldığında arka planın kaymasını engelle
      document.body.style.overflow = 'hidden';
    }
  }, []);

  const secimYap = (durum: 'kabul' | 'red' | 'ozel') => {
    // Seçimi kaydet
    localStorage.setItem("cerez_onayi", durum);
    // Modalı kapat
    setGoster(false);
    // Sayfa kaydırmayı tekrar aç
    document.body.style.overflow = 'unset';

    // Eğer kabul edildiyse analitik kodları burada çalışacak
    if (durum === 'kabul') {
        console.log("Tüm çerezler kabul edildi. Analitik başlatılıyor...");
        // Örn: ReactGA.initialize("G-XXXXXXX");
    } else {
        console.log("Çerezler reddedildi veya özelleştirilecek.");
    }
  };

  if (!goster) return null;

  return (
    // Arka plan karartması (Overlay)
    <div className="fixed inset-0 bg-black bg-opacity-70 z-[9999] flex items-center justify-center p-4">
      {/* Modal Penceresi */}
      <div className="bg-[#0f172a] /* Koyu Lacivert Arka Plan */
                      text-white max-w-xl w-full p-6 rounded-xl shadow-2xl border border-slate-700">
        
        <h2 className="text-xl font-bold mb-4 text-white">
          Bu web sitesi tanımlama bilgileri kullanır
        </h2>
        
        <p className="text-slate-300 mb-8 text-sm leading-relaxed">
          Tanımlama bilgilerini; sitemizin doğru şekilde çalışmasını sağlamak,
          içerikleri ve reklamları kişiselleştirmek, sosyal medya özellikleri
          sunmak ve site trafiğimizi analiz etmek için kullanıyoruz. Aynı
          zamanda site kullanımınızla ilgili bilgileri; sosyal medya, reklamcılık
          ve analiz ortaklarımızla paylaşıyoruz.{" "}
          <a href="#" className="text-[#cca45a] font-semibold hover:text-[#e0b96b] transition-colors underline-offset-4 hover:underline">
            Çerez Politikası
          </a>
        </p>

        {/* Düğmeler Alanı */}
        <div className="flex flex-col gap-3">
          {/* Özelleştir Butonu (İçi boş, Altın kenarlı) */}
          <button
            onClick={() => secimYap('ozel')}
            className="w-full py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200
                       bg-transparent border-2 border-[#cca45a] text-[#cca45a] 
                       hover:bg-[#cca45a] hover:text-white"
          >
            Daha fazla bilgi edinin ve özelleştirin
          </button>
          
          {/* Kabul Et Butonu (Dolu Altın Rengi) */}
          <button
            onClick={() => secimYap('kabul')}
            className="w-full py-3 px-4 rounded-lg font-bold text-sm transition-all duration-200
                       bg-[#cca45a] text-white hover:bg-[#dcb56b] hover:shadow-lg hover:shadow-yellow-900/20"
          >
            Hepsini kabul et
          </button>
          
          {/* Reddet Butonu (Koyu Gri ama Altın uyumlu) */}
          <button
            onClick={() => secimYap('red')}
            className="w-full py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-200
                       bg-slate-700 text-slate-200 hover:bg-slate-600 border border-slate-600"
          >
            Tümünü Reddet
          </button>
        </div>

      </div>
    </div>
  );
}