import Head from "next/head";
import { Inter } from "next/font/google";
import { useState } from "react";
import TurnBtn from "@/components/TurnBtn";
import TwistBtn from "@/components/TwistBtn";

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
      <main className="h-screen flex flex-col items-center justify-center gap-10 ">
        <h1>let&apos;s begin a new routine:</h1>
        <div className="flex items-center justify-center gap-8">
          <TurnBtn/>
          <TwistBtn/>
        </div>
        <div>
          <h2>count:</h2>
        </div>
      </main>
    </>
  );
}
