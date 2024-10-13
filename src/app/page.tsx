"use client";
import Image from "next/image";
import KeyItemLog from "~/components/KeyItemLogClientOnly";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container flex flex-col items-center justify-center gap-6 px-4">
        <Image src="/logo.png" alt="logo" width={300} height={300} />
        <article>
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Poke Logbook
          </h1>
          <p>
            Take notes of the location for your keyitems so everybody remembers
            it.
          </p>
        </article>
        <div className="grid grid-cols-1 gap-4 md:gap-8">
          <KeyItemLog />
        </div>
      </div>
    </main>
  );
}
