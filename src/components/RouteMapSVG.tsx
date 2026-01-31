import { useEffect, useRef, useState } from 'react';
import mapaImg from '@/assets/mapa-curupi.png';

interface RouteMapSVGProps {
  showFullRoute?: boolean;
}

const RouteMapSVG = ({ showFullRoute = true }: RouteMapSVGProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // SVG path coordinates for the route around the island
  const fullRoutePath = "M 180 380 Q 120 340 100 280 Q 80 200 120 140 Q 160 80 240 60 Q 320 50 400 70 Q 480 100 520 160 Q 560 240 540 320 Q 520 400 460 440 Q 400 470 320 460 Q 260 450 220 420";
  const shortRoutePath = "M 320 460 Q 260 450 220 420 L 180 380";
  
  return (
    <div ref={containerRef} className="relative w-full max-w-3xl mx-auto">
      {/* Map background */}
      <img 
        src={mapaImg} 
        alt="Mapa Islote Curupí" 
        className="w-full h-auto rounded-lg shadow-xl"
      />
      
      {/* SVG overlay for route animation */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 600 520"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Full 5km route */}
        <path
          d={fullRoutePath}
          fill="none"
          stroke="hsl(var(--accent))"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="1200"
          strokeDashoffset={isVisible ? "0" : "1200"}
          style={{
            transition: 'stroke-dashoffset 3s ease-in-out',
          }}
        />
        
        {/* Short 2.5km route highlight */}
        <path
          d={shortRoutePath}
          fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="300"
          strokeDashoffset={isVisible ? "0" : "300"}
          style={{
            transition: 'stroke-dashoffset 2s ease-in-out 1.5s',
          }}
        />

        {/* Waypoint markers */}
        <g className={`transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '2s' }}>
          {/* Start point */}
          <circle cx="180" cy="380" r="12" fill="hsl(var(--accent))" />
          <text x="180" y="385" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">S</text>
          <text x="180" y="410" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="600">Salida</text>
          
          {/* Buoy 1 */}
          <circle cx="120" cy="140" r="10" fill="hsl(var(--primary))" />
          <text x="120" y="144" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">1</text>
          <text x="120" y="125" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10">Boya 1</text>
          
          {/* Buoy 2 */}
          <circle cx="520" cy="160" r="10" fill="hsl(var(--primary))" />
          <text x="520" y="164" textAnchor="middle" fill="white" fontSize="9" fontWeight="bold">2</text>
          <text x="520" y="145" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="10">Boya 2</text>
          
          {/* Finish point */}
          <circle cx="320" cy="460" r="12" fill="hsl(var(--destructive))" />
          <text x="320" y="465" textAnchor="middle" fill="white" fontSize="10" fontWeight="bold">F</text>
          <text x="320" y="490" textAnchor="middle" fill="hsl(var(--foreground))" fontSize="11" fontWeight="600">Llegada</text>
        </g>

        {/* Animated swimmer icon */}
        {isVisible && (
          <g>
            <circle r="8" fill="hsl(var(--primary))">
              <animateMotion
                dur="4s"
                repeatCount="indefinite"
                path={fullRoutePath}
              />
            </circle>
          </g>
        )}
      </svg>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-card/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
        <div className="flex flex-col gap-2 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-1 bg-accent rounded" />
            <span className="text-card-foreground font-medium">5 km - Competitiva</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-1 bg-primary rounded" />
            <span className="text-card-foreground font-medium">2.5 km - Promocional</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RouteMapSVG;
