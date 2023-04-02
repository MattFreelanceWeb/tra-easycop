import Head from "next/head";
import { Inter } from "next/font/google";
import SkillSet from "@/components/SkillSet";
import Calculator from "@/components/calculator/Calculator";
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
      <main className=" flex flex-col items-center justify-center gap-10 py-12 px-4">
        <h1>let&apos;s begin a new routine:</h1>
        {/* <SkillSet/> */}
        {/* <Calculator/> */}
        <TelCalculator/>
      </main>
    </>
  );
}
