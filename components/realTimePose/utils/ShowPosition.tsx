import { angleCalc, definePostionFromAngle } from "@/utils/function/angleCalc";
import { quarterTurnCalc } from "@/utils/function/quarterTurnCalc";
import React, { useEffect, useState } from "react";

type Props = { posenetPoses: any | null };

function ShowPosition({ posenetPoses }: Props) {
  const [positionFromAngle, setPositionFromAngle] = useState<string | null>(
    null
  );
  const [angleShoulderHipsKneeRight, setAngleShoulderHipsKneeRight] =
    useState<number>(0);
  const [angleShoulderHipsKneeLeft, setAngleShoulderHipsKneeLeft] =
    useState<number>(0);
  const [angleHipsKneeAnkleLeft, setAngleHipsKneeAnkleLeft] =
    useState<number>(0);
  const [angleHipsKneeAnkleRight, setAngleHipsKneeAnkleRight] =
    useState<number>(0);

  const [quarterOne, setQuarterOne] = useState<Boolean>(false);
  const [quarterTwo, setQuarterTwo] = useState<Boolean>(false);
  const [quarterThree, setQuarterThree] = useState<Boolean>(false);
  const [quarterFour, setQuarterFour] = useState<Boolean>(false);

  const [quarterTurnNumber, setQuarterTurnNumber] = useState<Number>(0)

  const validateQuarter = (actualQuarter: Number) => {
    switch (actualQuarter) {
      case 1:
        setQuarterOne(true);
        break;
      case 2:
        setQuarterTwo(true);
        break;
      case 3:
        setQuarterThree(true);
        break;
      case 4:
        setQuarterFour(true);
        break;
    }
  };

  useEffect(() => {
    if (posenetPoses) {
      if (posenetPoses[0]) {
        let shoulderLeft = posenetPoses[0].keypoints[12];
        let hipsLeft = posenetPoses[0].keypoints[24];
        let kneeLeft = posenetPoses[0].keypoints[26];
        let ankleLeft = posenetPoses[0].keypoints[28];

        setAngleShoulderHipsKneeLeft(
          angleCalc(shoulderLeft, hipsLeft, kneeLeft)
        );
        setAngleHipsKneeAnkleLeft(angleCalc(hipsLeft, kneeLeft, ankleLeft));

        let shoulderRight = posenetPoses[0].keypoints[11];
        let hipsRight = posenetPoses[0].keypoints[23];
        let kneeRight = posenetPoses[0].keypoints[25];
        let ankleRight = posenetPoses[0].keypoints[27];

        setAngleShoulderHipsKneeRight(
          angleCalc(shoulderRight, hipsRight, kneeRight)
        );
        setAngleHipsKneeAnkleRight(angleCalc(hipsRight, kneeRight, ankleRight));

        setPositionFromAngle(
          definePostionFromAngle(
            angleShoulderHipsKneeLeft,
            angleHipsKneeAnkleLeft,
            angleShoulderHipsKneeRight,
            angleHipsKneeAnkleRight
          )
        );

        validateQuarter(
          quarterTurnCalc(
            posenetPoses[0].keypoints[11],
            posenetPoses[0].keypoints[23],
            posenetPoses[0].keypoints[12],
            posenetPoses[0].keypoints[24]
          )
        );
      }

      const Arr = [];

      quarterOne && Arr.push(quarterOne);
      quarterTwo && Arr.push(quarterTwo);
      quarterThree && Arr.push(quarterThree);
      quarterFour && Arr.push(quarterFour);

      setQuarterTurnNumber(Arr.length)
    }
  }, [
    posenetPoses,
    angleHipsKneeAnkleLeft,
    angleShoulderHipsKneeLeft,
    angleHipsKneeAnkleRight,
    angleShoulderHipsKneeRight,
    quarterOne,
    quarterTwo,
    quarterThree,
    quarterFour,
    setAngleHipsKneeAnkleLeft,
    setAngleShoulderHipsKneeLeft,
    setAngleHipsKneeAnkleRight,
    setAngleShoulderHipsKneeRight,
  ]);

  const showQuarterTun = () => {
    if (posenetPoses) {
      if (posenetPoses[0]) {
        return <p>quarterTurn :{`${quarterTurnNumber}`}</p>;
      }
    }
  };

  return (
    <div className="text-xl text-red-500 py-12  grid place-items-center">
      <p>position :{positionFromAngle} </p>
      <p>angle Hips : {angleShoulderHipsKneeLeft} </p>
      <p>angle Knee : {angleHipsKneeAnkleLeft} </p>
      {showQuarterTun()}
    </div>
  );
}

export default ShowPosition;
