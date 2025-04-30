import ArrowRight from '@/app/components/icons/arrow-right'

interface Block7Props {
  joinClickHandler: () => void
}

export default function Block7 ({ joinClickHandler }: Block7Props) {
  const handleJoinClick = () => {
    joinClickHandler()
  }

  return (
    <div className="flex flex-col justify-between items-center h-full">
      <div className="flex flex-col justify-center items-center gap-y-8 md:gap-y-14">
        <h4 className="text-center text-4xl md:text-8xl mx-8 md:mx-28 font-bold">
          $CLTR Token
        </h4>

        <p className="text-3xl text-[#4F6071] text-center px-8 md:px-64">
          Creative Layer is powered by $CLTR, the protocol’s native utility token. Get rewarded – earn $CLTR for building, creating, consuming, and participating across the network and it’s ecosystem of applications.
        </p>

        <p className="text-3xl text-[#4F6071] text-center px-8 md:px-64">
          Coming Fall of 2025. Join the community and get rewarded early.
        </p>
      </div>

      <div className="mt-10 md:mt-20 ml-8 md:ml-28">
        <button
          onClick={handleJoinClick}
          className="px-14 py-6 md:py-8 text-xl md:text-2xl bg-black text-white rounded-full flex items-center gap-x-4 hover:cursor-pointer hover:-translate-y-px transition-all duration-300 font-medium mx-auto"
        >
          Get early access <ArrowRight className="w-5 md:w-6 h-5 md:h-6 flex-shrink-0" />
        </button>
      </div>
    </div>
  )
}
