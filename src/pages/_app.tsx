import '../../styles/globals.scss'
import type { AppProps } from 'next/app'
import { GlobalContextProvider } from '../provider/context'
//import { CatechismProvider } from '../provider/context'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalContextProvider>
      <Component {...pageProps} />
    </GlobalContextProvider> 
  )
}
