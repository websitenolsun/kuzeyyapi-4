import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Header from "./components/Header";

import Index from "./pages/Index";
import MekanikSistemler from "./pages/MekanikSistemler";
import IcMimari from "./pages/IcMimari";
import YapiDekorasyon from "./pages/YapiDekorasyon";
import Hakkimizda from "./pages/Hakkimizda";
import ISGPolitikamiz from "./pages/ISGPolitikamiz";
import KalitePolitikamiz from "./pages/KalitePolitikamiz";
import ElektrikSistemleri from "./pages/ElektrikSistemleri";
import DogalgazSistemleri from "./pages/DogalgazSistemleri";
import Iletisim from "./pages/Iletisim";
import Referanslar from "./pages/Referanslar";
import SubServiceDetail from "./pages/SubServiceDetail";

import AdminPanel from "./pages/AdminPanel";

import KVKK from "./pages/KVKK";
import Cookies from "./pages/Cookies";

// ✅ Firebase Auth (anon giriş)
import { signInAnonymously, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase";

const queryClient = new QueryClient();

const AppRoutes = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  // ✅ App ayağa kalkınca anon auth aç
  useEffect(() => {
    let isMounted = true;

    const unsub = onAuthStateChanged(auth, (user) => {
      // Zaten user varsa bir şey yapma
      if (!isMounted) return;
      if (user) return;

      // User yoksa anon giriş yap
      signInAnonymously(auth).catch((err) => {
        console.error("Anonymous auth error:", err);
      });
    });

    return () => {
      isMounted = false;
      unsub();
    };
  }, []);

  return (
    <>
      {!isAdminRoute && <Header />}

      <Routes>
        <Route path="/" element={<Index />} />

        <Route path="/uzmanliklar/mekanik" element={<MekanikSistemler />} />
        <Route path="/uzmanliklar/ic-mimari" element={<IcMimari />} />
        <Route path="/yapi-dekorasyon" element={<YapiDekorasyon />} />

        <Route path="/hakkimizda" element={<Hakkimizda />} />
        <Route path="/isg-politikamiz" element={<ISGPolitikamiz />} />
        <Route path="/kalite-politikamiz" element={<KalitePolitikamiz />} />
        <Route path="/referanslar" element={<Referanslar />} />
        <Route path="/iletisim" element={<Iletisim />} />

        {/* ✅ Admin */}
        <Route path="/admin" element={<AdminPanel />} />
        {/* İstersen ileride: <Route path="/admin/*" element={<AdminPanel />} /> */}

        <Route path="/kvkk" element={<KVKK />} />
        <Route path="/cerez-politikasi" element={<Cookies />} />

        <Route path="/hizmetler/elektrik" element={<ElektrikSistemleri />} />
        <Route path="/hizmetler/dogalgaz" element={<DogalgazSistemleri />} />
        <Route path="/hizmetler/:serviceSlug/:subServiceSlug" element={<SubServiceDetail />} />

        {/* 404 fallback */}
        <Route path="/404" element={<div className="p-10">Sayfa bulunamadı.</div>} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
