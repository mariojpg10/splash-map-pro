import { Target, Trophy } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ClubSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div 
            ref={headerRef}
            className={`text-center mb-12 opacity-0 ${headerVisible ? 'animate-fade-in-up' : ''}`}
          >
            <span className="text-sm uppercase tracking-wider text-primary font-semibold">Organización</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-2">
              Atlético Echagüe Club
            </h2>
          </div>

          <div 
            ref={contentRef}
            className={`grid md:grid-cols-2 gap-8 opacity-0 ${contentVisible ? 'animate-fade-in-up' : ''}`}
          >
            <div>
              <p className="text-lg leading-relaxed mb-6 opacity-90">
                Fundado en 1932, el AEC es un pilar del deporte en la región. Nuestra Subcomisión 
                de Nadadores Máster cuenta con nadadores experimentados en circuitos de aguas 
                abiertas nacionales e internacionales.
              </p>
              <p className="opacity-80">
                Garantizando una visión técnica profesional de la competencia.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Visión de Futuro</h3>
                  <p className="text-sm opacity-80">
                    Consolidar a Paraná en el mapa de las aguas abiertas con la homologación federal.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Circuito Nacional</h3>
                  <p className="text-sm opacity-80">
                    Integrar el calendario de CADDA, atrayendo a la élite de la natación argentina.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClubSection;
