import '../../styles/globals.scss'
import type { AppProps } from 'next/app'
import { GlobalContextProvider } from '../provider/context'
import { SessionProvider  } from 'next-auth/react'

export default function App({ 
  Component, pageProps: {session, ...pageProps}}: AppProps) {

  return (
    <SessionProvider session={pageProps.session}>
      <GlobalContextProvider>
        <Component {...pageProps} />
      </GlobalContextProvider>
      </SessionProvider>
  )
}
