
import Link from 'next/link';
import Homepage from './component/homepage';
import Navbar from './component/Navbar';
import About from './component/about';


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-white">
      <Navbar />
      <Homepage />
      <About />
    </main>
    
  )
}


