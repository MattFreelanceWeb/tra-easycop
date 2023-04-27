import React, { useEffect, useRef } from "react";

type Props = { posenetPoses: any[] | null };

function Draw2dCanvas({ posenetPoses }: Props) {
  const drawSkeleton = (keypoints: any, ctx: any) => {
    const skeleton = [
      [0, 1],
      [0, 2],
      [1, 3],
      [2, 4],
      [0, 5],
      [0, 6],
      [5, 7],
      [7, 9],
      [6, 8],
      [8, 10],
      [5, 6],
      [5, 11],
      [6, 12],
      [11, 12],
      [11, 13],
      [13, 15],
      [12, 14],
      [14, 16],
    ];

    ctx.lineWidth = 2;

    skeleton.forEach(([start, end]) => {
      const startPoint = keypoints[start];
      const endPoint = keypoints[end];

      if (
        startPoint &&
        endPoint &&
        startPoint.score >= 0.5 &&
        endPoint.score >= 0.5
      ) {
        ctx.beginPath();
        ctx.moveTo(startPoint.x, startPoint.y);
        ctx.lineTo(endPoint.x, endPoint.y);
        ctx.stroke();
      }
    });
  };

  const drawKeypoints = (keypoints: any, ctx: any) => {
    ctx.fillStyle = "#FF0000";
    ctx.strokeStyle = "#FF0000";
    ctx.lineWidth = 1;

    keypoints.forEach((keypoint: any) => {
      if (keypoint.score >= 0.5) {
        ctx.beginPath();
        ctx.arc(keypoint.x, keypoint.y, 3, 0, 2 * Math.PI);
        ctx.fill();
      }
    });
  };

  const canvasRef: any = useRef(null);

  useEffect(() => {
    const drawPose = (keypoints: any, ctx: any) => {
      drawSkeleton(keypoints, ctx);
      drawKeypoints(keypoints, ctx);
    };

    if (posenetPoses) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      canvas.width = 640;
      canvas.height = 480;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (posenetPoses && posenetPoses[0].keypoints) {
        drawPose(posenetPoses[0].keypoints, ctx);
      }
    }
  }, [posenetPoses]);

  return (
    <canvas
      ref={canvasRef}
      className="border-2 border-red-500 absolute w-[640px] h-[480px] z-50"
    ></canvas>
  );
}

export default Draw2dCanvas;
