import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import Header from '../components/Header'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import Portfolio from '../components/Portfolio'
import Modal from '../components/portfolio/Modal'
import Team from '../components/Team'

export default function Home() {
  const [modal, setModal] = useState(false)
  const [image, setImage] = useState({})

  return (
    <Layout>
      <Head>
        <title>Addie Productions</title>
      </Head>

      {/* modal -> to be used by portfolio */}
      {modal ? <Modal image={image} setModal={setModal} /> : null}

      {/* header - showcase */}
      <Header />

      <hr />

      <div className="w-5/6 mx-auto">
        {/* showcase 2 */}
        <div className="h-screen relative flex items-center justify-center">
          <div className="relative w-2/5 h-96">
            <Image src="/images/showcase2.svg" layout="fill" />
          </div>
          <div className="w-3/5 ml-12">
            <h3 className="text-6xl font-bold tracking-wider">
              Let's fit together what's best for your business
            </h3>
            <p className="text-2xl font-light tracking-wide mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
              magni vitae unde reprehenderit temporibus! Repudiandae.
            </p>
          </div>
        </div>

        <hr />

        {/* services section */}
        <div className="my-10">
          <div className="mb-10">
            <h3 className="underline text-5xl text-yellow-500 font-bold tracking-wide">
              We design...
            </h3>
          </div>
          <div className="w-5/6 mx-auto">
            <div className="grid grid-cols-2 gap-8 items-center">
              <div className="text-center shadow-lg">
                <div className="h-64 w-full relative">
                  <Image src="/services/logo-design.svg" layout="fill" />
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-light">Business Logo</h3>
                  <p className="mt-2 text-lg font-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repudiandae accusamus nostrum excepturi consectetur possimus
                    cum.
                  </p>
                  <a
                    href="#"
                    type="button"
                    className="mt-4 py-2 px-10 bg-main opacity-80 hover:opacity-100 rounded-full text-lg tracking-wide"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
              <div className="text-center shadow-lg">
                <div className="h-64 w-full relative">
                  <Image src="/services/package.svg" layout="fill" />
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-light">Product Package</h3>
                  <p className="mt-2 text-lg font-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repudiandae accusamus nostrum excepturi consectetur possimus
                    cum.
                  </p>
                  <a
                    href="#"
                    type="button"
                    className="mt-4 py-2 px-10 bg-main opacity-80 hover:opacity-100 rounded-full text-lg tracking-wide"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
              <div className="text-center shadow-lg">
                <div className="h-64 w-full relative">
                  <Image src="/services/banner.svg" layout="fill" />
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-light">
                    Advertisements & Banner
                  </h3>
                  <p className="mt-2 text-lg font-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repudiandae accusamus nostrum excepturi consectetur possimus
                    cum.
                  </p>
                  <a
                    href="#"
                    type="button"
                    className="mt-4 py-2 px-10 bg-main opacity-80 hover:opacity-100 rounded-full text-lg tracking-wide"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
              <div className="text-center shadow-lg">
                <div className="h-64 w-full relative">
                  <Image src="/services/website.svg" layout="fill" />
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-light">Website UI</h3>
                  <p className="mt-2 text-lg font-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Repudiandae accusamus nostrum excepturi consectetur possimus
                    cum.
                  </p>
                  <a
                    href="#"
                    type="button"
                    className="mt-4 py-2 px-10 bg-main opacity-80 hover:opacity-100 rounded-full text-lg tracking-wide"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className="mx-auto w-4/5 flex items-center justify-between  mt-8 shadow-lg">
              <div className="w-1/2 pl-10">
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
                  href="#"
                  type="button"
                  className="mt-4 py-2 px-10 bg-main opacity-80 hover:opacity-100 rounded-full text-lg tracking-wide"
                >
                  Contact Us
                </a>
              </div>
              <div className="h-80 w-1/2 relative">
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
        <div className="h-screen relative flex items-center justify-center">
          <div className="w-3/5 mr-12">
            <h3 className="text-6xl font-bold tracking-wider">
              We will do the work while you wait
            </h3>
            <p className="text-2xl font-light tracking-wide mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
              magni vitae unde reprehenderit temporibus! Repudiandae.
            </p>
          </div>
          <div className="relative w-2/5 h-96">
            <Image src="/images/showcase3.svg" layout="fill" />
          </div>
        </div>

        <hr />

        <div className="h-screen relative flex items-center justify-center">
          <div className="relative w-2/5 h-96">
            <Image src="/images/showcase4.svg" layout="fill" />
          </div>
          <div className="w-3/5 ml-12">
            <h3 className="text-6xl font-bold tracking-wider">
              Expect the best output from us
            </h3>
            <p className="text-2xl font-light tracking-wide mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti
              magni vitae unde reprehenderit temporibus! Repudiandae.
            </p>
          </div>
        </div>

        <hr />

        {/* portfolio section */}
        <div className="my-10">
          <div className="mb-10">
            <h3 className="underline text-5xl text-yellow-500 font-bold tracking-wide">
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
