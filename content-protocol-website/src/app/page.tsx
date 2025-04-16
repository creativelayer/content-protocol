import Hero from './components/hero/hero'
import FeaturedImageCarousel from './components/global/carousel/featured-image-carousel'
import Block1 from './components/information-blocks/block-1'
import Block2 from './components/information-blocks/block-2'
import Block3 from './components/information-blocks/block-3'
import Block4 from './components/information-blocks/block-4'
import Block5 from './components/information-blocks/block-5'
import Block6 from './components/information-blocks/block-6'
import Block7 from './components/information-blocks/block-7'
import Block8 from './components/information-blocks/block-8'

export default function Home () {
  return (
    <div className="flex flex-col min-h-screen pb-20 font-[family-name:var(--font-geist-sans)]">
      <Hero />

      <section className="mt-40">
        <FeaturedImageCarousel />
      </section>

      <section className="mt-40">
        <Block1 />
      </section>

      <section className="mt-40">
        <Block2 />
      </section>

      <section className="mt-40">
        <Block3 />
      </section>

      <section className="mt-40">
        <Block4 />
      </section>

      <section className="mt-40">
        <Block5 />
      </section>

      <section className="mt-40">
        <Block6 />
      </section>

      <section className="mt-40">
        <Block7 />
      </section>

      <section className="mt-40">
        <Block8 />
      </section>
    </div>
  )
}
