import type { NextPage } from "next";
import Head from "next/head";
import Contact from "../../components/pages/contact";

const ContactPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>COFFFEE | Contact</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Contact />
    </>
  );
};

export default ContactPage;