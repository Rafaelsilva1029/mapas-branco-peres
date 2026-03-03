import { Button } from "@/components/ui/button";
import { ArrowRight, Share2, MapPin, Flame } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/hero-bg.png" 
          alt="Digital Map Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background"></div>
      </div>

      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </span>
            Sistema de Monitoramento Ativo
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight font-display text-foreground">
            Compartilhamento <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Inteligente de POIs
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
            Uma solução robusta para detecção e comunicação de focos de incêndio. 
            Compartilhe localizações precisas via WhatsApp com previews ricos e 
            visualização instantânea no mapa.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-14 text-lg shadow-lg shadow-primary/25">
              Ver Demonstração <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-lg border-primary/20 hover:bg-primary/5">
              Documentação Técnica
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
            <div className="flex flex-col gap-2">
              <div className="p-3 rounded-xl bg-primary/10 w-fit text-primary">
                <Share2 className="h-6 w-6" />
              </div>
              <span className="font-semibold">Link Preview</span>
              <span className="text-sm text-muted-foreground">Meta tags dinâmicas</span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="p-3 rounded-xl bg-secondary/10 w-fit text-secondary">
                <Flame className="h-6 w-6" />
              </div>
              <span className="font-semibold">Alerta Visual</span>
              <span className="text-sm text-muted-foreground">Ícones de destaque</span>
            </div>
            <div className="flex flex-col gap-2">
              <div className="p-3 rounded-xl bg-accent/10 w-fit text-accent">
                <MapPin className="h-6 w-6" />
              </div>
              <span className="font-semibold">Precisão</span>
              <span className="text-sm text-muted-foreground">Coordenadas exatas</span>
            </div>
          </div>
        </div>

        <div className="relative lg:h-[800px] flex items-center justify-center animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
          <div className="relative w-[300px] md:w-[350px] aspect-[9/19] rounded-[3rem] border-8 border-foreground/10 bg-background shadow-2xl overflow-hidden transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
            <img 
              src="/images/mobile-demo.png" 
              alt="Mobile Interface Demo" 
              className="w-full h-full object-cover"
            />
            
            {/* Floating UI Elements */}
            <div className="absolute top-1/4 -right-12 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-xl border border-white/20 animate-bounce duration-[3000ms]">
              <div className="flex items-center gap-3">
                <div className="bg-green-500/20 p-2 rounded-lg">
                  <Share2 className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500">Status</p>
                  <p className="text-sm font-bold text-gray-800">Compartilhado</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-1/3 -left-12 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-xl border border-white/20 animate-bounce duration-[4000ms]">
              <div className="flex items-center gap-3">
                <div className="bg-secondary/20 p-2 rounded-lg">
                  <Flame className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-500">Alerta</p>
                  <p className="text-sm font-bold text-gray-800">Incêndio Detectado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
