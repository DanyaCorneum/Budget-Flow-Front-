import React, { useState } from 'react';
import styles from './PieDiagram.module.scss';

interface PieSegment {
  id: string;
  percentage: number;
  color: string;
  label: string;
}

interface PieDiagramProps {
  segments: PieSegment[];
}

const PieDiagram: React.FC<PieDiagramProps> = ({ segments }) => {
  const [hoveredSegment, setHoveredSegment] = useState<string | null>(null);

  // Рассчитываем начальные углы для каждого сегмента
  const totalPercentage = segments.reduce((sum, segment) => sum + segment.percentage, 0);
  let currentAngle = -90; // Начинаем с верхней точки

  const segmentPaths = segments.map(segment => {
    const angle = (segment.percentage / totalPercentage) * 360;
    const startAngle = currentAngle;
    const endAngle = currentAngle + angle;

    // Преобразуем углы в радианы
    const startRad = (startAngle * Math.PI) / 180;
    const endRad = (endAngle * Math.PI) / 180;

    // Рассчитываем координаты точек для внешней дуги (масштабируем для нового размера)
    const centerX = 180; // Центр X для нового размера (360/2)
    const centerY = 180; // Центр Y для нового размера (360/2)
    const outerRadius = 144; // Увеличенный внешний радиус для нового размера (72*2)
    const outerX1 = centerX + outerRadius * Math.cos(startRad);
    const outerY1 = centerY + outerRadius * Math.sin(startRad);
    const outerX2 = centerX + outerRadius * Math.cos(endRad);
    const outerY2 = centerY + outerRadius * Math.sin(endRad);

    // Рассчитываем координаты точек для внутренней дуги
    const innerRadius = 72; // Увеличенный внутренний радиус для нового размера (36*2)
    const innerX1 = centerX + innerRadius * Math.cos(endRad);
    const innerY1 = centerY + innerRadius * Math.sin(endRad);
    const innerX2 = centerX + innerRadius * Math.cos(startRad);
    const innerY2 = centerY + innerRadius * Math.sin(startRad);

    // Определяем флаг дуги (если угол > 180°)
    const largeArcFlag = angle > 180 ? 1 : 0;

    const pathData = [
      `M ${outerX1} ${outerY1}`, // Начинаем с внешней точки начала дуги
      `A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${outerX2} ${outerY2}`, // Рисуем внешнюю дугу
      `L ${innerX1} ${innerY1}`, // Линия к внутренней точке конца дуги
      `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${innerX2} ${innerY2}`, // Рисуем внутреннюю дугу
      'Z' // Замыкаем путь
    ].join(' ');

    currentAngle = endAngle;

    return {
      ...segment,
      pathData,
      startAngle,
      endAngle
    };
  });

  const hoveredSegmentData = segments.find(s => s.id === hoveredSegment);

  return (
    <div className={styles.container}>
      <svg
        width="360"
        height="360"
        viewBox="0 0 360 360"
        className={styles.pieChart}
      >
        {/* Фоновый круг */}
        <circle
          cx="180"
          cy="180"
          r="152"
          transform="rotate(90 180 180)"
          stroke="#D9D9D9"
          strokeWidth="18"
          fill="none"
        />

        {/* Сегменты диаграммы */}
        {segmentPaths.map(segment => {
          const isHovered = hoveredSegment === segment.id;
          const outerRadius = isHovered ? 152 : 144; // Увеличиваем внешний радиус при наведении
          const innerRadius = 72; // Внутренний радиус остается постоянным

          // Пересчитываем координаты для увеличенного сегмента
          const startRad = (segment.startAngle * Math.PI) / 180;
          const endRad = (segment.endAngle * Math.PI) / 180;

          const centerX = 180; // Центр X для нового размера
          const centerY = 180; // Центр Y для нового размера
          
          const outerX1 = centerX + outerRadius * Math.cos(startRad);
          const outerY1 = centerY + outerRadius * Math.sin(startRad);
          const outerX2 = centerX + outerRadius * Math.cos(endRad);
          const outerY2 = centerY + outerRadius * Math.sin(endRad);

          const innerX1 = centerX + innerRadius * Math.cos(endRad);
          const innerY1 = centerY + innerRadius * Math.sin(endRad);
          const innerX2 = centerX + innerRadius * Math.cos(startRad);
          const innerY2 = centerY + innerRadius * Math.sin(startRad);

          const angle = segment.endAngle - segment.startAngle;
          const largeArcFlag = angle > 180 ? 1 : 0;

          const pathData = [
            `M ${outerX1} ${outerY1}`,
            `A ${outerRadius} ${outerRadius} 0 ${largeArcFlag} 1 ${outerX2} ${outerY2}`,
            `L ${innerX1} ${innerY1}`,
            `A ${innerRadius} ${innerRadius} 0 ${largeArcFlag} 0 ${innerX2} ${innerY2}`,
            'Z'
          ].join(' ');

          return (
            <path
              key={segment.id}
              d={isHovered ? pathData : segment.pathData}
              fill={segment.color}
              onMouseEnter={() => setHoveredSegment(segment.id)}
              onMouseLeave={() => setHoveredSegment(null)}
              className={styles.segment}
            />
          );
        })}

        {/* Центральный круг для создания эффекта пончика */}
        <circle
          cx="180"
          cy="180"
          r="64"
          fill="white"
        />
      </svg>

      {/* Зарезервированное место для информации о сегменте */}
      <div className={styles.infoPlaceholder}>
        {hoveredSegmentData && (
          <div className={styles.infoPanel}>
            <h3>{hoveredSegmentData.label}</h3>
            <p>{Math.round(hoveredSegmentData.percentage)}%</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PieDiagram;