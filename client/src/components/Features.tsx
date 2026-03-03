import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Map, Share, Zap, Shield, Eye } from "lucide-react";

const features = [
  {
    title: "Exploração Intuitiva",
    description: "Navegue pelos dados de incêndio com facilidade através de uma interface de mapa interativa e responsiva.",
    icon: Map,
    color: "text-primary",
    bg: "bg-primary/10"
  },
  {
    title: "Compreensão de Tendências",
    description: "Visualize padrões de ocorrências e identifique áreas de risco com marcadores visuais claros e distintos.",
    icon: Eye,
    color: "text-secondary",
    bg: "bg-secondary/10"
  },
  {
    title: "Compartilhamento Fácil",
    description: "Envie localizações precisas via WhatsApp com um clique, gerando previews ricos com informações contextuais.",
    icon: Share,
    color: "text-accent",
    bg: "bg-accent/10"
  },
  {
    title: "Meta Tags Dinâmicas",
    description: "O sistema atualiza automaticamente as tags Open Graph para garantir que o link preview mostre a imagem correta.",
    icon: Zap,
    color: "text-yellow-600",
    bg: "bg-yellow-100"
  },
  {
    title: "Compatibilidade Universal",
    description: "Funciona perfeitamente em dispositivos móveis e desktop, garantindo acesso à informação em qualquer lugar.",
    icon: Smartphone,
    color: "text-blue-600",
    bg: "bg-blue-100"
  },
  {
    title: "Robustez Técnica",
    description: "Arquitetura resiliente que mantém a integridade dos dados mesmo em conexões instáveis.",
    icon: Shield,
    color: "text-green-600",
    bg: "bg-green-100"
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold font-display">
            Benefícios da Solução
          </h2>
          <p className="text-lg text-muted-foreground">
            Uma abordagem completa para transformar dados brutos em ações rápidas e coordenadas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-card">
              <CardHeader>
                <div className={`w-12 h-12 rounded-xl ${feature.bg} ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
