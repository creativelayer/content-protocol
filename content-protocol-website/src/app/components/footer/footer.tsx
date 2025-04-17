import CreativeLayerLogo from '../icons/creative-layer-logo'

export default function Footer () {
  return (
    <div className="flex flex-col justify-between px-8 md:px-28 py-8 md:py-16 border-t border-[#4F6071]">
      <div className="flex items-center gap-x-4">
        <CreativeLayerLogo className="w-4 md:w-6 h-4 md:h-6" />
        <h4 className="text-white text-2xl md:text-3xl">Creative Layer</h4>
      </div>

      <h3 className="text-white font-medium text-5xl md:text-8xl mt-4 md:mt-9 max-w-4xl">
        Programmable Content. Gamified Experiences. Real Value.
      </h3>

      <p className="text-white mt-16 md:mt-36">
        &copy; 2025 Creative Layer. All rights reserved.
      </p>
    </div>
  )
}
