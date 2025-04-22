import block2Image from '../../assets/information-blocks/Block_2_Desktop.png'

export default function Block3 () {
  return (
    <div
      className="w-full relative"
      style={{
        backgroundImage: `url(${block2Image.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        aspectRatio: '1009/1261',
        maxHeight: '1000px',
      }}
    >
      <div className="flex justify-between items-center gap-x-16 px-8 md:px-28 h-full">
        <h3 className="text-white text-center text-4xl md:text-7xl font-bold">
          Every piece of content is an ERC-20 token. Every interaction is an opportunity to play, earn, or build.
        </h3>
      </div>
    </div>
  )
}
