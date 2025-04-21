'use client'

import Image from 'next/image'
import ArrowRight from '../icons/arrow-right'

import block6Image from '../../assets/information-blocks/Remx.png'

export default function Block6 () {
  const handleExploreRemx = () => {
    window.open('https://remx.xyz/', '_blank')
  }

  return (
    <div>
      <Image src={block6Image} alt="Block 6" className="md:px-16" />

      <div className="mt-16 md:mt-24">
        <h3 className="text-white font-medium text-4xl md:text-6xl px-8 md:px-28">
          Remx
        </h3>

        <div className="mt-8 md:mt-14 flex flex-col md:flex-row justify-between gap-x-10">
          <p className="text-[#9CAFC0] font-medium text-2xl md:text-3xl pl-8 md:pl-28 w-full md:w-1/2">
            A curated marketplace where top artists drop collectible art. All media is free to mint — but only for 24 hours. Optional tips go directly to verified creators.
          </p>

          <ul className="space-y-5 md:space-y-10 mt-4 md:mt-0 pl-8 md:pl-0 [&>li]:before:content-['•'] [&>li]:before:text-white [&>li]:before:mr-2 md:[&>li]:before:content-none">
            <li className="text-white font-medium text-xl md:text-3xl md:pr-28 flex items-center gap-x-2">
              <ArrowRight className="hidden md:block w-4 md:w-8 h-4 md:h-8"/> Over 300k tokens collected
            </li>

            <li className="text-white font-medium text-xl md:text-3xl md:pr-28 flex items-center gap-x-2">
              <ArrowRight className="hidden md:block w-4 md:w-8 h-4 md:h-8 " /> Over $150K in tips paid out to creators
            </li>

            <li className="text-white font-medium text-xl md:text-3xl md:pr-28 flex items-center gap-x-2">
              <ArrowRight className="hidden md:block w-4 md:w-8 h-4 md:h-8" /> Powered by Creative Layer
            </li>
          </ul>
        </div>

        <div className="mt-8 md:mt-4 ml-8 md:ml-28">
          <button
            onClick={handleExploreRemx}
            className="px-14 py-6 md:py-8 text-xl md:text-2xl bg-white text-black rounded-full flex items-center gap-x-4 hover:cursor-pointer hover:-translate-y-px transition-all duration-300 font-medium"
          >
            Explore Remx <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  )
}
