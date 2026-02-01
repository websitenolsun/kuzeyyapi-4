import React from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const KVKK = () => {
  return (
    <div className="container mx-auto px-6 py-20">
      <Link to="/" className="inline-flex items-center gap-2 text-accent mb-8 hover:opacity-80 transition-opacity">
        <ArrowLeft className="w-4 h-4" />
        Ana Sayfaya Dön
      </Link>
      
      <div className="prose prose-slate max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-lg shadow-sm border border-slate-100">
        <h1 className="font-display text-3xl font-bold text-slate-dark mb-6">Kişisel Verilerin Korunması ve Aydınlatma Metni</h1>
        
        <div className="font-serif text-slate-600 space-y-4">
            <p><strong>Veri Sorumlusu:</strong> Kuzey Yapı Mühendislik & Tasarım</p>
            <p>Kuzey Yapı Mühendislik & Tasarım ("Şirket") olarak, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, web sitemizi ziyaret eden ve hizmetlerimizden yararlanan kişilerin verilerinin güvenliğine azami önem veriyoruz.</p>

            <h3 className="text-xl font-bold text-slate-dark mt-6 mb-2">1. Hangi Verilerinizi İşliyoruz?</h3>
            <p>Web sitemiz (kuzeyyapi.com) üzerinden gerçekleştirdiğiniz işlemlere bağlı olarak şu verileriniz işlenebilmektedir:</p>
            <ul className="list-disc pl-5">
                <li><strong>Kimlik Bilgileri:</strong> Adınız, soyadınız (iletişim formu doldurmanız halinde).</li>
                <li><strong>İletişim Bilgileri:</strong> E-posta adresiniz, telefon numaranız.</li>
                <li><strong>İşlem Güvenliği Bilgileri:</strong> IP adresiniz, siteye giriş-çıkış saatleriniz.</li>
            </ul>

            <h3 className="text-xl font-bold text-slate-dark mt-6 mb-2">2. Verilerinizi Hangi Amaçlarla İşliyoruz?</h3>
            <p>Kişisel verileriniz; teklif süreçlerinin yürütülmesi, iletişim taleplerinin cevaplanması ve yasal yükümlülüklerin yerine getirilmesi amacıyla işlenmektedir.</p>

            <h3 className="text-xl font-bold text-slate-dark mt-6 mb-2">3. Haklarınız Nelerdir?</h3>
            <p>KVKK'nın 11. maddesi uyarınca bize başvurarak; verilerinizin işlenip işlenmediğini öğrenme, yanlışsa düzeltilmesini isteme, silinmesini talep etme hakkına sahipsiniz.</p>
        </div>
      </div>
    </div>
  );
};

export default KVKK;
