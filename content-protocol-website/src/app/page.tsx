'use client'

import { useState } from 'react'
import { PrivyProvider } from '@privy-io/react-auth'

import Hero from './components/hero/hero'
// import FeaturedImageCarousel from './components/global/carousel/featured-image-carousel'
// import Block1 from './components/information-blocks/block-1'
import Block2 from './components/information-blocks/block-2'
// import Block3 from './components/information-blocks/block-3'
// import Block4 from './components/information-blocks/block-4'
import Block5 from './components/information-blocks/block-5'
import Block6 from './components/information-blocks/block-6'
import Block7 from './components/information-blocks/block-7'
// import Block8 from './components/information-blocks/block-8'
// import Block9 from './components/information-blocks/block-9'
// import Block10 from './components/information-blocks/block-10'
import Block11 from './components/information-blocks/block-11'
import Footer from './components/footer/footer'
import AllowListModal from './components/AllowListModal'
import GetInTouchModal from './components/GetInTouchModal'

export default function Home () {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isGetInTouchModalOpen, setIsGetInTouchModalOpen] = useState(false)

  const handleJoinClick = () => {
    setIsModalOpen(true)
  }

  return (
    <PrivyProvider
      appId="cm9ngjrb902fpjr0ny82zn4v3"
      config={{
        loginMethods: ['email'],
        appearance: {
          theme: 'light',
          accentColor: '#676FFF',
          // customize further as needed
        },
        // optional additional configuration
        embeddedWallets: {
          createOnLogin: 'users-without-wallets',
        },
      }}
    >
      <div className="flex flex-col min-h-screen pb-10 md:pb-20 w-full">
        <Hero joinClickHandler={() => setIsModalOpen(true)} />

        {/* <section className="mt-20 md:mt-40">
          <FeaturedImageCarousel />
        </section> */}

        {/* <section className="mt-20 md:mt-40">
          <Block1 joinClickHandler={() => setIsModalOpen(true)} />
        </section> */}



        {/* <section className="mt-20 md:mt-40">
          <Block3 />
        </section> */}

        {/* <section className="mt-20 md:mt-40">
          <Block4 />
        </section> */}

        <section className="mt-20 md:mt-40">
          <Block5 />
        </section>

        <section className="mt-20 md:mt-40">
          <Block2 joinClickHandler={() => setIsModalOpen(true)} />
        </section>

        <section className="mt-20 md:mt-40">
          <Block11 />
        </section>

        <section className="mt-20 md:mt-40">
          <Block6 joinClickHandler={() => setIsModalOpen(true)} />
        </section>

        <section className="mt-20 md:mt-40">
          <Block7 joinClickHandler={() => setIsModalOpen(true)} />
        </section>

        {/* <section className="mt-20 md:mt-40">
          <Block8 getInTouchClickHandler={() => setIsGetInTouchModalOpen(true)} />
        </section> */}

        {/* <section className="mt-20 md:mt-40">
          <Block9 />
        </section> */}

        {/* <section className="mt-20 md:mt-40">
          <Block10 joinClickHandler={() => setIsModalOpen(true)} />
        </section> */}

        <section className="mt-20 md:mt-40">
          <Footer />
        </section>

        <AllowListModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleJoinClick}
        />

        <GetInTouchModal
          isOpen={isGetInTouchModalOpen}
          onClose={() => setIsGetInTouchModalOpen(false)}
        />
      </div>
    </PrivyProvider>
  )
}
