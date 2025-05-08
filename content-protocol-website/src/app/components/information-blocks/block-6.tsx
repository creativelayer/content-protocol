'use client'

import Image from 'next/image'
import ArrowRight from '../icons/arrow-right'

import block6Image from '../../assets/information-blocks/CL_Duels_Image.png'

export default function Block6 () {
  const handlePlayDuelsClick = () => {
    window.open('https://warpcast.com/miniapps/Fagq8kkR_Va8/duels', '_blank')
  }

  return (
    <div>
      <div className="md:mx-16">
        <Image src={block6Image} alt="Block 6" className="w-full md:rounded-3xl" />
      </div>

      <div className="mt-16 md:mt-24">
        <h2 className="font-bold text-4xl md:text-8xl px-8 md:px-28 text-center">
          Apps like <a href="https://warpcast.com/miniapps/Fagq8kkR_Va8/duels" target="_blank" rel="noopener noreferrer" className="underline underline-offset-[12px] hover:no-underline">Duels ⚔️</a> are driving novel onchain experiences
        </h2>

        <div className="mt-10 md:mt-20">
          <button
            onClick={handlePlayDuelsClick}
            className="px-14 py-6 md:py-8 text-xl md:text-2xl bg-black text-white rounded-full flex items-center gap-x-4 hover:cursor-pointer hover:-translate-y-px transition-all duration-300 font-medium mx-auto "
          >
            Play Duels <ArrowRight className="w-5 md:w-6 h-5 md:h-6 flex-shrink-0" />
          </button>
        </div>
      </div>
    </div>
  )
}
