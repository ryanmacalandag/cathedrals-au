import { Cathedrals, CathedralType } from "@/app/data/cathedrals";
import arrayShuffle from "array-shuffle";

const MAX_QUIZ_ITEMS = 10;
const MAX_WRONG_OPTIONS = 3;

export type QuestionType =
  {
    question: string;
    options: CathedralType[];
  };

export function getRandomCathedrals() {
  let quiz: QuestionType[] = [];

  const allShuffled = arrayShuffle(Cathedrals);
  const shuffledCorrectItems = allShuffled.slice(0,MAX_QUIZ_ITEMS);
  shuffledCorrectItems.map( (correct) => {
    const tempQuestion:QuestionType = { question: '', options: [] };
    const tempCorrect = { ...correct };
    const wrongitems = arrayShuffle(allShuffled.filter( (item) => item.name !== correct.name )).slice(0,MAX_WRONG_OPTIONS);
    tempCorrect.iscorrect = true;
    const createoptions = [ tempCorrect, ...wrongitems ]
    tempQuestion.question = correct.img;
    tempQuestion.options = arrayShuffle(createoptions);
    quiz = [tempQuestion, ...quiz];
  })
  // console.log(quiz)
  // console.dir(quiz, { depth: null });
  console.log('Array: ' + Array.isArray(quiz) + ' --- quiz returned by getRandomCathedrals.ts')
  return quiz;
  // output array of MAX_QUIZ_ITEMS questions each with MAX_WRONG_OPTIONS with one choice is_correct each question 
}