import React, { useState, useRef, useCallback, useEffect } from "react";
import Webcam from "react-webcam";
import * as poseDetection from "@tensorflow-models/pose-detection";
import * as tf from "@tensorflow/tfjs-core";
// Register one of the TF.js backends.
import "@tensorflow/tfjs-backend-webgl";
import Draw2dCanvas from "./utils/Draw2dCanvas";
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

  // const detect = async (detector: any) => {
  //   if (
  //     typeof webcamRef.current !== undefined &&
  //     webcamRef.current !== null &&
  //     webcamRef.current.video.readyState === 4
  //   ) {
  //     const videoWidth = 640;
  //     const videoHeight = 480;

  //     const video = webcamRef.current.video;
  //     webcamRef.current.video.width = videoWidth;
  //     webcamRef.current.video.height = videoHeight;

  //     const poses = await detector.estimatePoses(video);
  //     setPosenetPoses(poses);
  //     console.log(poses);
  //   }
  // };

  // useEffect(() => {
  //   const runMovenet = async () => {
  //     const detectorConfig = {
  //       modelType: poseDetection.movenet.modelType.SINGLEPOSE_LIGHTNING,
  //     };
  //     const detector = await poseDetection.createDetector(
  //       poseDetection.SupportedModels.MoveNet,
  //       detectorConfig
  //     );

  //     setInterval(() => {
  //       detect(detector);
  //     }, 100);
  //   };
  //   togglePosenet && runMovenet();
  // }, [togglePosenet]);

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
      console.log(poses)
    }
  };


  useEffect(() => {
    const runMediapipe = async () => {
      const model = poseDetection.SupportedModels.BlazePose;
      const detectorConfig: any = {
        runtime: "mediapipe",
        solutionPath: "https://cdn.jsdelivr.net/npm/@mediapipe/pose",
        // or 'base/node_modules/@mediapipe/pose' in npm.
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
        {/* <canvas ref={canvaRef} className="border-2 border-red-500 absolute w-[640px] h-[480px]"></canvas> */}
        {/* <Draw2dCanvas posenetPoses={posenetPoses} /> */}
        {/* <Skeleton posenetPoses={posenetPoses} /> */}
        <button
          onClick={() => {
            setTogglePosenet(!togglePosenet);
          }}
          className="self-end border-2 border-red-500 px-12 py-2 rounded-lg active:scale-95 duration-100"
        >
          {` Posenet active : ${togglePosenet}`}{" "}
        </button>
      </div>

      {/* <ShowPosition posenetPoses={posenetPoses}/> */}
    </div>
  );
}

export default WebcamCapture;
