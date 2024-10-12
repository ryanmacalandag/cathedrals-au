// import Quiz from "../components/quiz/Quiz";

import { getRandomCathedrals } from "../components/quiz/getRandomCathedrals";
import Quiz from "../components/quiz/Quiz";

export default function Page() {

  const randCathedrals = getRandomCathedrals();

  return (
    <div className="relative w-full h-full min-h-dvh ">
      <div className="w-full max-w-screen-md h-full max-h-dvh mx-auto px-4 md:px-20 pb-10 pt-28 sm:pt-24 lg:pt-40 flex justify-center items-center">
        <Quiz {...randCathedrals} />
      </div>
    </div>
  );
}