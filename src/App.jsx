import { FaReact } from "react-icons/fa6";
import Question from "./Question";
import { useState } from "react";
const App = () => {
  const [status, setStatus] = useState('welcome');

  return (
    <div className="bg-[#151D2B] flex flex-col items-center w-full h-[100vh] justify-center">
      {status === 'welcome' ? (
        <div className="flex flex-col items-center justify-center w-full h-[100vh] gap-10 ">
          <div className="w-full flex items-center justify-center gap-2">
            <FaReact className="size-10 text-pink-800" />
            <h1 className="font-extrabold text-6xl text-white">
              The React Quiz
            </h1>
          </div>
          <h2 className="font-bold text-3xl text-white">
            Welcome to the react quiz!
          </h2>
          <p className="text-white">15 questions to test your React mastery</p>
          <button
            onClick={() => {
              setStatus('question');
            }}
            className="text-white bg-pink-800 rounded border-2 border-pink-950 hover:bg-pink-950 px-6 py-4 transition-all duration-150"
          >
            Lets get started
          </button>
        </div>
      ) : (
        ""
      )}
      {status === 'question' ? <Question onsetNewStatus={(data)=>setStatus(data)} /> : ""}
    </div>
  );
};

export default App;
