import { calc } from "@/utils/function/calc";
import React, { useState } from "react";
import BtnCount from "./btn/BtnCount";
import BtnPosition from "./btn/BtnPosition";
import BtnResetSkill from "./btn/BtnResetSkill";

type Props = {};

function Calculator({}: Props) {
  const [quarterTurnCount, setQuarterTurnCount] = useState<number>(0)
  const [halfTwistCount, setHalfTwistCount] = useState<number>(0)
  const [position, setPosition] = useState('tuck')
  const [numericValue, setnumericValue] = useState<number>(150000)

  return (
    <>
      <div className="grid grid-cols-2 place-items-center gap-4">
        <BtnCount title={" quarter turn"} setKey={'a'} count={quarterTurnCount} setCount={setQuarterTurnCount}  incrementNumber={1}/>
        <BtnCount title={"half twist"} setKey={'z'} count={halfTwistCount} setCount={setHalfTwistCount} incrementNumber={1}/>
        <BtnCount title={'full turn'} setKey={'e'} count={quarterTurnCount} setCount={setQuarterTurnCount} incrementNumber={4}/>
        <BtnCount title={"full twist"} setKey={'r'} count={halfTwistCount} setCount={setHalfTwistCount} incrementNumber={2}/>
      </div>
      <div className="grid grid-cols-3 gap-4 place-items-center">
        <BtnPosition title={'tuck'} setKey={'1'} setPosition={setPosition}/>
        <BtnPosition title={'pike'} setKey={'2'} setPosition={setPosition}/>
        <BtnPosition title={'straigt'} setKey={'3'} setPosition={setPosition}/>
      </div>
      <div>quarter turn count : {quarterTurnCount}</div> 
      <div>half twist count : {halfTwistCount}</div>
      <div> position : {position}</div>
      <div>difficulty :  {calc(numericValue, position) }</div>
      <div>
        <BtnResetSkill title='reset' setKey="0" setQuarterTurnCount={setQuarterTurnCount} setHalfTwistCount={setHalfTwistCount} setPosition={setPosition} />
      </div>
    </>
  );
}

export default Calculator;
