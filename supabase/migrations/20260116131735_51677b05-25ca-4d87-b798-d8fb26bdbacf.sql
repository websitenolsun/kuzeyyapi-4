-- Create services table for main service categories
CREATE TABLE public.services (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  description TEXT,
  icon_name TEXT,
  hero_image_url TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create sub_services table for detailed service offerings
CREATE TABLE public.sub_services (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  service_id UUID NOT NULL REFERENCES public.services(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon_name TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create company_values table for core values on About page
CREATE TABLE public.company_values (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon_name TEXT,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security on all tables
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sub_services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.company_values ENABLE ROW LEVEL SECURITY;

-- Create public read policies (this is public content, no auth needed for viewing)
CREATE POLICY "Services are publicly readable" 
ON public.services 
FOR SELECT 
USING (true);

CREATE POLICY "Sub services are publicly readable" 
ON public.sub_services 
FOR SELECT 
USING (true);

CREATE POLICY "Company values are publicly readable" 
ON public.company_values 
FOR SELECT 
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_services_updated_at
BEFORE UPDATE ON public.services
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_sub_services_updated_at
BEFORE UPDATE ON public.sub_services
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_company_values_updated_at
BEFORE UPDATE ON public.company_values
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert initial company values data
INSERT INTO public.company_values (title, description, icon_name, display_order) VALUES
('Kalite', 'Standartlara ve mühendislik esaslarına uygun, uygulanabilir ve sürdürülebilir çözümler üretiriz. Kaliteli malzeme ve uzman işçilikle projelerimizi titizlikle hayata geçiririz.', 'Award', 1),
('Zamanında Teslim', 'Zamanın değerinin bilinciyle, kaynak ve iş planlamasını doğru yapar; kalite ve projeden ödün vermeden işlerimizi taahhüt edilen sürede teslim ederiz.', 'Clock', 2),
('Uzman Kadro', 'Alanında eğitimli ve deneyimli mühendis, tekniker ve usta kadromuzla her türlü mekanik ve mühendislik ihtiyacına çözüm sunarız.', 'Users', 3),
('Güvenilir ve Güvenli Hizmet', 'Tüm uygulamalarımızı iş sağlığı ve güvenliği standartlarına tam uyum çerçevesinde yürütür, güven inşa ederiz.', 'ShieldCheck', 4);

-- Insert services
INSERT INTO public.services (slug, title, description, icon_name, display_order) VALUES
('mekanik', 'Mekanik Tesisat', 'Endüstriyel ve konut tipi mekanik sistemlerde uçtan uca mühendislik çözümleri', 'Cog', 1),
('mimari', 'Mimari & Dekorasyon', 'Estetikle fonksiyonelliği buluşturan bütüncül mimari ve iç mekan tasarım hizmetleri', 'Building2', 2),
('elektrik', 'Elektrik Sistemleri', 'Güvenli ve modern elektrik altyapısı ile akıllı ev çözümleri', 'Zap', 3),
('dogalgaz', 'Doğalgaz Sistemleri', 'Yönetmeliklere uygun, güvenli ve verimli doğalgaz proje ve uygulamaları', 'Flame', 4);

-- Insert sub_services for Mekanik
INSERT INTO public.sub_services (service_id, title, description, icon_name, display_order) 
SELECT id, 'Isı Pompası Sistemleri', 'Merkezi sistem, kombi ve yerden ısıtma sistemlerinde yüksek verimli, enerji tasarruflu ve uzun ömürlü projelendirme ile kurulum hizmetleri sunuyoruz.', 'Thermometer', 1 
FROM public.services WHERE slug = 'mekanik';

INSERT INTO public.sub_services (service_id, title, description, icon_name, display_order) 
SELECT id, 'Soğutma & HVAC', 'Enerji verimliliği yüksek split klima, VRF/VRV ve merkezi soğutma sistemleri ile yaşam alanlarınızda ideal iklimlendirme konforu sağlıyoruz.', 'Wind', 2 
FROM public.services WHERE slug = 'mekanik';

INSERT INTO public.sub_services (service_id, title, description, icon_name, display_order) 
SELECT id, 'Havalandırma Sistemleri', 'Endüstriyel sistemlerden ofislere kadar taze hava sirkülasyonu ve duman tahliye sistemleri ile sağlıklı, güvenli ve yönetmeliklere uygun çözümler.', 'AirVent', 3 
FROM public.services WHERE slug = 'mekanik';

INSERT INTO public.sub_services (service_id, title, description, icon_name, display_order) 
SELECT id, 'Sıhhi Tesisat', 'Temiz su, atık su ve yağmur suyu sistemlerinde modern mühendislik standartlarına uygun altyapı ve kurulum hizmeti.', 'Droplets', 4 
FROM public.services WHERE slug = 'mekanik';

INSERT INTO public.sub_services (service_id, title, description, icon_name, display_order) 
SELECT id, 'Yangın Tesisatı', 'Uluslararası standartlarda (NFPA) sprinkler, hidrant ve yangın algılama sistemleri ile yapınızı ve hayatınızı güvence altına alıyoruz.', 'Flame', 5 
FROM public.services WHERE slug = 'mekanik';

INSERT INTO public.sub_services (service_id, title, description, icon_name, display_order) 
SELECT id, 'Kazan Dairesi & Isı Merkezleri', 'Yüksek kapasiteli enerji merkezlerinin kurulumunda, yakıt verimliliğini maksimize eden modern kazan teknolojileri ve akıllı kontrol sistemleri.', 'Factory', 6 
FROM public.services WHERE slug = 'mekanik';

-- Insert sub_services for Mimari
INSERT INTO public.sub_services (service_id, title, description, icon_name, display_order) 
SELECT id, 'Mimari Tasarım', 'Estetikle fonksiyonelliği buluşturan, modern trendlere uygun, ruhsat ve uygulama projelerini kapsayan bütüncül mimari çözümler.', 'Pencil', 1 
FROM public.services WHERE slug = 'mimari';

INSERT INTO public.sub_services (service_id, title, description, icon_name, display_order) 
SELECT id, 'İç Mekan Tasarımı', 'Kişiye özel konsept tasarımlar, ergonomik mobilya seçimleri ve modern dekorasyon dokunuşları ile yaşam alanlarınıza değer katıyoruz.', 'Home', 2 
FROM public.services WHERE slug = 'mimari';

INSERT INTO public.sub_services (service_id, title, description, icon_name, display_order) 
SELECT id, 'Cam & Alüminyum Sistemleri', 'Modern cephe sistemleri, alüminyum doğrama ve ısı cam çözümleriyle estetik görünüm ve yüksek ısı yalıtımı.', 'Layers', 3 
FROM public.services WHERE slug = 'mimari';

-- Insert sub_services for Elektrik
INSERT INTO public.sub_services (service_id, title, description, icon_name, display_order) 
SELECT id, 'Aydınlatma Sistemleri', 'Fonksiyonel ve dekoratif LED aydınlatma çözümleri.', 'Lightbulb', 1 
FROM public.services WHERE slug = 'elektrik';

INSERT INTO public.sub_services (service_id, title, description, icon_name, display_order) 
SELECT id, 'Akıllı Ev Sistemleri', 'Aydınlatma, perde ve iklimlendirme için akıllı çözümler.', 'Smartphone', 2 
FROM public.services WHERE slug = 'elektrik';