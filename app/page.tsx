'use client'
import Leaderboard from '@/app/components/Leaderboard';

export default function Home() {

  return (
    <div className="App">
      <Leaderboard />
      <div className="w-full max-w-6xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-white mt-5 mb-5 text-center">Follow <a href='https://x.com/dhigh_eth' target="_blank" rel="noopener noreferrer" className='text-blue-500'>@dhigh_eth</a> on Twitter for more</h1>
        </div>
    </div>
  )
}
