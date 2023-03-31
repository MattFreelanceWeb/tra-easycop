import React, { useEffect, useState } from "react";

type Props = {
  turnNumber: number;
  setTurnNumber: Function;
  setTurnNumericValue: Function;
};

function TurnBtn({ turnNumber, setTurnNumber, setTurnNumericValue }: Props) {
  const incrementTurn = () => {
    if (turnNumber >= 4) {
      setTurnNumber(4)
    } else {
      setTurnNumber(turnNumber + 1 );
    }

  };

  useEffect(() => {

    switch (turnNumber) {
      case 0:
        setTurnNumericValue(0);
        break;
      case 1:
        setTurnNumericValue(40)
        break
      case 2: 
        setTurnNumericValue(800)
        break
      case 3:
        setTurnNumericValue(12000)
        break
      case 4:
        setTurnNumericValue(160000)
    }

  }, [turnNumber])
  
  return (
    <button
      onClick={() => {incrementTurn()}}
      className="w-40 h-40 border-2 grid place-items-center"
    >
      Turn
    </button>
  );
}

export default TurnBtn;
