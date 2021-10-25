import { AppProps } from 'next/dist/next-server/lib/router/router'
import '../styles/globals.scss'
import Layout from '../components/Layout/Layout';
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import { AppWrapper } from '../contexts/context';

const progress = new ProgressBar({
  size: 2,
  color: "#d87d4a",
  className: "page-progress-bar",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppWrapper>
  )
}

export default MyApp
