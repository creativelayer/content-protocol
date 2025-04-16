'use client'

import ArrowRight from '../icons/arrow-right'

export default function Block10 () {
  const handleJoinClick = () => {
    console.log('Join clicked')
  }

  return (
    <div className="flex flex-col justify-between items-center gap-y-14 h-full">
      <h3 className="text-white text-center text-7xl px-28">
        Join the Allowlist
      </h3>

      <p className="text-3xl text-[#9CAFC0] px-64">
        Be the first to access $CREATE, earn early rewards, and help shape the future of onchain media.
      </p>

      <button
        onClick={handleJoinClick}
        className="px-14 py-8 text-2xl bg-white text-black rounded-full flex items-center gap-x-4 hover:cursor-pointer hover:-translate-y-px transition-all duration-300 font-medium"
      >
        Join the allowlist <ArrowRight />
      </button>
    </div>
  )
}
