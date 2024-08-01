import "../global.scss";
import type { AppProps } from "next/app";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {IntlProvider} from 'react-intl'
config.autoAddCss = false;

export default function App({ Component, pageProps }: AppProps) {
  const locale = "en";

  return <IntlProvider locale={locale} messages={{}}><Component {...pageProps} /></IntlProvider>;
}
