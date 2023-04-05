import React from 'react'

type Props = {title:string, showRoutine:boolean, setShowRoutine:Function}

function BtnTelClose({title, showRoutine, setShowRoutine}: Props) {
  return (
    <button
    onClick={() => {
      setShowRoutine(!showRoutine);
    }}
    className=" absolute top-4 right-4 py-2 px-12 flex items-center justify-center gap-1  rounded-lg bg-gradient-to-r from-rose-500 via-red-400 to-red-500 text-white backdrop-blur-lg shadow-md uppercase"
  >
  {title}
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
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  </button>
  )
}

export default BtnTelClose