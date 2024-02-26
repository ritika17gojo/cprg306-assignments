// Home.js
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen  flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full bg-white/90 backdrop-blur-lg  p-8 text-center ">
        <h1 className="text-4xl font-bold">CPRG 306: Web Development 2</h1>
        <p className="text-xl font-light">Assignments</p>
        <div className="space-y-4">
          <Link href="/week-2" className="block py-2 px-6  text-black font-bold text-lg leading-tight  transition  duration-300 transform hover:-translate-y-1">
            Assignments for Week 2
          </Link>
          <Link href="/week-3" className="block py-2 px-6  text-black font-bold text-lg leading-tight  transition  duration-300 transform hover:-translate-y-1">
            Assignments for Week 3
          </Link>
          <Link href="/week-4" className="block py-2 px-6  text-black font-bold text-lg leading-tight  transition  duration-300 transform hover:-translate-y-1">
            Assignments for Week 4
          </Link>
          <Link href="/week-5" className="block py-2 px-6  text-black font-bold text-lg leading-tight  transition  duration-300 transform hover:-translate-y-1">
            Assignments for Week 5
          </Link>
        </div>
      </div>
    </main>
  );
}