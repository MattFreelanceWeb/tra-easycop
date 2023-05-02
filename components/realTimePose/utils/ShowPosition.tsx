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
      }
    }
  }, [
    posenetPoses,
    angleHipsKneeAnkleLeft,
    angleShoulderHipsKneeLeft,
    angleHipsKneeAnkleRight,
    angleShoulderHipsKneeRight,
    setAngleHipsKneeAnkleLeft,
    setAngleShoulderHipsKneeLeft,
    setAngleHipsKneeAnkleRight,
    setAngleShoulderHipsKneeRight,
  ]);
  return (
    <div className="text-xl text-red-500 py-12  grid place-items-center">
      <p>position :{positionFromAngle} </p>
      <p>angle Hips : {angleShoulderHipsKneeLeft} </p>
      <p>angle Knee : {angleHipsKneeAnkleLeft} </p>
    </div>
  );
}

export default ShowPosition;
