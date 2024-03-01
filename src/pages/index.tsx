import { useEffect } from 'react';
import { Collaboration } from '@/sections/collaboration';
import { Hero } from '../sections/Hero';
import Head from 'next/head'
import { SamePage } from '@/sections/samepage';
import { StreamlinedExperience } from '@/sections/streamlined-experience';
import { Features } from '@/sections/features';
import { MoreFeatures } from '@/sections/more-features';

export default function Home() {
  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    <div data-scroll-container>
      <Head>
        <title>Home</title>
        <meta name="description" content="scroll animation with framer" />
      </Head>
      <main data-scroll-section>
        <Hero />
        <div className='relative z-10 w-full overflow-x-clip' data-scroll-section>
          <Collaboration />
          <SamePage />
          <StreamlinedExperience />
          <Features />
          <MoreFeatures />
        </div>
      </main>
    </div>
  );
}