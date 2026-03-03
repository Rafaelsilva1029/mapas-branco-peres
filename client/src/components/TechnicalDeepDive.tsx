import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";

export default function TechnicalDeepDive() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold font-display">
              Arquitetura Técnica
            </h2>
            <p className="text-lg text-muted-foreground">
              A solução foi construída em três camadas principais para garantir performance, compatibilidade e facilidade de uso.
            </p>

            <Tabs defaultValue="meta" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="meta">Meta Tags</TabsTrigger>
                <TabsTrigger value="url">URL Handler</TabsTrigger>
                <TabsTrigger value="map">Map Renderer</TabsTrigger>
              </TabsList>
              
              <TabsContent value="meta" className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-2 text-primary">meta-updater.js</h3>
                    <p className="text-muted-foreground mb-4">
                      Script leve que executa antes do React carregar. Ele intercepta os parâmetros da URL e reescreve as tags Open Graph em tempo real.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        Atualiza og:image para ícone de fogo
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        Define título e descrição dinâmicos
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        Garante preview correto no WhatsApp
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="url" className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-2 text-secondary">poi-share-handler.js</h3>
                    <p className="text-muted-foreground mb-4">
                      Gerenciador central de estados de compartilhamento. Responsável por serializar e deserializar os dados dos POIs na URL.
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        Gera URLs curtas e limpas
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        Suporta múltiplos POIs simultâneos
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        Integração nativa com API do WhatsApp
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="map" className="space-y-4">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-2 text-accent">poi-map-renderer.js</h3>
                    <p className="text-muted-foreground mb-4">
                      Módulo de visualização que conecta os dados da URL diretamente à instância do mapa (Mapbox/OpenLayers).
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        Renderização automática ao carregar
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        Auto-zoom para enquadrar todos os POIs
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        Destaque visual para áreas de risco
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
            <img 
              src="/images/feature-share.png" 
              alt="Technical Architecture Visualization" 
              className="relative z-10 rounded-3xl shadow-2xl border border-white/10 w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
