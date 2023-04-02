import React, { useEffect, useRef } from 'react'

type Props = {
    title:string
    setKey:string
    skill:string
    setSkill:Function
    position:string
    setPosition:Function
}

function BtnTelValidate({title,setKey, skill, setSkill, position, setPosition}: Props) {
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
    <button ref={btnRef} className=' border-2 rounded-lg' onClick={()=>{console.log(skill +' ' + position)}}> <span className=''>{title}</span></button>
  )
}

export default BtnTelValidate