import DotPattern from "./ui/dot-pattern-1";

export function Quote() {
  return (
    <div className="mx-auto my-20 max-w-7xl px-6 xl:px-0">
      <div className="relative flex flex-col items-center border border-f1-red/50 bg-f1-black/40 backdrop-blur-sm overflow-hidden rounded-3xl shadow-neon">
        <DotPattern width={5} height={5} className="fill-f1-red/10" />

        <div className="absolute -left-1.5 -top-1.5 h-3 w-3 bg-f1-red shadow-neon" />
        <div className="absolute -bottom-1.5 -left-1.5 h-3 w-3 bg-f1-red shadow-neon" />
        <div className="absolute -right-1.5 -top-1.5 h-3 w-3 bg-f1-red shadow-neon" />
        <div className="absolute -bottom-1.5 -right-1.5 h-3 w-3 bg-f1-red shadow-neon" />

        <div className="relative z-20 mx-auto max-w-7xl py-12 md:p-16 xl:py-24 text-center">
          <p className="md:text-md text-xs text-f1-red lg:text-lg xl:text-2xl font-display font-bold uppercase tracking-[0.3em] mb-8 neon-text">
            The F1 Pulse Philosophy
          </p>
          <div className="text-3xl tracking-tighter md:text-5xl lg:text-7xl xl:text-8xl font-display italic uppercase leading-none">
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              <h1 className="font-black">"Racing should be</h1>
              <p className="font-thin text-white/40">purely</p>
            </div>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              <p className="font-thin text-white/40">about</p>
              <h1 className="font-black text-f1-red neon-text">Speed</h1>
              <p className="font-thin text-white/40">because</p>
            </div>
            <div className="flex flex-wrap justify-center gap-2 md:gap-4">
              <p className="font-thin text-white/40">simple</p>
              <h1 className="font-black">instincts</h1>
              <p className="font-thin text-white/40">are</p>
            </div>
            <h1 className="font-black">the fastest..."</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quote;
