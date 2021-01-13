import { useState, useEffect } from 'react'
import Image from 'next/image'
import { team } from '../data/members'

export default function Team() {
  const [height, setHeight] = useState('screen')

  useEffect(() => {
    const handleSmallHeight = () => {
      if (window.outerHeight < 600) {
        setHeight('full')
      } else {
        setHeight('screen')
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
      id="team"
      className={`w-11/12 mx-auto h-full md:h-${height} py-14 flex items-center justify-center`}
    >
      <div>
        <div className="mb-8 text-center">
          <h3 className="text-3xl md:text-4xl xl:text-5xl font-bold tracking-wide">
            Who We Are?
          </h3>
          <p className="text-xl md:text-2xl xl:text-3xl mt-2 font-light">
            Our team consists of the following amazing people...
          </p>
        </div>
        <div className="w-5/6 md:w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              className="w-full text-center shadow-2xl mx-auto p-8 rounded-lg"
              key={member.name}
            >
              <div className="relative mx-auto h-32 md:h-40 lg:h-48 w-32 md:w-40 lg:w-48">
                <Image
                  src={`/team/${member.profile}`}
                  alt={member.name}
                  title={member.name}
                  layout="fill"
                  className="rounded-full"
                />
              </div>
              <h4 className="mt-4 text-2xl font-light tracking-wide">
                {member.name}
              </h4>
              <a
                href={`https://www.facebook.com/${member.facebook}`}
                type="button"
                target="_blank"
                className="py-1 px-3 bg-blue-500 hover:bg-blue-600 text-white tracking-wider mt-3 rounded-full"
              >
                fb@{member.facebook}
              </a>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <a
            href="https://web.facebook.com/addieprod/"
            type="button"
            className="text-xl py-2 px-8 bg-yellow-500 hover:bg-main"
          >
            Join us
          </a>
          <p className="text-lg font-light tracking-wide">
            Send us a message from our facebook page...
          </p>
        </div>
      </div>
    </div>
  )
}
