import React, { useEffect, useRef, useState } from "react";

   {/*WARNING btn  disabled until working */ }

type Props = {
  turnNumber: number;
  setTurnNumber: Function;
  quarterTurnNumericValue: number;
  setQuarterTurnNumericValue: Function;
  quarterTurnNumber:number
  setQuarterTurnNumber:Function
};

function QuarterTurnBtn({
  turnNumber,
  setTurnNumber,
  setQuarterTurnNumericValue,
  quarterTurnNumber,
  setQuarterTurnNumber
}: Props) {

  const btnQuarterTurnRef: any = useRef();

  const incrementQuarterTurn = () => {
    if (quarterTurnNumber > 3) {
      setTurnNumber(turnNumber + 1);
      setQuarterTurnNumber(0);
    } else {
      setQuarterTurnNumber(quarterTurnNumber + 1);
    }
  };

  useEffect(() => {
    const handleKeyPress = (event: any) => {
      if (event.key === "e" || event.key === "E") {
        btnQuarterTurnRef.current.click();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    switch (turnNumber) {
      case 0:
        setQuarterTurnNumericValue( quarterTurnNumber)
        break;
      case 1:
        setQuarterTurnNumericValue( quarterTurnNumber * 10)
        break;
      case 2:
        setQuarterTurnNumericValue( quarterTurnNumber * 100)
        break;
      case 3:
        setQuarterTurnNumericValue( quarterTurnNumber * 1000)
        break;
      case 4:
        setQuarterTurnNumericValue( quarterTurnNumber * 10000)
    }
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [turnNumber, quarterTurnNumber]);

  return (
    <button
      ref={btnQuarterTurnRef}
      onClick={() => {
        incrementQuarterTurn();
      }}
      className="w-40 h-40 border-2 grid place-items-center"
      
      disabled
    >
        {/* disabled until working */ }
      Quarter Turn
      <kbd className="bg-gray-300 px-2">E</kbd>
    </button>
  );
}

export default QuarterTurnBtn;
