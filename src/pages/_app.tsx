/**
 * Styling.
 */
import { GlobalStyles } from '../styles/GlobalStyles'

/**
 * Component.
 */
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
