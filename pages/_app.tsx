import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import NavBar from '../components/NavBar'
import BottomMessage from '../components/BottomMessage'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NavBar>
      <Component {...pageProps} />
      <BottomMessage />
    </NavBar>)
}

export default MyApp
