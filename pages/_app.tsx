import { Amplify } from "aws-amplify";
import type { AppProps } from "next/app";
import awsExports from "../src/aws-exports";
import "../styles/globals.css";

import "@aws-amplify/ui-react/styles.css";

Amplify.configure({
  ...awsExports,
  aws_appsync_authenticationType: "AMAZON_COGNITO_USER_POOLS",
});

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
