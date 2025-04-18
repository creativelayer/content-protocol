import { usePrivy } from '@privy-io/react-auth'

import ArrowRight from '../../icons/arrow-right'

interface PrivyModalProps {
  onJoinClick: () => void
}

export default function PrivyModal ({ onJoinClick }: PrivyModalProps) {
  const { login, authenticated, user } = usePrivy()

  const handleJoinClick = () => {
    onJoinClick()
    login()
  }

  const getLoggedInUser = () => {
    if (authenticated) {
      if (user?.email && user?.email?.address) {
        return user?.email?.address
      }

      if (user?.wallet && user?.wallet?.address) {
        return user?.wallet?.address
      }

      return null
    }

    return null
  }

  return (
    <div>
      {!authenticated ? (
        <button onClick={handleJoinClick} className="w-full bg-black text-white text-xl md:text-3xl py-4 px-6 rounded-full flex items-center justify-center gap-x-4 mt-8 md:mt-18 transition-colors">
          Join the allowlist <ArrowRight className="w-4 h-4" />
        </button>
      ) : (
        <div className="w-full bg-black text-white text-xl md:text-3xl py-4 px-6 flex items-center justify-center mt-8 md:mt-18">
          You are already signed up with {getLoggedInUser()}
        </div>
      )}
    </div>
  )
}
