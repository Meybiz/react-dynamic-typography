import React, { useRef, useEffect } from 'react';

const DynamicTypography = ({ baseSize, scale = 1, children, }) => {
    const ref = useRef(null);
    useEffect(() => {
        const updateTypography = () => {
            if (!ref.current)
                return;
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
    return (React.createElement("div", { ref: ref, style: {
            fontSize: 'var(--dynamic-font-size)',
            lineHeight: '1.5',
        } }, children));
};

export { DynamicTypography };
