import React, { useEffect, useRef } from 'react'

type Props = {setKey:string, title:string,skill:string, setSkill:Function}

function BtnTelCorrectSkill({setKey, title ,skill ,setSkill}: Props) {
    const btnRef: any = useRef();

      

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
    <button onClick={()=>{setSkill(skill.slice(0, -1))}} className="w-full h-full flex flex-col items-center justify-center gap-1  rounded-lg bg-gradient-to-r from-rose-500 via-red-400 to-red-500 text-white backdrop-blur-lg shadow-md ">{title}</button>
  )
}

export default BtnTelCorrectSkill