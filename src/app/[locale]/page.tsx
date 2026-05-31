import React from 'react';

import { About } from '@/components/About';
import { BackToTop } from '@/components/BackToTop';
import { Contact } from '@/components/Contact';
import { Experience } from '@/components/Experience';
import { Footer } from '@/components/Footer';
import { Grain } from '@/components/Grain';
import { Hero } from '@/components/Hero';
import { Intro } from '@/components/Intro';
import { Navbar } from '@/components/Navbar';
import { NetworkGraph } from '@/components/NetworkGraph';
import { Projects } from '@/components/Projects';
import { Scanlines } from '@/components/Scanlines';
import { ScrollProgress } from '@/components/ScrollProgress';
import { Skills } from '@/components/Skills';
import { SmoothScroll } from '@/components/SmoothScroll';
import { Vignette } from '@/components/Vignette';

export default function Home() {
    return (
        <>
            <Intro />
            <SmoothScroll />
            <ScrollProgress />

            <Grain />
            <Scanlines />
            <Vignette />
            <NetworkGraph />

            <Navbar />

            <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Experience />
                <Contact />
            </main>

            <Footer />

            <BackToTop />
        </>
    );
}
