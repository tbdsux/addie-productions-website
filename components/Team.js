import Image from 'next/image'
import { team } from '../components/team/data'

export default function Team() {
  return (
    <div className="w-11/12 mx-auto h-screen flex items-center justify-center">
      <div>
        <div className="mb-8 text-center">
          <h3 className="text-5xl font-bold tracking-wide">Who We Are?</h3>
          <p className="text-3xl mt-2 font-light">
            Our team consists of the following amazing people...
          </p>
        </div>
        <div className="w-full grid grid-cols-3 gap-12">
          {team.map((member) => (
            <div className="text-center shadow-xl mx-auto p-8">
              <div className="relative h-48 w-48">
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
                href="#"
                type="button"
                className="py-1 px-3 bg-blue-500 hover:bg-blue-600 text-white tracking-wider mt-3"
              >
                @{member.facebook}
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
