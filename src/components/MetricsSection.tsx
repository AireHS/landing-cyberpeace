export default function MetricsSection() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-around text-center gap-8">
        <div>
          <h3 className="text-4xl font-black">99.9%</h3>
          <p className="mt-2 text-sm font-medium">Uptime garantizado</p>
        </div>
        <div>
          <h3 className="text-4xl font-black">+500</h3>
          <p className="mt-2 text-sm font-medium">Empresas protegidas</p>
        </div>
        <div>
          <h3 className="text-4xl font-black">24/7</h3>
          <p className="mt-2 text-sm font-medium">Monitoreo continuo</p>
        </div>
      </div>
    </section>
  );
}