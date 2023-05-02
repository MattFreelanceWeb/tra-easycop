import React, { useEffect, useRef } from 'react'

type Props = {posenetPoses:any[]}

function MediapipeSkeleton({posenetPoses}: Props) {
    const canvasRef:any = useRef();

    useEffect(() => {
      const canvas:any = canvasRef.current;
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
  
      // draw lines
      ctx.strokeStyle = "#000000";
      ctx.beginPath();
      ctx.moveTo(posenetPoses[0].x, posenetPoses[0].y);
      ctx.lineTo(posenetPoses[1].x, posenetPoses[1].y);
      ctx.lineTo(posenetPoses[2].x, posenetPoses[2].y);
      ctx.lineTo(posenetPoses[3].x, posenetPoses[3].y);
      ctx.stroke();
  
      ctx.beginPath();
      ctx.moveTo(posenetPoses[0].x, posenetPoses[0].y);
      ctx.lineTo(posenetPoses[4].x, posenetPoses[4].y);
      ctx.lineTo(posenetPoses[5].x, posenetPoses[5].y);
      ctx.lineTo(posenetPoses[6].x, posenetPoses[6].y);
      ctx.stroke();
  
      ctx.beginPath();
      ctx.moveTo(posenetPoses[1].x, posenetPoses[1].y);
      ctx.lineTo(posenetPoses[7].x, posenetPoses[7].y);
      ctx.stroke();
  
      ctx.beginPath();
      ctx.moveTo(posenetPoses[2].x, posenetPoses[2].y);
      ctx.lineTo(posenetPoses[9].x, posenetPoses[9].y);
      ctx.stroke();
  
      ctx.beginPath();
      ctx.moveTo(posenetPoses[3].x, posenetPoses[3].y);
      ctx.lineTo(posenetPoses[10].x, posenetPoses[10].y);
      ctx.stroke();
  
      ctx.beginPath();
      ctx.moveTo(posenetPoses[7].x, posenetPoses[7].y);
      ctx.lineTo(posenetPoses[11].x, posenetPoses[11].y);
      ctx.lineTo(posenetPoses[13].x, posenetPoses[13].y);
      ctx.stroke();
  
      ctx.beginPath();
      ctx.moveTo(posenetPoses[9].x, posenetPoses[9].y);
      ctx.lineTo(posenetPoses[12].x, posenetPoses[12].y);
      ctx.lineTo(posenetPoses[14].x, posenetPoses[14].y);
      ctx.stroke();
  
      ctx.beginPath();
      ctx.moveTo(posenetPoses[11].x, posenetPoses[11].y);
      ctx.lineTo(posenetPoses[15].x, posenetPoses[15].y);
      ctx.stroke();
  
      ctx.beginPath();
      ctx.moveTo(posenetPoses[12].x, posenetPoses[12].y);
      ctx.lineTo(posenetPoses[16].x, posenetPoses[16].y);
      ctx.stroke();
    }, [posenetPoses]);
  
    return (
      <canvas
        ref={canvasRef}
        width={500}
        height={700}
        style={{ border: "1px solid #000000" }}
      />
    );
}

export default MediapipeSkeleton