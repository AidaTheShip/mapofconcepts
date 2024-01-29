"use client";
import Link from 'next/link';
import Homepage from './component/homepage';
import Navbar from './component/Navbar';
import About from './component/about';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-white">
      <Navbar />
      <Parallax pages={2} style={{ top: '0', left: '0', right: '0', bottom: '0' }}>
        <ParallaxLayer
          offset={0}
          speed={1}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Homepage />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={0.5}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <About />
        </ParallaxLayer>
      </Parallax>
    </main>
  );
}
