import React from 'react'
import HeroSection from '../components/HeroSection'
import ShopSection from '../components/ShopSection'
import StyleCarousel from '../components/StyleCarousel'

const Home = () => {
  return (
    <>
      <HeroSection />
      <section id="about" className="bg-white px-4 py-20 text-zinc-900 dark:bg-black dark:text-white">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold tracking-tight">The Emma Studio Story</h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-300">
            Emma Studio started with one idea: effortless pieces that work as hard as you do.
            We design in Accra, source responsibly, and ship worldwide.
            Every collection is limited — when it's gone, it's gone.
          </p>
        </div>
      </section>
      <ShopSection />
      <StyleCarousel />
    </>
  )
}

export default Home