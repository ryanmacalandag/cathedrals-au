import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import NavSubtle from "./components/NavSubtle";

export default function Home() {
  return (
    <>
      <NavSubtle></NavSubtle>
      <div className="relative w-full h-full min-h-dvh">
        <div className="w-full max-w-screen-xl h-full mx-auto px-4 md:px-20 pt-12 flex flex-col justify-center">
          <div className="text-4xl md:text-5xl lg:text-6xl text-left md:text-center text-balance font-light">How well do you know the Catholic Cathedrals in Australia?</div>
          <div className="w-full flex flex-col md:flex-row justify-center gap-4 my-4 md:my-10">
            <Link href={"/quiz"} className="w-full md:w-fit flex flex-row gap-6 justify-between items-center uppercase font-sans text-sm text-stone-100 font-bold tracking-widest px-6 md:px-8 py-5 md:py-5 rounded bg-teal-800 hover:bg-teal-600 transition duration-300">
              Guess the Cathedral Photo
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
        {/* <div className="absolute -z-10 bottom-0 left-0 w-full h-full max-h-[95%] bg-gradient-to-t from-stone-50 via-stone-50 to-transparent"></div> */}
      </div>
    </>
  );
}