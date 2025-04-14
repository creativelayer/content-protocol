'use client';

import CreativeLayerLogo from "../icons/creative-layer-logo";
import ArrowRight from "../icons/arrow-right";

export default function Hero() {
  const handleJoinClick = () => {
    // Add your click handler logic here
    console.log('Join button clicked');
  };

  return (
    <section className="flex flex-col items-center mt-56 gap-y-16 px-40 font-[family-name:var(--font-geist-sans)]">
      <div className="flex items-center gap-x-4">
        <CreativeLayerLogo />

        <h1 className="text-4xl">Creative Layer</h1>
      </div>

      <div className="flex flex-col gap-y-4 items-center">
        <p className="text-8xl text-center">
          Programmable Content.
        </p>
        <p className="text-8xl text-center">
          Gamified Experiences.
        </p>
        <p className="text-8xl text-center">
          Real Value.
        </p>
      </div>

      <button
        onClick={handleJoinClick}
        className="px-12 py-10 text-2xl bg-white text-black rounded-full flex items-center gap-x-4 hover:cursor-pointer"
      >
        Join the allowlist <ArrowRight />
      </button>
    </section>
  );
}
