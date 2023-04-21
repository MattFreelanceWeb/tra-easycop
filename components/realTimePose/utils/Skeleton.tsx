import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { angleCalc, definePostionFromAngle } from "@/utils/function/angleCalc";

type Props = { posenetPoses: any | null };

function Skeleton({ posenetPoses }: Props) {
  const canvasRef: any = useRef(null);


  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = 640;
    canvas.height = 480;

    ctx.fillStyle = 'red'
    ctx.font = "15px Arial" 

    if (posenetPoses) {
      const keypoints: any[] = posenetPoses[0].keypoints;

      keypoints.forEach( item => {
        ctx.fillRect( item.x , item.y, 10, 10),ctx.fillText(item.name, item.x,item.y)
       })
    }
  }, [posenetPoses])

  return (
    <canvas
      ref={canvasRef}
      className="border-2 border-red-500 absolute w-[640px] h-[480px] flex flex-col items-center justify-center"
    >
      <div className="w-full h-full border-4 border-green-500 relative">
        {posenetPoses &&
          posenetPoses[0].keypoints.map(
            (item: { x: number; y: number }, i: number) => (
              <div
                key={i}
                style={{ left: `(${item.x}px)`, top: `(${item.y}px)` }}
                className="w-2 h-2 bg-red-500 absolute"
              ></div>
            )
          )}
      </div>

    </canvas>
  );
}

export default Skeleton;