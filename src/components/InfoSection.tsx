import { Card, CardContent } from '@/components/ui/card';
import { Clock, Users, Award, Truck, Heart, Ship } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const InfoSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation();
  const { ref: scheduleRef, isVisible: scheduleVisible } = useScrollAnimation();

  const features = [
    { icon: Truck, title: 'Traslados', desc: 'Al lugar de largada y servicio de bolsero' },
    { icon: Heart, title: 'Hidratación', desc: 'Mesa de frutas y bebida isotónica' },
    { icon: Users, title: 'Servicio Médico', desc: 'Y seguro sobre accidentes personales' },
    { icon: Ship, title: 'Embarcaciones', desc: 'De guía y acompañamiento grupal' },
    { icon: Clock, title: 'Clasificación', desc: 'Mediante sistema numérico' },
    { icon: Award, title: 'Premiación', desc: 'Medallas finisher y obsequios' },
  ];

  return (
    <section id="info" className="py-20">
      <div className="container mx-auto px-4">
        <div 
          ref={headerRef}
          className={`text-center mb-12 opacity-0 ${headerVisible ? 'animate-fade-in-up' : ''}`}
        >
          <span className="text-sm uppercase tracking-wider text-primary font-semibold">Información General</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-2">
            Todo lo que incluye
          </h2>
        </div>

        <div 
          ref={featuresRef}
          className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 opacity-0 ${featuresVisible ? 'animate-fade-in-up' : ''}`}
        >
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="bg-card hover:shadow-lg transition-shadow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Schedule */}
        <div 
          ref={scheduleRef}
          className={`bg-secondary text-secondary-foreground rounded-xl p-8 max-w-3xl mx-auto opacity-0 ${scheduleVisible ? 'animate-fade-in-up' : ''}`}
        >
          <h3 className="font-serif text-2xl font-bold mb-6 text-center">Cronograma</h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-20 text-right font-mono font-bold">07:00</div>
              <div className="w-3 h-3 rounded-full bg-primary" />
              <div>Acreditación en Balneario Municipal</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-20 text-right font-mono font-bold">09:00</div>
              <div className="w-3 h-3 rounded-full bg-primary" />
              <div>Charla técnica y traslado a largada</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-20 text-right font-mono font-bold">10:30</div>
              <div className="w-3 h-3 rounded-full bg-accent" />
              <div className="font-semibold">Largada 5 km</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-20 text-right font-mono font-bold">11:00</div>
              <div className="w-3 h-3 rounded-full bg-accent" />
              <div className="font-semibold">Largada 2.5 km</div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-20 text-right font-mono font-bold">13:00</div>
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div>Cierre de competencia y premiación</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
