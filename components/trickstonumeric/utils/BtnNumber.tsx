import React from "react";

type Props = { number: number; setNumber: Function; maxNumber: number };

function BtnNumber({ number, setNumber, maxNumber }: Props) {
  const incrementNumber = () => {
    if (number < maxNumber && number >= 0) {
      setNumber(number + 1);
    }
  };

  const decrementNumber = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  return (
    <div className="w-20 h-20 rounded-md shadow-lg grid grid-rows-3 place-items-center">
      {number < maxNumber && (
        <button onClick={() => incrementNumber()}>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        </button>
      )}
       <span className="text-xl">{number}</span>
      {number > 0 && (
        <button onClick={() => decrementNumber()}>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      )}
    </div>
  );
}

export default BtnNumber;
