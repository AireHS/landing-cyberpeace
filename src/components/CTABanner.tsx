export default function CTABanner() {
  return (
    <section className="py-20 text-center px-6">
      <div className="max-w-3xl mx-auto bg-primary text-primary-foreground p-10 rounded-2xl shadow-2xl">
        <h2 className="text-3xl font-bold mb-4">¿Listo para proteger tu infraestructura?</h2>
        <p className="mb-8 opacity-90">Únete al nuevo estándar de ciberseguridad y mantén tus datos a salvo.</p>
        <button className="bg-background text-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">Contáctanos ahora</button>
      </div>
    </section>
  );
}