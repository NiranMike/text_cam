import React from 'react'
import Hero from '@/src/components/Hero'
import About from '@/src/components/About'
import Contact from '@/src/components/Contact'

interface Props {}

const HomePage: React.FC<Props> = () => {

  return (
    <div className='h-screen  snap-mandatory snap-y z-10'>
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