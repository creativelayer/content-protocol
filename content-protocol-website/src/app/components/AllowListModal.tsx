'use client'

import PrivyModal from './global/privy-modal/privy-modal'

interface AllowListModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (email: string) => void;
}

export default function AllowListModal ({ isOpen, onClose }: AllowListModalProps) {
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
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-black">Join Allowlist</h2>

          <p className="text-[#4F6071] mt-6 md:mt-9 text-xl md:text-3xl">
            Be the first to access $CONTENT token. Enter your email below to join the allowlist and secure your spot. You will be notified when the $CONTENT token is nearing launch.
          </p>

          <PrivyModal onJoinClick={() => onClose()} />
        </div>
      </div>
    </div>
  )
}
