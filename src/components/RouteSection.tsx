import RouteMapSVG from './RouteMapSVG';
import { Card, CardContent } from '@/components/ui/card';
import { Timer, Users, Droplets } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const RouteSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();
  const { ref: mapRef, isVisible: mapVisible } = useScrollAnimation();

  return (
    <section id="recorrido" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div 
          ref={headerRef}
          className={`text-center mb-12 opacity-0 ${headerVisible ? 'animate-fade-in-up' : ''}`}
        >
          <span className="text-sm uppercase tracking-wider text-primary font-semibold">Recorrido</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-2">
            Dos distancias, un desafío
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Largada en Balneario Thompson, llegada en Balneario Municipal. 
            Rodeando la reserva natural del Islote Curupí.
          </p>
        </div>

        {/* Route cards */}
        <div 
          ref={cardsRef}
          className={`grid md:grid-cols-2 gap-6 mb-12 opacity-0 ${cardsVisible ? 'animate-fade-in-up' : ''}`}
          style={{ animationDelay: '0.1s' }}
        >
          <Card className="bg-card border-accent/30 hover:border-accent transition-colors">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-sm text-muted-foreground">Prueba Principal</span>
                  <h3 className="text-4xl font-bold text-accent">5 km</h3>
                </div>
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Timer className="w-6 h-6 text-accent" />
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Modalidad circuito. Recorrido completo alrededor del islote.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">Reserva natural</span>
                <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">Aguas arriba</span>
                <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">Técnica y potencia</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card border-primary/30 hover:border-primary transition-colors">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-sm text-muted-foreground">Prueba Promocional</span>
                  <h3 className="text-4xl font-bold text-primary">2.5 km</h3>
                </div>
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                Modalidad punto a punto. Ideal para aficionados.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Aficionados</span>
                <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full">Corriente a favor</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Animated map */}
        <div 
          ref={mapRef}
          className={`mb-8 opacity-0 ${mapVisible ? 'animate-scale-in' : ''}`}
        >
          <RouteMapSVG />
        </div>

        {/* Safety note */}
        <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-4 flex items-start gap-3 max-w-2xl mx-auto">
          <Droplets className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-foreground">Obligatorio el uso de Torpedo</p>
            <p className="text-sm text-muted-foreground">
              O similar elemento de seguridad individual durante todo el desarrollo de la competencia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RouteSection;
