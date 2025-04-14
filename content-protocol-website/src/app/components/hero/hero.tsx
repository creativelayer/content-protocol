import CreativeLayerLogo from "../icons/creative-layer-logo";

export default function Hero() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 pb-20 gap-4 sm:p-20 font-[family-name:var(--font-geist-sans)]">
     <CreativeLayerLogo />

     <h2 className="text-4xl">Creative Layer</h2>
    </div>
  );
}
