'use client'

import CreativeLayerLogo from '../icons/creative-layer-logo'
import ArrowRight from '../icons/arrow-right'

export default function Hero () {
  const handleJoinClick = () => {
    // Add your click handler logic here
    console.log('Join button clicked')
  }

  return (
    <section className="flex flex-col items-center mt-56 gap-y-16 px-40 font-[family-name:var(--font-geist-sans)]">
      <div className="flex items-center gap-x-4">
        <CreativeLayerLogo />

        <h1 className="text-4xl">Creative Layer</h1>
      </div>

      <div className="flex flex-col gap-y-4 items-center ">
        <h2 className="text-8xl text-center font-medium">
          Programmable Content.
        </h2>

        <h2 className="text-8xl text-center font-medium">
          Gamified Experiences.
        </h2>

        <h2 className="text-8xl text-center font-medium">
          Real Value.
        </h2>
      </div>

      <button
        onClick={handleJoinClick}
        className="px-14 py-8 text-2xl bg-white text-black rounded-full flex items-center gap-x-4 hover:cursor-pointer hover:-translate-y-px transition-all duration-300 font-medium"
      >
        Join the allowlist <ArrowRight />
      </button>
    </section>
  )
}
