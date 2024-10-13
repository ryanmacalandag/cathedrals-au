// import Quiz from "../components/quiz/Quiz";

import CathedralsGallery from "../components/gallery/CathedralsGallery";
import NavSubtle from "../components/NavSubtle";

export default function Page() {

  return (
    <>
      <NavSubtle></NavSubtle>
      <div className="relative w-full">
        <div className="w-full max-w-screen-2xl mx-auto px-4 md:px-20 py-12 flex flex-col gap-4 justify-center items-center">
          <div className="w-full flex flex-col">
            <h2 className="text-4xl tracking-tighter">Cathedrals Gallery</h2>
          </div>
          <CathedralsGallery></CathedralsGallery>
        </div>
      </div>
    </>
  );
}