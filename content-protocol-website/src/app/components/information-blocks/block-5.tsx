'use client'

import Image from 'next/image'
import ArrowRight from '../icons/arrow-right'

import block5Image from '../../assets/information-blocks/Duels.png'

export default function Block5 () {
  return (
    <div>
      <Image src={block5Image} alt="Block 5" className="md:px-16" />

      <div className="mt-16 md:mt-48 flex flex-col md:flex-row gap-x-8">
        <div className="space-y-8 md:space-y-16 w-full md:w-1/2">
          <h3 className="text-4xl md:text-8xl px-8 md:px-28 font-bold">
            Made for Creators
          </h3>

          <p className="text-[#4F6071] font-medium text-xl md:text-3xl px-8 md:pl-28 w-full">
            Turn your content into onchain currency. Earn on autopilot—every time your content is used by app builders in our network.
          </p>
        </div>

        <div className="w-full md:w-1/2">
          <ul className="space-y-5 md:space-y-10 mt-4 md:mt-0 px-8 md:pl-0 [&>li]:before:content-['•'] [&>li]:before:text-[#4F6071] [&>li]:before:mr-2 md:[&>li]:before:content-none">
            <li className="text-[#4F6071] font-medium text-xl md:text-3xl md:pr-28 flex items-center gap-x-2">
              <ArrowRight className="hidden md:block w-5 md:w-6 h-5 md:h-6" /> Easily mint your content as Culture Coins.
            </li>

            <li className="text-[#4F6071] font-medium text-xl md:text-3xl md:pr-28 flex gap-x-2">
              <ArrowRight className="hidden md:block w-5 md:w-8 h-5 md:h-8" /> Get paid every time your content is used in apps built on the protocol.
            </li>

            <li className="text-[#4F6071] font-medium text-xl md:text-3xl md:pr-28 flex gap-x-2">
              <ArrowRight className="hidden md:block w-5 md:w-8 h-5 md:h-8" /> Traditional IP is dead—utility-rich liquidity is the new engine of value.
            </li>

            <li className="text-[#4F6071] font-medium text-xl md:text-3xl md:pr-28 flex gap-x-2">
              <ArrowRight className="hidden md:block w-5 md:w-8 h-5 md:h-8" /> No middlemen. No licensing deals. Just clean, onchain value flow.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
