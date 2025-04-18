'use client'

import ArrowDown from './icons/arrow-down'

interface GetInTouchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GetInTouchModal ({ isOpen, onClose }: GetInTouchModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl px-10 md:px-24 py-14 md:py-28 w-full max-w-[901px] max-h-[930px] relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-gray-400 hover:text-gray-600"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {/* Modal content */}
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-black">Get in Touch</h2>

          <p className="text-[#4F6071] mt-6 md:mt-9 text-xl md:text-3xl">
            We&apos;re building Creative Layer alongside the most forward-thinking teams in crypto. If you think you would be a good fit, feel free to reach out.
          </p>

          <div className="mt-10 md:mt-14 flex flex-col items-center">
            <div className="">
              <ArrowDown className="w-6 h-12 md:w-12 md:h-20" />
            </div>

            <a
              href="mailto:hello@creativelayer.com"
              className="text-xl md:text-3xl font-medium text-black underline hover:text-gray-800 transition-colors mt-8 md:mt-16"
            >
              hello@creativelayer.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
