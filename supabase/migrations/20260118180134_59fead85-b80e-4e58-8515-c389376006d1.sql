-- Add SEO fields to sub_services table
ALTER TABLE public.sub_services
ADD COLUMN IF NOT EXISTS slug text UNIQUE,
ADD COLUMN IF NOT EXISTS long_description text,
ADD COLUMN IF NOT EXISTS seo_title text,
ADD COLUMN IF NOT EXISTS seo_description text,
ADD COLUMN IF NOT EXISTS seo_keywords text[],
ADD COLUMN IF NOT EXISTS service_areas text[] DEFAULT ARRAY['Beşiktaş', 'Şişli', 'Sarıyer', 'Beyoğlu', 'Kağıthane', 'Eyüpsultan', 'Fatih', 'Üsküdar'],
ADD COLUMN IF NOT EXISTS faqs jsonb DEFAULT '[]'::jsonb;

-- Create index for slug lookups
CREATE INDEX IF NOT EXISTS idx_sub_services_slug ON public.sub_services(slug);

-- Update existing sub_services with slugs based on their titles
UPDATE public.sub_services SET slug = 
  LOWER(
    REPLACE(
      REPLACE(
        REPLACE(
          REPLACE(
            REPLACE(
              REPLACE(
                REPLACE(
                  REPLACE(
                    REPLACE(
                      REPLACE(title, ' ', '-'),
                    'ı', 'i'),
                  'ğ', 'g'),
                'ü', 'u'),
              'ş', 's'),
            'ö', 'o'),
          'ç', 'c'),
        'İ', 'i'),
      'Ğ', 'g'),
    'Ü', 'u')
  )
WHERE slug IS NULL;