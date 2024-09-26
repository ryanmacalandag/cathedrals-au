import Image from "next/image";
import townsville from '@/app/assets/images/townsville-full.jpg';
import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <div className="relative w-full h-full min-h-dvh">
      <div className="w-full max-w-screen-xl h-full mx-auto px-4 md:px-20 pb-0 md:pb-20 flex flex-col justify-end text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-left md:text-center text-balance font-light">How well do you know the Catholic Cathedrals in Australia?</h1>
        <div className="w-full flex flex-col md:flex-row justify-center gap-4 my-4 md:my-10">
          <Link href={"/guess/name"} className="w-full md:w-fit flex flex-row gap-6 justify-between items-center uppercase font-sans text-sm font-bold tracking-widest px-8 py-6 rounded bg-teal-800 hover:bg-teal-600 transition duration-300">
            Guess the Name
            <ArrowRightIcon />
          </Link>
          <Link href={"/guess/diocese"} className="w-full md:w-fit flex flex-row gap-6 justify-between items-center uppercase font-sans text-sm font-bold tracking-widest px-8 py-6 rounded bg-teal-800 hover:bg-teal-600 transition duration-300">
            Guess the Diocese
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
      <div className="absolute -z-10 bottom-0 left-0 w-full h-full max-h-[80%] bg-gradient-to-t from-neutral-950 via-neutral-950 to-transparent"></div>
      <div className="absolute -z-20 top-0 left-0 w-full h-full brightness-75 saturate-50">
        <Image
          src={townsville}
          alt="masthead"
          fill
          sizes="(min-height: 900px) 50vw, 100vw"
          style={{
            objectFit: 'cover', // cover, contain, none
          }}
        />
      </div>
    </div>
  );
}