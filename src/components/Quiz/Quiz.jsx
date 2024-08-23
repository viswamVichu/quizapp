import { useEffect, useState } from "react";
import QuestionsData from "./Quiz.json"; // Ensure this path is correct;
console.log(QuestionsData);
console.log(QuestionsData.length);

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showDis, setShowDis] = useState(false);

  const handleEvent = (selOpt) => {
    if (selOpt === QuestionsData[current].correctOptions) {
      setScore((prev) => prev + 1);
    }
    if (current < QuestionsData.length - 1) {
      setCurrent((prev) => prev + 1);
      console.log(current);
      console.log(setCurrent.length);
    } else {
      setShowDis(true);
    }
  };
  const restart = () => {
    setCurrent(0);
    setScore(0);
    setShowDis(false);
  };

  return (
    <div className='bg-gray-800 h-screen w-full flex flex-col justify-center items-center '>
      {showDis ? (
        <div className='bg-orange-500 px-5 py-2 rounded-lg w-[300px] text-center'>
          <h1 className='mb-3 font-bold text-2xl'>
            Your Score is {score}/{QuestionsData.length}
          </h1>
          <button
            className='bg-blue-700 px-4 py-1 rounded-xl text-xl font-medium '
            onClick={restart}
          >
            Restart
          </button>
        </div>
      ) : (
        <div className='bg-white mt-5 p-3 text-center rounded-2xl w-[500px]'>
          <h2 className='text-2xl font-medium mb-2'>Question {current + 1}</h2>
          <p className='text-xl font-medium mb-2'>
            {QuestionsData[current].questions}
          </p>
          <div className=''>
            {QuestionsData[current].options.map((option, index) => (
              <button
                className='bg-red-500 m-2 px-2 py-1 rounded-xl'
                onClick={() => {
                  handleEvent(option);
                }}
                key={index}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Quiz;
