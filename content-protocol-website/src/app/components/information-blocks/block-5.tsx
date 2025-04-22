'use client'

import Image from 'next/image'
import ArrowRight from '../icons/arrow-right'

import block5Image from '../../assets/information-blocks/Duels.png'

export default function Block5 () {
  const handlePlayDuel = () => {
    window.open('https://warpcast.com/duelsapp', '_blank')
  }

  return (
    <div>
      <Image src={block5Image} alt="Block 5" className="md:px-16" />

      <div className="mt-16 md:mt-24">
        <h3 className="text-white text-4xl md:text-6xl px-8 md:px-28 font-bold">
          Duels
        </h3>

        <div className="mt-8 md:mt-14 flex flex-col md:flex-row justify-between gap-x-10">
          <p className="text-[#9CAFC0] font-medium text-2xl md:text-3xl pl-8 md:pl-28 w-full md:w-1/2">
            A head-to-head content battle game where media competes. Two artworks enter. Users bet with USDC. Winners earn. Everyone gets tokens.
          </p>

          <ul className="space-y-5 md:space-y-10 mt-4 md:mt-0 pl-8 md:pl-0 [&>li]:before:content-['•'] [&>li]:before:text-white [&>li]:before:mr-2 md:[&>li]:before:content-none">
            <li className="text-white font-medium text-xl md:text-3xl md:pr-28 flex items-center gap-x-2">
              <ArrowRight className="hidden md:block w-5 md:w-8 h-5 md:h-8" /> Live now with real payouts
            </li>

            <li className="text-white font-medium text-xl md:text-3xl md:pr-28 flex items-center gap-x-2">
              <ArrowRight className="hidden md:block w-5 md:w-8 h-5 md:h-8" /> Powered by Creative Layer
            </li>

            <li className="text-white font-medium text-xl md:text-3xl md:pr-28 flex items-center gap-x-2">
              <ArrowRight className="hidden md:block w-5 md:w-8 h-5 md:h-8" /> Built on Farcaster
            </li>
          </ul>
        </div>

        <div className="mt-8 md:mt-4 ml-8 md:ml-28">
          <button
            onClick={handlePlayDuel}
            className="px-14 py-6 md:py-8 text-xl md:text-2xl bg-white text-black rounded-full flex items-center gap-x-4 hover:cursor-pointer hover:-translate-y-px transition-all duration-300 font-medium"
          >
            Play Duels <ArrowRight />
          </button>
        </div>

      </div>
    </div>
  )
}
