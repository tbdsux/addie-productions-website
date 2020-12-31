import Image from 'next/image'

export default function Showcase() {
  return (
    <div className="h-screen w-full flex items-center justify-center relative overflow-hidden">
      <div className="w-5/6 mx-auto flex items-center justify-between">
        <div className="z-30">
          <h1 className="text-8xl font-bold">
            Addie <br /> Productions
          </h1>
          <p className="text-4xl mt-8 font-light tracking-wide">
            Best graphic designers for <br />
            your perfect business needs.
          </p>
        </div>
        <div className="w-1/2 h-3/4 absolute z-10 bottom-12 right-12">
          <Image
            src="/images/showcase.svg"
            alt="Logo Design - Addie Productions"
            layout="fill"
            objectFit="cover"
            objectPosition="right bottom"
          />
        </div>
      </div>
    </div>
  )
}
