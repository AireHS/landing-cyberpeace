export default function HowWeHelp() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Cómo te ayudamos</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-background rounded-xl shadow-sm border border-border">
            <h3 className="font-semibold mb-2">SOC 360</h3>
            <p className="text-sm text-muted-foreground">Monitoreo y respuesta ante incidentes 24/7.</p>
          </div>
          <div className="p-6 bg-background rounded-xl shadow-sm border border-border">
            <h3 className="font-semibold mb-2">Red Teaming</h3>
            <p className="text-sm text-muted-foreground">Simulación de ataques avanzados y continuos.</p>
          </div>
          <div className="p-6 bg-background rounded-xl shadow-sm border border-border">
            <h3 className="font-semibold mb-2">Compliance</h3>
            <p className="text-sm text-muted-foreground">Alineación con marcos normativos internacionales.</p>
          </div>
        </div>
      </div>
    </section>
  );
}