import Image from "next/image";
import townsville from '@/app/assets/images/townsville-full.jpg';
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative w-full h-full min-h-dvh">
      <div className="w-full max-w-screen-md mx-auto px-4 md:px-20 pb-10 pt-28 sm:pt-24 lg:pt-40 flex flex-col items-center justify-center gap-4 text-white">
        <div className="w-full flex flex-row justify-between items-center bg-orange-200/60 rounded text-black overflow-hidden">
          <div className="text-xl pl-4 md:pl-6">Question 1/10</div>
          <h1 className="text-xs text-orange-200 font-sans uppercase px-4 md:px-6 py-4 md:py-6 bg-orange-950">Guess the Cathedral&apos;s Name</h1>
        </div>
        <Image
          src={townsville}
          alt="question #1"
          style={{
            objectFit: 'cover',
          }}
          className="aspect-video rounded"
        />
        <div className="w-full grid grid-cols-12 gap-2 md:gap-4 my-2">
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
    </div>
  );
}