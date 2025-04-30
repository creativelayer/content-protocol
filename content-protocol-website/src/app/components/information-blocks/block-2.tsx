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
      <div className="mb-8 md:mb-16">
        <FeaturedArtistCarousel />
      </div>

      <div className="flex justify-between items-center px-8 md:px-56">
        <h2 className="text-4xl md:text-8xl text-center font-bold">
          Creators like you have already earned over $150k
        </h2>
      </div>

      <button
        onClick={handleJoinClick}
        className="px-14 py-6 md:py-8 text-xl md:text-2xl bg-black text-white rounded-full flex items-center gap-x-4 hover:cursor-pointer hover:-translate-y-px transition-all duration-300 font-medium mx-auto mt-10 md:mt-20"
      >
        Get early access <ArrowRight className="w-5 md:w-6 h-5 md:h-6 flex-shrink-0" />
      </button>
    </section>
  )
}
