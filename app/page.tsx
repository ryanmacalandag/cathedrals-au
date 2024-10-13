import Link from "next/link";
import NavSubtle from "./components/NavSubtle";
// import CathedralsGallery from "./components/gallery/CathedralsGallery";
import { BiGridAlt, BiRightArrowAlt } from "react-icons/bi";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <NavSubtle></NavSubtle>
      <section className="relative w-full h-4/5">
        <div className="w-full max-w-screen-xl h-full mx-auto px-4 md:px-20 py-12 flex flex-col justify-center gap-6">
          <p></p>
          <div className="text-4xl sm:text-5xl lg:text-6xl text-center md:text-center text-balance text-orange-950 font-normal tracking-tighter italic"><span className="italic font-extralight">How well </span>do you know the Catholic Cathedrals in Australia?</div>
          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-2 md:gap-4">
            <Link href={"/cathedrals"} className="w-fit md:w-fit flex flex-row gap-3 md:gap-3 justify-between items-center uppercase font-sans text-xs sm:text-sm text-teal-900 font-bold tracking-widest px-6 lg:px-8 py-3 lg:py-5 border-2 border-teal-900 rounded-full bg-transparent hover:bg-teal-600/10 transition duration-300">
              <BiGridAlt></BiGridAlt>
              Browse Cathedrals
            </Link>
            <Link href={"/quiz"} className="w-fit md:w-fit flex flex-row gap-3 md:gap-3 justify-between items-center uppercase font-sans text-sm text-yellow-50 font-bold tracking-widest px-6 lg:px-8 py-3 lg:py-5 rounded-full bg-teal-800 hover:bg-teal-600 transition duration-300">
              Start quiz
              <BiRightArrowAlt></BiRightArrowAlt>
            </Link>
          </div>
        </div>
        {/* <div className="absolute -z-10 bottom-0 left-0 w-full h-full max-h-[95%] bg-gradient-to-t from-stone-400 via-stone-400 to-transparent"></div> */}
      </section>

      {/* <section id="browser" className="w-full max-w-screen-xl mx-auto px-4 md:px-10 xl:px-16">
        <CathedralsGallery></CathedralsGallery>
      </section> */}

      <Footer></Footer>

    </>
  );
}