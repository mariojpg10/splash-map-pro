import { Mail, Instagram } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ContactSection = () => {
  return (
    <section id="contacto" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm uppercase tracking-wider text-primary font-semibold">Contacto</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-2">
            ¿Tenés una consulta?
          </h2>
          <p className="text-muted-foreground mt-4">
            Escribinos y te respondemos a la brevedad.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="bg-card hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Email</h3>
              <a 
                href="mailto:Vueltaalcurupi@gmail.com" 
                className="text-sm text-primary hover:underline"
              >
                Vueltaalcurupi@gmail.com
              </a>
              <p className="text-xs text-muted-foreground mt-2">Consultas e inscripciones</p>
            </CardContent>
          </Card>

          <Card className="bg-card hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Instagram className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Instagram Máster</h3>
              <a 
                href="https://www.instagram.com/echaguemasternatacion/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline"
              >
                @natacionmasterechague
              </a>
              <p className="text-xs text-muted-foreground mt-2">Subcomisión de Nadadores</p>
            </CardContent>
          </Card>

          <Card className="bg-card hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Instagram className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Instagram Oficial</h3>
              <a 
                href="https://www.instagram.com/atleticoechagueoficial/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline"
              >
                @atleticoechagueoficial
              </a>
              <p className="text-xs text-muted-foreground mt-2">Atlético Echagüe Club</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
