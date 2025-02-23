import React, { useEffect, useRef } from 'react';

interface DynamicTypographyProps {
  baseSize: string; // Базовый размер шрифта (например, "16px")
  scale?: number;   // Коэффициент масштабирования (по умолчанию 1)
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
      // Рассчитываем адаптивный размер шрифта
      const fontSize = parseFloat(baseSize) * scale * (viewportWidth / 1440); // 1440px — базовая ширина
      root.style.setProperty('--dynamic-font-size', `${fontSize}px`);

      // Учитываем prefers-reduced-motion для доступности
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