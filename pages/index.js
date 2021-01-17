import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Header from '../components/Header'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import Portfolio from '../components/Portfolio'
import Modal from '../components/portfolio/Modal'
import Team from '../components/Team'

import { mainServices } from '../data/services'

export default function Home() {
  const [modal, setModal] = useState(false)
  const [image, setImage] = useState({})
  const [height, setHeight] = useState('screen')

  useEffect(() => {
    const handleSmallHeight = () => {
      if (window.outerHeight < 500) {
        setHeight('full py-14')
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
    <Layout>
      <Head>
        <title>Addie Productions | Official Website</title>
        {/* meta tags */}
        <meta
          name="description"
          content="Best graphic designers for building and making designs perfectly fit for your and your business."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Addie Productions | Official Website"
        />
        <meta
          property="og:description"
          content="Best graphic designers for building and making designs perfectly fit for your and your business."
        />
        <meta property="og:image" content="/logo.jpg" />
        <meta property="og:url" content="https://addie-productions.ml" />
        <meta property="og:site_name" content="Addie Productions" />
      </Head>

      {/* modal -> to be used by portfolio */}
      {modal ? <Modal image={image} setModal={setModal} /> : null}

      {/* header - showcase */}
      <Header />

      <hr />

      <div className="w-5/6 mx-auto">
        {/* showcase 2 */}
        <div
          className={`h-${height} relative flex flex-col md:flex-row items-center justify-center`}
        >
          <div className="relative w-full sm:w-4/5 md:w-2/5 h-96">
            <Image src="/images/showcase2.svg" layout="fill" />
          </div>
          <div className="w-full sm:w-4/5 md:w-3/5 md:ml-12">
            <h3 className="text-4xl sm:text-5xl xl:text-6xl font-bold tracking-wider">
              Let's fit together what's best for your business
            </h3>
            <p className="text-lg sm:text-xl xl:text-2xl font-light tracking-wide mt-4">
              We specialize in graphics design and we can help in improving the
              layouts, resources and designs and styles for you or your
              business.
            </p>
          </div>
        </div>

        <hr />

        {/* services section */}
        <div id="services" className="my-10">
          <div className="mb-10">
            <h3 className="underline text-2xl md:text-5xl text-yellow-500 font-bold tracking-wide">
              We design...
            </h3>
          </div>
          <div className="xl:w-5/6 mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 items-center">
              {mainServices.map((service) => (
                <div
                  key={mainServices.indexOf(service)}
                  className="text-center shadow-2xl rounded-lg"
                >
                  <div className="h-64 w-full relative">
                    <Image src={`/services/${service.image}`} layout="fill" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl md:text-3xl font-light">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-base md:text-lg font-light">
                      {service.description}
                    </p>
                    <a
                      href="https://web.facebook.com/addieprod/"
                      type="button"
                      className="mt-4 py-2 px-10 bg-main opacity-80 hover:opacity-100 rounded-full text-lg tracking-wide"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="mx-auto w-full md:w-4/5 flex flex-col sm:flex-row items-center justify-between mt-8 shadow-2xl p-4 rounded-lg">
              <div className="w-full md:w-1/2 pl-10 mb-3 md:mb-0">
                <h3 className="text-3xl font-bold">and More...</h3>
                <ul className="list-disc ml-10 mt-3">
                  <li className="my-1 text-xl font-light tracking-wide">
                    Restaurant Menu
                  </li>
                  <li className="my-1 text-xl font-light tracking-wide">
                    Business Cards
                  </li>
                  <li className="my-1 text-xl font-light tracking-wide">
                    Icons
                  </li>
                  <li className="my-1 text-xl font-light tracking-wide">
                    Application UI
                  </li>
                  <li className="my-1 text-xl font-light tracking-wide">
                    etc...
                  </li>
                </ul>
                <a
                  href="https://web.facebook.com/addieprod/"
                  type="button"
                  className="mt-4 py-2 px-10 bg-main opacity-80 hover:opacity-100 rounded-full text-lg tracking-wide"
                >
                  Contact Us
                </a>
              </div>
              <div className="h-80 w-full md:w-1/2 relative">
                <Image
                  src="/services/others.svg"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="right"
                />
              </div>
            </div>
          </div>
        </div>

        <hr />

        {/* showcase 3 */}
        <div
          className={`h-${height} relative flex flex-col md:flex-row items-center justify-center`}
        >
          <div className="w-full sm:w-4/5 md:w-3/5 md:mr-12">
            <h3 className="text-4xl sm:text-5xl xl:text-6xl font-bold tracking-wider">
              We will do the work while you wait
            </h3>
            <p className="text-lg sm:text-xl xl:text-2xl font-light tracking-wide mt-4">
              We start working as soon as we finish setting up the preparations
              to be needed and you can just wait while we build the design for
              you.
            </p>
          </div>
          <div className="relative w-full sm:w-4/5 md:w-2/5 h-96">
            <Image src="/images/showcase3.svg" layout="fill" />
          </div>
        </div>

        <hr />

        <div
          className={`h-${height} relative flex flex-col md:flex-row items-center justify-center`}
        >
          <div className="relative w-full sm:w-4/5 md:w-2/5 h-96">
            <Image src="/images/showcase4.svg" layout="fill" />
          </div>
          <div className="w-full sm:w-4/5 md:w-3/5 md:ml-12">
            <h3 className="text-4xl sm:text-5xl xl:text-6xl font-bold tracking-wider">
              Expect the best output from us
            </h3>
            <p className="text-lg sm:text-xl xl:text-2xl font-light tracking-wide mt-4">
              We provide and produce the best output possible in any means
              possible befitting for your perfect business.
            </p>
          </div>
        </div>

        <hr />

        {/* portfolio section */}
        <div id="portfolio" className="my-10">
          <div className="mb-10">
            <h3 className="underline text-2xl xl:text-5xl text-yellow-500 font-bold tracking-wide">
              Here are outputs we have made...
            </h3>
          </div>
          <Portfolio setModal={setModal} setImage={setImage} />
        </div>
      </div>

      {/* cta  */}
      <CTA />

      <hr />

      {/* who we are section */}
      <Team />

      {/* footer */}
      <Footer />
    </Layout>
  )
}
