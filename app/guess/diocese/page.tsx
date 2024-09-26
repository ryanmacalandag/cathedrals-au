import Image from "next/image";
import townsville from '@/app/assets/images/townsville-full.jpg';
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative w-full h-full min-h-dvh">
      <div className="w-full max-w-screen-md h-full mx-auto px-4 md:px-20 pb-0 md:pb-20 flex flex-col justify-end text-white">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-left md:text-center text-balance font-light">Question #1</h1>
        <div className="w-full grid grid-cols-12 gap-4 my-4 md:my-10">
          <Link href={"/guess/name"} className="col-span-12 md:col-span-6 w-full flex flex-row overflow-hidden gap-6 justify-between items-center font-sans text-sm font-medium rounded pr-4 bg-teal-800 hover:bg-teal-600 transition duration-300">
            <div className="flex gap-3 items-center">
              <div className="px-5 py-6 flex justify-center items-center font-bold bg-teal-950">A</div>
              First Answer
            </div>
          </Link>
          <Link href={"/guess/diocese"} className="col-span-12 md:col-span-6 w-full flex flex-row overflow-hidden gap-6 justify-between items-center font-sans text-sm font-medium rounded pr-4 bg-teal-800 hover:bg-teal-600 transition duration-300">
            <div className="flex gap-3 items-center">
              <div className="px-5 py-6 flex justify-center items-center font-bold bg-teal-950">B</div>
              Guess the Diocese
            </div>
          </Link>
          <Link href={"/guess/name"} className="col-span-12 md:col-span-6 w-full flex flex-row overflow-hidden gap-6 justify-between items-center font-sans text-sm font-medium rounded pr-4 bg-teal-800 hover:bg-teal-600 transition duration-300">
            <div className="flex gap-3 items-center">
              <div className="px-5 py-6 flex justify-center items-center font-bold bg-teal-950">C</div>
              Guess the Name
            </div>
          </Link>
          <Link href={"/guess/diocese"} className="col-span-12 md:col-span-6 w-full flex flex-row overflow-hidden gap-6 justify-between items-center font-sans text-sm font-medium rounded pr-4 bg-teal-800 hover:bg-teal-600 transition duration-300">
            <div className="flex gap-3 items-center">
              <div className="px-5 py-6 flex justify-center items-center font-bold bg-teal-950">D</div>
              Guess the Diocese
            </div>
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