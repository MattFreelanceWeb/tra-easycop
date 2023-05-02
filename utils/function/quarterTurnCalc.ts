type position = {x: number, y: number, score:number, name:string};

export const quarterTurnCalc = (posShoulderRight: position, posHipsRight: position, posShoulderLeft:position, posHipsLeft:position) => {
    //x0 = left
    //y0 = top

    let quarterTurn = 0
 
    let diffShoulderHipsRightX = 0
    let diffShoulderHipsRightY = 0
    let diffShoulderHipsLeftX = 0
    let diffShoulderHipsLeftY = 0

    diffShoulderHipsRightX = Math.sign(posShoulderRight.x - posHipsRight.x)
    diffShoulderHipsRightY = Math.sign(posShoulderRight.y - posHipsRight.y)
    diffShoulderHipsLeftX = Math.sign(posShoulderLeft.x - posHipsLeft.x)
    diffShoulderHipsLeftY = Math.sign(posShoulderLeft.y - posHipsLeft.y)

    // case rightshoulder faceCam
    if( diffShoulderHipsRightX > 0 && diffShoulderHipsRightY < 0){
        quarterTurn = 1
    }
    if(diffShoulderHipsRightX > 0 && diffShoulderHipsRightY > 0){
        quarterTurn = 2
    }
    if(diffShoulderHipsRightX < 0 && diffShoulderHipsRightY > 0 ){
        quarterTurn = 3
    }
    if(diffShoulderHipsRightX < 0 && diffShoulderHipsRightY < 0 ){
        quarterTurn = 4
    }

    return quarterTurn
}