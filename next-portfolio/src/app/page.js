import Image from "next/image";
import Head from "next/head";
import "./globals.css";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Next.js Portfolio</title>
        <meta name = "description" content = "Let's make a portfolio with Next.js" />
        <link rel = "icon" href = "/favicon.ico" />
      </Head>

      <h1>Next.js Portfolio</h1>
    </div>
  );
}
