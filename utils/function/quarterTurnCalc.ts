type position = {x: number, y: number, score:number, name:string};

export const quarterTurnCalc = (posShoulder: position, posHips: position, ) => {
    //x0 = left
    //y0 = top

    let quarterTurn = 0
    // case rightshoulder hips
    let diffShoulderHipsX = 0
    let diffShoulderHipsY = 0

    diffShoulderHipsX = Math.sign(posShoulder.x - posHips.x)
    diffShoulderHipsY = Math.sign(posShoulder.y - posHips.y)

    if( diffShoulderHipsX > 0 && diffShoulderHipsY < 0){
        quarterTurn = 1
    }
    if(diffShoulderHipsX > 0 && diffShoulderHipsY > 0){
        quarterTurn = 2
    }
    if(diffShoulderHipsX < 0 && diffShoulderHipsY > 0 ){
        quarterTurn = 3
    }
    if(diffShoulderHipsX < 0 && diffShoulderHipsY < 0 ){
        quarterTurn = 4
    }

    return quarterTurn
}