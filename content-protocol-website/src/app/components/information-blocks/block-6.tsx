'use client'

import Image from 'next/image'
import ArrowRight from '../icons/arrow-right'

import block6Image from '../../assets/information-blocks/Remx.png'

interface Block6Props {
  joinClickHandler: () => void
}

export default function Block6 ({ joinClickHandler }: Block6Props) {
  const handleJoinClick = () => {
    joinClickHandler()
  }

  return (
    <div>
      <Image src={block6Image} alt="Block 6" className="md:px-16" />

      <div className="mt-16 md:mt-24">
        <h2 className="font-bold text-4xl md:text-8xl px-8 md:px-28 text-center">
          Apps like <span className="underline underline-offset-[12px]">Duels ⚔️</span> are driving novel onchain experiences
        </h2>

        <div className="mt-10 md:mt-20 ml-8 md:ml-28">
          <button
            onClick={handleJoinClick}
            className="px-14 py-6 md:py-8 text-xl md:text-2xl bg-black text-white rounded-full flex items-center gap-x-4 hover:cursor-pointer hover:-translate-y-px transition-all duration-300 font-medium mx-auto "
          >
        Get early access <ArrowRight className="w-5 md:w-6 h-5 md:h-6 flex-shrink-0" />
          </button>
        </div>
      </div>
    </div>
  )
}
