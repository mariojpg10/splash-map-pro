import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CreditCard, Users, AlertTriangle, ExternalLink } from 'lucide-react';

const RegistrationSection = () => {
  return (
    <section id="inscripcion" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-sm uppercase tracking-wider text-primary font-semibold">Inscripción</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-2">
            Sumate a la Vuelta 2026
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Completá el formulario y asegurá tu lugar.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Price card */}
            <Card className="bg-gradient-to-br from-primary to-secondary text-primary-foreground">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <CreditCard className="w-6 h-6" />
                  <span className="text-sm uppercase tracking-wider opacity-80">Valor de inscripción</span>
                </div>
                <div className="text-5xl font-bold mb-2">$40.000</div>
                <p className="text-sm opacity-80 mb-6">
                  Consultar beneficios para grupos mayores a 10 nadadores.
                </p>
                
                <div className="border-t border-primary-foreground/20 pt-6">
                  <p className="text-sm font-semibold mb-2">Datos para transferencia:</p>
                  <div className="bg-primary-foreground/10 rounded-lg p-4 space-y-2 text-sm">
                    <p><span className="opacity-70">ALIAS:</span> FBRONDO2.COCOS</p>
                    <p><span className="opacity-70">CVU:</span> 0000053600000036058538</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quota card */}
            <Card className="bg-card">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-primary" />
                  <span className="text-sm uppercase tracking-wider text-muted-foreground">Cupo limitado</span>
                </div>
                <div className="text-5xl font-bold text-foreground mb-2">150</div>
                <p className="text-muted-foreground mb-6">
                  Nadadores en total para ambas pruebas.
                </p>
                
                <div className="bg-muted/50 rounded-lg p-4">
                  <p className="text-sm text-foreground font-medium mb-2">Se considera para el cupo:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Pago total del derecho de participación</li>
                    <li>• Anticipo parcial del pago</li>
                  </ul>
                  <p className="text-xs text-destructive mt-2">
                    La simple pre-inscripción NO reserva lugar.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Important note */}
          <div className="bg-destructive/10 border border-destructive/30 rounded-xl p-6 mb-8 flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-destructive flex-shrink-0" />
            <div>
              <p className="font-semibold text-foreground mb-2">Documentación obligatoria</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Certificado médico con máximo 60 días de antigüedad</li>
                <li>• Deslinde de responsabilidad firmado</li>
                <li>• Menores de 18 años: firma de padres o tutores</li>
                <li>• Mayores de 65 años: cobertura de seguro privada</li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button size="lg" asChild className="gap-2">
              <a 
                href="https://forms.gle/mTKnEmg75d297PyD6" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Ir al formulario de inscripción
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Inscripciones hasta el 25 de febrero de 2026 o hasta completar cupo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationSection;
