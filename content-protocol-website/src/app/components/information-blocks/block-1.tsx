import ArrowRight from '../icons/arrow-right'

import block1Image from '../../assets/information-blocks/Block_1_Desktop.png'

export default function Block1 () {
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
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-x-16 px-8 md:px-28 h-full">
        <h3 className="text-white md:text-center text-4xl md:text-7xl font-medium">
          Transforming digital media into onchain economies.
        </h3>

        <div>
          <p className="text-white md:text-center text-2xl md:text-3xl mt-7 md:mt-0 mb-8 md:mb-12">
            Tokenize content. Gamify interaction. Share value across creators, fans, and developers.
          </p>

          <button className="flex items-center gap-x-2 text-white underline underline-offset-2 hover:no-underline text-2xl">
            Join the allowlist <ArrowRight className="text-white w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
