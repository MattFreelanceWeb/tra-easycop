import React, { useState } from "react";
import Btn from "./btn/Btn";

type Props = {};

function Calculator({}: Props) {
  const [quarterTurnCount, setQuarterTurnCount] = useState<number>(0)
  const [halfTwistCount, setHalfTwistCount] = useState<number>(0)

  return (
    <>
      <div className="flex gap-4">
        <Btn title={" quarter turn"} setKey={'a'} count={quarterTurnCount} setCount={setQuarterTurnCount} />
        <Btn title={"half twist"} setKey={'z'} count={halfTwistCount} setCount={setHalfTwistCount}/>
      </div>
      <div>quarter turn count : {quarterTurnCount}</div> 
       <div>half twist count :{halfTwistCount}</div> 
    </>
  );
}

export default Calculator;
