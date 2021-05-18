import { AppProps } from 'next/dist/next-server/lib/router/router'
import '../styles/globals.scss'
import Layout from '../components/Layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
