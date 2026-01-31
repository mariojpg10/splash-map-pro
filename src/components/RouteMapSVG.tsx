import { useEffect, useRef, useState } from 'react';
import mapaImg from '@/assets/mapa-curupi.png';

const RouteMapSVG = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Trazado real del Islote Curupí - forma irregular de la isla
  // La isla tiene una forma alargada orientada de oeste a este
  // Coordenadas basadas en la imagen satelital real (viewBox 0 0 1000 450)
  
  // Ruta 5km: Circuito completo alrededor del islote Curupí
  // Salida desde la costa (Balneario Thompson), rodea la isla completa
  const route5km = `
    M 720 380
    C 680 360 640 340 600 330
    C 540 310 480 290 440 280
    C 380 265 340 260 310 265
    C 280 270 260 280 250 290
    C 235 305 230 320 240 335
    C 255 355 290 370 340 380
    C 400 392 480 398 560 395
    C 620 390 680 382 720 380
    Z
  `;

  // Ruta 2.5km: Solo la mitad sur del circuito (promocional)
  const route2_5km = `
    M 720 380
    C 680 385 620 390 560 395
    C 480 398 400 392 340 380
    C 290 370 260 358 250 345
  `;

  return (
    <div ref={containerRef} className="relative w-full max-w-4xl mx-auto">
      {/* Map background */}
      <img 
        src={mapaImg} 
        alt="Mapa Islote Curupí - Río Paraná" 
        className="w-full h-auto rounded-xl shadow-2xl border border-border"
      />
      
      {/* SVG overlay for route animation */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1000 450"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Glow filter for routes */}
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="glowStrong" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Full 5km route - Green accent */}
        <path
          d={route5km}
          fill="none"
          stroke="hsl(160 84% 45%)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="2000"
          strokeDashoffset={isVisible ? "0" : "2000"}
          filter="url(#glow)"
          style={{
            transition: 'stroke-dashoffset 3s ease-in-out',
          }}
        />
        
        {/* Short 2.5km route - Cyan primary */}
        <path
          d={route2_5km}
          fill="none"
          stroke="hsl(199 89% 55%)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="800"
          strokeDashoffset={isVisible ? "0" : "800"}
          filter="url(#glow)"
          style={{
            transition: 'stroke-dashoffset 2.5s ease-in-out 1s',
          }}
        />

        {/* Waypoint markers */}
        <g 
          className={`transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} 
          style={{ transitionDelay: '2.5s' }}
        >
          {/* Start/Finish point - Balneario Thompson */}
          <circle cx="720" cy="380" r="14" fill="hsl(160 84% 45%)" filter="url(#glowStrong)" />
          <circle cx="720" cy="380" r="8" fill="white" />
          <text x="720" y="384" textAnchor="middle" fill="hsl(160 84% 35%)" fontSize="10" fontWeight="bold">S</text>
          
          {/* Label Salida */}
          <rect x="730" y="360" width="70" height="24" rx="4" fill="hsl(160 84% 45%)" opacity="0.9"/>
          <text x="765" y="376" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">Salida</text>
          
          {/* Boya Norte */}
          <circle cx="250" cy="290" r="10" fill="hsl(199 89% 55%)" filter="url(#glow)" />
          <circle cx="250" cy="290" r="5" fill="white" />
          
          {/* Label Boya */}
          <rect x="205" y="260" width="50" height="20" rx="3" fill="hsl(199 89% 55%)" opacity="0.9"/>
          <text x="230" y="274" textAnchor="middle" fill="white" fontSize="9" fontWeight="500">Boya</text>
          
          {/* Llegada point - para 2.5km */}
          <circle cx="340" cy="380" r="12" fill="hsl(0 72% 55%)" filter="url(#glow)" />
          <circle cx="340" cy="380" r="6" fill="white" />
          
          {/* Label Llegada 2.5km */}
          <rect x="280" y="395" width="80" height="20" rx="3" fill="hsl(0 72% 55%)" opacity="0.9"/>
          <text x="320" y="409" textAnchor="middle" fill="white" fontSize="9" fontWeight="500">Llegada 2.5km</text>
        </g>

        {/* Animated swimmer icon on 5km route */}
        {isVisible && (
          <g filter="url(#glowStrong)">
            <circle r="8" fill="hsl(160 84% 50%)">
              <animateMotion
                dur="6s"
                repeatCount="indefinite"
                path={route5km}
              />
            </circle>
            <circle r="4" fill="white">
              <animateMotion
                dur="6s"
                repeatCount="indefinite"
                path={route5km}
              />
            </circle>
          </g>
        )}
      </svg>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-border">
        <h4 className="text-xs uppercase tracking-wider text-muted-foreground mb-3 font-semibold">Recorridos</h4>
        <div className="flex flex-col gap-3 text-sm">
          <div className="flex items-center gap-3">
            <div className="w-6 h-1.5 rounded-full" style={{ background: 'hsl(160 84% 45%)' }} />
            <div>
              <span className="text-card-foreground font-semibold">5 km</span>
              <span className="text-muted-foreground text-xs ml-2">Competitiva</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-1.5 rounded-full" style={{ background: 'hsl(199 89% 55%)' }} />
            <div>
              <span className="text-card-foreground font-semibold">2.5 km</span>
              <span className="text-muted-foreground text-xs ml-2">Promocional</span>
            </div>
          </div>
        </div>
      </div>

      {/* Location label */}
      <div className="absolute top-4 right-4 bg-card/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg border border-border">
        <span className="text-xs text-muted-foreground">📍 Islote Curupí · Río Paraná</span>
      </div>
    </div>
  );
};

export default RouteMapSVG;
