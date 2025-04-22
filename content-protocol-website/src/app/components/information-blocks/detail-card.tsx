import CreativeLayerLogo from '../icons/creative-layer-logo'

interface DetailCardProps {
  title: string;
  description: string;
}

export default function DetailCard ({ title, description }: DetailCardProps) {
  return (
    <div className="flex flex-col justify-center gap-y-5 border-1 border-[#4F6071]/50 rounded-lg px-8 md:px-14 pt-16 md:pt-28 pb-14 h-full w-full">
      <CreativeLayerLogo className="w-5 md:w-6 h-5 md:h-6" />

      <h5 className="text-white text-3xl md:text-5xl font-bold">{title}</h5>

      <p className="text-2xl md:text-3xl text-[#9CAFC0]">{description}</p>
    </div>
  )
}
