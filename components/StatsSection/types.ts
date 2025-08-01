export interface StatsSectionProps {
  className?: string;
}

export interface StatItem {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

export interface CountUpAnimationProps {
  target: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}