import React from 'react'

type Props = {title:string, showRoutine:boolean, setShowRoutine:Function}

function BtnTelClose({title, showRoutine, setShowRoutine}: Props) {
  return (
    <button
    onClick={() => {
      setShowRoutine(!showRoutine);
    }}
    className="  py-2 px-12 flex items-center justify-center gap-1  rounded-lg bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800 text-white backdrop-blur-lg shadow-md uppercase"
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