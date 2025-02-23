import React, { useEffect, useRef } from 'react';

interface DynamicTypographyProps {
  baseSize: string;
  scale?: number;
  children: React.ReactNode;
}

export const DynamicTypography: React.FC<DynamicTypographyProps> = ({
  baseSize,
  scale = 1,
  children,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateTypography = () => {
      if (!ref.current) return;

      const root = document.documentElement;
      const viewportWidth = window.innerWidth;
      const fontSize = parseFloat(baseSize) * scale * (viewportWidth / 1440);
      root.style.setProperty('--dynamic-font-size', `${fontSize}px`);
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      ref.current.style.transition = reduceMotion ? 'none' : 'font-size 0.2s ease';
    };

    updateTypography();
    window.addEventListener('resize', updateTypography);

    return () => window.removeEventListener('resize', updateTypography);
  }, [baseSize, scale]);

  return (
    <div
      ref={ref}
      style={{
        fontSize: 'var(--dynamic-font-size)',
        lineHeight: '1.5',
      }}
    >
      {children}
    </div>
  );
};