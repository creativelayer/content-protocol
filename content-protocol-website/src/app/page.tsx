import Hero from "./components/hero/hero";
import Carousel from "./components/global/carousel/carousel";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pb-20 font-[family-name:var(--font-geist-sans)]">
      <Hero />

      <section className="mt-40">
        <Carousel />
      </section>
    </div>
  );
}
