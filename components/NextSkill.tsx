import React, { ReactNode, useEffect, useRef } from "react";

type Props = {
  setToggleCount:Function,
  setTurnNumber: Function;
  setTurnNumericValue: Function;
  setTwistNumber: Function;
  setTwistTurnOne: Function;
  setTwistTurnTwo: Function;
  setTwistTurnThree: Function;
  setTwistTurnFour: Function;
  setTwistNumericValue: Function;
  setPosition: Function;
  setQuarterTurnNumber:Function;
  setQuarterNumericValue:Function
  position: string;
  turnNumericValue: number;
  twistNumericValue: number;
  quarterTurnNumericValue:number
  skillsArray:[{}],
  setSkillsArray:Function
};

function NextSkill({
  setTurnNumber,
  setTurnNumericValue,
  setToggleCount,
  setTwistNumber,
  setTwistTurnOne,
  setTwistTurnTwo,
  setTwistTurnThree,
  setTwistTurnFour,
  setTwistNumericValue,
  setPosition,
  setQuarterTurnNumber,
  setQuarterNumericValue,
  position,
  turnNumericValue,
  twistNumericValue,
  quarterTurnNumericValue,
  skillsArray,
  setSkillsArray
}: Props) {

  const reset = () =>{
    setTurnNumber(0)
    setTurnNumericValue(0)
    setToggleCount(0)
    setTwistNumber(0)
    setTwistTurnOne(0)
    setTwistTurnTwo(0)
    setTwistTurnThree(0)
    setTwistTurnFour(0)
    setTwistNumericValue(0)
    setQuarterTurnNumber(0)
    setQuarterNumericValue(0)
    setPosition('')
  }

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

  const addSkills = () => {
    let numericSkills:number = twistNumericValue + turnNumericValue + quarterTurnNumericValue

    let skills:Object= {
      numericSkills,
      position,
      difficulty:calc(numericSkills, position)
    }

    {/* ensure that you don't have an empty object in your array and that the cap is 10 skills*/ }
    if(numericSkills !== 0 && skillsArray.length < 11){
      skillsArray.push(skills)
    }

  }

  const btnNextRef:any = useRef();

  useEffect(() => {
    const handleKeyPress = (event:any) => {
      if (event.code === 'Space' ) {
        btnNextRef.current.click();
      }
    };
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <button ref={btnNextRef} className="px-12 py-2 border-2 grid place-items-center" onClick={() => {addSkills(),reset()}}>
      Next Skill
      <kbd className="bg-gray-300 px-2">(space)</kbd>
    </button>
  );
}

export default NextSkill;
