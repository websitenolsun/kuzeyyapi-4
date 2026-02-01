import { 
  Award, Clock, Users, ShieldCheck, Thermometer, Wind, AirVent, Droplets, 
  Flame, Factory, Pencil, Home, Layers, Lightbulb, Smartphone, Zap, 
  Building2, Cog, Circle
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';

// Map of icon names to components
const iconMap: Record<string, LucideIcon> = {
  Award,
  Clock,
  Users,
  ShieldCheck,
  Thermometer,
  Wind,
  AirVent,
  Droplets,
  Flame,
  Factory,
  Pencil,
  Home,
  Layers,
  Lightbulb,
  Smartphone,
  Zap,
  Building2,
  Cog,
  Circle,
};

interface DynamicIconProps {
  name: string | null;
  size?: number;
  strokeWidth?: number;
  className?: string;
}

const DynamicIcon = ({ name, size = 32, strokeWidth = 1.5, className = '' }: DynamicIconProps) => {
  if (!name) return null;
  
  const IconComponent = iconMap[name] || Circle;
  
  return <IconComponent size={size} strokeWidth={strokeWidth} className={className} />;
};

export default DynamicIcon;