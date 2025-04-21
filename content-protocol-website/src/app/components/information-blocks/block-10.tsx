'use client'

import ArrowRight from '../icons/arrow-right'

interface HeroProps {
  joinClickHandler: () => void
}

export default function Block10 ({ joinClickHandler }: HeroProps) {
  const handleJoinClick = () => {
    // Add your click handler logic here
    joinClickHandler()
    console.log('Join button clicked')
  }

  return (
    <div className="flex flex-col justify-between items-center gap-y-8 md:gap-y-14 h-full">
      <h3 className="text-white text-center text-4xl md:text-7xl px-8 md:px-28">
        Join the Allowlist
      </h3>

      <p className="text-2xl md:text-3xl text-[#9CAFC0] px-8 md:px-64 text-center">
        Be the first to access $CREATE, earn early rewards, and help shape the future of onchain media.
      </p>

      <button
        onClick={handleJoinClick}
        className="px-14 py-6 md:py-8 text-xl md:text-2xl bg-white text-black rounded-full flex items-center justify-center gap-x-4 hover:cursor-pointer hover:-translate-y-px transition-all duration-300 font-medium md:w-auto text-center"
      >
        Join the allowlist <ArrowRight />
      </button>
    </div>
  )
}
