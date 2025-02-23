'use strict';

var React = require('react');

const DynamicTypography = ({ baseSize, scale = 1, children, }) => {
    const ref = React.useRef(null);
    React.useEffect(() => {
        const updateTypography = () => {
            if (!ref.current)
                return;
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
    return (React.createElement("div", { ref: ref, style: {
            fontSize: 'var(--dynamic-font-size)',
            lineHeight: '1.5',
        } }, children));
};

exports.DynamicTypography = DynamicTypography;
