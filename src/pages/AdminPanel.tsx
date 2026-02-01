import React, { useEffect, useMemo, useState } from "react";
import {
  Plus,
  Trash2,
  Edit,
  Save,
  X,
  Image as ImageIcon,
  CheckCircle,
  Clock,
  Loader2,
  AlertCircle,
} from "lucide-react";

import { db } from "@/lib/firebase";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  orderBy,
} from "firebase/firestore";

type ProjectType = "ongoing" | "completed";

type Project = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  type: ProjectType;
  createdAt?: string;
  updatedAt?: string;
};

const AdminPanel = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<ProjectType>("ongoing");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error" | "";
    text: string;
  }>({ type: "", text: "" });

  const emptyForm = (type: ProjectType): { name: string; description: string; imageUrl: string; type: ProjectType } => ({
    name: "",
    description: "",
    imageUrl: "",
    type,
  });

  const [formData, setFormData] = useState(emptyForm("ongoing"));

  const showStatus = (type: "success" | "error", text: string) => {
    setStatusMessage({ type, text });
    window.setTimeout(() => setStatusMessage({ type: "", text: "" }), 3000);
  };

  // 🔧 Basit URL normalize: Unsplash "page" linki girilirse uyar + olduğu gibi bırak.
  // (Görüntü yüklenmiyorsa genelde sebep bu oluyor)
  const normalizeImageUrl = (url: string) => {
    const trimmed = url.trim();
    if (!trimmed) return trimmed;

    // Unsplash "page" linki (img değil) girilmişse uyaralım.
    if (trimmed.includes("unsplash.com/photos/") && !trimmed.includes("images.unsplash.com/")) {
      // Yine de url'yi bozmuyoruz, sadece uyarıyoruz.
      // İstersen burada otomatik dönüştürme de yapılabilir ama garanti değil.
      showStatus(
        "error",
        "Not: Unsplash 'unsplash.com/photos/..' linki bazen görsel olarak çalışmaz. 'images.unsplash.com/..' linki kullan."
      );
    }
    return trimmed;
  };

  // ✅ Firestore: ROOT "projects"
  useEffect(() => {
    const projectsRef = collection(db, "projects");

    // createdAt olmayan kayıtlar ileride karışmasın diye: createdAt koyuyoruz zaten.
    // Yine de bazı eski kayıtlar createdAt'sizse orderBy sorun çıkarabilir.
    // Eğer hata alırsan: orderBy satırını kaldırıp sadece query(projectsRef) yap.
    const q = query(projectsRef, orderBy("createdAt", "desc"));

    const unsub = onSnapshot(
      q,
      (snapshot) => {
        const data = snapshot.docs.map((d) => ({
          id: d.id,
          ...(d.data() as Omit<Project, "id">),
        })) as Project[];

        setProjects(data);
        setLoading(false);
      },
      (err) => {
        console.error("Firestore error:", err);
        showStatus("error", "Veriler yüklenirken bir hata oluştu. (Rules / Index / orderBy kontrol et)");
        setLoading(false);
      }
    );

    return () => unsub();
  }, []);

  const filteredProjects = useMemo(
    () => projects.filter((p) => p.type === activeTab),
    [projects, activeTab]
  );

  const handleOpenModal = (project: Project | null = null) => {
    if (project) {
      setEditingProject(project);
      setFormData({
        name: project.name ?? "",
        description: project.description ?? "",
        imageUrl: project.imageUrl ?? "",
        type: (project.type ?? "ongoing") as ProjectType,
      });
    } else {
      setEditingProject(null);
      setFormData(emptyForm(activeTab));
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setEditingProject(null);
    setFormData(emptyForm(activeTab));
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const cleaned = {
        ...formData,
        imageUrl: normalizeImageUrl(formData.imageUrl),
        updatedAt: new Date().toISOString(),
      };

      if (editingProject) {
        // createdAt'ı KORU. (Referanslar sıralaması bozulmasın)
        const ref = doc(db, "projects", editingProject.id);
        await updateDoc(ref, cleaned);
        showStatus("success", "Proje başarıyla güncellendi.");
      } else {
        const projectsRef = collection(db, "projects");
        await addDoc(projectsRef, {
          ...cleaned,
          createdAt: new Date().toISOString(),
        });
        showStatus("success", "Yeni proje başarıyla eklendi.");
      }

      closeModal();
    } catch (error) {
      console.error("Save error:", error);
      showStatus("error", "İşlem sırasında bir hata oluştu. (Rules izin veriyor mu?)");
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Bu projeyi silmek istediğinize emin misiniz?")) return;

    try {
      await deleteDoc(doc(db, "projects", id));
      showStatus("success", "Proje silindi.");
    } catch (error) {
      console.error("Delete error:", error);
      showStatus("error", "Silme işlemi başarısız oldu.");
    }
  };

  const formatDate = (iso?: string) => {
    if (!iso) return "Tarih yok";
    const d = new Date(iso);
    if (Number.isNaN(d.getTime())) return "Tarih yok";
    return d.toLocaleDateString("tr-TR");
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50">
        <Loader2 className="w-12 h-12 text-blue-600 animate-spin mb-4" />
        <p className="text-slate-600 font-medium">Panel Yükleniyor...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Referans Yönetim Paneli</h1>
            <p className="text-sm text-slate-500">Web sitenizdeki projeleri buradan yönetebilirsiniz.</p>
          </div>
          <button
            onClick={() => handleOpenModal(null)}
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-semibold transition-all shadow-sm active:scale-95"
          >
            <Plus className="w-5 h-5" />
            Yeni Proje Ekle
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Status Alerts */}
        {statusMessage.text && (
          <div
            className={`mb-6 p-4 rounded-xl flex items-center gap-3 border animate-in fade-in slide-in-from-top-4 ${
              statusMessage.type === "success"
                ? "bg-emerald-50 border-emerald-100 text-emerald-700"
                : "bg-red-50 border-red-100 text-red-700"
            }`}
          >
            {statusMessage.type === "success" ? (
              <CheckCircle className="w-5 h-5" />
            ) : (
              <AlertCircle className="w-5 h-5" />
            )}
            <span className="font-medium">{statusMessage.text}</span>
          </div>
        )}

        {/* Tabs */}
        <div className="flex gap-2 p-1 bg-slate-200/50 rounded-xl w-fit mb-8">
          <button
            onClick={() => setActiveTab("ongoing")}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold transition-all ${
              activeTab === "ongoing"
                ? "bg-white text-blue-600 shadow-sm"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            <Clock className="w-4 h-4" />
            Devam Eden Projeler
          </button>

          <button
            onClick={() => setActiveTab("completed")}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold transition-all ${
              activeTab === "completed"
                ? "bg-white text-emerald-600 shadow-sm"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            <CheckCircle className="w-4 h-4" />
            Tamamlanan Projeler
          </button>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-blue-200 hover:shadow-xl transition-all group"
              >
                <div className="aspect-video relative bg-slate-100 overflow-hidden">
                  {project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src =
                          "https://via.placeholder.com/800x450?text=G%C3%B6rsel+Y%C3%BCklenemedi";
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-slate-400">
                      <ImageIcon className="w-12 h-12 mb-2" />
                      <span className="text-sm">Görsel Yok</span>
                    </div>
                  )}

                  <div className="absolute top-3 right-3 flex gap-2">
                    <button
                      onClick={() => handleOpenModal(project)}
                      className="p-2 bg-white/90 backdrop-blur hover:bg-white text-blue-600 rounded-full shadow-lg transition-all active:scale-90"
                      title="Düzenle"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(project.id)}
                      className="p-2 bg-white/90 backdrop-blur hover:bg-white text-red-600 rounded-full shadow-lg transition-all active:scale-90"
                      title="Sil"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="font-bold text-lg mb-2 line-clamp-1">{project.name}</h3>
                  <p className="text-slate-500 text-sm line-clamp-3 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {formatDate(project.createdAt)}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-20 text-center bg-white rounded-3xl border-2 border-dashed border-slate-200">
              <div className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plus className="w-10 h-10 text-slate-300" />
              </div>
              <p className="text-slate-500 font-medium">Henüz bu kategoride proje bulunmuyor.</p>
              <button
                onClick={() => handleOpenModal(null)}
                className="mt-4 text-blue-600 font-semibold hover:underline"
              >
                İlk projeyi ekleyin
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="px-6 py-4 border-b flex items-center justify-between bg-slate-50">
              <h2 className="text-xl font-bold text-slate-800">
                {editingProject ? "Projeyi Düzenle" : "Yeni Proje Ekle"}
              </h2>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-slate-200 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSave} className="p-6 space-y-5">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Proje Başlığı
                </label>
                <input
                  required
                  type="text"
                  placeholder="Örn: Modern Plaza İnşaatı"
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Görsel URL
                </label>
                <div className="relative">
                  <input
                    required
                    type="url"
                    placeholder="https://images.unsplash.com/photo-... (önerilir)"
                    className="w-full pl-11 pr-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                    value={formData.imageUrl}
                    onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                  />
                  <ImageIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                </div>
                <p className="mt-2 text-xs text-slate-500">
                  İpucu: Unsplash için <b>images.unsplash.com</b> linki kullanırsan görsel kesin çıkar.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Durum
                  </label>
                  <select
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all bg-white"
                    value={formData.type}
                    onChange={(e) =>
                      setFormData({ ...formData, type: e.target.value as ProjectType })
                    }
                  >
                    <option value="ongoing">Devam Eden</option>
                    <option value="completed">Tamamlanan</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Proje Açıklaması
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Proje detaylarını buraya yazın..."
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all resize-none"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>

              <div className="pt-4 flex gap-3">
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 px-6 py-3 rounded-xl border border-slate-200 font-semibold text-slate-600 hover:bg-slate-50 transition-all"
                >
                  İptal
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2"
                >
                  <Save className="w-5 h-5" />
                  {editingProject ? "Güncelle" : "Kaydet"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <footer className="max-w-6xl mx-auto px-4 py-12 text-center">
        <div className="h-px bg-slate-200 w-full mb-8"></div>
        <p className="text-slate-400 text-sm">
          Bu panel sadece referanslar sayfasını yönetmek için tasarlanmıştır.
          <br />
          Tüm veriler Firestore üzerinde depolanmaktadır.
        </p>
      </footer>
    </div>
  );
};

export default AdminPanel;
