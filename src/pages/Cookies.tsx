import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Cookies = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <Link to="/" className="inline-flex items-center gap-2 text-accent mb-8 hover:opacity-80 transition-opacity">
        <ArrowLeft className="w-4 h-4" />
        Ana Sayfaya Dön
      </Link>
      
      <div className="prose prose-slate max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-sm border border-slate-100">
        <h1 className="font-display text-3xl font-bold text-slate-dark mb-6">Çerez (Cookie) Politikası</h1>
        
        <div className="font-serif text-slate-600 space-y-4">
            <p>Web sitemizden en verimli şekilde faydalanabilmeniz ve kullanıcı deneyiminizi geliştirmek için Çerezler (Cookies) kullanıyoruz.</p>

            <h3 className="text-xl font-bold text-slate-dark mt-6 mb-2">Çerez Nedir?</h3>
            <p>Çerezler, ziyaret ettiğiniz web siteleri tarafından tarayıcınız aracılığıyla cihazınıza depolanan küçük metin dosyalarındır.</p>

            <h3 className="text-xl font-bold text-slate-dark mt-6 mb-2">Hangi Tür Çerezleri Kullanıyoruz?</h3>
            <ul className="list-disc pl-5">
                <li><strong>Zorunlu Çerezler:</strong> Web sitesinin düzgün çalışması için zorunludur.</li>
                <li><strong>Performans ve Analiz Çerezleri:</strong> Sitemizin kaç kişi tarafından ziyaret edildiğini anlamamıza yardımcı olur. Veriler anonimdir.</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-dark mt-6 mb-2">Çerezleri Nasıl Yönetebilirsiniz?</h3>
            <p>Ziyaretçilerimiz, tarayıcı ayarlarını değiştirerek çerezlere ilişkin tercihlerini kişiselleştirme imkanına sahiptir (Chrome, Safari, Firefox vb. ayarlarından).</p>
        </div>
      </div>
    </div>
  );
};

export default Cookies;
