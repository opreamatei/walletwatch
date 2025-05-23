import React from 'react'
import Navbar from '@/components/Navbar'
import Slideshow from '@/components/Slideshow'

const Tutorial = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#f9fdf0]">
        <Slideshow />
      </div>
    </div>

  )
}

export default Tutorial