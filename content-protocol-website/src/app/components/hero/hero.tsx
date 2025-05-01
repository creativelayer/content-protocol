'use client'

import CreativeLayerLogo from '../icons/creative-layer-logo'
import ArrowRight from '../icons/arrow-right'

interface HeroProps {
  joinClickHandler: () => void
}

export default function Hero ({ joinClickHandler }: HeroProps) {
  const handleJoinClick = () => {
    joinClickHandler()
  }

  return (
    <section className="flex flex-col items-center mt-20 md:mt-56 gap-y-16 mx-8 md:mx-40">
      <div className="flex items-center gap-x-2">
        <CreativeLayerLogo className="w-6 h-6 md:w-8 md:h-8" />

        <h1 className="text-2xl md:text-4xl font-medium">Creative Layer Protocol</h1>
      </div>

      <div className="flex flex-col gap-y-8 md:gap-y-16 items-center ">
        <h2 className="text-4xl md:text-8xl text-center font-bold">
          Turn Creativity into Programmable Capital
        </h2>

        <p className="text-center text-xl md:text-3xl text-[#4F6071] max-w-5xl">
          Creative Layer is a community-owned protocol that transforms digital assets into programmable coins—turning culture into currency. Welcome to Culture Coins.
        </p>
      </div>

      <button
        onClick={handleJoinClick}
        className="px-14 py-6 md:py-8 text-xl md:text-2xl bg-black text-white rounded-full flex items-center justify-center gap-x-4 hover:cursor-pointer hover:-translate-y-px transition-all duration-300 font-medium w-full md:w-auto text-center"
      >
        Get early access <ArrowRight className="w-5 md:w-6 h-5 md:h-6 flex-shrink-0" />
      </button>
    </section>
  )
}
