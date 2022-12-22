import Head from "next/head";
import { Navbar } from "..";
import { Footer } from "../../Sections";
import css from "./Wrapper.module.scss";

export const siteTitle = "Ilhamriz";

function Component({ home, children }) {
  return (
    <>
      <h1 className="hidden">Ilhamriz</h1>
      
      <Head>
        <link rel="icon" href="/Logo.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Frontend Developer who loves to design and develop the web" />
        {/* <meta property="og:site_name" content="bersamaamerta.com" />
        <meta property="og:url" content="bersamaamerta.com" /> */}
        <meta property="og:type" content="article" />
        <meta name="og:title" content={siteTitle} />
        <meta name="author" content="Ilham" />

        <title>{siteTitle}</title>
      </Head>

      <Navbar isHome={home} />

      <main>{children}</main>

      <Footer />
    </>
  );
}

export default Component;
