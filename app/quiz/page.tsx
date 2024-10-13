// import Quiz from "../components/quiz/Quiz";

import NavSubtle from "../components/NavSubtle";
import { getRandomCathedrals } from "../assets/utils/getRandomCathedrals";
import Quiz from "../components/quiz/Quiz";
import Footer from "../components/Footer";

export default function Page() {

  const randCathedrals = getRandomCathedrals();

  return (
    <>
      <NavSubtle></NavSubtle>
      <div className="w-full">
        <div className="w-full max-w-screen-md mx-auto px-4 md:px-20 py-12 flex justify-center items-center">
          <Quiz {...randCathedrals} />
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}