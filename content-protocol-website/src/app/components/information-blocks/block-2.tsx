'use client'

import FeaturedArtistCarousel from '../global/carousel/featured-artist-carousel'
import ArrowRight from '../icons/arrow-right'

interface HeroProps {
  joinClickHandler: () => void
}

export default function Block2 ({ joinClickHandler }: HeroProps) {
  const handleJoinClick = () => {
    joinClickHandler()
  }

  return (
    <section>
      <div className="flex flex-col justify-between items-center px-8 md:px-56 gap-y-8">
        <h2 className="text-white md:text-center text-4xl md:text-6xl font-bold">Build with tokenized media from the world’s top creators</h2>

        <p className="text-white md:text-center text-2xl md:text-3xl md:px-4">
          <span className="text-[#9CAFC0]">Develop apps on top of verified, onchain content — including</span> art, writing, music, and memes <span className="text-[#9CAFC0]">— from some of</span> the most innovative creators on the internet.
        </p>
      </div>

      <div className="mt-12 md:mt-24">
        <FeaturedArtistCarousel />
      </div>

      <button
        onClick={handleJoinClick}
        className="px-14 py-6 md:py-8 text-xl md:text-2xl bg-white text-black rounded-full flex items-center gap-x-4 hover:cursor-pointer hover:-translate-y-px transition-all duration-300 font-medium mx-auto mt-12 md:mt-24"
      >
        Join the allowlist <ArrowRight />
      </button>
    </section>
  )
}
