import React from 'react'
import { calcTotalDifficulty } from '@/utils/function/totalCalc'

type Props = {routine:any[]}

function TotalRoutine({routine}: Props) {
  return (
    <div className="w-full p-4 flex items-end justify-between translate-y-8">
    <span className="">total: </span>{" "}
    <span className="text-4xl">
      {calcTotalDifficulty(routine).toFixed(1)}
    </span>{" "}
  </div>  )
}

export default TotalRoutine