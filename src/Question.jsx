import { useEffect, useState } from "react";
import { FaReact } from "react-icons/fa6";
import Result from "./Result";
const Question = (props) => {
  const data = {
    1: {
      number: 1,
      title: "What does JSX stand for in React?",
      options: {
        one: "Javascript XML",
        two: "Java Syntax Extension",
        three: "JSON XML",
        four: "Javascript Extension",
      },
      rightAns: "Javascript XML",
    },
    2: {
      number: 2,
      title: "How does data flow naturally in React apps?",
      options: {
        one: "From parents to children",
        two: "From children to parents",
        three: "Both ways",
        four: "The developers decides",
      },
      rightAns: "The developers decides",
    },
    3: {
      number: 3,
      title: "Which company invented React?",
      options: {
        one: "Google",
        two: "Apple",
        three: "Facebook",
        four: "Netflix",
      },
      rightAns: "Facebook",
    },
  };

  const [step, setStep] = useState(1);
  const [color, setColor] = useState("bg-[#2B3544]");
  const [rightAnswers, setRightAnswers] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [newStatus, setNewStatus] = useState("welcome");
  const checkAndPass = (e) => {
    const chosenAnswer = e.target.value;
    const currentQ = data[step];
    if (currentQ.rightAns === chosenAnswer) {
      setColor("bg-teal-600");
      setRightAnswers(rightAnswers + 1);
    } else {
      setColor("bg-red-800");
    }
    if (step > 2) {
      setIsFinished(true);
    } else {
      setStep(step + 1);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setColor("bg-[#2B3544]");
    }, 1000);
    console.log(data[step].number);
  }, [step]);

  const sendStatusToApp = (stat) => {
    setNewStatus(stat);
    props.onsetNewStatus(newStatus)
  };

  return (
    <div className="bg-[#1B2432] rounded w-[60%] h-[80%] p-7 shadow-2xl">
      {!isFinished ? (
        <>
          <div className="w-full flex items-center justify-start gap-2">
            <FaReact className="size-10  text-pink-800" />
            <h1 className="font-bold text-3xl text-white">The React Quiz</h1>
          </div>
          <div className="w-[90%] bg-[#2B3544] rounded-full h-4 mt-8 relative">
            {/* <div
              className={`rounded-s-full bg-pink-800 w-[${JSON.stringify(
                data[step].number * 33
              )}%] absolute left-0 top-0 bottom-0 h-full`}
            ></div> */}
          </div>
          <span className="text-white block my-4">
            Question {data[step].number}/3
          </span>
          <div className="text-white">
            <h1 className="font-extrabold text-2xl">{data[step].title}</h1>
            <div className="flex flex-col items-start gap-3 mt-5">
              <button
                onClick={checkAndPass}
                value={data[step].options.one}
                className={`${color} rounded p-3 text-start w-[400px]`}
              >
                {data[step].options.one}
              </button>
              <button
                onClick={checkAndPass}
                value={data[step].options.two}
                className={`${color} rounded p-3 text-start w-[400px]`}
              >
                {data[step].options.two}
              </button>
              <button
                onClick={checkAndPass}
                value={data[step].options.three}
                className={`${color} rounded p-3 text-start w-[400px]`}
              >
                {data[step].options.three}
              </button>
              <button
                onClick={checkAndPass}
                value={data[step].options.four}
                className={`${color} rounded p-3 text-start w-[400px]`}
              >
                {data[step].options.four}
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between my-3">
            <div>
              <span className="text-white">Timer:</span>
            </div>
            <button onClick={()=>setIsFinished(true)} className="text-white bg-pink-800 rounded border-2 border-pink-950 hover:bg-pink-950 px-6 py-4 transition-all duration-150">
              Quit the quiz
            </button>
          </div>
        </>
      ) : (
        <Result onSendStatus={sendStatusToApp} answers={rightAnswers} />
      )}
    </div>
  );
};
export default Question;
