
import Link from 'next/link';
import Homepage from './component/homepage';
import Navbar from './component/Navbar';


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-white">
      <Navbar />
      <Homepage />
    </main>
    
  )
}


