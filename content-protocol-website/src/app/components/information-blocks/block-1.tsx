import ArrowRight from '../icons/arrow-right'

import block1Image from '../../assets/information-blocks/Block_1_Desktop.png'

interface HeroProps {
  joinClickHandler: () => void
}

export default function Block1 ({ joinClickHandler }: HeroProps) {
  const handleJoinClick = () => {
    joinClickHandler()
  }

  return (
    <div
      className="w-full relative"
      style={{
        backgroundImage: `url(${block1Image.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        aspectRatio: '1009/1261',
        maxHeight: '1000px',
      }}
    >
      <div className="flex flex-col justify-center md:flex-row md:justify-between md:items-center gap-x-16 px-8 md:px-28 h-full">
        <h3 className="text-white text-4xl md:text-7xl font-bold">
          Transforming digital media into onchain economies.
        </h3>

        <div>
          <p className="text-white text-2xl md:text-3xl mt-7 md:mt-0 mb-8 md:mb-12">
            Tokenize content. Gamify interaction. Share value across creators, fans, and developers.
          </p>

          <button
            onClick={handleJoinClick}
            className="flex items-center gap-x-2 text-white underline underline-offset-2 hover:no-underline text-2xl font-medium"
          >
            Join the allowlist <ArrowRight className="text-white w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
