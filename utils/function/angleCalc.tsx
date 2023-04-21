type position = {x: number, y: number, score:number, name:string};

export const angleCalc = (posA: position, posB: position, posC: position) => {
const a = [posA.x,posA.y]
const b = [posB.x,posB.y]
const c = [posC.x,posC.y]

  const d = [a, b, c];
  let radians:number =
    Math.atan2(c[1] - b[1], c[0] - b[0]) - Math.atan2(a[1] - b[1], a[0] - b[0]);
  let angle:number = Math.abs((radians * 180.0) / Math.PI);

  if (angle>180){
    angle = 360-angle
  }

  return angle
};


export const definePostionFromAngle = (angleShoulderHipsKneeLeft:number, angleHipsKneeAnkleLeft:number ,angleShoulderHipsKneeRight:number, angleHipsKneeAnkleRight:number) => {
    let position:string
    if(angleShoulderHipsKneeLeft <=90 && angleHipsKneeAnkleLeft<=90 ){
        position= '°'
    } else if(angleShoulderHipsKneeRight <=90 && angleHipsKneeAnkleRight<=90) {
        position ='°'
    }else if(angleShoulderHipsKneeLeft <= 90 && angleHipsKneeAnkleLeft>=90){
        position ='<'
    } else if(angleShoulderHipsKneeRight <= 90 && angleHipsKneeAnkleRight>=90){
        position='<'
    } else {
        position = '/'
    }

    return position
}