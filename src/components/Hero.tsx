import { Calendar, MapPin, Waves } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Countdown from '@/components/Countdown';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Dark/Light themed gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-primary/5">
        {/* Subtle water pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <pattern id="waves" x="0" y="0" width="120" height="24" patternUnits="userSpaceOnUse">
                <path 
                  d="M0 12 Q30 0 60 12 T120 12" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="1"
                  className="text-primary"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#waves)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Event badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-2 mb-6">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">1 de Marzo 2026 · Atlético Echagüe Club</span>
          </div>

          {/* Title */}
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-2">
            Vuelta al
          </h1>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6">
            <span className="text-muted-foreground">Islote </span>
            <span className="text-primary">Curupí</span>
            <span className="text-accent block">2026</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
            Desafiando al Gigante de Agua. Un evento organizado por la Subcomisión de Nadadores Máster del Atlético Echagüe Club.
          </p>

          {/* Event details */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 bg-card border border-border rounded-xl px-4 py-3 shadow-sm">
              <MapPin className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">Río Paraná, Entre Ríos</span>
            </div>
            <div className="flex items-center gap-2 bg-card border border-border rounded-xl px-4 py-3 shadow-sm">
              <Waves className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-foreground">5 km y 2.5 km</span>
            </div>
          </div>

          {/* Countdown */}
          <div className="mb-8">
            <p className="text-sm text-muted-foreground mb-3 text-center md:text-left">Faltan:</p>
            <Countdown />
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <Button size="lg" asChild className="shadow-lg">
              <a href="#inscripcion">Inscribirme ahora</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#recorrido">Ver recorrido</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
