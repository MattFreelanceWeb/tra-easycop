import React, { useEffect, useRef, useState } from "react";

type Props = {
  toggleCount:number,
  setToggleCount:Function,
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
  setTwistNumericValue: Function;
  turnNumber: number;
};

function TwistBtn({
  toggleCount,
  setToggleCount,
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
  setTwistNumericValue,
  turnNumber,
}: Props) {

  const btnTwistRef:any = useRef()
  let incrementTwist = () => {
    setToggleCount(toggleCount + 1);
  };

  useEffect(() => {
    const handleKeyPress = (event:any) => {
      if (event.key === 'z' || event.key === 'Z') {
        btnTwistRef.current.click();
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    switch (turnNumber) {
      case 0:
        setTwistNumber(toggleCount);
        // console.log("twistTurnZéro:", twistNumber);
        setTwistNumericValue(twistNumber / 10);
        break;
      case 1:
        setTwistTurnOne(toggleCount - twistNumber);
        // console.log("twistTurnOne:", twistTurnOne);
        setTwistNumericValue(twistNumber + twistTurnOne);
        break;
      case 2:
        setTwistTurnTwo(toggleCount - twistTurnOne - twistNumber);
        // console.log("twistturntwo:", twistTurnTwo);
        setTwistNumericValue(twistTurnTwo + (twistNumber + twistTurnOne) * 10);
        break;
      case 3:
        setTwistTurnThree(
          toggleCount - twistTurnTwo - twistTurnOne - twistNumber
        );
        // console.log("twistTurnThree:", twistTurnThree);
        setTwistNumericValue(
          twistTurnThree +
            (twistTurnTwo + (twistNumber + twistTurnOne) * 10) * 10
        );
        break;
      case 4:
        setTwistTurnFour(
          toggleCount -
            twistTurnThree -
            twistTurnTwo -
            twistTurnOne -
            twistNumber
        );
        // console.log("twistTurnFour:", twistTurnFour);
        setTwistNumericValue(
          twistTurnFour +
            (twistTurnThree +
              (twistTurnTwo + (twistNumber + twistTurnOne) * 10) * 10) * 10)
        break;
    }
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [
    turnNumber,
    toggleCount,
    twistNumber,
    twistTurnOne,
    twistTurnTwo,
    twistTurnThree,
    twistTurnFour,
  ]);

  return (
    <button
      ref={btnTwistRef}
      onClick={() => {
        incrementTwist();
      }}
      className="w-40 h-40 border-2 grid place-items-center"
    >
      Twist
      <kbd className="bg-gray-300 px-2">Z</kbd>
    </button>
  );
}

export default TwistBtn;
