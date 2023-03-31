import React, { useState } from "react";
import NextSkill from "./NextSkill";
import TurnBtn from "./TurnBtn";
import TwistBtn from "./TwistBtn";

type Props = {};

function SkillSet({}: Props) {

  const [turnNumber, setTurnNumber] = useState<number>(0);
  const [turnNumericValue, setTurnNumericValue] = useState<number>(0);

  const [twistNumber, setTwistNumber] = useState<number>(0);
  const [twistTurnOne, setTwistTurnOne] = useState<number>(0)
  const [twistTurnTwo, setTwistTurnTwo] = useState<number>(0)
  const [twistTurnThree, setTwistTurnThree] = useState<number>(0)
  const [twistTurnFour, setTwistTurnFour] = useState<number>(0)
  const [twistNumericValue, setTwistNumericValue] = useState<number>(0);

  const [skillsArray, setSkillsArray] = useState<[number]>([0]);

  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 ">
      <div className="w-full flex items-center justify-center gap-4 ">
        <TurnBtn
          turnNumber={turnNumber}
          setTurnNumber={setTurnNumber}
          setTurnNumericValue={setTurnNumericValue}
        />
        <TwistBtn
          twistNumber={twistNumber}
          setTwistNumber={setTwistNumber}
          twistTurnOne={twistTurnOne}
          setTwistTurnOne={setTwistTurnOne}
          twistTurnTwo={twistTurnTwo}
          setTwistTurnTwo={setTwistTurnTwo}
          twistTurnThree={twistTurnThree}
          setTwistTurnThree={setTwistTurnThree}
          twistTurnFour={twistTurnFour}
          setTwistTurnFour={setTwistTurnFour}
          twistNumericValue={twistNumericValue}
          setTwistNumericValue={setTwistNumericValue}
          turnNumber={turnNumber}
        />
      </div>
      <div>turnNumber: {turnNumber}</div>
      <div>NumericValue: {turnNumericValue + twistNumericValue}</div>
      <NextSkill
        twistNumber={twistNumber}
        setTwistNumber={setTwistNumber}
        setTwistNumericValue={setTwistNumericValue}
        turnNumber={turnNumber}
        setTurnNumber={setTurnNumber}
        setTurnNumericValue={setTurnNumericValue}
      />
    </div>
  );
}

export default SkillSet;
