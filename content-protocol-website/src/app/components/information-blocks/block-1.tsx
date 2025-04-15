import ArrowRight from "../icons/arrow-right";

import block1Image from "../../assets/information-blocks/Block_1_Desktop.png";

export default function Block1() {
  return (
    <div
      className="w-full relative"
      style={{
        backgroundImage: `url(${block1Image.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        aspectRatio: '1441/744',
        maxHeight: '1000px'
      }}
    >
      <div className="flex justify-between items-center gap-x-16 px-28 h-full">
        <h3 className="text-white text-center text-7xl">
          Transforming digital media into onchain economies.
        </h3>

        <div>
          <p className="text-white text-center text-3xl mb-12">
            Tokenize content. Gamify interaction. Share value across creators, fans, and developers.
          </p>

          <button className="flex items-center gap-x-2 text-white underline underline-offset-2 hover:no-underline">
            Join the allowlist <ArrowRight className="text-white w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
