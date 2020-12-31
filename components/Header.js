import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Showcase from './Showcase'

export default function Header() {
  const [menu, showMenu] = useState(true)

  useEffect(() => {
    const handleResizeMenu = () => {
      if (window.outerWidth < 1024) {
        showMenu(false)
      } else {
        showMenu(true)
      }
    }

    window.addEventListener('resize', handleResizeMenu)
    window.addEventListener('load', handleResizeMenu)

    return () => {
      window.removeEventListener('resize', handleResizeMenu)
      window.removeEventListener('load', handleResizeMenu)
    }
  })

  return (
    <header>
      <nav className="fixed w-full z-40 bg-white">
        <div className="w-11/12 sm:w-5/6 mx-auto py-4 flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-auto flex items-center justify-between">
            {/* header > logo */}
            <Link href="/">
              <a className="flex items-center">
                <Image
                  src="/logo.jpg"
                  alt="Addie Productions Logo"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <h1 className="ml-2 text-xl tracking-wide">
                  Addie Productions
                </h1>
              </a>
            </Link>
            <button
              className="h-8 w-8 lg:hidden"
              onClick={() => showMenu(!menu)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          {/* header > main menu */}
          {menu ? (
            <div className="flex flex-col md:flex-row items-center text-lg">
              <ul className="flex flex-col md:flex-row font-light">
                <li className="px-4 tracking-wider hover:text-main my-1 md:my-0">
                  <>
                    <Link href="#services">
                      <a>Services</a>
                    </Link>
                  </>
                </li>
                <li className="px-4 tracking-wider hover:text-main my-1 md:my-0">
                  <>
                    <Link href="#portfolio">
                      <a>Portfolio</a>
                    </Link>
                  </>
                </li>
                <li className="px-4 tracking-wider hover:text-main my-1 md:my-0">
                  <>
                    <Link href="#team">
                      <a>About Us</a>
                    </Link>
                  </>
                </li>
              </ul>
              <a
                href="https://web.facebook.com/addieprod/"
                type="button"
                className="mt-2 md:mt-0 md:ml-8 py-2 px-8 bg-main hover:bg-yellow-400 text-white rounded-full"
              >
                Work With Us
              </a>
            </div>
          ) : null}
        </div>
      </nav>

      <Showcase />
    </header>
  )
}
