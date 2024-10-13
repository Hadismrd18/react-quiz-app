import { useState } from "react";

const Result = (props) => {
  const [newStatus, setNewStatus] = useState("welcome");
  const changeStatus = ()=>{
    props.onSendStatus(newStatus)
  }
  return (
    <div className="w-full h-full gap-4 flex flex-col items-center justify-center">
      <h1 className="text-white font-extrabold">Quiz completed!</h1>
      <p className="text-white">Correct answers: {props.answers}/3</p>
      <button onClick={changeStatus} className="text-white bg-pink-800 rounded border-2 border-pink-950 hover:bg-pink-950 px-6 py-4 transition-all duration-150">
        try again
      </button>
    </div>
  );
};

export default Result;
