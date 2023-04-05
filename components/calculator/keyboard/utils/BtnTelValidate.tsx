import { calc } from "@/utils/function/calc";
import { isDuplicateObject } from "@/utils/function/isDuplicateObject";
import React, { useEffect, useRef } from "react";

type Props = {
  title: string;
  setKey: string;
  skill: string;
  setSkill: Function;
  position: string;
  setPosition: Function;
  routine: any[];
};

function BtnTelValidate({
  title,
  setKey,
  skill,
  setSkill,
  position,
  setPosition,
  routine,
}: Props) {
  const btnRef: any = useRef();

  let Skill = {
    skill,
    position,
    difficulty: calc(Number(skill), position),
  };

  const reset = () =>{
    setSkill('')
    setPosition('')
  }

  const addRoutine = () => {
    if(routine.length < 10){
      if(isDuplicateObject(Skill,routine)){
        Skill.difficulty = 0
      }
      routine.push(Skill);
      reset()
    }
  };

  useEffect(() => {
    {
      /* on the keypress define in the prop setKey lunch the onClick event*/
    }
    const handleKeyPress = (event: any) => {
      if (event.key === setKey) {
        btnRef.current.click();
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [setKey]);
  return (
    <button
      ref={btnRef}
      className="w-full h-full flex flex-col items-center justify-center  rounded-lg bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 text-white backdrop-blur-lg shadow-md "
      onClick={() => {
        addRoutine();
      }}
    >
      {" "}
      <span className="">{title}</span>
    </button>
  );
}

export default BtnTelValidate;
