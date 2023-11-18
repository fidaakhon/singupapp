'use client'
// import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className=''>
        <h1>This is a Signup app</h1>
        <hr/>
        <h3>Created just for practice purpose</h3>
        <hr/>
        <button className='bg-orange-500 rounded border-blue-300 p-4 my-3' onClick={()=> {
          router.push('/signup')
        }}>
          Go signup page 
        </button>
      </div>
    </main>
  )
}
