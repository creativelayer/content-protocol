import { useState } from 'react'
import { usePrivy, useWallets } from '@privy-io/react-auth'

import ArrowRight from '../../icons/arrow-right'

interface PrivyModalProps {
  onJoinClick: () => void
}

export default function PrivyModal ({ onJoinClick }: PrivyModalProps) {
  const { login, authenticated, user, connectWallet } = usePrivy()
  const { wallets } = useWallets()
  const [step, setStep] = useState('email') // Track onboarding step

  const handleJoinClick = () => {
    onJoinClick()
    login()
  }

  function MainContent () {
    if (!authenticated) {
      return (
        <button onClick={handleJoinClick} className="w-full bg-black text-white text-xl md:text-3xl py-4 px-6 rounded-full flex items-center justify-center gap-x-4 mt-8 md:mt-18 transition-colors">
          Join the allowlist <ArrowRight className="w-4 h-4" />
        </button>
      )
    }

    // User has authenticated with email
    const email = user?.email?.address || 'No email provided'
    const hasConnectedWallet = wallets.length > 0

    // Handle wallet connection step
    if (step === 'email' && !hasConnectedWallet) {
      return (
        <div className="w-full bg-black text-white text-xl md:text-3xl py-4 px-6 flex items-center justify-center mt-8 md:mt-18">
          <p>Thanks for signing up! Why not also <button onClick={() => connectWallet()}>connect your wallet</button>?</p>
        </div>
      )
    }

    // Both steps completed
    return (
      <div className="w-full bg-black text-white text-xl md:text-3xl py-4 px-6 flex items-center justify-center mt-8 md:mt-18">
          You are all signed up!
        </div>
    )
  }

  return (
    <div>
      <MainContent />
    </div>
  )
}
