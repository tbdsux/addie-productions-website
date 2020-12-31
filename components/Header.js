import Image from 'next/image'
import Link from 'next/link'
import Showcase from './Showcase'

export default function Header() {
  return (
    <header>
      <nav className="fixed w-full z-40 bg-white">
        <div className="w-5/6 mx-auto py-4 flex items-center justify-between">
          {/* header > logo */}
          <Link href="/">
            <a className="flex items-center">
              <Image
                src="/logo.jpg"
                alt="Addie Productions Logo"
                width={64}
                height={64}
                className="rounded-full"
              />
              <h1 className="ml-2 text-xl tracking-wide">Addie Productions</h1>
            </a>
          </Link>
          {/* header > main menu */}
          <div className="flex items-center text-lg">
            <ul className="flex font-light">
              <li className="px-4 tracking-wider hover:text-main">
                <a href="#">Services</a>
              </li>
              <li className="px-4 tracking-wider hover:text-main">
                <a href="#">Portfolio</a>
              </li>
              <li className="px-4 tracking-wider hover:text-main">
                <a href="#">About Us</a>
              </li>
            </ul>
            <a
              href="#"
              type="button"
              className="ml-8 py-2 px-8 bg-main hover:bg-yellow-400 text-white rounded-full"
            >
              Work With Us
            </a>
          </div>
        </div>
      </nav>

      <Showcase />
    </header>
  )
}
