'use client'

import Image from 'next/image'
import ArrowRight from '../icons/arrow-right'

import block6Image from '../../assets/information-blocks/Remx.png'

export default function Block6 () {
  const handleExploreRemx = () => {
    // Add your click handler logic here
    console.log('Play Duels button clicked')
  }

  return (
    <div>
      <Image src={block6Image} alt="Block 5" className="px-16" />

      <div className="mt-24">
        <h3 className="text-white font-medium text-6xl px-28">
          Remx
        </h3>

        <div className="mt-14 flex justify-between gap-x-10">
          <p className="text-[#9CAFC0] font-medium text-3xl pl-28 w-1/2">
            A curated marketplace where top artists drop collectible art. All media is free to mint — but only for 24 hours. Optional tips go directly to verified creators.
          </p>

          <div className="space-y-10">
            <p className="text-white font-medium text-3xl pr-28 flex items-center gap-x-2">
              <ArrowRight /> Over 300k tokens collected
            </p>

            <p className="text-white font-medium text-3xl pr-28 flex items-center gap-x-2">
              <ArrowRight /> Over $150K in tips paid out to creators
            </p>

            <p className="text-white font-medium text-3xl pr-28 flex items-center gap-x-2">
              <ArrowRight /> Powered by Creative Layer
            </p>
          </div>
        </div>

        <div className="mt-4 ml-28">
          <button
            onClick={handleExploreRemx}
            className="px-14 py-8 text-2xl bg-white text-black rounded-full flex items-center gap-x-4 hover:cursor-pointer hover:-translate-y-px transition-all duration-300 font-medium"
          >
            Explore Remx <ArrowRight />
          </button>
        </div>

      </div>
    </div>
  )
}
