import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import NavBar from '../components/NavBar'
import { wrapper } from '../store/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NavBar>
      <Component {...pageProps} />
    </NavBar>)
}

export default wrapper.withRedux(MyApp)
