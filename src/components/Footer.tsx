import { Waves } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Waves className="w-8 h-8 text-primary" />
            <div>
              <span className="font-serif text-xl font-bold">
                Vuelta al Islote <span className="text-primary">Curupí</span>
              </span>
              <p className="text-sm opacity-70">1 de Marzo 2026</p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm opacity-70">
              Organizado por Atlético Echagüe Club
            </p>
            <p className="text-sm opacity-70">
              Subcomisión de Nadadores Máster
            </p>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm opacity-60">
            © 2026 Atlético Echagüe Club. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
