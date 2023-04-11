import React, { useState } from "react";
import BtnNumber from "./utils/BtnNumber";

type Props = {};

function TricksToNumeric({}: Props) {

  const [numberQuarterTurn, setNumberQuarterTurn] = useState<number>(0);
  const [numberTwistTurnOne, setNumberTwistTurnOne] = useState<number>(0);
  const [numberTwistTurnTwo, setNumberTwistTurnTwo] = useState<number>(0);
  const [numberTwistTurnThree, setNumberTwistTurnThree] = useState<number>(0);
  const [numberTwistTurnFour, setNumberTwistTurnFour] = useState<number>(0);



  return (
    <div className="h-full w-full max-w-4xl md:max-h-[414px] grid backdrop-blur-md bg-gradient-to-r from-gray-100 to-gray-300  overflow-y-auto md:rounded-md md:shadow-lg">
      <div className="h-full w-full flex flex-col items-start justify-start gap-4 px-4 md:flex-row">
        quarter turn :
        <BtnNumber
          number={numberQuarterTurn}
          setNumber={setNumberQuarterTurn}
          maxNumber={16}
        />
        twist turn one :
        <BtnNumber
          number={numberTwistTurnOne}
          setNumber={setNumberTwistTurnOne}
          maxNumber={9}
        />
        {numberQuarterTurn >= 7 && (
          <>
            twist turn two :
            <BtnNumber
              number={numberTwistTurnTwo}
              setNumber={setNumberTwistTurnTwo}
              maxNumber={9}
            />
          </>
        )}
        {numberQuarterTurn >= 11 && (
          <>
            {" "}
            twist turn three :
            <BtnNumber
              number={numberTwistTurnThree}
              setNumber={setNumberTwistTurnThree}
              maxNumber={9}
            />
          </>
        )}
        {numberQuarterTurn >= 15 && (
          <>
            {" "}
            twist turn four :
            <BtnNumber
              number={numberTwistTurnFour}
              setNumber={setNumberTwistTurnFour}
              maxNumber={9}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default TricksToNumeric;
