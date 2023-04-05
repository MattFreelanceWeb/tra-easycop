import React from "react";

type Props = {title:string};

function BtnTelShowRoutine({title}: Props) {
  return (
    <button
      className={`w-full h-full flex flex-col justify-center items-center gap-1 rounded-lg text-white bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800 backdrop-blur-lg shadow-md `}
    >
      {title}
    </button>
  );
}

export default BtnTelShowRoutine;
