import { useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const sponsors = [
  { name: 'Atlético Echagüe Club', shortName: 'AEC' },
  { name: 'Máster', shortName: 'MÁSTER' },
  { name: 'Systemium', shortName: 'SYSTEMIUM' },
  { name: 'ER Deportes', shortName: 'ER DEPORTES' },
];

const SponsorsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'center',
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 2500, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-sm uppercase tracking-wider text-primary font-semibold">
            Nos Apoyan
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mt-2 text-foreground">
            Sponsors & Colaboradores
          </h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {sponsors.map((sponsor, index) => (
                <div
                  key={index}
                  className="flex-[0_0_50%] md:flex-[0_0_25%] min-w-0 px-4"
                >
                  <div className="bg-card border border-border rounded-xl p-6 h-32 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:border-primary/30 group">
                    <div className="text-center">
                      <span className="font-bold text-lg md:text-xl text-foreground group-hover:text-primary transition-colors">
                        {sponsor.shortName}
                      </span>
                      <p className="text-xs text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        {sponsor.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              {/* Duplicados para loop suave */}
              {sponsors.map((sponsor, index) => (
                <div
                  key={`dup-${index}`}
                  className="flex-[0_0_50%] md:flex-[0_0_25%] min-w-0 px-4"
                >
                  <div className="bg-card border border-border rounded-xl p-6 h-32 flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:border-primary/30 group">
                    <div className="text-center">
                      <span className="font-bold text-lg md:text-xl text-foreground group-hover:text-primary transition-colors">
                        {sponsor.shortName}
                      </span>
                      <p className="text-xs text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        {sponsor.name}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-10 h-10 rounded-full bg-background border border-border shadow-md flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Previous sponsor"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-10 h-10 rounded-full bg-background border border-border shadow-md flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Next sponsor"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          ¿Querés ser sponsor? <a href="#contacto" className="text-primary hover:underline">Contactanos</a>
        </p>
      </div>
    </section>
  );
};

export default SponsorsSection;
