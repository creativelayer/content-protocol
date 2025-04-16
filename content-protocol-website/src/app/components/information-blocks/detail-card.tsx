import CreativeLayerLogo from '../icons/creative-layer-logo'

interface DetailCardProps {
  title: string;
  description: string;
}

export default function DetailCard ({ title, description }: DetailCardProps) {
  return (
    <div className="flex flex-col justify-center gap-y-5 border-1 border-[#4F6071]/50 rounded-lg px-14 pt-28 pb-14 h-full w-full">
      <CreativeLayerLogo className="w-6 h-6" />

      <h4 className="text-white text-5xl font-medium">{title}</h4>

      <p className="text-3xl text-[#9CAFC0]">{description}</p>
    </div>
  )
}
