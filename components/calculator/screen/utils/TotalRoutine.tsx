import React from 'react'
import { calcTotalDifficulty } from '@/utils/function/totalCalc'

type Props = {routine:any[]}

function TotalRoutine({routine}: Props) {
  return (
    <div className="flex items-center justify-center gap-10 p-4 ">
    <span className="">total: </span>{" "}
    <span className="text-4xl">
      {calcTotalDifficulty(routine).toFixed(1)}
    </span>{" "}
  </div>  )
}

export default TotalRoutine