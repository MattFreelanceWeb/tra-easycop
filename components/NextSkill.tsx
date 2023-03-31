import React from "react";

type Props = {
  setToggleCount:Function,
  setTurnNumber: Function;
  setTurnNumericValue: Function;
  setTwistNumber: Function;
  setTwistTurnOne: Function;
  setTwistTurnTwo: Function;
  setTwistTurnThree: Function;
  setTwistTurnFour: Function;
  setTwistNumericValue: Function;
  setPosition: Function;
  position: string;
  turnNumericValue: number;
  twistNumericValue: number;
  skillsArray:[{}],
  setSkillsArray:Function
};

function NextSkill({
  setTurnNumber,
  setTurnNumericValue,
  setToggleCount,
  setTwistNumber,
  setTwistTurnOne,
  setTwistTurnTwo,
  setTwistTurnThree,
  setTwistTurnFour,
  setTwistNumericValue,
  setPosition,
  position,
  turnNumericValue,
  twistNumericValue,
  skillsArray,
  setSkillsArray
}: Props) {

  const reset = () =>{
    setTurnNumber(0)
    setTurnNumericValue(0)
    setToggleCount(0)
    setTwistNumber(0)
    setTwistTurnOne(0)
    setTwistTurnTwo(0)
    setTwistTurnThree(0)
    setTwistTurnFour(0)
    setTwistNumericValue(0)
    setPosition('')
  }

  const addSkills = () => {
    let numericSkills:number = twistNumericValue + turnNumericValue

    let skills:Object= {
      numericSkills,
      position
    }

    {/* ensure that you don't have an empty object in your array*/ }
    if(numericSkills !== 0){
      skillsArray.push(skills)
    }

  }

  return (
    <button className="px-12 py-2 border-2" onClick={() => {addSkills(),reset()}}>
      NextSkill
    </button>
  );
}

export default NextSkill;
