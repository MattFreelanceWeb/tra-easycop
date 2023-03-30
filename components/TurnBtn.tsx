import React, { useEffect, useState } from "react";

type Props = {};

function TurnBtn({}: Props) {
  const [turnNumber, setTurnNumber] = useState<number>(0);

  let incrementNumber = () => {
    if(turnNumber >= 4){
      return 4
    }
    setTurnNumber(turnNumber + 1)
  }

  let numericTurn = (turnNumber: number) => {
    switch (turnNumber) {
      case 0:
        console.log("no turn");
        break;
      case 1:
        console.log('40')
        break
      case 2:
        console.log('800')
        break
      case 3:
        console.log('12000')
        break
      case 4 :
        console.log('160000')
    }
  };

  useEffect(() => {
    numericTurn(turnNumber)
  }, [turnNumber])
  

  return (
    <button
      onClick={() => {
        incrementNumber();
      }}
      className="w-40 h-40 border-2 grid place-items-center"
    >
      Turn
    </button>
  );
}

export default TurnBtn;
