import { useEffect } from 'react'
import TagManager from 'react-gtm-module'
import '../style/tailwind.css'

function AddieProductions({ Component, pageProps }) {
  // initialize GTAG Manager
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-NRQRHP2' })
  }, [])

  return <Component {...pageProps} />
}

export default AddieProductions
