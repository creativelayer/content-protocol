import CreativeLayerLogo from '../icons/creative-layer-logo'

export default function Footer () {
  return (
    <div className="flex flex-col justify-between px-8 md:px-28 py-8 md:py-16 border-t border-gray-200">
      <div className="flex items-center gap-x-2">
        <CreativeLayerLogo className="w-4 md:w-6 h-4 md:h-6" />
        <h4 className="text-2xl md:text-3xl font-medium">Creative Layer Protocol</h4>
      </div>

      <h3 className="text-5xl md:text-8xl mt-4 md:mt-9 max-w-4xl font-bold">
        Turn Creativity into Programmable Capital
      </h3>

      <p className="mt-16 md:mt-36 font-medium">
        &copy; 2025 Creative Layer Protocol. All rights reserved.
      </p>
    </div>
  )
}
