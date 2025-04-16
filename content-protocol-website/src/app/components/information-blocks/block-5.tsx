'use client'

import Image from 'next/image'
import ArrowRight from '../icons/arrow-right'

import block5Image from '../../assets/information-blocks/Duels.png'

export default function Block5 () {
  const handlePlayDuel = () => {
    // Add your click handler logic here
    console.log('Play Duels button clicked')
  }

  return (
    <div>
      <Image src={block5Image} alt="Block 5" className="px-16" />

      <div className="mt-24">
        <h3 className="text-white font-medium text-6xl px-28">
          Duels
        </h3>

        <div className="mt-14 flex justify-between gap-x-10">
          <p className="text-[#9CAFC0] font-medium text-3xl pl-28 w-1/2">
            A head-to-head content battle game where media competes. Two artworks enter. Users bet with USDC. Winners earn. Everyone gets tokens.
          </p>

          <div className="space-y-10">
            <p className="text-white font-medium text-3xl pr-28 flex items-center gap-x-2">
              <ArrowRight /> Live now with real payouts
            </p>

            <p className="text-white font-medium text-3xl pr-28 flex items-center gap-x-2">
              <ArrowRight /> Powered by Creative Layer
            </p>

            <p className="text-white font-medium text-3xl pr-28 flex items-center gap-x-2">
              <ArrowRight /> Built on Farcaster
            </p>
          </div>
        </div>

        <div className="mt-4 ml-28">
          <button
            onClick={handlePlayDuel}
            className="px-14 py-8 text-2xl bg-white text-black rounded-full flex items-center gap-x-4 hover:cursor-pointer hover:-translate-y-px transition-all duration-300 font-medium"
          >
            Play Duels <ArrowRight />
          </button>
        </div>

      </div>
    </div>
  )
}
