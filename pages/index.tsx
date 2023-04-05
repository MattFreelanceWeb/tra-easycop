import Head from "next/head";
import { Inter } from "next/font/google";
import TelCalculator from "@/components/calculator/TelCalculator";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>TRA-easycop</title>
        <meta
          name="description"
          content="the easiest way to calculate TRA difficulty points"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" h-screen w-screen flex items-center justify-center relative ">
        <TelCalculator />
      </main>
    </>
  );
}
