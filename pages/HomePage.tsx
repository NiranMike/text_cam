import React from 'react'
import Hero from '@/src/components/Hero'
import About from '@/src/components/About'
import Contact from '@/src/components/Contact'

interface Props {}

const HomePage: React.FC<Props> = () => {

  return (
    <div className='h-screen overflow-y-scroll scrollbar-thin md:scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#28272A]  overflow-hidden snap-mandatory snap-y z-0'>
      <section className='snap-start' id='/'>
          <Hero />
        </section>
        <section className='snap-start' id='about'>
          <About />
        </section>
        <section className='snap-start' id='contact'>
          <Contact />
        </section>
    </div>
  )
}

export default HomePage