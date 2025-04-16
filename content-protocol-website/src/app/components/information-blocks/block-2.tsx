'use client'

import FeaturedArtistCarousel from '../global/carousel/featured-artist-carousel'
import ArrowRight from '../icons/arrow-right'

export default function Block2 () {
  const handleJoinClick = () => {
    // Add your click handler logic here
    console.log('Join button clicked')
  }

  return (
    <section>
      <div className="flex flex-col justify-between items-center px-56 gap-y-8">
        <h2 className="text-white text-center text-6xl font-medium">Build with tokenized media from the world’s top creators</h2>

        <p className="text-white text-center text-3xl px-4">
          <span className="text-[#9CAFC0]">Develop apps on top of verified, onchain content — including</span> art, writing, music, and memes <span className="text-[#9CAFC0]">— from some of</span> the most innovative creators on the internet.
        </p>
      </div>

      <div className="mt-24">
        <FeaturedArtistCarousel />
      </div>

      <button
        onClick={handleJoinClick}
        className="px-14 py-8 text-2xl bg-white text-black rounded-full flex items-center gap-x-4 hover:cursor-pointer hover:-translate-y-px transition-all duration-300 font-medium mx-auto mt-24"
      >
        Join the allowlist <ArrowRight />
      </button>
    </section>
  )
}
