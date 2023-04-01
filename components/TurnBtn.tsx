import React, { useEffect, useRef } from "react";

type Props = {
  turnNumber: number;
  setTurnNumber: Function;
  setTurnNumericValue: Function;
};

function TurnBtn({ turnNumber, setTurnNumber, setTurnNumericValue }: Props) {

  const btnTurnRef:any = useRef()

  const incrementTurn = () => {
    if (turnNumber >= 4) {
      setTurnNumber(4)
    } else {
      setTurnNumber(turnNumber + 1 );
    }

  };

  useEffect(() => {
    const handleKeyPress = (event:any) => {
      if (event.key === 'a' || event.key === 'A') {
        btnTurnRef.current.click();
      }
    };

    document.addEventListener('keydown', handleKeyPress);

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
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };

  }, [turnNumber])
  
  return (
    <button
    ref={btnTurnRef}
      onClick={() => {incrementTurn()}}
      className="w-40 h-40 border-2 grid place-items-center"
    >
      Turn
      <kbd className="bg-gray-300 px-2">A</kbd>
    </button>
  );
}

export default TurnBtn;
