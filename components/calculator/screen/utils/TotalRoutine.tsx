import React from 'react'
import { calcTotalDifficulty } from '@/utils/function/totalCalc'

type Props = {routine:any[]}

function TotalRoutine({routine}: Props) {
  return (
    <div className="w-full h-full grid  gap-16 px-4 p-4 ">
    <span className="">total: </span>{" "}
    <span className="text-4xl">
      {calcTotalDifficulty(routine).toFixed(1)}
    </span>{" "}
  </div>  )
}

export default TotalRoutine