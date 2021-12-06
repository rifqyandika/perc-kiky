import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import SEO from "../next-seo.config";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
