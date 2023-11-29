'use client'
import Leaderboard from '@/app/components/Leaderboard';
import Image from 'next/image';
export const revalidate = 0;

export default function Home() {

  return (
    <div className="App">
      <Leaderboard />
      <div className="w-full max-w-6xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-white mt-5 text-center">Follow <a href='https://x.com/dhigh_eth' target="_blank" rel="noopener noreferrer" className='text-blue-500'>@dhigh_eth</a> on Twitter for more</h1>
        <div className="flex justify-center">
          <Image src="/3600.png" alt="DanielHigh" width={256} height={256} className='mt-3 mb-10' />
        </div>
      </div>
    </div>
  )
}
