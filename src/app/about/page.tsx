import React from 'react'
import Aboutsection from '../../components/Aboutsection'
import Herosection from '@/components/Herosection'
import { Navbar } from '@/components/Navbar'

const page = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] px-12 py-4">
      <Navbar></Navbar>
      <div className="container max-auto px-12 mt-20 py-4">
        <Aboutsection></Aboutsection>
      </div>
    </main>
  )
}

export default page
