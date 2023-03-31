import React, { useState } from "react";
import NextSkill from "./NextSkill";
import PositionBtn from "./PositionBtn";
import ResetArrayBtn from "./ResetArrayBtn";
import SkillsList from "./SkillsList";
import TurnBtn from "./TurnBtn";
import TwistBtn from "./TwistBtn";

type Props = {};

function SkillSet({}: Props) {
  {
    /*state manage the number of turn in a skill and convert it into his numeric value*/
  }
  const [turnNumber, setTurnNumber] = useState<number>(0);
  const [turnNumericValue, setTurnNumericValue] = useState<number>(0);

  {
    /*state manage the number of twist in a skill and convert it into his numeric value*/
  }
  const [toggleCount, setToggleCount] = useState<number>(0);
  const [twistNumber, setTwistNumber] = useState<number>(0);
  const [twistTurnOne, setTwistTurnOne] = useState<number>(0);
  const [twistTurnTwo, setTwistTurnTwo] = useState<number>(0);
  const [twistTurnThree, setTwistTurnThree] = useState<number>(0);
  const [twistTurnFour, setTwistTurnFour] = useState<number>(0);
  const [twistNumericValue, setTwistNumericValue] = useState<number>(0);

  {
    /*state manage the position a skill */
  }
  const [position, setPosition] = useState<string>("");

  const [skillsArray, setSkillsArray] = useState<[{}]>([{}]);

  return (
    <div className="w-full flex flex-col items-center justify-center gap-4 ">
      <div className="w-full flex items-center justify-center gap-4 ">
        <TurnBtn
          turnNumber={turnNumber}
          setTurnNumber={setTurnNumber}
          setTurnNumericValue={setTurnNumericValue}
        />
        <TwistBtn
          toggleCount={toggleCount}
          setToggleCount={setToggleCount}
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
          setTwistNumericValue={setTwistNumericValue}
          turnNumber={turnNumber}
        />
      </div>
      <div className="flex gap-4">
        <PositionBtn title={"tuck"} setPosition={setPosition} />
        <PositionBtn title={"pike"} setPosition={setPosition} />
        <PositionBtn title={"lay"} setPosition={setPosition} />
      </div>
      <div>NumericValue: {turnNumericValue + twistNumericValue}</div>
      <div>position: {position}</div>
      <NextSkill
        setToggleCount={setToggleCount}
        setTurnNumber={setTurnNumber}
        setTurnNumericValue={setTurnNumericValue}
        setTwistNumber={setTwistNumber}
        setTwistTurnOne={setTwistTurnOne}
        setTwistTurnTwo={setTwistTurnTwo}
        setTwistTurnThree={setTwistTurnThree}
        setTwistTurnFour={setTwistTurnFour}
        setTwistNumericValue={setTwistNumericValue}
        setPosition={setPosition}
        position={position}
        turnNumericValue={turnNumericValue}
        twistNumericValue={twistNumericValue}
        skillsArray={skillsArray}
        setSkillsArray={setSkillsArray}
      />
      <div className="w-screen  grid place-items-center">
        <SkillsList skillsArray={skillsArray} setSkillsArray={setSkillsArray} />
      </div>
      <ResetArrayBtn setSkillsArray={setSkillsArray}/>
    </div>
  );
}

export default SkillSet;
