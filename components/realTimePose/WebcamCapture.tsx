import React, { useState, useRef, useEffect } from "react";
import Webcam from "react-webcam";
import * as poseDetection from "@tensorflow-models/pose-detection";
// Register one of the TF.js backends.
import "@tensorflow/tfjs-backend-webgl";
import Skeleton from "./utils/Skeleton";
import ShowPosition from "./utils/ShowPosition";

// mediapipe
import "@tensorflow/tfjs-core";
// Register WebGL backend.
import "@tensorflow/tfjs-backend-webgl";
import "@mediapipe/pose";

type Props = {};

function WebcamCapture({}: Props) {
  const [togglePosenet, setTogglePosenet] = useState(false);
  const [posenetPoses, setPosenetPoses] = useState(null);

  const webcamRef: any = useRef(null);

  const detect = async (detector: any) => {
    if (
      typeof webcamRef.current !== undefined &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      const videoWidth = 640;
      const videoHeight = 480;

      const video = webcamRef.current.video;
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;
      const estimationConfig = { enableSmoothing: true };
      const poses = await detector.estimatePoses(video, estimationConfig);
      setPosenetPoses(poses)
    }
  };


  useEffect(() => {
    const runMediapipe = async () => {
      const model = poseDetection.SupportedModels.BlazePose;
      const detectorConfig: any = {
        runtime: "mediapipe",
        solutionPath: "https://cdn.jsdelivr.net/npm/@mediapipe/pose",
      };
      const detector = await poseDetection.createDetector(model, detectorConfig);
  
      setInterval(() => {
        detect(detector);
      }, 100);
    };
    togglePosenet && runMediapipe()
  }, [togglePosenet])
  

  return (
    <div className="w-full h-full flex gap-4">
      <div className="relative flex w-full h-full bg-gray-500 items-center justify-center py-10">
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          className=" absolute "
        />

        {/* <Skeleton posenetPoses={posenetPoses} /> crash when keypoint == undefined */}
        <button
          onClick={() => {
            setTogglePosenet(!togglePosenet);
          }}
          className="self-end border-2 border-red-500 px-12 py-2 rounded-lg active:scale-95 duration-100"
        >
          {` Posenet active : ${togglePosenet}`}{" "}
        </button>
      </div>

      <ShowPosition posenetPoses={posenetPoses}/>
    </div>
  );
}

export default WebcamCapture;
