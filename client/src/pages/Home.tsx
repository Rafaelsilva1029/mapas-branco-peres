import Hero from "@/components/Hero";
import Features from "@/components/Features";
import TechnicalDeepDive from "@/components/TechnicalDeepDive";
import InteractiveDemo from "@/components/InteractiveDemo";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      <main className="flex-1">
        <Hero />
        <Features />
        <TechnicalDeepDive />
        <InteractiveDemo />
      </main>
      
      <footer className="py-8 border-t border-border/40 text-center text-sm text-muted-foreground">
        <div className="container">
          <p>© 2025 Sistema de Monitoramento Branco Peres. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
