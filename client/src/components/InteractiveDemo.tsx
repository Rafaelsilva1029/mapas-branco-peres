import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Share2, Copy, Check } from "lucide-react";
import { toast } from "sonner";

export default function InteractiveDemo() {
  const [poiName, setPoiName] = useState("Incêndio Área Norte");
  const [lat, setLat] = useState("-23.550520");
  const [lng, setLng] = useState("-46.633308");
  const [generatedUrl, setGeneratedUrl] = useState("");

  const handleGenerate = () => {
    const baseUrl = "https://mapas-branco-peres.netlify.app";
    const params = new URLSearchParams({
      poi_type: "fire",
      poi_name: poiName,
      poi_lat: lat,
      poi_lng: lng,
      demarcated: "1"
    });
    setGeneratedUrl(`${baseUrl}/?${params.toString()}`);
    toast.success("URL gerada com sucesso!");
  };

  const handleCopy = () => {
    if (!generatedUrl) return;
    navigator.clipboard.writeText(generatedUrl);
    toast.success("Link copiado para a área de transferência");
  };

  return (
    <section className="py-24 bg-muted/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
            Teste a Geração de Links
          </h2>
          <p className="text-lg text-muted-foreground">
            Simule a criação de um link de compartilhamento e veja como os parâmetros são estruturados.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6 space-y-6">
            <div className="space-y-2">
              <Label>Nome do POI</Label>
              <Input 
                value={poiName} 
                onChange={(e) => setPoiName(e.target.value)} 
                placeholder="Ex: Foco de Incêndio 01"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Latitude</Label>
                <Input 
                  value={lat} 
                  onChange={(e) => setLat(e.target.value)} 
                />
              </div>
              <div className="space-y-2">
                <Label>Longitude</Label>
                <Input 
                  value={lng} 
                  onChange={(e) => setLng(e.target.value)} 
                />
              </div>
            </div>
            <Button onClick={handleGenerate} className="w-full">
              Gerar Link de Compartilhamento
            </Button>
          </Card>

          <Card className="p-6 flex flex-col justify-center bg-slate-900 text-slate-50">
            <h3 className="text-lg font-semibold mb-4 text-slate-200">Preview do Link</h3>
            
            {generatedUrl ? (
              <div className="space-y-4 animate-in fade-in zoom-in duration-300">
                <div className="p-4 rounded-lg bg-slate-800 border border-slate-700 break-all font-mono text-sm text-slate-300">
                  {generatedUrl}
                </div>
                <div className="flex gap-3">
                  <Button variant="secondary" className="flex-1" onClick={handleCopy}>
                    <Copy className="mr-2 h-4 w-4" /> Copiar
                  </Button>
                  <Button className="flex-1 bg-[#25D366] hover:bg-[#128C7E] text-white">
                    <Share2 className="mr-2 h-4 w-4" /> WhatsApp
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center text-slate-500 py-8">
                <Share2 className="h-12 w-12 mx-auto mb-3 opacity-20" />
                <p>Preencha os dados e gere o link para visualizar</p>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}
