'use client'

import Image from 'next/image'

import ArrowRight from '../icons/arrow-right'

import privyLogo from '../../assets/information-blocks/privy-logo.svg'
import baseLogo from '../../assets/information-blocks/base-logo.svg'
import farcasterLogo from '../../assets/information-blocks/farcaster-logo.svg'

interface Block8Props {
  getInTouchClickHandler: () => void
}

export default function Block8 ({ getInTouchClickHandler }: Block8Props) {
  const handleGetInTouchClick = () => {
    getInTouchClickHandler()
  }

  return (
    <div className="flex flex-col justify-between items-center gap-y-8 md:gap-y-14 h-full">
      <div className="flex flex-col justify-center items-center gap-y-8 md:gap-y-14">
        <h3 className="text-white text-center text-4xl md:text-7xl px-8 md:px-28 font-bold">
          Our Partners
        </h3>

        <p className="text-2xl md:text-3xl text-[#9CAFC0] text-center px-8 md:px-64">
          We’re building Creative Layer alongside the most forward-thinking teams in crypto:
        </p>

        <div className="flex gap-x-6 md:gap-x-24">
          <div className="flex flex-col items-center gap-y-2 md:gap-y-5">
            <Image src={privyLogo} alt="Privy Logo" width={116} height={116} className="w-[88px] md:w-[116px] h-[88px] md:h-[116px]" />

            <p className="text-white text-center text-xl md:text-2xl">Privy</p>
          </div>

          <div className="flex flex-col items-center gap-y-2 md:gap-y-5">
            <Image src={baseLogo} alt="Base Logo" width={116} height={116} className="w-[88px] md:w-[116px] h-[88px] md:h-[116px]" />

            <p className="text-white text-center text-xl md:text-2xl">Base</p>
          </div>

          <div className="flex flex-col items-center gap-y-2 md:gap-y-5">
            <Image src={farcasterLogo} alt="Farcaster Logo" width={116} height={116} className="w-[88px] md:w-[116px] h-[88px] md:h-[116px]" />

            <p className="text-white text-center text-xl md:text-2xl">Farcaster</p>
          </div>
        </div>

        <p className="text-[#9CAFC0] text-center text-2xl md:text-3xl">
          More partners to be announced soon. Want to partner with us?
        </p>

        <button
          onClick={handleGetInTouchClick}
          className="px-14 py-6 md:py-8 text-xl md:text-2xl bg-white text-black rounded-full flex items-center justify-center gap-x-4 hover:cursor-pointer hover:-translate-y-px transition-all duration-300 font-medium md:w-auto text-center"
        >
          Get in Touch <ArrowRight />
        </button>
      </div>
    </div>
  )
}
