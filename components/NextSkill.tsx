import React from "react";

type Props = {
  turnNumber: number;
  setTurnNumber: Function;
  setTurnNumericValue: Function;
  twistNumber: number;
  setTwistNumber: Function;
  setTwistNumericValue: Function;
};

function NextSkill({}: Props) {


  return <button className="px-12 py-2 border-2" onClick={()=>{}}>NextSkill</button>;
}

export default NextSkill;
