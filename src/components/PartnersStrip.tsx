export default function PartnersStrip() {
  return (
    <div className="py-8 bg-background border-y border-border overflow-hidden flex whitespace-nowrap">
      {/* Marquee effect placeholder */}
      <div className="flex space-x-8 animate-marquee items-center px-4">
        <span className="font-bold text-xl text-muted-foreground">Partner 1</span>
        <span className="font-bold text-xl text-muted-foreground">Partner 2</span>
        <span className="font-bold text-xl text-muted-foreground">Partner 3</span>
        <span className="font-bold text-xl text-muted-foreground">Partner 4</span>
        <span className="font-bold text-xl text-muted-foreground">Partner 5</span>
      </div>
    </div>
  );
}