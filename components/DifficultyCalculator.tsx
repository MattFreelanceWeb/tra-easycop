import React, { ReactNode} from 'react'

type Props = {numericValue:number,position:string, difficultyArray:any[]}

function DifficultyCalculator({numericValue, position, difficultyArray}: Props) {

    let calc = (numericValue:number , position:string) => {
        let difficulty:number | ReactNode 

        if(numericValue < 40){
            difficulty=numericValue
        } else if(numericValue < 800){

            let bonus:number = 1
            if(position === 'pike' || 'straight'){bonus = 2}
            if(position === 'tuck') {bonus = 1}

            let numberTurn:string | number = ''
            let numberTwist:string | number =''
            let numericValueString:string = numericValue.toString()
            let numberString:string[] = numericValueString.split('')
            numberTurn = Number(numberString[0])
            numberTwist = Number(numberString[1])
            if(numberTwist > 0){ bonus = 1}

            difficulty = numberTurn + numberTwist + bonus

        } else if(numericValue < 12000) {

            let bonus:number = 2
            if(position === 'pike' || 'straight'){bonus = 4}
            if(position === 'tuck') {bonus = 2}

            let numberTurn:string | number = ''
            let numberTwistTurnOne:string | number =''
            let numberTwistTurnTwo:string | number =''
            let numericValueString:string = numericValue.toString()
            let numberString:string[] = numericValueString.split('')
            numberTurn = Number(numberString[0])
            numberTwistTurnOne = Number(numberString[1])
            numberTwistTurnTwo = Number(numberString[2])

            difficulty = numberTurn + numberTwistTurnOne + numberTwistTurnTwo + bonus
        } else if (numericValue < 160000) {
            
            let bonus:number = 4
            if(position === 'pike' || 'straight'){bonus = 7}
            if(position === 'tuck') {bonus = 4}

            let numberTurn:string | number = ''
            let numberTwistTurnOne:string | number =''
            let numberTwistTurnTwo:string | number =''
            let numberTwistTurnThree:string | number =''
            let numericValueString:string = numericValue.toString()
            let numberString:string[] = numericValueString.split('')
            numberTurn = (Number(numberString[0]) * 10) + Number(numberString[1])
            numberTwistTurnOne = Number(numberString[2])
            numberTwistTurnTwo = Number(numberString[3])
            numberTwistTurnThree = Number(numberString[4])

            difficulty = numberTurn + numberTwistTurnOne + numberTwistTurnTwo + numberTwistTurnThree + bonus
        } else if(numericValue >= 160000) {
            
            let bonus:number = 6
            if(position === 'pike' || 'straight'){bonus = 10}
            if(position === 'tuck') {bonus = 6}

            let numberTurn:string | number = ''
            let numberTwistTurnOne:string | number =''
            let numberTwistTurnTwo:string | number =''
            let numberTwistTurnThree:string | number =''
            let numberTwistTurnFour:string | number =''
            let numericValueString:string = numericValue.toString()
            let numberString:string[] = numericValueString.split('')
            numberTurn = (Number(numberString[0]) * 10) + Number(numberString[1])
            numberTwistTurnOne = Number(numberString[2])
            numberTwistTurnTwo = Number(numberString[3])
            numberTwistTurnThree = Number(numberString[4])
            numberTwistTurnFour = Number(numberString[5])


            difficulty = numberTurn + numberTwistTurnOne + numberTwistTurnTwo + numberTwistTurnThree + numberTwistTurnFour + bonus
        }


        return difficulty
    }

  return (
    <div>{calc( numericValue, position) }</div>
  )
}

export default DifficultyCalculator