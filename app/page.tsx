import Link from "next/link";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import NavSubtle from "./components/NavSubtle";

export default function Home() {
  return (
    <>
      <NavSubtle></NavSubtle>
      <div className="relative w-full h-4/5">
        <div className="w-full max-w-screen-xl h-full mx-auto px-4 md:px-20 pt-4 flex flex-col justify-center gap-6">
          <p></p>
          <div className="text-5xl md:text-5xl lg:text-6xl text-left md:text-center text-balance font-normal tracking-tighter pr-12 italic"><span className="italic font-extralight">How well </span>do you know the Catholic Cathedrals in Australia?</div>
          <div className="w-full flex flex-col md:flex-row justify-center gap-4">
            <Link href={"/quiz"} className="w-fit md:w-fit flex flex-row gap-3 md:gap-6 hover:gap-8 justify-between items-center uppercase font-sans text-sm text-yellow-50 font-bold tracking-widest px-8 md:px-8 py-5 md:py-5 rounded-full bg-teal-800 hover:bg-teal-600 transition duration-300">
              Start quiz
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
        {/* <div className="absolute -z-10 bottom-0 left-0 w-full h-full max-h-[95%] bg-gradient-to-t from-stone-400 via-stone-400 to-transparent"></div> */}
      </div>
    </>
  );
}