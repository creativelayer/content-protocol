import Hero from "./components/hero/hero";
import FeaturedImageCarousel from "./components/global/carousel/featured-image-carousel";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen pb-20 font-[family-name:var(--font-geist-sans)]">
      <Hero />

      <section className="mt-40">
        <FeaturedImageCarousel />
      </section>
    </div>
  );
}
