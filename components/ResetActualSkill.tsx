import React, { useEffect, useRef } from "react";

type Props = {
  setToggleCount: Function;
  setTurnNumber: Function;
  setTurnNumericValue: Function;
  setTwistNumber: Function;
  setTwistTurnOne: Function;
  setTwistTurnTwo: Function;
  setTwistTurnThree: Function;
  setTwistTurnFour: Function;
  setTwistNumericValue: Function;
  setQuarterTurnNumber:Function;
  setQuarterNumericValue:Function
  setPosition: Function;
};

function ResetActualSkill({
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
  setQuarterTurnNumber,
  setQuarterNumericValue
}: Props) {
  const btnResetRef:any = useRef();

  const reset = () => {
    setTurnNumber(0);
    setTurnNumericValue(0);
    setToggleCount(0);
    setTwistNumber(0);
    setTwistTurnOne(0);
    setTwistTurnTwo(0);
    setTwistTurnThree(0);
    setTwistTurnFour(0);
    setTwistNumericValue(0);
    setQuarterTurnNumber(0)
    setQuarterNumericValue(0)
    setPosition("");
  };

  useEffect(() => {
    const handleKeyPress = (event: any) => {
      if (event.key === "0") {
        btnResetRef.current.click();
      }
    };
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <button
      ref={btnResetRef}
      onClick={() => {
        reset();
      }}
      className="px-12 py-2 border-2 grid place-items-center"
    >
      Reset Skill<kbd className="bg-gray-300 px-2">0</kbd>
    </button>
  );
}

export default ResetActualSkill;
