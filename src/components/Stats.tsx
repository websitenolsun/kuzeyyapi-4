import { useState, useEffect, useRef, useCallback } from "react";
import { Clock, Building2, CheckCircle, Settings } from "lucide-react";

interface StatData {
  icon: React.ElementType;
  numericValue: number;
  prefix?: string;
  suffix: string;
  label: string;
  decimals?: number;
}

const stats: StatData[] = [
  {
    icon: Clock,
    numericValue: 15,
    suffix: "+",
    label: "Yıllık Sektörel Deneyim",
  },
  {
    icon: Building2,
    numericValue: 1.2,
    suffix: " Milyon m²",
    label: "Mekanik Uygulama",
    decimals: 1,
  },
  {
    icon: CheckCircle,
    numericValue: 450,
    suffix: "+",
    label: "Başarıyla Teslim Edilen Proje",
  },
  {
    icon: Settings,
    numericValue: 100,
    suffix: "%",
    label: "Mühendislik Hassasiyeti",
  },
];

const AnimatedNumber = ({ 
  value, 
  decimals = 0, 
  duration = 2500, 
  isVisible 
}: { 
  value: number; 
  decimals?: number; 
  duration?: number; 
  isVisible: boolean;
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);

  const animate = useCallback((timestamp: number) => {
    if (!startTimeRef.current) startTimeRef.current = timestamp;
    
    const elapsed = timestamp - startTimeRef.current;
    const progress = Math.min(elapsed / duration, 1);
    
    // Smooth easing: easeOutExpo for natural deceleration
    const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
    
    const current = eased * value;
    setDisplayValue(current);

    if (progress < 1) {
      animationRef.current = requestAnimationFrame(animate);
    }
  }, [value, duration]);

  useEffect(() => {
    if (!isVisible) {
      setDisplayValue(0);
      return;
    }

    startTimeRef.current = null;
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible, animate]);

  const formattedValue = decimals > 0 
    ? displayValue.toFixed(decimals) 
    : Math.round(displayValue).toString();

  return <>{formattedValue}</>;
};

const StatItem = ({ stat, index, isVisible }: { stat: StatData; index: number; isVisible: boolean }) => {
  const Icon = stat.icon;

  return (
    <div
      className="text-center group"
      style={{ 
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity 0.6s ease-out ${index * 0.15}s, transform 0.6s ease-out ${index * 0.15}s`
      }}
    >
      {/* Icon with sophisticated glow */}
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 border border-accent/25 mb-5 group-hover:border-accent/50 transition-all duration-300">
        <Icon className="w-7 h-7 text-accent glow-gold" />
      </div>
      
      {/* Number */}
      <div className="flex items-baseline justify-center">
        <span className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-accent tabular-nums tracking-tight">
          {stat.prefix}
          <AnimatedNumber 
            value={stat.numericValue} 
            decimals={stat.decimals} 
            isVisible={isVisible}
            duration={2500}
          />
          {stat.suffix}
        </span>
      </div>
      
      {/* Label - Serif font for elegance */}
      <p className="mt-3 text-sm md:text-base font-serif text-primary-foreground/70 italic">
        {stat.label}
      </p>
    </div>
  );
};

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 overflow-hidden">
      {/* Dark background with blueprint pattern */}
      <div className="absolute inset-0 bg-slate-dark" />
      <div className="absolute inset-0 bg-blueprint opacity-60" />
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-dark/50 via-transparent to-slate-dark/50" />
      
      {/* Decorative accent lines */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-40 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-40 h-px bg-gradient-to-l from-transparent via-accent/40 to-transparent" />
      
      {/* Corner accents */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-accent/20" />
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-accent/20" />
      <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-accent/20" />
      <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-accent/20" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-accent font-display text-sm uppercase tracking-[0.25em] mb-3">
            Rakamlarla Biz
          </p>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground">
            Güven ve Deneyimin Kanıtı
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <StatItem key={index} stat={stat} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;