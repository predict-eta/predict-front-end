import { ReactElement, ReactNode, useEffect, useState } from 'react'
import Loader from '@/components/loader'
import '@/styles/globals.css'
import createEmotionCache from '@/theme/createEmotionCache'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { SnackbarProvider } from 'notistack'
import { SnackbarUtilsConfigurator } from '@/utils/notistack/Snackbar'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Router from 'next/router'
import ThemeProvider from 'theme/custom.theme'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

export interface AppPropsWithLayout extends AppProps {
  emotionCache?: EmotionCache
  Component: NextPageWithLayout
}

export default function App({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppPropsWithLayout) {
  const [isLoading, setIsLoading] = useState(false)

  const getLayout = Component.getLayout ?? ((page) => page)

  useEffect(() => {
    const handleStart = () => setIsLoading(true)
    const handleComplete = () => setIsLoading(false)

    Router.events.on('routeChangeStart', handleStart)
    Router.events.on('routeChangeComplete', handleComplete)
    Router.events.on('routeChangeError', handleComplete)

    return () => {
      Router.events.off('routeChangeStart', handleStart)
      Router.events.off('routeChangeComplete', handleComplete)
      Router.events.off('routeChangeError', handleComplete)
    }
  })

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider>
        <SnackbarProvider
          maxSnack={1}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <SnackbarUtilsConfigurator />
          {isLoading && <Loader />}
          {getLayout(<Component {...pageProps} />)}
        </SnackbarProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}
