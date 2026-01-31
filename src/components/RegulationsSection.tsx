import { useState } from 'react';
import { ChevronDown, Shield, Clock, Leaf } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const RegulationsSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const highlights = [
    {
      icon: Shield,
      title: 'Seguridad',
      desc: 'ES OBLIGATORIO el uso de Torpedo, Boya de Flotación o elemento similar de seguridad personal.',
    },
    {
      icon: Clock,
      title: 'Tiempo límite',
      desc: 'Tiempo máximo de 2 horas de permanencia en el agua. A las 13:00 hs finaliza la competencia.',
    },
    {
      icon: Leaf,
      title: 'Protocolo ambiental',
      desc: 'Prohibido el descarte de residuos al río. Descalificación inmediata por incumplimiento.',
    },
  ];

  const categories = [
    'Juvenil: 16 a 20 años',
    'Master A: 21 a 25 años',
    'Master B: 26 a 30 años',
    'Master C: 31 a 35 años',
    'Master D: 36 a 40 años',
    'Master E: 41 a 45 años',
    'Master F: 46 a 50 años',
    'Master G: 51 a 55 años',
    'Master H: 56 a 60 años',
    'Master I: 61 a 65 años',
    'Master J: 66 a 70 años',
    'Master K: 71 años y más',
  ];

  return (
    <section id="reglamento" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm uppercase tracking-wider text-primary font-semibold">Reglamento</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-2">
            Reglas del evento
          </h2>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {highlights.map((item) => (
            <Card key={item.title} className="bg-card">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Categories */}
        <div className="bg-card rounded-xl p-8 max-w-4xl mx-auto mb-8">
          <h3 className="font-serif text-2xl font-bold text-foreground mb-6">Categorías</h3>
          <p className="text-muted-foreground mb-4">Para ambos sexos (edad al 31/12/2026):</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {categories.map((cat) => (
              <div key={cat} className="bg-muted/50 rounded-lg px-4 py-2 text-sm text-foreground">
                {cat}
              </div>
            ))}
          </div>
        </div>

        {/* Expandable full regulations */}
        <div className="max-w-4xl mx-auto">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full bg-card rounded-xl p-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
          >
            <span className="font-semibold text-foreground">Ver reglamento completo</span>
            <ChevronDown className={`w-5 h-5 text-primary transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
          </button>
          
          {isExpanded && (
            <div className="bg-card rounded-b-xl p-6 border-t border-border prose prose-sm max-w-none">
              <h4 className="font-semibold text-foreground">Organización y Marco Institucional</h4>
              <p className="text-muted-foreground text-sm">
                La competencia es organizada por el Atlético Echagüe Club, a través de su Subcomisión de Natación Master, 
                honrando el legado de la natación del club y promoviendo el deporte en el Río Paraná.
              </p>

              <h4 className="font-semibold text-foreground mt-4">Inscripción</h4>
              <ul className="text-muted-foreground text-sm space-y-1">
                <li>Inscripciones exclusivamente anticipadas hasta el 25 de febrero de 2026</li>
                <li>Cupo máximo: 150 nadadores para ambas pruebas</li>
                <li>Presentar certificado médico con máximo 60 días de antigüedad</li>
              </ul>

              <h4 className="font-semibold text-foreground mt-4">Circuito y Fiscalización</h4>
              <p className="text-muted-foreground text-sm">
                Sentido antihorario. Boya 1 (solo 5km) en extremo sur del islote - giro a hombro derecho. 
                Boya 2 (ambas distancias) frente al Mirador de Puerto Sánchez - giro a hombro derecho.
              </p>

              <h4 className="font-semibold text-foreground mt-4">Premiación</h4>
              <ul className="text-muted-foreground text-sm space-y-1">
                <li>5 km: Premios a los primeros de la general y 3 primeros por categoría</li>
                <li>2.5 km: Premios a las 3 primeras posiciones por categoría</li>
                <li>Medallas Finisher para todos los participantes</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default RegulationsSection;
