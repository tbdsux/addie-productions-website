import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Showcase() {
  const [height, setHeight] = useState('')

  useEffect(() => {
    const handleSmallHeight = () => {
      if (window.outerWidth > 768) {
        if (window.outerHeight < 450) {
          setHeight('full py-32')
        } else {
          setHeight('screen')
        }
      } else {
        if (window.outerHeight < 600) {
          setHeight('full py-32')
        } else {
          setHeight('screen')
        }
      }
    }

    window.addEventListener('resize', handleSmallHeight)
    window.addEventListener('load', handleSmallHeight)

    return () => {
      window.removeEventListener('resize', handleSmallHeight)
      window.removeEventListener('load', handleSmallHeight)
    }
  })

  return (
    <div
      className={`h-${height} w-full flex items-center justify-center relative overflow-hidden`}
    >
      <div className="w-5/6 mx-auto">
        <div className="z-30">
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold">
            Addie <br className="hidden sm:block" /> Productions
          </h1>
          <p className="text-2xl md:text-3xl xl:text-4xl mt-8 font-light tracking-wide">
            Best graphic designers for <br className="hidden sm:block" />
            your perfect business needs.
          </p>
        </div>
        <div className="w-full sm:w-1/2 h-64 sm:h-3/4 mx-auto relative sm:absolute z-30 md:z-10 sm:bottom-12 sm:right-0">
          <Image
            src="/images/showcase.svg"
            alt="Logo Design - Addie Productions"
            layout="fill"
            objectPosition="right bottom"
          />
        </div>
      </div>
    </div>
  )
}
