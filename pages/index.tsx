import type { NextPage } from "next";
import Head from "next/head";
import Landing from "../components/pages/landing";
import Hero from "../public/assets/cofffee-hero.jpeg";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>COFFFEE SHOP</title>
        <meta name="description" content="coffee first, questions later" />
        <meta property="og:title" content="COFFFEE SHOP" />
        <meta property="og:image" content={Hero.src} />
        <meta
          property="og:description"
          content="coffee first, questions later"
        />
        <meta property="og:url" content="https://cofffee-shop.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Landing />
    </>
  );
};

export default Home;
