import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Modal(props) {
  const image = props.image
  const modalContent = useRef(null)

  const closeModal = (e) => {
    // close modal if clicked outside it :)
    if (!modalContent.current.contains(e.target)) {
      props.setModal(false)
    }
  }

  return (
    <div
      onClick={closeModal}
      className="fixed bg-bland h-screen w-full flex items-center overflow-scroll justify-center z-50"
    >
      <div
        ref={modalContent}
        className={`bg-white ${
          image.position === 'landscape' ? `w-4/5` : `w-1/2`
        } grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-4 items-center`}
      >
        <div
          className={`${
            image.position === 'landscape'
              ? `w-full mx-auto h-64 md:h-96`
              : `w-full mx-auto h-80 md:h-112`
          } relative sm:border-r`}
        >
          <Image
            src={`/portfolio/${image.filename}`}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="w-full py-4 text-center md:text-left xl:px-8">
          <h5 className="text-xl md:text-2xl xl:text-3xl">
            {image.description}
          </h5>
          <div className="mt-4">
            <Link href={`/portfolio/${image.filename}`}>
              <a
                target="_blank"
                className="py-2 px-2 md:px-6 bg-gray-300 tracking-wide hover:bg-gray-400"
              >
                View Full Image
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
