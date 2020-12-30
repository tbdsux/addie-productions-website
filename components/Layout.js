import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <div className="antialiased">
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100;200;300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main>{children}</main>
    </div>
  )
}
