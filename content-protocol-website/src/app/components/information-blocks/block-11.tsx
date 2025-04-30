'use client'

import ArrowRight from '../icons/arrow-right'

export default function Block11 () {
  return (
      <div className="flex gap-x-8">
        <div className="space-y-16 w-1/2">
          <h3 className="text-4xl md:text-8xl px-8 md:px-28 font-bold">
            Used by Top Builders
          </h3>

          <p className="text-[#4F6071] font-medium text-xl md:text-3xl pl-8 md:pl-28 w-full">
            Build faster with onchain, app-ready content from the world&apos;s top creators. Creative Layer makes it easy to add verified creator media tokens into your apps.
          </p>
        </div>

        <div className="w-1/2">
          <ul className="space-y-5 md:space-y-10 mt-4 md:mt-0 pl-8 md:pl-0 [&>li]:before:content-['•'] [&>li]:before:text-[#4F6071] [&>li]:before:mr-2 md:[&>li]:before:content-none">
            <li className="text-[#4F6071] font-medium text-xl md:text-3xl md:pr-28 flex items-center gap-x-2">
              <ArrowRight className="hidden md:block w-5 md:w-6 h-5 md:h-6 flex-shrink-0" /> Amplify your reach through proven creator influence.
            </li>

            <li className="text-[#4F6071] font-medium text-xl md:text-3xl md:pr-28 flex items-center gap-x-2">
              <ArrowRight className="hidden md:block w-5 md:w-6 h-5 md:h-6 flex-shrink-0" /> Tap into thriving creator communities to drive adoption for your app.
            </li>

            <li className="text-[#4F6071] font-medium text-xl md:text-3xl md:pr-28 flex items-center gap-x-2">
              <ArrowRight className="hidden md:block w-5 md:w-6 h-5 md:h-6 flex-shrink-0" /> Connect with the Creative Layer network of consumers, creators, and builders.
            </li>

            <li className="text-[#4F6071] font-medium text-xl md:text-3xl md:pr-28 flex items-center gap-x-2">
              <ArrowRight className="hidden md:block w-5 md:w-6 h-5 md:h-6 flex-shrink-0" /> Earn $CLTR tokens and share in the value you help create.
            </li>
          </ul>
        </div>
      </div>
  )
}
