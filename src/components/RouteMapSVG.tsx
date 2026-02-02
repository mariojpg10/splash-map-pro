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

  // Ruta 5km: Circuito completo alrededor del islote Curupí
  // Salida desde Balneario Thompson (derecha), rodea la isla completa
  const route5km = `
    M 780 340
    C 740 320 680 300 620 285
    C 560 270 500 255 440 250
    C 380 245 320 248 280 260
    C 240 275 210 300 200 330
    C 190 360 200 390 230 410
    C 270 435 330 450 400 455
    C 480 460 560 455 640 445
    C 700 438 750 420 780 400
    C 795 385 800 365 795 350
    L 780 340
  `;

  // Ruta 2.5km: Media vuelta - solo la parte sur (promocional)
  // Desde la salida, sigue el borde sur hasta la llegada
  const route2_5km = `
    M 780 340
    C 795 355 800 375 790 395
    C 775 420 740 438 690 448
    C 620 460 540 465 460 460
    C 390 455 330 445 290 425
    L 250 400
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
        viewBox="0 0 1000 550"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Glow filter for routes */}
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id="glowStrong" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Short 2.5km route - Cyan primary - DIBUJADO PRIMERO (debajo) */}
        <path
          d={route2_5km}
          fill="none"
          stroke="hsl(199 89% 55%)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="1200"
          strokeDashoffset={isVisible ? "0" : "1200"}
          filter="url(#glow)"
          opacity="0.95"
          style={{
            transition: 'stroke-dashoffset 2.8s cubic-bezier(0.4, 0, 0.2, 1) 0.5s',
          }}
        />

        {/* Full 5km route - Green accent */}
        <path
          d={route5km}
          fill="none"
          stroke="hsl(160 84% 45%)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="2500"
          strokeDashoffset={isVisible ? "0" : "2500"}
          filter="url(#glow)"
          style={{
            transition: 'stroke-dashoffset 3.5s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        />

        {/* Waypoint markers */}
        <g 
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} 
          style={{ transitionDelay: '2s', transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)' }}
        >
          {/* Start/Finish point - Balneario Thompson */}
          <circle cx="780" cy="340" r="14" fill="hsl(160 84% 45%)" filter="url(#glowStrong)" />
          <circle cx="780" cy="340" r="8" fill="white" />
          <text x="780" y="344" textAnchor="middle" fill="hsl(160 84% 35%)" fontSize="10" fontWeight="bold">S</text>
          
          {/* Label Salida */}
          <rect x="800" y="320" width="70" height="24" rx="4" fill="hsl(160 84% 45%)" opacity="0.95"/>
          <text x="835" y="336" textAnchor="middle" fill="white" fontSize="11" fontWeight="600">Salida</text>
          
          {/* Boya Norte - punto de giro 5km */}
          <circle cx="200" cy="330" r="10" fill="hsl(160 84% 50%)" filter="url(#glow)" />
          <circle cx="200" cy="330" r="5" fill="white" />
          
          {/* Label Boya Norte */}
          <rect x="140" y="295" width="60" height="20" rx="3" fill="hsl(160 84% 45%)" opacity="0.9"/>
          <text x="170" y="309" textAnchor="middle" fill="white" fontSize="9" fontWeight="500">Boya N</text>
          
          {/* Llegada 2.5km - punto final ruta corta */}
          <circle cx="250" cy="400" r="12" fill="hsl(199 89% 55%)" filter="url(#glow)" />
          <circle cx="250" cy="400" r="6" fill="white" />
          
          {/* Label Llegada 2.5km */}
          <rect x="160" y="410" width="85" height="22" rx="3" fill="hsl(199 89% 55%)" opacity="0.95"/>
          <text x="202" y="425" textAnchor="middle" fill="white" fontSize="10" fontWeight="500">Llegada 2.5km</text>
          
          {/* Meta 5km - mismo punto de salida */}
          <rect x="800" y="355" width="70" height="20" rx="3" fill="hsl(160 84% 40%)" opacity="0.9"/>
          <text x="835" y="369" textAnchor="middle" fill="white" fontSize="9" fontWeight="500">Meta 5km</text>
        </g>

        {/* Animated swimmer icon on 5km route */}
        {isVisible && (
          <g filter="url(#glowStrong)">
            <circle r="7" fill="hsl(160 84% 50%)">
              <animateMotion
                dur="8s"
                repeatCount="indefinite"
                path={route5km}
                calcMode="spline"
                keySplines="0.4 0 0.2 1"
                keyTimes="0;1"
              />
            </circle>
            <circle r="3.5" fill="white">
              <animateMotion
                dur="8s"
                repeatCount="indefinite"
                path={route5km}
                calcMode="spline"
                keySplines="0.4 0 0.2 1"
                keyTimes="0;1"
              />
            </circle>
          </g>
        )}
        
        {/* Animated swimmer icon on 2.5km route */}
        {isVisible && (
          <g filter="url(#glow)">
            <circle r="6" fill="hsl(199 89% 60%)">
              <animateMotion
                dur="5s"
                repeatCount="indefinite"
                path={route2_5km}
                calcMode="spline"
                keySplines="0.4 0 0.2 1"
                keyTimes="0;1"
              />
            </circle>
            <circle r="3" fill="white">
              <animateMotion
                dur="5s"
                repeatCount="indefinite"
                path={route2_5km}
                calcMode="spline"
                keySplines="0.4 0 0.2 1"
                keyTimes="0;1"
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
