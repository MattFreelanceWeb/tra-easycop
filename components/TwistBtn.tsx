import React, { useEffect, useState } from "react";

type Props = {
  twistNumber: number;
  setTwistNumber: Function;
  twistTurnOne: number;
  setTwistTurnOne: Function;
  twistTurnTwo: number;
  setTwistTurnTwo: Function;
  twistTurnThree: number;
  setTwistTurnThree: Function;
  twistTurnFour: number;
  setTwistTurnFour: Function;
  twistNumericValue: number;
  setTwistNumericValue: Function;
  turnNumber: number;
};

function TwistBtn({
  twistNumber,
  setTwistNumber,
  twistTurnOne,
  setTwistTurnOne,
  twistTurnTwo,
  setTwistTurnTwo,
  twistTurnThree,
  setTwistTurnThree,
  twistTurnFour,
  setTwistTurnFour,
  twistNumericValue,
  setTwistNumericValue,
  turnNumber,
}: Props) {
  const [toggleCount, setToggleCount] = useState<number>(0);

  let incrementTwist = () => {
    setToggleCount(toggleCount + 1);
  };

  useEffect(() => {
    switch (turnNumber) {
      case 0:
        setTwistNumber(toggleCount);
        console.log("twistnumber:", twistNumber);
        setTwistNumericValue(twistNumber / 10);
        break;
      case 1:
        setTwistTurnOne(toggleCount - twistNumber);
        console.log("twistTurnOne:", twistTurnOne);
        setTwistNumericValue(twistNumber / 10 + twistTurnOne);
        break;
      case 2:
        setTwistTurnTwo((toggleCount - twistTurnOne - twistNumber) * 10);
        console.log("twistturntwo:", twistTurnTwo);
        setTwistNumericValue(twistTurnTwo + (twistNumber / 10 + twistTurnOne));
        break;
      case 3:
        setTwistTurnThree(
          (toggleCount - twistTurnTwo / 10 - twistTurnOne - twistNumber) * 100
        );
        console.log("twistTurnThree:", twistTurnThree);
        setTwistNumericValue(
          twistTurnThree + (twistTurnTwo + (twistNumber / 10 + twistTurnOne))
        );
        break;
      case 4:
        setTwistTurnFour( (toggleCount - (twistTurnThree/100) - (twistTurnTwo/10) - twistTurnOne - twistNumber) * 1000)
        setTwistNumericValue(twistTurnFour + (twistTurnThree + (twistTurnTwo + (twistNumber / 10 + twistTurnOne))))
        break;
    }
  }, [toggleCount, twistNumber, twistTurnOne, twistTurnTwo, twistTurnThree ,twistTurnFour]);

  return (
    <button
      onClick={() => {
        incrementTwist();
      }}
      className="w-40 h-40 border-2 grid place-items-center"
    >
      Twist
    </button>
  );
}

export default TwistBtn;
